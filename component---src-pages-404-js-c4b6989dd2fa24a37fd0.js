(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return l});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(156),c=a(157),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=u;var l="1097489062"},152:function(t,e,a){"use strict";a.d(e,"b",function(){return l});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(32),c=a.n(s);a.d(e,"a",function(){return c.a});a(153);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,a){var n;t.exports=(n=a(155))&&n.default||n},154:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return u});var n=a(159),r=a.n(n),i=a(160),o=a.n(i);a(146);o.a.overrideThemeStyles=function(){return{body:{backgroundColor:"#faf0fd"},"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",textDecorationStyle:"dotted",fontWeight:400,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"}}};var s=new r.a(o.a);var c=s.rhythm,u=s.scale},155:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),c=a(2),u=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},156:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(152),c=a(154),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?null:o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},o.a.createElement("header",null,t),o.a.createElement("main",null,r),o.a.createElement("footer",null,o.a.createElement("a",{href:"https://twitter.com/lihautan"},"twitter")," • ",o.a.createElement("a",{href:"https://github.com/tanhauhau"},"github")," • ",o.a.createElement("a",{href:"https://github.com/tanhauhau/tanhauhau.github.io/issues/new?assignees=&labels=grammar%2C+typo&template=fix-typos-and-grammars.md&title=%5BTYPO%5D"},"discuss")))},e}(o.a.Component);e.a=u},157:function(t,e,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(161),u=a.n(c);function l(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,l=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-c4b6989dd2fa24a37fd0.js.map