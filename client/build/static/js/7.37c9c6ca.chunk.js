(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[7],{364:function(a,e,t){"use strict";var s=t(0),c=t.n(s),r=t(365),n=t(366),l=t(21),i=t(17),u=function(a,e,t){return 0===t?"/":"/"+a.split(e)[0]+e},m=function(a){var e=a.title,t=a.match,s=a.enableBreadCrumb,m=t.path.substr(1),o=m.split("/");return c.a.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},e&&c.a.createElement("div",{className:"page-title-wrap"},c.a.createElement("i",{className:"ti-angle-left"}),c.a.createElement("h2",{className:""},e)),s&&c.a.createElement(r.a,{className:"mb-0 tour-step-7",tag:"nav"},o.map((function(a,e){return c.a.createElement(n.a,{active:o.length===e+1,tag:o.length===e+1?"span":l.b,key:e,to:u(m,a,e)},function(a){var e=a.split("-");return e.length>1?c.a.createElement(i.a,{id:"sidebar.".concat(e[0].charAt(0)+e[0].slice(1)+e[1].charAt(0).toUpperCase()+e[1].slice(1))}):c.a.createElement(i.a,{id:"sidebar.".concat(a.charAt(0)+a.slice(1))})}(a))}))))};m.defaultProps={enableBreadCrumb:!0},e.a=m},365:function(a,e,t){"use strict";var s=t(2),c=t(13),r=t(0),n=t.n(r),l=t(1),i=t.n(l),u=t(10),m=t.n(u),o=t(5),b={tag:o.m,listTag:o.m,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},d=function(a){var e=a.className,t=a.listClassName,r=a.cssModule,l=a.children,i=a.tag,u=a.listTag,b=a["aria-label"],d=Object(c.a)(a,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(o.i)(m()(e),r),g=Object(o.i)(m()("breadcrumb",t),r);return n.a.createElement(i,Object(s.a)({},d,{className:p,"aria-label":b}),n.a.createElement(u,{className:g},l))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},e.a=d},366:function(a,e,t){"use strict";var s=t(2),c=t(13),r=t(0),n=t.n(r),l=t(1),i=t.n(l),u=t(10),m=t.n(u),o=t(5),b={tag:o.m,active:i.a.bool,className:i.a.string,cssModule:i.a.object},d=function(a){var e=a.className,t=a.cssModule,r=a.active,l=a.tag,i=Object(c.a)(a,["className","cssModule","active","tag"]),u=Object(o.i)(m()(e,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(l,Object(s.a)({},i,{className:u,"aria-current":r?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"},e.a=d},374:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return b}));var s=t(22),c=t(15),r=t(23),n=t(24),l=t(25),i=t(0),u=t.n(i),m=t(17),o=t(364),b=function(a){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(n.a)(e).apply(this,arguments))}return Object(l.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){var a=this.props.match;return u.a.createElement("div",{className:"saas-dashboard"},u.a.createElement(o.a,{title:u.a.createElement(m.a,{id:"sidebar.saas"}),match:a}))}}]),e}(i.Component)}}]);
//# sourceMappingURL=7.37c9c6ca.chunk.js.map