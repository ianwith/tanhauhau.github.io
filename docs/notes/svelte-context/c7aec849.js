function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,c,a){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(l){const r=s(e,n,o,a);t.p(r,l)}}function i(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function E(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const c=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)r.removeAttribute(c[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function b(t){return y(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function w(t){A=t}const T=[],k=[],N=[],L=[],I=Promise.resolve();let _=!1;function S(t){N.push(t)}let z=!1;const M=new Set;function C(){if(!z){z=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];w(e),j(e.$$)}for(T.length=0;k.length;)k.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];M.has(e)||(M.add(e),e())}N.length=0}while(T.length);for(;L.length;)L.pop()();_=!1,z=!1,M.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const H=new Set;function R(t,e){t&&t.i&&(H.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),(void 0).c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t){t&&t.c()}function F(t,e){t&&t.l(e)}function O(t,e,o){const{fragment:a,on_mount:s,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,o),S(()=>{const e=s.map(n).filter(c);l?l.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(S)}function P(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(T.push(t),_||(_=!0,I.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,c,a,s,l,i=[-1]){const f=A;w(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=c?c(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&U(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&R(e.$$.fragment),O(e,n.target,n.anchor),C()}w(f)}class W{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n,o,r,c,a,s,l,h,x,A,w,T,k,N,L,I,_,S,z,M,C,j,H,R,q,B,F,O,P,U,V,W,D,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),c=d("li"),a=d("a"),s=p("Tan Li Hau"),l=g(),h=d("li"),x=d("a"),A=p("About"),w=g(),T=d("li"),k=d("a"),N=p("Writings"),L=g(),I=d("li"),_=d("a"),S=p("Talks"),z=g(),M=d("li"),C=d("a"),j=p("Notes"),H=g(),R=d("li"),q=d("a"),B=p("Newsletter"),F=g(),O=d("li"),P=d("a"),U=m("svg"),V=m("path"),W=g(),D=d("a"),G=m("svg"),K=m("path"),this.h()},l(t){n=E(t,"HEADER",{class:!0});var e=$(n);o=E(e,"NAV",{});var i=$(o);r=E(i,"UL",{class:!0});var f=$(r);c=E(f,"LI",{class:!0});var d=$(c);a=E(d,"A",{href:!0,class:!0});var m=$(a);s=y(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=b(f),h=E(f,"LI",{class:!0});var p=$(h);x=E(p,"A",{href:!0,class:!0});var g=$(x);A=y(g,"About"),g.forEach(u),p.forEach(u),w=b(f),T=E(f,"LI",{class:!0});var v=$(T);k=E(v,"A",{href:!0,class:!0});var J=$(k);N=y(J,"Writings"),J.forEach(u),v.forEach(u),L=b(f),I=E(f,"LI",{class:!0});var Q=$(I);_=E(Q,"A",{href:!0,class:!0});var X=$(_);S=y(X,"Talks"),X.forEach(u),Q.forEach(u),z=b(f),M=E(f,"LI",{class:!0});var Y=$(M);C=E(Y,"A",{href:!0,class:!0});var Z=$(C);j=y(Z,"Notes"),Z.forEach(u),Y.forEach(u),H=b(f),R=E(f,"LI",{class:!0});var tt=$(R);q=E(tt,"A",{href:!0,class:!0});var et=$(q);B=y(et,"Newsletter"),et.forEach(u),tt.forEach(u),F=b(f),O=E(f,"LI",{class:!0});var nt=$(O);P=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(P);U=E(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(U);V=E(rt,"path",{d:!0},1),$(V).forEach(u),rt.forEach(u),ot.forEach(u),W=b(nt),D=E(nt,"A",{"aria-label":!0,href:!0,class:!0});var ct=$(D);G=E(ct,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var at=$(G);K=E(at,"path",{d:!0},1),$(K).forEach(u),at.forEach(u),ct.forEach(u),nt.forEach(u),f.forEach(u),i.forEach(u),e.forEach(u),this.h()},h(){v(a,"href","/"),v(a,"class","svelte-f3e4uo"),v(c,"class","svelte-f3e4uo"),v(x,"href","/about"),v(x,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(k,"href","/blogs"),v(k,"class","svelte-f3e4uo"),v(T,"class","svelte-f3e4uo"),v(_,"href","/talks"),v(_,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(C,"href","/notes"),v(C,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(q,"href","/newsletter"),v(q,"class","svelte-f3e4uo"),v(R,"class","svelte-f3e4uo"),v(V,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(U,"viewBox","0 0 24 24"),v(U,"width","1em"),v(U,"height","1em"),v(U,"class","svelte-f3e4uo"),v(P,"aria-label","Twitter account"),v(P,"href","https://twitter.com/lihautan"),v(P,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(O,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){f(t,n,e),i(n,o),i(o,r),i(r,c),i(c,a),i(a,s),i(r,l),i(r,h),i(h,x),i(x,A),i(r,w),i(r,T),i(T,k),i(k,N),i(r,L),i(r,I),i(I,_),i(_,S),i(r,z),i(r,M),i(M,C),i(C,j),i(r,H),i(r,R),i(R,q),i(q,B),i(r,F),i(r,O),i(O,P),i(P,U),i(U,V),i(O,W),i(O,D),i(D,G),i(G,K)},p:t,i:t,o:t,d(t){t&&u(n)}}}class G extends W{constructor(t){super(),V(this,t,null,D,a,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=E(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){f(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=E(t,"SPAN",{class:!0});var r=$(e);n=y(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-186dllz")},m(t,o){f(t,e,o),i(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&x(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,c,a,m,A,w,T,k,N,L,I,_,S,z,M;document.title=e="Note: "+t[1]+" | Tan Li Hau";let C=t[2],j=[];for(let e=0;e<C.length;e+=1)j[e]=Q(J(t,C,e));T=new G({});let H=t[2],U=[];for(let e=0;e<H.length;e+=1)U[e]=X(K(t,H,e));const V=t[4].default,W=function(t,e,n,o){if(t){const r=s(t,e,n,o);return t[0](r)}}(V,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<j.length;t+=1)j[t].c();c=d("meta"),a=g(),m=d("a"),A=p("Skip to content"),w=g(),B(T.$$.fragment),k=g(),N=d("main"),L=d("h1"),I=p(t[1]),_=g();for(let t=0;t<U.length;t+=1)U[t].c();S=g(),z=d("article"),W&&W.c(),this.h()},l(e){const s=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-ywf7m8"]',document.head);n=E(s,"LINK",{href:!0,rel:!0}),o=E(s,"META",{name:!0,content:!0}),r=E(s,"META",{name:!0,content:!0});for(let t=0;t<j.length;t+=1)j[t].l(s);c=E(s,"META",{itemprop:!0,content:!0}),s.forEach(u),a=b(e),m=E(e,"A",{href:!0,class:!0});var l=$(m);A=y(l,"Skip to content"),l.forEach(u),w=b(e),F(T.$$.fragment,e),k=b(e),N=E(e,"MAIN",{id:!0,class:!0});var i=$(N);L=E(i,"H1",{});var f=$(L);I=y(f,t[1]),f.forEach(u),_=b(i);for(let t=0;t<U.length;t+=1)U[t].l(i);S=b(i),z=E(i,"ARTICLE",{class:!0});var h=$(z);W&&W.l(h),h.forEach(u),i.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/svelte-context/assets/blog-base-3554d53c.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(c,"itemprop","url"),v(c,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fsvelte-context"),v(m,"href","#content"),v(m,"class","skip svelte-186dllz"),v(z,"class","svelte-186dllz"),v(N,"id","content"),v(N,"class","blog svelte-186dllz")},m(t,e){i(document.head,n),i(document.head,o),i(document.head,r);for(let t=0;t<j.length;t+=1)j[t].m(document.head,null);i(document.head,c),f(t,a,e),f(t,m,e),i(m,A),f(t,w,e),O(T,t,e),f(t,k,e),f(t,N,e),i(N,L),i(L,I),i(N,_);for(let t=0;t<U.length;t+=1)U[t].m(N,null);i(N,S),i(N,z),W&&W.m(z,null),M=!0},p(t,[n]){if((!M||2&n)&&e!==(e="Note: "+t[1]+" | Tan Li Hau")&&(document.title=e),(!M||1&n)&&v(o,"content",t[0]),4&n){let e;for(C=t[2],e=0;e<C.length;e+=1){const o=J(t,C,e);j[e]?j[e].p(o,n):(j[e]=Q(o),j[e].c(),j[e].m(c.parentNode,c))}for(;e<j.length;e+=1)j[e].d(1);j.length=C.length}if((!M||2&n)&&x(I,t[1]),4&n){let e;for(H=t[2],e=0;e<H.length;e+=1){const o=K(t,H,e);U[e]?U[e].p(o,n):(U[e]=X(o),U[e].c(),U[e].m(N,S))}for(;e<U.length;e+=1)U[e].d(1);U.length=H.length}W&&W.p&&8&n&&l(W,V,t,t[3],n,null,null)},i(t){M||(R(T.$$.fragment,t),R(W,t),M=!0)},o(t){q(T.$$.fragment,t),q(W,t),M=!1},d(t){u(n),u(o),u(r),h(j,t),u(c),t&&u(a),t&&u(m),t&&u(w),P(T,t),t&&u(k),t&&u(N),h(U,t),W&&W.d(t)}}}function Z(t,e,n){let{name:o}=e,{title:r}=e,{tags:c=[]}=e,{$$slots:a={},$$scope:s}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"title"in t&&n(1,r=t.title),"tags"in t&&n(2,c=t.tags),"$$scope"in t&&n(3,s=t.$$scope)},[o,r,c,s,a]}class tt extends W{constructor(t){super(),V(this,t,Z,Y,a,{name:0,title:1,tags:2})}}function et(t){let e,n,o,r,c,a,s,l,h,m;return{c(){e=d("section"),n=d("ul"),o=d("li"),r=d("a"),c=p("React like context"),a=g(),s=d("section"),l=d("h2"),h=d("a"),m=p("React like context"),this.h()},l(t){e=E(t,"SECTION",{});var i=$(e);n=E(i,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var f=$(n);o=E(f,"LI",{});var d=$(o);r=E(d,"A",{href:!0});var p=$(r);c=y(p,"React like context"),p.forEach(u),d.forEach(u),f.forEach(u),i.forEach(u),a=b(t),s=E(t,"SECTION",{});var g=$(s);l=E(g,"H2",{});var v=$(l);h=E(v,"A",{href:!0,id:!0});var x=$(h);m=y(x,"React like context"),x.forEach(u),v.forEach(u),g.forEach(u),this.h()},h(){v(r,"href","#react-like-context"),v(n,"class","sitemap"),v(n,"id","sitemap"),v(n,"role","navigation"),v(n,"aria-label","Table of Contents"),v(h,"href","#react-like-context"),v(h,"id","react-like-context")},m(t,u){f(t,e,u),i(e,n),i(n,o),i(o,r),i(r,c),f(t,a,u),f(t,s,u),i(s,l),i(l,h),i(h,m)},d(t){t&&u(e),t&&u(a),t&&u(s)}}}function nt(t){let n,o;const r=[ot];let c={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)c=e(c,r[t]);return n=new tt({props:c}),{c(){B(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){O(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const a=t[c],s=e[c];if(s){for(const t in a)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[c]=s}else for(const t in a)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(c=ot,"object"==typeof c&&null!==c?c:{})]):{};var c;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(R(n.$$.fragment,t),o=!0)},o(t){q(n.$$.fragment,t),o=!1},d(t){P(n,t)}}}const ot={tags:["context","svelte"],slug:"notes/svelte-context",type:"notes",name:"svelte-context",title:"svelte-context",layout:"note"};class rt extends W{constructor(t){super(),V(this,t,null,nt,a,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
