(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),c=a(16),l=a.n(c),i=(a(54),a(7)),m=a(1);a(55);var u=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."),r.a.createElement("span",null,"-- George Orwell, 1984"))},p=a(17),v=a.n(p),d=a(30),E=a(10),f=a(11),h=a(13),y=a(12);a(57);var g=function(e){var t=e.title,a=e.year,n=e.summary,o=e.poster,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:o,genres:s}}},r.a.createElement("img",{src:o,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"..."))))},b=(a(63),function(e){Object(h.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(v.a.mark((function t(){var a,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(64);var _=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))},N=function(e){Object(h.a)(a,e);var t=Object(y.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(this.props),e.state?r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{src:e.state.poster})),r.a.createElement("p",null,e.state.title),r.a.createElement("p",null,e.state.year,"  ",e.state.genres.map((function(e){return r.a.createElement("span",null," ",e," ")}))),r.a.createElement("p",null,e.state.summary)):null}}]),a}(r.a.Component);var j=function(){return r.a.createElement(i.a,null,r.a.createElement(_,null),r.a.createElement(m.a,{path:"/",exact:!0,component:b}),r.a.createElement(m.a,{path:"/about",component:u}),r.a.createElement(m.a,{path:"/movie-detail",component:N}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d874e749.chunk.js.map