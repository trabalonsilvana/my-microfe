---
sidebar_position: 1
---

# Iframe Integration

|                   | Comments                                                                                                                                                                                                                                                                                                                                      |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description       | Iframes is an old client-side integration technique that can be used to embed one HTML document into another. In the context of micro frontends, the solution lies in embedding every micro frontend application page layout using iframe tags with an src attribute pointing to the URL where the application is served.                     |
| Pre-requisites    | Full independent releases Minor interdependency between app                                                                                                                                                                                                                                                                                   |
| Strengths         | Easy to setup – no additional tools needed Full independence of deployments High component isolation Cross-component communication (via DOM messages) Real framework agnostic                                                                                                                                                                 |
| Drawbacks         | Hard to implement deep-linking Hard to implement Responsive Web Design High resources consumption Complex communication strategy between host and embedded app SEO Google supports lots of JavaScript nowadays but takes longer to index which is bad for a frequently changing site and some other crawlers don’t support JavaScript at all. |
| Use Cases         | Use when framework agnostic and component isolation is the key concern and UX is not so important. Embed read-only apps, like widgets, videos, audio, graphs.                                                                                                                                                                                 |
| Recommended Techs | React.js, vanilla JS, Stencil. Any framework that is light, you need to think about having multiple instances; the less the better.                                                                                                                                                                                                           |