"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[1804],{8172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7624),i=n(5788);const o={sidebar_position:7},a="Open Graph Data",s={id:"product-design-considerations/open-graph-data",title:"Open Graph Data",description:"Open Graph (OG) tags communicate information that allows people to preview the link before clicking it.",source:"@site/docs/product-design-considerations/open-graph-data.md",sourceDirName:"product-design-considerations",slug:"/product-design-considerations/open-graph-data",permalink:"/docs/product-design-considerations/open-graph-data",draft:!1,unlisted:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/product-design-considerations/open-graph-data.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Product-Led Marketing",permalink:"/docs/product-design-considerations/product-led-marketing"},next:{title:"Design Principles",permalink:"/docs/category/design-principles"}},c={},p=[{value:"Dynamic Open Graph Images",id:"dynamic-open-graph-images",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"open-graph-data",children:"Open Graph Data"}),"\n",(0,r.jsx)(t.p,{children:"Open Graph (OG) tags communicate information that allows people to preview the link before clicking it."}),"\n",(0,r.jsx)(t.admonition,{title:"Resource",type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.opengraph.xyz/",children:"Open Graph Data Generator"})," - use this to generate the necessary template and update the static values with your dynamic variables."]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Example of output code:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:' \x3c!-- HTML Meta Tags --\x3e\n  <title>Nostr Design</title>\n  <meta name="description" content="A comprehensive resource for designers and developers to build successful nostr products">\n\n  \x3c!-- Facebook Meta Tags --\x3e\n  <meta property="og:url" content="https://nostrdesign.org">\n  <meta property="og:type" content="website">\n  <meta property="og:title" content="Nostr Design">\n  <meta property="og:description" content="A comprehensive resource for designers and developers to build successful nostr products">\n  <meta property="og:image" content="https://nostrdesign.org/img/nostr-cover.jpg">\n\n  \x3c!-- Twitter Meta Tags --\x3e\n  <meta name="twitter:card" content="summary_large_image">\n  <meta property="twitter:domain" content="nostrdesign.org">\n  <meta property="twitter:url" content="https://nostrdesign.org">\n  <meta name="twitter:title" content="Nostr Design">\n  <meta name="twitter:description" content="A comprehensive resource for designers and developers to build successful nostr products">\n  <meta name="twitter:image" content="https://nostrdesign.org/img/nostr-cover.jpg">\n'})}),"\n",(0,r.jsx)(t.p,{children:"OG data includes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Title"}),"\n",(0,r.jsx)(t.li,{children:"Description"}),"\n",(0,r.jsx)(t.li,{children:"(Optional) Image"}),"\n",(0,r.jsx)(t.li,{children:"URL Preview"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Without this information, or if not implemented by the client, most links will render with a default title which may not be indicative of the content being linked."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Snort.social \n"})}),"\n",(0,r.jsx)(t.p,{children:"With OG tags in place, social clients may generate nicer previews, and other non-nostr app links will be more enticing to click:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Edward Snowden - Snort\nBio: I used to work for the government. Now I work for the public. Author, "Permanent Record": https://us.macmillan.com/books/9781250237231/permanentrecord\nBanner Image (or dynamically generated image)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"dynamic-open-graph-images",children:"Dynamic Open Graph Images"}),"\n",(0,r.jsxs)(t.p,{children:["To take things even further and make more actionable social graph images, savvy developers can utilize various techniques to dynamically generate OG images. The technical aspects are beyond the scope of this guide, but you may find various tutorials if you search for \u201cdynamic open graph images\u201d (",(0,r.jsx)(t.a,{href:"https://urre.me/writings/dynamic-open-graph-images/",children:"example 1"}),", ",(0,r.jsx)(t.a,{href:"https://www.netlify.com/blog/dynamically-generate-open-graph-image-variants/",children:"example 2)"})]})]})}function l(e={}){const{wrapper:t}={...(0,i.MN)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5788:(e,t,n)=>{n.d(t,{MN:()=>p});var r=n(1504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,u=m["".concat(c,".").concat(g)]||m[g]||d[g]||o;return n?r.createElement(u,a(a({ref:t},l),{},{components:n})):r.createElement(u,a({ref:t},l))}));l.displayName="MDXCreateElement"}}]);