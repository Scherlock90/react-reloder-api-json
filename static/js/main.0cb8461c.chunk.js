(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(66),a(25)),s=a(26),i=a(28),d=a(27),m=a(29),u=a(58),v=a.n(u),p=(a(86),a(36)),h=a.n(p),E=a(59),b=a.n(E),f={color:"blue"},g=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"grey-text text-darken-4"},r.a.createElement("div",{className:"card-title card-title-title center heading headingText2"},r.a.createElement("span",{className:"headingText"},e.title))),r.a.createElement("div",{className:"grey-text text-darken-3 strechLine notesMain",style:f},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.notes}})),r.a.createElement("div",{className:"row center"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("span",{className:"d-md-block1 bolderInfo"}," Data modyfikacji: "),r.a.createElement("span",{className:"d-md-block"}," ",e.modified," ")),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement("span",{className:"d-md-block1 bolderInfo"}," Data utworzenia: "),r.a.createElement("span",{className:"d-md-block"}," ",e.created," "))),r.a.createElement("div",{className:"center"},r.a.createElement("span",{className:"d-md-block1 bolderInfo"},"Odwiedzaj\u0105cych:"),r.a.createElement("span",{className:"d-md-block"},e.views_count)),r.a.createElement("div",{className:"center"},e.author),r.a.createElement("div",{className:"grey-text text-darken-3 strechLine"},r.a.createElement("span",{className:"bolderInfo"},"S\u0142owa kluczowe:"),r.a.createElement("span",null," "+e.tags)))},k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={dataGov:[],subDataGov:[],linksDataGov:[]},a.handleMove=function(e){var t=document.querySelector(".pointer");h()(t).css({left:e.pageX,top:e.pageY,color:"#fff"})},a.showLoupe=function(e){e.preventDefault();var t=document.querySelector(".pointer");h()(t).css({opacity:1,left:e.pageX,top:e.pageY})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.dane.gov.pl/articles?page=1&per_page=5&sort=-created").then(function(t){console.log(t),e.setState({dataGov:t.data.data,subDataGov:t.data.meta,linksDataGov:t.data.links})})}},{key:"render",value:function(){var e=this.state.dataGov,t=this.state,a=(t.subDataGov,t.linksDataGov,e.length?e.map(function(e,t){return r.a.createElement("div",{className:"post card backgroundCard",key:e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement(g,{tags:e.attributes.tags,title:e.attributes.title.replace(/( \S) /g,"$1\xa0"),notes:e.attributes.notes.replace(/<\/?[^>]+(>|$)/g,"").slice(0,220).replace(/( \S) /g,"$1\xa0")+"...",modified:e.attributes.modified.slice(0,10).replace(/-/g,".")+", "+e.attributes.modified.slice(11,16),created:e.attributes.created.slice(0,10).replace(/-/g,".")+", "+e.attributes.created.slice(11,16),views_count:e.attributes.views_count,author:e.attributes.author}),r.a.createElement("div",null,e.relationships.datasets.links.related.href)))}):r.a.createElement("div",{className:"center"},"No data yet! "));return r.a.createElement("div",{className:"containerLoader"},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.showLoupe},"Show Loupe"),r.a.createElement("div",{className:"pointer",onMouseMove:this.handleMove,onMouseOut:this.handleMove}),r.a.createElement("div",{className:"card z-depth-0 project-summary thumb"},r.a.createElement("div",{className:"card-content grey-text text-darken-3 containerPost"},a),r.a.createElement("div",null,r.a.createElement("strong",null,"Elementy meta i links:"),r.a.createElement("div",{className:"countStyle"},"Count: ",this.state.subDataGov.count),r.a.createElement("div",null,"Path: ",this.state.subDataGov.path))))}}]),t}(r.a.Component),y={textAlign:"center",color:"#1a237e !important",padding:"2em 0 2em 0",width:"auto"},N={width:"auto",borderRadius:"5%",fontWeight:"600",fontSize:"20px",zIndex:"100",position:"relative"};function w(){return r.a.createElement("div",{style:y},r.a.createElement("a",{style:N,href:"http://senjs.eu/"}," Designed SeN"))}var x=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"#bdbdbd"}},r.a.createElement("div",{style:{fontSize:"40px",padding:"2em",textAlign:"center",fontWeight:"bold",color:"#424242"}},"JSON API LOADER ",r.a.createElement("br",null)," WITH BLACK&WHITE EFFECTS"),r.a.createElement(k,null),r.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a(169)},66:function(e,t,a){},86:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.0cb8461c.chunk.js.map