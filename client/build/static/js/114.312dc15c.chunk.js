(this.webpackJsonpreactify=this.webpackJsonpreactify||[]).push([[114],{1374:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return p}));var i=a(24),n=a(19),c=a(25),r=a(26),s=a(27),o=a(0),d=a.n(o),m=a(160),y=a.n(m),h=a(92),l=a.n(h),w=a(13),u=a.n(w);var p=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(c.a)(this,Object(r.a)(e).call(this,t))).state={city:!1,countryCode:!1,todayTemp:!1,todayTempText:!1,todayWeatherIcon:"",currentTime:l()().format("hh:mm A")},a}return Object(s.a)(e,t),Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=this;y.a.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=Mohali&cnt=6&units=metric&mode=json&appid=b1b15e88fa797225412429c1c50c122a1&apikey=69b72ed255ce5efad910bd946685883a").then((function(e){var a;t.setState({city:e.data.city.name,countryCode:e.data.city.country,todayTemp:e.data.list[0].temp.max,todayTempText:e.data.list[0].weather[0].main,todayDayName:l()().format("dddd"),todayWeatherIcon:(a=e.data.list[0].weather[0].id,a>=200&&a<300?"wi wi-night-showers":a>=300&&a<500?"wi day-sleet":a>=500&&a<600?"wi wi-night-showers":a>=600&&a<700?"wi wi-day-snow":a>=700&&a<800?"wi wi-day-fog":800===a?"wi wi-day-sunny":a>=801&&a<803?"wi wi-night-partly-cloudy":a>=802&&a<900?"wi wi-day-cloudy":905===a||a>=951&&a<=956?"wi wi-day-windy":a>=900&&a<1e3?"wi wi-night-showers":void 0)})})).catch((function(t){console.log("Error fetching and parsing data",t)}))}},{key:"render",value:function(){return d.a.createElement("div",{className:"card rct-weather-widget text-white text-center p-0"},d.a.createElement("div",{className:"black-overlay p-20 align-items-center d-flex justify-content-center"},d.a.createElement("div",{className:"d-flex justify-content-start"},d.a.createElement("i",{className:u()(this.state.todayWeatherIcon,"font-4x mr-20")}),d.a.createElement("div",{className:"weather-content"},d.a.createElement("h3",{className:"mb-5"},this.state.city," (",this.state.countryCode,")"),d.a.createElement("h4",{className:"mb-5 dayTime"},this.state.todayDayName," ",this.state.currentTime),d.a.createElement("h2",null,this.state.todayTemp," ",this.state.todayTempText)))))}}]),e}(o.Component)}}]);
//# sourceMappingURL=114.312dc15c.chunk.js.map