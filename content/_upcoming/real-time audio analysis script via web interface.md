---
created: 2025-05-15
modified: 2025-05-15
---
When recording my [[GuitAR]] experience, I saw my [[GuitAR#Original Plan For Audio Script|original plan]] and lamented the fact that I was never actually able to make it. Making the full app myself in XR isn't something I have the time for atm, but the [[audio analysis]] itself? Oooooh baby am I down

So this idea was born. An audio analysis script accessible via a web interface. I'm familiar with both, so I could whip it up myself relatively fast.

## The Plan
- The algorithm should detect both single notes and chords
- The backend should stream the results and data to the front-end via websocket
- The frontend ui should visualize pitch, tuning, energy, latency with both a simple mode and a complex mode
## Front End
> Built in Svelte and using Chart.js, Heatmap.js, and WebSockets

- Simple Mode:
	- Note/chord being played
	- Tuning bar (shows amount of deviation from the raw note in cents)
	- Latency (with a breakdown for script-induced + internet-induced)
	- Mini chromogram of last couple seconds
- Complex Mode:
	- Same stuff as simple mode but adds:
		- FFT spectrogram over time (all sound frequencies)
		- Chord probability bars per sample (top 3 most likely chords)
		- Chromogram over time (just musical notes)
		- Energy graph (loudness over time)
		- Pitch timeline (notes detected over time + confidence)
- All charts include simple explanations of what they do
## Back End
> Built in C++
> Using Essentia, RtAudio, FFTW, and std::thread

Gets mic input in real time, does all the stuff in the [[GuitAR#Original Plan For Audio Script|original plan]] if it was indeed a good plan. Change the plan if needed, and sends json to the front end with: detected note/chord, confidence, frequency spectrum, energy level, and processing latency (both internet induced + script induced)