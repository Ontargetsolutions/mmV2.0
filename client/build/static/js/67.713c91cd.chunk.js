(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[67],{1046:function(e,t,a){"use strict";var n=a(3),c=a(15),s=a(0),r=a.n(s),i=a(1),o=a.n(i),l=a(13),m=a.n(l),u=a(6),d={tag:u.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,i=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.j)(m()(t,"card-body"),a);return r.a.createElement(i,Object(n.a)({},o,{className:l,ref:s}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b},1412:function(e,t,a){"use strict";a.r(t);var n=a(24),c=a(19),s=a(25),r=a(26),i=a(27),o=a(0),l=a.n(o),m=a(957),u=a(1046),d=a(436),b=a(29),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={time:{},seconds:e.time?e.time:3600},a.timer=0,a.countDown=a.countDown.bind(Object(b.a)(a)),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"secondsToTime",value:function(e){var t=e%3600,a=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(a)}}},{key:"componentDidMount",value:function(){var e=this.secondsToTime(this.state.seconds);this.setState({time:e}),this.startTimer()}},{key:"startTimer",value:function(){0===this.timer&&(this.timer=setInterval(this.countDown,1e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"countDown",value:function(){var e=this.state.seconds-1;this.setState({time:this.secondsToTime(e),seconds:e}),0==e&&clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.time,t=e.m,a=e.s;return l.a.createElement(o.Fragment,null,t," : ",a<10?"0".concat(a):a)}}]),t}(o.Component),h=a(28);a.d(t,"default",(function(){return v}));var v=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,{className:"rct-block"},l.a.createElement(u.a,{className:"d-flex"},l.a.createElement("div",null,l.a.createElement("span",{className:"d-flex justify-content-center align-items-center rounded-circle bg-warning p-15 mr-15"},l.a.createElement("i",{className:"zmdi zmdi-notifications-active zmdi-hc-lg text-white"}))),l.a.createElement("div",null,l.a.createElement("p",{className:"fs-14 fw-bold mb-5"},"New order from John"),l.a.createElement("span",{className:"fs-12 mb-20 d-block text-muted"},l.a.createElement(h.a,{id:"widgets.AcceptorrRejectWithin"})),l.a.createElement("h1",{className:"border py-5 px-15 d-inline-block mr-20"}," ",l.a.createElement(f,{time:5e5})," "),l.a.createElement("div",{className:"d-inline-block"},l.a.createElement(d.a,{className:"mr-10","aria-label":"check"},l.a.createElement("i",{className:"zmdi zmdi-check"})),l.a.createElement(d.a,{"aria-label":"close"},l.a.createElement("i",{className:"zmdi zmdi-close"}))))))}}]),t}(o.Component)},957:function(e,t,a){"use strict";var n=a(3),c=a(15),s=a(0),r=a.n(s),i=a(1),o=a.n(i),l=a(13),m=a.n(l),u=a(6),d={tag:u.n,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,s=e.color,i=e.body,o=e.inverse,l=e.outline,d=e.tag,b=e.innerRef,f=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(u.j)(m()(t,"card",!!o&&"text-white",!!i&&"card-body",!!s&&(l?"border":"bg")+"-"+s),a);return r.a.createElement(d,Object(n.a)({},f,{className:h,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=67.713c91cd.chunk.js.map