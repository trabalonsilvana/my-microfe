"use strict";(self.webpackChunkmy_micro_fe=self.webpackChunkmy_micro_fe||[]).push([[757],{4242:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Javascript Integration",c={unversionedId:"architectures/Run time/Client Side/javascript_integration",id:"architectures/Run time/Client Side/javascript_integration",isDocsHomePage:!1,title:"Javascript Integration",description:"|                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                        |",source:"@site/docs/architectures/Run time/Client Side/javascript_integration.md",sourceDirName:"architectures/Run time/Client Side",slug:"/architectures/Run time/Client Side/javascript_integration",permalink:"/my-microfe/docs/architectures/Run time/Client Side/javascript_integration",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/architectures/Run time/Client Side/javascript_integration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Iframe Integration",permalink:"/my-microfe/docs/architectures/Run time/Client Side/iframe_integration"},next:{title:"Web Components Integration",permalink:"/my-microfe/docs/architectures/Run time/Client Side/web_components"}},d=[],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript-integration"},"Javascript Integration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"A container JS app handles routes by dependency. Each dependency exposes a render method that is triggered when the route is activated. Similar to how big FW (Angular) manages routes by chunks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pre-requisites"),(0,r.kt)("td",{parentName:"tr",align:null},"Bundled app/modules hosted on a server. Interfaces to handle rendering and components comms. Robust webpack/rollup/systemJS implementation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Strengths"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlike build-time integration, we have independent bundles that can be replaced on the go. Unlike iframes, we have complete flexibility on integrations/interfaces/comms between the apps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Drawbacks"),(0,r.kt)("td",{parentName:"tr",align:null},"Dependency management can be a toll, you either need to require several FMW bundles (mixing stacks) or keep several copies of the same base dependency (same stack).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Cases"),(0,r.kt)("td",{parentName:"tr",align:null},"Big applications with defined logical boundaries between verticals Big products that require independent control flow (authentication apps for example). Flows utilized in several applications. Apps that require toggle features or different dependencies based on scenarios.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recommended Techs"),(0,r.kt)("td",{parentName:"tr",align:null},"Any of the big 3 (Angular, React.js, Vue.js) has some kind of mechanism to handle this. Angular and Vue.js have the most robust out-of-the-box compatibility with their modularized approach. React.js offers a more direct way to lazy load any dependency outside of the framework, keeping it more aligned with the vanilla JS approach.  Single SPA offers the most robust solution out of the box without compromising a single framework.")))))}u.isMDXComponent=!0}}]);