---
modified: 2025-05-20
created: 2025-05-03
---
My friend and I used to use Google Sheets as our primary means of communication from about 2014-2019. Did you know Google Sheets has a maximum file size? We didn't. [Until we hit it](https://support.google.com/drive/answer/37603?hl=en#:~:text=Up%20to%2010%20million%20cells%20or%2018%2C278%20columns%20(column%20ZZZ)%20for%20spreadsheets%20that%20are%20created%20in%20or%20converted%20to%20Google%20Sheets.).  When I started hearing about chatbots and vocal clones of popular creators based on all the data they have out there, I got to thinking.... I have that.

I have the spreadsheet, I have the version history, heck I could make TWO chatbots based on who edited what cell. I- Oh wait... A few years back I made a change, reverted to a previous version, and it completely wiped the proper editing history. Dang.

...But then I found out Google Drive has an API. It can compare and contrast every single previous version and you can construct the most detailed version history you ever did see.

I never got further than making a script for it and thinking about running it, since I was taking Computer Science 2 at the time and needed to [[CS2 Final Project - SkipList|focus on that]] instead.

I'll get back to it one day, after I have a stable income and can dedicate more time to my sillier projects. These links and whatnot are for my own reference, since I forgot about them until just now

- https://developers.google.com/apps-script
- https://developers.google.com/workspace/drive/api/guides/about-sdk
- https://developers.google.com/workspace/drive/activity/v2
- https://developers.google.com/workspace/sheets/api/guides/concepts

https://lukastymo.com/posts/019-pandas-and-nltk-sentiment-for-data-analysis/

- Prototyping: https://huggingface.co/docs/transformers/en/model_doc/gpt2
- Big girl versions: https://huggingface.co/docs/transformers/en/model_doc/gptj

https://chatgpt.com/c/671beb85-bad8-800b-bef0-5c9abac59129

![[Sheetchat Plan#Old Plan]]

```python
pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client pandas gspread oauth2client
```

```python
import os
import io
import datetime
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload
import pandas as pd
import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Set up Google Drive and Sheets API clients
SCOPES = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets']
CREDS_FILE = 'credentials.json'
SERVICE_ACCOUNT_FILE = 'credentials.json'
FILE_ID = 'YOUR_GOOGLE_SHEET_FILE_ID'
COMPANION_SHEET_ID = 'YOUR_COMPANION_SHEET_ID'
DATE_CUTOFF = datetime.datetime(2017, 10, 27)

# Authenticate Google Drive and Sheets API
credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES)
drive_service = build('drive', 'v3', credentials=credentials)
gc = gspread.authorize(ServiceAccountCredentials.from_json_keyfile_name(CREDS_FILE, SCOPES))

def get_revisions(file_id):
    """Retrieve all revisions of a file up to and including the cutoff date."""
    revisions = []
    page_token = None
    while True:
        response = drive_service.revisions().list(
            fileId=file_id, pageToken=page_token).execute()
        for revision in response.get('revisions', []):
            mod_time = datetime.datetime.strptime(revision['modifiedTime'], '%Y-%m-%dT%H:%M:%S.%fZ')
            # Include revisions up to and on the cutoff date but stop after it
            if mod_time.date() == DATE_CUTOFF.date():
                revisions.append(revision)
            elif mod_time < DATE_CUTOFF:
                revisions.append(revision)
            else:
                return revisions  # Stop if we go past the cutoff date (after October 27, 2017)
        page_token = response.get('nextPageToken', None)
        if page_token is None:
            break
    return revisions

def download_revision(file_id, revision_id, filename):
    """Download a revision of a Google Sheets file as Excel."""
    request = drive_service.revisions().export_media(
        fileId=file_id, revisionId=revision_id, mimeType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    fh = io.FileIO(filename, 'wb')
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while not done:
        status, done = downloader.next_chunk()
    fh.close()

def compare_and_update(companion_sheet_id, old_file, new_file, editor_email, mod_time):
    """Compare two revisions and update changes in the companion sheet."""
    old_df = pd.read_excel(old_file, sheet_name=None)
    new_df = pd.read_excel(new_file, sheet_name=None)
    
    # Authenticate companion sheet
    companion_sheet = gc.open_by_key(companion_sheet_id)
    
    for sheet_name in new_df.keys():
        if sheet_name not in old_df:
            continue  # Skip if sheet not in both revisions
        old_sheet = old_df[sheet_name]
        new_sheet = new_df[sheet_name]
        
        # Ensure dimensions match by filling NaNs (handle potential dimension mismatch)
        old_sheet = old_sheet.fillna('').astype(str)
        new_sheet = new_sheet.fillna('').astype(str)

        # Identify changed cells
        changes = (old_sheet != new_sheet) & ~new_sheet.isna()
        
        # Access or create the companion tab
        try:
            comp_tab = companion_sheet.worksheet(sheet_name)
        except gspread.WorksheetNotFound:
            comp_tab = companion_sheet.add_worksheet(title=sheet_name, rows=new_sheet.shape[0], cols=new_sheet.shape[1])

        for row in range(changes.shape[0]):
            for col in range(changes.shape[1]):
                if changes.iat[row, col]:  # If there's a change
                    cell = f"{chr(65 + col)}{row + 1}"  # Convert col to letter
                    comp_tab.update_acell(cell, f"{editor_email} | {mod_time}")

def main():
    # Get all relevant revisions
    revisions = get_revisions(FILE_ID)
    previous_file = "previous_revision.xlsx"
    current_file = "current_revision.xlsx"
    
    for i in range(len(revisions) - 1):
        # Download each revision as needed
        revision = revisions[i]
        next_revision = revisions[i + 1]
        
        download_revision(FILE_ID, revision['id'], previous_file)
        download_revision(FILE_ID, next_revision['id'], current_file)
        
        # Get editor and modification time
        editor_email = revision.get('lastModifyingUser', {}).get('emailAddress', 'Unknown')
        mod_time = revision.get('modifiedTime')
        
        # Compare revisions and update the companion sheet
        compare_and_update(COMPANION_SHEET_ID, previous_file, current_file, editor_email, mod_time)

        # Move to next revision
        os.remove(previous_file)
        os.rename(current_file, previous_file)

    # Cleanup
    if os.path.exists(previous_file):
        os.remove(previous_file)
    if os.path.exists(current_file):
        os.remove(current_file)

if __name__ == '__main__':
    main()

```
