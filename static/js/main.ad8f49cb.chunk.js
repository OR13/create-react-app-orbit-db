(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,n){},126:function(e,n){},128:function(e,n){},163:function(e,n){},165:function(e,n){},203:function(e,n,t){"use strict";t.r(n);var a=t(9),r=t.n(a),o=t(63),s=t.n(o),c=(t(78),t(2)),i=t.n(c),l=t(64),d=t(65),u=t(66),p=t(69),f=t(67),w=t(70),m=t(68),h=t.n(m),b=(t(82),t(84)),v=new window.Ipfs({repo:"/orbitdb/examples/browser/new/ipfs/0.27.3",start:!0,EXPERIMENTAL:{pubsub:!0},config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]}}}),g=new b(v);v.on("error",function(e){return console.error(e)});var k=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={address:""},t}return Object(w.a)(n,e),Object(u.a)(n,[{key:"componentWillMount",value:function(){var e=this;v.on("ready",Object(l.a)(i.a.mark(function n(){var t,a,r;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:try{t=window.location.href.search.split("?address")[0]}catch(o){}if(!t){n.next=7;break}return n.next=4,g.open(t);case 4:a=n.sent,n.next=13;break;case 7:return n.next=9,g.log("hello");case 9:return a=n.sent,t=a.address.toString(),n.next=13,a.add("world");case 13:return e.setState({address:t}),n.next=16,a.iterator({limit:5}).collect();case 16:r=n.sent,console.log(r);case 18:case"end":return n.stop()}},n,this)})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload. See JS Console."),r.a.createElement("a",{className:"App-link",href:"?address=".concat(this.state.address),target:"_blank",rel:"noopener noreferrer"},"Open Database")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},71:function(e,n,t){e.exports=t(203)},78:function(e,n,t){},82:function(e,n,t){},92:function(e,n){},94:function(e,n){}},[[71,2,1]]]);
//# sourceMappingURL=main.ad8f49cb.chunk.js.map