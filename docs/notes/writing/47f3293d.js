function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function s(t,e,n,o,r,a,c){const s=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(s){const r=l(e,n,o,c);t.p(r,s)}}function i(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function $(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function y(t){return E(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const L=[],T=[],N=[],z=[],I=Promise.resolve();let _=!1;function k(t){N.push(t)}let S=!1;const M=new Set;function j(){if(!S){S=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),H(e.$$)}for(L.length=0;T.length;)T.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];M.has(e)||(M.add(e),e())}N.length=0}while(L.length);for(;z.length;)z.pop()();_=!1,S=!1,M.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const C=new Set;function q(t,e){t&&t.i&&(C.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push(()=>{C.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function F(t){t&&t.c()}function P(t,e){t&&t.l(e)}function U(t,e,o){const{fragment:c,on_mount:l,on_destroy:s,after_update:i}=t.$$;c&&c.m(e,o),k(()=>{const e=l.map(n).filter(a);s?s.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(k)}function O(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(L.push(t),_||(_=!0,I.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,a,c,l,s,i=[-1]){const f=A;x(e);const u=n.props||{},d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let m=!1;if(d.ctx=a?a(e,u,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&R(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=w(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&q(e.$$.fragment),U(e,n.target,n.anchor),j()}x(f)}class W{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n,o,r,a,c,l,s,u,b,A,x,L,T,N,z,I,_,k,S,M,j,H,C,q,B,F,P,U,O,R,V,W,D,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),c=d("a"),l=p("Tan Li Hau"),s=g(),u=d("li"),b=d("a"),A=p("About"),x=g(),L=d("li"),T=d("a"),N=p("Writings"),z=g(),I=d("li"),_=d("a"),k=p("Talks"),S=g(),M=d("li"),j=d("a"),H=p("Notes"),C=g(),q=d("li"),B=d("a"),F=p("Newsletter"),P=g(),U=d("li"),O=d("a"),R=m("svg"),V=m("path"),W=g(),D=d("a"),G=m("svg"),K=m("path"),this.h()},l(t){n=$(t,"HEADER",{class:!0});var e=w(n);o=$(e,"NAV",{});var i=w(o);r=$(i,"UL",{class:!0});var f=w(r);a=$(f,"LI",{class:!0});var d=w(a);c=$(d,"A",{href:!0,class:!0});var m=w(c);l=E(m,"Tan Li Hau"),m.forEach(h),d.forEach(h),s=y(f),u=$(f,"LI",{class:!0});var p=w(u);b=$(p,"A",{href:!0,class:!0});var g=w(b);A=E(g,"About"),g.forEach(h),p.forEach(h),x=y(f),L=$(f,"LI",{class:!0});var v=w(L);T=$(v,"A",{href:!0,class:!0});var J=w(T);N=E(J,"Writings"),J.forEach(h),v.forEach(h),z=y(f),I=$(f,"LI",{class:!0});var Q=w(I);_=$(Q,"A",{href:!0,class:!0});var X=w(_);k=E(X,"Talks"),X.forEach(h),Q.forEach(h),S=y(f),M=$(f,"LI",{class:!0});var Y=w(M);j=$(Y,"A",{href:!0,class:!0});var Z=w(j);H=E(Z,"Notes"),Z.forEach(h),Y.forEach(h),C=y(f),q=$(f,"LI",{class:!0});var tt=w(q);B=$(tt,"A",{href:!0,class:!0});var et=w(B);F=E(et,"Newsletter"),et.forEach(h),tt.forEach(h),P=y(f),U=$(f,"LI",{class:!0});var nt=w(U);O=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=w(O);R=$(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=w(R);V=$(rt,"path",{d:!0},1),w(V).forEach(h),rt.forEach(h),ot.forEach(h),W=y(nt),D=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=w(D);G=$(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var ct=w(G);K=$(ct,"path",{d:!0},1),w(K).forEach(h),ct.forEach(h),at.forEach(h),nt.forEach(h),f.forEach(h),i.forEach(h),e.forEach(h),this.h()},h(){v(c,"href","/"),v(c,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(u,"class","svelte-f3e4uo"),v(T,"href","/blogs"),v(T,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(_,"href","/talks"),v(_,"class","svelte-f3e4uo"),v(I,"class","svelte-f3e4uo"),v(j,"href","/notes"),v(j,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(B,"href","/newsletter"),v(B,"class","svelte-f3e4uo"),v(q,"class","svelte-f3e4uo"),v(V,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(R,"viewBox","0 0 24 24"),v(R,"width","1em"),v(R,"height","1em"),v(R,"class","svelte-f3e4uo"),v(O,"aria-label","Twitter account"),v(O,"href","https://twitter.com/lihautan"),v(O,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(U,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){f(t,n,e),i(n,o),i(o,r),i(r,a),i(a,c),i(c,l),i(r,s),i(r,u),i(u,b),i(b,A),i(r,x),i(r,L),i(L,T),i(T,N),i(r,z),i(r,I),i(I,_),i(_,k),i(r,S),i(r,M),i(M,j),i(j,H),i(r,C),i(r,q),i(q,B),i(B,F),i(r,P),i(r,U),i(U,O),i(O,R),i(R,V),i(U,W),i(U,D),i(D,G),i(G,K)},p:t,i:t,o:t,d(t){t&&h(n)}}}class G extends W{constructor(t){super(),V(this,t,null,D,c,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=$(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){f(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&h(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=$(t,"SPAN",{class:!0});var r=w(e);n=E(r,o),r.forEach(h),this.h()},h(){v(e,"class","svelte-186dllz")},m(t,o){f(t,e,o),i(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&h(e)}}}function Y(t){let e,n,o,r,a,c,m,A,x,L,T,N,z,I,_,k,S,M;document.title=e="Note: "+t[1]+" | Tan Li Hau";let j=t[2],H=[];for(let e=0;e<j.length;e+=1)H[e]=Q(J(t,j,e));L=new G({});let C=t[2],R=[];for(let e=0;e<C.length;e+=1)R[e]=X(K(t,C,e));const V=t[4].default,W=function(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}(V,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<H.length;t+=1)H[t].c();a=d("meta"),c=g(),m=d("a"),A=p("Skip to content"),x=g(),F(L.$$.fragment),T=g(),N=d("main"),z=d("h1"),I=p(t[1]),_=g();for(let t=0;t<R.length;t+=1)R[t].c();k=g(),S=d("article"),W&&W.c(),this.h()},l(e){const l=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-ywf7m8"]',document.head);n=$(l,"LINK",{href:!0,rel:!0}),o=$(l,"META",{name:!0,content:!0}),r=$(l,"META",{name:!0,content:!0});for(let t=0;t<H.length;t+=1)H[t].l(l);a=$(l,"META",{itemprop:!0,content:!0}),l.forEach(h),c=y(e),m=$(e,"A",{href:!0,class:!0});var s=w(m);A=E(s,"Skip to content"),s.forEach(h),x=y(e),P(L.$$.fragment,e),T=y(e),N=$(e,"MAIN",{id:!0,class:!0});var i=w(N);z=$(i,"H1",{});var f=w(z);I=E(f,t[1]),f.forEach(h),_=y(i);for(let t=0;t<R.length;t+=1)R[t].l(i);k=y(i),S=$(i,"ARTICLE",{class:!0});var u=w(S);W&&W.l(u),u.forEach(h),i.forEach(h),this.h()},h(){v(n,"href","https://lihautan.com/notes/writing/assets/blog-base-3554d53c.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fwriting"),v(m,"href","#content"),v(m,"class","skip svelte-186dllz"),v(S,"class","svelte-186dllz"),v(N,"id","content"),v(N,"class","blog svelte-186dllz")},m(t,e){i(document.head,n),i(document.head,o),i(document.head,r);for(let t=0;t<H.length;t+=1)H[t].m(document.head,null);i(document.head,a),f(t,c,e),f(t,m,e),i(m,A),f(t,x,e),U(L,t,e),f(t,T,e),f(t,N,e),i(N,z),i(z,I),i(N,_);for(let t=0;t<R.length;t+=1)R[t].m(N,null);i(N,k),i(N,S),W&&W.m(S,null),M=!0},p(t,[n]){if((!M||2&n)&&e!==(e="Note: "+t[1]+" | Tan Li Hau")&&(document.title=e),(!M||1&n)&&v(o,"content",t[0]),4&n){let e;for(j=t[2],e=0;e<j.length;e+=1){const o=J(t,j,e);H[e]?H[e].p(o,n):(H[e]=Q(o),H[e].c(),H[e].m(a.parentNode,a))}for(;e<H.length;e+=1)H[e].d(1);H.length=j.length}if((!M||2&n)&&b(I,t[1]),4&n){let e;for(C=t[2],e=0;e<C.length;e+=1){const o=K(t,C,e);R[e]?R[e].p(o,n):(R[e]=X(o),R[e].c(),R[e].m(N,k))}for(;e<R.length;e+=1)R[e].d(1);R.length=C.length}W&&W.p&&8&n&&s(W,V,t,t[3],n,null,null)},i(t){M||(q(L.$$.fragment,t),q(W,t),M=!0)},o(t){B(L.$$.fragment,t),B(W,t),M=!1},d(t){h(n),h(o),h(r),u(H,t),h(a),t&&h(c),t&&h(m),t&&h(x),O(L,t),t&&h(T),t&&h(N),u(R,t),W&&W.d(t)}}}function Z(t,e,n){let{name:o}=e,{title:r}=e,{tags:a=[]}=e,{$$slots:c={},$$scope:l}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"title"in t&&n(1,r=t.title),"tags"in t&&n(2,a=t.tags),"$$scope"in t&&n(3,l=t.$$scope)},[o,r,a,l,c]}class tt extends W{constructor(t){super(),V(this,t,Z,Y,c,{name:0,title:1,tags:2})}}function et(t){let e,n,o,r,a,c,l,s,u,m,b,A,x,L,T,N,z,I,_;return{c(){e=d("p"),n=p("text analyzer:"),o=g(),r=d("ul"),a=d("li"),c=d("a"),l=p("http://www.hemingwayapp.com/"),s=g(),u=d("li"),m=d("a"),b=p("https://coschedule.com/headline-analyzer"),A=g(),x=d("p"),L=p("guideline"),T=g(),N=d("ul"),z=d("li"),I=d("a"),_=p("https://www.freecodecamp.org/news/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e/"),this.h()},l(t){e=$(t,"P",{});var i=w(e);n=E(i,"text analyzer:"),i.forEach(h),o=y(t),r=$(t,"UL",{});var f=w(r);a=$(f,"LI",{});var d=w(a);c=$(d,"A",{href:!0,rel:!0});var p=w(c);l=E(p,"http://www.hemingwayapp.com/"),p.forEach(h),d.forEach(h),s=y(f),u=$(f,"LI",{});var g=w(u);m=$(g,"A",{href:!0,rel:!0});var v=w(m);b=E(v,"https://coschedule.com/headline-analyzer"),v.forEach(h),g.forEach(h),f.forEach(h),A=y(t),x=$(t,"P",{});var k=w(x);L=E(k,"guideline"),k.forEach(h),T=y(t),N=$(t,"UL",{});var S=w(N);z=$(S,"LI",{});var M=w(z);I=$(M,"A",{href:!0,rel:!0});var j=w(I);_=E(j,"https://www.freecodecamp.org/news/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e/"),j.forEach(h),M.forEach(h),S.forEach(h),this.h()},h(){v(c,"href","http://www.hemingwayapp.com/"),v(c,"rel","nofollow"),v(m,"href","https://coschedule.com/headline-analyzer"),v(m,"rel","nofollow"),v(I,"href","https://www.freecodecamp.org/news/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e/"),v(I,"rel","nofollow")},m(t,h){f(t,e,h),i(e,n),f(t,o,h),f(t,r,h),i(r,a),i(a,c),i(c,l),i(r,s),i(r,u),i(u,m),i(m,b),f(t,A,h),f(t,x,h),i(x,L),f(t,T,h),f(t,N,h),i(N,z),i(z,I),i(I,_)},d(t){t&&h(e),t&&h(o),t&&h(r),t&&h(A),t&&h(x),t&&h(T),t&&h(N)}}}function nt(t){let n,o;const r=[ot];let a={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);return n=new tt({props:a}),{c(){F(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,e){U(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let a=t.length;for(;a--;){const c=t[a],l=e[a];if(l){for(const t in c)t in l||(o[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[a]=l}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(a=ot,"object"==typeof a&&null!==a?a:{})]):{};var a;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(q(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){O(n,t)}}}const ot={title:"Tools and articles for writing",tags:["writing"],slug:"notes/writing",type:"notes",name:"writing",layout:"note"};class rt extends W{constructor(t){super(),V(this,t,null,nt,c,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
