(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[55],{1427:function(e,t,n){"use strict";n.r(t);var r=n(24),a=n(19),o=n(25),i=n(26),s=n(27),u=n(0),c=n.n(u),l=n(524),f=n.n(l),p=n(516),d=n(499),m={labels:["Series 1","Series 2","Series 3"],datasets:[{data:[250,25,50],backgroundColor:[d.a.color.primary,d.a.color.warning,d.a.color.success],hoverBackgroundColor:[d.a.color.primary,d.a.color.warning,d.a.color.success]}]},y={legend:{display:!1,labels:{fontColor:d.a.legendFontColor}},cutoutPercentage:70},g=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return c.a.createElement(p.b,{data:m,options:y,height:150})}}]),t}(u.Component);n.d(t,"default",(function(){return h}));var h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"overlay-wrap"},c.a.createElement(g,null),c.a.createElement("div",{className:"overlay-content d-flex justify-content-center align-items-center"},c.a.createElement(f.a,{separator:",",className:"count-value text-muted fw-bold",start:0,end:15800,duration:5,useEasing:!0})))}}]),t}(u.Component)},499:function(e,t,n){"use strict";var r=n(17).a.themeColors,a=r.primary,o=r.info,i=r.danger,s=r.success,u={color:{primary:a,info:o,warning:r.warning,danger:i,success:s,default:"#DEE4E8",purple:r.purple,secondary:r.secondary,yellow:r.yellow,white:"#FFFFFF",dark:r.white,greyLighten:r.greyLighten,grey:r.grey},legendFontColor:"#AAAEB3",chartGridColor:"#EAEAEA",axesColor:"#657786",shadowColor:"rgba(0,0,0,0.6)"};t.a=u},524:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(1)),o=n(0),i=r(o),s=r(n(125)),u=r(n(525));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?y(e):t}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,o=t.easingFn,i=t.end,s=t.formattingFn,c=t.prefix,l=t.separator,f=t.start,p=t.suffix,d=t.useEasing;return new u(e,f,i,r,a,{decimal:n,easingFn:o,formattingFn:s,separator:l,prefix:c,suffix:p,useEasing:d,useGrouping:!!l})},v=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return f(y(n=g(this,(e=d(t)).call.apply(e,[this].concat(a)))),"createInstance",(function(){return"function"===typeof n.props.children&&s(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),b(n.containerRef.current,n.props)})),f(y(n),"pauseResume",(function(){var e=y(n),t=e.reset,r=e.restart,a=e.update,o=n.props.onPauseResume;n.instance.pauseResume(),o({reset:t,start:r,update:a})})),f(y(n),"reset",(function(){var e=y(n),t=e.pauseResume,r=e.restart,a=e.update,o=n.props.onReset;n.instance.reset(),o({pauseResume:t,start:r,update:a})})),f(y(n),"restart",(function(){n.reset(),n.start()})),f(y(n),"start",(function(){var e=y(n),t=e.pauseResume,r=e.reset,a=e.restart,o=e.update,i=n.props,s=i.delay,u=i.onEnd,c=i.onStart,l=function(){return n.instance.start((function(){return u({pauseResume:t,reset:r,start:a,update:o})}))};s>0?n.timeoutId=setTimeout(l,1e3*s):l(),c({pauseResume:t,reset:r,update:o})})),f(y(n),"update",(function(e){var t=y(n),r=t.pauseResume,a=t.reset,o=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:r,reset:a,start:o})})),f(y(n),"containerRef",i.createRef()),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,o=t.prefix,i=t.redraw,s=t.duration,u=t.separator,c=t.decimals,l=t.decimal;return s!==e.duration||n!==e.end||r!==e.start||a!==e.suffix||o!==e.prefix||u!==e.separator||c!==e.decimals||l!==e.decimal||i}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.start,a=t.suffix,o=t.prefix,i=t.duration,s=t.separator,u=t.decimals,c=t.decimal,l=t.preserveValue;i===e.duration&&r===e.start&&a===e.suffix&&o===e.prefix&&s===e.separator&&u===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(l||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,o=this.pauseResume,s=this.reset,u=this.restart,c=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:o,reset:s,start:u,update:c}):i.createElement("span",{className:n,ref:a,style:r})}}])&&l(n.prototype,r),a&&l(n,a),t}(o.Component);f(v,"propTypes",{decimal:a.string,decimals:a.number,delay:a.number,easingFn:a.func,end:a.number.isRequired,formattingFn:a.func,onEnd:a.func,onStart:a.func,prefix:a.string,redraw:a.bool,separator:a.string,start:a.number,startOnMount:a.bool,suffix:a.string,style:a.object,useEasing:a.bool,preserveValue:a.bool}),f(v,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var w={innerHTML:null};t.default=v,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v.defaultProps,{},e),n=t.start,r=t.formattingFn,a=h(o.useState("function"===typeof r?r(n):n),2),i=a[0],s=a[1],u=o.useRef(null),c=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=b(w,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return u.current=n,n},l=function(){var e=t.onReset;c().reset(),e({pauseResume:m,start:d,update:y})},d=function e(){var n=t.onStart,r=t.onEnd;c().reset(),c().start((function(){r({pauseResume:m,reset:l,start:e,update:y})})),n({pauseResume:m,reset:l,update:y})},m=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:l,start:d,update:y})},y=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:m,reset:l,start:d})};return o.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;if(t.startOnMount)var a=setTimeout((function(){n({pauseResume:m,reset:l,update:y}),c().start((function(){clearTimeout(a),r({pauseResume:m,reset:l,start:d,update:y})}))}),1e3*e);return l}),[]),{countUp:i,start:d,pauseResume:m,reset:l,update:y}}},525:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,o){function i(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},formattingFn:function(e){var t,n,r,a,o,i,u=e<0;if(e=Math.abs(e).toFixed(s.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(a="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(a=s.options.separator+a),a=n[i-o-1]+a;n=a}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),(u?"-":"")+s.options.prefix+n+r+s.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var u in s.options)o.hasOwnProperty(u)&&null!==o[u]&&(s.options[u]=o[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var c=0,l=["webkit","moz","ms","o"],f=0;f<l.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[l[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[f]+"CancelAnimationFrame"]||window[l[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-c)),a=window.setTimeout((function(){e(n+r)}),r);return c=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!!s.initialized||(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),i(s.startVal)&&i(s.endVal)?(s.decimals=Math.max(0,r||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(a)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,!0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(s.error="[CountUp] target is null or undefined",!1))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!i(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)}}]);
//# sourceMappingURL=55.368921ad.chunk.js.map