function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}var runtime=createCommonjsModule(function(t){!function(e){var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u=e.regeneratorRuntime;if(u)t.exports=u;else{(u=e.regeneratorRuntime=t.exports).wrap=w;var l="suspendedStart",h="suspendedYield",d="executing",f="completed",p={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(J([])));m&&m!==n&&o.call(m,a)&&(y=m);var v=x.prototype=E.prototype=Object.create(y);_.prototype=v.constructor=x,x.constructor=_,x[c]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},u.awrap=function(t){return{__await:t}},P(I.prototype),I.prototype[s]=function(){return this},u.AsyncIterator=I,u.async=function(t,e,r,n){var o=new I(w(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},P(v),v[c]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=J,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:J(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function w(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=b(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=L(t,e,r);if("normal"===c.type){if(n=r.done?f:h,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function L(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function E(){}function _(){}function x(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function I(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var s=L(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,b(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function J(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())});void 0===Node.prototype.replaceChildren&&(Node.prototype.replaceChildren=function(t){for(;this.lastChild;)this.removeChild(this.lastChild);void 0!==t&&this.append(t)});var VIDEO_HOST="https://kinescope.io/embed/",PLAYER_LATEST="https://player.kinescope.io/latest/iframe.player.js",NODE_JS_ID="__kinescope_player_vue_js",PLAYER_ID_PREFIX="__kinescope_player_",EVENTS_MAP=[["auto-quality-changed","autoqualitychanged"],["call-action","callaction"],["call-bookmark","callbookmark"],["destroy","destroy"],["duration-change","durationchange"],["ended","ended"],["error","error"],["fullscreen-change","fullscreenchange"],["pause","pause"],["play","play"],["playback-rate-change","ratechange"],["playing","playing"],["progress","progress"],["quality-changed","qualitychanged"],["ready","ready"],["seek-chapter","seekchapter"],["seeked","seeked"],["seeking","seeking"],["size-changed","sizechanged"],["time-update","timeupdate"],["volume-change","volumechange"],["waiting","waiting"]],Loader={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[],name:"Loader",created:function(){this.jsLoading()},methods:{loadJsNotLoad:function(){var t=document.getElementById(NODE_JS_ID);t&&t.addEventListener("load",this.loadJs)},loadJs:function(){var t=document.getElementById(NODE_JS_ID);t&&t.removeEventListener("load",this.loadJs),this.handleJsLoad()},jsLoading:function(){if(this.testLoadJs())window&&window.Kinescope&&window.Kinescope.IframePlayer?this.handleJsLoad():this.loadJsNotLoad();else{var t=document.createElement("script");t.id=NODE_JS_ID,t.async=!1,document.body.appendChild(t),t.onload=this.handleJsLoad,t.onerror=this.handleJsLoadError,t.src=PLAYER_LATEST}},testLoadJs:function(){return!!document.getElementById(NODE_JS_ID)},handleJsLoad:function(){this.$emit("js-load")},handleJsLoadError:function(t){this.$emit("js-load-error",t)}}},index=1,KinescopePlayer={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Loader",{on:{"js-load":this.handleJsLoad,"js-load-error":this.handleJsLoadError}},[e("div",{ref:"player"})])},staticRenderFns:[],props:{videoId:{type:[Number,String],required:!0},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},autoPlay:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},loop:{type:Boolean,default:!1}},components:{Loader:Loader},data:function(){return{playerLoad:!1,player:null}},mounted:function(){this.playerLoad&&this.create()},computed:{propsChanged:function(){return{videoId:this.videoId,width:this.width,height:this.height,autoPlay:this.autoPlay,muted:this.muted,loop:this.loop}}},watch:{propsChanged:async function(){await this.updatePlayer()}},methods:{getNextIndex:function(){return index++},getNextPlayerId:function(){return PLAYER_ID_PREFIX+this.getNextIndex()},create:async function(){var t=this;if(this.$refs.player){var e=this.getNextPlayerId(),r=document.createElement("div");r.setAttribute("id",e),this.$refs.player.replaceChildren(r),this.player=await this.createPlayer(e),EVENTS_MAP.forEach(function(e){var r=e[0],n=e[1];t.player&&t.player.on(n,function(e){t.$emit(r,e.data)})})}},destroy:async function(){this.player&&(await this.player.destroy(),this.player=null)},createPlayer:function(t){var e={url:this.getIFrameUrl(),size:{width:this.width,height:this.height},behaviour:{autoPlay:this.autoPlay,muted:this.muted,loop:this.loop}};return window.Kinescope.IframePlayer.create(t,e)},updatePlayer:async function(){await this.destroy(),await this.create()},getIFrameUrl:function(){return VIDEO_HOST+this.videoId},handleJsLoad:function(){this.playerLoad=!0,this.$emit("js-load"),this.create()},handleJsLoadError:function(t){this.$emit("js-load-error",t)}}};function plugin(t){t.component("kinescope-player",KinescopePlayer)}"undefined"!=typeof window&&window.Vue&&window.Vue.use(plugin);export default plugin;export{KinescopePlayer};
