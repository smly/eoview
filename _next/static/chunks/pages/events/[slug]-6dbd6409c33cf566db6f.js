_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1OdC":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return _})),n.d(t,"default",(function(){return E}));var o=n("ODXe"),a=n("q1tI"),i=n.n(a),r=n("8Kt/"),l=n.n(r),s=n("YFqc"),u=n.n(s),c=n("9Dj+"),d=n("F2YG"),f=n.n(d),p=n("HMs9"),m=n.n(p),v=n("Ji2X"),h=n("kKAo"),g=n("tRbT"),b=n("Z3vd"),y=n("l1im"),w=i.a.createElement,_=!0;function E(e){var t=e.params,n=e.eventData,a=i.a.useState(1),r=Object(o.a)(a,2),s=r[0],d=r[1],p=n.catids.slice(10*(s-1),10*s),_=function(e,t){d(t),p=n.catids.slice(10*(s-1),10*s)};return w(c.a,null,w(l.a,null,w("title",null,n.name," | ",c.b),w("meta",{property:"og:image",content:"https://eoview.com/images/".concat(t.slug,"/card.png")}),w("meta",{name:"og:title",content:"".concat(n.name," | ").concat(c.b)}),w("meta",{name:"twitter:card",content:"summary_large_image"}),w("meta",{name:"twitter:site",content:"@smly"})),w(v.a,{maxWidth:"lg",className:f.a.containerPadding},w("section",{className:f.a.headingMd},w(g.a,{container:!0,spacing:1,alignItems:"stretch"},w(g.a,{item:!0,xs:12,sm:12,md:6,lg:6},w(h.a,{elevation:0},w("div",{className:f.a.containerEventDataPage},w("h2",{className:f.a.eventPageTitle},n.name),w("p",null,w("table",{className:f.a.eventDataTable},w("tr",null,w("th",null,"Total filesize"),w("td",null,P(n.total_filesize))),w("tr",null,w("th",null,"Event Date"),w("td",null,"20",n.event_date)),w("tr",null,w("th",null,"Pre-Event count"),w("td",null,n.pre_event_count)),w("tr",null,w("th",null,"Post-Event count"),w("td",null,n.post_event_count)),w("tr",null,w("th",null,"Latitude"),w("td",null,n.event_latitude.toFixed(8))),w("tr",null,w("th",null,"Longitude"),w("td",null,n.event_longitude.toFixed(8)))))))),w(g.a,{item:!0,xs:12,sm:12,md:6,lg:6},w(h.a,{elevation:0},w("div",{className:f.a.containerEventDataPage},w(m.a,{width:500,height:200},w("img",{src:"/images/"+t.slug+"/map.jpg",style:{width:"100%"}}))),w("div",{className:f.a.containerEventDataPage},w(u.a,{href:"/"},w(b.a,{variant:"contained",color:"primary",style:{margin:"0.4rem"},disableElevation:!0},"Back")),w(b.a,{variant:"contained",color:"secondary",style:{margin:"0.4rem"},href:"https://www.maxar.com/open-data/".concat(t.slug),target:"_blank",disableElevation:!0},"MAXAR's Page"),w(b.a,{variant:"contained",color:"secondary",style:{margin:"0.4rem"},href:"https://www.google.com/maps/@?api=1&map_action=map&center=".concat(n.event_longitude,",").concat(n.event_latitude,"&zoom=12&basemap=satellite"),target:"_blank",disableElevation:!0},"Maps"))))))),w(v.a,{maxWidth:"lg",className:f.a.containerPadding},w("section",{className:f.a.headingMd},w("div",{style:{display:"flex",justifyContent:"center"}},w(y.a,{count:n.num_pages,page:s,onChange:_,showFirstButton:!0,showLastButton:!0}))),w("section",{className:f.a.headingMd},w(g.a,{container:!0,spacing:1,alignItems:"stretch",justify:"center"},p.map((function(e){return w(g.a,{item:!0,key:e.catid,xs:4,sm:3,md:2,lg:1,className:f.a.catalogItem},w(h.a,{className:f.a.catalogPaper},e.catid,w("br",null),e.event_date,w("br",null),e.is_pre_event?"Pre Event":"Post Event",w("br",null),P(e.filesize),w("br",null),w(b.a,{color:"secondary",style:{margin:"0.4rem"},href:"https://www.google.com/maps/@?api=1&map_action=map&center=".concat(e.longitude,",").concat(e.latitude,"&zoom=12&basemap=satellite"),target:"_blank",disableElevation:!0},"Maps"),w("br",null),w(m.a,{width:e.thumb_w,height:e.thumb_h},w("img",{src:"/images/"+t.slug+"/"+e.catid+".png",width:e.thumb_w,height:e.thumb_h}))))})))),w("section",{className:f.a.headingMd},w("div",{style:{display:"flex",justifyContent:"center"}},w(y.a,{count:n.num_pages,page:s,onChange:_,showFirstButton:!0,showLastButton:!0})))))}function P(e){return e>1099511627776?(e/1099511627776).toFixed(2)+" TB":e>1073741824?(e/1073741824).toFixed(2)+" GB":(e/1048576).toFixed(2)+" MB"}},"2Pxm":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]",function(){return n("1OdC")}])},HMs9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),i=d(a),r=d(n("17x9")),l=n("Seim"),s=d(n("tvXG")),u=d(n("PTkm")),c=d(n("uUxy"));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,h=0,g=0,b=0,y="data-lazyload-listened",w=[],_=[],E=!1;try{var P=Object.defineProperty({},"passive",{get:function(){E=!0}});window.addEventListener("test",null,P)}catch(z){}var N=!!E&&{capture:!1,passive:!0},O=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,a=void 0,i=void 0,r=void 0;try{var l=t.getBoundingClientRect();o=l.top,a=l.left,i=l.height,r=l.width}catch(z){o=v,a=h,i=b,r=g}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),d=Math.max(a,0),f=Math.min(s,o+i)-c,p=Math.min(u,a+r)-d,m=void 0,y=void 0,w=void 0,_=void 0;try{var E=n.getBoundingClientRect();m=E.top,y=E.left,w=E.height,_=E.width}catch(z){m=v,y=h,w=b,_=g}var P=m-c,N=y-d,O=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return P-O[0]<=f&&P+w+O[1]>=0&&N-O[0]<=p&&N+_+O[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var a=t.getBoundingClientRect();n=a.top,o=a.height}catch(z){n=v,o=b}var i=window.innerHeight||document.documentElement.clientHeight,r=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-r[0]<=i&&n+o+r[1]>=0}(e))?e.visible||(e.props.once&&_.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},x=function(){_.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),_=[]},M=function(){for(var e=0;e<w.length;++e){var t=w[e];O(t)}x()},T=void 0,j=null,C=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",j,N),(0,l.off)(window,"resize",j,N),j=null),j||(void 0!==this.props.debounce?(j=(0,u.default)(M,"number"===typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(j=(0,c.default)(M,"number"===typeof this.props.throttle?this.props.throttle:300),T="throttle"):j=M),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var a=+o.getAttribute(y)+1;1===a&&o.addEventListener("scroll",j,N),o.setAttribute(y,a)}}else if(0===w.length||n){var i=this.props,r=i.scroll,d=i.resize;r&&(0,l.on)(e,"scroll",j,N),d&&(0,l.on)(window,"resize",j,N)}w.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",j,N),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!==typeof window&&((0,l.off)(window,"resize",j,N),(0,l.off)(window,"scroll",j,N))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,a=e.classNamePrefix,r=e.style;return i.default.createElement("div",{className:a+"-wrapper",ref:this.setRef,style:r},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(a.Component);C.propTypes={classNamePrefix:r.default.string,once:r.default.bool,height:r.default.oneOfType([r.default.number,r.default.string]),offset:r.default.oneOfType([r.default.number,r.default.arrayOf(r.default.number)]),overflow:r.default.bool,resize:r.default.bool,scroll:r.default.bool,children:r.default.node,throttle:r.default.oneOfType([r.default.number,r.default.bool]),debounce:r.default.oneOfType([r.default.number,r.default.bool]),placeholder:r.default.node,scrollContainer:r.default.oneOfType([r.default.string,r.default.object]),unmountIfInvisible:r.default.bool,style:r.default.object},C.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var k=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){f(this,a);var e=p(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+k(t),e}return m(a,n),o(a,[{key:"render",value:function(){return i.default.createElement(C,e,i.default.createElement(t,this.props))}}]),a}(a.Component)}},t.default=C,t.forceCheck=M,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}x()}},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,a=void 0,i=void 0,r=void 0,l=void 0,s=function s(){var u=+new Date-r;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(l=e.apply(i,a),o||(i=null,a=null)))};return function(){i=this,a=arguments,r=+new Date;var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(l=e.apply(i,a),i=null,a=null),l}}},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(o),i=a.position,r=a.overflow,l=a["overflow-x"],s=a["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(r)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,a;return t||(t=250),function(){var i=n||this,r=+new Date,l=arguments;o&&r<o+t?(clearTimeout(a),a=setTimeout((function(){o=r,e.apply(i,l)}),t)):(o=r,e.apply(i,l))}}}},[["2Pxm",0,2,1,3,4,5]]]);