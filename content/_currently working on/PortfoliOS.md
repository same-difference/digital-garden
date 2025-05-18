---
modified: 2025-05-17
created: 2025-05-03
---
## Intro
My portfolio has long needed a makeover and I was stuck on where to go from what I had. At first I thought I needed just a new home screen or navigation system but I never really liked the idea of having a traditional interface on my portfolio. All I could think of were [[Portfolio AR farming game|weird navigation methods]] but having a portfolio with good SEO and that was more obvious in its functionality was important to me, so I kept pondering. It wasn't until I discovered the [[indie web]] and all the beautiful sites there that I started getting properly inspired.
## Inspo
- https://youtu.be/Vo1dSL9Igec?si=Z-40M-PAJ7_EdtIE
- https://youtu.be/Yko-LMBrRQw?si=uYGntc-ILmXopWJ2
- https://www.youtube.com/watch?v=_tWh4cYCTv0
( can you tell I was on a youtube binge? )
## Hand-drawn Mockup
![[Pasted image 20250503184709.png]]
![[Pasted image 20250503184720.png]]
## WIP Figma
![[Pasted image 20250517045633.png]]
## Starting Point
See, my portfolio site was my very first individual project working with a modern tech stack. My only experience with the stack prior had been a hackathon project called [[HookedIn]], so this was my first opportunity to properly sit down and learn these tools.

That made the original code very unmaintainable. So to get it from that code to this new design would require either abandoning it completely or doing some refactoring. Given the fact that refactoring is a good skill to have, I chose to take the challenge. So...
## The Plan
- [ ] Polish the turd
	- [x] Make the current design more fun
	- [x] Make the current design more usable
	- [ ] Make the current code more maintainable
- [ ] Migrate from react to astro
- [ ] Implement the faux desktop design
- [ ] Add a blog section
- [x] _Surprise objective!_ Add a digital garden section
- [ ] Make dev log blogs for this and [[_headsinthe.cloud|other current projects]]
- [ ] Bask in employment

We uh... still have a-ways to go.😅

## Polishing the 💩 (Current Step)
Goal: Polish the turd both above the hood and underneath it
- [x] make the "button" into a button!
- [x] add animations to everything
- [x] add reduced motion capability to all animations
- [x] decouple project data from ui
- [x] standardize the project code structure
- [x] store resume elsewhere to update it without having to redeploy every time
- [ ] extract and reorganize current components
- [ ] make standardized components for headers, blocks of text, urls, cards, pills, and other common ui elements
Next step: Migrate from raw react & vite to astro

## Migrating to Astro (Jumping the gun a little but shhh)
Goal: Create the basic navigation and make sure the old stuff still works
- [x] Init an astro project (I need to start somewhere okay)
- [ ] Make the new site navigation
- [ ] Import the old components
- [ ] Ensure the old components still work