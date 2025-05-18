---
created: 2025-05-05
modified: 2025-05-06
---
## Navigation
- [[#Home|home]] - the main interactive experience
- [[#My Journey|my journey]] - user data and statistics dashboard
- [[#Learn|learn]] - a wiki-like structure explaining various parts of philosophy and different schools of thought
- [[#About|about]] - goes into detail about the design behind the site, how data is used, and what content is not allowed
- [[#Credits|credits]] - thanks the appropriate sources for art, music, icons, 3d models, assets, fonts, tutorial, and the user themselves
- [[#Donate|donate]] - describes the cost to run the site and has a link to my ko-fi
- settings / widgets
	- boring view toggle for low end machines, accessibility, and potentially mobile as well
		- boring view has the same functionality as the main site but doesn't use three.js or threlte

## Home
- Initial load per session: loading animation, then go to [[#Universe View]]
### All Views
- Music and sound effects controls
	- They can mute one, both, and adjust the sound levels of the music and sound effects individually. Both begin at 50% volume
- Panning controls to zoom in, rotate, and "jump to x" buttons to help users navigate the 3d space
	- The jump to x button is a dropdown menu with options that change depending on the view
		- In universe view, it displays 'ethics, political philosophy, etc"
		- In galaxy view, it displays their unordered questions in the same prioritization order as before
		- In nebula view, it displays the major schools of thoughts that have answered this question
- Onboarding (no local data detected, both new users and those who deleted their data)
> Welcome to the beginning of a new journey.
>
> headsinthe.cloud is a space for you to question your beliefs and learn about yourself. You may encounter things you've never thought of before or ideas that make you uncomfortable.
>
> That's okay. This is a journey, and it is a way to understand not only yourself, but how others think as well.
>
> This site uses AI to process your answers and saves them for others to see and explore. Your personal data is not collected beyond what you choose to type and submit.
>
> You may freely browse all questions and answers without contributing, but the full experience is shaped by your own responses.
>
> Close this window, and let your journey begin.

> I'm ready to start ->
- Boring View Detection
	- If any potion of the interactive version of the site takes more than 10 seconds to load, a pop up modal appears asking if they wish to switch to boring view
	- After this pop up has been declined 3 times on the current session, it stops popping up
### Universe View (base.com)
- See the galaxies: major domains of philosophy
- Mini versions of their stats appear at the bottom which they can click to enter the my journey page
- if they mouse over the galaxies it shows a sci-fi-like focus interface with a squarish outline and some text like "Ethics What is right and what is wrong?" With a "learn more ->"  link below that brings up a brief explanation of the thought region in layman's terms and a link to that topic's [[#Learn]] page. Clicking the main popup rather than the learn more button takes them to [[#Galaxy View]]
- The galaxy will be faded if they've answered all the current questions within it and it will be bright if there's questions left in there
- If they stay on the page for some time without clicking on anything, some questions within those galaxies will begin appearing, no more than 3 at a time on their screen, hovering over their respective galaxies. These will be shortened versions of their respective questions
	- If they click one of these pop ups they get super zoomed and skip galaxy view, heading straight into the nebula view
	- All suggested questions in all views will prioritize already-viewed but unanswered questions. If none are available, it will then prioritize the most popular
- movement
	- The stars subtly twinkle
### Galaxy View (base.com/school)
- See the nebulas: questions within those domains of philosophy
- Within a pretty galaxy are multiple nebulas
- The nebulas will be more faded if they've already answered that question and more bright if they haven't answered it
- If they hover over a nebula it shows the same shortened version of the question as in the universe and galaxy views and if they click on it they get taken to the [[#Nebula View]]
- More answered questions have some kind of visual indicator that they're popular
- If they stay on this page for some time, questions will begin to suggest themselves much like the universe view
- movement
	- There are still stars int eh background and those twinkle too
### Nebula View (base.com/school/question)
- Only in Answer Mode: See the stars, planets, and comets: Major domains' answers, individual answers within those domains, outlying answers (respectively)
- They get brought to [[#Typing Mode]] by default
#### Typing Mode
- begins in typing mode
- full version of the question is finally unveiled
- question and answer box are the main focus of the ui
- character counter in the corner goes red as they approach the 1000 character limit
- option to skip answering and view the answers (shortcut to answer mode)
- on submission:
	- animation of planet / comet (body) being born from space dust, satisfying level of a loot box opening
	- animation of that body glowing as it pops into place in orbit around the proper star(s)
	- go to [[#Answer Mode]]
- movement
	- subtle orbits of planets and the journeys of the comets
- Go to [[#Answer Mode]] upon submission
#### Answer Mode
- only if they just submitted an answer
	- focus the nebula on their answer, a modal of their answer appearing
	- next to the answer modal a link to share the question with their friends appears with support for popular social media and a copy pastable text only version much like wordle's green squares. the link brings the visitor directly to this question with a toggle to bring them to this specific answer or not
	- a button to donate to my ko-fi is next to this modal as well
- can freely navigate within the nebula and hover over and click different stars and planets and comets to see the individual answers in a pop up modal. The stars have an additional "learn more ->" link on them that brings up a brief explanation of the philosophical school, a list of other questions within the site that contain that school, and links to its [[#Learn]] page as well.
- the user sees their original answer within the nebula at this phase, and will continue to until they leave the site. Under the hood it will be sanitized if necessary but they will not see the sanitized version until their next visit

### My Journey (base.com/my-journey)
- Shows the user a summary of their answered questions and what schools of thought their answers are
- Shows how many questions they've answered out of those available, both overall and per school
- Provides statistics in the form of a graph of their most common schools of thoughts within each subcategory of philosophy
- Button to download their data so they can save it and button to "reset their journey" which deletes the local version of their data so they can see how their views have changed over time
- The reset their journey button makes clear that it only deletes their connection to their answer, and their original answer remains in the database
- Data export does so in a human readable way. It is meant to be a one way thing and I don't want to show the under-the-hood architecture inadvertently. It cannot be reimported. It downloads as a txt file or sm

### Learn (base.com/learn)
- probably some customized svelte template of a wiki
- has sections for domains of philosophy, schools of thought, and notable philosophers
- data is manually gathered by me and my learning, mainly from wikipedia, youtube, reddit, and various philosophy books I have
### About (base.com/about)
- Describes my inspiration for the site
- Says it was made by me, links to my portfolio
- Explains the AI policy of not wanting to force the user to give their data to AI
- Explains the data management how while the responses are saved, the user connection to those responses are local only, as this is meant to be a place to learn about yourself, question your beliefs, and learn about philosophy and the user should feel safe to do so

### Credits (base.com/credits)
- art
- icons
- 3d models
- fonts
- tutorials
- libraries
- users
- specific people who help me
### Donate (base.com/donate)
- overview of the amount of work that went into this, I'm a solo dev who recently graduated and this is my first big project
- description of the site hosting + api costs
- ko-fi link