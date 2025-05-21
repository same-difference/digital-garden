---
created: 2025-05-14
modified: 2025-05-19
---
DO NOT USE SATORI IT SUCKS IT SUCKS IT SUCKS, [JUST USE PLAYWRIGHT](https://dbushell.com/2024/11/15/generate-open-graph-images-with-playwright/)

The MOMENT you want to use new emojis not in your fancy fonts or weird ascii symbols it fails. I had to change the og image generation code for this site by
1. Completely changing how emojis are handled by putting [Twemoji](https://github.com/twitter/twemoji) in loadAdditionalAsset
2. Getting 4 different symbol fonts, stripping the emojis from them, and putting them in my font stack

I only got to this solution after ==8 HOURS== because I had to figure out how Quartz, the static site generator I'm using for the garden portion of my [[PortfoliOS|big portfolio update]], works, and then I had to figure out how Satori itself works.

I now know how Satori works and I also learned I never want to work with it again.
