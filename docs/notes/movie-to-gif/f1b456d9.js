function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,a,s){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,a);if(l){const r=c(e,n,o,s);t.p(r,l)}}function f(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t){return Array.from(t.childNodes)}function $(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const a=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)r.removeAttribute(a[t]);return t.splice(o,1)[0]}}return o?m(e):d(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return p(e)}function b(t){return y(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let A;function x(t){A=t}const L=[],T=[],k=[],_=[],N=Promise.resolve();let I=!1;function C(t){k.push(t)}let S=!1;const M=new Set;function z(){if(!S){S=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];x(e),D(e.$$)}for(L.length=0;T.length;)T.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];M.has(e)||(M.add(e),e())}k.length=0}while(L.length);for(;_.length;)_.pop()();I=!1,S=!1,M.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const H=new Set;function O(t,e){t&&t.i&&(H.delete(t),t.i(e))}function P(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),(void 0).c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function j(t){t&&t.c()}function q(t,e){t&&t.l(e)}function B(t,e,o){const{fragment:s,on_mount:c,on_destroy:l,after_update:f}=t.$$;s&&s.m(e,o),C(()=>{const e=c.map(n).filter(a);l?l.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(C)}function F(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(L.push(t),I||(I=!0,N.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,n,a,s,c,l,f=[-1]){const i=A;x(e);const h=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:f};let m=!1;if(d.ctx=a?a(e,h,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),m&&R(e,t)),n}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=E(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&O(e.$$.fragment),B(e,n.target,n.anchor),z()}x(i)}class V{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function W(e){let n,o,r,a,s,c,l,h,w,A,x,L,T,k,_,N,I,C,S,M,z,D,H,O,P,j,q,B,F,R,U,V,W,G,K;return{c(){n=d("header"),o=d("nav"),r=d("ul"),a=d("li"),s=d("a"),c=p("Tan Li Hau"),l=g(),h=d("li"),w=d("a"),A=p("About"),x=g(),L=d("li"),T=d("a"),k=p("Writings"),_=g(),N=d("li"),I=d("a"),C=p("Talks"),S=g(),M=d("li"),z=d("a"),D=p("Notes"),H=g(),O=d("li"),P=d("a"),j=p("Newsletter"),q=g(),B=d("li"),F=d("a"),R=m("svg"),U=m("path"),V=g(),W=d("a"),G=m("svg"),K=m("path"),this.h()},l(t){n=$(t,"HEADER",{class:!0});var e=E(n);o=$(e,"NAV",{});var f=E(o);r=$(f,"UL",{class:!0});var i=E(r);a=$(i,"LI",{class:!0});var d=E(a);s=$(d,"A",{href:!0,class:!0});var m=E(s);c=y(m,"Tan Li Hau"),m.forEach(u),d.forEach(u),l=b(i),h=$(i,"LI",{class:!0});var p=E(h);w=$(p,"A",{href:!0,class:!0});var g=E(w);A=y(g,"About"),g.forEach(u),p.forEach(u),x=b(i),L=$(i,"LI",{class:!0});var v=E(L);T=$(v,"A",{href:!0,class:!0});var J=E(T);k=y(J,"Writings"),J.forEach(u),v.forEach(u),_=b(i),N=$(i,"LI",{class:!0});var Q=E(N);I=$(Q,"A",{href:!0,class:!0});var X=E(I);C=y(X,"Talks"),X.forEach(u),Q.forEach(u),S=b(i),M=$(i,"LI",{class:!0});var Y=E(M);z=$(Y,"A",{href:!0,class:!0});var Z=E(z);D=y(Z,"Notes"),Z.forEach(u),Y.forEach(u),H=b(i),O=$(i,"LI",{class:!0});var tt=E(O);P=$(tt,"A",{href:!0,class:!0});var et=E(P);j=y(et,"Newsletter"),et.forEach(u),tt.forEach(u),q=b(i),B=$(i,"LI",{class:!0});var nt=E(B);F=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var ot=E(F);R=$(ot,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var rt=E(R);U=$(rt,"path",{d:!0},1),E(U).forEach(u),rt.forEach(u),ot.forEach(u),V=b(nt),W=$(nt,"A",{"aria-label":!0,href:!0,class:!0});var at=E(W);G=$(at,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var st=E(G);K=$(st,"path",{d:!0},1),E(K).forEach(u),st.forEach(u),at.forEach(u),nt.forEach(u),i.forEach(u),f.forEach(u),e.forEach(u),this.h()},h(){v(s,"href","/"),v(s,"class","svelte-f3e4uo"),v(a,"class","svelte-f3e4uo"),v(w,"href","/about"),v(w,"class","svelte-f3e4uo"),v(h,"class","svelte-f3e4uo"),v(T,"href","/blogs"),v(T,"class","svelte-f3e4uo"),v(L,"class","svelte-f3e4uo"),v(I,"href","/talks"),v(I,"class","svelte-f3e4uo"),v(N,"class","svelte-f3e4uo"),v(z,"href","/notes"),v(z,"class","svelte-f3e4uo"),v(M,"class","svelte-f3e4uo"),v(P,"href","/newsletter"),v(P,"class","svelte-f3e4uo"),v(O,"class","svelte-f3e4uo"),v(U,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),v(R,"viewBox","0 0 24 24"),v(R,"width","1em"),v(R,"height","1em"),v(R,"class","svelte-f3e4uo"),v(F,"aria-label","Twitter account"),v(F,"href","https://twitter.com/lihautan"),v(F,"class","svelte-f3e4uo"),v(K,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),v(G,"viewBox","0 0 24 24"),v(G,"width","1em"),v(G,"height","1em"),v(G,"class","svelte-f3e4uo"),v(W,"aria-label","Github account"),v(W,"href","https://github.com/tanhauhau"),v(W,"class","svelte-f3e4uo"),v(B,"class","social svelte-f3e4uo"),v(r,"class","svelte-f3e4uo"),v(n,"class","svelte-f3e4uo")},m(t,e){i(t,n,e),f(n,o),f(o,r),f(r,a),f(a,s),f(s,c),f(r,l),f(r,h),f(h,w),f(w,A),f(r,x),f(r,L),f(L,T),f(T,k),f(r,_),f(r,N),f(N,I),f(I,C),f(r,S),f(r,M),f(M,z),f(z,D),f(r,H),f(r,O),f(O,P),f(P,j),f(r,q),f(r,B),f(B,F),f(F,R),f(R,U),f(B,V),f(B,W),f(W,G),f(G,K)},p:t,i:t,o:t,d(t){t&&u(n)}}}class G extends V{constructor(t){super(),U(this,t,null,W,s,{})}}function K(t,e,n){const o=t.slice();return o[6]=e[n],o}function J(t,e,n){const o=t.slice();return o[6]=e[n],o}function Q(t){let e,n;return{c(){e=d("meta"),this.h()},l(t){e=$(t,"META",{name:!0,content:!0}),this.h()},h(){v(e,"name","keywords"),v(e,"content",n=t[6])},m(t,n){i(t,e,n)},p(t,o){4&o&&n!==(n=t[6])&&v(e,"content",n)},d(t){t&&u(e)}}}function X(t){let e,n,o=t[6]+"";return{c(){e=d("span"),n=p(o),this.h()},l(t){e=$(t,"SPAN",{class:!0});var r=E(e);n=y(r,o),r.forEach(u),this.h()},h(){v(e,"class","svelte-186dllz")},m(t,o){i(t,e,o),f(e,n)},p(t,e){4&e&&o!==(o=t[6]+"")&&w(n,o)},d(t){t&&u(e)}}}function Y(t){let e,n,o,r,a,s,m,A,x,L,T,k,_,N,I,C,S,M;document.title=e="Note: "+t[1]+" | Tan Li Hau";let z=t[2],D=[];for(let e=0;e<z.length;e+=1)D[e]=Q(J(t,z,e));L=new G({});let H=t[2],R=[];for(let e=0;e<H.length;e+=1)R[e]=X(K(t,H,e));const U=t[4].default,V=function(t,e,n,o){if(t){const r=c(t,e,n,o);return t[0](r)}}(U,t,t[3],null);return{c(){n=d("link"),o=d("meta"),r=d("meta");for(let t=0;t<D.length;t+=1)D[t].c();a=d("meta"),s=g(),m=d("a"),A=p("Skip to content"),x=g(),j(L.$$.fragment),T=g(),k=d("main"),_=d("h1"),N=p(t[1]),I=g();for(let t=0;t<R.length;t+=1)R[t].c();C=g(),S=d("article"),V&&V.c(),this.h()},l(e){const c=function(t,e=document.body){return Array.from(e.querySelectorAll(t))}('[data-svelte="svelte-ywf7m8"]',document.head);n=$(c,"LINK",{href:!0,rel:!0}),o=$(c,"META",{name:!0,content:!0}),r=$(c,"META",{name:!0,content:!0});for(let t=0;t<D.length;t+=1)D[t].l(c);a=$(c,"META",{itemprop:!0,content:!0}),c.forEach(u),s=b(e),m=$(e,"A",{href:!0,class:!0});var l=E(m);A=y(l,"Skip to content"),l.forEach(u),x=b(e),q(L.$$.fragment,e),T=b(e),k=$(e,"MAIN",{id:!0,class:!0});var f=E(k);_=$(f,"H1",{});var i=E(_);N=y(i,t[1]),i.forEach(u),I=b(f);for(let t=0;t<R.length;t+=1)R[t].l(f);C=b(f),S=$(f,"ARTICLE",{class:!0});var h=E(S);V&&V.l(h),h.forEach(u),f.forEach(u),this.h()},h(){v(n,"href","https://lihautan.com/notes/movie-to-gif/assets/blog-base-967d71e9.css"),v(n,"rel","stylesheet"),v(o,"name","og:title"),v(o,"content",t[0]),v(r,"name","og:type"),v(r,"content","website"),v(a,"itemprop","url"),v(a,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fmovie-to-gif"),v(m,"href","#content"),v(m,"class","skip svelte-186dllz"),v(S,"class","svelte-186dllz"),v(k,"id","content"),v(k,"class","blog svelte-186dllz")},m(t,e){f(document.head,n),f(document.head,o),f(document.head,r);for(let t=0;t<D.length;t+=1)D[t].m(document.head,null);f(document.head,a),i(t,s,e),i(t,m,e),f(m,A),i(t,x,e),B(L,t,e),i(t,T,e),i(t,k,e),f(k,_),f(_,N),f(k,I);for(let t=0;t<R.length;t+=1)R[t].m(k,null);f(k,C),f(k,S),V&&V.m(S,null),M=!0},p(t,[n]){if((!M||2&n)&&e!==(e="Note: "+t[1]+" | Tan Li Hau")&&(document.title=e),(!M||1&n)&&v(o,"content",t[0]),4&n){let e;for(z=t[2],e=0;e<z.length;e+=1){const o=J(t,z,e);D[e]?D[e].p(o,n):(D[e]=Q(o),D[e].c(),D[e].m(a.parentNode,a))}for(;e<D.length;e+=1)D[e].d(1);D.length=z.length}if((!M||2&n)&&w(N,t[1]),4&n){let e;for(H=t[2],e=0;e<H.length;e+=1){const o=K(t,H,e);R[e]?R[e].p(o,n):(R[e]=X(o),R[e].c(),R[e].m(k,C))}for(;e<R.length;e+=1)R[e].d(1);R.length=H.length}V&&V.p&&8&n&&l(V,U,t,t[3],n,null,null)},i(t){M||(O(L.$$.fragment,t),O(V,t),M=!0)},o(t){P(L.$$.fragment,t),P(V,t),M=!1},d(t){u(n),u(o),u(r),h(D,t),u(a),t&&u(s),t&&u(m),t&&u(x),F(L,t),t&&u(T),t&&u(k),h(R,t),V&&V.d(t)}}}function Z(t,e,n){let{name:o}=e,{title:r}=e,{tags:a=[]}=e,{$$slots:s={},$$scope:c}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name),"title"in t&&n(1,r=t.title),"tags"in t&&n(2,a=t.tags),"$$scope"in t&&n(3,c=t.$$scope)},[o,r,a,c,s]}class tt extends V{constructor(t){super(),U(this,t,Z,Y,s,{name:0,title:1,tags:2})}}function et(e){let n,o,r,a,s,c,l,h,m,w,A,x,L,T,k,_,N,I,C,S,M,z,D,H,O,P,j,q,B,F,R,U,V,W,G,K,J,Q,X,Y;return{c(){n=d("p"),o=p("movie to gif via "),r=d("code"),a=p("ffmpeg"),s=g(),c=d("pre"),l=g(),h=d("p"),m=d("code"),w=p("-i"),A=p(" specify input file\n"),x=d("code"),L=p("-f"),T=p(" specify format\nlastly sepcify output file"),k=g(),_=d("p"),N=p("extras:"),I=g(),C=d("ul"),S=d("li"),M=d("code"),z=p("-ss"),D=p(" for seeking"),H=g(),O=d("li"),P=d("code"),j=p("-filter_complex"),q=p(" to do filtering"),B=d("ul"),F=d("li"),R=d("code"),U=p("fps=40"),V=p(" control frame per second, more or less detail"),W=g(),G=d("li"),K=d("code"),J=p("setpts=0.5*PTS"),Q=p(" speed up the video "),X=d("a"),Y=p("reference"),this.h()},l(t){n=$(t,"P",{});var e=E(n);o=y(e,"movie to gif via "),r=$(e,"CODE",{});var f=E(r);a=y(f,"ffmpeg"),f.forEach(u),e.forEach(u),s=b(t),c=$(t,"PRE",{class:!0}),E(c).forEach(u),l=b(t),h=$(t,"P",{});var i=E(h);m=$(i,"CODE",{});var d=E(m);w=y(d,"-i"),d.forEach(u),A=y(i," specify input file\n"),x=$(i,"CODE",{});var p=E(x);L=y(p,"-f"),p.forEach(u),T=y(i," specify format\nlastly sepcify output file"),i.forEach(u),k=b(t),_=$(t,"P",{});var g=E(_);N=y(g,"extras:"),g.forEach(u),I=b(t),C=$(t,"UL",{});var v=E(C);S=$(v,"LI",{});var Z=E(S);M=$(Z,"CODE",{});var tt=E(M);z=y(tt,"-ss"),tt.forEach(u),D=y(Z," for seeking"),Z.forEach(u),H=b(v),O=$(v,"LI",{});var et=E(O);P=$(et,"CODE",{});var nt=E(P);j=y(nt,"-filter_complex"),nt.forEach(u),q=y(et," to do filtering"),B=$(et,"UL",{});var ot=E(B);F=$(ot,"LI",{});var rt=E(F);R=$(rt,"CODE",{});var at=E(R);U=y(at,"fps=40"),at.forEach(u),V=y(rt," control frame per second, more or less detail"),rt.forEach(u),W=b(ot),G=$(ot,"LI",{});var st=E(G);K=$(st,"CODE",{});var ct=E(K);J=y(ct,"setpts=0.5*PTS"),ct.forEach(u),Q=y(st," speed up the video "),X=$(st,"A",{href:!0,rel:!0});var lt=E(X);Y=y(lt,"reference"),lt.forEach(u),st.forEach(u),ot.forEach(u),et.forEach(u),v.forEach(u),this.h()},h(){v(c,"class","language-sh"),v(X,"href","https://trac.ffmpeg.org/wiki/How%20to%20speed%20up%20/%20slow%20down%20a%20video"),v(X,"rel","nofollow")},m(t,e){i(t,n,e),f(n,o),f(n,r),f(r,a),i(t,s,e),i(t,c,e),c.innerHTML='<code class="language-sh">ffmpeg -i ~/Desktop/darkmode.mov -filter_complex &quot;[0:v] fps=40, setpts=0.5*PTS&quot; -f gif ~/Desktop/darkmode-2.gif</code>',i(t,l,e),i(t,h,e),f(h,m),f(m,w),f(h,A),f(h,x),f(x,L),f(h,T),i(t,k,e),i(t,_,e),f(_,N),i(t,I,e),i(t,C,e),f(C,S),f(S,M),f(M,z),f(S,D),f(C,H),f(C,O),f(O,P),f(P,j),f(O,q),f(O,B),f(B,F),f(F,R),f(R,U),f(F,V),f(B,W),f(B,G),f(G,K),f(K,J),f(G,Q),f(G,X),f(X,Y)},p:t,d(t){t&&u(n),t&&u(s),t&&u(c),t&&u(l),t&&u(h),t&&u(k),t&&u(_),t&&u(I),t&&u(C)}}}function nt(t){let n,o;const r=[ot];let a={$$slots:{default:[et]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);return n=new tt({props:a}),{c(){j(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,e){B(n,t,e),o=!0},p(t,[e]){const o=0&e?function(t,e){const n={},o={},r={$$scope:1};let a=t.length;for(;a--;){const s=t[a],c=e[a];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[a]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(r,[(a=ot,"object"==typeof a&&null!==a?a:{})]):{};var a;1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){P(n.$$.fragment,t),o=!1},d(t){F(n,t)}}}const ot={title:"Converting movie to gif",tags:["ffmpeg"],slug:"notes/movie-to-gif",type:"notes",name:"movie-to-gif",layout:"note"};class rt extends V{constructor(t){super(),U(this,t,null,nt,s,{})}}setTimeout(()=>{new rt({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src})}else{const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(t)}},3e3);
