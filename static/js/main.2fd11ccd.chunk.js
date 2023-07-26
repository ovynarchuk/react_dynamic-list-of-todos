(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(2),l=c(8),i=c(1),d=(c(13),c(14),c(5)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.isClickedId,s=e.setIsClickedId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"":c!==e.id,"has-background-info-light":c===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}):Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":c!==e.id,"fa-eye-slash":c===e.id})})})})})]},e.id)}))})]})},b=function(e){var t=e.query,c=e.setQuery,s=e.setFilterType;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return s(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})},u=(c(16),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.todos,c=e.setIsClickedId,s=e.isClickedId,a=Object(i.useState)(null),l=Object(n.a)(a,2),d=l[0],o=l[1],j=Object(i.useState)(!1),b=Object(n.a)(j,2),m=b[0],O=b[1],x=t.find((function(e){return e.id===s}));return Object(i.useEffect)((function(){var e;O(!0),x&&(e=x.userId,h("/users/".concat(e))).then((function(e){o(e),O(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),m?Object(r.jsx)(u,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===x||void 0===x?void 0:x.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===x||void 0===x?void 0:x.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==x&&void 0!==x&&x.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===d||void 0===d?void 0:d.email),children:null===d||void 0===d?void 0:d.name})]})]})]})]})},O=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!0),d=Object(n.a)(a,2),o=d[0],O=d[1],x=Object(i.useState)(null),f=Object(n.a)(x,2),v=f[0],p=f[1],N=Object(i.useState)(""),y=Object(n.a)(N,2),g=y[0],k=y[1],C=Object(i.useState)("all"),I=Object(n.a)(C,2),S=I[0],w=I[1],T=function(e,t,c){var s=Object(l.a)(e);return t&&(s=s.filter((function(e){return e.title.toLowerCase().toLowerCase().includes(t.toLowerCase())}))),s.filter((function(e){return"active"===c?!1===e.completed:"completed"===c?!0===e.completed:e}))}(c,g,S);return Object(i.useEffect)((function(){h("/todos").then((function(e){s(e),O(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:g,setQuery:k,setFilterType:w})}),Object(r.jsx)("div",{className:"block",children:o?Object(r.jsx)(u,{}):Object(r.jsx)(j,{todos:T,isClickedId:v,setIsClickedId:function(e){return p(e)}})})]})})}),v&&Object(r.jsx)(m,{setIsClickedId:function(e){return p(e)},todos:T,isClickedId:v})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2fd11ccd.chunk.js.map