(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[116],{1410:function(e,a,t){"use strict";t.r(a);var r=t(24),c=t(19),s=t(25),l=t(26),n=t(27),i=t(0),m=t.n(i),o=t(28),u=t(3),b=t(15),d=t(1),p=t.n(d),g=t(14),h=t.n(g),v=t(6),f={tag:v.n,listTag:v.n,className:p.a.string,listClassName:p.a.string,cssModule:p.a.object,children:p.a.node,"aria-label":p.a.string},j=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,c=e.children,s=e.tag,l=e.listTag,n=e["aria-label"],i=Object(b.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),o=Object(v.j)(h()(a),r),d=Object(v.j)(h()("breadcrumb",t),r);return m.a.createElement(s,Object(u.a)({},i,{className:o,"aria-label":n}),m.a.createElement(l,{className:d},c))};j.propTypes=f,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var N=j,E={tag:v.n,active:p.a.bool,className:p.a.string,cssModule:p.a.object},O=function(e){var a=e.className,t=e.cssModule,r=e.active,c=e.tag,s=Object(b.a)(e,["className","cssModule","active","tag"]),l=Object(v.j)(h()(a,!!r&&"active","breadcrumb-item"),t);return m.a.createElement(c,Object(u.a)({},s,{className:l,"aria-current":r?"page":void 0}))};O.propTypes=E,O.defaultProps={tag:"li"};var y=O,C=t(21),M=function(e,a,t){return 0===t?"/":"/"+e.split(a)[0]+a},T=function(e){var a=e.title,t=e.match,r=e.enableBreadCrumb,c=t.path.substr(1),s=c.split("/");return m.a.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},a&&m.a.createElement("div",{className:"page-title-wrap"},m.a.createElement("i",{className:"ti-angle-left"}),m.a.createElement("h2",{className:""},a)),r&&m.a.createElement(N,{className:"mb-0 tour-step-7",tag:"nav"},s.map((function(e,a){return m.a.createElement(y,{active:s.length===a+1,tag:s.length===a+1?"span":C.b,key:a,to:M(c,e,a)},function(e){var a=e.split("-");return a.length>1?m.a.createElement(o.a,{id:"sidebar.".concat(a[0].charAt(0)+a[0].slice(1)+a[1].charAt(0).toUpperCase()+a[1].slice(1))}):m.a.createElement(o.a,{id:"sidebar.".concat(e.charAt(0)+e.slice(1))})}(e))}))))};T.defaultProps={enableBreadCrumb:!0};var w=T;t.d(a,"default",(function(){return k}));var k=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(n.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.match;return m.a.createElement("div",{className:"ecom-dashboard-wrapper"},m.a.createElement(w,{title:m.a.createElement(o.a,{id:"sidebar.ecommerce"}),match:e}))}}]),a}(i.Component)}}]);
//# sourceMappingURL=116.e01a05b7.chunk.js.map