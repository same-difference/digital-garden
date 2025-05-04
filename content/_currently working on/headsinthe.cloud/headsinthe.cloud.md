They visit the site and after a loading animation are brought to the universe view. It subtly twinkles and if they mouse over the galaxies it shows a sci-fi-like focus interface with a squarish outline and some text like "Ethics What is right and what is wrong?" With a "learn more ->"  link below that brings up a brief explanation of the thought region in layman's terms and links to further learning like a wikipedia page or a youtube explanation. The galaxy will be faded if they've answered all the current questions within it and it will be bright if there's questions left in there. If they stay on the page for some time without clicking on anything, some questions within those galaxies will begin appearing, no more than 3 at a time on their screen, hovering over their respective galaxies. These will be shortened versions of their respective questions like "Should I pull the lever to save 5 people on the track?" and "If the ship's parts are fully replaced, is it still the same ship?" and "What should be the goal of a government?" and whatnot. If they click one of these pop ups they get super zoomed straight into the nebula view.

If they click the main pop up they get brought to the galaxy view, where within a pretty galaxy are multiple nebulas. The nebulas will be more faded if they've already answered it and more bright if they haven't answered it. If they hover over a nebula it shows the same shortened version of the question as in the universe and galaxy views and if they click on it they get taken to the nebula view. More answered questions have some kind of visual indicator that they're popular.

In the nebula view, nothing pops up if they haven't interacted in a while. It starts with a much less artistic typing view before transitioning to an answer view upon submission. In the typing view, the full version of the question is finally unveiled and the question and answer box are the main focus of the ui. The only movement on the screen is the subtle orbits of the planets and journeys of the comets, but they are uninteractable on this screen. As they type, there is a character counter in the corner that gets red as they approach the character limit and they cannot physically type more than 1000 characters. There is an option to be taken directly to the answer view and not answer the question whatsoever. Should they respond to the question, when they press submit they get an animation of their planet or comet being born and the star(s) their answer revolves around show their popups. As an example in response to the trolley problem, "Utilitarianism I pull the lever because the most people benefit from that decision" They are now in answer view and can freely navigate within the nebula and hover over and click different stars and planets and comets to see the individual answers in a pop up modal. The stars have an additional "learn more ->" link on them that brings up a brief explanation of the philosophical school, a list of other questions within the site that contain that school, and links to further learning as well. The user sees their original answer within the nebula at this phase, and will continue to until they leave the site. Under the hood it will be sanitized if necessary but they will not see the sanitized version until their next visit. Upon entering answer view, they will see a link to share the question with their friends that brings up the sharing popup with support for popular social media and a copy pastable text only version much like wordle's green squares. This link will bring the new visitor directly to this question.

All suggested questions will prioritize already-viewed but unanswered questions. If none are available, it will then prioritize the most popular.

At all parts of the site there will be a header or footer they can hover over to bring up that has links to:

home, which brings them to the universe view

about, which goes into detail about the design behind the site and how their data is used, as well as what content is not allowed

learn, which is a wiki-like-structure with just the contents "learn more ->" pages about the sections of philosophy and different schools of thoughts

credits, which thanks the appropriate sources for the art, music, icons, 3d models, assets, fonts, tutorials, and the user for participating in this journey

donate, which describes the cost to run the site and has a link to my ko-fi

New section on the header:

My journey: shows the user a summary of their answered questions and what schools of thought their answers are. Shows how many questions they've answered out of those available, both overall and per school. Provides statistics in the form of a graph of their most common schools of thoughts within each subcategory of philosophy. Button to download their data so they can save it and button to "reset their journey" which deletes the local version of their data so they can see how their views have changed over time. The reset their journey button makes clear that it only deletes their connection to their answer, and their original answer remains in the database. Mini versions of their stats appear in the universe view at the bottom which they can click to enter the my journey page as well


Within universe view and all other interactive views, there are music and sound effects controls. They can mute one, both, and adjust the sound levels of the music and sound effects individually. Both begin at 50% volume. There are also panning controls to zoom in, rotate, and "jump to x" buttons to help users navigate the 3d space should they be on a laptop and not have a mouse. The jump to x buttons is a dropdown menu with options that change depending on the view. In universe view, it displays 'ethics, political philosophy, etc". In galaxy view, it displays their unordered questions in the same prioritization order as before. In nebula view, it displays the major schools of thoughts that have answered this question.

Mobile uh... I'll try, but this is three.js so we'll see. It's definitely possible and in some cases easier because people are more used to pinching and zooming and rotating on mobile, but we'll see if the phones can handle the hardware requirements. If they can't, there's always "boring view"

Another new section on the header:

Boring view toggle: Aka the future polished version of my prototype of the site made without three.js or any of the interactivity lol. It's more accessible and better for those with weak device hardware. If any portion of the interactive version of the site takes more than 10 seconds to load, a pop up asks if they want to switch to boring view, which is much less resource intensive

Upon visiting the site for the first time (or appearing to at least in the case of reset journey) universe view has a popup
"Welcome to the beginning of a new journey.

headsinthe.cloud is a space for you to question your beliefs and learn about yourself. You may encounter things you've never thought of before or ideas that make you uncomfortable.

That's okay. This is a journey, and it is a way to understand not only yourself, but how others think as well.

This site uses AI to process your answers and saves them for others to see and explore. Your personal data is not collected beyond what you choose to type and submit.

You may freely browse all questions and answers without contributing, but the full experience is shaped by your own responses.

Close this window, and let your journey begin."
"I'm ready to start ->"

Saved locally:
Music / sound settings
Boring view toggled on / off
Answered questions \[ \[question-id, answer-id] ]
Alignments \[ \[ school, count ] ]
Onboarding status
Data export does so in a human readable way. It is meant to be a one way thing and I don't want to show the under-the-hood architecture inadvertently. It cannot be reimported. It downloads as a txt file or sm

[[metaphor]]. [[tech stack]].