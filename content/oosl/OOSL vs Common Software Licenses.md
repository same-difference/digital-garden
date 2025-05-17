---
created: 2025-05-17
modified: 2025-05-17
---
This document compares the **Oxymoron Open Source License (OOSL)** to five of the most common licenses developers often default to for their projects:

- **MIT License**
- **Apache 2.0 License**
- **GPL v3**
- **AGPL v3**
- **BSD 3-Clause License**

---

## 🧾 Situation 1: A company embeds your code in their commercial SaaS product

| License        | Outcome                                                     |
| -------------- | ----------------------------------------------------------- |
| **MIT**        | ✅ Totally allowed — no restrictions                         |
| **Apache 2.0** | ✅ Allowed — must include attribution and license text       |
| **GPL v3**     | ✅ Allowed — *only if* they release the modified code        |
| **AGPL v3**    | ❌ Not allowed unless they release *server-side* code too    |
| **BSD**        | ✅ Totally allowed — attribution only                        |
| **OOSL**       | ❌ Not allowed without explicit permission from the Licensor |

## 🛠️ Situation 2: A contributor makes a minor fix or adds a small feature

| License        | Outcome                                                            |
| -------------- | ------------------------------------------------------------------ |
| **MIT**        | ✅ Allowed; contributor gives implicit rights to use and distribute |
| **Apache 2.0** | ✅ Same as MIT                                                      |
| **GPL v3**     | ✅ Must keep the same license; changes must also be GPL             |
| **AGPL v3**    | ✅ Same as GPL                                                      |
| **BSD**        | ✅ Very permissive                                                  |
| **OOSL**       | ✅ Allowed; contribution governed by OOSL unless agreed otherwise   |

## 💸 Situation 3: A dev forks your project and sells it with superficial changes

| License        | Outcome                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| **MIT**        | ✅ Fully allowed                                                         |
| **Apache 2.0** | ✅ Fully allowed                                                         |
| **GPL v3**     | ✅ Allowed, but fork must also be GPL                                    |
| **AGPL v3**    | ✅ Same as GPL, but SaaS too                                             |
| **BSD**        | ✅ Allowed, very few restrictions                                        |
| **OOSL**       | ❌ Not allowed unless changes are *significant* and attribution is clear |

## 📤 Situation 4: You want to license your project freely but retain commercial control

| License        | Outcome                                          |
| -------------- | ------------------------------------------------ |
| **MIT**        | ❌ Anyone can monetize without asking             |
| **Apache 2.0** | ❌ Same as MIT                                    |
| **GPL v3**     | ❌ Can’t prevent others from monetizing under GPL |
| **AGPL v3**    | ❌ Same as GPL                                    |
| **BSD**        | ❌ Fully permissive                               |
| **OOSL**       | ✅ Commercial use must be negotiated with you     |

## 🔄 Situation 5: You want to allow people to build and monetize *their own* derivatives fairly

| License        | Outcome                                                                  |
| -------------- | ------------------------------------------------------------------------ |
| **MIT**        | ✅ Freely allowed — no strings attached                                   |
| **Apache 2.0** | ✅ Same as MIT                                                            |
| **GPL v3**     | ✅ As long as derivative remains GPL                                      |
| **AGPL v3**    | ✅ Same as GPL                                                            |
| **BSD**        | ✅ Freely allowed                                                         |
| **OOSL**       | ✅ Allowed *only if* the work is significantly different and gives credit |

## Summary Table

| License  | Prevents Unwanted Commercial Use | Allows Community Collaboration | Respects Creator Ownership | SaaS-Proof | Monetizable by Others Ethically |
| -------- | -------------------------------- | ------------------------------ | -------------------------- | ---------- | ------------------------------- |
| MIT      | ❌ No                             | ✅ Yes                          | ❌ No                       | ❌ No       | ✅ Yes                           |
| Apache   | ❌ No                             | ✅ Yes                          | ❌ No                       | ❌ No       | ✅ Yes                           |
| GPL      | ⚠️ Only via copyleft             | ✅ Yes                          | ❌ No                       | ❌ No       | ✅ Yes (with conditions)         |
| AGPL     | ✅ Yes                            | ✅ Yes                          | ❌ No                       | ✅ Yes      | ✅ Yes (with conditions)         |
| BSD      | ❌ No                             | ✅ Yes                          | ❌ No                       | ❌ No       | ✅ Yes                           |
| **OOSL** | ✅ Yes                            | ✅ Yes                          | ✅ Yes                      | ✅ Yes      | ✅ Yes (if fair & significant)   |

---

## Final Verdict

The OOSL stands alone in its ability to:
- Block corporate monetization without permission
- Still allow open source forks and ethical commercial paths
- Present superficial forks from being monetized
- Allow you to retain control while inviting collaboration

It’s ideal for solo developers and community projects that want to protect themselves *without closing the door* to contributors or innovation.