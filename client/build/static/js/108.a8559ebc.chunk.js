(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[108],{1387:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var s=a(24),n=a(19),i=a(25),r=a(26),c=a(27),l=a(0),o=a.n(l),u=a(581),m=a.n(u),d=a(81),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={sessionUsersData:null},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.getSessionUsersData()}},{key:"getSessionUsersData",value:function(){var e=this;d.a.get("testimonials.js").then((function(t){console.log(t),e.setState({sessionUsersData:t.data})})).catch((function(e){}))}},{key:"render",value:function(){var e=this.state.sessionUsersData;return o.a.createElement("div",{className:"session-slider"},o.a.createElement(m.a,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,swipe:!0,touchMove:!0,swipeToSlide:!0,draggable:!0},e&&null!==e&&e.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("img",{src:e.profile,alt:"session-slider",className:"img-fluid",width:"377",height:"588"}),o.a.createElement("div",{className:"rct-img-overlay"},o.a.createElement("h5",{className:"client-name"},e.name),o.a.createElement("span",null,e.designation),o.a.createElement("p",{className:"mb-0 fs-14"},e.body)))}))))}}]),t}(l.Component)}}]);
//# sourceMappingURL=108.a8559ebc.chunk.js.map