---
created: 2025-05-14
modified: 2025-05-14
---
Because it's super annoying when you set an alarm and it interrupts you in the middle of a task and breaks you out of flow, so you snooze the alarm or turn it off and either get annoyed again and broken out of flow again or you completely forget to do the thing you set an alarm to do (like eat) and now it's 5 hours to late to do the thing.

So
- integrates with all your devices
- detects when you're active
	- keystrokes, mouse clicks, scrolls, movement
	- taps, swipes
- has an alarm start time and a cut-off time
- has user-definable idle times
	- alarm window idle times: 1 minute
	- post-alarm required idle time: 5 minutes
	- post-alarm activity trigger window: 2 minutes

Starting at the alarm start time, the alarm checks your activity. When you're idle for that amount of time, say 1 minute, it rings the alarm. You can snooze it if you want and in that case it waits for another lull in activity to ring again.

Upon hitting the cut-off time, if you haven't triggered an alarm with a long-enough lull in activity or haven't dismissed the alarm, it rings and cannot be snoozed. You have to click the dismiss button and then optionally if you then start being active again for 2 minutes, it rings nonstop until you hit the dismiss button again. This cycle continues until you haven't interacted with your devices for 5 minutes and the alarm fully shuts down.

This alarm is mainly designed around taking care of irl tasks despite any digital activities you may be doing that pull you into an intense state of flow. Lowkey with some tweaks if used as a traditional wake-up alarm it would also make sure you actually get out of bed and don't just doomscroll for 2 hours upon first waking up. Though in it's current form you'd either get out of bed or fall back asleep lol