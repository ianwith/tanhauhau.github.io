function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,o,r){return e[1]&&r?t(o.ctx.slice(),e[1](r(n))):o.ctx}function l(e,t,n,o,r,a,s){const l=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,a);if(l){const r=c(t,n,o,s);e.p(r,l)}}function i(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function v(){return p(" ")}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e){return Array.from(e.childNodes)}function $(e,t,n,o){for(let o=0;o<e.length;o+=1){const r=e[o];if(r.nodeName===t){let t=0;const a=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)r.removeAttribute(a[e]);return e.splice(o,1)[0]}}return o?m(t):d(t)}function w(e,t){for(let n=0;n<e.length;n+=1){const o=e[n];if(3===o.nodeType)return o.data=""+t,e.splice(n,1)[0]}return p(t)}function b(e){return w(e," ")}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let A;function x(e){A=e}const j=[],I=[],L=[],T=[],z=Promise.resolve();let N=!1;function C(e){L.push(e)}let _=!1;const q=new Set;function S(){if(!_){_=!0;do{for(let e=0;e<j.length;e+=1){const t=j[e];x(t),M(t.$$)}for(j.length=0;I.length;)I.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];q.has(t)||(q.add(t),t())}L.length=0}while(j.length);for(;T.length;)T.pop()();N=!1,_=!1,q.clear()}}function M(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const k=new Set;function O(e,t){e&&e.i&&(k.delete(e),e.i(t))}function H(e,t,n,o){if(e&&e.o){if(k.has(e))return;k.add(e),(void 0).c.push(()=>{k.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function B(e){e&&e.c()}function D(e,t){e&&e.l(t)}function F(e,t,o){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=e.$$;s&&s.m(t,o),C(()=>{const t=c.map(n).filter(a);l?l.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(C)}function U(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(j.push(e),N||(N=!0,z.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(t,n,a,s,c,l,i=[-1]){const f=A;x(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=a?a(t,u,(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),m&&P(t,e)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const e=E(n.target);d.fragment&&d.fragment.l(e),e.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&O(t.$$.fragment),F(t,n.target,n.anchor),S()}x(f)}class V{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function W(t){let n,o,r,a,s,c,l,u,y,A,x,j,I,L,T,z,N,C,_,q,S,M,k,O,H,B,D,F,U,P,R,V,W,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),s=d("a"),c=p("Tan Li Hau"),l=v(),u=d("li"),y=d("a"),A=p("About"),x=v(),j=d("li"),I=d("a"),L=p("Writings"),T=v(),z=d("li"),N=d("a"),C=p("Talks"),_=v(),q=d("li"),S=d("a"),M=p("Notes"),k=v(),O=d("li"),H=d("a"),B=p("Newsletter"),D=v(),F=d("li"),U=d("a"),P=m("svg"),R=m("path"),V=v(),W=d("a"),G=m("svg"),K=m("path"),this.h()},l(e){n=$(e,"HEADER",{class:!0});var t=E(n);o=$(t,"NAV",{});var i=E(o);r=$(i,"UL",{class:!0});var f=E(r);a=$(f,"LI",{class:!0});var d=E(a);s=$(d,"A",{href:!0,class:!0});var m=E(s);c=w(m,"Tan Li Hau"),m.forEach(h),d.forEach(h),l=b(f),u=$(f,"LI",{class:!0});var p=E(u);y=$(p,"A",{href:!0,class:!0});var v=E(y);A=w(v,"About"),v.forEach(h),p.forEach(h),x=b(f),j=$(f,"LI",{class:!0});var g=E(j);I=$(g,"A",{href:!0,class:!0});var J=E(I);L=w(J,"Writings"),J.forEach(h),g.forEach(h),T=b(f),z=$(f,"LI",{class:!0});var Q=E(z);N=$(Q,"A",{href:!0,class:!0});var X=E(N);C=w(X,"Talks"),X.forEach(h),Q.forEach(h),_=b(f),q=$(f,"LI",{class:!0});var Y=E(q);S=$(Y,"A",{href:!0,class:!0});var Z=E(S);M=w(Z,"Notes"),Z.forEach(h),Y.forEach(h),k=b(f),O=$(f,"LI",{class:!0});var ee=E(O);H=$(ee,"A",{href:!0,class:!0});var te=E(H);B=w(te,"Newsletter"),te.forEach(h),ee.forEach(h),D=b(f),F=$(f,"LI",{class:!0});var ne=E(F);U=$(ne,"A",{"aria-label":!0,href:!0,class:!0});var oe=E(U);P=$(oe,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var re=E(P);R=$(re,"path",{d:!0},1),E(R).forEach(h),re.forEach(h),oe.forEach(h),V=b(ne),W=$(ne,"A",{"aria-label":!0,href:!0,class:!0});var ae=E(W);G=$(ae,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var se=E(G);K=$(se,"path",{d:!0},1),E(K).forEach(h),se.forEach(h),ae.forEach(h),ne.forEach(h),f.forEach(h),i.forEach(h),t.forEach(h),this.h()},h(){g(s,"href","/"),g(s,"class","svelte-f3e4uo"),g(a,"class","svelte-f3e4uo"),g(y,"href","/about"),g(y,"class","svelte-f3e4uo"),g(u,"class","svelte-f3e4uo"),g(I,"href","/blogs"),g(I,"class","svelte-f3e4uo"),g(j,"class","svelte-f3e4uo"),g(N,"href","/talks"),g(N,"class","svelte-f3e4uo"),g(z,"class","svelte-f3e4uo"),g(S,"href","/notes"),g(S,"class","svelte-f3e4uo"),g(q,"class","svelte-f3e4uo"),g(H,"href","/newsletter"),g(H,"class","svelte-f3e4uo"),g(O,"class","svelte-f3e4uo"),g(R,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),g(P,"viewBox","0 0 24 24"),g(P,"width","1em"),g(P,"height","1em"),g(P,"class","svelte-f3e4uo"),g(U,"aria-label","Twitter account"),g(U,"href","https://twitter.com/lihautan"),g(U,"class","svelte-f3e4uo"),g(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),g(G,"viewBox","0 0 24 24"),g(G,"width","1em"),g(G,"height","1em"),g(G,"class","svelte-f3e4uo"),g(W,"aria-label","Github account"),g(W,"href","https://github.com/tanhauhau"),g(W,"class","svelte-f3e4uo"),g(F,"class","social svelte-f3e4uo"),g(r,"class","svelte-f3e4uo"),g(n,"class","svelte-f3e4uo")},m(e,t){f(e,n,t),i(n,o),i(o,r),i(r,a),i(a,s),i(s,c),i(r,l),i(r,u),i(u,y),i(y,A),i(r,x),i(r,j),i(j,I),i(I,L),i(r,T),i(r,z),i(z,N),i(N,C),i(r,_),i(r,q),i(q,S),i(S,M),i(r,k),i(r,O),i(O,H),i(H,B),i(r,D),i(r,F),i(F,U),i(U,P),i(P,R),i(F,V),i(F,W),i(W,G),i(G,K)},p:e,i:e,o:e,d(e){e&&h(n)}}}class G extends V{constructor(e){super(),R(this,e,null,W,s,{})}}function K(e,t,n){const o=e.slice();return o[6]=t[n],o}function J(e,t,n){const o=e.slice();return o[6]=t[n],o}function Q(e){let t,n;return{c(){t=d("meta"),this.h()},l(e){t=$(e,"META",{name:!0,content:!0}),this.h()},h(){g(t,"name","keywords"),g(t,"content",n=e[6])},m(e,n){f(e,t,n)},p(e,o){4&o&&n!==(n=e[6])&&g(t,"content",n)},d(e){e&&h(t)}}}function X(e){let t,n,o=e[6]+"";return{c(){t=d("span"),n=p(o),this.h()},l(e){t=$(e,"SPAN",{class:!0});var r=E(t);n=w(r,o),r.forEach(h),this.h()},h(){g(t,"class","svelte-186dllz")},m(e,o){f(e,t,o),i(t,n)},p(e,t){4&t&&o!==(o=e[6]+"")&&y(n,o)},d(e){e&&h(t)}}}function Y(e){let t,n,o,r,a,s,m,A,x,j,I,L,T,z,N,C,_,q;document.title=t="Note: "+e[1]+" | Tan Li Hau";let S=e[2],M=[];for(let t=0;t<S.length;t+=1)M[t]=Q(J(e,S,t));j=new G({});let k=e[2],P=[];for(let t=0;t<k.length;t+=1)P[t]=X(K(e,k,t));const R=e[4].default,V=function(e,t,n,o){if(e){const r=c(e,t,n,o);return e[0](r)}}(R,e,e[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let e=0;e<M.length;e+=1)M[e].c();a=d("meta"),s=v(),m=d("a"),A=p("Skip to content"),x=v(),B(j.$$.fragment),I=v(),L=d("main"),T=d("h1"),z=p(e[1]),N=v();for(let e=0;e<P.length;e+=1)P[e].c();C=v(),_=d("article"),V&&V.c(),this.h()},l(t){const c=function(e,t=document.body){return Array.from(t.querySelectorAll(e))}('[data-svelte="svelte-ywf7m8"]',document.head);n=$(c,"LINK",{href:!0,rel:!0}),o=$(c,"META",{name:!0,content:!0}),r=$(c,"META",{name:!0,content:!0});for(let e=0;e<M.length;e+=1)M[e].l(c);a=$(c,"META",{itemprop:!0,content:!0}),c.forEach(h),s=b(t),m=$(t,"A",{href:!0,class:!0});var l=E(m);A=w(l,"Skip to content"),l.forEach(h),x=b(t),D(j.$$.fragment,t),I=b(t),L=$(t,"MAIN",{id:!0,class:!0});var i=E(L);T=$(i,"H1",{});var f=E(T);z=w(f,e[1]),f.forEach(h),N=b(i);for(let e=0;e<P.length;e+=1)P[e].l(i);C=b(i),_=$(i,"ARTICLE",{class:!0});var u=E(_);V&&V.l(u),u.forEach(h),i.forEach(h),this.h()},h(){g(n,"href","https://lihautan.com/notes/thoughts-on-interview/assets/blog-base-967d71e9.css"),g(n,"rel","stylesheet"),g(o,"name","og:title"),g(o,"content",e[0]),g(r,"name","og:type"),g(r,"content","website"),g(a,"itemprop","url"),g(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fthoughts-on-interview"),g(m,"href","#content"),g(m,"class","skip svelte-186dllz"),g(_,"class","svelte-186dllz"),g(L,"id","content"),g(L,"class","blog svelte-186dllz")},m(e,t){i(document.head,n),i(document.head,o),i(document.head,r);for(let e=0;e<M.length;e+=1)M[e].m(document.head,null);i(document.head,a),f(e,s,t),f(e,m,t),i(m,A),f(e,x,t),F(j,e,t),f(e,I,t),f(e,L,t),i(L,T),i(T,z),i(L,N);for(let e=0;e<P.length;e+=1)P[e].m(L,null);i(L,C),i(L,_),V&&V.m(_,null),q=!0},p(e,[n]){if((!q||2&n)&&t!==(t="Note: "+e[1]+" | Tan Li Hau")&&(document.title=t),(!q||1&n)&&g(o,"content",e[0]),4&n){let t;for(S=e[2],t=0;t<S.length;t+=1){const o=J(e,S,t);M[t]?M[t].p(o,n):(M[t]=Q(o),M[t].c(),M[t].m(a.parentNode,a))}for(;t<M.length;t+=1)M[t].d(1);M.length=S.length}if((!q||2&n)&&y(z,e[1]),4&n){let t;for(k=e[2],t=0;t<k.length;t+=1){const o=K(e,k,t);P[t]?P[t].p(o,n):(P[t]=X(o),P[t].c(),P[t].m(L,C))}for(;t<P.length;t+=1)P[t].d(1);P.length=k.length}V&&V.p&&8&n&&l(V,R,e,e[3],n,null,null)},i(e){q||(O(j.$$.fragment,e),O(V,e),q=!0)},o(e){H(j.$$.fragment,e),H(V,e),q=!1},d(e){h(n),h(o),h(r),u(M,e),h(a),e&&h(s),e&&h(m),e&&h(x),U(j,e),e&&h(I),e&&h(L),u(P,e),V&&V.d(e)}}}function Z(e,t,n){let{name:o}=t,{title:r}=t,{tags:a=[]}=t,{$$slots:s={},$$scope:c}=t;return e.$set=e=>{"name"in e&&n(0,o=e.name),"title"in e&&n(1,r=e.title),"tags"in e&&n(2,a=e.tags),"$$scope"in e&&n(3,c=e.$$scope)},[o,r,a,c,s]}class ee extends V{constructor(e){super(),R(this,e,Z,Y,s,{name:0,title:1,tags:2})}}function te(e){let t,n,o,r,a,s,c,l,u,m,y,A,x,j,I,L,T,z,N,C,_,q,S,M,k,O,H,B,D,F,U,P,R,V;return{c(){t=d("section"),n=d("ul"),o=d("li"),r=d("a"),a=p("Interview experience from @zhaojinjiang"),s=v(),c=d("section"),l=d("h2"),u=d("a"),m=p("Interview experience from @zhaojinjiang"),y=v(),A=d("ul"),x=d("li"),j=d("code"),I=p("@zhaojinjiang"),L=p(" shared some of his interview experience"),T=d("ul"),z=d("li"),N=p("he prepared a ton of questions, but in the end he used 1 question, bubble sort, to eliminate 80% of the candidate"),C=v(),_=d("li"),q=p("he shared one of his prev boss classic interview question, given a DOM node, reverse all it's child element."),S=v(),M=d("li"),k=p("open-ended question, we have "),O=d("code"),H=p("insertBefore"),B=p(" and "),D=d("code"),F=p("appendChild"),U=p(", so if you are given a chance to add a new api, "),P=d("code"),R=p("insertAfter"),V=p(", explain how you would design the api."),this.h()},l(e){t=$(e,"SECTION",{});var i=E(t);n=$(i,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var f=E(n);o=$(f,"LI",{});var d=E(o);r=$(d,"A",{href:!0});var p=E(r);a=w(p,"Interview experience from @zhaojinjiang"),p.forEach(h),d.forEach(h),f.forEach(h),i.forEach(h),s=b(e),c=$(e,"SECTION",{});var v=E(c);l=$(v,"H2",{});var g=E(l);u=$(g,"A",{href:!0,id:!0});var W=E(u);m=w(W,"Interview experience from @zhaojinjiang"),W.forEach(h),g.forEach(h),y=b(v),A=$(v,"UL",{});var G=E(A);x=$(G,"LI",{});var K=E(x);j=$(K,"CODE",{});var J=E(j);I=w(J,"@zhaojinjiang"),J.forEach(h),L=w(K," shared some of his interview experience"),T=$(K,"UL",{});var Q=E(T);z=$(Q,"LI",{});var X=E(z);N=w(X,"he prepared a ton of questions, but in the end he used 1 question, bubble sort, to eliminate 80% of the candidate"),X.forEach(h),C=b(Q),_=$(Q,"LI",{});var Y=E(_);q=w(Y,"he shared one of his prev boss classic interview question, given a DOM node, reverse all it's child element."),Y.forEach(h),S=b(Q),M=$(Q,"LI",{});var Z=E(M);k=w(Z,"open-ended question, we have "),O=$(Z,"CODE",{});var ee=E(O);H=w(ee,"insertBefore"),ee.forEach(h),B=w(Z," and "),D=$(Z,"CODE",{});var te=E(D);F=w(te,"appendChild"),te.forEach(h),U=w(Z,", so if you are given a chance to add a new api, "),P=$(Z,"CODE",{});var ne=E(P);R=w(ne,"insertAfter"),ne.forEach(h),V=w(Z,", explain how you would design the api."),Z.forEach(h),Q.forEach(h),K.forEach(h),G.forEach(h),v.forEach(h),this.h()},h(){g(r,"href","#interview-experience-from-zhaojinjiang"),g(n,"class","sitemap"),g(n,"id","sitemap"),g(n,"role","navigation"),g(n,"aria-label","Table of Contents"),g(u,"href","#interview-experience-from-zhaojinjiang"),g(u,"id","interview-experience-from-zhaojinjiang")},m(e,h){f(e,t,h),i(t,n),i(n,o),i(o,r),i(r,a),f(e,s,h),f(e,c,h),i(c,l),i(l,u),i(u,m),i(c,y),i(c,A),i(A,x),i(x,j),i(j,I),i(x,L),i(x,T),i(T,z),i(z,N),i(T,C),i(T,_),i(_,q),i(T,S),i(T,M),i(M,k),i(M,O),i(O,H),i(M,B),i(M,D),i(D,F),i(M,U),i(M,P),i(P,R),i(M,V)},d(e){e&&h(t),e&&h(s),e&&h(c)}}}function ne(e){let n,o;const r=[oe];let a={$$slots:{default:[te]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)a=t(a,r[e]);return n=new ee({props:a}),{c(){B(n.$$.fragment)},l(e){D(n.$$.fragment,e)},m(e,t){F(n,e,t),o=!0},p(e,[t]){const o=0&t?function(e,t){const n={},o={},r={$$scope:1};let a=e.length;for(;a--;){const s=e[a],c=t[a];if(c){for(const e in s)e in c||(o[e]=1);for(const e in c)r[e]||(n[e]=c[e],r[e]=1);e[a]=c}else for(const e in s)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}(r,[(a=oe,"object"==typeof a&&null!==a?a:{})]):{};var a;1&t&&(o.$$scope={dirty:t,ctx:e}),n.$set(o)},i(e){o||(O(n.$$.fragment,e),o=!0)},o(e){H(n.$$.fragment,e),o=!1},d(e){U(n,e)}}}const oe={title:"Thoughts on Technical Interview",tags:["interview"],slug:"notes/thoughts-on-interview",type:"notes",name:"thoughts-on-interview",layout:"note"};class re extends V{constructor(e){super(),R(this,e,null,ne,s,{})}}setTimeout(()=>{new re({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src})}else{const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(e)}},3e3);
