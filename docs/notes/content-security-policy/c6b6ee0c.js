function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,c,s){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(l){const r=a(e,n,o,s);t.p(r,l)}}function i(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function $(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const c=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)r.removeAttribute(c[t]);return t.splice(o,1)[0]}}return o?p(e):d(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return m(e)}function E(t){return w(t," ")}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function k(t){A=t}const x=[],_=[],L=[],T=[],N=Promise.resolve();let S=!1;function I(t){L.push(t)}let C=!1;const j=new Set;function z(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];k(e),M(e.$$)}for(x.length=0;_.length;)_.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];j.has(e)||(j.add(e),e())}L.length=0}while(x.length);for(;T.length;)T.pop()();S=!1,C=!1,j.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const H=new Set;function P(t,e){t&&t.i&&(H.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),(void 0).c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t){t&&t.c()}function F(t,e){t&&t.l(e)}function O(t,e,o){const{fragment:s,on_mount:a,on_destroy:l,after_update:i}=t.$$;s&&s.m(e,o),I(()=>{const e=a.map(n).filter(c);l?l.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(I)}function R(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(x.push(t),S||(S=!0,N.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,c,s,a,l,i=[-1]){const f=A;k(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:i};let p=!1;if(d.ctx=c?c(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&U(e,t)),n}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&P(e.$$.fragment),O(e,n.target,n.anchor),z()}k(f)}class W{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(e){let n,o,r,c,s,a,l,h,b,A,k,x,_,L,T,N,S,I,C,j,z,M,H,P,q,B,F,O,R,U,V,W,D,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),c=d("li"),s=d("a"),a=m("Tan Li Hau"),l=g(),h=d("li"),b=d("a"),A=m("About"),k=g(),x=d("li"),_=d("a"),L=m("Writings"),T=g(),N=d("li"),S=d("a"),I=m("Talks"),C=g(),j=d("li"),z=d("a"),M=m("Notes"),H=g(),P=d("li"),q=d("a"),B=m("Newsletter"),F=g(),O=d("li"),R=d("a"),U=p("svg"),V=p("path"),W=g(),D=d("a"),G=p("svg"),K=p("path"),this.h()},l(t){n=$(t,"HEADER",{class:!0});var e=y(n);o=$(e,"NAV",{});var i=y(o);r=$(i,"UL",{class:!0});var f=y(r);c=$(f,"LI",{class:!0});var d=y(c);s=$(d,"A",{href:!0,class:!0});var p=y(s);a=w(p,"Tan Li Hau"),p.forEach(u),d.forEach(u),l=E(f),h=$(f,"LI",{class:!0});var m=y(h);b=$(m,"A",{href:!0,class:!0});var g=y(b);A=w(g,"About"),g.forEach(u),m.forEach(u),k=E(f),x=$(f,"LI",{class:!0});var v=y(x);_=$(v,"A",{href:!0,class:!0});var J=y(_);L=w(J,"Writings"),J.forEach(u),v.forEach(u),T=E(f),N=$(f,"LI",{class:!0});var Q=y(N);S=$(Q,"A",{href:!0,class:!0});var X=y(S);I=w(X,"Talks"),X.forEach(u),Q.forEach(u),C=E(f),j=$(f,"LI",{class:!0});var Y=y(j);z=$(Y,"A",{href:!0,class:!0});var Z=y(z);M=w(Z,"Notes"),Z.forEach(u),Y.forEach(u),H=E(f),P=$(f,"LI",{class:!0});var tt=y(P);q=$(tt,"A",{href:!0,class:!0});var et=y(q);B=w(et,"Newsletter"),et.forEach(u),tt.forEach(u),F=E(f),O=$(f,"LI",{class:!0});var nt=y(O);R=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=y(R);U=$(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=y(U);V=$(rt,"path",{d:!0},1),y(V).forEach(u),rt.forEach(u),ot.forEach(u),W=E(nt),D=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var ct=y(D);G=$(ct,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var st=y(G);K=$(st,"path",{d:!0},1),y(K).forEach(u),st.forEach(u),ct.forEach(u),nt.forEach(u),f.forEach(u),i.forEach(u),e.forEach(u),this.h()},h(){v(s,"href","/"),v(s,"class","svelte-f3e4uo"),v(c,"class","svelte-f3e4uo"),v(b,"href","/about"),v(b,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(_,"href","/blogs"),v(_,"class","svelte-f3e4uo"),v(x,"class","svelte-f3e4uo"),v(S,"href","/talks"),v(S,"class","svelte-f3e4uo"),v(N,"class","svelte-f3e4uo"),v(z,"href","/notes"),v(z,"class","svelte-f3e4uo"),v(j,"class","svelte-f3e4uo"),v(q,"href","/newsletter"),v(q,"class","svelte-f3e4uo"),v(P,"class","svelte-f3e4uo"),v(V,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(U,"viewBox","0 0 24 24"),v(U,"width","1em"),v(U,"height","1em"),v(U,"class","svelte-f3e4uo"),v(R,"aria-label","Twitter account"),v(R,"href","https://twitter.com/lihautan"),v(R,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(D,"aria-label","Github account"),v(D,"href","https://github.com/tanhauhau"),v(D,"class","svelte-f3e4uo"),v(O,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){f(t,n,e),i(n,o),i(o,r),i(r,c),i(c,s),i(s,a),i(r,l),i(r,h),i(h,b),i(b,A),i(r,k),i(r,x),i(x,_),i(_,L),i(r,T),i(r,N),i(N,S),i(S,I),i(r,C),i(r,j),i(j,z),i(z,M),i(r,H),i(r,P),i(P,q),i(q,B),i(r,F),i(r,O),i(O,R),i(R,U),i(U,V),i(O,W),i(O,D),i(D,G),i(G,K)},p:t,i:t,o:t,d(t){t&&u(n)}}}class G extends W{constructor(t){super(),V(this,t,null,D,s,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=$(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){f(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=m(o),this.h()},l(t){e=$(t,"SPAN",{class:!0});var r=y(e);n=w(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-186dllz")},m(t,o){f(t,e,o),i(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&b(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,c,s,p,A,k,x,_,L,T,N,S,I,C,j;document.title=e="Note: "+t[1]+" | Tan Li Hau";let z=t[2],M=[];for(let e=0;e<z.length;e+=1)M[e]=Q(J(t,z,e));x=new G({});let H=t[2],U=[];for(let e=0;e<H.length;e+=1)U[e]=X(K(t,H,e));const V=t[4].default,W=function(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}(V,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<M.length;t+=1)M[t].c();c=d("meta"),s=g(),p=d("a"),A=m("Skip to content"),k=g(),B(x.$$.fragment),_=g(),L=d("main"),T=d("h1"),N=m(t[1]),S=g();for(let t=0;t<U.length;t+=1)U[t].c();I=g(),C=d("article"),W&&W.c(),this.h()},l(e){const a=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-ywf7m8"]',document.head);n=$(a,"LINK",{href:!0,rel:!0}),o=$(a,"META",{name:!0,content:!0}),r=$(a,"META",{name:!0,content:!0});for(let t=0;t<M.length;t+=1)M[t].l(a);c=$(a,"META",{itemprop:!0,content:!0}),a.forEach(u),s=E(e),p=$(e,"A",{href:!0,class:!0});var l=y(p);A=w(l,"Skip to content"),l.forEach(u),k=E(e),F(x.$$.fragment,e),_=E(e),L=$(e,"MAIN",{id:!0,class:!0});var i=y(L);T=$(i,"H1",{});var f=y(T);N=w(f,t[1]),f.forEach(u),S=E(i);for(let t=0;t<U.length;t+=1)U[t].l(i);I=E(i),C=$(i,"ARTICLE",{class:!0});var h=y(C);W&&W.l(h),h.forEach(u),i.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/content-security-policy/assets/blog-base-3554d53c.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(c,"itemprop","url"),v(c,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fcontent-security-policy"),v(p,"href","#content"),v(p,"class","skip svelte-186dllz"),v(C,"class","svelte-186dllz"),v(L,"id","content"),v(L,"class","blog svelte-186dllz")},m(t,e){i(document.head,n),i(document.head,o),i(document.head,r);for(let t=0;t<M.length;t+=1)M[t].m(document.head,null);i(document.head,c),f(t,s,e),f(t,p,e),i(p,A),f(t,k,e),O(x,t,e),f(t,_,e),f(t,L,e),i(L,T),i(T,N),i(L,S);for(let t=0;t<U.length;t+=1)U[t].m(L,null);i(L,I),i(L,C),W&&W.m(C,null),j=!0},p(t,[n]){if((!j||2&n)&&e!==(e="Note: "+t[1]+" | Tan Li Hau")&&(document.title=e),(!j||1&n)&&v(o,"content",t[0]),4&n){let e;for(z=t[2],e=0;e<z.length;e+=1){const o=J(t,z,e);M[e]?M[e].p(o,n):(M[e]=Q(o),M[e].c(),M[e].m(c.parentNode,c))}for(;e<M.length;e+=1)M[e].d(1);M.length=z.length}if((!j||2&n)&&b(N,t[1]),4&n){let e;for(H=t[2],e=0;e<H.length;e+=1){const o=K(t,H,e);U[e]?U[e].p(o,n):(U[e]=X(o),U[e].c(),U[e].m(L,I))}for(;e<U.length;e+=1)U[e].d(1);U.length=H.length}W&&W.p&&8&n&&l(W,V,t,t[3],n,null,null)},i(t){j||(P(x.$$.fragment,t),P(W,t),j=!0)},o(t){q(x.$$.fragment,t),q(W,t),j=!1},d(t){u(n),u(o),u(r),h(M,t),u(c),t&&u(s),t&&u(p),t&&u(k),R(x,t),t&&u(_),t&&u(L),h(U,t),W&&W.d(t)}}}function Z(t,e,n){let{name:o}=e,{title:r}=e,{tags:c=[]}=e,{$$slots:s={},$$scope:a}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"title"in t&&n(1,r=t.title),"tags"in t&&n(2,c=t.tags),"$$scope"in t&&n(3,a=t.$$scope)},[o,r,c,a,s]}class tt extends W{constructor(t){super(),V(this,t,Z,Y,s,{name:0,title:1,tags:2})}}function et(t){let e,n,o,r,c,s,a,l,h,p,b,A;return{c(){e=d("ul"),n=d("li"),o=d("a"),r=m("https://w3c.github.io/webappsec-cspee/"),c=g(),s=d("li"),a=d("a"),l=m("https://en.wikipedia.org/wiki/Content_Security_Policy"),h=g(),p=d("li"),b=d("a"),A=m("https://en.wikipedia.org/wiki/Clickjacking"),this.h()},l(t){e=$(t,"UL",{});var i=y(e);n=$(i,"LI",{});var f=y(n);o=$(f,"A",{href:!0,rel:!0});var d=y(o);r=w(d,"https://w3c.github.io/webappsec-cspee/"),d.forEach(u),f.forEach(u),c=E(i),s=$(i,"LI",{});var m=y(s);a=$(m,"A",{href:!0,rel:!0});var g=y(a);l=w(g,"https://en.wikipedia.org/wiki/Content_Security_Policy"),g.forEach(u),m.forEach(u),h=E(i),p=$(i,"LI",{});var v=y(p);b=$(v,"A",{href:!0,rel:!0});var k=y(b);A=w(k,"https://en.wikipedia.org/wiki/Clickjacking"),k.forEach(u),v.forEach(u),i.forEach(u),this.h()},h(){v(o,"href","https://w3c.github.io/webappsec-cspee/"),v(o,"rel","nofollow"),v(a,"href","https://en.wikipedia.org/wiki/Content_Security_Policy"),v(a,"rel","nofollow"),v(b,"href","https://en.wikipedia.org/wiki/Clickjacking"),v(b,"rel","nofollow")},m(t,u){f(t,e,u),i(e,n),i(n,o),i(o,r),i(e,c),i(e,s),i(s,a),i(a,l),i(e,h),i(e,p),i(p,b),i(b,A)},d(t){t&&u(e)}}}function nt(t){let n,o;const r=[ot];let c={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)c=e(c,r[t]);return n=new tt({props:c}),{c(){B(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){O(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],a=e[c];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[c]=a}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(c=ot,"object"==typeof c&&null!==c?c:{})]):{};var c;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(P(n.$$.fragment,t),o=!0)},o(t){q(n.$$.fragment,t),o=!1},d(t){R(n,t)}}}const ot={title:"Content Security Policy",tags:["web security"],slug:"notes/content-security-policy",type:"notes",name:"content-security-policy",layout:"note"};class rt extends W{constructor(t){super(),V(this,t,null,nt,s,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
