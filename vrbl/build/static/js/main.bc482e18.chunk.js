(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(26),i=c.n(n),r=(c(32),c.p,c(33),c(2)),o=c(9),l=(c(34),c(35),c(8)),j=c.n(l),d=c(0);var u=function(){var e=Object(r.f)(),t=Object(r.g)();return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header-name",onClick:function(){return e.push("/")},children:"vrbl"}),Object(d.jsxs)("div",{className:"header-links",children:[Object(d.jsx)("button",{onClick:function(){return e.push("/about")},children:"About us"}),Object(d.jsxs)("button",{onClick:function(){"/"==t.pathname&&j()("html, body").animate({scrollTop:j()(".comingSoon-clock").offset().top},2e3)},children:[Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fab fa-apple"})})," \xa0\xa0 Coming soon"]})]})]})},b=c.p+"static/media/Group 2661.be698b51.png",m=c.p+"static/media/oop.d3fa456d.png";c(45);var h=function(){var e=Object(r.f)();return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("div",{className:"footer-links",children:[Object(d.jsx)("button",{onClick:function(){return e.push("/privacy")},children:"Privacy Policies"}),Object(d.jsx)("button",{onClick:function(){return e.push("/terms")},children:"Terms & Agreement"}),Object(d.jsxs)("button",{children:["Contact Us : ",Object(d.jsx)("a",{href:"mailto:customer.support@vrbl.co.in",children:"customer.support@vrbl.co.in"})," "]})]}),Object(d.jsxs)("div",{className:"social-links",children:[Object(d.jsx)("button",{children:Object(d.jsx)("a",{href:"mailto:customer.support@vrbl.co.in",children:Object(d.jsx)("i",{className:"fab fa-twitter"})})}),Object(d.jsxs)("button",{children:[" ",Object(d.jsx)("a",{href:"mailto:customer.support@vrbl.co.in",children:Object(d.jsx)("i",{className:"fab fa-linkedin"})})]})]})]})},x=c.p+"static/media/icon.3911346c.png",p=(c(46),c(11)),O=c.n(p),f=c.p+"static/media/song.e8b182ca.mp3";var v=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(0),r=Object(o.a)(i,2),l=r[0],u=r[1],b=Object(s.useState)(0),m=Object(o.a)(b,2),h=m[0],x=m[1],p=Object(s.useRef)(),v=Object(s.useRef)(),N=Object(s.useRef)();Object(s.useEffect)((function(){var t=Math.floor(v.current.duration);u(t),O.a.get("http://localhost:8080/api/headphone/0").then((function(t){console.log(t),e.count(t.data.headphoneCount)})),p.current.max=t,j()(".audioPlayer audio").bind("ended",(function(){n(!a)}))}),[v&&v.current&&v.current.loadedmetadata,v&&v.current&&v.current.readyState]);var g=function(e){var t=Math.floor(e/60),c=t<10?"0".concat(t):"".concat(t),s=Math.floor(e%60),a=s<10?"0".concat(s):"".concat(s);return"".concat(c,":").concat(a)},k=function e(){p.current.value=v.current.currentTime,C(),N.current=requestAnimationFrame(e)},y=function(){v.current.currentTime=p.current.value,C()},C=function(){p.current.style.setProperty("--seek-before-width","".concat(p.current.value/l*100,"%")),x(p.current.value)};return Object(d.jsxs)("div",{className:"audioPlayer",children:[Object(d.jsx)("audio",{ref:v,src:f}),Object(d.jsxs)("div",{className:"progressBar",style:{display:"none"},children:[Object(d.jsx)("input",{type:"range",defaultValue:"0",ref:p,onChange:y}),Object(d.jsx)("div",{className:"durations",children:Object(d.jsx)("span",{children:l&&!isNaN(l)&&g(l-h)?g(l-h):"00:00"})})]}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsx)("button",{onClick:function(){},children:Object(d.jsx)("i",{class:"fas fa-fast-backward fa-2x"})}),Object(d.jsx)("button",{onClick:function(){return function(){var t=a;n(!t),t?(v.current.pause(),cancelAnimationFrame(N.current),O.a.get("http://localhost:8080/api/headphone/-1").then((function(t){console.log(t),e.count(t.data.headphoneCount)}))):(v.current.play(),O.a.get("http://localhost:8080/api/headphone/1").then((function(t){console.log(t),e.count(t.data.headphoneCount)})),N.current=requestAnimationFrame(k))}()},children:a?Object(d.jsx)("i",{class:"fas fa-pause fa-2x"}):Object(d.jsx)("i",{class:"fas fa-play fa-2x"})}),Object(d.jsx)("button",{onClick:function(){},children:Object(d.jsx)("i",{class:"fas fa-fast-forward fa-2x"})}),Object(d.jsx)("div",{className:"circle-progress",children:Object(d.jsx)("div",{className:"progressBar",children:Object(d.jsx)("input",{type:"range",defaultValue:"0",ref:p,onChange:y})})}),Object(d.jsx)("div",{className:"duration",children:Object(d.jsx)("span",{children:l&&!isNaN(l)&&g(l-h)?g(l-h):"00:00"})})]})]})};var N=function(){var e=function(){var e=(new Date).getFullYear(),t=+new Date("09/10/".concat(e))-+new Date,c={};return t>0&&(c={days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}),c},t=Object(s.useState)(e()),c=Object(o.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),r=Object(o.a)(i,2),l=r[0],j=r[1],p=Object(s.useState)(0),f=Object(o.a)(p,2),N=f[0],g=f[1];return Object(s.useEffect)((function(){var t=setTimeout((function(){n(e())}),1e3);return function(){return clearTimeout(t)}})),Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"banner",children:[Object(d.jsx)("div",{className:"banner-heading",children:Object(d.jsx)("div",{className:"banner-image",children:Object(d.jsx)("img",{src:b,width:"100%"})})}),Object(d.jsxs)("div",{className:"banner-register",children:[Object(d.jsx)("p",{className:"text-uppercase",children:"Register"}),Object(d.jsxs)("div",{className:"register-form",children:[Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("input",{placeholder:"Enter your email",type:"email",onChange:function(e){return function(e){j(e.target.value)}(e)},value:l})}),Object(d.jsx)("div",{className:"form-button",children:Object(d.jsx)("button",{type:"button",onClick:function(){console.log(l);var e={email:l};l&&O.a.post("http://localhost:8080/api/emails",e).then((function(e){console.log("data",e)})),j("")},children:"Register"})})]})]})]}),Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-text",children:"speak \xa0\xa0. \xa0\xa0share \xa0\xa0. \xa0\xa0listen"}),Object(d.jsxs)("div",{className:"media-player",children:[Object(d.jsxs)("div",{className:"media-header",children:[Object(d.jsxs)("div",{className:"song-header",children:[Object(d.jsx)("div",{className:"song-avatar"}),Object(d.jsxs)("div",{className:"song-title",children:[Object(d.jsx)("p",{children:"@vrbl"}),Object(d.jsx)("p",{children:"19 July"})]})]}),Object(d.jsxs)("div",{className:"song-controls",children:[Object(d.jsxs)("button",{className:"headphone-button",children:[Object(d.jsx)("i",{className:"fas fa-headphones"})," \xa0\xa0",N]}),Object(d.jsx)("div",{className:"dots",children:Object(d.jsx)("i",{className:"fas fa-ellipsis-v"})})]})]}),Object(d.jsxs)("div",{className:"media-details",children:[Object(d.jsx)("div",{className:"media-image",children:Object(d.jsx)("img",{src:x})}),Object(d.jsxs)("div",{className:"song-box",children:[Object(d.jsx)("div",{className:"song-text",children:"A message from team Vrbl."}),Object(d.jsx)("div",{className:"song-player",children:Object(d.jsx)(v,{count:function(e){g(e)}})})]})]})]})]}),Object(d.jsxs)("div",{className:"comingSoon",children:[Object(d.jsx)("div",{className:"comingSoon-text",children:"Collaborate.\xa0\xa0\xa0Make Announcements.\xa0\xa0\xa0Tell Your Story.\xa0\xa0\xa0Engage With The World."}),Object(d.jsx)("div",{className:"comingSoon-image",children:Object(d.jsx)("img",{src:m,width:"100%"})}),Object(d.jsxs)("div",{className:"comingSoon-clock",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fab fa-apple"})}),"\xa0\xa0Coming soon"]}),Object(d.jsxs)("div",{className:"clocks",children:[Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("p",{className:"time",children:a.days}),Object(d.jsx)("p",{className:"text-uppercase",children:"DAYS"})]}),Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("p",{className:"time",children:a.hours}),Object(d.jsx)("p",{className:"text-uppercase",children:"HRS"})]}),Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("p",{className:"time",children:a.minutes}),Object(d.jsx)("p",{className:"text-uppercase",children:"Mins"})]})]})]})]}),Object(d.jsx)(h,{})]})};c(65);var g=function(){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"about",children:Object(d.jsxs)("div",{className:"about-card",children:[Object(d.jsx)("p",{className:"about-heading",children:"Enter header text here"}),Object(d.jsx)("p",{className:"about-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201d\u201dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),Object(d.jsx)(h,{})]})};var k=function(){Object(s.useEffect)((function(){e(),j()(window).resize((function(){e()}))}));var e=function(){if(j()(window).width()<768){var e=1/(768/window.innerWidth);j()(".vrblApp,#root").css({zoom:e})}else j()(".vrblApp,#root").css({zoom:1})};return Object(d.jsx)("div",{className:"vrblApp",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:N}),Object(d.jsx)(r.a,{exact:!0,path:"/about",component:g}),Object(d.jsx)(r.a,{exact:!0,path:"/privacy",component:g}),Object(d.jsx)(r.a,{exact:!0,path:"/terms",component:g})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},C=c(12);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(k,{})})}),document.getElementById("root")),y()}},[[66,1,2]]]);
//# sourceMappingURL=main.bc482e18.chunk.js.map