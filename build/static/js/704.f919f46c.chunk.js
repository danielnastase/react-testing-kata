"use strict";(self.webpackChunktesting_react_applications_workshop=self.webpackChunktesting_react_applications_workshop||[]).push([[704],{3845:function(t,n,r){r(2791);var e=r(184);n.Z=function(){return(0,e.jsxs)("div",{className:"lds-ripple","aria-label":"loading...",children:[(0,e.jsx)("div",{}),(0,e.jsx)("div",{})]})}},704:function(t,n,r){r.r(n);var e=r(885),i=(r(2791),r(7906)),o=r(3845),u=r(184);n.default=function(){var t=(0,i.OQ)(),n=(0,e.Z)(t,2),r=n[0],a=n[1];return r||a?a?(0,u.jsx)("div",{role:"alert",style:{color:"red"},children:a.message}):(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:["Latitude: ",r.coords.latitude]}),(0,u.jsxs)("p",{children:["Longitude: ",r.coords.longitude]})]}):(0,u.jsx)(o.Z,{})}},7906:function(t,n,r){Object.defineProperty(n,"OQ",{enumerable:!0,get:function(){return e.useCurrentPosition}});var e=r(3981),i=r(3367)},3981:function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.useCurrentPosition=function(t){var n=i((0,e.useState)(),2),r=n[0],o=n[1],u=i((0,e.useState)(),2),a=u[0],c=u[1];return(0,e.useEffect)((function(){var n=!1;return navigator.geolocation.getCurrentPosition((function(t){n||o(t)}),(function(t){n||c(t)}),t),function(){n=!0}}),[t]),[r,a]};var e=r(2791);function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=[],e=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(e=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},3367:function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.useWatchPosition=function(t){var n=i((0,e.useState)(null),2),r=n[0],o=n[1],u=i((0,e.useState)(null),2),a=u[0],c=u[1];return(0,e.useEffect)((function(){var n=navigator.geolocation.watchPosition(o,c,t);return function(){return navigator.geolocation.clearWatch(n)}}),[t]),[r,a]};var e=r(2791);function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=[],e=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(e=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}}}]);
//# sourceMappingURL=704.f919f46c.chunk.js.map