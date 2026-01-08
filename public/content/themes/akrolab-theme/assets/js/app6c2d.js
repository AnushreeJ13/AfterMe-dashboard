
;var Config = {
	debug_mode : true
}
;var Debug = {
	init:function(){
		if(Config.debug_mode){
			$(window).keypress(function (ev) {
				/*Debug.log("KEY : " + ev.keyCode);*/
				if(ev.keyCode == 33){
					$(".susy-debug").toggleClass("visible");
				}
				if(ev.keyCode == 42){
					$(".dump").toggleClass("visible");
				}
				if(ev.keyCode == 58){
					$(".screen-size").toggleClass("visible");
				}
			});
			
			$(window).resize(function(){
				Debug.resize();
			});
			Debug.resize();
			
			$(window).scroll(function(){
				Debug.scroll();
			});
			Debug.scroll();
		}
	},
	scroll:function(){
		$(".screen-size .scroll").html("scrollTop : " + $(window).scrollTop());
	},
	resize:function(){
		$(".screen-size .res").html(window.outerWidth +" x "+ window.outerHeight);
	},
	log:function(pValue){
		if(Config.debug_mode){
			console.log(pValue);
		}
	}
}

;var $ = jQuery.noConflict()

$(document).ready(function() {
	Debug.log("_______________ GLOBAL.JS INITIALISATION _______________");

	Reveals.init();
	Menu.init();	
	FullHeight.init();

	if(Config.debug_mode == true){
		Debug.init();	
	}

	var template = $('#content').attr('data-template');
	//Debug.log("TEMPLATE : " + template);
	switch(template){
		case "homepage":

			break;
		default:

			break;
								 }


});

(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";function _(){}_.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var P="data-scrollmagic-pin-spacer";_.Controller=function(e){function t(){var e,t,n;v&&u&&(e=R.type.Array(u)?u:f.slice(0),u=!1,t=d,0!=(n=(d=l.scrollPos())-t)&&(h=0<n?"FORWARD":i),h===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)}))}function r(){n=R.rAF(t)}var n,o,i="REVERSE",s="PAUSED",a=z.defaults,l=this,c=R.extend({},a,e),f=[],u=!1,d=0,h=s,p=!0,g=0,v=!0,m=function(){0<c.refreshInterval&&(o=window.setTimeout(E,c.refreshInterval))},w=function(){return c.vertical?R.get.scrollTop(c.container):R.get.scrollLeft(c.container)},y=function(){return c.vertical?R.get.height(c.container):R.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(R.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,R.get.scrollTop()):c.container.scrollLeft=e},b=function(e){"resize"==e.type&&(g=y(),h=s),!0!==u&&(u=!0,r())},E=function(){if(!p&&g!=y()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(t)}f.forEach(function(e,t){e.refresh()}),m()};this._options=c;function x(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t}return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){l.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==l)e.addTo(l);else if(!~f.indexOf(e))for(var t in f.push(e),f=x(f),e.on("shift.controller_sort",function(){f=x(f)}),c.globalSceneOptions)e[t]&&e[t].call(e,c.globalSceneOptions[t]);return l},this.removeScene=function(e){var t;return R.type.Array(e)?e.forEach(function(e,t){l.removeScene(e)}):-1<(t=f.indexOf(e))&&(e.off("shift.controller_sort"),f.splice(t,1),e.remove()),l},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){l.updateScene(e,n)}):n?e.update(!0):!0!==u&&e instanceof _.Scene&&(~(u=u||[]).indexOf(e)||u.push(e),u=x(u),r()),l},this.update=function(e){return b({type:"resize"}),e&&t(),l},this.scrollTo=function(e,t){if(R.type.Number(e))S.call(c.container,e,t);else if(e instanceof _.Scene)e.controller()===l&&l.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))S=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=c.vertical?"top":"left",o=R.get.offset(c.container),i=R.get.offset(n);p||(o[r]-=l.scrollPos()),l.scrollTo(i[r]-o[r],t)}}return l},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(w=e),l):w.call(l)},this.info=function(e){var t={size:g,vertical:c.vertical,scrollPos:d,scrollDirection:h,container:c.container,isDocument:p};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return l},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,l.updateScene(f,!0)),l):v},this.destroy=function(e){window.clearTimeout(o);for(var t=f.length;t--;)f[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in c)a.hasOwnProperty(e)||delete c[e];if(c.container=R.get.elements(c.container)[0],!c.container)throw"ScrollMagic.Controller init failed.";(p=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),g=y(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b);var t=parseInt(c.refreshInterval,10);c.refreshInterval=R.type.Number(t)?t:a.refreshInterval,m()}(),l};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,o=!0,s={};this.on=function(e,o){return R.type.Function(o)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:o}))}),d},this.off=function(e,i){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],o=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||o!==r.namespace&&"*"!==o||i&&i!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){var t,r,o,i;return e&&(t=e.trim().split("."),r=t[0],o=t[1],(i=s[r])&&i.forEach(function(e,t){o&&o!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})),d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),i(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(o!=e&&(o=!!e,d.update(!0)),d):o},this.remove=function(){var e;return l&&(l.info("container").removeEventListener("resize",S),e=l,l=void 0,e.removeScene(d),d.trigger("remove")),d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){var t,n;return l&&(e?l.enabled()&&o?(t=l.info("scrollPos"),n=0<h.duration?(t-a.start)/(a.end-a.start):t>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:t}),d.progress(n)):m&&p===f&&T(!0):l.updateScene(d,!1)),d},this.refresh=function(){return i(),y(),d},this.progress=function(e){if(arguments.length){var t,n,r,o=!1,i=p,s=l?l.info("scrollDirection"):"PAUSED",a=h.reverse||g<=e;return 0===h.duration?(o=g!=e,p=0===(g=e<1&&a?0:1)?c:f):e<0&&p!==c&&a?(p=c,o=!(g=0)):0<=e&&e<1&&a?(g=e,p=f,o=!0):1<=e&&p!==u?(g=1,p=u,o=!0):p!==f||a||T(),o&&(t={progress:g,state:p,scrollDirection:s},r=function(e){d.trigger(e,t)},(n=p!=i)&&i!==f&&(r("enter"),r(i===c?"start":"end")),r("progress"),n&&p!==f&&(r(p===c?"start":"end"),r("leave"))),d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},i=function(e){var t;!n||x(t="duration",n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),o=R.get.offset(r.container),i=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(o[i]-=l.scrollPos()),t=s[i]-o[i]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){var e;if(R.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)&&(e=parseFloat(t)/100,t=function(){return l?l.info("size")*e:0}),R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n=n&&void 0,0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),~D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&T(),t&&A()}).on("progress.internal",function(e){T()}).on("add.internal",function(e){A()}).on("destroy.internal",function(e){d.removePin(e.reset)});function C(){l&&m&&p===f&&!l.info("isDocument")&&T()}function F(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&A()}function L(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))}var T=function(e){var t,n,r,o,i,s;m&&l&&(t=l.info(),n=w.spacer.firstChild,e||p!==f?(r={position:w.inFlow?"relative":"absolute",top:0,left:0},o=R.css(n,"position")!=r.position,w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))||p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom")))&&(o=!0):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),o&&A()):("fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),A()),i=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10,i[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:i.top,left:i.left})))},A=function(){var e,t,n,r,o;m&&l&&w.inFlow&&(e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),o={},w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(o["min-width"]=R.get.width(t?m:n,!0,!0),o.width=e?o["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(o["min-height"]=R.get.height(t?n:m,!0,!r),o.height=e?o["min-height"]:"auto"),w.pushFollowers&&(o["padding"+(t?"Top":"Left")]=h.duration*g,o["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,o))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var o="absolute"!=R.css(m,"position"),i=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!o&&t.pushFollowers&&(t.pushFollowers=!1);var a,l=m.parentNode.insertBefore(document.createElement("div"),m),c=R.extend(i,{position:o?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});return o||R.extend(c,R.css(m,["width","height"])),R.css(l,c),l.setAttribute(P,""),R.addClass(l,t.spacerClass),w={spacer:l,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&o&&R.isMarginCollapseType(i.display)},pushFollowers:t.pushFollowers,inFlow:o},m.___origStyle||(m.___origStyle={},a=m.style,r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=a[e]||""})),w.relSize.width&&R.css(l,{width:s.width}),w.relSize.height&&R.css(l,{height:s.height}),l.appendChild(m),R.css(m,{position:o?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",C),window.addEventListener("resize",C),window.addEventListener("resize",F),m.addEventListener("mousewheel",L),m.addEventListener("DOMMouseScroll",L),T(),d},this.removePin=function(e){var t,n,r;return m&&(p===f&&T(!0),!e&&l||((t=w.spacer.firstChild).hasAttribute(P)&&(n=w.spacer.style,r={},["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)),w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)),window.removeEventListener("scroll",C),window.removeEventListener("resize",C),window.removeEventListener("resize",F),m.removeEventListener("mousewheel",L),m.removeEventListener("DOMMouseScroll",L),m=void 0),d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){function a(e){return parseFloat(e)||0}function l(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)}function r(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e[0].toUpperCase()+e.substr(1).toLowerCase();var o,i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;return n&&r&&(o=l(t),i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)),i}function c(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}var e={};e.extend=function(e){for(e=e||{},f=1;f<arguments.length;f++)if(arguments[f])for(var t in arguments[f])arguments[f].hasOwnProperty(t)&&(e[t]=arguments[f][t]);return e},e.isMarginCollapseType=function(e){return!!~["block","flex","list-item","table","-webkit-box"].indexOf(e)};for(var o=0,t=["ms","moz","webkit","o"],n=s.requestAnimationFrame,i=s.cancelAnimationFrame,f=0;!n&&f<4;++f)n=s[t[f]+"RequestAnimationFrame"],i=s[t[f]+"CancelAnimationFrame"]||s[t[f]+"CancelRequestAnimationFrame"];n=n||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-o)),r=s.setTimeout(function(){e(t+n)},n);return o=t+n,r},i=i||function(e){s.clearTimeout(e)},e.rAF=n.bind(s),e.cAF=i.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var o=e[n];t[n]=u.DomElement(o)?o:d.elements(o)}else!u.DomElement(e)&&e!==document&&e!==s||(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n,r={top:0,left:0};return e&&e.getBoundingClientRect&&(n=e.getBoundingClientRect(),r.top=n.top,r.left=n.left,t||(r.top+=d.scrollTop(),r.left+=d.scrollLeft())),r},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var o in t){var i=t[o];i==parseFloat(i)&&(i+="px"),e.style[c(o)]=i}},e}(window||{});return _});
/*!
 * ScrollToPlugin 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function k(){return"undefined"!=typeof window}function l(){return i||k()&&(i=window.gsap)&&i.registerPlugin&&i}function m(t){return"string"==typeof t}function n(t){return"function"==typeof t}function o(t,e){var o="x"===e?"Width":"Height",n="scroll"+o,r="client"+o;return t===x||t===u||t===c?Math.max(u[n],c[n])-(x["inner"+o]||u[r]||c[r]):t[n]-t["offset"+o]}function p(t,e){var o="scroll"+("x"===e?"Left":"Top");return t===x&&(null!=t.pageXOffset?o="page"+e.toUpperCase()+"Offset":t=null!=u[o]?u:c),function(){return t[o]}}function r(t,e){if(!(t=a(t)[0])||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=t.getBoundingClientRect(),n=!e||e===x||e===c,r=n?{top:u.clientTop-(x.pageYOffset||u.scrollTop||c.scrollTop||0),left:u.clientLeft-(x.pageXOffset||u.scrollLeft||c.scrollLeft||0)}:e.getBoundingClientRect(),i={x:o.left-r.left,y:o.top-r.top};return!n&&e&&(i.x+=p(e,"x")(),i.y+=p(e,"y")()),i}function s(t,e,n,i,l){return isNaN(t)||"object"==typeof t?m(t)&&"="===t.charAt(1)?parseFloat(t.substr(2))*("-"===t.charAt(0)?-1:1)+i-l:"max"===t?o(e,n)-l:Math.min(o(e,n),r(t,e)[n]-l):parseFloat(t)-l}function t(){i=l(),k()&&i&&document.body&&(x=window,c=document.body,u=document.documentElement,a=i.utils.toArray,i.config({autoKillThreshold:7}),g=i.config(),f=1)}var i,f,x,u,c,a,g,d={version:"3.6.0",name:"scrollTo",rawVars:1,register:function register(e){i=e,t()},init:function init(e,o,r,i,l){f||t();var u=this;u.isWin=e===x,u.target=e,u.tween=r,o=function _clean(t,e,o,r){if(n(t)&&(t=t(e,o,r)),"object"!=typeof t)return m(t)&&"max"!==t&&"="!==t.charAt(1)?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var i,l={};for(i in t)"onAutoKill"!==i&&(l[i]=n(t[i])?t[i](e,o,r):t[i]);return l}(o,i,e,l),u.vars=o,u.autoKill=!!o.autoKill,u.getX=p(e,"x"),u.getY=p(e,"y"),u.x=u.xPrev=u.getX(),u.y=u.yPrev=u.getY(),null!=o.x?(u.add(u,"x",u.x,s(o.x,e,"x",u.x,o.offsetX||0),i,l,Math.round),u._props.push("scrollTo_x")):u.skipX=1,null!=o.y?(u.add(u,"y",u.y,s(o.y,e,"y",u.y,o.offsetY||0),i,l,Math.round),u._props.push("scrollTo_y")):u.skipY=1},render:function render(t,e){for(var n,r,i,l,s,u=e._pt,f=e.target,p=e.tween,c=e.autoKill,a=e.xPrev,d=e.yPrev,y=e.isWin;u;)u.r(t,u.d),u=u._next;n=y||!e.skipX?e.getX():a,i=(r=y||!e.skipY?e.getY():d)-d,l=n-a,s=g.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),c&&(!e.skipX&&(s<l||l<-s)&&n<o(f,"x")&&(e.skipX=1),!e.skipY&&(s<i||i<-s)&&r<o(f,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(p.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(p,e.vars.onAutoKillParams||[]))),y?x.scrollTo(e.skipX?n:e.x,e.skipY?r:e.y):(e.skipY||(f.scrollTop=e.y),e.skipX||(f.scrollLeft=e.x)),e.xPrev=e.x,e.yPrev=e.y},kill:function kill(t){var e="scrollTo"===t;!e&&"scrollTo_x"!==t||(this.skipX=1),!e&&"scrollTo_y"!==t||(this.skipY=1)}};d.max=o,d.getOffset=r,d.buildGetter=p,l()&&i.registerPlugin(d),e.ScrollToPlugin=d,e.default=d;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * ScrollTrigger 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function J(e){return e}function K(){return"undefined"!=typeof window}function L(){return Ce||K()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce}function M(e){return!!~o.indexOf(e)}function N(e,t){return~Ve.indexOf(e)&&Ve[Ve.indexOf(e)+1][t]}function O(t,e){var r=e.s,n=e.sc,o=g.indexOf(t),i=n===nt.sc?1:2;return~o||(o=g.push(t)-1),g[o+i]||(g[o+i]=N(t,r)||(M(t)?n:function(e){return arguments.length?t[r]=e:t[r]}))}function P(e){return N(e,"getBoundingClientRect")||(M(e)?function(){return ft.width=Oe.innerWidth,ft.height=Oe.innerHeight,ft}:function(){return ot(e)})}function S(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=N(e,r))?i()-P(e)()[o]:M(e)?Math.max(_e[r],Pe[r])-(Oe["inner"+n]||_e["client"+n]||Pe["client"+n]):e[r]-e["offset"+n]}function T(e,t){for(var r=0;r<d.length;r+=3)t&&!~t.indexOf(d[r+1])||e(d[r],d[r+1],d[r+2])}function U(e){return"string"==typeof e}function V(e){return"function"==typeof e}function W(e){return"number"==typeof e}function X(e){return"object"==typeof e}function Y(e){return V(e)&&e()}function Z(r,n){return function(){var e=Y(r),t=Y(n);return function(){Y(e),Y(t)}}}function sa(e){return Oe.getComputedStyle(e)}function ua(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function wa(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function xa(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function Aa(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function Ba(e,t,r){return e.addEventListener(t,r,{passive:!0})}function Ca(e,t,r){return e.removeEventListener(t,r)}function Ga(e,t){if(U(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in w?w[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Ha(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,u=o.indent,f=o.fontWeight,p=ke.createElement("div"),d=M(r)||"fixed"===N(r,"pinType"),h=-1!==e.indexOf("scroller"),g=d?Pe:r,v=-1!==e.indexOf("start"),m=v?s:l,b="border-color:"+m+";font-size:"+c+";color:"+m+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+(h&&d?"fixed;":"absolute;"),!h&&d||(b+=(n===nt?x:y)+":"+(i+parseFloat(u))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e),p.style.cssText=b,p.innerText=t||0===t?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],C(p,0,n,v),p}function La(){return l=l||s(H)}function Ma(){l||(l=s(H),Ye||E("scrollStart"),Ye=He())}function Na(){return!Le&&!r&&!ke.fullscreenElement&&a.restart(!0)}function Ta(e){var t,r=Ce.ticker.frame,n=[],o=0;if(h!==r||We){for(R();o<B.length;o+=4)(t=Oe.matchMedia(B[o]).matches)!==B[o+3]&&((B[o+3]=t)?n.push(o):R(1,B[o])||V(B[o+2])&&B[o+2]());for(z(),o=0;o<n.length;o++)t=n[o],Ie=B[t],B[t+2]=B[t+1](e);Ie=0,i&&F(0,1),h=r,E("matchMedia")}}function Ua(){return Ca($,"scrollEnd",Ua)||F(!0)}function eb(e,t,r,n){if(e.parentNode!==t){for(var o,i=D.length,a=t.style,s=e.style;i--;)a[o=D[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[y]=s[x]="auto",a.overflow="visible",a.boxSizing="border-box",a[Ge]=wa(e,rt)+tt,a[Je]=wa(e,nt)+tt,a[$e]=s[Qe]=s.top=s[m]="0",ut(n),s[Ge]=s.maxWidth=r[Ge],s[Je]=s.maxHeight=r[Je],s[$e]=r[$e],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function hb(e){for(var t=G.length,r=e.style,n=[],o=0;o<t;o++)n.push(G[o],r[G[o]]);return n.t=e,n}function kb(e,t,r,n,o,i,a,s,l,c,u,f){if(V(e)&&(e=e(s)),U(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Ga("0"+e.substr(3),r):0)),W(e))a&&C(a,r,n,!0);else{V(t)&&(t=t(s));var p,d,h,g=Be(t)[0]||Pe,v=ot(g)||{},m=e.split(" ");v&&(v.left||v.top)||"none"!==sa(g).display||(h=g.style.display,g.style.display="block",v=ot(g),h?g.style.display=h:g.style.removeProperty("display")),p=Ga(m[0],v[n.d]),d=Ga(m[1]||"0",r),e=v[n.p]-l[n.p]-c+p+o-d,a&&C(a,d,n,r-d<20||a._isStart&&20<d),r-=r-d}if(i){var b=e+r,x=i._isStart;f="scroll"+n.d2,C(i,b,n,x&&20<b||!x&&(u?Math.max(Pe[f],_e[f]):i.parentNode[f])<=b+1),u&&(l=ot(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+tt))}return Math.round(e)}function mb(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===Pe){for(o in e._stOrig=a.cssText,i=sa(e))+o||j.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}}function nb(l,e){function Se(e,t,r,n,o){var i=Se.tween,a=t.onComplete,s={};return i&&i.kill(),c=Math.round(r),t[p]=e,(t.modifiers=s)[p]=function(e){return(e=Math.round(f()))!==c&&e!==u&&2<Math.abs(e-c)?(i.kill(),Se.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=Math.round(e)},t.onComplete=function(){Se.tween=0,a&&a.call(i)},i=Se.tween=Ce.to(l,t)}var c,u,f=O(l,e),p="_scroll"+e.p2;return l[p]=f,l.addEventListener("mousewheel",function(){return Se.tween&&Se.tween.kill()&&(Se.tween=0)}),Se}var Ce,i,Oe,ke,_e,Pe,o,a,s,l,Be,Ee,Ne,c,Le,Ae,u,ze,f,p,d,Re,Ue,r,Fe,Ie,h,We=1,Ve=[],g=[],He=Date.now,v=He(),Ye=0,De=1,Xe=Math.abs,t="scrollLeft",n="scrollTop",m="left",x="right",y="bottom",Ge="width",Je="height",qe="Right",Ze="Left",je="Top",Ke="Bottom",$e="padding",Qe="margin",et="Width",b="Height",tt="px",rt={s:t,p:m,p2:Ze,os:x,os2:qe,d:Ge,d2:et,a:"x",sc:function sc(e){return arguments.length?Oe.scrollTo(e,nt.sc()):Oe.pageXOffset||ke[t]||_e[t]||Pe[t]||0}},nt={s:n,p:"top",p2:je,os:y,os2:Ke,d:Je,d2:b,a:"y",op:rt,sc:function sc(e){return arguments.length?Oe.scrollTo(rt.sc(),e):Oe.pageYOffset||ke[n]||_e[n]||Pe[n]||0}},ot=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==sa(e)[u]&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},it={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},at={toggleActions:"play",anticipatePin:0},w={top:0,left:0,center:.5,bottom:1,right:1},C=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+et]=1,o["border"+a+et]=0,o[r.p]=t+"px",Ce.set(e,o)},st=[],lt={},k={},_=[],B=[],E=function _dispatch(e){return k[e]&&k[e].map(function(e){return e()})||_},A=[],z=function _revertRecorded(e){for(var t=0;t<A.length;t+=4)e&&A[t+3]!==e||(A[t].style.cssText=A[t+1],A[t+2].uncache=1)},R=function _revertAll(e,t){var r;for(ze=0;ze<st.length;ze++)r=st[ze],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));z(t),t||E("revert")},F=function _refreshAll(e,t){if(!Ye||e){var r=E("refreshInit");for(Re&&$.sort(),t||R(),ze=0;ze<st.length;ze++)st[ze].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),ze=st.length;ze--;)st[ze].scroll.rec=0;a.pause(),E("refresh")}else Ba($,"scrollEnd",Ua)},I=0,ct=1,H=function _updateAll(){var e=st.length,t=He(),r=50<=t-v,n=e&&st[0].scroll();if(ct=n<I?-1:1,I=n,r&&(Ye&&!Ae&&200<t-Ye&&(Ye=0,E("scrollEnd")),Ne=v,v=t),ct<0){for(ze=e;ze--;)st[ze]&&st[ze].update(0,r);ct=1}else for(ze=0;ze<e;ze++)st[ze]&&st[ze].update(0,r);l=0},D=[m,"top",y,x,Qe+Ke,Qe+qe,Qe+je,Qe+Ze,"display","flexShrink","float","zIndex"],G=D.concat([Ge,Je,"boxSizing","max"+et,"max"+b,"position",Qe,$e,$e+je,$e+qe,$e+Ke,$e+Ze]),q=/([A-Z])/g,ut=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(q,"-$1").toLowerCase())}},ft={left:0,top:0},j=/(?:webkit|moz|length|cssText|inset)/i;rt.op=nt;var $=(ScrollTrigger.prototype.init=function init(y,w){if(this.progress=this.start=0,this.vars&&this.kill(1),De){var d,n,l,T,C,k,_,B,E,L,A,z,e,R,F,I,H,Y,t,D,h,G,q,g,Z,v,m,r,b,x,j,o,c,K,$,Q,ee,te=(y=ua(U(y)||W(y)||y.nodeType?{trigger:y}:y,at)).horizontal?rt:nt,re=y.onUpdate,ne=y.toggleClass,i=y.id,oe=y.onToggle,ie=y.onRefresh,a=y.scrub,ae=y.trigger,se=y.pin,le=y.pinSpacing,ce=y.invalidateOnRefresh,ue=y.anticipatePin,s=y.onScrubComplete,u=y.onSnapComplete,fe=y.once,pe=y.snap,de=y.pinReparent,he=!a&&0!==a,ge=Be(y.scroller||Oe)[0],f=Ce.core.getCache(ge),ve=M(ge),me="pinType"in y?"fixed"===y.pinType:ve||"fixed"===N(ge,"pinType"),be=[y.onEnter,y.onLeave,y.onEnterBack,y.onLeaveBack],xe=he&&y.toggleActions.split(" "),p="markers"in y?y.markers:at.markers,ye=ve?0:parseFloat(sa(ge)["border"+te.p2+et])||0,Se=this,we=y.onRefreshInit&&function(){return y.onRefreshInit(Se)},Te=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=N(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Oe["inner"+o]:e["client"+o])||0}}(ge,ve,te),Me=function _getOffsetsFunc(e,t){return!t||~Ve.indexOf(e)?P(e):function(){return ft}}(ge,ve);Se.media=Ie,ue*=45,st.push(Se),Se.scroller=ge,Se.scroll=O(ge,te),C=Se.scroll(),Se.vars=y,w=w||y.animation,"refreshPriority"in y&&(Re=1),f.tweenScroll=f.tweenScroll||{top:nb(ge,nt),left:nb(ge,rt)},Se.tweenTo=d=f.tweenScroll[te.p],w&&(w.vars.lazy=!1,w._initted||!1!==w.vars.immediateRender&&!1!==y.immediateRender&&w.render(0,!0,!0),Se.animation=w.pause(),w.scrollTrigger=Se,(o=W(a)&&a)&&(j=Ce.to(w,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(Se)}})),b=0,i=i||w.vars.id),pe&&(X(pe)||(pe={snapTo:pe}),"scrollBehavior"in Pe.style&&Ce.set(ve?[Pe,_e]:ge,{scrollBehavior:"auto"}),l=V(pe.snapTo)?pe.snapTo:"labels"===pe.snapTo?function _getClosestLabel(t){return function(e){return Ce.utils.snap(xa(t),e)}}(w):"labelsDirectional"===pe.snapTo?function _getLabelAtDirection(o){return function(e,t){var r,n=xa(o);if(n.sort(function(e,t){return e-t}),0<t.direction){for(r=0;r<n.length;r++)if(n[r]>=e)return n[r];return n.pop()}for(r=n.length;r--;)if(n[r]<=e)return n[r];return n[0]}}(w):Ce.utils.snap(pe.snapTo),c=pe.duration||{min:.1,max:2},c=X(c)?Ee(c.min,c.max):Ee(c,c),K=Ce.delayedCall(pe.delay||o/2||.1,function(){if(Math.abs(Se.getVelocity())<10&&!Ae){var e=w&&!he?w.totalProgress():Se.progress,t=(e-x)/(He()-Ne)*1e3||0,r=Xe(t/2)*t/.185,n=e+r,o=Ee(0,1,l(n,Se)),i=Se.scroll(),a=Math.round(_+o*R),s=d.tween;if(i<=B&&_<=i&&a!==i){if(s&&!s._initted&&s.data<=Math.abs(a-i))return;d(a,{duration:c(Xe(.185*Math.max(Xe(n-e),Xe(o-e))/t/.05||0)),ease:pe.ease||"power3",data:Math.abs(a-i),onComplete:function onComplete(){b=x=w&&!he?w.totalProgress():Se.progress,u&&u(Se)}},i,r*R,a-i-r*R)}}else Se.isActive&&K.restart(!0)}).pause()),i&&(lt[i]=Se),ae=Se.trigger=Be(ae||se)[0],se=!0===se?ae:Be(se)[0],U(ne)&&(ne={targets:ae,className:ne}),se&&(!1===le||le===Qe||(le=!(!le&&"flex"===sa(se.parentNode).display)&&$e),Se.pin=se,!1!==y.force3D&&Ce.set(se,{force3D:!0}),(n=Ce.core.getCache(se)).spacer?F=n.pinState:(n.spacer=Y=ke.createElement("div"),Y.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=F=hb(se)),Se.spacer=Y=n.spacer,r=sa(se),g=r[le+te.os2],D=Ce.getProperty(se),h=Ce.quickSetter(se,te.a,tt),eb(se,Y,r),H=hb(se)),p&&(e=X(p)?ua(p,it):it,A=Ha("scroller-start",i,ge,te,e,0),z=Ha("scroller-end",i,ge,te,e,0,A),t=A["offset"+te.op.d2],E=Ha("start",i,ge,te,e,t),L=Ha("end",i,ge,te,e,t),me||(function _makePositionable(e){e.style.position="absolute"===sa(e).position?"absolute":"relative"}(ve?Pe:ge),Ce.set([A,z],{force3D:!0}),v=Ce.quickSetter(A,te.a,tt),m=Ce.quickSetter(z,te.a,tt))),Se.revert=function(e){var t=!1!==e||!Se.enabled,r=Le;t!==T&&(t&&(Q=Math.max(Se.scroll(),Se.scroll.rec||0),$=Se.progress,ee=w&&w.progress()),E&&[E,L,A,z].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(Le=1),Se.update(t),Le=r,se&&(t?function _swapPinOut(e,t,r){if(ut(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(se,Y,F):de&&Se.isActive||eb(se,Y,sa(se),Z)),T=t)},Se.refresh=function(e){if(!Le&&Se.enabled)if(se&&e&&Ye)Ba(ScrollTrigger,"scrollEnd",Ua);else{Le=1,j&&j.pause(),ce&&w&&w.progress(0).invalidate(),T||Se.revert();for(var t,r,n,o,i,a,s,l,c,u=Te(),f=Me(),p=S(ge,te),d=0,h=0,g=y.end,v=y.endTrigger||ae,m=y.start||(0!==y.start&&ae?se?"0 0":"0 100%":0),b=ae&&Math.max(0,st.indexOf(Se))||0,x=b;x--;)!(s=st[x].pin)||s!==ae&&s!==se||st[x].revert();for(_=kb(m,ae,u,te,Se.scroll(),E,A,Se,f,ye,me,p)||(se?-.001:0),V(g)&&(g=g(Se)),U(g)&&!g.indexOf("+=")&&(~g.indexOf(" ")?g=(U(m)?m.split(" ")[0]:"")+g:(d=Ga(g.substr(2),u),g=U(m)?m:_+d,v=ae)),B=Math.max(_,kb(g||(v?"100% 0":p),v,u,te,Se.scroll()+d,L,z,Se,f,ye,me,p))||-.001,R=B-_||(_-=.01)&&.001,d=0,x=b;x--;)(s=(a=st[x]).pin)&&a.start-a._pinPush<_&&(t=a.end-a.start,s===ae&&(d+=t),s===se&&(h+=t));if(_+=d,B+=d,Se._pinPush=h,E&&d&&((t={})[te.a]="+="+d,Ce.set([E,L],t)),se)t=sa(se),o=te===nt,n=Se.scroll(),G=parseFloat(D(te.a))+h,!p&&1<B&&((ve?Pe:ge).style["overflow-"+te.a]="scroll"),eb(se,Y,t),H=hb(se),r=ot(se,!0),l=me&&O(ge,o?rt:nt)(),le&&((Z=[le+te.os2,R+h+tt]).t=Y,(x=le===$e?wa(se,te)+R+h:0)&&Z.push(te.d,x+tt),ut(Z),me&&Se.scroll(Q)),me&&((i={top:r.top+(o?n-_:l)+tt,left:r.left+(o?l:n-_)+tt,boxSizing:"border-box",position:"fixed"})[Ge]=i.maxWidth=Math.ceil(r.width)+tt,i[Je]=i.maxHeight=Math.ceil(r.height)+tt,i[Qe]=i[Qe+je]=i[Qe+qe]=i[Qe+Ke]=i[Qe+Ze]="0",i[$e]=t[$e],i[$e+je]=t[$e+je],i[$e+qe]=t[$e+qe],i[$e+Ke]=t[$e+Ke],i[$e+Ze]=t[$e+Ze],I=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(F,i,de)),w?(c=w._initted,Ue(1),w.progress(1,!0),q=D(te.a)-G+R+h,R!==q&&I.splice(I.length-2,2),w.progress(0,!0),c||w.invalidate(),Ue(0)):q=R;else if(ae&&Se.scroll())for(r=ae.parentNode;r&&r!==Pe;)r._pinOffset&&(_-=r._pinOffset,B-=r._pinOffset),r=r.parentNode;for(x=0;x<b;x++)!(a=st[x].pin)||a!==ae&&a!==se||st[x].revert(!1);Se.start=_,Se.end=B,(C=k=Se.scroll())<Q&&Se.scroll(Q),Se.revert(!1),Le=0,w&&he&&w._initted&&w.progress(ee,!0).render(w.time(),!0,!0),$!==Se.progress&&(j&&w.totalProgress($,!0),Se.progress=$,Se.update()),se&&le&&(Y._pinOffset=Math.round(Se.progress*q)),ie&&ie(Se)}},Se.getVelocity=function(){return(Se.scroll()-k)/(He()-Ne)*1e3||0},Se.update=function(e,t){var r,n,o,i,a,s=Se.scroll(),l=e?0:(s-_)/R,c=l<0?0:1<l?1:l||0,u=Se.progress;if(t&&(k=C,C=s,pe&&(x=b,b=w&&!he?w.totalProgress():c)),ue&&!c&&se&&!Le&&!We&&Ye&&_<s+(s-k)/(He()-Ne)*ue&&(c=1e-4),c!==u&&Se.enabled){if(i=(a=(r=Se.isActive=!!c&&c<1)!=(!!u&&u<1))||!!c!=!!u,Se.direction=u<c?1:-1,Se.progress=c,he||(!j||Le||We?w&&w.totalProgress(c,!!Le):(j.vars.totalProgress=c,j.invalidate().restart())),se)if(e&&le&&(Y.style[le+te.os2]=g),me){if(i){if(o=!e&&u<c&&s<B+1&&s+1>=S(ge,te),de)if(e||!r&&!o)mb(se,Y);else{var f=ot(se,!0),p=s-_;mb(se,Pe,f.top+(te===nt?p:0)+tt,f.left+(te===nt?0:p)+tt)}ut(r||o?I:H),q!==R&&c<1&&r||h(G+(1!==c||o?0:q))}}else h(G+q*c);!pe||d.tween||Le||We||K.restart(!0),ne&&(a||fe&&c&&(c<1||!Fe))&&Be(ne.targets).forEach(function(e){return e.classList[r||fe?"add":"remove"](ne.className)}),!re||he||e||re(Se),i&&!Le?(n=c&&!u?0:1===c?1:1===u?2:3,he&&(o=!a&&"none"!==xe[n+1]&&xe[n+1]||xe[n],w&&("complete"===o||"reset"===o||o in w)&&("complete"===o?w.pause().totalProgress(1):"reset"===o?w.restart(!0).pause():w[o]()),re&&re(Se)),!a&&Fe||(oe&&a&&oe(Se),be[n]&&be[n](Se),fe&&(1===c?Se.kill(!1,1):be[n]=0),a||be[n=1===c?1:3]&&be[n](Se))):he&&re&&!Le&&re(Se)}m&&(v(s+(A._isFlipped?1:0)),m(s))},Se.enable=function(){Se.enabled||(Se.enabled=!0,Ba(ge,"resize",Na),Ba(ge,"scroll",Ma),we&&Ba(ScrollTrigger,"refreshInit",we),w&&w.add?Ce.delayedCall(.01,function(){return _||B||Se.refresh()})&&(R=.01)&&(_=B=0):Se.refresh())},Se.disable=function(e,t){if(Se.enabled&&(!1!==e&&Se.revert(),Se.enabled=Se.isActive=!1,t||j&&j.pause(),Q=0,n&&(n.uncache=1),we&&Ca(ScrollTrigger,"refreshInit",we),K&&(K.pause(),d.tween&&d.tween.kill()&&(d.tween=0)),!ve)){for(var r=st.length;r--;)if(st[r].scroller===ge&&st[r]!==Se)return;Ca(ge,"resize",Na),Ca(ge,"scroll",Ma)}},Se.kill=function(e,t){Se.disable(e,t),i&&delete lt[i];var r=st.indexOf(Se);st.splice(r,1),r===ze&&0<ct&&ze--,w&&(w.scrollTrigger=null,e&&w.render(-1),t||w.kill()),E&&[E,L,A,z].forEach(function(e){return e.parentNode.removeChild(e)}),se&&(n&&(n.uncache=1),r=0,st.forEach(function(e){return e.pin===se&&r++}),r||(n.spacer=0))},Se.enable()}else this.update=this.refresh=this.kill=J},ScrollTrigger.register=function register(e){if(!i&&(Ce=e||L(),K()&&window.document&&(Oe=window,ke=document,_e=ke.documentElement,Pe=ke.body),Ce&&(Be=Ce.utils.toArray,Ee=Ce.utils.clamp,Ue=Ce.core.suppressOverwrites||J,Ce.core.globals("ScrollTrigger",ScrollTrigger),Pe))){s=Oe.requestAnimationFrame||function(e){return setTimeout(e,16)},Ba(Oe,"mousewheel",Ma),o=[Oe,ke,_e,Pe],Ba(ke,"scroll",Ma);var t,r=Pe.style,n=r.borderTop;r.borderTop="1px solid #000",t=ot(Pe),nt.m=Math.round(t.top+nt.sc())||0,rt.m=Math.round(t.left+rt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(La,200),Ce.delayedCall(.5,function(){return We=0}),Ba(ke,"touchcancel",J),Ba(Pe,"touchstart",J),Aa(Ba,ke,"pointerdown,touchstart,mousedown",function(){return Ae=1}),Aa(Ba,ke,"pointerup,touchend,mouseup",function(){return Ae=0}),u=Ce.utils.checkPrefix("transform"),G.push(u),i=He(),a=Ce.delayedCall(.2,F).pause(),d=[ke,"visibilitychange",function(){var e=Oe.innerWidth,t=Oe.innerHeight;ke.hidden?(f=e,p=t):f===e&&p===t||Na()},ke,"DOMContentLoaded",F,Oe,"load",function(){return Ye||F()},Oe,"resize",Na],T(Ba)}return i},ScrollTrigger.defaults=function defaults(e){for(var t in e)at[t]=e[t]},ScrollTrigger.kill=function kill(){De=0,st.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(Fe=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(La,t),"autoRefreshEvents"in e&&(T(Ca)||T(Ba,e.autoRefreshEvents||"none"),r=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Be(e)[0],n=g.indexOf(r),o=M(r);~n&&g.splice(n,o?6:2),o?Ve.unshift(Oe,t,Pe,t,_e,t):Ve.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=B.indexOf(r),o=e[r],"all"===(Ie=r)?o():(t=Oe.matchMedia(r))&&(t.matches&&(i=o()),~n?(B[n+1]=Z(B[n+1],o),B[n+2]=Z(B[n+2],i)):(n=B.length,B.push(r,o,i),t.addListener?t.addListener(Ta):t.addEventListener("change",Ta)),B[n+3]=t.matches),Ie=0;return B},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(B.length=0),0<=(e=B.indexOf(e))&&B.splice(e,4)},ScrollTrigger);function ScrollTrigger(e,t){i||ScrollTrigger.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}$.version="3.6.0",$.saveStyles=function(e){return e?Be(e).forEach(function(e){if(e&&e.style){var t=A.indexOf(e);0<=t&&A.splice(t,4),A.push(e,e.style.cssText,Ce.core.getCache(e),Ie)}}):A},$.revert=function(e,t){return R(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?Na():F(!0)},$.update=H,$.maxScroll=function(e,t){return S(e,t?rt:nt)},$.getScrollFunc=function(e,t){return O(Be(e)[0],t?rt:nt)},$.getById=function(e){return lt[e]},$.getAll=function(){return st.slice(0)},$.isScrolling=function(){return!!Ye},$.addEventListener=function(e,t){var r=k[e]||(k[e]=[]);~r.indexOf(t)||r.push(t)},$.removeEventListener=function(e,t){var r=k[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},$.batch=function(e,t){function ri(e,t){var r=[],n=[],o=Ce.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&V(t[r])&&"onRefreshInit"!==r?ri(0,t[r]):t[r];return V(a)&&(a=a(),Ba($,"refresh",function(){return a=t.batchMax()})),Be(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push($.create(t))}),n},$.sort=function(e){return st.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},L()&&Ce.registerPlugin($),e.ScrollTrigger=$,e.default=$;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflCYX3kH/www-widgetapi.js';a.async = true;var c = document.currentScript;if (c) {var n = c.nonce || c.getAttribute('nonce');if (n) {a.setAttribute('nonce', n);}}var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}
;/*!
 * GSAP 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&ae}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(Tt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(e,r,i){var n,a=q(e[1]),s=(a?2:1)+(r<2?0:1),o=e[s];if(a&&(o.duration=e[1]),o.parent=i,r){for(n=o;i&&!("immediateRender"in n);)n=i.vars.defaults||{},i=t(i.vars.inherit)&&i.parent;o.immediateRender=t(n.immediateRender),r<2?o.runBackwards=1:o.startAt=e[s-1]}return o}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ka(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||F,i=e.keyframes?ka:ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||j)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>j)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-j}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=ca(r+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Pt.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ja(t){return t instanceof Bt?ta(t):Ia(t,t._dur)}function La(t,e){var r,i,n=t.labels,a=t._recent||vt,s=t.duration()>=U?a.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in n)?"<"===(r=e.charAt(0))||">"===r?("<"===r?a._start:a.endTime(0<=a._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in n||(n[e]=s),n[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?La(t,e.substr(0,r-1))+i:s+i):null==e?s:+e}function Ma(t,e){return t||0===t?e(t):e}function Oa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Ra(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Ua(t){return t.sort(function(){return.5-Math.random()})}function Va(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Et(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):J(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Ua(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Oa(_.amount||_.each)||0,m=m&&d<0?It(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Wa(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Oa(t))}}function Xa(u,t){var h,l,e=K(u);return!e&&s(u)&&(h=e=u.radius||U,u.values?(u=Tt(u.values),(l=!q(u[0]))&&(h*=h)):u=Wa(u.increment)),Ma(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=U,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Oa(t)}:Wa(u))}function Ya(t,e,r,i){return Ma(K(t)?!e:!0===r?!!(r=0):!i,function(){return K(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function ab(e,r,t){return Ma(t,function(t){return e[~~r(t)]})}function db(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+Ya(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function gb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function ib(t){return sa(t),t.progress()<1&&xt(t,"onInterrupt"),t}function nb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Ot+.5|0}function ob(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&Ot,t&Ot]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&Ot,c&Ot,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&Ot,t&Ot]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=nb(s+1/3,i,n),c[1]=nb(s,i,n),c[2]=nb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/Ot,n=c[1]/Ot,a=c[2]/Ot,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function pb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function qb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=ob(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=pb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function tb(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Ct.test(r),t[1]=qb(t[1],e),t[0]=qb(t[0],e,pb(t[1])),!0}function Cb(t){var e=(t+"").split("("),r=St[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):St._CE&&Dt.test(t)?St._CE("",t):r}function Eb(t,e){for(var r,i=t._first;i;)i instanceof Bt?Eb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Eb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Gb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in St[t]=ot[t]=a,St[n=t.toLowerCase()]=r,a)St[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=St[t+"."+e]=a[e]}),a}function Hb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ib(r,t,e){function Cl(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/X*(Math.asin(1/i)||0),s="out"===r?Cl:"in"===r?function(t){return 1-Cl(1-t)}:Hb(Cl);return n=X/n,s.config=function(t,e){return Ib(r,t,e)},s}function Jb(e,r){function Kl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Kl:"in"===e?function(t){return 1-Kl(1-t)}:Hb(Kl);return t.config=function(t){return Jb(e,t)},t}var L,F,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,S,D,z,I,E,R,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},B={duration:.5,overwrite:!1,delay:0},U=1e8,j=1/U,X=2*Math.PI,G=X/4,V=0,J=Math.sqrt,W=Math.cos,H=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},K=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[#\-+.]*\b[a-z\d-=+%.]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt={_start:0,endTime:Q},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},bt=[].slice,Tt=function toArray(t,e){return!o(t)||e||!n&&At()?K(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ra(t,1)?r.push.apply(r,Tt(t)):r.push(t)})||r}(t,e):Ra(t)?bt.call(t,0):t?[t]:[]:bt.call(a.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ma(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},Ot=255,Mt={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,Pt=(x=Date.now,k=500,C=33,A=x(),S=A,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){yk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,yk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){I.indexOf(t)<0&&I.push(t),At()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),At=function _wake(){return!c&&Pt.wake()},St={},Dt=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,It=function _invertEase(e){return function(t){return 1-e(1-t)}},Et=function _parseEase(t,e){return t&&(p(t)?t:St[t]||Cb(t))||e};function yk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(S+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(yk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function _l(t){return t<R?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Gb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),St.Linear.easeNone=St.none=St.Linear.easeIn,Gb("Elastic",Ib("in"),Ib("out"),Ib()),E=7.5625,R=1/2.75,Gb("Bounce",function(t){return 1-_l(1-t)},_l),Gb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Gb("Circ",function(t){return-(J(1-t*t)-1)}),Gb("Sine",function(t){return 1===t?1:1-W(t*G)}),Gb("Back",Jb("in"),Jb("out"),Jb()),St.SteppedEase=St.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},B.ease=St["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Rt,Lt=function GSCache(t,e){this.id=V++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Wt},Ft=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(At(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===j||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-j?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-j?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=j)&&Math.abs(this._zTime)!==j))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ja(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(La(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-j:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-j,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-j))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function rn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?rn():i._prom=rn})},Rt.kill=function kill(){ib(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||Pt.wake(),r&&Ca(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ja(Ft.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-j,_prom:0,_ps:!1,_rts:1});var Bt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e,r)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),i.parent&&Ba(i.parent,_assertThisInitialized(i)),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r,i){return new Gt(t,ea(arguments,0,this),La(this,q(e)?i:r)),this},e.from=function from(t,e,r,i){return new Gt(t,ea(arguments,1,this),La(this,q(e)?i:r)),this},e.fromTo=function fromTo(t,e,r,i,n){return new Gt(t,ea(arguments,2,this),La(this,q(e)?n:i)),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Gt(t,e,La(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Gt.delayedCall(0,t,e),La(this,r))},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Gt(t,r,La(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-j<t&&0<=t?m:t<j?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Eb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),_||!(i||!g&&0<=t)||e||xt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-j);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-j:j);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-j)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=La(this,e)),!(t instanceof Ft)){if(K(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Gt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Gt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(Pt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=La(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Gt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,La(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=La(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=Tt(t),a=this._first,s=q(e);a;)a instanceof Gt?da(a._targets,n)&&(s?(!qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=La(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=e.immediateRender,u=Gt.to(r,ja({ease:"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||j,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());u._dur!==t&&Ia(u,t,0,1).render(u._time,!0,!0),a&&a.apply(u,s||[])}},e));return o?u.render(0):u},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:La(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+j)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===F&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ga(F,ya(t,F)),f=Pt.frame),Pt.frame>=ct){ct+=Y.autoSleep||120;var e=F._first;if((!e||!e._ts)&&Y.autoSleep&&Pt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Pt.sleep()}}},Timeline}(Ft);ja(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Qb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Ut(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||K(t)||Z(t))return o(t)?Ut(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Ut(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ie(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Jt:Qt:Vt;if(o(i)&&(~i.indexOf("random(")&&(i=db(i)),"="===i.charAt(1)&&(i=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Oa(d)||0))),d!==i)return isNaN(d*i)?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ie(this._pt,t,e,0,1,Zt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=db(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ie(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?$t:Ht,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Nt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,C=g.keyframes,P=g.autoRevert,A=e._dur,S=e._startAt,D=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!L,R=e.timeline;if(!R||C&&v||(v="none"),e._ease=Et(v,B.ease),e._yEase=k?It(Et(!0===k?v:k,B.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),!R){if(p=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=na(g,ut),S&&S.render(-1,!0).kill(),y){if(sa(e._startAt=Gt.set(D,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),b)if(0<r)P||(e._startAt=0);else if(A&&!(r<0&&S))return void(r&&(e._zTime=r))}else if(M&&A)if(S)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),sa(e._startAt=Gt.set(D,a)),b){if(!r)return}else _initTween(e._startAt,j);for(e._pt=0,T=A&&t(T)||T&&!A,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),c=I===D?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ie(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Qb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(qt=e,F.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,qt=0),e._pt&&T&&(lt[h.id]=1)}u&&re(e),e._onInit&&e._onInit(e)}e._from=!R&&!!g.runBackwards,e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Ut=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?db(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Xt=(jt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Gt=function(A){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,c,p,_=(a=A.call(this,n?r:oa(r),i)||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,M=_.scrollTrigger,k=_.yoyoEase,C=a.parent,P=(K(e)||Z(e)?q(e[0]):"length"in r)?[e]:Tt(e);if(a._targets=P.length?$(P):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ja(o.vars.defaults,{ease:"none"}),w.forEach(function(t){return o.to(P,t,">")});else{if(l=P.length,c=b?Va(b):Q,s(b))for(f in b)~jt.indexOf(f)&&((p=p||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Xt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),p&&mt(h,p),d=P[u],h.duration=+Ut(m,_assertThisInitialized(a),u,d,P),h.delay=(+Ut(g,_assertThisInitialized(a),u,d,P)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,c(u,d,P))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||L||(qt=_assertThisInitialized(a),F.killTweensOf(P),qt=0),C&&Ba(C,_assertThisInitialized(a)),(y||!m&&!w&&a._start===ca(C._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-j,a.render(Math.max(0,-g))),M&&Da(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,A);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-j<t&&0<=t?c:t<j?0:t;if(p){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ca(_%s),_===c?(a=this._repeat,i=p):((a=~~(_/s))&&a===_/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Eb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ca(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ea(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),!i||d||e||xt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-j:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),xt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&xt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||sa(this,1),e||t<0&&!d||!_&&!d||(xt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data)?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=yt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===j||!e&&t._zTime){if(!t._initted&&Ea(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?j:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,r||xt(t,"onStart"),n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&xt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&xt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&sa(t,1),r||(xt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?ib(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,qt&&!0!==qt.vars.overwrite)._first||ib(this),this.parent&&r!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?Tt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),ib(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=c[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ra(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&p&&ib(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ea(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ea(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Ft);ja(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var t=new Bt,e=bt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function _b(t,e,r){return t.setAttribute(e,r)}function hc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Vt=function _setterPlain(t,e,r){return t[e]=r},Qt=function _setterFunc(t,e,r){return t[e](r)},Jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Wt=function _getSetter(t,e){return p(t[e])?Qt:r(t[e])&&t.setAttribute?_b:Vt},Ht=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},$t=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Kt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},te=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ee=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ra(this,i,"_pt"):i.dep||(e=1),i=r;return!e},re=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ie=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=hc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Ht,this.d=s||this,this.set=o||Vt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Gt,ot.TimelineLite=ot.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:B,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=tb;var ne={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:Kt,add:Yt,kill:ee,modifier:te,rawVars:0},a={targetTest:0,get:0,getSetter:Wt,aliases:{},register:0};if(At(),t!==i){if(ft[e])return;ja(i,ja(na(t,n),a)),mt(i.prototype,mt(n,na(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(ae,i,ie)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=Tt(i)[0]);var n=_(i||{}).get,a=e?ia:ha;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Tt(r)).length){var n=r.map(function(t){return ae.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&Kt(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Et(t.ease,B.ease)),ma(B,t||{})},config:function config(t){return ma(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(Tt(t),ja(e||{},a),r)},r&&(Bt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){St[t]=Et(e)},parseEase:function parseEase(t,e){return arguments.length?Et(t,e):St},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Bt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),F.remove(a),a._dp=0,a._time=a._tTime=F._time,i=F._first;i;)n=i._next,!r&&!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]||Ca(a,i,i._start-i._delay),i=n;return Ca(F,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return K(e)?ab(e,wrap(0,e.length),t):Ma(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return K(e)?ab(e,wrapYoyo(0,e.length-1),t):Ma(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Va,random:Ya,snap:Xa,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:Oa,clamp:function clamp(e,r,t){return Ma(t,function(t){return yt(e,r,t)})},splitColor:ob,toArray:Tt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Oa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(K(e)&&!K(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(K(e)?[]:{},e));if(!u){for(a in r)Yt.call(d,e,a,"get",r[a]);n=function func(t){return Kt(t,d)||(f?e.p:e)}}}return Ma(t,n)},shuffle:Ua},install:M,effects:dt,ticker:Pt,updateRoot:Bt.updateRoot,plugins:ft,globalTimeline:F,core:{PropTween:ie,globals:P,Tween:Gt,Timeline:Bt,Animation:Ft,getCache:_,_removeLinkedListItem:ra,suppressOverwrites:function suppressOverwrites(t){return L=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ne[t]=Gt[t]}),Pt.add(Bt.updateRoot),d=ne.to({},{duration:0});function lc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function nc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=lc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ae=ne.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},nc("roundProps",Wa),nc("modifiers"),nc("snap",Xa))||ne;Gt.version=Bt.version=ae.version="3.6.0",l=1,u()&&At();function Yc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Zc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function $c(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function _c(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function ad(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function bd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function cd(t,e,r){return t.style[e]=r}function dd(t,e,r){return t.style.setProperty(e,r)}function ed(t,e,r){return t._gsap[e]=r}function fd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function gd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function hd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ld(t,e){var r=oe.createElementNS?oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oe.createElement(t);return r.style?r:oe.createElement(t)}function md(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Le,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&md(t,je(e)||e,1)||""}function pd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(se=window,oe=se.document,ue=oe.documentElement,le=ld("div")||{style:{}},fe=ld("div"),Ye=je(Ye),Ne=Ye+"Origin",le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ce=!!je("perspective"),he=1)}function qd(t){var e,r=ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ue.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=qd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ue.removeChild(r),this.style.cssText=a,e}function rd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function sd(e){var r;try{r=e.getBBox()}catch(t){r=qd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===qd||(r=qd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}}function td(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!sd(t))}function ud(t,e){if(e){var r=t.style;e in ze&&e!==Ne&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Le,"-$1").toLowerCase())):r.removeAttribute(e)}}function vd(t,e,r,i,n,a){var s=new ie(t._pt,e,r,0,1,a?bd:ad);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function xd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=le.style,f=Fe.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,m="%"===i;return i===h||!u||Xe[i]||Xe[h]?u:("px"===h||p||(u=xd(t,e,r,"px")),o=t.getCTM&&td(t),!m&&"%"!==h||!ze[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==oe&&a.appendChild||(a=oe.body),(s=a._gsap)&&m&&s.width&&f&&s.time===Pt.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=md(t,"position")),a===t&&(l.position="static"),a.appendChild(le),n=le[c],a.removeChild(le),l.position="absolute",f&&m&&((s=_(a)).time=Pt.time,s.width=a[c]),ca(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[c],ca(m?u/n*100:u/100*n)))}function yd(t,e,r,i){var n;return he||pd(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),ze[e]&&"transform"!==e?(n=We(t,i),n="transformOrigin"!==e?n[e]:He(md(t,Ne))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ve[e]&&Ve[e](t,e,r)||md(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?xd(t,e,n,r)+r:n}function zd(t,e,r,i){if(!r||"none"===r){var n=je(e,t,1),a=n&&md(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=md(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ie(this._pt,t.style,e,0,1,Zt),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=md(t,e)||i,t.style[e]=r),tb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=xd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:h,c:g?g*c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?bd:ad;return nt.test(i)&&(v.e=0),this._pt=v}function Bd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ge[r]||r,e[1]=Ge[i]||i,e.join(" ")}function Cd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ze[r]&&(i=1,r="transformOrigin"===r?Ne:Ye),ud(a,r);i&&(ud(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),We(a,1),u.uncache=1))}}function Gd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Hd(t){var e=md(t,Ye);return Gd(e)?Qe:e.substr(7).match(et).map(ca)}function Id(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Hd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Qe:u:(u!==Qe||t.offsetParent||t===ue||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,ue.appendChild(t)),u=Hd(t),n?o.display=n:ud(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ue.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Jd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Id(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Qe&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=sd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=c+(y*_+b*g)-y,h.yOffset=p+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ne]="0px 0px",a&&(vd(a,h,"xOrigin",f,w),vd(a,h,"yOrigin",d,x),vd(a,h,"xOffset",c,h.xOffset),vd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Md(t,e,r){var i=Oa(e);return ca(parseFloat(e)+parseFloat(xd(t,"x",r+"px",i)))+i}function Td(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ie:1),d=a?f*a:f-i,c=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ie(t._pt,e,r,i,d,Zc),u.e=c,u.u="deg",t._props.push(r),u}function Ud(t,e,r){var i,n,a,s,o,u,h,l=fe.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ye]=e,oe.body.appendChild(fe),i=We(fe,1),ze)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Oa(a)!==(h=Oa(s))?xd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ie(t._pt,f,n,o,u-o,Yc),t._pt.u=h||0,t._props.push(n));oe.body.removeChild(fe)}var se,oe,ue,he,le,fe,de,ce,pe=St.Power0,_e=St.Power1,me=St.Power2,ge=St.Power3,ve=St.Power4,ye=St.Linear,be=St.Quad,Te=St.Cubic,we=St.Quart,xe=St.Quint,Oe=St.Strong,Me=St.Elastic,ke=St.Back,Ce=St.SteppedEase,Pe=St.Bounce,Ae=St.Sine,Se=St.Expo,De=St.Circ,ze={},Ie=180/Math.PI,Ee=Math.PI/180,Re=Math.atan2,Le=/([A-Z])/g,Fe=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Ne=Ye+"Origin",Ue="O,Moz,ms,Ms,Webkit".split(","),je=function _checkPropPrefix(t,e,r){var i=(e||le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ue[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ue[n]:"")+t},Xe={deg:1,rad:1,turn:1},Ge={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ve={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ie(t._pt,e,r,0,0,Cd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Qe=[1,0,0,1,0,0],Je={},We=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b,T,w,x,O,M,k,C,P,A,S,D,z,I,E,R=t.style,L=r.scaleX<0,F="deg",B=md(t,Ne)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!td(t)),m=Id(t,r.svg),r.svg&&(k=!r.uncache&&t.getAttribute("data-svg-origin"),Jd(t,k||B,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Qe&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Re(T,b)*Ie:0,(f=w||x?Re(w,x)*Ie+u:0)&&(o*=Math.cos(f*Ee)),r.svg&&(i-=p-(p*b+_*w),n-=_-(p*T+_*x))):(E=m[6],z=m[7],A=m[8],S=m[9],D=m[10],I=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(E,D))*Ie,g&&(k=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=E*v+D*y,A=O*-y+A*v,S=M*-y+S*v,D=E*-y+D*v,I=z*-y+I*v,O=k,M=C,E=P),l=(g=Re(-w,D))*Ie,g&&(v=Math.cos(-g),I=x*(y=Math.sin(-g))+I*v,b=k=b*v-A*y,T=C=T*v-S*y,w=P=w*v-D*y),u=(g=Re(T,b))*Ie,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),C=O*v+M*y,T=T*v-b*y,M=M*v-O*y,b=k,O=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(M*M+E*E)),g=Re(O,M),f=2e-4<Math.abs(g)?g*Ie:0,c=I?1/(I<0?-I:I):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Gd(md(t,Ye)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+F,r.rotationX=ca(h)+F,r.rotationY=ca(l)+F,r.skewX=f+F,r.skewY=d+F,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(B.split(" ")[2])||0)&&(R[Ne]=He(B)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?rr:ce?er:$e,r.uncache=0,r},He=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},$e=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,er(t,e)},Ze="0deg",Ke="0px",tr=") ",er=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Ze||h!==Ze)){var T,w=parseFloat(h)*Ee,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Ee,T=Math.cos(w),a=Md(g,a,x*T*-v),s=Md(g,s,-Math.sin(w)*-v),o=Md(g,o,O*T*-v+v)}_!==Ke&&(y+="perspective("+_+tr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===Ke&&s===Ke&&o===Ke||(y+=o!==Ke||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+tr),u!==Ze&&(y+="rotate("+u+tr),h!==Ze&&(y+="rotateY("+h+tr),l!==Ze&&(y+="rotateX("+l+tr),f===Ze&&d===Ze||(y+="skew("+f+", "+d+tr),1===c&&1===p||(y+="scale("+c+", "+p+tr),g.style[Ye]=y||"translate(0, 0)"},rr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=Ee,c*=Ee,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=Ee,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=xd(g,"x",l,"px"),O=xd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ve[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var ir,nr,ar,sr={name:"css",register:pd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in he||pd(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Qb(f,e,r,i,t,n)))if(h=typeof s,l=Ve[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=db(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",d=Oa(a),(c=Oa(s))?d!==c&&(a=xd(t,f,a,c)+c):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f);else if("undefined"!==h){if(w&&f in w?(a="function"==typeof w[f]?w[f].call(r,i,t,n):w[f],f in Y.units&&!Oa(a)&&(a+=Y.units[f]),"="===(a+"").charAt(1)&&(a=yd(t,f))):a=yd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===yd(t,"visibility")&&o&&(u=0),vd(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in ze)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||We(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ie(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ie(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Bd(s),g.svg?Jd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&vd(this,g,"zOrigin",g.zOrigin,c),vd(this,T,f,He(a),He(s)));continue}if("svgOrigin"===f){Jd(t,s,1,v,0,this);continue}if(f in Je){Td(this,g,f,u,s,p);continue}if("smoothOrigin"===f){vd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Ud(this,s,t);continue}}else f in T||(f=je(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(c=Oa(s)||(f in Y.units?Y.units[f]:d))&&(u=xd(t,f,a,c)),this._pt=new ie(this._pt,_?g:T,f,u,p?p*o:o-u,_||"px"!==c&&"zIndex"!==f||!1===e.autoRound?Yc:_c),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=$c);else if(f in T)zd.call(this,t,f,a,s);else{if(!(f in t)){N(f,s);continue}this.add(t,f,t[f],s,i,n)}b.push(f)}y&&re(this)},get:yd,aliases:qe,getSetter:function getSetter(t,e,i){var n=qe[e];return n&&n.indexOf(",")<0&&(e=n),e in ze&&e!==Ne&&(t._gsap.x||yd(t,"x"))?i&&de===i?"scale"===e?fd:ed:(de=i||{})&&("scale"===e?gd:hd):t.style&&!r(t.style[e])?cd:~e.indexOf("-")?dd:Wt(t,e)},core:{_removeProperty:ud,_getMatrix:Id}};ae.utils.checkPrefix=je,ar=ba((ir="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(nr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ze[t]=1}),ba(nr,function(t){Y.units[t]="deg",Je[t]=1}),qe[ar[13]]=ir+","+nr,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=ar[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),ae.registerPlugin(sr);var or=ae.registerPlugin(sr)||ae,ur=or.core.Tween;e.Back=ke,e.Bounce=Pe,e.CSSPlugin=sr,e.Circ=De,e.Cubic=Te,e.Elastic=Me,e.Expo=Se,e.Linear=ye,e.Power0=pe,e.Power1=_e,e.Power2=me,e.Power3=ge,e.Power4=ve,e.Quad=be,e.Quart=we,e.Quint=xe,e.Sine=Ae,e.SteppedEase=Ce,e.Strong=Oe,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Gt,e.TweenMax=ur,e.default=or,e.gsap=or;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
var Block_Actualites = {
	init:function(){
		
		$(window).resize(function(){
			Block_Actualites.resize();	
		});

		Block_Actualites.resize();

	},
	
	resize:function(){
		var _carousel = $(".block-actualites .blog-list");

		if (_carousel.hasClass('slick-initialized')) {
			_carousel.slick('unslick');
		}

		//var _slides_to_show = parseInt($("[slider-3-columns]").css("padding-top"));

		var _slides_to_show = 1;
		var els = document.querySelectorAll(".block-actualites");

		Array.prototype.forEach.call(els, function(el) {
			Debug.log("SLIDES TO SHOW : " + el + " => " + parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide")));
			_slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));
		});
		

		_carousel.slick({
			arrows:false, 
			dots:true,
			infinite: false,
			variableWidth:true,
			slidesToShow: _slides_to_show,
			focusOnSelect: true,
			touchThreshold:500
		});	
	}
}

$(window).load(function(){
	if($(".block-actualites").length){
		Block_Actualites.init();
	}
})
;var Block_Args_With_Picto = {

    array_swiper:[],

    init:function(){
        $(window).resize(function(){
            Block_Args_With_Picto.resize();
        });
        Block_Args_With_Picto.resize();
    },
    resize:function(){
        $(".block-args-with-picto").each(function(){
            var _slides_to_show = 0;
            var _id = $(this).attr("id");
            var el = document.getElementById(_id);
            _slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));

            if(_slides_to_show != 0){
                Block_Args_With_Picto.createSwiper(_id, _slides_to_show);
            }else{
                Block_Args_With_Picto.destroySwiper(_id);
            }
        })
    },
    createSwiper:function(pID, _slides_to_show){

        if(!$("#" + pID + " .slider-container").hasClass("swiper-initialized")){
            var swiper = new Swiper(
                "#" + pID + " .slider-container",
                {
                    speed: 600,
                    loop: false,
                    slidesPerView: "auto",
                    centeredSlides: false,
                    freeMode: false,
                    grabCursor: true,
                    mousewheel: false,
                    slideToClickedSlide: false,
                    touchStartPreventDefault: false,
                    preventClicks: true,
                    spaceBetween:60,
                }
            );

            Block_Args_With_Picto.array_swiper.push({id:pID, swiper:swiper, nb_slides:_slides_to_show});
        }
    },
    destroySwiper:function(pID){
        if($("#" + pID + " .slider-container").hasClass("swiper-initialized")){
            for (var i = 0; i < Block_Args_With_Picto.array_swiper.length; i++){
                if(Block_Args_With_Picto.array_swiper[i].id == pID){
                    Block_Args_With_Picto.array_swiper[i].swiper.destroy();
                    Block_Args_With_Picto.array_swiper.splice(i, 1);
                }
            }
        }

    }
}

$(window).load(function(){
    if($(".block-args-with-picto").length){
        Block_Args_With_Picto.init();
    }
})
;var Loyer_Calculator = {
    _is_listening: true,
    _has_intro:false,

    init: function () {

        if($(".gli-intro").length){
            Loyer_Calculator._has_intro = true;
        }
        if(Loyer_Calculator._has_intro) {
            $(".gli-intro .btn").on("click touchend", function (e) {
                if (e.type == "touchend") {
                    $(this).off("click");
                }
                var _y_dest = $(".block-calculateur-de-loyer").offset().top;

                $("html, body").animate({scrollTop: _y_dest}, 500);
            });
			$(".gli-intro input").on('keyup', function (e) {
				if (e.key === 'Enter' || e.keyCode === 13) {
					var _y_dest = $(".block-calculateur-de-loyer").offset().top;
					$("html, body").animate({scrollTop: _y_dest}, 500);
				}
			});


            $(".gli-intro input").change(function () {
                if (Loyer_Calculator._is_listening) {
                    Loyer_Calculator.update_value_from_intro();
                }
            });
            $(".gli-intro input").on("input", function () {
                if (Loyer_Calculator._is_listening) {
                    Loyer_Calculator.update_value_from_intro();
                }
            });

        }

        $(".block-calculateur-de-loyer .custom-rangeSlider").find("input").change(function(){
            $(".block-calculateur-de-loyer #loyer").parent().addClass("focused");
            $(".block-calculateur-de-loyer #loyer").val(parseFloat($(".txt-custom-range").val()));

            Loyer_Calculator._is_listening = false;

            Loyer_Calculator.calculate_pourcent();

            setTimeout(function(){
                Loyer_Calculator._is_listening = true;
            }, 200);
        })

        $(".block-calculateur-de-loyer #loyer").on("input change",  function () {


            $(".block-calculateur-de-loyer .custom-rangeSlider input").val($(".block-calculateur-de-loyer #loyer").val());

            Loyer_Calculator._is_listening = false;

            Loyer_Calculator.calculate_pourcent();

            setTimeout(function(){
                Loyer_Calculator._is_listening = true;
            }, 200);

        });


        Loyer_Calculator.calculate_pourcent();

    },
    update_value_from_intro: function () {
        setTimeout(function () {
            $(".block-calculateur-de-loyer input").parent().addClass("focused");
            $(".block-calculateur-de-loyer input").val($(".gli-intro input").val());

            Loyer_Calculator.calculate_pourcent();
        }, 40);
    },
    calculate_pourcent:function(){

        var _val = parseFloat($('.block-calculateur-de-loyer input[name="loyer"]').val().split(",").join("."));
        var _length = $('.block-calculateur-de-loyer input[name="loyer"]').val().length;
        if(_length <= 0){
            _length = 1;
        }
        $('.block-calculateur-de-loyer input[name="loyer"]').css({
            "max-width":_length * 22
        })

        if(Loyer_Calculator._is_listening == false && Loyer_Calculator._has_intro){
            $(".gli-intro input").parent().addClass("focused");
            $(".gli-intro input").val($(".gli-loyer #loyer").val());
        }


        $(".calc-container").each(function(){
            var _pourcent = parseFloat($(this).attr("data-pourcentage")) / 100;

            var _cost = Math.round((_val * _pourcent)*100)/100;

            console.log("COST : " + _cost);
            _cost = Math.round(_cost * 100)/100;

            if(_cost % 1 != 0){
                if((_cost * 10) % 1 == 0){
                    _cost += "0";
                }
            }

            _cost = "" + _cost;
            if(isNaN(_cost)){
                _cost = "Saissez un montant de loyer";
                $(this).find(".result .value").addClass('error');
                $(this).find(".result .legend").hide();
            }else{
                $(this).find(".result .value").removeClass('error');
                $(this).find(".result .legend").show();
            }
            $(this).find(".result .value").html(_cost.split(".").join(","));

        })

    }
}

$(window).load(function () {
    if ($(".block-calculateur-de-loyer").length) {
        Loyer_Calculator.init();
    }
})
;var Block_Cards_Modulaire = {

    array_swiper: [],

    init: function () {
        $(window).resize(function () {
            Block_Cards_Modulaire.resize();
        });
        Block_Cards_Modulaire.resize();
    },
    resize: function () {



        $(".block-cards-modulaire").each(function () {

            var _h_header = 0;

            $(this).find(".swiper-slide").each(function(){
                $(this).find(".card-header").css({height:"auto"});
                _h_header = Math.max(_h_header, $(this).find(".card-header").outerHeight());
            });

            $(this).find(".card-header").css({height:_h_header});

            var _slides_to_show = 0;
            var _id = $(this).attr("id");
            var el = document.getElementById(_id);
            _slides_to_show = parseInt(window.getComputedStyle(el).getPropertyValue("--nbslide"));

            if (_slides_to_show != 0) {
                Block_Cards_Modulaire.createSwiper(_id, _slides_to_show);
            } else {
                Block_Cards_Modulaire.destroySwiper(_id);
            }
        })

    },
    createSwiper: function (pID, _slides_to_show) {

        if (!$("#" + pID + " .slider-container").hasClass("swiper-initialized")) {

            var swiper = new Swiper(
                "#" + pID + " .slider-container",
                {
                    speed: 600,
                    loop: false,
                    slidesPerView: "auto",
                    centeredSlides: false,
                    freeMode: false,
                    grabCursor: true,
                    mousewheel: false,
                    slideToClickedSlide: false,
                    touchStartPreventDefault: false,
                    preventClicks: true,
                    spaceBetween: 60,
                }
            );

            Block_Cards_Modulaire.array_swiper.push({id: pID, swiper: swiper, nb_slides: _slides_to_show});
        }
    },
    destroySwiper: function (pID) {
        if ($("#" + pID + " .slider-container").hasClass("swiper-initialized")) {
            for (var i = 0; i < Block_Cards_Modulaire.array_swiper.length; i++) {
                if (Block_Cards_Modulaire.array_swiper[i].id == pID) {
                    Block_Cards_Modulaire.array_swiper[i].swiper.destroy();
                    Block_Cards_Modulaire.array_swiper.splice(i, 1);
                }
            }
        }
    }
}

$(window).load(function () {
    if ($(".block-cards-modulaire").length) {
        Block_Cards_Modulaire.init();
    }
})
;var Block_Cards_Selector = {
    init:function(){
        $(window).resize(function(){
            Block_Cards_Selector.resize();
        })
        Block_Cards_Selector.resize();

        $(".block-cards-with-selector .cards-container").each(function(){
            $(this).find(".item").each(function(i){
                $(this).css({
                    "-webkit-transition-delay": (i * 100) + "ms",
                    "transition-delay": (i * 100) + "ms"
                });
            });
        });

        $(".block-cards-with-selector .nav-btn").on("click touchend", function(e){
           if(e.type == "touchend"){
               $(this).off("click");
           }

           Block_Cards_Selector.change_selector($(this).index());
        });


    },
    change_selector:function(pID){
        Debug.log("CHANGE SELECTOR");
        $(".block-cards-with-selector .nav-btn").each(function(){
            if($(this).index() == pID){
                var _this = $(this);

                setTimeout(function(){
                    _this.addClass("selected");
                }, 200);
            }else{
                $(this).removeClass("selected");
            }
        });
        $(".block-cards-with-selector .cards-container").each(function(){
            if($(this).index() == pID){
                var _this = $(this);

                setTimeout(function(){
                    _this.addClass("selected");
                }, 200);
            }else{
                $(this).removeClass("selected");
            }
        })
        setTimeout(function(){
          Block_Cards_Selector.resize()
        }, 250);
    },
    resize:function(){
        // var _max_height = 0;
        // $('.block-cards-selector .cards-container').each(function(){
        //     _max_height = Math.max(_max_height, $(this).outerHeight());
        // })

        // $(".block-cards-selector .cards-slider").css({height:_max_height});
        var _current_height = $(".block-cards-with-selector .cards-container.selected").outerHeight();
        console.log(_current_height);
        $(".block-cards-with-selector .cards-slider").css({ height: _current_height });
    }
}

$(window).load(function(){
    if($(".block-cards-with-selector").length){
        Block_Cards_Selector.init();
    }
})

;var Block_Chiffres = {

    array_swiper:[],

    init:function(){
        $(window).resize(function(){
            Block_Chiffres.resize();
        });
        Block_Chiffres.resize();
    },
    resize:function(){
        $(".block-chiffres").each(function(){
            var _slides_to_show = 0;
            var _id = $(this).attr("id");
            var el = document.getElementById(_id);
            _slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));

            if(_slides_to_show != 0){
                Block_Chiffres.createSwiper(_id, _slides_to_show);
            }else{
                Block_Chiffres.destroySwiper(_id);
            }
        })
    },
    createSwiper:function(pID, _slides_to_show){

        if(!$("#" + pID + " .slider-container").hasClass("swiper-initialized")){
            var swiper = new Swiper(
                "#" + pID + " .slider-container",
                {
                    speed: 600,
                    loop: false,
                    slidesPerView: "auto",
                    centeredSlides: false,
                    freeMode: false,
                    grabCursor: true,
                    mousewheel: false,
                    slideToClickedSlide: false,
                    touchStartPreventDefault: false,
                    preventClicks: true,
                    spaceBetween:60,
                }
            );

            Block_Chiffres.array_swiper.push({id:pID, swiper:swiper, nb_slides:_slides_to_show});
        }
    },
    destroySwiper:function(pID){
        if($("#" + pID + " .slider-container").hasClass("swiper-initialized")){
            for (var i = 0; i < Block_Chiffres.array_swiper.length; i++){
                if(Block_Chiffres.array_swiper[i].id == pID){
                    Block_Chiffres.array_swiper[i].swiper.destroy();
                    Block_Chiffres.array_swiper.splice(i, 1);
                }
            }
        }

    }
}

$(window).load(function(){
    if($(".block-chiffres").length){
        Block_Chiffres.init();
    }
})
;var Block_Garanties = {
    init:function(){
        $(window).resize(function(){
            Block_Garanties.resize();
        });
        Block_Garanties.resize();
    },
    resize:function(){
        $(".block-garanties").each(function(){
            var _h_header = 0;
            $(this).find(".garantie-header").css({height:"auto"});
            $(this).find(".garantie").each(function(){
                _h_header = Math.max(_h_header, $(this).find(".garantie-header").outerHeight());
            });
            $(this).find(".garantie-header").css({height:_h_header});


            var _h_content = 0;
            $(this).find(".garantie-content").css({height:"auto"});
            $(this).find(".garantie").each(function(){
                _h_content = Math.max(_h_content, $(this).find(".garantie-content").outerHeight());
            });
            $(this).find(".garantie-content").css({height:_h_content});
        })
    }
}

$(window).load(function(){
    if($(".block-garanties").length){
        Block_Garanties.init();
    }
})
;var Block_Scroll = {
    _barre_dragging: false,
    _y_mouse_start: false,
    _y_barre_start: 0,
    _current_slide: -1,
    _swiper_illus: "",
    _swiper_content: "",
    _mobile_first_init: false,
    init: function () {
        $(window).resize(function () {
            Block_Scroll.resize();
        });
        $(window).scroll(function () {
            Block_Scroll.scroll();
        })
        Block_Scroll.resize();
        Block_Scroll.scroll();

        $(".block-scroll .barre").on("mousedown", function (e) {
            $(this).addClass("dragging");
            Block_Scroll._barre_dragging = $(this);
            Block_Scroll._y_barre_start = parseFloat($(this).css("top"));
            Block_Scroll._y_mouse_start = e.clientY;
        });
        $(window).on("mousemove", function (e) {
            if (Block_Scroll._barre_dragging != false) {
                var _current_y = e.clientY;
                Block_Scroll.drag_barre(_current_y - Block_Scroll._y_mouse_start);
            }

        }).on("mouseup", function () {
            if (Block_Scroll._barre_dragging != false) {
                Block_Scroll._barre_dragging = false;
                $(".block-scroll .barre").removeClass("dragging");
            }
        });


        Block_Scroll._swiper_illus = new Swiper(".block-scroll .content.mobile .illustration-swiper", {
            speed: 600,
            loop: false,
            slidesPerView: "auto",
            centeredSlides: false,

            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true
            },
            on: {
                transitionStart: function () {
                    Block_Scroll.change_slide_mobile(this.activeIndex, "illus");
                },
            }
        })
        Block_Scroll._swiper_content = new Swiper(".block-scroll .items-swiper", {
            slidesPerView: 1,
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: false,
                    opacity: 0,
                    translate: ["-10%", 0, 0],
                },
                next: {
                    shadow: false,
                    opacity: 0,
                    translate: ["10%", 0, 0],
                },
            },

            on: {
                transitionStart: function () {
                    Block_Scroll.change_slide_mobile(this.activeIndex, "content");
                },
            }
        });

        Block_Scroll.change_data(0);
    },
    change_slide_mobile: function (pID, pOrigin) {
        if ($(".block-scroll .mobile").css("display") == "flex") {
            if (pOrigin != 'illus') {
                Block_Scroll._swiper_illus.slideTo(pID);
            }
            if (pOrigin != 'content') {
                Block_Scroll._swiper_content.slideTo(pID);
            }
            Block_Scroll.play_svg(pID);

        }
    },
    drag_barre: function (pValue) {

        var _y_dest = Block_Scroll._y_barre_start + pValue;
        var _limit_top = 0;
        var _limit_bottom = Block_Scroll._barre_dragging.parent().height() - Block_Scroll._barre_dragging.height();

        _y_dest = Math.min(_limit_bottom, Math.max(_limit_top, _y_dest));

        var _pourcent = (_y_dest * 100) / _limit_bottom;

        var _parent = Block_Scroll._barre_dragging.closest(".block-scroll");

        var _scroll_start = _parent.offset().top;
        var _scroll_end = _parent.offset().top + _parent.outerHeight();
        var _espace_scroll = _parent.outerHeight() - $(window).outerHeight();


        var _scrollDest = Math.round(_scroll_start + ((_espace_scroll * _pourcent) / 100));
        $("html,body").animate({scrollTop: _scrollDest}, 0);


        Block_Scroll._barre_dragging.css({top: _y_dest + "px"});
    },
    resize: function () {
        Block_Scroll.scroll();
    },
    scroll: function () {

        if ($(".block-scroll .mobile").css("display") == "flex") {
            $(".block-scroll").each(function () {

                console.log("EACH  " + $(this).hasClass("reveal-visible"));

                if ($(this).hasClass("reveal-visible")) {

                    if(Block_Scroll._mobile_first_init == false){
                        console.log("FIRST INIT");
                        Block_Scroll._mobile_first_init = true;
                        Block_Scroll.play_svg(0);
                    }
                }else{
                    if(Block_Scroll._mobile_first_init == true){
                        console.log("LISTEN AGAIN");
                        Block_Scroll._mobile_first_init = false;
                    }
                }
            });

        }


        $(".block-scroll").each(function () {
            if ($(this).hasClass("reveal-visible")) {

                var _current_scroll = $(this).find(".scroller.reveal-visible").index();
                if (_current_scroll != -1) {
                    Block_Scroll.change_data(_current_scroll);
                }
                if (Block_Scroll._barre_dragging == false) {
                    Block_Scroll.move_cursor($(this));
                }
            }
        })
    },
    play_svg: function (pID) {

        console.log("PLAY SVG : " + pID);

        $(".block-scroll .illustration").each(function () {
            $(this).removeClass("prev next current");
            if ($(this).index() == pID) {
                $(this).addClass("current");
                console.log("ILLUSTRATION FOUND : " + $('.illustration.current svg').length);
                if ($('.illustration.current svg').length > 0) {
                    document.querySelectorAll('.illustration.current').forEach(function (item) {
                        item.querySelectorAll("svg").forEach(function(svg){
                            svg.dispatchEvent(new Event("click"));
                        })
                    });
                }

            } else if ($(this).index() < pID) {
                $(this).addClass("prev");
            } else {
                $(this).addClass("next");
            }
        });
    },
    change_data: function (pID) {
        if (pID != Block_Scroll._current_slide) {

            console.log("CHANGE DATA :" + pID);

            Block_Scroll._current_slide = pID;

            Block_Scroll.play_svg(pID);

            $(".block-scroll .items-container").find(".item").each(function () {
                $(this).removeClass("prev next current");
                if ($(this).index() == pID) {
                    $(this).addClass("current");
                    var _y_pos = -1 * ($(this).offset().top - $(this).parent().offset().top);
                    var _middle = $(this).parent().innerHeight() / 2;
                    var h_content = $(this).innerHeight() / 2;

                    _y_pos = (_y_pos + _middle) - h_content;

                    Debug.log("Y Pos = " + _y_pos);

                    $(this).parent().css({
                        "-webkit-transform": "translateY(" + _y_pos + "px)",
                        "transform": "translateY(" + _y_pos + "px)"
                    })

                } else if ($(this).index() < pID) {
                    $(this).addClass("prev");
                } else {
                    $(this).addClass("next");
                }
            });
        }
    },
    move_cursor: function (pTarget) {
        var _espace_mvt = pTarget.find(".barre-scroll-content").height() - pTarget.find(".barre").height();
        var _scroll_begin = Math.round(pTarget.offset().top);
        var _scroll_end = Math.round(pTarget.outerHeight() - $(window).outerHeight());

        var _current_scroll = Math.round($(window).scrollTop() - _scroll_begin);

        var _pourcent = (_current_scroll * 100) / _scroll_end;
        _pourcent = Math.round(_pourcent * 100) / 100;

        var _y_dest = Math.round((_espace_mvt * _pourcent) / 100);

        pTarget.find(".barre").css({top: _y_dest});

    }
}

$(window).load(function () {
    if ($(".block-scroll").length) {
        Block_Scroll.init();
    }
})
;var Block_Slider_Auto = {
	autoplay_speed:15000,
	currentSlide:0,
	max_slide:0,
	inViewport:false,

	init:function(){
		var _carousel_menu = $(".block-slider-auto .engagements-menu");
		var _carousel_content = $(".block-slider-auto .engagements-content");

		Block_Slider_Auto.max_slide = _carousel_content.find(".item").length;

		_carousel_menu.slick({
			arrows:false, 
			dots:false,
			infinite: false,
			variableWidth:true,
			slidesToShow: 6,
			focusOnSelect: true,
			touchThreshold:500,
			asNavFor:_carousel_content
		});

		_carousel_content.slick({
			arrows:false, 
			dots:false,
			infinite: false,
			variableWidth:true,
			slidesToShow: 1,
			focusOnSelect: true,
			touchThreshold:500,
			asNavFor:_carousel_menu
		});

		Block_Slider_Auto.start_growing();

		_carousel_content.on('afterChange', function(event, slick, currentSlide, nextSlide){
			Block_Slider_Auto.currentSlide = currentSlide;
			Block_Slider_Auto.start_growing();
		});

		$(window).scroll(function(){
			Block_Slider_Auto.scroll();
		});
		Block_Slider_Auto.scroll();
	},
	scroll:function(){

		var _obj = $(".block-slider-auto .engagements-reveal");

		var _margin = -100;
		var _pos_top = _obj.offset().top - $(window).outerHeight() + _margin;
		var _pos_bottom = (_obj.offset().top + _obj.outerHeight()) - _margin;
		var _pos_scroll = $(window).scrollTop();

		if((_pos_scroll > _pos_top) && (_pos_scroll < _pos_bottom)){

			if(Block_Slider_Auto.inViewport == false){
				Block_Slider_Auto.inViewport = true;
				var _carousel_content = $(".block-slider-auto .engagements-content");
				/*_carousel_menu.slick('slickGoTo', 1);*/
				_carousel_content[0].slick.slickGoTo(0);
			}
		}else{
			if(Block_Slider_Auto.inViewport == true){
				Block_Slider_Auto.inViewport = false;
			}
		}
	},
	start_growing:function(){
		$(".block-slider-auto").find(".progress-barre").stop().css({width:0});
		$(".block-slider-auto").find(".progress-barre.mobile").stop().animate({
			width:"100%"
		}, Block_Slider_Auto.autoplay_speed);
		$(".block-slider-auto .engagements-menu").find(".slick-current .progress-barre").stop().animate({
			width:"100%"
		}, Block_Slider_Auto.autoplay_speed, function(){

			if(Block_Slider_Auto.currentSlide < (Block_Slider_Auto.max_slide-1)){
				Block_Slider_Auto.currentSlide ++;
			}else{
				Block_Slider_Auto.currentSlide = 0;
			}

			$(".block-slider-auto .engagements-content").slick('slickGoTo', Block_Slider_Auto.currentSlide);
		});
	}
}

$(window).load(function(){
	if($(".block-slider-auto").length){
		Block_Slider_Auto.init();
	}
})
;var Block_Slider_Logo = {

    espace_defilement:0,
    position_defilement:0,
    vitesse_defilement:0.5,

    init:function(){
        $(window).resize(function(){
            Block_Slider_Logo.resize();
        });
        Block_Slider_Logo.resize();

        if(Block_Slider_Logo.espace_defilement != 0) {
            setInterval(function () {
                Block_Slider_Logo.move_logos();
            }, 10);
        }
    },
    resize:function(){
       $(".block-slider-logo .logos-defil").html("");
       var _init_logos = $(".block-slider-logo .logos-init").html();
       Block_Slider_Logo.espace_defilement = $(".block-slider-logo .logos-init").width();

       Debug.log("LENGTH SLIDER LOGO : " + Block_Slider_Logo.espace_defilement );

        if(Block_Slider_Logo.espace_defilement != 0) {
            var _nb_loop = 2 + Math.floor($(window).outerWidth() / Block_Slider_Logo.espace_defilement);

            Debug.log("INIT LOGOS : " + _nb_loop);

            for (var i = 0; i < _nb_loop; i++) {
                $(".block-slider-logo .logos-defil").append(_init_logos);
            }
        }

    },
    move_logos:function(){
        if(Block_Slider_Logo.position_defilement > (Block_Slider_Logo.espace_defilement-Block_Slider_Logo.vitesse_defilement)){
            Block_Slider_Logo.position_defilement = 0;
        }else{
            Block_Slider_Logo.position_defilement += Block_Slider_Logo.vitesse_defilement;
        }

        $(".block-slider-logo .logos-defil").css({left:(-1 * Block_Slider_Logo.position_defilement) + "px"});
    }
}

$(window).load(function(){
    if($(".block-slider-logo").length){
        Block_Slider_Logo.init();
    }
})
;var Block_Slider_Video = {
    init:function(){
        var swiper = new Swiper(".block-slider-video .slider-container", {
            speed: 600,
            loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            freeMode: false,
            grabCursor: true,
            mousewheel: false,
            slideToClickedSlide: false,
            touchStartPreventDefault: false,
            preventClicks: true,
            spaceBetween:30,
        });
    }
}

$(window).load(function(){
    if($(".block-slider-video").length){
     Block_Slider_Video.init();
    }
})
;var Block_Swiper_Testimonials = {
    init:function(){
        Debug.log("BLOCK SWIPER TESTIMONIALS INIT");

        var swiper = new Swiper(".block-slider-testimonials .slider-container", {
            speed: 600,
            loop: false,
            slidesPerView: 1,
            centeredSlides: false,
            freeMode: false,
            grabCursor: true,
            mousewheel: false,
            slideToClickedSlide: false,
            touchStartPreventDefault: false,
            preventClicks: true,
            spaceBetween:30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

    }
}

$(window).load(function(){
    if($(".block-slider-testimonials").length){
        Block_Swiper_Testimonials.init();
    }
})
;var Contact = {
	type_selected:"undefined",

	init:function(){
		
		if($(".rejoindre-mila").length){
			Contact.type_selected = "rejoindre";
		}

		$(".form-item[required] input, .form-item[required] textarea").on("input", function(){
			if($(this).val() != ""){
				$(this).parent().removeClass("required");
			}else{
				$(this).parent().addClass("required");
			}
		});

		$(".custom-radio input").change(function(){
			if($(this).is(":checked")){
				$(".custom-radio").removeClass("required");

				$(".accept-container").addClass("selected");

			}else{
				$(".custom-radio").addClass("required");
				$(".accept-container").removeClass("selected");
			}
		});

		$(".form-line.select .custom-select").find("select").change(function(){
			if($(this).val() == 'placeholder'){
				$(".form-line.select .select-container").addClass("required");
			}else{
				$(".form-line.select .select-container").removeClass("required");				
			}
		});

		$(".contact-selector .button").on("click touchend", function(e){
			if(e.type == "touchend"){
				$(this).off("click");
			}
				

			Contact.switch_to_formulaire($(this).attr('data-type'));

		});



		$(".header-light .btn-prev").on("click touchend", function(e){
			if(e.type == "touchend"){
				$(this).off("click");
			}

			if((Contact.type_selected != "undefined") && ((Contact.type_selected != "rejoindre"))){
				Contact.switch_to_buttons();
			}else{
				window.history.back();
			}

		});

		$(".form-container *[type='submit']").on("click touchend", function(e){
			
			e.preventDefault();
			e.stopPropagation();
			
			if(e.type == "touchend"){
				$(this).off("click");
			}

			var _is_ok = Contact.check_formulaire();
			
			Debug.log("IS FORMULAIRE OK : " + _is_ok);
			
			if(_is_ok){
				$(this).closest(".form-container").submit();
			}
		});


		var hash = window.location.hash;
		
		if(hash != ""){
			Contact.switch_to_formulaire(hash.replace('#', ''))
		}


	},
	check_formulaire:function(){

		var _retour = true;
		
		Debug.log("CHECK FORMULAIRE : " + Contact.type_selected );

		var _current_form = $(".formulaire-container[data-type='" + Contact.type_selected + "']");


		_current_form.find(".form-item[required]").each(function(){

			if( $(this).find("input").val() == ""){
				$(this).addClass("required");
				_retour = false;
			}else{
				$(this).removeClass("required");
			}
		});

		if(_current_form.find(".form-line.select").length){
			if(_current_form.find(".form-item.select").find("select").val() == "placeholder"){
				_retour = false;	
				_current_form.find(".form-item.select").find(".select-container").addClass("required");
			}
		}

		if(_current_form.find(".form-line.textarea").css("display") != 'none'){
			if(_current_form.find(".form-line.textarea").find("textarea").val() == ''){
				_retour = false;
				_current_form.find(".form-line.textarea").find(".form-item").addClass("required");
			}else{
				_current_form.find(".form-line.textarea").find(".form-item").removeClass("required");
			}
		}

		if(_current_form.find(".custom-radio input").is(":checked") == false){
			_retour = false;
			_current_form.find(".custom-radio").addClass("required");
		}else{
			_current_form.find(".custom-radio").removeClass("required");
		}
		
		if(_current_form.find(".files-manager").length){
			if(_current_form.find(".files-manager input").val() == ''){
				_retour = false;
				_current_form.find(".files-manager").addClass("required");
			}else{				
				_current_form.find(".files-manager").removeClass("required");
			}
			
		}
		

		return _retour;
	},
	switch_to_formulaire:function(pValue){
		
		Contact.type_selected = pValue;

		$(".formulaire-container").each(function(){
			if($(this).attr("data-type") == pValue){
				$(this).addClass("visible");
			}else{
				$(this).removeClass("visible");
			}
		});

		if(pValue != "autre"){
			$(".illus-right").addClass("hidden");
			$(".img-1").addClass("hidden");
			$(".img-2").removeClass("hidden");
		}else{
			$(".img-1").removeClass("hidden");
			$(".img-2").addClass("hidden");
		}

		$(".contact-selector").addClass("hidden");
		$(".form-contact").addClass("visible");
	},
	switch_to_buttons:function(){
		Contact.type_selected = "undefined";


		$(".illus-right").removeClass("hidden");

		$(".img-1").removeClass("hidden");
		$(".img-2").addClass("hidden");

		$(".formulaire-container").removeClass("hidden");						
		$(".form-response").removeClass("displayed visible");

		$(".contact-selector").removeClass("hidden");
		$(".form-contact").removeClass("visible");

		$(".form-item[required]").removeClass("required");
		$(".form-item.select").find(".select-container").removeClass("required");
	}
}

$(window).load(function(){
	if($(".block-contact").length){
		Contact.init();
	}
});
var Copy_btn = {
  init: function () {
    $(".copy-btn").click(function (e) {
      var range = document.createRange();
      range.selectNode(document.querySelector(".text-to-copy"));
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();// to deselect
      $('.copy-btn').html('Texte copié');
      setTimeout(function(){
        $('.copy-btn').html('Copier le texte');
      }, 2000);
    });
  }
};
$(window).load(function () {
  if ($(".copy-btn").length) {
    Copy_btn.init();
  }
});

var Donnees_Personnelles = {
	init:function(){
		Debug.log("INIT DONNEES PERSONNELLES");
		Accordeon.clickOn($(".donnees-personnelles .donnees-container").find(".item:first-child"));
	}
}
$(window).load(function(){
	if($(".donnees-personnelles").length){
		Donnees_Personnelles.init();
	}
})
;var Faq_Categories = {
    init:function(){
        Debug.log("BLOCK CATEGORIES INIT");
        $(".block-categories .btn-categorie").on("click touchend", function(e){
            if(e.type == "touchend"){
                $(this).off("click");
            }

            Faq_Categories.change_faq($(this).attr("data-cat"));
        });
        $('.faq-intro .form-search').on('submit', function (ev) {
            ev.preventDefault();
            words = $('#name').val();
            Faq_Categories.search(words);
        });

    },
    change_faq:function(_slug){
        Debug.log("change_faq : " + _slug);

        $(".block-categories .btn-categorie").each(function(){
            if($(this).attr("data-cat") == _slug){
                $(this).addClass("selected");
            }else{
                $(this).removeClass("selected");
            }
        })

        $(".faq-list-container .block-faq-container").each(function(){
            if($(this).attr("data-cat") == _slug){
                $(this).addClass("selected");
                $(this).find('.item').each(function(){
                    $(this).show();
                    $(this).removeClass('show');
                });
                var _hdest = $(this).find(".block-faq").outerHeight() + 100;
                $(this).css({height:_hdest+"px"});

                var _this = $(this);

                setTimeout(function(){
                    var _scrollDest = _this.offset().top;

                    $('html, body').animate({scrollTop:_scrollDest}, 500);
                }, 40);

                setTimeout(function(){
                    _this.css({height:"auto"})
                }, 500)
            }else{
                $(this).removeClass("selected");
                $(this).css({height:0})
            }
        })
    },
    search: function (words){
        $('.searched').html(words);
        words = words.split(' ');
        $('.faq-list-container .block-faq-container[data-cat="all"]').find('.item').each(function (){
            $(this).removeClass('show');
        });
        words.forEach(function(word){
            $('.faq-list-container .block-faq-container[data-cat="all"]').find('.item').each(function(){
                if($(this).find('.title').text().includes('word') || $(this).find('.texte-container').text().includes(word)){
                    $(this).show();
                    $(this).addClass('show');
                }else{
                    if(!$(this).hasClass('show')){
                        $(this).hide();
                    }
                }
            });
        });
        $(".faq-list-container .block-faq-container").each(function() {
            if ($(this).attr("data-cat") == 'all') {
                $(this).addClass("selected");

                var _hdest = $(this).find(".block-faq").outerHeight() + 100;
                $(this).css({height: _hdest + "px"});

                var _this = $(this);

                setTimeout(function () {
                    var _scrollDest = _this.offset().top;

                    $('html, body').animate({scrollTop: _scrollDest}, 500);
                }, 40);

                setTimeout(function () {
                    _this.css({height: "auto"})
                }, 500)
            } else {
                $(this).removeClass("selected");
                $(this).css({height: 0})
            }
        });

    }

}
$(window).load(function(){
    if($(".block-categories").length){
        Faq_Categories.init();
    }
})
;var Header = {
	currentScroll : 0,
	init:function(){
		$(window).scroll(function(){
			Header.scroll();
		});

		Header.scroll();

		$(window).resize(function(){
			Header.resize();
		});

		Header.resize();

		if($(".header .mini-nav-mobile").find(".current-menu-item").length == 0 && $(".header .mini-nav-mobile").find(".current-menu-ancestor").length){
			$(".header .mini-nav-mobile").addClass("no-current-menu-item");
		}

		$(".header .mini-nav-mobile").on("click touchend", function(e) {
			if (e.type == 'touchend') {
				$(this).off("click");
			}
			var _this = $(this);
			setTimeout(function(){
				_this.toggleClass("open");
			}, 100);
		});


		$(".header .btn-mobile").on("click touchend", function(e){
			if(e.type == 'touchend'){
				$(this).off("click");
			}

			$(this).toggleClass("open");			
			$(".header .left").find(".nav-main").toggleClass("open");

		});
		
		if(!$("body").hasClass("home")){
				$(".header .div-middle").find(".logo-desktop").addClass("visible");				
			}
		
	},
	close_submenu:function(){
		$(this).removeClass("open");			
		$(".header .left").find(".nav-main").removeClass("open");
	},
	resize:function(){
		Header.close_submenu();
	},
	scroll:function(){

		if($(window).scrollTop() < 40){
			Header.open_header();
		}else{
			if($(window).scrollTop() > Header.currentScroll){
				Header.close_header();
			}else{
				Header.open_header();
			}
		}

		Header.currentScroll = $(window).scrollTop();

	},
	open_header:function(){
		$(".header").removeClass("closed");

		if($(window).scrollTop() > 40){
			$(".header .div-middle").find(".logo-desktop").addClass("visible");
			$(".header").addClass("shadow-sticky");
		}else{
			if($("body").hasClass("home")){
				$(".header .div-middle").find(".logo-desktop").removeClass("visible");				
			}
			$(".header").removeClass("shadow-sticky");
		}

	},
	close_header:function(){

		if(!$(".header").hasClass("open")){

			$(".header").addClass("closed");
			Header.close_submenu();
		}
	}
}

$(window).load(function(){
	if($(".header").length){
		Header.init();
	}
})
;var Load_More = {

	isLoading:false,

	init:function(){

		$(window).scroll(function(){
			Load_More.scroll();
		});
		Load_More.scroll();


		$(".form-load-more").on("submit", function(e){
			e.stopPropagation();
			e.preventDefault();

			Load_More.isLoading = true;
			
			$(".form-load-more").addClass("loading");

			
			var formData = new FormData(this);

			$.ajax({
				url: ajaxurl,
				type: 'POST',
				data: formData,
				success: function (data) {
					var _data = JSON.parse(data);
					Debug.log("AJAX COMPLETED -> " + _data.message);

					$(".all-articles").append(_data.result.html);
					var _current_page = parseInt($(".form-load-more input[name='page']").val());

					if(_data.result.max_pages <= _current_page){
						// DISPARITION BOUTON
						$(".form-load-more").addClass("hidden");
					}else{

						$(".form-load-more").removeClass("hidden");
						$(".form-load-more input[name='page']").val(_current_page + 1);	
					}

					Load_More.isLoading = false;

				},
				cache: false,
				contentType: false,
				processData: false
			});
			
		});
	},	
	scroll:function(){
		
		if(Load_More.isLoading == false){
			var _scroll_min = $(window).scrollTop() + ($(window).outerHeight());
			Debug.log("SCROLL: " + $(".form-load-more").offset().top + " -- " +_scroll_min);

			if(_scroll_min > $(".form-load-more").offset().top){
				if(!$(".form-load-more").hasClass("hidden")){
					$(".form-load-more").submit();
				}
			}
		}
		
	}
}

$(window).load(function(){
	if($(".form-load-more").length){
		Load_More.init();
	}
});

var Loyers_Details = {

	currentSlide:0,
	timeout_openFirst:0,
	isOpenFirst:false,

	init:function(){

		/*
		$(window).resize(function(){
			Loyers_Details.resize();
		});
		Loyers_Details.resize();
		*/

		Loyers_Details.create_carousel_desktop();
		Loyers_Details.create_carousel_mobile();

		if($(".loyers-details .desktop").css("display") == "block"){

			Loyers_Details.isOpenFirst = false;
		}else{

			clearTimeout(Loyers_Details.timeout_openFirst);
			if(Loyers_Details.isOpenFirst == false){

				Loyers_Details.isOpenFirst = true;

				Loyers_Details.timeout_openFirst = setTimeout(function(){
					Accordeon.clickOn($(".loyers-details .mobile").find(".item:first-child"));
				}, 600);

			}

		}



		$(".loyers-details .slider-menu").find(".button-container").mouseenter(function(){
			if(!$(this).hasClass("slick-current")){
				Loyers_Details.roll_entoure($(this).index(), 'over');
			}
		}).mouseleave(function(){
			if(!$(this).hasClass("slick-current")){
				Loyers_Details.roll_entoure($(this).index(), 'out');
			}
		});

	},
	removeCarousel:function(){
		var _carousel_menu = $(".loyers-details .slider-menu");
		var _carousel_content = $(".loyers-details .slider-contents");

		var _carousel_mobile = $(".loyers-details .slider-mobile");

		if (_carousel_menu.hasClass('slick-initialized')) {
			_carousel_menu.slick('unslick');
		}
		if (_carousel_content.hasClass('slick-initialized')) {
			_carousel_content.slick('unslick');
		}
		if (_carousel_mobile.hasClass('slick-initialized')) {
			_carousel_mobile.slick('unslick');
		}
	},
	create_carousel_desktop:function(){
		var _carousel_menu = $(".loyers-details .slider-menu");
		var _carousel_content = $(".loyers-details .slider-contents");

		_carousel_menu.slick({
			arrows:false, 
			dots:false,
			infinite: false,
			variableWidth:true,
			slidesToShow: 4,
			focusOnSelect: true,
			touchThreshold:500,
			asNavFor:_carousel_content
		});	
		_carousel_content.slick({
			arrows:false, 
			dots:false,
			infinite: false,
			variableWidth:true,
			slidesToShow: 1,
			focusOnSelect: true,
			centerMode: true,
			touchThreshold:500,
			asNavFor:_carousel_menu
		});

		_carousel_content.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			Loyers_Details.currentSlide = nextSlide;

			setTimeout(function(){
				if($(".loyers-details .desktop").css("display") == "block"){
					console.log("1");
					Loyers_Details.change_entoure();
				}
			}, 100);
		});

		setTimeout(function(){
			if($(".loyers-details .desktop").css("display") == "block"){

				
				Loyers_Details.change_entoure();
			}
		}, 100);

	},
	change_entoure:function(){

		if($(".loyers-details .desktop").css("display") != "none"){

			var els = document.querySelectorAll("[svgator-selected]");

			Array.prototype.forEach.call(els, function(el, i) {

				if(el.parentNode.classList.contains('slick-current')){

					if(el.classList.contains('played') == false){
						/*el.classList.add("played");*/
						Loyers_Details.dispatch_click(el);
					}
				}else{
					if(el.classList.contains('played') == true){
						/*el.classList.remove("played");*/
						Loyers_Details.dispatch_click(el);
					}
				}

			});
		}
	},
	roll_entoure:function(pID, pType){

		
		if($(".loyers-details .desktop").css("display") != "none"){

			var els = document.querySelectorAll("[svgator-selected]");

			Array.prototype.forEach.call(els, function(el, i) {
				if(pID == i){

					// ROLLOVER
					if((pType == 'over') && (el.classList.contains('played') == false)){
						Loyers_Details.dispatch_click(el);
					}
					// ROLLOUT
					if((pType == 'out') && (el.classList.contains('played') == true)){
						Loyers_Details.dispatch_click(el);
					}
				}else{
					/*
					
					if((pType == 'over') && (el.classList.contains('played') == true)){
						Debug.log("REMOVE ENTOURE : " + i);
						Loyers_Details.dispatch_click(el);
					}

					if(pType == 'out'){
						if(el.parentElement.classList.contains('slick-current') == true){
							
							if(el.classList.contains('played') == false){
								Debug.log("ADD ENTOURE SELECTED : " + i);
								Loyers_Details.dispatch_click(el);	
							}
						}
					}
					*/
				}

			});
		}

	},
	dispatch_click:function(pTarget){

		var _svgs = pTarget.getElementsByTagName("svg");
		var _isObject = pTarget.getElementsByTagName("object")[0];

		if(typeof _isObject == "undefined"){	
			
			Array.prototype.forEach.call(_svgs, function(_svg) {
				
				pTarget.classList.toggle("played");
				_svg.dispatchEvent(new Event("click"));
			});
		}else{
			if(pTarget.getElementsByTagName("object")[0].getSVGDocument() != null){

				var _svgs_2 = pTarget.getElementsByTagName("object")[0].getSVGDocument().getElementsByTagName("svg")[0];

				if(typeof _svgs_2 != "undefined"){

					pTarget.classList.toggle("played");
					_svgs_2.dispatchEvent(new Event("click"));
				}else{
					Debug.log("SVG_2 IS UNDEFINED");
					
					setTimeout(function(){
						Loyers_Details.dispatch_click(pTarget);
					}, 100);
				}
			}else{
				Debug.log("SVG NON TROUVE");
			}
		}
	},
	create_carousel_mobile:function(){
		var _carousel_mobile = $(".loyers-details .slider-mobile");


		var _slides_to_show = 1;
		var els = document.querySelectorAll(".slider-mobile");

		Array.prototype.forEach.call(els, function(el) {
			//Debug.log("SLIDES TO SHOW : " + el + " => " + parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide")));

			_slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));

		});


		var _center_mode = false;

		if(_slides_to_show == 1){
			_center_mode = true;
		}

		_carousel_mobile.slick({
			arrows:false, 
			dots:true,
			infinite: false,
			variableWidth:true,
			centerMode:_center_mode,
			slidesToShow: _slides_to_show,
			focusOnSelect: true,
			touchThreshold:500
		});	
	},
	resize:function(){
		Loyers_Details.create_carousel_desktop();
		/*Loyers_Details.removeCarousel();

		if($(".loyers-details .desktop").css("display") == "block"){

			var els = document.querySelectorAll("[svgator-selected]");

			Array.prototype.forEach.call(els, function(el, i) {
				if(el.classList.contains('played') == true){
					Debug.log("RESIZE : REMOVE CURRENT PLAYED : " + i);

					Loyers_Details.dispatch_click(el);
				}

			}	);



			Loyers_Details.create_carousel_desktop();
			Loyers_Details.isOpenFirst = false;
		}else{
			Loyers_Details.create_carousel_mobile();

			clearTimeout(Loyers_Details.timeout_openFirst);
			if(Loyers_Details.isOpenFirst == false){

				Loyers_Details.isOpenFirst = true;

				Loyers_Details.timeout_openFirst = setTimeout(function(){
					Accordeon.clickOn($(".loyers-details .mobile").find(".item:first-child"));
				}, 600);

			}

		}
		*/
	}
}

$(window).load(function(){
	if($(".loyers-details").length){
		Loyers_Details.init();
	}
})
;var Loyers_Eligibilite = {
	init:function(){
		$(window).resize(function(){
			Loyers_Eligibilite.resize();	
		});

		Loyers_Eligibilite.resize();
	},
	resize:function(){
		var _carousel = $(".product-eligibilite .carousel-eligibilite");

		if (_carousel.hasClass('slick-initialized')) {
			_carousel.slick('unslick');
		}

		//var _slides_to_show = parseInt($("[slider-3-columns]").css("padding-top"));

		var _slides_to_show = 1;
		var els = document.querySelectorAll(".carousel-eligibilite");

		Array.prototype.forEach.call(els, function(el) {
			//Debug.log("SLIDES TO SHOW : " + el + " => " + parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide")));
			
			_slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));
			
		});

		

		_carousel.slick({
			arrows:false, 
			dots:true,
			infinite: false,
			variableWidth:true,
			slidesToShow: _slides_to_show,
			focusOnSelect: true,
			touchThreshold:500
		});	
	}
}
$(window).load(function(){
	if($(".product-eligibilite").length){
		Loyers_Eligibilite.init();
	}
});
var Presse = {
  init: function () {
    console.log('YOOOOO');
    $(".articles-grid").infiniteScroll({
      path: ".next-link",
      append: ".tease-presse",
      hideNav: ".pagination-block",
      button: ".btn-voir-plus",
      scrollThreshold: false,
      status: ".page-load-status",
      debug: true,
    });
  },
};

$(window).load(function () {
  if ($(".block-presse").length) {
    Presse.init();
  }
});

var Projet_Primes = {
	init:function(){
		$(window).resize(function(){
			Projet_Primes.resize();
		});
		
		Projet_Primes.resize();
	},
	create_carousel:function(){
		
		
		var _carousel = $(".product-prime .list-primes");
		
		var _slides_to_show = 1;
		var els = document.querySelectorAll(".list-primes");

		Array.prototype.forEach.call(els, function(el) {
			//Debug.log("SLIDES TO SHOW : " + el + " => " + parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide")));
			
			_slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));
			
		});

		

		_carousel.slick({
			arrows:false, 
			dots:true,
			infinite: false,
			variableWidth:true,
			slidesToShow: _slides_to_show,
			slidesToScroll:2,
			focusOnSelect: true,
			touchThreshold:500
		});	
		
		
	},
	delete_carousel:function(){
		var _carousel = $(".product-prime .list-primes");

		if (_carousel.hasClass('slick-initialized')) {
			_carousel.slick('unslick');
		}

	},
	resize:function(){
		Projet_Primes.delete_carousel();
		Projet_Primes.create_carousel();
		
		 $(".product-prime .slick-track").css({transform:"translate3d(0, 0, 0)"});
	}
}

$(window).load(function(){
	if($(".product-prime").length){
		Projet_Primes.init();
	}
})
;var Slider_3_columns = {
	init:function(){
		Debug.log("__ Slider 3 columns init __");

		$(window).resize(function(){
			Slider_3_columns.resize();	
		});

		Slider_3_columns.resize();


	},
	resize:function(){

		var _carousel = $("[slider-3-columns] .slick-container");

		if (_carousel.hasClass('slick-initialized')) {
			_carousel.slick('unslick');
		}

		//var _slides_to_show = parseInt($("[slider-3-columns]").css("padding-top"));

		var _slides_to_show = 1;
		var els = document.querySelectorAll("[slider-3-columns]");

		Array.prototype.forEach.call(els, function(el) {
			//Debug.log("SLIDES TO SHOW : " + el + " => " + parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide")));
			
			_slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));
			
		});

		

		_carousel.slick({
			arrows:true, 
			dots:true,
			infinite: false,
			variableWidth:true,
			slidesToShow: _slides_to_show,
			focusOnSelect: true,
			touchThreshold:500,
			prevArrow:_carousel.parent().find(".arrow.prev"),
			nextArrow:_carousel.parent().find(".arrow.next"),
		});	
	}
}

$(window).load(function(){
	if($("[slider-3-columns]").length){
		Slider_3_columns.init();
	}
})
;var Slider_Contact = {
	init:function(){
		$(window).resize(function(){
			Slider_Contact.resize();
		});

		Slider_Contact.resize();
	},

	resize:function(){

		var _carousel = $(".block-contact .arguments-list");

		if (_carousel.hasClass('slick-initialized')) {
			_carousel.slick('unslick');
		}

		//var _slides_to_show = parseInt($("[slider-3-columns]").css("padding-top"));

		var _slides_to_show = 1;
		var els = document.querySelectorAll(".arguments-list");

		Array.prototype.forEach.call(els, function(el) {
			_slides_to_show = parseInt( window.getComputedStyle(el).getPropertyValue("--nbslide"));			
		});

		Debug.log("SLIDES TO SHOW IN CONTACT :" + _slides_to_show);

		if(_slides_to_show != 0){

			_carousel.slick({
				arrows:false, 
				dots:true,
				infinite: false,
				variableWidth:true,
				slidesToShow: _slides_to_show,
				focusOnSelect: true,
				touchThreshold:500,
			});	
		}
	}
}

$(window).load(function(){
	if($(".block-contact").length){
		Slider_Contact.init();
	}
})
;var TextWithLogo = {
	init:function(){
		$("[TextWithLogo]").each(function(){
			
			var _img = $(".logo-animated").html();
			var _txt = $(this).html().split("Mila");
			var _txt_formated = [];
			
			for(var i = 0; i < _txt.length; i++){
				_txt_formated.push("<span class='txt'>" + _txt[i]+"</span>");
			}
			var _txt_final = _txt_formated.join(_img);
			
			$(this).html(_txt_final);
			
		});
	}
}
$(window).load(function(){
	if($("[TextWithLogo]").length){
		TextWithLogo.init();
	}
});
var Menu = {
  init: function () {
    Debug.log("___ MENU INIT ___");

    $(window).resize(function () {
      Menu.resize();
    });
    Menu.resize();

    $(".header .burger").on("click touchend", function (e) {
      if (e.type == "touchend") {
        $(this).off("click");
      }
      setTimeout(function(){
        Menu.open_menu();
      }, 40);
    });
    $(".header .submenu-link").find("a").on("click touchend", function(e){
      Debug.log("CLICK ON ME : " + $(this).attr("href"));
      window.location.replace($(this).attr("href"));
    })
    $(".header .menu-container.level-2").find("a").on("click touchend", function(e){
      Debug.log("CLICK ON ME : " + $(this).attr("href"));
      window.location.replace($(this).attr("href"));
    })
    $(".header .overlay").on("click touchend", function (e) {
      if (e.type == "touchend") {
        $(this).off("click");
      }

      setTimeout(function(){
        Menu.open_menu();
      }, 40);
    });

    $(".header .bt-close").on("click touchend", function (e) {
      if (e.type == "touchend") {
        $(this).off("click");
      }
      if ($('.header').hasClass('submenu-open')) {

        setTimeout(function(){

          Menu.close_submenu();
        }, 40);
      } else {

        setTimeout(function(){
          Menu.close_menu();
        }, 40);
      }
    });

    $(".header .menu-container.level-0")
      .find(".menu-item-has-children")
      .on("click touchend", function (e) {

        if($(".header .burger").css("display") != "none"){
          console.log("PREVENT DEFAULT WITH CHILDREN");
          e.preventDefault();
        }

        if (e.type == "touchend") {
          $(this).off("click");
        }

        Menu.open_submenu($(this));
      });

    $(".help_menu_link a").on("click touchend", function(e){
      if(e.type == "touchend"){
        $(this).off("click");
      }
      console.log("CLICK BTN LINK : " + $(this).attr("href"));
      window.location.href = $(this).attr("href");
    })
  },
  open_menu: function () {
    Debug.log("OPEN MENU");
    $("html").addClass("menu-open");
    $("body").addClass("no-scroll");
    $(".header").addClass("open");
  },
  close_menu: function () {
    Debug.log("CLOSE MENU");
    Menu.close_submenu();
    $("html").removeClass("menu-open");
    $("body").removeClass("no-scroll");
    $(".header").removeClass("open");
  },
  open_submenu: function (target) {
    $(".header").addClass("submenu-open");
    target.find(".menu-container.level-1").addClass("open");
    $(".submenu-mobile-header").addClass("visible");
    $(".menu-mobile-header > .bt-close").addClass("invisible");

    if (target.find(".menu-container.level-1").find('.menu-link').length) {
      var text = target.find(".menu-container.level-1").find(".menu-link-title").html();
      var url = target.find(".menu-container.level-1").find(".menu-link-url").html();
      $(".submenu-header-link").addClass("visible");
      Menu.change_link_header(text, url);
    }
  },
  close_submenu: function () {
    $(".header").removeClass("submenu-open");
    $(".menu-container.level-1").removeClass("open");
    $(".submenu-mobile-header").removeClass("visible");
    $(".menu-mobile-header > .bt-close").removeClass("invisible");
    $('.submenu-header-link').removeClass("visible");
    Menu.change_link_header('','');
  },
  change_link_header: function (text, url) {
    $(".submenu-header-link a .text").text(text);
    $(".submenu-header-link a").attr("href", url);
  },
  resize: function () {
    /*$("html").removeClass("menu-open");
		$("body").removeClass("no-scroll");
		$(".header").removeClass("open");*/
  },
};

var Accordeon = {

	timeout_scroll:0,
	array_dest:[],
	decal_scroll:70,
	hasDragged : false,
	h_contact : 200,

	init:function(){

		Debug.log("__________ Accordeon INIT _____________");


		$(window).resize(function(){
			Accordeon.resize();
		});

		setTimeout(function(){
			Accordeon.resize();

			$("[accordeon-container] .title").on("touchmove", function(){
				Accordeon.hasDragged = true;				
			});
			$("[accordeon-container] .title").on("click touchend", function(e){
				if(e.type == "touchend"){
					$(this).off("click");
				}
				if(Accordeon.hasDragged == false){
					Accordeon.clickOn($(this).parent());
				}

				Accordeon.hasDragged = false;
			});
			$("[accordeon-container] .smiley.happy").on("click touchend", function(e){
				if(e.type == "touchend"){
					$(this).off("click");
				}
				
				$(this).addClass("thumb");

				var _container = $(this).parent().parent().parent().parent();

				if(_container.find(".contact").hasClass("visible")){

					var _current_h = parseInt(_container.css("height"));

					_container.css({height:_current_h - Accordeon.h_contact});	
					_container.find(".contact").removeClass("visible");

				}

			});

			$("[accordeon-container] .smiley.sad").on("click touchend", function(e){
				if(e.type == "touchend"){
					$(this).off("click");
				}
				$(this).parent().find(".happy").addClass("hidden");
				var _container = $(this).closest(".texte-container");

				if(!_container.find(".contact").hasClass("visible")){

					_container.find(".contact").addClass("visible");

					var _current_h = parseInt(_container.css("height"));


					_container.css({height:_current_h + Accordeon.h_contact});	
				}


			});

		}, 500);




	},
	resize:function(){
		Accordeon.array_dest = [];
		/* MEMORISE LES POSITIONS POUR SCROLL DEST SI BESOIN	*/
		$("[accordeon-scroll] .item").each(function(i){

			$(this).find(".texte-container").addClass("no-anime");
			Accordeon.close($(this));

			/*Debug.log("PUSH : "+ i+ " ==> Position : " + Math.round($(this).position().top) + "  // offset : " + + $(this).offset().top);*/
			Accordeon.array_dest.push({id:i, _y:Math.round($(this).offset().top - Accordeon.decal_scroll)});

			$(this).attr({"data-id":i});

			$(this).find(".texte-container").removeClass("no-anime");
		});
	},
	clickOn:function(pTarget){
		pTarget.parent().find(".item").each(function(){
			if($(this).index() == pTarget.index()){

				if($(this).hasClass("open")){
					Accordeon.close($(this));	
				}else{
					Accordeon.open($(this));	
				}

			}else{
				Accordeon.close($(this));
			}
		});

	},
	open:function(pTarget){

		clearTimeout(Accordeon.timeout_scroll);

		/*Debug.log("OPEN ACCORDEON : has to scroll : " + $("[accordeon-container]").is("[accordeon-scroll]"));*/

		if(pTarget.parent().is("[accordeon-scroll]")){

			for(var i = 0; i < Accordeon.array_dest.length; i++){

				if(Accordeon.array_dest[i].id == pTarget.attr("data-id")){				
					var _scroll_dest = Accordeon.array_dest[i]._y;
					$('html, body').animate({scrollTop:_scroll_dest}, 400);
				}
			}
		}

		pTarget.addClass('open');
		var _h_dest = pTarget.find(".texte").outerHeight();	
		pTarget.find(".texte-container").css({height:_h_dest});

		Accordeon.timeout_scroll = setTimeout(function(){
			$("[accordeon-container]").each(function(){

				if(Math.abs( $(this).find(".item.open .texte-container").outerHeight() - $(this).find(".item.open .texte").outerHeight()) > 5){
					$(this).find(".item.open").addClass("scroll");
				}
			});

		}, 500);
	},
	close:function(pTarget){

		//*clearTimeout(Accordeon.timeout_scroll);*/

		pTarget.removeClass('open scroll');
		pTarget.find(".texte-container").css({height:0});
	}
}


$(document).ready(function(){
	if($("[accordeon-container]").length){
		Accordeon.init();
	}
});
var FilesManager = {
	text:"",
	nb_additional_files : $('.autre').length,

	init:function(){

		/*Debug.log("_____FILES MANAGER INIT_____");*/
		FilesManager.text = $(".files-manager .add-file .bt-text").html();
		FilesManager.create_newFile(FilesManager.text, false);

		$(".files-manager .add-file").on("click touchend", function(e){
			if(e.type == "touchend"){
				$(this).off("click");
			}
			FilesManager.create_newFile("Parcourir", true);
		});

		// OUVERTURE FORMULAIRE WHEN CLICK BT MODIFIER
		$(".btn-modifier").on("click touchend", function(e){
			if(e.type == "touchend"){
				$(this).off("click");
			}
			$(".account-container .btn-modifier").addClass("open");
			$(".account-container .modif-infos").addClass("open");	
		});


		// FERMETURE FORMULAIRE WHEN CLICK ANNULER
		$(".bt-annuler").on("click touchend", function(e){
			if(e.type == "touchend"){
				$(this).off("click");
			}
			$(".account-container .btn-modifier").removeClass("open");
			$(".account-container .modif-infos").removeClass("open");	

			//SCROLL BACK TO TOP
			$('html, body').animate( { scrollTop:0}, 800 );
		});
	},

	create_newFile: function(pTitle, pDynamic){
		Debug.log("CREATE NEW FILE UPLOAD");

		$(".add-file").addClass("hidden");

		FilesManager.nb_additional_files ++;
		var _newFile = '<div class="form-item autre-'+ FilesManager.nb_additional_files +'"><input type="file" name="file-autre-'+ FilesManager.nb_additional_files +'" id="file-autre-'+ FilesManager.nb_additional_files +'" class="inputfile" /><label class="file-autre-'+ FilesManager.nb_additional_files +'-name" for="file-autre-'+ FilesManager.nb_additional_files +'">' + pTitle + '</label><div class="bt-close"></div></div>';

		$(".form-items.files").append(_newFile);
		$('.autre-'+ FilesManager.nb_additional_files).css({opacity:0}).animate({opacity:1}, 1000);

		window['file-'+FilesManager.nb_additional_files] = new InputFileManager('autre-'+ FilesManager.nb_additional_files, pDynamic);

	}, 
	removeFile:function(pTarget){
		$("." + pTarget).remove();
	}
}

function InputFileManager(pTarget, dynamic){
	var _isDynamic = dynamic;
	var _name = pTarget;
	var _input = $("#file-" + pTarget);
	var _label = $('.file-'+pTarget+'-name');

	var noFile_text = _label.html();

	/*Debug.log("NEW INPUT FILE MANAGER : " + pTarget);*/

	_input.change(function() {

		if(_input[0].files[0]){

			$(this).addClass("filled");
			$(this).parent().addClass("filled");
			$(this).parent().find(".bt-close").addClass("filled");
			_label.text(_input[0].files[0].name);
			
			$(this).parent().parent().parent().removeClass("required");

			$(".add-file").removeClass("hidden");

			/*FilesManager.create_newFile(FilesManager.text, true);*/

		}else{
			// NO FILES

			_label.text(noFile_text);

			setTimeout(function(){
				$(this).removeClass("filled");
				$(this).parent().removeClass("filled");
				$(this).parent().find(".bt-close").removeClass("filled");
			}, 40);

		}
	});

	$(".form-item." + _name + " .bt-close").on("click touchend", function(e){
		if(e.type=="touchend"){
			$(this).off("click");
		}

		/*Debug.log("REMOVE FILE : " + $(".files-manager .form-items.files .form-item").length);*/


		if(_input[0].files[0]){

			_input.val('');

			// NO FILES
			setTimeout(function(){
				_input.removeClass("filled");
				_input.parent().removeClass("filled");
				_input.parent().find(".bt-close").removeClass("filled");
				_label.text(noFile_text);
			}, 40);

			if((_isDynamic) || ($(".files-manager .form-items.files .form-item").length > 1)){
				FilesManager.removeFile(_name);
			}
		}
	});

}



$(window).load(function(){
	if($(".files-manager").length){
		FilesManager.init();
	}
});
var Form = {
	init: function () {
		this.sendForm();

		$("input.opacity-filled").blur(function(){
			if( !$(this).val()){
				$(this).removeClass("filled");
			}else{
				$(this).addClass("filled");
			}
		});

	},
	sendForm: function(){
		$('.form-ajax').each(function (i, elt) {
			$(elt).on('submit', function(ev){

				ev.preventDefault();
				var formData = new FormData(this);

				$.ajax({
					url: ajaxurl,
					type: 'POST',
					data: formData,
					success: function (data) {
						var _data = JSON.parse(data);
						$(".form-response .text").html(_data.message);
						window.scrollTo(0, 0);
						$(".formulaire-container").addClass("hidden");
						$(".form-response").addClass("displayed");
						$(".illus-right").removeClass("hidden");
						$(".rejoindre-container").addClass("response");
						$(".img-1").removeClass("hidden");
						$(".img-2").addClass("hidden");

						setTimeout(function () {
							$(".form-response").addClass("visible");
						}, 40);

					},
					cache: false,
					contentType: false,
					processData: false
				});

			});
		});
	},
};
$(window).load(function(){
	if($(".form-ajax").length){
		Form.init();
	}
});
var FullHeight = {
	init:function(){
		$(window).resize(function(){
			FullHeight.resize();
		});
		FullHeight.resize();
	},
	resize:function(){
		var vh = $(window).innerHeight() * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}
;var HeaderVariable = {


	mvtEnCours:false,
	intervalMvt:0,
	attenuation:4,
	amplitude_scroll:500,

	currentSize:100,
	sizeDest:0,


	init:function(){
		$(window).scroll(function(){
			HeaderVariable.defineHeaderSize($(window).scrollTop());
		});

		HeaderVariable.defineHeaderSize($(window).scrollTop());

	},

	defineHeaderSize:function($val){

		//console.log("DEFINE HEADER : " + $val);

		HeaderVariable.sizeDest = Math.min(100, ($val / HeaderVariable.amplitude_scroll) * 100);

		if(HeaderVariable.mvtEnCours == false){
			HeaderVariable.mvtEnCours = true;
			HeaderVariable.attenuationMouvement();
		}

	}, 
	attenuationMouvement:function(){
		var _size_temp = Math.round((HeaderVariable.currentSize + (HeaderVariable.sizeDest - HeaderVariable.currentSize) / HeaderVariable.attenuation)*100)/100;
		//console.log("Attenuation mouvement Scroll : current = " + HeaderVariable.currentSize + " -> dest = " + HeaderVariable.sizeDest + "   / temp = " + _size_temp);


		if(Math.abs(_size_temp - HeaderVariable.sizeDest) > 1){
			HeaderVariable.change_headerSize(_size_temp);

			clearTimeout(HeaderVariable.intervalMvt);			
			HeaderVariable.intervalMvt = setTimeout(function(){
				HeaderVariable.attenuationMouvement();
			}, 20);

		}else{

			clearTimeout(HeaderVariable.intervalMvt);
			HeaderVariable.change_headerSize(HeaderVariable.sizeDest);
			HeaderVariable.mvtEnCours = false;
		}

	},
	change_headerSize:function($val){

		HeaderVariable.currentSize = $val;	

		$(".header-variable").each(function(){

			var _property = $(this).attr("data-prop");
			var _min = parseInt($(this).attr("data-min"));
			var _max = parseInt($(this).attr("data-max") );
			var _temp =  Math.round((_min + (($val/100) * (_max - _min)))*100)/100;

			var _mouvement = true;
			
			if(_mouvement == true){
				switch(_property){
					case "height":
						$(this).css({height:_temp});
						break;
					case "opacity":

						$(this).css({opacity:_temp});
						break;
					case "font-size":
						$(this).css({"font-size":_temp+"px"});
						break;
					case "line-height":
						$(this).css({"line-height":_temp+"px"});
						break;
					case "padding-h":

						$(this).css({"padding-top":_temp+"px", "padding-bottom":_temp+"px"});
						break;
					case "top":

						$(this).css({top:_temp+"px"});
						break;
												}
			}


			if($val != 0){
				$(".header").addClass("shadow");
			}else{
				$(".header").removeClass("shadow");
			}

		});

	}	
}

$(document).ready(function(){
	if($(".header-variable").length){
		HeaderVariable.init();
	}
})
;var Label_Anime = {
	init:function(){
		Debug.log("INPUT WITH LABEL INIT");
		$('input, textarea').focus(function(){
			$(this).parent().addClass('focused');
		});

		$('input, textarea').blur(function(){
			var inputValue = $(this).val();
			if ( inputValue == "" ) {
				$(this).removeClass('filled');
				$(this).parent().removeClass('focused');  
			} else {
				$(this).addClass('filled');
			}
		})  
	}
}

$(window).load(function(){
	if($("input, textarea").length){
		Label_Anime.init();
	}
})
;function MovingObject(pTarget){
	var _target = pTarget;
	setTimeout(function(){
		move();	
	}, Math.random() * 4000);
	
	
	function move(){
		
		var _screen_size = Math.min($(window).innerWidth(), $(window).innerHeight());
		var _amp_x = _screen_size / 20;
		var _amp_y = _screen_size / 10;
		var _delai_min = 2000;
		var _delai_max = 4000;

		var _xDest = Math.round((Math.random()*_amp_x) - (_amp_x /2));
		var _yDest = Math.round((Math.random()*_amp_y) - (_amp_y /2));
		
		var _delai = Math.round(_delai_min + (Math.random() * (_delai_max - _delai_min)));
		
		_target.css({
			
			"-webkit-transition":"all " + _delai + "ms ease-in-out",
			"_moz-transition":"all " + _delai + "ms ease-in-out",
			"-o-transition":"all " + _delai + "ms ease-in-out",
			transition:"all " + _delai + "ms ease-in-out",
			"-webkit-transform":"translateX("+ _xDest + "px) translateY("+_yDest+"px)",
			"_moz-transform":"translateX("+ _xDest + "px) translateY("+_yDest+"px)",
			"-o-transform":"translateX("+ _xDest + "px) translateY("+_yDest+"px)",
			transform:"translateX("+ _xDest + "px) translateY("+_yDest+"px)",
		});
		
		
		
		setTimeout(function(){
			move();
		}, _delai);
	}
}

$(window).load(function(){
	if($("[moving-object]").length){
		$("[moving-object]").each(function(){
			var _movingObj = new MovingObject($(this));
		})
	}
})
;var PageTransition = {

	init: function(){
		
		//console.log("PAGE TRANSITION INIT");

		$(window).bind('beforeunload', function(){
			//console.log('_debug_ : hide body');
			$(".page-transition").removeClass("animated").addClass("hidden").delay("40").removeClass("hidden").addClass("animated visible");
		});

		$(window).on('load', function(){
			Debug.log('_debug_ : hide body');
			$(".page-transition").addClass("animated hidden").removeClass("visible");
		});
		
		/* A AMELIORER, CAS DE FIREFOX QUI LANCE LE LOAD AVANT LE READY */
		
		setTimeout(function(){
			$(".page-transition").addClass("animated hidden").removeClass("visible");
		}, 1000);
	},
}

$(document).ready(function(){
	Debug.log("PAGE TRANSITION READY");
	PageTransition.init();
})

;var ResponsiveTable = {
	init:function(){
		
		$(".wp-block-table").each(function(){
			
			var _table = $(this);
			
			_table.find("thead th").each(function(){
				var _col_id = $(this).index();
				var _col_name = $(this).html();
				
				_table.find("tbody td").each(function(){
					if($(this).index() == _col_id){
						$(this).attr("data-label", _col_name);
					}
				})
			}) 
		});

	}
}

$(window).load(function(){
	if($(".wp-block-table").length){
		ResponsiveTable.init();
	}
})
;var Reveals = {

    init: function () {
        $(window).scroll(function () {
            Reveals.scroll();
        });

        $("[init-reveal]").addClass("reveal-top");

        setTimeout(function () {
            $("[init-reveal]").each(function () {
                var _this = $(this);
                if ($(this).attr("data-delay") != undefined) {
                    setTimeout(function () {
                        _this.removeClass("reveal-top").addClass("reveal-visible");
                    }, parseFloat(_this.attr("data-delay")) * 1000);
                } else {
                    $(this).removeClass("reveal-top").addClass("reveal-visible");
                }
            });

        }, 100);

        setTimeout(function () {
            Reveals.scroll();
        }, 40);

    },

    scroll: function () {
        $('[scroll-reveal]').each(function (i, elt) {

            var _margin_b = 0.1;
            var _margin_t = 0.1;

            if ($(this).attr("data-bottom")) {
                _margin_b = parseFloat($(this).attr("data-bottom"));
            }

            if ($(this).attr("data-top")) {
                _margin_t = parseFloat($(this).attr("data-top"));
            }

            var _margin_bottom = $(window).outerHeight() * _margin_b;
            var _margin_top = $(window).outerHeight() * _margin_t;

            var _pos_top = $(this).offset().top - $(window).height() + _margin_bottom;
            var _pos_bottom = ($(this).offset().top + $(this).height()) - _margin_top;
            var _pos_scroll = $(window).scrollTop();


            if (_pos_scroll > _pos_top) {
                if (_pos_scroll < _pos_bottom) {

                    var _delay = 0;
                    var attr = $(this).attr('data-delay');

                    if (typeof attr !== 'undefined' && attr !== false) {
                        _delay = parseFloat($(this).attr('data-delay'));
                    }

                    Reveals.reveal_element($(this), _delay);

                } else {
                    $(this).removeClass("reveal-top reveal-visible").addClass("reveal-bottom");
                }
            } else {
                $(this).removeClass("reveal-visible reveal-bottom").addClass("reveal-top");
            }

        });
    },
    reveal_element: function (target, delay) {
        setTimeout(function () {

            target.removeClass("reveal-bottom reveal-top").addClass("reveal-visible");


            if (target.find("[svgator-player]").length) {
                target.find("[svgator-player]").each(function () {
                    Reveals.play_svg($(this).find("svg").attr("id"));
                });
            }

            if (!target.hasClass("keep-reveal")) {
                target.removeAttr('scroll-reveal');
            }
        }, delay);
    },
    play_svg: function (pID) {
        var _id = pID;

        var element = document.getElementById(_id);
        var player = element ? element.svgatorPlayer : {};

        if (player.play) {
            player.play();
        }
    }
}

$(window).load(function () {
   Reveals.init();
});

var SVGator_Reveals = {
	init:function(){
		$(window).scroll(function(){
			SVGator_Reveals.scroll();
		})

		SVGator_Reveals.scroll();

	},
	scroll:function(){
		var _min = window.scrollY + (0.8 * window.innerHeight);
		var _max = window.scrollY - (0.2 * window.innerHeight);

		var els = document.querySelectorAll("[svgator-reveal]");

		Array.prototype.forEach.call(els, function(el) {

			if(getComputedStyle(el).getPropertyValue("display") != 'none'){

				var topPos = el.getBoundingClientRect().top + window.scrollY;

				if((topPos < _min) && (topPos > _max)){
					if(!el.classList.contains('played')) {
						el.classList.add("played");
						var _svgs = el.getElementsByTagName("svg");
						var _isObject = el.getElementsByTagName("object")[0];

						if(typeof _isObject == "undefined"){
							Array.prototype.forEach.call(_svgs, function(_svg) {
								_svg.dispatchEvent(new Event("click"));
							});
						}else{
							
							var _svgs_2 = el.getElementsByTagName("object")[0].getSVGDocument().getElementsByTagName("svg")[0];
							_svgs_2.dispatchEvent(new Event("click"));
						}

						if(el.classList.contains("svgator-reveal-once")){
							el.classList.remove("svgator-reveal-once");
							el.removeAttribute("svgator-reveal");
						}

					}
				}else{
					if(el.classList.contains('played')) {
						el.classList.remove("played");
						var _svgs = el.getElementsByTagName("svg");					
						var _isObject = el.getElementsByTagName("object")[0];

						if(typeof _isObject == "undefined"){
							Array.prototype.forEach.call(_svgs, function(_svg) {
								_svg.dispatchEvent(new Event("click"));
							});
						}else{
							var _svgs_2 = el.getElementsByTagName("object")[0].getSVGDocument().getElementsByTagName("svg")[0];
							_svgs_2.dispatchEvent(new Event("click"));
						}
					}
				}

			}


		});
	}
}
var SVGator_Reveals_Load = {
	init:function(){

		var els = document.querySelectorAll("[svgator-reveal-load]");


		Array.prototype.forEach.call(els, function(el) {
			el.classList.add("played");
			var _svgs = el.getElementsByTagName("svg");
			var _isObject = el.getElementsByTagName("object")[0];

			if(typeof _isObject == "undefined"){
				Array.prototype.forEach.call(_svgs, function(_svg) {
					_svg.dispatchEvent(new Event("click"));
				});

			}else{
				var _svgs_2 = el.getElementsByTagName("object")[0].getSVGDocument().getElementsByTagName("svg")[0];
				_svgs_2.dispatchEvent(new Event("click"));
			}
		});


	}
}
$(window).load(function(){
	if($("[svgator-reveal]").length){
		setTimeout(function(){
			SVGator_Reveals.init();
		}, 500);
	}
	if($("[svgator-reveal-load]").length){
		setTimeout(function(){
			SVGator_Reveals_Load.init();
		}, 500);
	}
});
$(document).ready(function(){
	
	$("a[href*='#']:not([href='#'])").click(function() {
		
		var _decal = -80;
		
		if ( location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")	) {
			var anchor = $(this.hash);
			anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
			if ( anchor.length ) {
				$("html, body").animate( { scrollTop: anchor.offset().top + _decal }, 600);
			}
		}
	});
})
;var YoutubeAPI_ready = false;

function onYouTubeIframeAPIReady() {

    Debug.log("YOUTUBE PLAYER READY");
    YoutubeAPI_ready = true;
    VideoPlayer.load_videos();
}


var VideoPlayer = {

    /******
     *      CLASS DISPONIBLES POUR LE VIDEO CONTAINER
     *
     *                autoplay
     *                controls
     *                fullscreen
     *                rel
     *                showinfo
     *       loop
     *
     *******/

    players_list: [],


    init: function () {
        Debug.log("VIDEO PLAYER INIT");
        /*  ADD ALL PLAYER THAT ARE NOT YOUTUBE  */
        $(".video-player").each(function () {
            if (!$(this).hasClass("youtube-player-container")) {

                if ($(this).hasClass("controls")) {
                    var _passive = false;
                } else {
                    var _passive = true;
                }

                if ($(this).hasClass("autoplay")) {
                    $(this).addClass("playing")
                }

                var _player = $(this).find("video");

                _player.on("play", function () {
                    VideoPlayer.playLocalVideo();
                });
                _player.on("pause", function () {
                    VideoPlayer.pauseLocalVideo();
                });
                Debug.log("ADD LOCAL VIDEO PLAYER : " + $(this));
                VideoPlayer.players_list.push[{player: _player, type: "video", passive: _passive}]
            }
        });
    },
    playLocalVideo: function () {
        Debug.log("PLAY LOCAL VIDEO");
    },
    pauseLocalVideo: function () {
        Debug.log("PAUSE LOCAL VIDEO");
    },
    load_videos: function () {
        $(".youtube-player-container").each(function () {
            VideoPlayer.load_video($(this));
        });
    },
    load_video: function (pTarget) {

        Debug.log("LOAD YOUTUBE VIDEO : " + pTarget.find(".youtube-player").attr("id"));

        if (pTarget.find(".youtube-player").attr("data-video") == undefined) {

            setTimeout(function () {
                Debug.log("PAS DE SRC, ON RETENTE");
                VideoPlayer.load_video(pTarget);
            }, 400);

        } else {

            var _video_id = pTarget.find(".youtube-player").attr("id");

            pTarget.find(".shadow").on("click touchend", function (e) {
                if (e.type == 'touchend') {
                    $(this).off("click");
                }

                VideoPlayer.stop_video();
            });


            var _autoplay = pTarget.hasClass("autoplay") ? 1 : 0;
            var _rel = pTarget.hasClass("rel") ? 1 : 0;
            var _controls = pTarget.hasClass("controls") ? 1 : 0;
            var _fullscreen = pTarget.hasClass("no-fullscreen") ? 0 : 1;
            var _showinfo = pTarget.hasClass("showinfo") ? 1 : 0;


            if (pTarget.hasClass("loop")) {
                var _playlist = $("#" + _video_id).attr("data-video");
                var _loop = 1;
            } else {
                var _playlist = "";
                var _loop = 0;
            }
            /*
            Debug.log("_____ CREATIN PLAYER YOUTUBE : " + _video_id + " ________");
            Debug.log("     _autoplay => " + _autoplay);
            Debug.log("     _rel => " + _rel);
            Debug.log("     _controls => " + _controls);
            Debug.log("     _fullscreen => " + _fullscreen);
            Debug.log("     _showinfo => " + _showinfo);
            Debug.log("     _loop => " + _loop);
            Debug.log("_____________________________________");
*/

            var player = new YT.Player(_video_id, {
                height: '100%',
                width: '100%',
                videoId: $("#" + _video_id).attr("data-video"),
                playerVars: {
                    autoplay: _autoplay,
                    rel: _rel,
                    controls: _controls,
                    fs: _fullscreen,
                    showinfo: _showinfo,
                    loop: _loop,
                },
                events: {
                    'onReady': VideoPlayer.onPlayerReady,
                    'onStateChange': VideoPlayer.onPlayerStateChange
                }
            });

            var _passive = pTarget.hasClass("passive") ? 1 : 0;

            VideoPlayer.players_list.push({player: player, type: "youtube", passive: _passive});
        }

    },
    onPlayerReady: function (e) {
        if ($("#" + e.target.getIframe().id).parent().hasClass("muted")) {
            console.log("PLAYER READY : is muted => ")
            e.target.mute();
        }
    },
    onPlayerStateChange: function (e) {
        //Debug.log("PLAYER STATE CHANGE : " + e.data + " == " + YT.PlayerState.PLAYING + "   // from : " + e.target.getIframe().id);

        /*Debug.log("WHO IS : "  + e.target.getIframe().id);*/

        if (e.data == YT.PlayerState.PLAYING) {
            VideoPlayer.video_isPlaying(e.target.getIframe().id);
        } else {
            VideoPlayer.video_isStoping(e.target.getIframe().id);
        }
    },
    video_isPlaying: function (pID) {

        Debug.log("PLAY YOUTUBE VIDEO : " + pID);

        /* STOP ALL VIDEOS */
        for (var i = 0; i < VideoPlayer.players_list.length; i++) {

            if (VideoPlayer.players_list[i].type == "youtube") {
                if (VideoPlayer.players_list[i].player.getIframe().id != pID) {

                    if (VideoPlayer.players_list[i].passive != 1) {
                        VideoPlayer.players_list[i].player.stopVideo();
                    }

                } else {
                    //Debug.log(" PLAYER VIDEO EN COURS")
                }

            }
        }


        $("#" + pID).parent().addClass("playing");

        if ($("#" + pID).parent().hasClass("cinema-mode")) {

            $("body").addClass("no-scroll");
            $(".header").addClass("hidden");

            var _esp_dispo = ($(window).innerHeight() - $("#" + pID).parent().innerHeight()) / 2;

            var _scrollDest = $("#" + pID).parent().offset().top - _esp_dispo;

            $("html, body").animate({scrollTop: _scrollDest}, 500);
        }
    },
    video_isStoping: function (pID) {
        $("#" + pID).parent().removeClass("playing");
        if ($("#" + pID).parent().hasClass("cinema-mode")) {
            $("body").removeClass("no-scroll");
            $(".header").removeClass("hidden");
        }
    },
    stop_video: function () {
        Debug.log("STOP VIDE0 : " + VideoPlayer.players_list.length);
        for (var i = 0; i < VideoPlayer.players_list.length; i++) {
            if (VideoPlayer.players_list[i].type == "youtube") {
                VideoPlayer.players_list[i].player.pauseVideo();
            }
        }
    }
}

$(window).load(function () {
    if ($(".video-player").length) {
        VideoPlayer.init();
    }
})
;
;var CustomCheckbox = {	

	init:function(){
		
		Debug.log("CUSTOM CHECKLBOX INIT");
		
		$(".custom-checkbox").on("click touchend", function(e){
			e.stopImmediatePropagation();
			if(e.type == "touchend"){
				$(this).off("click");
			}
			if($(this).find("input[type='checkbox']").is(':checked')){
				$(this).addClass("selected");
			}else{
				$(this).removeClass("selected");
			}
		});

		$(".custom-radio").on("click touchend", function(e){
			e.stopImmediatePropagation();
			if(e.type == "touchend"){
				$(this).off("click");
			}
			var _name_radio = $(this).find("input[type='radio']").attr("name");
			
			$("input[name='"+ _name_radio+"'").each(function(i){				
				if($(this).is(':checked')){
					$(this).parent().addClass("selected");
				}else{
					$(this).parent().removeClass("selected");
				}
			});
		});
	}
}

$(window).load(function(){
	if($('.custom-checkbox, .custom-radio').length){
		CustomCheckbox.init();
	}
})
;var CustomQuantity = {

	init:function(){
		
		$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');

		$('.quantity').each(function() {

			var spinner = jQuery(this),
					input = spinner.find('input[type="number"]'),
					btnUp = spinner.find('.quantity-up'),
					btnDown = spinner.find('.quantity-down'),
					min = input.attr('min'),
					max = input.attr('max');


			btnUp.click(function() {
				var oldValue = parseFloat(input.val());

				if(max != ""){
					if (oldValue >= max) {
						var newVal = oldValue;
					} else {
						var newVal = oldValue + 1;
					}
				}else{
					var newVal = oldValue + 1;
				}


				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});

			btnDown.click(function() {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
		});
	}
}



$(window).load(function(){
	if($(".quantity").length){
		CustomQuantity.init();
	}
})
;var _color1 = "#FFEDEE";
var _color2 = "#FFEDEE";

var Custom_RangeSlider = {

	init:function(){

		$(".custom-rangeSlider").each(function(){
			var customRangeSlider_Manager = new CustomRangeSlider_Manager($(this));
		});
	}
}

$(window).load(function(){
	if($(".custom-rangeSlider").length){
		Custom_RangeSlider.init();
	}
})

function CustomRangeSlider_Manager(pTarget){
	
	var _target = pTarget;
	
	var _min = parseInt(_target.find('input[type="range"]').attr("min"));
	var _max = parseInt(_target.find('input[type="range"]').attr("max"));
	
	adjust_slider(_target.find('input[type="range"]').val());

	if(_target.hasClass("text")){
		// INIT CHAMPS TEXTE AVEC VALUE DU RANGE
		var _unite = _target.data("unite");
        if(_target.find('input[type="range"]')[0].hasAttribute('list')){
            
            option = $('#'+_target.find('input[type="range"]').attr('list')).find('option').eq(_target.find('input[type="range"]').val());
            value = parseInt(option.html());
        }else{
            value = _target.find('input[type="range"]').val();
        }
		_target.find("input[type='text']").val(value + " " + _unite);
	}

	// LISTENER CHANGEMENT DU TEXTE
	_target.find('input[type="text"]').on('input', function (e) {
			// Do something
			var _unite = $(this).parent().data("unite");
			var _error = false;

			//console.log("CHANGE TEXTE : " + _min + " < " + parseInt($(this).val()) + " < " + _max);

			if(parseInt($(this).val()) < _min){
				$(this).val(_min + " " + _unite);
				_error = true;
			}
			if(parseInt($(this).val()) > _max){
				$(this).val(_max + " " + _unite);
				_error = true;
			}
			
			if(_error == true){
				console.log("ERROR ! ");
			}
			_target.find('input[type="range"]').val(parseInt($(this).val()));
			adjust_slider(_target.find('input[type="range"]').val());

	});
	// LISTENER CHANGEMENT DU SLIDER
	_target.find('input[type="range"]').on('input', function () {
		//console.log("RANGE SLIDER CHANGED ! " + _min + " < " + $(this).val() + " < " + _max);
        if($(this)[0].hasAttribute('list')){
            option = $('#'+$(this).attr('list')).find('option').eq($(this).val());
            value = parseInt(option.html());
        }else{
            value = $(this).val();
        }
		adjust_slider($(this).val());

		// AFFICHAGE VALEUR DANS CHAMPS TEXTE SI TYPE TEXTE
		if(_target.hasClass("text")){
			var _unite = $(this).parent().data("unite");
			_target.find("input[type='text']").val(value + " " + _unite);
            _target.find("input[type='text']").change();
		}
	});

	function adjust_slider(_value){
		
		//console.log("ADJUST SLIDER : " + _min +" < " + _value + " < " + _max);
		
		var _range = _max - _min;
		var _val = _value - _min;

		var _pourcent = (_val * 100) / _range;

		// AFFICHAGE PROGRESS IN BLUE
		_target.find('input[type="range"]').css({background:'linear-gradient(to right, '+_color1+' 0%, '+_color1+' ' + _pourcent + '%, '+_color2+' ' + _pourcent + '%, '+_color2+' 100%)'})
	}
}
;var CustomSelect = {

	init : function(){
		// CUSTOM SELECT
		var _select_container, i, j, selElmnt, select_selected, select_items, _item;
		/*look for any elements with the class "custom-select":*/
		_select_container = document.getElementsByClassName("custom-select");
		for (i = 0; i < _select_container.length; i++) {
			selElmnt = _select_container[i].getElementsByTagName("select")[0];
			/*for each element, create a new DIV that will act as the selected item:*/
			_container = document.createElement("DIV");
			_container.setAttribute("class", "select-container");

			_select_container[i].appendChild(_container);

			select_selected = document.createElement("DIV");
			select_selected.setAttribute("class", "select-selected");
			select_selected.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			_container.appendChild(select_selected);
			/*for each element, create a new DIV that will contain the option list:*/
			select_items = document.createElement("DIV");
			select_items.setAttribute("class", "select-items select-hide");

			for (j = 0; j < selElmnt.length; j++) {
				/*for each option in the original select element, create a new DIV that will act as an option item:*/
				_item = document.createElement("DIV");
				_item.innerHTML = selElmnt.options[j].innerHTML;

				//console.log("CREATE SELECT " + selElmnt.options[j].value);

				/*_item.setAttribute("class", selElmnt.options[j].value);*/
				
				if(selElmnt.options[j].value ){					
					_item.classList.add(selElmnt.options[j].value);
					if(selElmnt.options[j].hasAttribute('disabled')){
						_item.classList.add("disabled");
					}
				}else{
					_item.classList.add("no-value");
					if(selElmnt.options[j].hasAttribute('disabled')){
						_item.classList.add("disabled");
					}
				}
				if(_item.innerHTML == select_selected.innerHTML){
					/*_item.setAttribute("class", "same-as-selected");*/
					_item.classList.add("same-as-selected");
				}

				_item.addEventListener("click", function(e) {
					CustomSelect.clickOnItem(this);
				});
				select_items.appendChild(_item);
			}
			_container.appendChild(select_items);


			select_selected.addEventListener("click", function(e) {
				/*when the select box is clicked, close any other select boxes, and open/close the current select box:*/
				e.stopPropagation();
				CustomSelect.closeAllSelect(this);

				if(this.parentNode.parentNode.classList.contains('placeholder')){
					this.nextSibling.firstChild.style.display = "none";
				}
				this.nextSibling.classList.toggle("select-hide");
				this.classList.toggle("select-arrow-active");

				this.parentNode.parentNode.classList.toggle("open");
			});
		}

		/*if the user clicks anywhere outside the select box, then close all select boxes:*/
		document.addEventListener("click", CustomSelect.closeAllSelect);


	}, 
	clickOnItem:function(pTarget){
		/*when an item is clicked, update the original select box, and the selected item:*/
		var y, i, k, s, h;
		if(pTarget.classList.contains('disabled')){
			return;
		}
		s = pTarget.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
		h = pTarget.parentNode.previousSibling;	
		
		/*
		if(pTarget.parentNode.parentNode.parentNode.classList.contains('selected-in-grey')){
			pTarget.parentNode.parentNode.parentNode.classList.add("grey");
		}

		if(pTarget.parentNode.parentNode.parentNode.classList.contains('placeholder-in-white')){
			if(pTarget.classList == "placeholder"){
				pTarget.parentNode.parentNode.parentNode.classList.remove("grey");
			} 
		}

		if(pTarget.parentNode.parentNode.parentNode.classList.contains('selected-in-color-grey')){
			pTarget.parentNode.parentNode.parentNode.classList.add("color-grey");
		}
		*/
		for (i = 0; i < s.length; i++) {			
			if (s.options[i].innerHTML == pTarget.innerHTML) {
				
				s.selectedIndex = i;
				s.options[i].selected = true;
				h.innerHTML = pTarget.innerHTML;
				h.style.opacity = 1;

				y = pTarget.parentNode.getElementsByClassName("same-as-selected");

				for (k = 0; k < y.length; k++) {
					/*y[k].removeAttribute("class");*/
					y[k].classList.remove("same-as-selected");
				}

				/*this.setAttribute("class", "same-as-selected");*/
				pTarget.classList.add("same-as-selected");
				s.dispatchEvent(new Event('change'));
				break;
			}
		}
		h.click();
	},

	closeAllSelect: function(elmnt) {
		/*a function that will close all select boxes in the document,
  	except the current select box:*/


		var _select_container,  x, y, i, arrNo = [];

		_select_container = document.getElementsByClassName("custom-select");

		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");		



		for (i = 0; i < y.length; i++) {

			if (elmnt == y[i]) {
				arrNo.push(i);
			} else {
				y[i].parentNode.parentNode.classList.remove("open");
				y[i].classList.remove("select-arrow-active");
			}
		}

		for (i = 0; i < _select_container.length; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
}

$(window).load(function(){
	if($(".custom-select").length){
		CustomSelect.init();
	}
})
;var Cart = {
	init:function(){
		$(".coupon-title").on("click touchend", function(e){
			if(e.type == 'touchend'){
				$(this).off("click");
			}
			
			
			if($(".coupon-container").hasClass("open")){
				Cart.close_coupon();
			}else{
				Cart.open_coupon();
			}
			
		})
	},
	open_coupon:function(){
		$(".coupon-container").addClass("open");
		
		var _h = $('.coupon-container .coupon-form').height();
		
		$('.coupon-container .coupon-content').css({height:_h});
		
	},
	close_coupon:function(){
		$(".coupon-container").removeClass("open");
		
		$('.coupon-container .coupon-content').css({height:0});
	}
	
}

$(window).load(function(){
	if($(".woocommerce-cart").length){
		Cart.init();
	}
})
;var Filters = {
	init:function(){
		
		$(".shop-top-widget .filters-title").on("click touchend", function(e){
			if(e.type == 'touchend'){
				$(this).off("click");
			}
		
			if($(".shop-top-widget").hasClass("open")){
				Filters.close_filters();
			}else{
				Filters.open_filters();
			}
			
		})
	},
	open_filters:function(){
		$(".shop-top-widget").addClass("open");
		
		var _h = 0;
		
		$(".shop-top-widget .widget").each(function(){
			
			Debug.log("outerHeight : " + $(this).outerHeight());
			
			if($(this).outerHeight() > _h){
				_h = $(this).outerHeight();
			}
		});
		
		$(".shop-top-widget .filters-content").css({height:_h +20});
		
		
	},
	close_filters:function(){
		$(".shop-top-widget").removeClass("open");
		$(".shop-top-widget .filters-content").css({height:0});
	}

}

$(window).load(function(){
	if($(".shop-top-widget").length){
		Filters.init();
	}
});
var MiniCart = {
	init:function(){
		Debug.log("MINI CART INIT");
		$(".header .woocommerce-cart").on("click touchend", function(e){
			if(e.type == "touchend"){
				$(this).off("click");
			}
			MiniCart.open_cart();
		});
		$(".mini-cart-container .close").on("click touchend", function(e){
			if(e.type == "touchend"){
				$(this).off("click");
			}
			
			MiniCart.close_cart();
		})
		
		$("body").on("wc_fragments_loaded", function(){
			Debug.log("MINI CART LOADED");
			
			MiniCart.open_cart();
			
			
		})
	},
	open_cart:function(){
		$(".mini-cart-container").addClass("open");
	},
	close_cart:function(){
		$(".mini-cart-container").removeClass("open");
	}
}

$(window).load(function(){
	if($(".mini-cart-container").length){
		MiniCart.init();
		
	}
})
;var Product_Gallery = {
	
	init:function(){
		
		Debug.log("INIT PRODUCT GALERY");
		
		
		var _carousel = $(".product-gallery");
		
		_carousel.slick({
			arrows:true, 
			dots:false,
			infinite: true,
			variableWidth:true,
			slidesToShow: 1,
			focusOnSelect: true,
			touchThreshold:500,
			prevArrow:_carousel.parent().find(".arrow.prev"),
			nextArrow:_carousel.parent().find(".arrow.next"),
		});	
	}	
}


$(document).ready(function(){
	if($(".product-gallery").length){
		Product_Gallery.init();
	}
})
;var Update_SortBy = {
	init:function(){
		Debug.log("SORT BY init");
		
		var _form = document.getElementsByClassName("woocommerce-ordering")[0];
		
		_form.addEventListener("change", function(){
			
		})
		
		$('.woocommerce-ordering').find("select.orderby").on("change", function(){
			$( this ).closest( 'form' ).submit();
		})
	}
}

$(window).load(function(){
	if($('.woocommerce-ordering').length){
		Update_SortBy.init();
	}
})

;var Update_Variations = {
	init:function(){
		Debug.log("Update_Variations init");
		
		var _form = document.getElementsByClassName("variations_form")[0];
				
		$('.variations_form').find("select").on("change", function(){
			Debug.log("SELECT CHANGED");
			
			_form.dispatchEvent(new Event('check_variations'));
		})
	}
}

$(window).load(function(){
	if($('.variations_form').length){
		Update_Variations.init();
	}
})

;
//# sourceMappingURL=app.js.map