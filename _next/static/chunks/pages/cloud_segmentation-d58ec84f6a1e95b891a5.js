_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{HMs9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),r=f(i),a=f(n("17x9")),l=n("Seim"),s=f(n("tvXG")),u=f(n("PTkm")),c=f(n("uUxy"));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,h=0,b=0,g=0,y="data-lazyload-listened",w=[],_=[],E=!1;try{var O=Object.defineProperty({},"passive",{get:function(){E=!0}});window.addEventListener("test",null,O)}catch(L){}var N=!!E&&{capture:!1,passive:!0},P=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,i=void 0,r=void 0,a=void 0;try{var l=t.getBoundingClientRect();o=l.top,i=l.left,r=l.height,a=l.width}catch(L){o=v,i=h,r=g,a=b}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),f=Math.max(i,0),d=Math.min(s,o+r)-c,p=Math.min(u,i+a)-f,m=void 0,y=void 0,w=void 0,_=void 0;try{var E=n.getBoundingClientRect();m=E.top,y=E.left,w=E.height,_=E.width}catch(L){m=v,y=h,w=g,_=b}var O=m-c,N=y-f,P=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-P[0]<=d&&O+w+P[1]>=0&&N-P[0]<=p&&N+_+P[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var i=t.getBoundingClientRect();n=i.top,o=i.height}catch(L){n=v,o=g}var r=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=r&&n+o+a[1]>=0}(e))?e.visible||(e.props.once&&_.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){_.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),_=[]},M=function(){for(var e=0;e<w.length;++e){var t=w[e];P(t)}C()},T=void 0,j=null,k=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",j,N),(0,l.off)(window,"resize",j,N),j=null),j||(void 0!==this.props.debounce?(j=(0,u.default)(M,"number"===typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(j=(0,c.default)(M,"number"===typeof this.props.throttle?this.props.throttle:300),T="throttle"):j=M),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var i=+o.getAttribute(y)+1;1===i&&o.addEventListener("scroll",j,N),o.setAttribute(y,i)}}else if(0===w.length||n){var r=this.props,a=r.scroll,f=r.resize;a&&(0,l.on)(e,"scroll",j,N),f&&(0,l.on)(window,"resize",j,N)}w.push(this),P(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",j,N),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!==typeof window&&((0,l.off)(window,"resize",j,N),(0,l.off)(window,"scroll",j,N))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,i=e.classNamePrefix,a=e.style;return r.default.createElement("div",{className:i+"-wrapper",ref:this.setRef,style:a},this.visible?n:o||r.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(i.Component);k.propTypes={classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},k.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var x=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){d(this,i);var e=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+x(t),e}return m(i,n),o(i,[{key:"render",value:function(){return r.default.createElement(k,e,r.default.createElement(t,this.props))}}]),i}(i.Component)}},t.default=k,t.forceCheck=M,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}C()}},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,i=void 0,r=void 0,a=void 0,l=void 0,s=function s(){var u=+new Date-a;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(l=e.apply(r,i),o||(r=null,i=null)))};return function(){r=this,i=arguments,a=+new Date;var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(l=e.apply(r,i),r=null,i=null),l}}},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},kPUl:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return _})),n.d(t,"default",(function(){return E}));var o=n("ODXe"),i=n("q1tI"),r=n.n(i),a=n("8Kt/"),l=n.n(a),s=n("YFqc"),u=n.n(s),c=n("9Dj+"),f=n("F2YG"),d=n.n(f),p=n("HMs9"),m=n.n(p),v=n("Ji2X"),h=n("kKAo"),b=n("tRbT"),g=n("Z3vd"),y=n("l1im"),w=r.a.createElement,_=!0;function E(e){var t=e.eventData,n=r.a.useState(1),i=Object(o.a)(n,2),a=i[0],s=i[1],f=t.catids.slice(5*(a-1),5*a),p=function(e,n){s(n),f=t.catids.slice(5*(a-1),5*a)};return w(c.a,null,w(l.a,null,w("title",null,"Cloud segmentation model | ",c.b),w("meta",{property:"og:image",content:"https://eoview.com/images/cyclone-fani/card.png"}),w("meta",{name:"og:title",content:"Demo of Cloud Segmentation Model | ".concat(c.b)}),w("meta",{name:"twitter:card",content:"summary_large_image"}),w("meta",{name:"twitter:site",content:"@smly"}),w("meta",{name:"twitter:title",content:"EOview - catalogue of open earth observation data"})),w(v.a,{maxWidth:"lg",className:d.a.containerPadding},w("section",{className:d.a.headingMd},w(b.a,{container:!0,spacing:1,alignItems:"stretch"},w(b.a,{item:!0,xs:12,sm:12,md:12,lg:12},w(h.a,{elevation:0},w("div",{className:d.a.containerEventDataPage},w("h2",{className:d.a.eventPageTitle},"Cloud Segmentation Model"),w("p",null,"Our model is trained to segment cloud and fog area in 50cm high-resolution satellite images.",w("br",null),"The trained model will be released soon."),w(u.a,{href:"/"},w(g.a,{variant:"contained",color:"primary",style:{margin:"0.4rem"},disableElevation:!0},"Back")))))))),w(v.a,{maxWidth:"lg",className:d.a.containerPadding},w("section",{className:d.a.headingMd},w("div",{style:{display:"flex",justifyContent:"center"}},w(y.a,{count:t.num_pages,page:a,onChange:p,showFirstButton:!0,showLastButton:!0}))),w("section",{className:d.a.headingMd},w(b.a,{container:!0,spacing:1,alignItems:"stretch",justify:"center"},f.map((function(e){return w(b.a,{item:!0,key:e.catid,xs:4,sm:3,md:2,lg:1,className:d.a.catalogItem},w(h.a,{className:d.a.catalogPaper},e.catid,w("br",null),"Cloud Cover: ",e.cloudCover,"%",w("br",null),w("br",null),w(m.a,{width:e.thumb_w,height:e.thumb_h},w("img",{src:"/images/cloud_segmentation/"+e.catid+".png",width:e.thumb_w,height:e.thumb_h}))))})))),w("section",{className:d.a.headingMd},w("div",{style:{display:"flex",justifyContent:"center"}},w(y.a,{count:t.num_pages,page:a,onChange:p,showFirstButton:!0,showLastButton:!0})))))}},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(o),r=i.position,a=i.overflow,l=i["overflow-x"],s=i["overflow-y"];if("static"===r&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,i;return t||(t=250),function(){var r=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(i),i=setTimeout((function(){o=a,e.apply(r,l)}),t)):(o=a,e.apply(r,l))}}},"w0Y/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cloud_segmentation",function(){return n("kPUl")}])}},[["w0Y/",0,2,1,3,4,5]]]);