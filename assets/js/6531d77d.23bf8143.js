"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[164],{208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var c=n(7624),a=n(5788);const s={},o="Wallet Connect",l={id:"reference-designs/wallet-connect",title:"Wallet Connect",description:"All of the designs on this page can be found in the Reference Designs Figma File. Feel free to make a copy and use however you wish. This resource is open source without any limitations.",source:"@site/docs/reference-designs/wallet-connect.md",sourceDirName:"reference-designs",slug:"/reference-designs/wallet-connect",permalink:"/docs/reference-designs/wallet-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/reference-designs/wallet-connect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Threads",permalink:"/docs/reference-designs/threads"},next:{title:"Zaps",permalink:"/docs/reference-designs/zaps"}},i={},r=[{value:"Empty Wallet",id:"empty-wallet",level:2},{value:"Connect a Wallet Modal",id:"connect-a-wallet-modal",level:2},{value:"Connected Successfully",id:"connected-successfully",level:2},{value:"Connected Wallet View",id:"connected-wallet-view",level:2},{value:"Wallet with Balance Example",id:"wallet-with-balance-example",level:2},{value:"FAQ Modal",id:"faq-modal",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,a.MN)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"wallet-connect",children:"Wallet Connect"}),"\n",(0,c.jsx)(t.admonition,{title:"Resource",type:"tip",children:(0,c.jsxs)(t.p,{children:["All of the designs on this page can be found in the ",(0,c.jsx)(t.a,{href:"https://www.figma.com/file/C2ztFLDxihrfturW7Q6kbj/Reference-Components?type=design&node-id=213%3A11495&mode=design&t=qbn9PiAj1v6RWRwM-1",children:"Reference Designs Figma File"}),". Feel free to make a copy and use however you wish. This resource is open source without any limitations."]})}),"\n",(0,c.jsx)(t.p,{children:'Nostr clients have the option of showing connected lightning wallet balances in the interface. The process of connecting wallets is called one of several things: "Nostr Wallet Connect (NWC)", "Bitcoin Connect" or "Wallet Connect". For the sake of simplicity, and if the community approves, we\'ll refer to this process as "Wallet Connect" in this document.'}),"\n",(0,c.jsx)(t.h2,{id:"empty-wallet",children:"Empty Wallet"}),"\n",(0,c.jsx)(t.p,{children:"We limit the interface to be simple and inviting."}),"\n",(0,c.jsx)("img",{src:n(5752).c}),"\n",(0,c.jsx)(t.h2,{id:"connect-a-wallet-modal",children:"Connect a Wallet Modal"}),"\n",(0,c.jsx)(t.p,{children:'When the user clicks the "Connect Wallet" button, a modal appears with a list of wallets to choose from. Each option has a hover state.'}),"\n",(0,c.jsx)("img",{src:n(3500).c}),"\n",(0,c.jsx)(t.h2,{id:"connected-successfully",children:"Connected Successfully"}),"\n",(0,c.jsx)(t.p,{children:'There are some steps with each option, but once finished the user would see a successful connection screen. The button can be customized to say anything such as "View Wallet" or "Done". Notice that we customize the app name within the copy below the heading.'}),"\n",(0,c.jsx)("img",{src:n(4616).c}),"\n",(0,c.jsx)(t.h2,{id:"connected-wallet-view",children:"Connected Wallet View"}),"\n",(0,c.jsx)(t.p,{children:"Here we show that the Alby wallet is connected. If users wish to add a different one, they'll have to disconnect the current wallet to see the connect button. New wallet users might show a 0 balance, while people with existing wallet balances would see their balance here."}),"\n",(0,c.jsx)("img",{src:n(2448).c}),"\n",(0,c.jsx)(t.h2,{id:"wallet-with-balance-example",children:"Wallet with Balance Example"}),"\n",(0,c.jsx)("img",{src:n(532).c}),"\n",(0,c.jsx)(t.h2,{id:"faq-modal",children:"FAQ Modal"}),"\n",(0,c.jsx)(t.p,{children:"The info button pops up a modal with some helpful information about wallets, sats, zaps and more. The current answers are just placeholders."}),"\n",(0,c.jsx)("img",{src:n(4816).c})]})}function h(e={}){const{wrapper:t}={...(0,a.MN)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},5788:(e,t,n)=>{n.d(t,{MN:()=>r});var c=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=c.createContext({}),r=function(e){var t=c.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},h=c.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=r(n),u=a,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||s;return n?c.createElement(f,o(o({ref:t},h),{},{components:n})):c.createElement(f,o({ref:t},h))}));h.displayName="MDXCreateElement"},5752:(e,t,n)=>{n.d(t,{c:()=>c});const c=n.p+"assets/images/wallet-connect-1-a3e063b7ac20e2fad73ebcdbcfd9fafa.png"},3500:(e,t,n)=>{n.d(t,{c:()=>c});const c=n.p+"assets/images/wallet-connect-2-8ad9a5c434778646d234d098ee472d4a.png"},4616:(e,t,n)=>{n.d(t,{c:()=>c});const c=n.p+"assets/images/wallet-connect-3-e27fef82baa73f7adfc4ea56e1efe7e9.png"},2448:(e,t,n)=>{n.d(t,{c:()=>c});const c=n.p+"assets/images/wallet-connect-4-7678aba3e84182fecf4d3622c0186b22.png"},532:(e,t,n)=>{n.d(t,{c:()=>c});const c=n.p+"assets/images/wallet-connect-5-98ec152af6047632a870e0d5f80b3ecb.png"},4816:(e,t,n)=>{n.d(t,{c:()=>c});const c=n.p+"assets/images/wallet-connect-6-02460da62f67ac06795f14ec4f19a972.png"}}]);