!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hertzy=t():e.Hertzy=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports={WARNING:!1}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";const r=n(0),o=n(3),i=n(6);r.VERSION=i.version;const s=new Map;r.tune=(e=>{if(!e)throw new Error("Hertzy: frequency needs to be a valid string");return s.has(e)?s.get(e):s.set(e,function(e){return new(o(e,s))}(e)).get(e)}),e.exports=r},function(e,t,n){"use strict";const r=n(0),o=n(4),{EventEmitter:i}=n(5),s=i.defaultMaxListeners,u=new Map;function f(e){const t=e.eventNames(),n={};for(const r of t)n[r]=e.listenerCount(r);return n}function a(e){const t=o(e);return t.length>0?Math.max(...t):0}function c(e){u.get(e).setMaxListeners(s)}function l(e){for(const t of e.keys())c(t)}function p(e){const t=a(f(e));t>s&&t>e.getMaxListeners()&&e.setMaxListeners(t)}function v(e,t){for(const n of t.keys()){const t=u.get(n);t!==e&&p(t)}}e.exports=function(e,t){const n=new i,o=function(e,t){return(n,o)=>{if(r.WARNING)l(t);else{const r=e.listenerCount(n)+1,o=a(f(e));r>s&&r>e.getMaxListeners()&&r>o&&e.setMaxListeners(r),v(e,t)}e.on(n,o)}}(n,t),c=function(e,t){return(n,o)=>{if(r.WARNING)l(t);else{const r=e.listenerCount(n)-1,o=f(e);o[n]=r;const i=a(o);r>s&&r>i&&e.setMaxListeners(r),v(e,t)}e.removeListener(n,o)}}(n,t);return u.set(e,n),class{fq(){return e}on(e,t){if(!e)throw new Error("Hertzy: evt needs to be a valid string");if("function"!=typeof t)throw new Error("Hertzy: fn needs to be a valid function");o(e,t)}off(e,t){if(!e)throw new Error("Hertzy: evt needs to be a valid string");if("function"!=typeof t)throw new Error("Hertzy: fn needs to be a valid function");c(e,t)}emit(e,...t){if(!e)throw new Error("Hertzy: evt needs to be a valid string");n.emit(e,...t)}}}},function(e,t,n){"use strict";let r=e=>{const t=[];for(const n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t};"function"==typeof Object.values&&(r=Object.values),e.exports=r},function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function u(){u.init.call(this)}e.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var f=10;function a(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){var o,i,s,u;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=a(e))>0&&s.length>o&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=s.length,u=f,console&&console.warn&&console.warn(u)}return e}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,e))}.bind(r);return o.listener=n,r.wrapFn=o,o}function p(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):h(o,o.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");f=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return a(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var f=o[e];if(void 0===f)return!1;if("function"==typeof f)i(f,this,t);else{var a=f.length,c=h(f,a);for(n=0;n<a;++n)i(c[n],this,t)}return!0},u.prototype.addListener=function(e,t){return c(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return c(this,e,t,!0)},u.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,l(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,l(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,o,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return p(this,e,!0)},u.prototype.rawListeners=function(e){return p(this,e,!1)},u.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},u.prototype.listenerCount=v,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e){e.exports={name:"hertzy",version:"0.1.0",description:"Event bus channel",main:"index.js",keywords:["events","mediator","eventbus","decoupling"],scripts:{test:"npm run lint && node ./node_modules/jasmine/bin/jasmine.js JASMINE_CONFIG_PATH=__test__/jasmine.json","test-travis":"npm run lint && node node_modules/jasmine/bin/jasmine.js JASMINE_CONFIG_PATH=__test__/jasmine.json","test-appveyor":"npm run lint && node ./node_modules/jasmine/bin/jasmine.js JASMINE_CONFIG_PATH=__test__/jasmine.json",lint:"./node_modules/.bin/eslint index.js ./lib"},engines:{node:">= 6.0.0"},repository:{type:"git",url:"git+https://github.com/NickNaso/hertzy.git"},author:"Nicola Del Gobbo <nicoladelgobbo@gmail.com>",contributors:[{name:"Nicola Del Gobbo",email:"nicoladelgobbo@gmail.com"},{name:"Mauro Doganieri",email:"mauro.doganieri@gmail.com"},{name:"Pierluigi Iannarelli",email:"pierluigi.iannarelli@gmail.com"}],license:"Apache-2.0",bugs:{url:"https://github.com/NickNaso/hertzy/issues"},homepage:"https://github.com/NickNaso/hertzy#readme",devDependencies:{eslint:"^4.19.1","eslint-config-airbnb-base":"^12.1.0","eslint-plugin-import":"^2.12.0",jasmine:"^2.8.0",webpack:"^4.29.5","webpack-cli":"^3.2.3"}}}])});
//# sourceMappingURL=hertzy.map