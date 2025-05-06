---
modified: 2025-05-04
created: 2024-10-28
---
## Milestone 1: Prep

### Database Schema
- users (collection):
	- userId generated from auth at log in (document)
		- canvases (collection)
			- individual canvas 1 (document)
				- views (collection)
					- view (document)
						- card locations (fields?)
							- card connections (collection)
								- connection (document)
									- color (field)
									- arrow (field)
									- line (field)
				- cards (collection)
				- state (field)
				- recycle bin (collection)
			- individual canvas 2 (document)
				- same stuff as individual canvas 1
- settings (collection)
- templates (collection)
	- layout templates (collection)
	- card templates (collection)

[[Figma Wireframe]]

- [ ] Basic MERN project set up with a local mongodb database
- [ ] Create users table
	- database of all saved users and a link to their canvases table
- [ ] Create user table per user in users table
	- all canvases created by that user or that the user has edit access on
	- all layout templates saved by that user
	- all card templates save by that user
- [ ] Create canvas table per canvas in user table
	* saved customizer state
	* links to all cards in the canvas
	* links to saved views in canvas
	* saved recycle bin state
- [ ] Create view table per view in canvas table
	* location information for all cards in canvas
	* connection information for all cards in canvas
	* display data for every connection
- [ ] Create cards table per canvas
	* every field
	* display data for each field
	* display data for card and card border
## Milestone 2: Hello World
- [ ] Draggable cards
- [ ] Expand card details and view full database card
- [ ] Pin and unpin card fields
- [ ] Autosized cards
- [ ] Save card position data
- [ ] Bookmarkable cards
- [ ] Set up a live version of the site that follows the repo
## Milestone 3: Core Functionality
- [ ] Click to create a new card
- [ ] Add new fields to a card
- [ ] Click and drag to rearrange field order in a card
- [ ] Create card connections
- [ ] Smart snap points
- [ ] Smart connection line routing
- [ ] Highlight multiple cards and move as group
- [ ] Shift click multiple cards and move as group
## Milestone 4: Nitty Gritty Features
- [ ] Customizable card and connection appearances
- [ ] Bottom bar customization interface
- [ ] Have multiple cards selected and editable by bottom bar
- [ ] Link cards by mentioning other cards in edit view
- [ ] Link cards by dragging cards onto other cards
- [ ] Have linked cards appear as tabs in a single card in the canvas
## Milestone 5: Templates
- [ ] Create and apply card templates
- [ ] Create and apply canvas templates
- [ ] Create new canvas from template
- [ ] Right click to create a card based off a template
- [ ] Drag a template to a pre-existing card to apply it
## Milestone 6: Navigating Big Canvases
- [ ] Zoom in zoom out zoom to fit
- [ ] Pan around screen
- [ ] Click and drag card to recycle bin to delete
- [ ] Right click and delete from dropdown menu
- [ ] Create multiple views from same cards
- [ ] Search for card
- [ ] Hide/show sidebar
## Milestone 7: Collaboration
- [ ] Create a user system
- [ ] Share your canvas for others to view
- [ ] Add other users as editors
- [ ] Simultaneous editing
- [ ] Card highlighting based on editor
- [ ] Profile pics displayed and editor cursors visible
- [ ] Users can double click to create a visual ping every editor can see
## Milestone 8: AI Functionality
- [ ] Select a number of cards, right click, and generate a compiled document from them
- [ ] Right click and generate a compiled document from everything in canvas
- [ ] Select a field, right click, and ask it for ideas
- [ ] Ideas pop up like dialogue option bubbles in a video game
- [ ] Right click the canvas and ask it to fill in the blanks for you
- [ ] Every empty field gains dialogue options waiting for the user in it
- [ ] AI icon in the top bar for full-canvas operations
## Milestone 9: Exporting Functionality
- [ ] Export canvas as a png or pdf
- [ ] Customize background color of exported image
- [ ] Export a selection of cards rather than full canvas
