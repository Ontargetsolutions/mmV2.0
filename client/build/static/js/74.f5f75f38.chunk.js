(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[74],{1367:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(24),c=a(19),s=a(25),r=a(26),l=a(27),m=a(0),i=a.n(m),o=a(59),u=a(475),d=a(481),f=a(478),h=a(487),p=a(48),v=a(28),E=a(498),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,l=new Array(c),m=0;m<c;m++)l[m]=arguments[m];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={comments:null},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getComments()}},{key:"getComments",value:function(){var e=this;p.a.get("comments.js").then((function(t){e.setState({comments:t.data})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state.comments;return i.a.createElement(m.Fragment,null,i.a.createElement(o.Scrollbars,{className:"rct-scroll",autoHeight:!0,autoHeightMin:100,autoHeightMax:424,autoHide:!0},i.a.createElement(d.a,{className:"list-group aqua-ripple p-0"},e&&e.map((function(e){return i.a.createElement(f.a,{className:"d-flex px-20 py-3 align-items-start",key:e.id,button:!0},i.a.createElement("div",{className:"avatar-wrap mr-15"},i.a.createElement("img",{src:e.userAvatar,alt:"project logo",className:"rounded-circle",width:"40",height:"40"})),i.a.createElement("div",{className:"comment-wrap"},i.a.createElement("h5",{className:"mb-0"},e.userName),i.a.createElement("span",{className:"font-xs"},"commented on",i.a.createElement("span",{className:"text-primary"}," ",e.commentTitle)),i.a.createElement("p",{className:"mb-0 font-xs"},e.comment)),i.a.createElement("div",{className:"comment-action w-20 text-right"},i.a.createElement("span",{className:"font-xs text-muted font-weight-light d-block comment-date"},e.date),i.a.createElement("div",{className:"hover-action d-flex align-items-center"},i.a.createElement(h.a,{variant:"round",size:"small",color:"primary",className:"btn-sm mx-1 bg-primary"},i.a.createElement("i",{className:"zmdi zmdi-check"})),i.a.createElement(h.a,{variant:"round",size:"small",className:"bg-danger text-white btn-sm mx-1"},i.a.createElement("i",{className:"zmdi zmdi-delete"})))))})))),i.a.createElement(E.c,{customClasses:"d-flex justify-content-between align-items-center rounded-bottom"},i.a.createElement(u.a,{variant:"contained",color:"primary",className:"px-3 btn-xs bg-primary"},i.a.createElement(v.a,{id:"button.viewAll"}))))}}]),t}(m.Component)},498:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=function(e){var t=e.title,a=e.customClasses;return c.a.createElement("div",{className:"rct-block-title ".concat(a||"")},c.a.createElement("h4",null,t))},r=function(e){var t=e.children,a=e.customClasses,n=e.heading,r=e.headingCustomClasses,l=e.colClasses;return c.a.createElement("div",{className:l&&l},c.a.createElement("div",{className:"rct-block ".concat(a||"")},n&&c.a.createElement(s,{title:n,customClasses:r}),t))},l=function(e){var t=e.children,a=e.customClasses;return c.a.createElement("div",{className:"rct-block-footer ".concat(a||"")},t)},m=function(e){var t=e.children,a=e.customClasses,n=e.noPadding;return c.a.createElement("div",{className:"".concat(n?"rct-full-block":"rct-block-content"," ").concat(a||"")},t)};a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return m}))}}]);
//# sourceMappingURL=74.f5f75f38.chunk.js.map