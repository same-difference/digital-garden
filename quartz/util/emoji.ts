import emojiRegex from "emoji-regex"


export function isFullEmoji(segment: string) {
  const emojiRegexInst = emojiRegex()
  return emojiRegexInst.test(segment)
}


const U200D = String.fromCharCode(8205)
const UFE0Fg = /\uFE0F/g

export function getIconCode(char: string) {
  return toCodePoint(char.indexOf(U200D) < 0 ? char.replace(UFE0Fg, "") : char)
}

function toCodePoint(unicodeSurrogates: string) {
  const r = []
  let c = 0,
    p = 0,
    i = 0

  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++)
    if (p) {
      r.push((65536 + ((p - 55296) << 10) + (c - 56320)).toString(16))
      p = 0
    } else if (55296 <= c && c <= 56319) {
      p = c
    } else {
      r.push(c.toString(16))
    }
  }
  return r.join("-")
}

const emojiCache = new Map<string, string | undefined>()

export async function loadEmoji(code: string) {
  if (emojiCache.has(code)) return emojiCache.get(code)

  const emojiUrl = `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/${code}.png`
  const response = await fetch(emojiUrl)

  if (!response.ok) {
    console.warn(`Emoji ${code} not found, using blank space`)
    return undefined
  }

  const buffer = await response.arrayBuffer()
  const b64 = Buffer.from(buffer).toString("base64")
  const result = `data:image/png;base64,${b64}`

  emojiCache.set(code, result)
  return result
}
