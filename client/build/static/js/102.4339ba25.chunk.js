(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[102],{1350:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(24),l=t(19),s=t(25),c=t(26),o=t(27),m=t(0),i=t.n(m),d=t(949),p=t.n(d),u=t(1408),f=t(1337),h=t(440),b=t(483),E=t(480),v=[{locationId:1,sales:"+ 01 123 456 7890, info@sales.com",support:"info@support.com",phone:"12002342345656",fax:"+011234567890",address:"E - 51m, Industrial area, Phase 2, Mohali, Punjab, India."},{locationId:2,sales:"+91123456789, info@example.com",support:"support@info.com",phone:"+91123456789",fax:"+123456789564",address:""},{locationId:3,sales:"",support:"example@info.com",phone:"+39209424892346",fax:"+56837653878756",address:"E - 51m, Industrial area, Phase 2, Mohali, Punjab, India."}],x=[{id:1,name:"USA"},{id:2,name:"India"},{id:3,name:"UK"}];function y(e){var a=e.children;return i.a.createElement(h.a,{component:"div"},a)}var N=function(e){var a=e.data;return i.a.createElement(b.a,{className:"p-0 border-top"},""!==a.sales&&i.a.createElement(E.a,{className:"d-flex align-items-center border-bottom py-15"},i.a.createElement("span",{className:"w-25"},"Sales"),i.a.createElement("p",{className:"w-75 mb-0"},a.sales)),""!==a.support&&i.a.createElement(E.a,{className:"d-flex align-items-center border-bottom py-15"},i.a.createElement("span",{className:"w-25"},"Support"),i.a.createElement("a",{href:"mailto: ".concat(a.support),className:"d-block w-75 text-dark"},a.support)),""!==a.phone&&i.a.createElement(E.a,{className:"d-flex align-items-center border-bottom py-15 "},i.a.createElement("span",{className:"w-25"},"Phone"),i.a.createElement("a",{href:"tel:".concat(a.phone),className:"w-75 d-block text-dark"},a.phone)),""!==a.fax&&i.a.createElement(E.a,{className:"d-flex align-items-center border-bottom py-15"},i.a.createElement("span",{className:"w-25"},"Fax"),i.a.createElement("p",{className:"w-75 mb-0"},a.fax)),""!==a.address&&i.a.createElement(E.a,{className:"d-flex align-items-center py-15"},i.a.createElement("span",{className:"w-25"},"Address"),i.a.createElement("div",{className:"w-75"},i.a.createElement("address",{className:"mb-0"},a.address),i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},className:"text-danger d-block"},"Get Direction"))))},g=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(l)))).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t.handleChangeIndex=function(e){t.setState({value:e})},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"getCountryName",value:function(e){var a=!0,t=!1,n=void 0;try{for(var r,l=x[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var s=r.value;if(s.id===e)return s.name}}catch(c){t=!0,n=c}finally{try{a||null==l.return||l.return()}finally{if(t)throw n}}}},{key:"render",value:function(){var e,a=this;return i.a.createElement("div",{className:"location-wrap"},i.a.createElement(u.a,(e={value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},Object(n.a)(e,"variant","scrollable"),Object(n.a)(e,"scrollButtons","off"),e),v.map((function(e,t){return i.a.createElement(f.a,{label:a.getCountryName(e.locationId),key:t})}))),i.a.createElement(p.a,{index:this.state.value,onChangeIndex:this.handleChangeIndex},v.map((function(e,a){return i.a.createElement(y,{key:a},i.a.createElement(N,{data:e}))}))))}}]),a}(m.Component);a.default=g}}]);
//# sourceMappingURL=102.4339ba25.chunk.js.map