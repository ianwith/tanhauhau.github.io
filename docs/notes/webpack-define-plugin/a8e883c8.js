function n(){}function a(n,a){for(const e in a)n[e]=a[e];return n}function e(n){return n()}function t(){return Object.create(null)}function s(n){n.forEach(e)}function o(n){return"function"==typeof n}function c(n,a){return n!=n?a==a:n!==a||n&&"object"==typeof n||"function"==typeof n}function r(n,e,t,s){return n[1]&&s?a(t.ctx.slice(),n[1](s(e))):t.ctx}function l(n,a,e,t,s,o,c){const l=function(n,a,e,t){if(n[2]&&t){const s=n[2](t(e));if(void 0===a.dirty)return s;if("object"==typeof s){const n=[],e=Math.max(a.dirty.length,s.length);for(let t=0;t<e;t+=1)n[t]=a.dirty[t]|s[t];return n}return a.dirty|s}return a.dirty}(a,t,s,o);if(l){const s=r(a,e,t,c);n.p(s,l)}}function p(n,a){n.appendChild(a)}function i(n,a,e){n.insertBefore(a,e||null)}function u(n){n.parentNode.removeChild(n)}function f(n,a){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(a)}function h(n){return document.createElement(n)}function d(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function g(n){return document.createTextNode(n)}function k(){return g(" ")}function m(n,a,e){null==e?n.removeAttribute(a):n.getAttribute(a)!==e&&n.setAttribute(a,e)}function v(n){return Array.from(n.childNodes)}function E(n,a,e,t){for(let t=0;t<n.length;t+=1){const s=n[t];if(s.nodeName===a){let a=0;const o=[];for(;a<s.attributes.length;){const n=s.attributes[a++];e[n.name]||o.push(n.name)}for(let n=0;n<o.length;n++)s.removeAttribute(o[n]);return n.splice(t,1)[0]}}return t?d(a):h(a)}function b(n,a){for(let e=0;e<n.length;e+=1){const t=n[e];if(3===t.nodeType)return t.data=""+a,n.splice(e,1)[0]}return g(a)}function y(n){return b(n," ")}function w(n,a){a=""+a,n.wholeText!==a&&(n.data=a)}let $;function L(n){$=n}const A=[],x=[],_=[],I=[],T=Promise.resolve();let j=!1;function P(n){_.push(n)}let C=!1;const M=new Set;function q(){if(!C){C=!0;do{for(let n=0;n<A.length;n+=1){const a=A[n];L(a),N(a.$$)}for(A.length=0;x.length;)x.pop()();for(let n=0;n<_.length;n+=1){const a=_[n];M.has(a)||(M.add(a),a())}_.length=0}while(A.length);for(;I.length;)I.pop()();j=!1,C=!1,M.clear()}}function N(n){if(null!==n.fragment){n.update(),s(n.before_update);const a=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,a),n.after_update.forEach(P)}}const O=new Set;function H(n,a){n&&n.i&&(O.delete(n),n.i(a))}function D(n,a,e,t){if(n&&n.o){if(O.has(n))return;O.add(n),(void 0).c.push(()=>{O.delete(n),t&&(e&&n.d(1),t())}),n.o(a)}}function S(n){n&&n.c()}function R(n,a){n&&n.l(a)}function z(n,a,t){const{fragment:c,on_mount:r,on_destroy:l,after_update:p}=n.$$;c&&c.m(a,t),P(()=>{const a=r.map(e).filter(o);l?l.push(...a):s(a),n.$$.on_mount=[]}),p.forEach(P)}function U(n,a){const e=n.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(a),e.on_destroy=e.fragment=null,e.ctx=[])}function F(n,a){-1===n.$$.dirty[0]&&(A.push(n),j||(j=!0,T.then(q)),n.$$.dirty.fill(0)),n.$$.dirty[a/31|0]|=1<<a%31}function W(a,e,o,c,r,l,p=[-1]){const i=$;L(a);const f=e.props||{},h=a.$$={fragment:null,ctx:null,props:l,update:n,not_equal:r,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:t(),dirty:p};let d=!1;if(h.ctx=o?o(a,f,(n,e,...t)=>{const s=t.length?t[0]:e;return h.ctx&&r(h.ctx[n],h.ctx[n]=s)&&(h.bound[n]&&h.bound[n](s),d&&F(a,n)),e}):[],h.update(),d=!0,s(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){const n=v(e.target);h.fragment&&h.fragment.l(n),n.forEach(u)}else h.fragment&&h.fragment.c();e.intro&&H(a.$$.fragment),z(a,e.target,e.anchor),q()}L(i)}class B{$destroy(){U(this,1),this.$destroy=n}$on(n,a){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(a),()=>{const n=e.indexOf(a);-1!==n&&e.splice(n,1)}}$set(){}}function G(a){let e,t,s,o,c,r,l,f,w,$,L,A,x,_,I,T,j,P,C,M,q,N,O,H,D,S,R,z,U,F,W,B,G,K,V;return{c(){e=h("header"),t=h("nav"),s=h("ul"),o=h("li"),c=h("a"),r=g("Tan Li Hau"),l=k(),f=h("li"),w=h("a"),$=g("About"),L=k(),A=h("li"),x=h("a"),_=g("Writings"),I=k(),T=h("li"),j=h("a"),P=g("Talks"),C=k(),M=h("li"),q=h("a"),N=g("Notes"),O=k(),H=h("li"),D=h("a"),S=g("Newsletter"),R=k(),z=h("li"),U=h("a"),F=d("svg"),W=d("path"),B=k(),G=h("a"),K=d("svg"),V=d("path"),this.h()},l(n){e=E(n,"HEADER",{class:!0});var a=v(e);t=E(a,"NAV",{});var p=v(t);s=E(p,"UL",{class:!0});var i=v(s);o=E(i,"LI",{class:!0});var h=v(o);c=E(h,"A",{href:!0,class:!0});var d=v(c);r=b(d,"Tan Li Hau"),d.forEach(u),h.forEach(u),l=y(i),f=E(i,"LI",{class:!0});var g=v(f);w=E(g,"A",{href:!0,class:!0});var k=v(w);$=b(k,"About"),k.forEach(u),g.forEach(u),L=y(i),A=E(i,"LI",{class:!0});var m=v(A);x=E(m,"A",{href:!0,class:!0});var Q=v(x);_=b(Q,"Writings"),Q.forEach(u),m.forEach(u),I=y(i),T=E(i,"LI",{class:!0});var J=v(T);j=E(J,"A",{href:!0,class:!0});var X=v(j);P=b(X,"Talks"),X.forEach(u),J.forEach(u),C=y(i),M=E(i,"LI",{class:!0});var Y=v(M);q=E(Y,"A",{href:!0,class:!0});var Z=v(q);N=b(Z,"Notes"),Z.forEach(u),Y.forEach(u),O=y(i),H=E(i,"LI",{class:!0});var nn=v(H);D=E(nn,"A",{href:!0,class:!0});var an=v(D);S=b(an,"Newsletter"),an.forEach(u),nn.forEach(u),R=y(i),z=E(i,"LI",{class:!0});var en=v(z);U=E(en,"A",{"aria-label":!0,href:!0,class:!0});var tn=v(U);F=E(tn,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var sn=v(F);W=E(sn,"path",{d:!0},1),v(W).forEach(u),sn.forEach(u),tn.forEach(u),B=y(en),G=E(en,"A",{"aria-label":!0,href:!0,class:!0});var on=v(G);K=E(on,"svg",{viewBox:!0,width:!0,height:!0,class:!0},1);var cn=v(K);V=E(cn,"path",{d:!0},1),v(V).forEach(u),cn.forEach(u),on.forEach(u),en.forEach(u),i.forEach(u),p.forEach(u),a.forEach(u),this.h()},h(){m(c,"href","/"),m(c,"class","svelte-f3e4uo"),m(o,"class","svelte-f3e4uo"),m(w,"href","/about"),m(w,"class","svelte-f3e4uo"),m(f,"class","svelte-f3e4uo"),m(x,"href","/blogs"),m(x,"class","svelte-f3e4uo"),m(A,"class","svelte-f3e4uo"),m(j,"href","/talks"),m(j,"class","svelte-f3e4uo"),m(T,"class","svelte-f3e4uo"),m(q,"href","/notes"),m(q,"class","svelte-f3e4uo"),m(M,"class","svelte-f3e4uo"),m(D,"href","/newsletter"),m(D,"class","svelte-f3e4uo"),m(H,"class","svelte-f3e4uo"),m(W,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n    10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n    4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),m(F,"viewBox","0 0 24 24"),m(F,"width","1em"),m(F,"height","1em"),m(F,"class","svelte-f3e4uo"),m(U,"aria-label","Twitter account"),m(U,"href","https://twitter.com/lihautan"),m(U,"class","svelte-f3e4uo"),m(V,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0\n    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07\n    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65\n    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42\n    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),m(K,"viewBox","0 0 24 24"),m(K,"width","1em"),m(K,"height","1em"),m(K,"class","svelte-f3e4uo"),m(G,"aria-label","Github account"),m(G,"href","https://github.com/tanhauhau"),m(G,"class","svelte-f3e4uo"),m(z,"class","social svelte-f3e4uo"),m(s,"class","svelte-f3e4uo"),m(e,"class","svelte-f3e4uo")},m(n,a){i(n,e,a),p(e,t),p(t,s),p(s,o),p(o,c),p(c,r),p(s,l),p(s,f),p(f,w),p(w,$),p(s,L),p(s,A),p(A,x),p(x,_),p(s,I),p(s,T),p(T,j),p(j,P),p(s,C),p(s,M),p(M,q),p(q,N),p(s,O),p(s,H),p(H,D),p(D,S),p(s,R),p(s,z),p(z,U),p(U,F),p(F,W),p(z,B),p(z,G),p(G,K),p(K,V)},p:n,i:n,o:n,d(n){n&&u(e)}}}class K extends B{constructor(n){super(),W(this,n,null,G,c,{})}}function V(n,a,e){const t=n.slice();return t[6]=a[e],t}function Q(n,a,e){const t=n.slice();return t[6]=a[e],t}function J(n){let a,e;return{c(){a=h("meta"),this.h()},l(n){a=E(n,"META",{name:!0,content:!0}),this.h()},h(){m(a,"name","keywords"),m(a,"content",e=n[6])},m(n,e){i(n,a,e)},p(n,t){4&t&&e!==(e=n[6])&&m(a,"content",e)},d(n){n&&u(a)}}}function X(n){let a,e,t=n[6]+"";return{c(){a=h("span"),e=g(t),this.h()},l(n){a=E(n,"SPAN",{class:!0});var s=v(a);e=b(s,t),s.forEach(u),this.h()},h(){m(a,"class","svelte-186dllz")},m(n,t){i(n,a,t),p(a,e)},p(n,a){4&a&&t!==(t=n[6]+"")&&w(e,t)},d(n){n&&u(a)}}}function Y(n){let a,e,t,s,o,c,d,$,L,A,x,_,I,T,j,P,C,M;document.title=a="Note: "+n[1]+" | Tan Li Hau";let q=n[2],N=[];for(let a=0;a<q.length;a+=1)N[a]=J(Q(n,q,a));A=new K({});let O=n[2],F=[];for(let a=0;a<O.length;a+=1)F[a]=X(V(n,O,a));const W=n[4].default,B=function(n,a,e,t){if(n){const s=r(n,a,e,t);return n[0](s)}}(W,n,n[3],null);return{c(){e=h("link"),t=h("meta"),s=h("meta");for(let n=0;n<N.length;n+=1)N[n].c();o=h("meta"),c=k(),d=h("a"),$=g("Skip to content"),L=k(),S(A.$$.fragment),x=k(),_=h("main"),I=h("h1"),T=g(n[1]),j=k();for(let n=0;n<F.length;n+=1)F[n].c();P=k(),C=h("article"),B&&B.c(),this.h()},l(a){const r=function(n,a=document.body){return Array.from(a.querySelectorAll(n))}('[data-svelte="svelte-ywf7m8"]',document.head);e=E(r,"LINK",{href:!0,rel:!0}),t=E(r,"META",{name:!0,content:!0}),s=E(r,"META",{name:!0,content:!0});for(let n=0;n<N.length;n+=1)N[n].l(r);o=E(r,"META",{itemprop:!0,content:!0}),r.forEach(u),c=y(a),d=E(a,"A",{href:!0,class:!0});var l=v(d);$=b(l,"Skip to content"),l.forEach(u),L=y(a),R(A.$$.fragment,a),x=y(a),_=E(a,"MAIN",{id:!0,class:!0});var p=v(_);I=E(p,"H1",{});var i=v(I);T=b(i,n[1]),i.forEach(u),j=y(p);for(let n=0;n<F.length;n+=1)F[n].l(p);P=y(p),C=E(p,"ARTICLE",{class:!0});var f=v(C);B&&B.l(f),f.forEach(u),p.forEach(u),this.h()},h(){m(e,"href","https://lihautan.com/notes/webpack-define-plugin/assets/blog-base-3554d53c.css"),m(e,"rel","stylesheet"),m(t,"name","og:title"),m(t,"content",n[0]),m(s,"name","og:type"),m(s,"content","website"),m(o,"itemprop","url"),m(o,"content","https%3A%2F%2Flihautan.com%2Fnotes%2Fwebpack-define-plugin"),m(d,"href","#content"),m(d,"class","skip svelte-186dllz"),m(C,"class","svelte-186dllz"),m(_,"id","content"),m(_,"class","blog svelte-186dllz")},m(n,a){p(document.head,e),p(document.head,t),p(document.head,s);for(let n=0;n<N.length;n+=1)N[n].m(document.head,null);p(document.head,o),i(n,c,a),i(n,d,a),p(d,$),i(n,L,a),z(A,n,a),i(n,x,a),i(n,_,a),p(_,I),p(I,T),p(_,j);for(let n=0;n<F.length;n+=1)F[n].m(_,null);p(_,P),p(_,C),B&&B.m(C,null),M=!0},p(n,[e]){if((!M||2&e)&&a!==(a="Note: "+n[1]+" | Tan Li Hau")&&(document.title=a),(!M||1&e)&&m(t,"content",n[0]),4&e){let a;for(q=n[2],a=0;a<q.length;a+=1){const t=Q(n,q,a);N[a]?N[a].p(t,e):(N[a]=J(t),N[a].c(),N[a].m(o.parentNode,o))}for(;a<N.length;a+=1)N[a].d(1);N.length=q.length}if((!M||2&e)&&w(T,n[1]),4&e){let a;for(O=n[2],a=0;a<O.length;a+=1){const t=V(n,O,a);F[a]?F[a].p(t,e):(F[a]=X(t),F[a].c(),F[a].m(_,P))}for(;a<F.length;a+=1)F[a].d(1);F.length=O.length}B&&B.p&&8&e&&l(B,W,n,n[3],e,null,null)},i(n){M||(H(A.$$.fragment,n),H(B,n),M=!0)},o(n){D(A.$$.fragment,n),D(B,n),M=!1},d(n){u(e),u(t),u(s),f(N,n),u(o),n&&u(c),n&&u(d),n&&u(L),U(A,n),n&&u(x),n&&u(_),f(F,n),B&&B.d(n)}}}function Z(n,a,e){let{name:t}=a,{title:s}=a,{tags:o=[]}=a,{$$slots:c={},$$scope:r}=a;return n.$set=n=>{"name"in n&&e(0,t=n.name),"title"in n&&e(1,s=n.title),"tags"in n&&e(2,o=n.tags),"$$scope"in n&&e(3,r=n.$$scope)},[t,s,o,r,c]}class nn extends B{constructor(n){super(),W(this,n,Z,Y,c,{name:0,title:1,tags:2})}}function an(a){let e,t,s,o,c,r,l,f,d,w,$,L,A,x,_,I,T,j,P,C,M,q,N,O,H,D,S,R,z,U,F,W,B,G,K,V,Q,J,X,Y,Z,nn,an,en,tn,sn,on,cn,rn,ln,pn,un,fn,hn,dn,gn,kn,mn,vn,En,bn,yn,wn,$n,Ln,An,xn,_n,In,Tn,jn,Pn,Cn,Mn,qn,Nn,On,Hn,Dn,Sn,Rn,zn,Un,Fn,Wn,Bn,Gn,Kn,Vn,Qn,Jn,Xn,Yn,Zn,na,aa,ea,ta,sa,oa,ca,ra,la,pa,ia,ua,fa,ha,da,ga,ka,ma,va,Ea,ba,ya,wa,$a,La,Aa,xa,_a,Ia,Ta,ja,Pa,Ca,Ma,qa,Na,Oa,Ha,Da,Sa,Ra,za,Ua,Fa,Wa,Ba,Ga,Ka,Va,Qa,Ja,Xa,Ya,Za,ne,ae,ee;return{c(){e=h("section"),t=h("ul"),s=h("ul"),o=h("li"),c=h("a"),r=g("What about terser?"),l=h("li"),f=h("a"),d=g("Read More"),w=k(),$=h("p"),L=g("a high level of define plugin, treeshake + minification happens in the following"),A=k(),x=h("p"),_=g("for any module,"),I=k(),T=h("ul"),j=h("li"),P=g("webpack reads the source code"),C=k(),M=h("li"),q=g("apply all the loaders"),N=k(),O=h("li"),H=g("apply define plugin"),D=k(),S=h("li"),R=g("for the final code after loaders + define plugin, "),z=h("ul"),U=h("li"),F=g("for code at "),W=h("code"),B=g("if (truthy)"),G=g(" or "),K=h("code"),V=g("truthy && ..."),Q=g(" or "),J=h("code"),X=g("truthy ? ... : ..."),Y=g(", webpack will try to collapse that conditional, meaning based on truthy / falsy value, remove unwanted code logic paths"),Z=k(),nn=h("li"),an=g("find all the "),en=h("code"),tn=g("imports"),sn=g(" or "),on=h("code"),cn=g("require"),rn=g(" in the code"),ln=k(),pn=h("li"),un=g("traverse them and apply the same step for each module"),fn=k(),hn=h("p"),dn=g("after creating the module map"),gn=k(),kn=h("ul"),mn=h("li"),vn=g("create chunks based on dynamic import()"),En=k(),bn=h("li"),yn=g("apply graph based optimisation - such as mark unused exports and treeshake them away"),wn=k(),$n=h("li"),Ln=g("granular split chuks optimisation"),An=k(),xn=h("li"),_n=g("lastly, for each chunk"),In=h("ul"),Tn=h("li"),jn=g("run terser to minify the code, will remove any unused variables / functions within each chunk"),Pn=k(),Cn=h("p"),Mn=g("which means, there's a difference between the following contrived code:"),qn=k(),Nn=h("pre"),On=k(),Hn=h("p"),Dn=g("and"),Sn=k(),Rn=h("pre"),zn=k(),Un=h("p"),Fn=g("after applying "),Wn=h("code"),Bn=g("new DefinePlugin({ __FLAG__: true })"),Gn=g(", you get:"),Kn=k(),Vn=h("pre"),Qn=k(),Jn=h("p"),Xn=g("and"),Yn=k(),Zn=h("pre"),na=k(),aa=h("p"),ea=g("webpack's parser is able to collapse the conditional of the latter, but not the former."),ta=k(),sa=h("blockquote"),oa=h("p"),ca=g("the collapse of conditional expression happens "),ra=h("a"),la=g("here"),pa=k(),ia=h("pre"),ua=k(),fa=h("p"),ha=g("so, the former case, will have both "),da=h("code"),ga=g("foo"),ka=g(" and "),ma=h("code"),va=g("bar"),Ea=g(" in the bundled code ,but the latter will only have "),ba=h("code"),ya=g("foo"),wa=g("."),$a=k(),La=h("section"),Aa=h("h3"),xa=h("a"),_a=g("What about terser?"),Ia=k(),Ta=h("p"),ja=g("terser runs on chunk level after all the bundling and chunking logic, so even though terser is smart enough to collapse"),Pa=k(),Ca=h("pre"),Ma=k(),qa=h("p"),Na=g("into"),Oa=k(),Ha=h("pre"),Da=k(),Sa=h("p"),Ra=g("the bundled code still have "),za=h("code"),Ua=g("foo"),Fa=g(" and "),Wa=h("code"),Ba=g("bar"),Ga=g("'s code."),Ka=k(),Va=h("section"),Qa=h("h2"),Ja=h("a"),Xa=g("Read More"),Ya=k(),Za=h("ul"),ne=h("li"),ae=h("a"),ee=g("https://webpack.js.org/plugins/internal-plugins/#constplugin"),this.h()},l(n){e=E(n,"SECTION",{});var a=v(e);t=E(a,"UL",{class:!0,id:!0,role:!0,"aria-label":!0});var p=v(t);s=E(p,"UL",{});var i=v(s);o=E(i,"LI",{});var h=v(o);c=E(h,"A",{href:!0});var g=v(c);r=b(g,"What about terser?"),g.forEach(u),h.forEach(u),i.forEach(u),l=E(p,"LI",{});var k=v(l);f=E(k,"A",{href:!0});var m=v(f);d=b(m,"Read More"),m.forEach(u),k.forEach(u),p.forEach(u),a.forEach(u),w=y(n),$=E(n,"P",{});var te=v($);L=b(te,"a high level of define plugin, treeshake + minification happens in the following"),te.forEach(u),A=y(n),x=E(n,"P",{});var se=v(x);_=b(se,"for any module,"),se.forEach(u),I=y(n),T=E(n,"UL",{});var oe=v(T);j=E(oe,"LI",{});var ce=v(j);P=b(ce,"webpack reads the source code"),ce.forEach(u),C=y(oe),M=E(oe,"LI",{});var re=v(M);q=b(re,"apply all the loaders"),re.forEach(u),N=y(oe),O=E(oe,"LI",{});var le=v(O);H=b(le,"apply define plugin"),le.forEach(u),D=y(oe),S=E(oe,"LI",{});var pe=v(S);R=b(pe,"for the final code after loaders + define plugin, "),z=E(pe,"UL",{});var ie=v(z);U=E(ie,"LI",{});var ue=v(U);F=b(ue,"for code at "),W=E(ue,"CODE",{});var fe=v(W);B=b(fe,"if (truthy)"),fe.forEach(u),G=b(ue," or "),K=E(ue,"CODE",{});var he=v(K);V=b(he,"truthy && ..."),he.forEach(u),Q=b(ue," or "),J=E(ue,"CODE",{});var de=v(J);X=b(de,"truthy ? ... : ..."),de.forEach(u),Y=b(ue,", webpack will try to collapse that conditional, meaning based on truthy / falsy value, remove unwanted code logic paths"),ue.forEach(u),ie.forEach(u),pe.forEach(u),Z=y(oe),nn=E(oe,"LI",{});var ge=v(nn);an=b(ge,"find all the "),en=E(ge,"CODE",{});var ke=v(en);tn=b(ke,"imports"),ke.forEach(u),sn=b(ge," or "),on=E(ge,"CODE",{});var me=v(on);cn=b(me,"require"),me.forEach(u),rn=b(ge," in the code"),ge.forEach(u),ln=y(oe),pn=E(oe,"LI",{});var ve=v(pn);un=b(ve,"traverse them and apply the same step for each module"),ve.forEach(u),oe.forEach(u),fn=y(n),hn=E(n,"P",{});var Ee=v(hn);dn=b(Ee,"after creating the module map"),Ee.forEach(u),gn=y(n),kn=E(n,"UL",{});var be=v(kn);mn=E(be,"LI",{});var ye=v(mn);vn=b(ye,"create chunks based on dynamic import()"),ye.forEach(u),En=y(be),bn=E(be,"LI",{});var we=v(bn);yn=b(we,"apply graph based optimisation - such as mark unused exports and treeshake them away"),we.forEach(u),wn=y(be),$n=E(be,"LI",{});var $e=v($n);Ln=b($e,"granular split chuks optimisation"),$e.forEach(u),An=y(be),xn=E(be,"LI",{});var Le=v(xn);_n=b(Le,"lastly, for each chunk"),In=E(Le,"UL",{});var Ae=v(In);Tn=E(Ae,"LI",{});var xe=v(Tn);jn=b(xe,"run terser to minify the code, will remove any unused variables / functions within each chunk"),xe.forEach(u),Ae.forEach(u),Le.forEach(u),be.forEach(u),Pn=y(n),Cn=E(n,"P",{});var _e=v(Cn);Mn=b(_e,"which means, there's a difference between the following contrived code:"),_e.forEach(u),qn=y(n),Nn=E(n,"PRE",{class:!0}),v(Nn).forEach(u),On=y(n),Hn=E(n,"P",{});var Ie=v(Hn);Dn=b(Ie,"and"),Ie.forEach(u),Sn=y(n),Rn=E(n,"PRE",{class:!0}),v(Rn).forEach(u),zn=y(n),Un=E(n,"P",{});var Te=v(Un);Fn=b(Te,"after applying "),Wn=E(Te,"CODE",{});var je=v(Wn);Bn=b(je,"new DefinePlugin({ __FLAG__: true })"),je.forEach(u),Gn=b(Te,", you get:"),Te.forEach(u),Kn=y(n),Vn=E(n,"PRE",{class:!0}),v(Vn).forEach(u),Qn=y(n),Jn=E(n,"P",{});var Pe=v(Jn);Xn=b(Pe,"and"),Pe.forEach(u),Yn=y(n),Zn=E(n,"PRE",{class:!0}),v(Zn).forEach(u),na=y(n),aa=E(n,"P",{});var Ce=v(aa);ea=b(Ce,"webpack's parser is able to collapse the conditional of the latter, but not the former."),Ce.forEach(u),ta=y(n),sa=E(n,"BLOCKQUOTE",{});var Me=v(sa);oa=E(Me,"P",{});var qe=v(oa);ca=b(qe,"the collapse of conditional expression happens "),ra=E(qe,"A",{href:!0,rel:!0});var Ne=v(ra);la=b(Ne,"here"),Ne.forEach(u),qe.forEach(u),Me.forEach(u),pa=y(n),ia=E(n,"PRE",{class:!0}),v(ia).forEach(u),ua=y(n),fa=E(n,"P",{});var Oe=v(fa);ha=b(Oe,"so, the former case, will have both "),da=E(Oe,"CODE",{});var He=v(da);ga=b(He,"foo"),He.forEach(u),ka=b(Oe," and "),ma=E(Oe,"CODE",{});var De=v(ma);va=b(De,"bar"),De.forEach(u),Ea=b(Oe," in the bundled code ,but the latter will only have "),ba=E(Oe,"CODE",{});var Se=v(ba);ya=b(Se,"foo"),Se.forEach(u),wa=b(Oe,"."),Oe.forEach(u),$a=y(n),La=E(n,"SECTION",{});var Re=v(La);Aa=E(Re,"H3",{});var ze=v(Aa);xa=E(ze,"A",{href:!0,id:!0});var Ue=v(xa);_a=b(Ue,"What about terser?"),Ue.forEach(u),ze.forEach(u),Ia=y(Re),Ta=E(Re,"P",{});var Fe=v(Ta);ja=b(Fe,"terser runs on chunk level after all the bundling and chunking logic, so even though terser is smart enough to collapse"),Fe.forEach(u),Pa=y(Re),Ca=E(Re,"PRE",{class:!0}),v(Ca).forEach(u),Ma=y(Re),qa=E(Re,"P",{});var We=v(qa);Na=b(We,"into"),We.forEach(u),Oa=y(Re),Ha=E(Re,"PRE",{class:!0}),v(Ha).forEach(u),Da=y(Re),Sa=E(Re,"P",{});var Be=v(Sa);Ra=b(Be,"the bundled code still have "),za=E(Be,"CODE",{});var Ge=v(za);Ua=b(Ge,"foo"),Ge.forEach(u),Fa=b(Be," and "),Wa=E(Be,"CODE",{});var Ke=v(Wa);Ba=b(Ke,"bar"),Ke.forEach(u),Ga=b(Be,"'s code."),Be.forEach(u),Re.forEach(u),Ka=y(n),Va=E(n,"SECTION",{});var Ve=v(Va);Qa=E(Ve,"H2",{});var Qe=v(Qa);Ja=E(Qe,"A",{href:!0,id:!0});var Je=v(Ja);Xa=b(Je,"Read More"),Je.forEach(u),Qe.forEach(u),Ya=y(Ve),Za=E(Ve,"UL",{});var Xe=v(Za);ne=E(Xe,"LI",{});var Ye=v(ne);ae=E(Ye,"A",{href:!0,rel:!0});var Ze=v(ae);ee=b(Ze,"https://webpack.js.org/plugins/internal-plugins/#constplugin"),Ze.forEach(u),Ye.forEach(u),Xe.forEach(u),Ve.forEach(u),this.h()},h(){m(c,"href","#what-about-terser"),m(f,"href","#read-more"),m(t,"class","sitemap"),m(t,"id","sitemap"),m(t,"role","navigation"),m(t,"aria-label","Table of Contents"),m(Nn,"class","language-js"),m(Rn,"class","language-js"),m(Vn,"class","language-js"),m(Zn,"class","language-js"),m(ra,"href","https://github.com/webpack/webpack/blob/master/lib/ConstPlugin.js#L133"),m(ra,"rel","nofollow"),m(ia,"class","language-js"),m(xa,"href","#what-about-terser"),m(xa,"id","what-about-terser"),m(Ca,"class","language-js"),m(Ha,"class","language-js"),m(Ja,"href","#read-more"),m(Ja,"id","read-more"),m(ae,"href","https://webpack.js.org/plugins/internal-plugins/#constplugin"),m(ae,"rel","nofollow")},m(n,a){i(n,e,a),p(e,t),p(t,s),p(s,o),p(o,c),p(c,r),p(t,l),p(l,f),p(f,d),i(n,w,a),i(n,$,a),p($,L),i(n,A,a),i(n,x,a),p(x,_),i(n,I,a),i(n,T,a),p(T,j),p(j,P),p(T,C),p(T,M),p(M,q),p(T,N),p(T,O),p(O,H),p(T,D),p(T,S),p(S,R),p(S,z),p(z,U),p(U,F),p(U,W),p(W,B),p(U,G),p(U,K),p(K,V),p(U,Q),p(U,J),p(J,X),p(U,Y),p(T,Z),p(T,nn),p(nn,an),p(nn,en),p(en,tn),p(nn,sn),p(nn,on),p(on,cn),p(nn,rn),p(T,ln),p(T,pn),p(pn,un),i(n,fn,a),i(n,hn,a),p(hn,dn),i(n,gn,a),i(n,kn,a),p(kn,mn),p(mn,vn),p(kn,En),p(kn,bn),p(bn,yn),p(kn,wn),p(kn,$n),p($n,Ln),p(kn,An),p(kn,xn),p(xn,_n),p(xn,In),p(In,Tn),p(Tn,jn),i(n,Pn,a),i(n,Cn,a),p(Cn,Mn),i(n,qn,a),i(n,Nn,a),Nn.innerHTML='<code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> __FLAG__<span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span>bar\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,On,a),i(n,Hn,a),p(Hn,Dn),i(n,Sn,a),i(n,Rn,a),Rn.innerHTML='<code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span>__FLAG__<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span>bar\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,zn,a),i(n,Un,a),p(Un,Fn),p(Un,Wn),p(Wn,Bn),p(Un,Gn),i(n,Kn,a),i(n,Vn,a),Vn.innerHTML='<code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span>bar\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,Qn,a),i(n,Jn,a),p(Jn,Xn),i(n,Yn,a),i(n,Zn,a),Zn.innerHTML='<code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span>bar\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',i(n,na,a),i(n,aa,a),p(aa,ea),i(n,ta,a),i(n,sa,a),p(sa,oa),p(oa,ca),p(oa,ra),p(ra,la),i(n,pa,a),i(n,ia,a),ia.innerHTML='<code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span></code>',i(n,ua,a),i(n,fa,a),p(fa,ha),p(fa,da),p(da,ga),p(fa,ka),p(fa,ma),p(ma,va),p(fa,Ea),p(fa,ba),p(ba,ya),p(fa,wa),i(n,$a,a),i(n,La,a),p(La,Aa),p(Aa,xa),p(xa,_a),p(La,Ia),p(La,Ta),p(Ta,ja),p(La,Pa),p(La,Ca),Ca.innerHTML='<code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>\n   <span class="token function">require</span><span class="token punctuation">(</span>bar\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',p(La,Ma),p(La,qa),p(qa,Na),p(La,Oa),p(La,Ha),Ha.innerHTML='<code class="language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',p(La,Da),p(La,Sa),p(Sa,Ra),p(Sa,za),p(za,Ua),p(Sa,Fa),p(Sa,Wa),p(Wa,Ba),p(Sa,Ga),i(n,Ka,a),i(n,Va,a),p(Va,Qa),p(Qa,Ja),p(Ja,Xa),p(Va,Ya),p(Va,Za),p(Za,ne),p(ne,ae),p(ae,ee)},p:n,d(n){n&&u(e),n&&u(w),n&&u($),n&&u(A),n&&u(x),n&&u(I),n&&u(T),n&&u(fn),n&&u(hn),n&&u(gn),n&&u(kn),n&&u(Pn),n&&u(Cn),n&&u(qn),n&&u(Nn),n&&u(On),n&&u(Hn),n&&u(Sn),n&&u(Rn),n&&u(zn),n&&u(Un),n&&u(Kn),n&&u(Vn),n&&u(Qn),n&&u(Jn),n&&u(Yn),n&&u(Zn),n&&u(na),n&&u(aa),n&&u(ta),n&&u(sa),n&&u(pa),n&&u(ia),n&&u(ua),n&&u(fa),n&&u($a),n&&u(La),n&&u(Ka),n&&u(Va)}}}function en(n){let e,t;const s=[tn];let o={$$slots:{default:[an]},$$scope:{ctx:n}};for(let n=0;n<s.length;n+=1)o=a(o,s[n]);return e=new nn({props:o}),{c(){S(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,a){z(e,n,a),t=!0},p(n,[a]){const t=0&a?function(n,a){const e={},t={},s={$$scope:1};let o=n.length;for(;o--;){const c=n[o],r=a[o];if(r){for(const n in c)n in r||(t[n]=1);for(const n in r)s[n]||(e[n]=r[n],s[n]=1);n[o]=r}else for(const n in c)s[n]=1}for(const n in t)n in e||(e[n]=void 0);return e}(s,[(o=tn,"object"==typeof o&&null!==o?o:{})]):{};var o;1&a&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){D(e.$$.fragment,n),t=!1},d(n){U(e,n)}}}const tn={title:"Webpack Define Plugin",tags:["define plugin","feature flag"],slug:"notes/webpack-define-plugin",type:"notes",name:"webpack-define-plugin",layout:"note"};class sn extends B{constructor(n){super(),W(this,n,null,en,c,{})}}setTimeout(()=>{new sn({target:document.querySelector("#app"),hydrate:!0});if(document.querySelector(".twitter-tweet")){const n=document.createElement("script");n.async=!0,n.src="https://platform.twitter.com/widgets.js",n.charset="utf-8",document.body.appendChild(n)}if("loading"in HTMLImageElement.prototype){document.querySelectorAll('img[loading="lazy"]').forEach(n=>{n.src=n.dataset.src})}else{const n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(n)}},3e3);
