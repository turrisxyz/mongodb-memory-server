(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(3),a=n(7),r=(n(0),n(93)),o={id:"supported-systems",title:"Supported Systems"},b={unversionedId:"guides/supported-systems",id:"guides/supported-systems",isDocsHomePage:!1,title:"Supported Systems",description:"Currently Supported platforms:",source:"@site/../docs/guides/supported-systems.md",slug:"/guides/supported-systems",permalink:"/mongodb-memory-server/docs/guides/supported-systems",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/supported-systems.md",version:"current",sidebar:"guides",previous:{title:"Frequently Asked Questions",permalink:"/mongodb-memory-server/docs/guides/faq"},next:{title:"Known Issues",permalink:"/mongodb-memory-server/docs/guides/known-issues"}},s=[{value:"Windows",id:"windows",children:[]},{value:"MacOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[{value:"Ubuntu (and based on systems)",id:"ubuntu-and-based-on-systems",children:[]},{value:"Debian",id:"debian",children:[]},{value:"Fedora",id:"fedora",children:[]},{value:"Rhel",id:"rhel",children:[]},{value:"ElementaryOS",id:"elementaryos",children:[]},{value:"Linux Mint",id:"linux-mint",children:[]},{value:"Suse",id:"suse",children:[]},{value:"Arch",id:"arch",children:[]},{value:"Alpine",id:"alpine",children:[]}]}],c={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Currently Supported platforms:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"win32")," / ",Object(r.b)("inlineCode",{parentName:"li"},"windows")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"macos")," / ",Object(r.b)("inlineCode",{parentName:"li"},"osx")," / ",Object(r.b)("inlineCode",{parentName:"li"},"darwin")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"linux"))),Object(r.b)("p",null,"Officially Supported Architectures:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x64")," / ",Object(r.b)("inlineCode",{parentName:"li"},"x86_64")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ia32")," / ",Object(r.b)("inlineCode",{parentName:"li"},"i686")," / ",Object(r.b)("inlineCode",{parentName:"li"},"i386"))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"On systems with native translation, will work when overwriting the architecture with ",Object(r.b)("inlineCode",{parentName:"p"},"MONGOMS_ARCH=x64")))),Object(r.b)("h2",{id:"windows"},"Windows"),Object(r.b)("p",null,"Should just work out of the box"),Object(r.b)("h2",{id:"macos"},"MacOS"),Object(r.b)("p",null,"On x64 systems, it should work right out of the box",Object(r.b)("br",null),"\nOn Arm64 systems, the architecture needs to be overwritten with ",Object(r.b)("inlineCode",{parentName:"p"},"MONGOMS_ARCH=x64"),", only exception being (and based on) ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")),Object(r.b)("h2",{id:"linux"},"Linux"),Object(r.b)("p",null,"Depends on the distribution, many common ones should just work right out of the box"),Object(r.b)("h3",{id:"ubuntu-and-based-on-systems"},"Ubuntu (and based on systems)"),Object(r.b)("p",null,"(uses mongodb's ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," release)",Object(r.b)("br",null),"\nLowest supported Distribution version is ",Object(r.b)("inlineCode",{parentName:"p"},"1404"),Object(r.b)("br",null),"\nHighest version (default to) is ",Object(r.b)("inlineCode",{parentName:"p"},"2004")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Lower Versions than ",Object(r.b)("inlineCode",{parentName:"p"},"2004")," may be used if mongodb dosnt provide binaries for an lower version of mongodb for an higher version of ubuntu"))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For Arm64 MongoDB only provides binaries for ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu1604")))),Object(r.b)("h3",{id:"debian"},"Debian"),Object(r.b)("p",null,"(uses mongodb's ",Object(r.b)("inlineCode",{parentName:"p"},"debian")," release)",Object(r.b)("br",null),"\nLowest supported Distribution version is ",Object(r.b)("inlineCode",{parentName:"p"},"71"),Object(r.b)("br",null),"\nHighest version (default to) is ",Object(r.b)("inlineCode",{parentName:"p"},"10")),Object(r.b)("h3",{id:"fedora"},"Fedora"),Object(r.b)("p",null,"(uses mongodb's ",Object(r.b)("inlineCode",{parentName:"p"},"rhel")," release)",Object(r.b)("br",null),"\nLowest supported Distribution version is ",Object(r.b)("inlineCode",{parentName:"p"},"6"),Object(r.b)("br",null),"\nHighest version (default to) is ",Object(r.b)("inlineCode",{parentName:"p"},"18")),Object(r.b)("h3",{id:"rhel"},"Rhel"),Object(r.b)("p",null,"(uses mongodb's ",Object(r.b)("inlineCode",{parentName:"p"},"rhel")," release)",Object(r.b)("br",null),"\nLowest supported Distribution version is ",Object(r.b)("inlineCode",{parentName:"p"},"5"),Object(r.b)("br",null),"\nHighest version (default to) is ",Object(r.b)("inlineCode",{parentName:"p"},"8")),Object(r.b)("h3",{id:"elementaryos"},"ElementaryOS"),Object(r.b)("p",null,"(uses mongodb's ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," release)",Object(r.b)("br",null),"\nLowest supported Distribution version is ",Object(r.b)("inlineCode",{parentName:"p"},"3")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"0.3"),")",Object(r.b)("br",null),"\nHighest version (default to) is ",Object(r.b)("inlineCode",{parentName:"p"},"6")),Object(r.b)("h3",{id:"linux-mint"},"Linux Mint"),Object(r.b)("p",null,"(uses mongodb's ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," release)",Object(r.b)("br",null),"\nLowest supported Distribution version is ",Object(r.b)("inlineCode",{parentName:"p"},"17"),Object(r.b)("br",null),"\nHighest version (default to) is ",Object(r.b)("inlineCode",{parentName:"p"},"20")),Object(r.b)("h3",{id:"suse"},"Suse"),Object(r.b)("p",null,"(uses mongodb's ",Object(r.b)("inlineCode",{parentName:"p"},"suse")," release)",Object(r.b)("br",null),"\nLowest supported Distribution version is ",Object(r.b)("inlineCode",{parentName:"p"},"11"),Object(r.b)("br",null),"\nHighest version (default to) is ",Object(r.b)("inlineCode",{parentName:"p"},"12")),Object(r.b)("h3",{id:"arch"},"Arch"),Object(r.b)("p",null,"There are no official mongodb builds for Arch Distributions, but the ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," binaries work on most Arch systems, so they are used",Object(r.b)("br",null)),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Because Arch* dosnt base on ubuntu, there is no specific ubuntu version associated with an arch version, so it defaults to highest supported ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," version"))),Object(r.b)("h3",{id:"alpine"},"Alpine"),Object(r.b)("p",null,"There are no official mongodb builds alpine, though there are some unoffical build of mongodb build for it which can be used"))}l.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||r;return n?a.a.createElement(m,b(b({ref:t},c),{},{components:n})):a.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:i,o[1]=b;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);