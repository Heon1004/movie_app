(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(24),r=n.n(a),c=n(9),o=n(2),u=(n(37),n(13)),j=n.n(u),m=n(25),l=n(30),d=n(26),b=n.n(d),p=n(5),v=n.n(p),h=(n(59),n(1));function O(e){var t=e.id,n=e.year,s=e.title,i=e.summary,a=e.poster,r=e.genres;return Object(h.jsx)(c.b,{to:{pathname:"/movie/"+{id:t},state:{year:n,title:s,summary:i,poster:a,genres:r}},children:Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:a,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie-data",children:[Object(h.jsx)("h3",{className:"movie-title",children:s}),Object(h.jsx)("h5",{className:"movie-year",children:n}),Object(h.jsx)("ul",{className:"movie-genres",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"genres-genre",children:e},t)}))}),Object(h.jsx)("p",{className:"movieosummary",children:i.slice(0,140)})]})]})})}O.prototype={id:v.a.string.isRequired,year:v.a.number.isRequired,title:v.a.string.isRequired,summary:v.a.string.isRequired,poster:v.a.string.isRequired,genres:v.a.arrayOf(v.a.string).isRequired};var x=O;n(67);var f=function(){var e=Object(s.useState)({isLoading:!0,movies:[]}),t=Object(l.a)(e,2),n=t[0],i=t[1],a=function(){var e=Object(m.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,i({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(h.jsx)("section",{className:"container",children:n.isLoading?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader-text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:n.movies.map((function(e){return Object(h.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})};n(68);var g=function(){return Object(h.jsx)("div",{className:"about-container",children:"About this page: i built it because I love movies."})},y=n(28),N=n(29),q=n(32),R=n(31),_=function(e){Object(q.a)(n,e);var t=Object(R.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(h.jsx)("span",{children:e.state.title}):null}}]),n}(i.a.Component);n(69);var k=function(){return Object(h.jsxs)("nav",{children:[Object(h.jsx)(c.b,{to:"/",children:"Home"}),Object(h.jsx)(c.b,{to:"/about",children:"About"})]})};var w=function(){return Object(h.jsxs)(c.a,{children:[Object(h.jsx)(k,{}),Object(h.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(h.jsx)(o.a,{path:"/about",component:g}),Object(h.jsx)(o.a,{path:"/movie/:id",component:_})]})};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.c11c700d.chunk.js.map