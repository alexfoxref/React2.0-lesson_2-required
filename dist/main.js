!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=41)}([function(t,n,r){var e=r(16)("wks"),o=r(13),i=r(1).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(5),o=r(29),i=r(21),u=Object.defineProperty;n.f=r(3)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){t.exports=!r(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(2),o=r(12);t.exports=r(3)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(10);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(1),o=r(4),i=r(6),u=r(13)("src"),c=r(44),f=(""+c).split("toString");r(9).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(48),o=r(19);t.exports=function(t){return e(o(t))}},function(t,n){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports={}},function(t,n){t.exports=!1},function(t,n,r){var e=r(9),o=r(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(15)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(33),o=r(24);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(1),o=r(9),i=r(4),u=r(7),c=r(31),f=function(t,n,r){var a,s,l,p,y=t&f.F,v=t&f.G,h=t&f.S,g=t&f.P,d=t&f.B,b=v?e:h?e[n]||(e[n]={}):(e[n]||{}).prototype,m=v?o:o[n]||(o[n]={}),S=m.prototype||(m.prototype={});for(a in v&&(r=n),r)l=((s=!y&&b&&void 0!==b[a])?b:r)[a],p=d&&s?c(l,e):g&&"function"==typeof l?c(Function.call,l):l,b&&u(b,a,l,t&f.U),m[a]!=l&&i(m,a,p),g&&S[a]!=l&&(S[a]=l)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,r){var e=r(10);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(16)("keys"),o=r(13);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).f,o=r(6),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(19);t.exports=function(t){return Object(e(t))}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){"use strict";var e=r(15),o=r(20),i=r(7),u=r(4),c=r(14),f=r(46),a=r(25),s=r(52),l=r(0)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,n,r,v,h,g,d){f(r,n,v);var b,m,S,x=function(t){if(!p&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},O=n+" Iterator",w="values"==h,j=!1,_=t.prototype,P=_[l]||_["@@iterator"]||h&&_[h],A=P||x(h),E=h?w?x("entries"):A:void 0,T="Array"==n&&_.entries||P;if(T&&(S=s(T.call(new t)))!==Object.prototype&&S.next&&(a(S,O,!0),e||"function"==typeof S[l]||u(S,l,y)),w&&P&&"values"!==P.name&&(j=!0,A=function(){return P.call(this)}),e&&!d||!p&&!j&&_[l]||u(_,l,A),c[n]=A,c[O]=y,h)if(b={values:w?A:x("values"),keys:g?A:x("keys"),entries:E},d)for(m in b)m in _||i(_,m,b[m]);else o(o.P+o.F*(p||j),n,b);return b}},function(t,n,r){t.exports=!r(3)&&!r(11)(function(){return 7!=Object.defineProperty(r(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(10),o=r(1).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(45);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(5),o=r(47),i=r(24),u=r(23)("IE_PROTO"),c=function(){},f=function(){var t,n=r(30)("iframe"),e=i.length;for(n.style.display="none",r(51).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[i[e]];return f()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=f(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(6),o=r(8),i=r(49)(!1),u=r(23)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(18),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(22),o=r(0)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){"use strict";var e=r(5);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){var e=r(1),o=r(9),i=r(15),u=r(38),c=r(2).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){n.f=r(0)},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(33),o=r(24).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){"use strict";r(42),r(53),r(59),r(61),r(62),r(63),r(69);var e,o=(e=r(73))&&e.__esModule?e:{default:e},i=r(74);function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=[],e=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}new(function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.owner,e=n.director,o=void 0===e?"Viktor":e,i=n.cash,u=n.emp;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.owner=r,this.director=o,this.cash=i,this.emp=u}var n,r,e;return n=t,(r=[{key:"sumSponsors",value:function(){var t=i.sponsors.eu,n=i.sponsors.rus,r=[].concat(c(t),c(n),["unexpected sponsor"]);return r}},{key:"reportResults",value:function(){var t,n=u(i.sponsors.eu,1)[0];console.log("We have a business. Owner: ".concat(this.owner,", director: ").concat(this.director,". Our budget: ").concat(this.cash,". And our employers: ").concat(this.emp)),console.log("And we have a sponsors: "),(t=console).log.apply(t,c(this.sumSponsors())),console.log("Note. Be careful with ".concat(n,". It's a huge risk."))}}])&&f(n.prototype,r),e&&f(n,e),t}())({owner:"Sam",cash:i.money,emp:o.default}).reportResults()},function(t,n,r){"use strict";var e=r(43)(!0);r(28)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){var e=r(18),o=r(19);t.exports=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,n,r){t.exports=r(16)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){"use strict";var e=r(32),o=r(12),i=r(25),u={};r(4)(u,r(0)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n,r){var e=r(2),o=r(5),i=r(17);t.exports=r(3)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},function(t,n,r){var e=r(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(8),o=r(34),i=r(50);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(18),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){var e=r(1).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(6),o=r(26),i=r(23)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){"use strict";var e=r(31),o=r(20),i=r(26),u=r(54),c=r(55),f=r(34),a=r(56),s=r(57);o(o.S+o.F*!r(58)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,l,p=i(t),y="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,d=0,b=s(p);if(g&&(h=e(h,v>2?arguments[2]:void 0,2)),null==b||y==Array&&c(b))for(r=new y(n=f(p.length));n>d;d++)a(r,d,g?h(p[d],d):p[d]);else for(l=b.call(p),r=new y;!(o=l.next()).done;d++)a(r,d,g?u(l,h,[o.value,d],!0):o.value);return r.length=d,r}})},function(t,n,r){var e=r(5);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(14),o=r(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){"use strict";var e=r(2),o=r(12);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},function(t,n,r){var e=r(35),o=r(0)("iterator"),i=r(14);t.exports=r(9).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],u=i[e]();u.next=function(){return{done:r=!0}},i[e]=function(){return u},t(i)}catch(t){}return r}},function(t,n,r){"use strict";r(60);var e=r(5),o=r(36),i=r(3),u=/./.toString,c=function(t){r(7)(RegExp.prototype,"toString",t,!0)};r(11)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},function(t,n,r){r(3)&&"g"!=/./g.flags&&r(2).f(RegExp.prototype,"flags",{configurable:!0,get:r(36)})},function(t,n,r){"use strict";var e=r(35),o={};o[r(0)("toStringTag")]="z",o+""!="[object z]"&&r(7)(Object.prototype,"toString",function(){return"[object "+e(this)+"]"},!0)},function(t,n,r){r(37)("asyncIterator")},function(t,n,r){"use strict";var e=r(1),o=r(6),i=r(3),u=r(20),c=r(7),f=r(64).KEY,a=r(11),s=r(16),l=r(25),p=r(13),y=r(0),v=r(38),h=r(37),g=r(65),d=r(66),b=r(5),m=r(10),S=r(26),x=r(8),O=r(21),w=r(12),j=r(32),_=r(67),P=r(68),A=r(39),E=r(2),T=r(17),L=P.f,M=E.f,k=_.f,F=e.Symbol,N=e.JSON,I=N&&N.stringify,C=y("_hidden"),R=y("toPrimitive"),D={}.propertyIsEnumerable,G=s("symbol-registry"),V=s("symbols"),W=s("op-symbols"),z=Object.prototype,B="function"==typeof F&&!!A.f,J=e.QObject,H=!J||!J.prototype||!J.prototype.findChild,K=i&&a(function(){return 7!=j(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=L(z,n);e&&delete z[n],M(t,n,r),e&&t!==z&&M(z,n,e)}:M,U=function(t){var n=V[t]=j(F.prototype);return n._k=t,n},Y=B&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},q=function(t,n,r){return t===z&&q(W,n,r),b(t),n=O(n,!0),b(r),o(V,n)?(r.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),r=j(r,{enumerable:w(0,!1)})):(o(t,C)||M(t,C,w(1,{})),t[C][n]=!0),K(t,n,r)):M(t,n,r)},Q=function(t,n){b(t);for(var r,e=g(n=x(n)),o=0,i=e.length;i>o;)q(t,r=e[o++],n[r]);return t},X=function(t){var n=D.call(this,t=O(t,!0));return!(this===z&&o(V,t)&&!o(W,t))&&(!(n||!o(this,t)||!o(V,t)||o(this,C)&&this[C][t])||n)},Z=function(t,n){if(t=x(t),n=O(n,!0),t!==z||!o(V,n)||o(W,n)){var r=L(t,n);return!r||!o(V,n)||o(t,C)&&t[C][n]||(r.enumerable=!0),r}},$=function(t){for(var n,r=k(x(t)),e=[],i=0;r.length>i;)o(V,n=r[i++])||n==C||n==f||e.push(n);return e},tt=function(t){for(var n,r=t===z,e=k(r?W:x(t)),i=[],u=0;e.length>u;)!o(V,n=e[u++])||r&&!o(z,n)||i.push(V[n]);return i};B||(c((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(r){this===z&&n.call(W,r),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),K(this,t,w(1,r))};return i&&H&&K(z,t,{configurable:!0,set:n}),U(t)}).prototype,"toString",function(){return this._k}),P.f=Z,E.f=q,r(40).f=_.f=$,r(27).f=X,A.f=tt,i&&!r(15)&&c(z,"propertyIsEnumerable",X,!0),v.f=function(t){return U(y(t))}),u(u.G+u.W+u.F*!B,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)y(nt[rt++]);for(var et=T(y.store),ot=0;et.length>ot;)h(et[ot++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=F(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var n in G)if(G[n]===t)return n},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!B,"Object",{create:function(t,n){return void 0===n?j(t):Q(j(t),n)},defineProperty:q,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=a(function(){A.f(1)});u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return A.f(S(t))}}),N&&u(u.S+u.F*(!B||a(function(){var t=F();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],o=1;arguments.length>o;)e.push(arguments[o++]);if(r=n=e[1],(m(n)||void 0!==t)&&!Y(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!Y(n))return n}),e[1]=n,I.apply(N,e)}}),F.prototype[R]||r(4)(F.prototype,R,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){var e=r(13)("meta"),o=r(10),i=r(6),u=r(2).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(11)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,e)&&s(t),t}}},function(t,n,r){var e=r(17),o=r(39),i=r(27);t.exports=function(t){var n=e(t),r=o.f;if(r)for(var u,c=r(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,r){var e=r(22);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(8),o=r(40).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(27),o=r(12),i=r(8),u=r(21),c=r(6),f=r(29),a=Object.getOwnPropertyDescriptor;n.f=r(3)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!e.f.call(t,n),t[n])}},function(t,n,r){for(var e=r(70),o=r(17),i=r(7),u=r(1),c=r(4),f=r(14),a=r(0),s=a("iterator"),l=a("toStringTag"),p=f.Array,y={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(y),h=0;h<v.length;h++){var g,d=v[h],b=y[d],m=u[d],S=m&&m.prototype;if(S&&(S[s]||c(S,s,p),S[l]||c(S,l,d),f[d]=p,b))for(g in e)S[g]||i(S,g,e[g],!0)}},function(t,n,r){"use strict";var e=r(71),o=r(72),i=r(14),u=r(8);t.exports=r(28)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e=r(0)("unscopables"),o=Array.prototype;null==o[e]&&r(4)(o,e,{}),t.exports=function(t){o[e][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=["Alex","","ludmila","Viktor","","oleg","iNna","Ivan","Alex","Olga"," Ann"].filter(function(t){return t.length>0}).map(function(t){return t.toLowerCase().trim()});n.default=e},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.money=n.sponsors=void 0;var e={cash:[4e4,5e3,30400,12e3],eu:["SRL","PLO","J&K"],rus:["RusAuto","SBO"]};n.sponsors=e;var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.cash,r=void 0===n?[]:n,e=(t.eu,t.rus,0);return r.map(function(t){e+=t}),e}(e);n.money=o}]);