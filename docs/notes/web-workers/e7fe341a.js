function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,s,a){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(l){const r=c(e,n,o,a);t.p(r,l)}}function f(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function w(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const s=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function y(t){return E(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const k=[],L=[],T=[],N=[],_=Promise.resolve();let I=!1;function S(t){T.push(t)}let z=!1;const M=new Set;function j(){if(!z){z=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];x(e),H(e.$$)}for(k.length=0;L.length;)L.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];M.has(e)||(M.add(e),e())}T.length=0}while(k.length);for(;N.length;)N.pop()();I=!1,z=!1,M.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const C=new Set;function W(t,e){t&&t.i&&(C.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push(()=>{C.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t){t&&t.c()}function F(t,e){t&&t.l(e)}function O(t,e,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:f}=t.$$;a&&a.m(e,o),S(()=>{const e=c.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(S)}function P(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(k.push(t),I||(I=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,n,s,a,c,l,f=[-1]){const i=A;x(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:f};let m=!1;if(d.ctx=s?s(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&R(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&W(e.$$.fragment),O(e,n.target,n.anchor),j()}x(i)}class V{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n,o,r,s,a,c,l,h,b,A,x,k,L,T,N,_,I,S,z,M,j,H,C,W,q,B,F,O,P,R,U,V,D,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),s=d("li"),a=d("a"),c=p("Tan Li Hau"),l=g(),h=d("li"),b=d("a"),A=p("About"),x=g(),k=d("li"),L=d("a"),T=p("Writings"),N=g(),_=d("li"),I=d("a"),S=p("Talks"),z=g(),M=d("li"),j=d("a"),H=p("Notes"),C=g(),W=d("li"),q=d("a"),B=p("Newsletter"),F=g(),O=d("li"),P=d("a"),R=m("svg"),U=m("path"),V=g(),D=d("a"),G=m("svg"),K=m("path"),this.h()},l(t){n=w(t,"HEADER",{class:!0});var e=$(n);o=w(e,"NAV",{});var f=$(o);r=w(f,"UL",{class:!0});var i=$(r);s=w(i,"LI",{class:!0});var d=$(s);a=w(d,"A",{href:!0,class:!0});var m=$(a);c=E(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=y(i),h=w(i,"LI",{class:!0});var p=$(h);b=w(p,"A",{href:!0,class:!0});var g=$(b);A=E(g,"About"),g.forEach(u),p.forEach(u),x=y(i),k=w(i,"LI",{class:!0});var v=$(k);L=w(v,"A",{href:!0,class:!0});var J=$(L);T=E(J,"Writings"),J.forEach(u),v.forEach(u),N=y(i),_=w(i,"LI",{class:!0});var Q=$(_);I=w(Q,"A",{href:!0,class:!0});var X=$(I);S=E(X,"Talks"),X.forEach(u),Q.forEach(u),z=y(i),M=w(i,"LI",{class:!0});var Y=$(M);j=w(Y,"A",{href:!0,class:!0});var Z=$(j);H=E(Z,"Notes"),Z.forEach(u),Y.forEach(u),C=y(i),W=w(i,"LI",{class:!0});var tt=$(W);q=w(tt,"A",{href:!0,class:!0});var et=$(q);B=E(et,"Newsletter"),et.forEach(u),tt.forEach(u),F=y(i),O=w(i,"LI",{class:!0});var nt=$(O);P=w(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=$(P);R=w(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=$(R);U=w(rt,"path",{d:!0},1),$(U).forEach(u),rt.forEach(u),ot.forEach(u),V=y(nt),D=w(nt,"A",{"aria-label":!0,href:!0,class:!0});var st=$(D);G=w(st,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var at=$(G);K=w(at,"path",{d:!0},1),$(K).forEach(u),at.forEach(u),st.forEach(u),nt.forEach(u),i.forEach(u),f.forEach(u),e.forEach(u),this.h()},h(){v(a,"href","/"),v(a,"class","svelte-f3e4uo"),v(s,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(L,"href","/blogs"),v(L,"class","svelte-f3e4uo"),v(k,"class","svelte-f3e4uo"),v(I,"href","/talks"),v(I,"class","svelte-f3e4uo"),v(_,"class","svelte-f3e4uo"),v(j,"href","/notes"),v(j,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(q,"href","/newsletter"),v(q,"class","svelte-f3e4uo"),v(W,"class","svelte-f3e4uo"),v(U,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(R,"viewBox","0 0 24 24"),v(R,"width","1em"),v(R,"height","1em"),v(R,"class","svelte-f3e4uo"),v(P,"aria-label","Twitter account"),v(P,"href","https://twitter.com/lihautan"),v(P,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(O,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){i(t,n,e),f(n,o),f(o,r),f(r,s),f(s,a),f(a,c),f(r,l),f(r,h),f(h,b),f(b,A),f(r,x),f(r,k),f(k,L),f(L,T),f(r,N),f(r,_),f(_,I),f(I,S),f(r,z),f(r,M),f(M,j),f(j,H),f(r,C),f(r,W),f(W,q),f(q,B),f(r,F),f(r,O),f(O,P),f(P,R),f(R,U),f(O,V),f(O,D),f(D,G),f(G,K)},p:t,i:t,o:t,d(t){t&&u(n)}}}class G extends V{constructor(t){super(),U(this,t,null,D,a,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=w(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){i(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=w(t,"SPAN",{class:!0});var r=$(e);n=E(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-186dllz")},m(t,o){i(t,e,o),f(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,s,a,m,A,x,k,L,T,N,_,I,S,z,M;document.title=e="Note: "+t[1]+" | Tan Li Hau";let j=t[2],H=[];for(let e=0;e<j.length;e+=1)H[e]=Q(J(t,j,e));k=new G({});let C=t[2],R=[];for(let e=0;e<C.length;e+=1)R[e]=X(K(t,C,e));const U=t[4].default,V=function(t,e,n,o){if(t){const r=c(t,e,n,o);return t[0](r)}}(U,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<H.length;t+=1)H[t].c();s=d("meta"),a=g(),m=d("a"),A=p("Skip to content"),x=g(),B(k.$$.fragment),L=g(),T=d("main"),N=d("h1"),_=p(t[1]),I=g();for(let t=0;t<R.length;t+=1)R[t].c();S=g(),z=d("article"),V&&V.c(),this.h()},l(e){const c=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-ywf7m8"]',document.head);n=w(c,"LINK",{href:!0,rel:!0}),o=w(c,"META",{name:!0,content:!0}),r=w(c,"META",{name:!0,content:!0});for(let t=0;t<H.length;t+=1)H[t].l(c);s=w(c,"META",{itemprop:!0,content:!0}),c.forEach(u),a=y(e),m=w(e,"A",{href:!0,class:!0});var l=$(m);A=E(l,"Skip to content"),l.forEach(u),x=y(e),F(k.$$.fragment,e),L=y(e),T=w(e,"MAIN",{id:!0,class:!0});var f=$(T);N=w(f,"H1",{});var i=$(N);_=E(i,t[1]),i.forEach(u),I=y(f);for(let t=0;t<R.length;t+=1)R[t].l(f);S=y(f),z=w(f,"ARTICLE",{class:!0});var h=$(z);V&&V.l(h),h.forEach(u),f.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/web-workers/assets/blog-base-3554d53c.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(s,"itemprop","url"),v(s,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fweb-workers"),v(m,"href","#content"),v(m,"class","skip svelte-186dllz"),v(z,"class","svelte-186dllz"),v(T,"id","content"),v(T,"class","blog svelte-186dllz")},m(t,e){f(document.head,n),f(document.head,o),f(document.head,r);for(let t=0;t<H.length;t+=1)H[t].m(document.head,null);f(document.head,s),i(t,a,e),i(t,m,e),f(m,A),i(t,x,e),O(k,t,e),i(t,L,e),i(t,T,e),f(T,N),f(N,_),f(T,I);for(let t=0;t<R.length;t+=1)R[t].m(T,null);f(T,S),f(T,z),V&&V.m(z,null),M=!0},p(t,[n]){if((!M||2&n)&&e!==(e="Note: "+t[1]+" | Tan Li Hau")&&(document.title=e),(!M||1&n)&&v(o,"content",t[0]),4&n){let e;for(j=t[2],e=0;e<j.length;e+=1){const o=J(t,j,e);H[e]?H[e].p(o,n):(H[e]=Q(o),H[e].c(),H[e].m(s.parentNode,s))}for(;e<H.length;e+=1)H[e].d(1);H.length=j.length}if((!M||2&n)&&b(_,t[1]),4&n){let e;for(C=t[2],e=0;e<C.length;e+=1){const o=K(t,C,e);R[e]?R[e].p(o,n):(R[e]=X(o),R[e].c(),R[e].m(T,S))}for(;e<R.length;e+=1)R[e].d(1);R.length=C.length}V&&V.p&&8&n&&l(V,U,t,t[3],n,null,null)},i(t){M||(W(k.$$.fragment,t),W(V,t),M=!0)},o(t){q(k.$$.fragment,t),q(V,t),M=!1},d(t){u(n),u(o),u(r),h(H,t),u(s),t&&u(a),t&&u(m),t&&u(x),P(k,t),t&&u(L),t&&u(T),h(R,t),V&&V.d(t)}}}function Z(t,e,n){let{name:o}=e,{title:r}=e,{tags:s=[]}=e,{$$slots:a={},$$scope:c}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"title"in t&&n(1,r=t.title),"tags"in t&&n(2,s=t.tags),"$$scope"in t&&n(3,c=t.$$scope)},[o,r,s,c,a]}class tt extends V{constructor(t){super(),U(this,t,Z,Y,a,{name:0,title:1,tags:2})}}function et(t){let e,n,o,r,s;return{c(){e=d("ul"),n=d("li"),o=p("When to use workers "),r=d("a"),s=p("https://dassur.ma/things/when-workers/"),this.h()},l(t){e=w(t,"UL",{});var a=$(e);n=w(a,"LI",{});var c=$(n);o=E(c,"When to use workers "),r=w(c,"A",{href:!0,rel:!0});var l=$(r);s=E(l,"https://dassur.ma/things/when-workers/"),l.forEach(u),c.forEach(u),a.forEach(u),this.h()},h(){v(r,"href","https://dassur.ma/things/when-workers/"),v(r,"rel","nofollow")},m(t,a){i(t,e,a),f(e,n),f(n,o),f(n,r),f(r,s)},d(t){t&&u(e)}}}function nt(t){let n,o;const r=[ot];let s={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new tt({props:s}),{c(){B(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){O(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in a)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(s=ot,"object"==typeof s&&null!==s?s:{})]):{};var s;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(W(n.$$.fragment,t),o=!0)},o(t){q(n.$$.fragment,t),o=!1},d(t){P(n,t)}}}const ot={title:"Web Workers",tags:["web workers"],slug:"notes/web-workers",type:"notes",name:"web-workers",layout:"note"};class rt extends V{constructor(t){super(),U(this,t,null,nt,a,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
