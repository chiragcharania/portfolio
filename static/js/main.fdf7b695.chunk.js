(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/github.9ea501a3.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/harts.61a510ab.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/mindmap.8ef3983f.jpg"},44:function(e,t,a){e.exports=a(60)},49:function(e,t,a){},50:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),l=(a(49),a(7)),o=a(12),s=a(10),m=a(9),u=(a(50),a(62)),d=a(66),h=a(67),b=a(22),f=a(5),p=a(63),E=a(64);var g=function(){return r.a.createElement("footer",{className:"mt-5"},r.a.createElement(u.a,{fluid:!0},r.a.createElement(p.a,{className:"border-top justify-content-between p-3"},r.a.createElement(E.a,{className:"p-0",md:3,sm:12},"Chirag Charania"),r.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Chirag Charania"))))},k=a(17),v=a(35),N=a.n(v),j=a(36),C=a.n(j),y=a(37),T=a.n(y),w=a(32);var x=function(e){var t=Object(w.b)({opacity:1,from:{opacity:0}});return r.a.createElement(w.a.div,{className:"c-card-info",style:t},r.a.createElement("p",{className:"c-card-title"},e.title),r.a.createElement("p",{className:"c-card-sub-title"},e.subTitle),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var O=function(e){return r.a.createElement("div",{className:"d-inline-block c-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"c-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(x,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(O,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"HaRTS",subTitle:"Health and Record Tracking System",imgSrc:C.a,link:"https://github.com/chiragcharania/harts-updated",selected:!1},{id:1,title:"Mind Map",subTitle:"Data Visualization in a creative way",imgSrc:T.a,link:"https://github.com/chiragcharania/MindMap",selected:!1},{id:2,title:"GitHub",subTitle:"All other projects can be found here",imgSrc:N.a,link:"https://github.com/chiragcharania",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{fluid:!0},r.a.createElement(p.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component),M=a(65);var A=function(e){return r.a.createElement(M.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(u.a,{fluid:!0},r.a.createElement(p.a,{className:"justify-content-center py-5"},r.a.createElement(E.a,{md:8,sm:6},e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&r.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))};var H=function(e){return r.a.createElement("div",null,r.a.createElement(A,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(S,null))};var W=function(){return r.a.createElement("p",null,"AboutPage Works!")};var B=function(){return r.a.createElement("p",null,"ContactPage Works!")},I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={title:"Chirag Charania",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"SOME QUOTE",subTitle:"Projects",text:"Check my projects below"},about:{title:"About Me"},contact:{title:"Contact Me"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement(u.a,{className:"p-0",fluid:!0},r.a.createElement(d.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement(d.a.Brand,null,"Chirag Charania"),r.a.createElement(d.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),r.a.createElement(d.a.Collapse,{id:"navbar-toggle"},r.a.createElement(h.a,{className:"ml-auto"},r.a.createElement(b.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(b.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(b.b,{className:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(f.a,{path:"/",exact:!0,render:function(){return r.a.createElement(H,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(f.a,{path:"/about",exact:!0,render:function(){return r.a.createElement(W,{title:e.state.about.title})}}),r.a.createElement(f.a,{path:"/contact",exact:!0,render:function(){return r.a.createElement(B,{title:e.state.contact.title})}}),r.a.createElement(g,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.fdf7b695.chunk.js.map