Link to the blogpost or video or sm future-me


## Research
https://github.com/mikeoliphant/OpenSongChart/tree/846c1a29d9d6fca573175d6de73cb698a42b18ce
https://github.com/mikeoliphant/ChartPlayer
https://aubio.org/
https://linuxmusicians.com/viewtopic.php?t=24618
https://basicpitch.spotify.com/
https://youtube.com/shorts/BaeV6_qy0WM?si=CKcx7A1RDW5H6lx3
https://github.com/saurabhchalke/RizzRiff/tree/main
https://www.meta.com/experiences/guitarxr/7203991546324534/?utm_source=sidequest
https://www.tiktok.com/t/ZTFAVYw32/
https://developers.meta.com/horizon/blog/mesh-depth-api-meta-quest-3-developers-mixed-reality/ (announced only a week prior to the hackathon :( )
## Original Plan
initialize chromagram chord maps (objects containing the expected high intensity values per each chord)
initialize buffer storage of last 3 buffers
initialize volume threshold and other thresholds
initialize average energy array of the last 10 buffers
initialize dynamic threshold base * bufferEnergy /  averageEnergy
set tolerance to 12 cents to handle slightly out of tune guitars

set up unity microphone
create a buffer (1024 samples @ 44100 hz)

every buffer:
if volume quiet (Energy) discard the sample
else 
save the energy of the buffer to our array and recalculate the dynamic threshold
apply windowing to the buffer (Windowing)
pass the windowed buffer data to PitchYinFFT with tolerance in cents
if PitchYinFFT confidence is high, return the result to the game logic
else create a chromagram

we now assume what was played is a chord
create a chromagram of our buffer (Chromagram)
identify the high intensity values in the chromagram
if they match with any of our predefined chord maps (factor the tolerance), return the matched result to the game logic
else do temporal smoothing with the last 3 buffers
check the smoothed result against the predefined chord maps again
if they match within tolerance, return the matched result to the game logic

else perform further FFT refinement: (if we keep getting to this part of the code anyway, move it to the beginning)
perform peak picking (PeakDetection)
apply logarithmic frequency scaling? kinda extra tho
smooth the frequency spectrum
compare refined results to the predefined chord maps
return the matched chord if found

#todo