---
sidebar_position: 1
---

# Single Bundle Integration

|                   | Comments                                                                                                                                                                 |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description       | Publish each micro frontend as a package. Generate a single final bundle for distribution. The final application includes each micro frontend as an external dependency. |
| Pre-requisites    | Very big product with tight interdependency between verticals No need for A/B testing Tight (and shared) release cycle                                                   |
| Strengths         | One set of shared dependencies Same tech stack Easy to setup – no additional tools needed Known to developers, Code deduplication, Easy to achieve UX consistency        |
| Drawbacks         | Re-build entire app/dependencies each time an update/release is needed Limited to one framework                                                                          |
| Use Cases         | - Huge products, frameworks, SDKs - Static document site, i.e. app docs. - E-commerce - back office management app with high amounts of data and actions - SaSS app      |
| Recommended Techs | High scalability out of the box and easy dependency management. Angular Vue.js Gatsby.js                                                                                 |