## front end

- svelte
- sveltekit
- tailwindcss
- three.js
- threlte
- threlte/orbit controls
- (maybe) rapier for physics
- (maybe) theatre.js for fancier animations
- howler.js

---
## back end 

- hono
- d1
- kv
- openai embeddings 3 large api
- google perspectives api
- claude 3 sonnet api

---
## data pipeline

* user answers question (save response)
* embeddings api to determine viewpoint (save embedding)
* cosine similarities to see similarity to major schools of thought (save cosine similarities and major schools, update user's local stats)
* moderation via perspectives api
* branch a (clean):
	* display results using original version for all users
* branch b (flagged): (save flagged status)
	* generate a clean version with claude (save clean version)
	* display results using clean version for all other users