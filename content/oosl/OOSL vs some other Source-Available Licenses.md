---
created: 2025-05-17
modified: 2025-05-17
---
This document compares the **Oxymoron Open Source License (OOSL)** to five modern source-available licenses that attempt to control commercialization or ethical use of software.

- **Business Source License (BSL 1.1)**
- **Server Side Public License (SSPL)**
- **PolyForm Noncommercial**
- **Hippocratic License**
- **Fair Source License**

**Note:** SSPL and BSL are not recognized by the [Open Source Initiative](https://opensource.org/) as open source. They are considered **source-available** licenses because they impose additional restrictions that violate the Open Source Definition.

---

## 🔐 Situation 1: A cloud provider clones your repo and launches a SaaS

| License         | Outcome                                                        |
| --------------- | -------------------------------------------------------------- |
| **BSL**         | ❌ Not allowed during restriction period (typically 3 years)    |
| **SSPL**        | ❌ Not allowed unless they open source their whole SaaS stack   |
| **PolyForm NC** | ❌ Not allowed — commercial use completely forbidden            |
| **Hippocratic** | ⚠️ Discouraged if usage violates ethical standards (ambiguous) |
| **Fair Source** | ❌ Not allowed without a commercial license                     |
| **OOSL**        | ❌ Not allowed without explicit permission                      |

## 🧑‍💻 Situation 2: A student or researcher uses your project in academic work

| License         | Outcome                                                        |
| --------------- | -------------------------------------------------------------- |
| **BSL**         | ✅ Allowed (if not commercial)                                  |
| **SSPL**        | ✅ Allowed                                                      |
| **PolyForm NC** | ✅ Allowed                                                      |
| **Hippocratic** | ✅ Allowed if aligned with ethical principles                   |
| **Fair Source** | ⚠️ Technically requires license but often waived               |
| **OOSL**        | ✅ Allowed — academic and nonprofit use is explicitly permitted |

## 💰 Situation 3: A small startup builds a paid tool based on your code

| License         | Outcome                                                                            |
| --------------- | ---------------------------------------------------------------------------------- |
| **BSL**         | ❌ Not allowed during restriction window                                            |
| **SSPL**        | ❌ Not allowed unless whole source stack is published                               |
| **PolyForm NC** | ❌ Not allowed — no commercial use at all                                           |
| **Hippocratic** | ⚠️ Ambiguous, depends on ethics clause                                             |
| **Fair Source** | ❌ Not allowed without purchasing a commercial license                              |
| **OOSL**        | ✅ Allowed — *if* the modifications are significant and approved or licensed by you |

## 🛠️ Situation 4: A dev makes a fork to add features and contribute back

| License         | Outcome                                                                |
| --------------- | ---------------------------------------------------------------------- |
| **BSL**         | ⚠️ Allowed but no full redistribution rights during restriction period |
| **SSPL**        | ✅ Allowed                                                              |
| **PolyForm NC** | ✅ Allowed, noncommercial only                                          |
| **Hippocratic** | ✅ Allowed, noncommercial only                                          |
| **Fair Source** | ⚠️ Requires permission beyond usage cap                                |
| **OOSL**        | ✅ Allowed under OOSL; contributions governed by same license           |

## 🧾 Summary Table

| License         | Blocks Unwanted Commercial Use | Clear Academic Allowance | Contributor-Friendly | Time-Limited Restriction | SaaS Protection |
| --------------- | ------------------------------ | ------------------------ | -------------------- | ------------------------ | --------------- |
| **BSL**         | ✅ Yes (for 1–3 years)          | ✅ Yes                    | ⚠️ Partial           | ✅ Yes                    | ✅ Yes           |
| **SSPL**        | ✅ Yes                          | ✅ Yes                    | ✅ Yes                | ❌ No                     | ✅ Yes           |
| **PolyForm NC** | ✅ Yes                          | ✅ Yes                    | ✅ Yes                | ❌ No                     | ✅ Yes           |
| **Hippocratic** | ⚠️ Ethically restricted        | ✅ Yes                    | ✅ Yes                | ❌ No                     | ⚠️ Partial      |
| **Fair Source** | ✅ Yes                          | ⚠️ Case-by-case          | ⚠️ Limited           | ❌ No                     | ⚠️ Partial      |
| **OOSL**        | ✅ Yes                          | ✅ Yes                    | ✅ Yes                | ❌ No                     | ✅ Yes           |

---

## Final Verdict

- **OOSL** offers more flexibility than PolyForm NC or BSL by allowing *fair, attributed commercial use* if it's significantly modified and approved.
- Unlike **SSPL**, **OOSL** doesn’t force re-licensing of entire SaaS infrastructure — just enforces boundaries around unapproved monetization.
- Unlike **Hippocratic**, **OOSL** is not ethically subjective — it's enforceable, permission-based, and specific in language.

OOSL is the ideal choice for developers who want to remain open to contribution and creativity — while drawing a firm line around exploitation by for-profit actors.