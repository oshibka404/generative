(this.webpackJsonpgenerative=this.webpackJsonpgenerative||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(4),i=n.n(s),u=(n(10),n(2));n(11),n(12);function l(e,t){return t.map((function(t,n,r){var c=0===n?r.length-1:n-1,a=n===r.length-1?0:n+1,s=r[c],i=r[a];return function(e,t){var n=o(e);return{111:parseInt(n[0],10)||0,110:parseInt(n[1],10)||0,101:parseInt(n[2],10)||0,100:parseInt(n[3],10)||0,"011":parseInt(n[4],10)||0,"010":parseInt(n[5],10)||0,"001":parseInt(n[6],10)||0,"000":parseInt(n[7],10)||0}[t]}(e,[s,t,i].join(""))}))}function o(e){var t=e.toString(2);return t=Array(8-t.length).fill(0).join("")+t}function j(e){var t=e.x,n=e.y,c=e.alive,a=e.toggleAlive,s=0===t;return Object(r.jsx)("div",{className:"grid__cell\n      ".concat(c?"grid__cell--alive":"","\n      ").concat(s?"grid__cell--togglable":"","\n    "),onClick:function(){s&&a(n)}})}var b=[1,0,1,0,1,0,1],d=30,v=function(e){var t=e.tick,n=Object(c.useState)(b),a=Object(u.a)(n,2),s=a[0],i=a[1],v=Object(c.useState)(d),f=Object(u.a)(v,2),g=f[0],O=f[1];function p(e){var t=s.map((function(e){return e}));t[e]=1-s[e],i(t)}var h=function(e,t){for(var n=8,r=[],c=0;c<n;c++)0===c?r.push(t):r.push(l(e,r[r.length-1]));return r}(g,s);return Object(r.jsxs)("div",{className:"progression",children:[Object(r.jsxs)("div",{className:"progression__controls",children:[Object(r.jsx)("div",{className:"progression__rulenumber",children:Object(r.jsxs)("label",{children:[Object(r.jsxs)("div",{className:"label-text",children:[" ","Rule:"]}),Object(r.jsx)("input",{value:g,onChange:function(e){return O(parseInt(e.target.value))}})]})}),Object(r.jsx)("div",{className:"progression__rulenumber",children:Object(r.jsx)("label",{children:Object(r.jsx)("div",{className:"label-text",children:Object(r.jsx)("input",{value:o(g),onChange:function(e){return O(parseInt(e.target.value))}})})})})]}),Object(r.jsxs)("div",{className:"grid",children:[Object(r.jsx)("div",{className:"grid__header",children:["C","D","E","F","G","A","B"].map((function(e){return Object(r.jsx)("div",{className:"grid__header-cell",children:e},e)}))}),h.map((function(e,n){return Object(r.jsx)("div",{className:"grid__row ".concat(n===Math.floor(t/2)?"grid__row--current":""),children:e.map((function(e,t){return Object(r.jsx)(j,{x:n,y:t,alive:e,toggleAlive:p},t)}))},n)}))]})]})};var f=function(){var e=Object(c.useRef)(0),t=Object(c.useState)(-1),n=Object(u.a)(t,2),a=n[0],s=n[1],i=Object(c.useRef)(a),l=Object(c.useState)(!1),o=Object(u.a)(l,2),j=o[0],b=o[1],d=Object(c.useState)(100),f=Object(u.a)(d,2),g=f[0],O=f[1];return Object(c.useEffect)((function(){window.clearInterval(e.current)}),[g]),Object(c.useEffect)((function(){if(j){var t=6e4/g/4;0===e.current&&(e.current=window.setInterval((function(){i.current=(i.current+1)%16,s(i.current)}),t))}else window.clearInterval(e.current),e.current=0,i.current=-1,s(-1)}),[j,g,a]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"App_controls",children:[Object(r.jsx)("input",{value:g,onChange:function(e){return O(parseInt(e.target.value))}}),Object(r.jsx)("button",{onClick:function(){b(!j)},children:j?"pause":"play"})]}),Object(r.jsx)(v,{tick:i.current})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),g()}],[[13,1,2]]]);
//# sourceMappingURL=main.0920f6b5.chunk.js.map