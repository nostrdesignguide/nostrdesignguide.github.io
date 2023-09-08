"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:1,sidebar_label:"Introduction"},o="Nostr Design",a={unversionedId:"intro",id:"intro",title:"Nostr Design",description:"A comprehensive resource for designers and developers to build successful nostr products.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Unique Design Challenges",permalink:"/docs/unique-design-challenges"}},l={},u=[{value:"A comprehensive resource for designers and developers to build successful nostr products.",id:"a-comprehensive-resource-for-designers-and-developers-to-build-successful-nostr-products",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Product Design Considerations",id:"product-design-considerations",level:2},{value:"Design Principles",id:"design-principles",level:2},{value:"Refrence Designs",id:"refrence-designs",level:2},{value:"Resources",id:"resources",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nostr-design"},"Nostr Design"),(0,i.kt)("img",{src:n(4474).Z}),(0,i.kt)("h2",{id:"a-comprehensive-resource-for-designers-and-developers-to-build-successful-nostr-products"},"A comprehensive resource for designers and developers to build successful nostr products."),(0,i.kt)("p",null,"The ultimate goal is to provide practical tips, reference designs and product know-how, so that developers start thinking about clients in ways that position them for success."),(0,i.kt)("p",null,"Throughout the resource, we will look at challenges around designing for nostr and try to provide some workable solutions. This resource is by no means definitive and will not have a solution for every nostr client (as there are so many use cases), but it will provide general guideance and offer some examples."),(0,i.kt)("p",null,"Nostr design is open source, which means anyone can contribute to it. Please keep in mind we are just getting started and the contribution functionality is not yet up and running. Check back often to find out how you can help!"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"In this section we will explore the various challenges around nostr design. We will ask more questions than providing answers just to get your mind thinking about the various issues new users are going through as they use your client."),(0,i.kt)("p",null,"We'll cover the differences between a website and a progressive web app, how to think about your users's initial experience and how to start developing your first client."),(0,i.kt)("h2",{id:"product-design-considerations"},"Product Design Considerations"),(0,i.kt)("p",null,"Shipping fun side projects is great, but serious businesses require a bit more work. Nostr Design will explore a few things developers and designers may want to consider when designing their clients. "),(0,i.kt)("p",null,"We will delve a little into topics such as the Jobs to be Done framework, product growth loops, collecting product feedback, programattic SEO, handling of translations and last but not least product-led marketing. We will explore how we can make our clients work smarter for our marketing, acquiring users and retaining them."),(0,i.kt)("h2",{id:"design-principles"},"Design Principles"),(0,i.kt)("p",null,"Here we wil explore various principles of good design to help you create the best user experiences and the best visual UIs possible. "),(0,i.kt)("p",null,"We'll cover topics such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Design systems"),(0,i.kt)("li",{parentName:"ul"},"User-centered design"),(0,i.kt)("li",{parentName:"ul"},"Some UX laws"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-principles/Accessibility"},"Accessibility")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/design-principles/ui-tips"},"UI tips"))),(0,i.kt)("h2",{id:"refrence-designs"},"Refrence Designs"),(0,i.kt)("p",null,"A design guide wouldn't be very useful if it didn't contain actual designed examples. The Refernce Designs section may include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Actual figma files for existing open source projects"),(0,i.kt)("li",{parentName:"ul"},"Color palette ideas"),(0,i.kt)("li",{parentName:"ul"},"Commonly used components (desktop and mobile)"),(0,i.kt)("li",{parentName:"ul"},"Onboarding components"),(0,i.kt)("li",{parentName:"ul"},"Use case-specific components (social, audio, video, long-form content)"),(0,i.kt)("li",{parentName:"ul"},"Navigation componets"),(0,i.kt)("li",{parentName:"ul"},"Relays"),(0,i.kt)("li",{parentName:"ul"},"Settings"),(0,i.kt)("li",{parentName:"ul"},"Profile"),(0,i.kt)("li",{parentName:"ul"},"Media handling "),(0,i.kt)("li",{parentName:"ul"},"Search"),(0,i.kt)("li",{parentName:"ul"},"Zaps"),(0,i.kt)("li",{parentName:"ul"},"Threads"),(0,i.kt)("li",{parentName:"ul"},"Streaming"),(0,i.kt)("li",{parentName:"ul"},"and more if time permits. ")),(0,i.kt)("p",null,"We will also touch a bit on guiding principles that every developer and designer should be thinking about as they create the ideal user experience. "),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"The resources section will contain various links to useful resources that will make your design and development process easier, smarter and faster. Resources may contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Various frameworks to consider"),(0,i.kt)("li",{parentName:"ul"},"UX Laws"),(0,i.kt)("li",{parentName:"ul"},"Gradient helpers"),(0,i.kt)("li",{parentName:"ul"},"Curated list of good icon sets"),(0,i.kt)("li",{parentName:"ul"},"Font options"),(0,i.kt)("li",{parentName:"ul"},"Possibly recordings of live streams")),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("p",null,"While the nostr vocabulary is constantly changing, we will do our best to define commonly accepted terms and their meanings to get you up to speed."))}p.isMDXComponent=!0},4474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/introduction-e6d757605e4398a2252086022873f2af.png"}}]);