---
created: 2025-05-20
modified: 2025-05-20
---
## Expansion Goals
Portability and data. Once I have my [[homelab]] set up with all the apps and dev/prod pipeline I like and things start to get settled, I want to make things portable and experiment with the signals we're constantly surrounded by.

### 1. Ham Radio / Digital Ham Operators
- Talk to people locally or worldwide using voice, morse, or digital modes
- Need a license to operate
- Send/receive slow-scan images or text using radio waves
- Participate in emergency nets, practice drills, contests
- Off-grid messaging
- Radio etiquette, call signs, propagation science
### 2. LoRa Mesh
- Encrypted, decentralized, battery-efficient mesh networks for sending texts, weather beacons, and status relays
- Send/receive encrypted messages
- Deploying long-range chat devices in the field
- Linking GPS/weather data into the mesh
- DIY emergency communication networks
### 3. Satellite Weather and RF Space Observers
- Tap into satellite transmissions to receive imagery and data about weather systems, cloud cover, and earth observations
- Capture real-time weather images directly from passing satellites
- Log and analyze imagery of hurricanes, storms, etc
- Build antenna rigs to improve signal clarity
- Auto-decode data feeds
### 4. Aircraft Trackers
- Monitor air traffic using aircraft transponder signals, decode acars messages, and track flights in the areas
- Visualizing planes overheads in real time
- Log plane messages or detect anomalies
- Feed data to open trackers like FlightAware
### 5. Numbers Station Listeners
- Scan the RF spectrum for weird or unexplained signals
- Decode encrypted morse, sstv bursts, and tones
- Log "ghost signals" with spectrograms
### 6. Micro AM/FM Broadcasters
- Building or running a tiny FM station with PiFM
- FM is only legal without a license indoors and short-range (like 10 feet max)
- AM without a license can transmit much further (200-500 feet)
### 7. Local Weather Data
- Monitor local weather conditions and analyze trends
- Building a local weather station
- Logging and graphing pressure drops before storms
- Broadcasting weather updates via LoRa or ham radio

| Item                         | Purpose                                             | Est. Cost | Used By Communities |
| ---------------------------- | --------------------------------------------------- | --------- | ------------------- |
| RTL-SDR V3 dongle            | General signal reception (NOAA, aircraft, FM, etc.) | $30       | 1, 3, 4, 5          |
| QFH/Turnstile Antenna        | NOAA/METEOR satellite imagery reception             | $35–$75   | 3                   |
| LoRa SX1278 module + antenna | Mesh comms, APRS, off-grid chat                     | $10       | 2, 6, 7             |
| TTGO/Heltec LoRa Board       | Standalone mesh radio unit                          | $25       | 2, 6                |
| GPS Module (BN-220)          | Location tracking, APRS, logging                    | $10       | 1, 2, 7             |
| BME280 Sensor                | Pressure/temp/humidity logging                      | $7        | 2, 7                |
| Baofeng UV-5R + USB Cable    | Voice/APRS via ham radio                            | $35       | 1, 6, 7             |
| USB Soundcard                | Audio I/O for FLDigi, JS8Call, SSTV                 | $12       | 1, 5                |
| FM Transmitter Hat or PiFM   | Local audio broadcasting                            | $10–$30   | 6                   |
| 10,000mAh Battery Bank       | Portable field power                                | $20       | All                 |
| Rugged Electronics Case      | Field-ready protection                              | $20       | All                 |
## Beyond These Uses
The equipment above is versatile. There's more legally-accessible satellites out there besides just weather. Radio is a frequency just like any other, and astronomy maps out the universe with frequencies. With local encrypted networks, you can transmit things like wikipedia and websites, and there's always a deeper rabbit hole to go down. More detailed data, stronger scanners, bigger antennae. Tools are a vessel for their creator. You can do good, you can do art, you can do whatever your heart wishes.