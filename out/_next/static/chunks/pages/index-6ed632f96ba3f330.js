(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(8618)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,r=o(7273).Z,l=n(o(7294)),u=o(1003),a=o(7795),f=o(4465),i=o(2692),c=o(8245),s=o(9246),d=o(227),p=o(3468);let h=new Set;function v(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let o,n;let{href:a,as:h,children:b,prefetch:_,passHref:g,replace:m,shallow:C,scroll:j,locale:M,onClick:E,onMouseEnter:k,onTouchStart:x,legacyBehavior:O=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,O&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let w=!1!==_,T=l.default.useContext(i.RouterContext),L=l.default.useContext(c.AppRouterContext),R=null!=T?T:L,S=!T,{href:I,as:N}=l.default.useMemo(()=>{if(!T){let e=y(a);return{href:e,as:h?y(h):e}}let[t,o]=u.resolveHref(T,a,!0);return{href:t,as:h?u.resolveHref(T,h):o||t}},[T,a,h]),D=l.default.useRef(I),H=l.default.useRef(N);O&&(n=l.default.Children.only(o));let K=O?n&&"object"==typeof n&&n.ref:t,[U,z,A]=s.useIntersection({rootMargin:"200px"}),B=l.default.useCallback(e=>{(H.current!==N||D.current!==I)&&(A(),H.current=N,D.current=I),U(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[N,K,I,A,U]);l.default.useEffect(()=>{R&&z&&w&&v(R,I,N,{locale:M})},[N,I,z,M,w,null==T?void 0:T.locale,R]);let X={ref:B,onClick(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,o,n,r,a,f,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:i,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};c?l.default.startTransition(h):h()}(e,R,I,N,m,C,j,M,S,w)},onMouseEnter(e){O||"function"!=typeof k||k(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(w||!S)&&v(R,I,N,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof x||x(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(w||!S)&&v(R,I,N,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||g||"a"===n.type&&!("href"in n.props)){let Z=void 0!==M?M:null==T?void 0:T.locale,q=(null==T?void 0:T.isLocaleDomain)&&d.getDomainLocale(N,Z,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);X.href=q||p.addBasePath(f.addLocale(N,Z,null==T?void 0:T.defaultLocale))}return O?l.default.cloneElement(n,X):l.default.createElement("a",Object.assign({},P,X),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:f}=e,i=f||!l,[c,s]=n.useState(!1),[d,p]=n.useState(null);n.useEffect(()=>{if(l){if(!i&&!c&&d&&d.tagName){let e=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let t=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!c){let n=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(n)}},[d,i,o,t,c]);let h=n.useCallback(()=>{s(!1)},[]);return[p,c,h]};var n=o(7294),r=o(4686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8618:function(e,t,o){"use strict";o.r(t);var n=o(5893),r=o(1664),l=o.n(r),u=o(1163);let a=()=>{let e=(0,u.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Home"}),(0,n.jsx)(l(),{href:"portfolio",children:"Portfolio"}),(0,n.jsx)(l(),{href:"/portfolio/OscarGomez",children:"Test"}),(0,n.jsx)("button",{onClick:()=>{e.push("/portfolio/malparido")},children:"Click me to imperatively navigate"})]})};t.default=a},1664:function(e,t,o){e.exports=o(1551)},1163:function(e,t,o){e.exports=o(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);