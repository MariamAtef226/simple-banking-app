function $E(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function By(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hy={exports:{}},Dl={},Wy={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),jE=Symbol.for("react.portal"),zE=Symbol.for("react.fragment"),UE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),HE=Symbol.for("react.provider"),WE=Symbol.for("react.context"),qE=Symbol.for("react.forward_ref"),KE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),QE=Symbol.for("react.lazy"),Fp=Symbol.iterator;function YE(e){return e===null||typeof e!="object"?null:(e=Fp&&e[Fp]||e["@@iterator"],typeof e=="function"?e:null)}var qy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ky=Object.assign,Gy={};function Vi(e,t,n){this.props=e,this.context=t,this.refs=Gy,this.updater=n||qy}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qy(){}Qy.prototype=Vi.prototype;function kh(e,t,n){this.props=e,this.context=t,this.refs=Gy,this.updater=n||qy}var Ch=kh.prototype=new Qy;Ch.constructor=kh;Ky(Ch,Vi.prototype);Ch.isPureReactComponent=!0;var $p=Array.isArray,Yy=Object.prototype.hasOwnProperty,xh={current:null},Xy={key:!0,ref:!0,__self:!0,__source:!0};function Jy(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Yy.call(t,r)&&!Xy.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yo,type:e,key:s,ref:o,props:i,_owner:xh.current}}function XE(e,t){return{$$typeof:yo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ph(e){return typeof e=="object"&&e!==null&&e.$$typeof===yo}function JE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jp=/\/+/g;function Vu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?JE(""+e.key):t.toString(36)}function wa(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case yo:case jE:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Vu(o,0):r,$p(i)?(n="",e!=null&&(n=e.replace(jp,"$&/")+"/"),wa(i,t,n,"",function(u){return u})):i!=null&&(Ph(i)&&(i=XE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",$p(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Vu(s,a);o+=wa(s,t,n,l,i)}else if(l=YE(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Vu(s,a++),o+=wa(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(e,t,n){if(e==null)return e;var r=[],i=0;return wa(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ZE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Ea={transition:null},eT={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:xh};W.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!Ph(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Vi;W.Fragment=zE;W.Profiler=BE;W.PureComponent=kh;W.StrictMode=UE;W.Suspense=KE;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eT;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ky({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=xh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Yy.call(t,l)&&!Xy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yo,type:e.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(e){return e={$$typeof:WE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:HE,_context:e},e.Consumer=e};W.createElement=Jy;W.createFactory=function(e){var t=Jy.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:qE,render:e}};W.isValidElement=Ph;W.lazy=function(e){return{$$typeof:QE,_payload:{_status:-1,_result:e},_init:ZE}};W.memo=function(e,t){return{$$typeof:GE,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return et.current.useCallback(e,t)};W.useContext=function(e){return et.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return et.current.useDeferredValue(e)};W.useEffect=function(e,t){return et.current.useEffect(e,t)};W.useId=function(){return et.current.useId()};W.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return et.current.useMemo(e,t)};W.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};W.useRef=function(e){return et.current.useRef(e)};W.useState=function(e){return et.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return et.current.useTransition()};W.version="18.2.0";Wy.exports=W;var k=Wy.exports;const Rh=By(k),tT=$E({__proto__:null,default:Rh},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nT=k,rT=Symbol.for("react.element"),iT=Symbol.for("react.fragment"),sT=Object.prototype.hasOwnProperty,oT=nT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aT={key:!0,ref:!0,__self:!0,__source:!0};function Zy(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)sT.call(t,r)&&!aT.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rT,type:e,key:s,ref:o,props:i,_owner:oT.current}}Dl.Fragment=iT;Dl.jsx=Zy;Dl.jsxs=Zy;Hy.exports=Dl;var w=Hy.exports,Lc={},ev={exports:{}},gt={},tv={exports:{}},nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,j){var B=b.length;b.push(j);e:for(;0<B;){var me=B-1>>>1,Ce=b[me];if(0<i(Ce,j))b[me]=j,b[B]=Ce,B=me;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var j=b[0],B=b.pop();if(B!==j){b[0]=B;e:for(var me=0,Ce=b.length,Fo=Ce>>>1;me<Fo;){var ir=2*(me+1)-1,Ou=b[ir],sr=ir+1,$o=b[sr];if(0>i(Ou,B))sr<Ce&&0>i($o,Ou)?(b[me]=$o,b[sr]=B,me=sr):(b[me]=Ou,b[ir]=B,me=ir);else if(sr<Ce&&0>i($o,B))b[me]=$o,b[sr]=B,me=sr;else break e}}return j}function i(b,j){var B=b.sortIndex-j.sortIndex;return B!==0?B:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=b)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function _(b){if(y=!1,g(b),!v)if(n(l)!==null)v=!0,bu(T);else{var j=n(u);j!==null&&Du(_,j.startTime-b)}}function T(b,j){v=!1,y&&(y=!1,p(V),V=-1),m=!0;var B=h;try{for(g(j),f=n(l);f!==null&&(!(f.expirationTime>j)||b&&!kt());){var me=f.callback;if(typeof me=="function"){f.callback=null,h=f.priorityLevel;var Ce=me(f.expirationTime<=j);j=e.unstable_now(),typeof Ce=="function"?f.callback=Ce:f===n(l)&&r(l),g(j)}else r(l);f=n(l)}if(f!==null)var Fo=!0;else{var ir=n(u);ir!==null&&Du(_,ir.startTime-j),Fo=!1}return Fo}finally{f=null,h=B,m=!1}}var x=!1,P=null,V=-1,Y=5,U=-1;function kt(){return!(e.unstable_now()-U<Y)}function qi(){if(P!==null){var b=e.unstable_now();U=b;var j=!0;try{j=P(!0,b)}finally{j?Ki():(x=!1,P=null)}}else x=!1}var Ki;if(typeof d=="function")Ki=function(){d(qi)};else if(typeof MessageChannel<"u"){var Mp=new MessageChannel,FE=Mp.port2;Mp.port1.onmessage=qi,Ki=function(){FE.postMessage(null)}}else Ki=function(){E(qi,0)};function bu(b){P=b,x||(x=!0,Ki())}function Du(b,j){V=E(function(){b(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,bu(T))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var B=h;h=j;try{return b()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var B=h;h=b;try{return j()}finally{h=B}},e.unstable_scheduleCallback=function(b,j,B){var me=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?me+B:me):B=me,b){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=B+Ce,b={id:c++,callback:j,priorityLevel:b,startTime:B,expirationTime:Ce,sortIndex:-1},B>me?(b.sortIndex=B,t(u,b),n(l)===null&&b===n(u)&&(y?(p(V),V=-1):y=!0,Du(_,B-me))):(b.sortIndex=Ce,t(l,b),v||m||(v=!0,bu(T))),b},e.unstable_shouldYield=kt,e.unstable_wrapCallback=function(b){var j=h;return function(){var B=h;h=j;try{return b.apply(this,arguments)}finally{h=B}}}})(nv);tv.exports=nv;var lT=tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=k,pt=lT;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iv=new Set,bs={};function Vr(e,t){wi(e,t),wi(e+"Capture",t)}function wi(e,t){for(bs[e]=t,e=0;e<t.length;e++)iv.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,uT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zp={},Up={};function cT(e){return Mc.call(Up,e)?!0:Mc.call(zp,e)?!1:uT.test(e)?Up[e]=!0:(zp[e]=!0,!1)}function fT(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hT(e,t,n,r){if(t===null||typeof t>"u"||fT(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function bh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nh,bh);$e[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nh,bh);$e[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nh,bh);$e[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dh(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hT(t,n,i,r)&&(n=null),r||i===null?cT(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),ov=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),Lh=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),av=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function Gi(e){return e===null||typeof e!="object"?null:(e=Bp&&e[Bp]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Lu;function ss(e){if(Lu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lu=t&&t[1]||""}return`
`+Lu+e}var Mu=!1;function Fu(e,t){if(!e||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ss(e):""}function dT(e){switch(e.tag){case 5:return ss(e.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return e=Fu(e.type,!1),e;case 11:return e=Fu(e.type.render,!1),e;case 1:return e=Fu(e.type,!0),e;default:return""}}function zc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case qr:return"Portal";case Fc:return"Profiler";case Oh:return"StrictMode";case $c:return"Suspense";case jc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ov:return(e.displayName||"Context")+".Consumer";case sv:return(e._context.displayName||"Context")+".Provider";case Vh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lh:return t=e.displayName||null,t!==null?t:zc(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return zc(e(t))}catch{}}return null}function pT(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(t);case 8:return t===Oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mT(e){var t=lv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){e._valueTracker||(e._valueTracker=mT(e))}function uv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uc(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Hp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cv(e,t){t=t.checked,t!=null&&Dh(e,"checked",t,!1)}function Bc(e,t){cv(e,t);var n=Bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hc(e,t.type,Bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hc(e,t,n){(t!=="number"||Ma(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var os=Array.isArray;function li(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(os(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bn(n)}}function fv(e,t){var n=Bn(t.value),r=Bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,dv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ds(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gT=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(e){gT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ms[t]=ms[e]})});function pv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ms.hasOwnProperty(e)&&ms[e]?(""+t).trim():t+"px"}function mv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yT=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(e,t){if(t){if(yT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Gc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function Mh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yc=null,ui=null,ci=null;function Gp(e){if(e=wo(e)){if(typeof Yc!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Fl(t),Yc(e.stateNode,e.type,t))}}function gv(e){ui?ci?ci.push(e):ci=[e]:ui=e}function yv(){if(ui){var e=ui,t=ci;if(ci=ui=null,Gp(e),t)for(e=0;e<t.length;e++)Gp(t[e])}}function vv(e,t){return e(t)}function _v(){}var $u=!1;function wv(e,t,n){if($u)return e(t,n);$u=!0;try{return vv(e,t,n)}finally{$u=!1,(ui!==null||ci!==null)&&(_v(),yv())}}function Os(e,t){var n=e.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Xc=!1;if(rn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Xc=!1}function vT(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var gs=!1,Fa=null,$a=!1,Jc=null,_T={onError:function(e){gs=!0,Fa=e}};function wT(e,t,n,r,i,s,o,a,l){gs=!1,Fa=null,vT.apply(_T,arguments)}function ET(e,t,n,r,i,s,o,a,l){if(wT.apply(this,arguments),gs){if(gs){var u=Fa;gs=!1,Fa=null}else throw Error(S(198));$a||($a=!0,Jc=u)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ev(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qp(e){if(Lr(e)!==e)throw Error(S(188))}function TT(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qp(i),e;if(s===r)return Qp(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Tv(e){return e=TT(e),e!==null?Iv(e):null}function Iv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Iv(e);if(t!==null)return t;e=e.sibling}return null}var Sv=pt.unstable_scheduleCallback,Yp=pt.unstable_cancelCallback,IT=pt.unstable_shouldYield,ST=pt.unstable_requestPaint,ge=pt.unstable_now,AT=pt.unstable_getCurrentPriorityLevel,Fh=pt.unstable_ImmediatePriority,Av=pt.unstable_UserBlockingPriority,ja=pt.unstable_NormalPriority,kT=pt.unstable_LowPriority,kv=pt.unstable_IdlePriority,Ol=null,Ht=null;function CT(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Ol,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:RT,xT=Math.log,PT=Math.LN2;function RT(e){return e>>>=0,e===0?32:31-(xT(e)/PT|0)|0}var Ho=64,Wo=4194304;function as(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=as(a):(s&=o,s!==0&&(r=as(s)))}else o=n&~i,o!==0?r=as(o):s!==0&&(r=as(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function NT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=NT(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Zc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cv(){var e=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),e}function ju(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function DT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function $h(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function xv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pv,jh,Rv,Nv,bv,ef=!1,qo=[],Pn=null,Rn=null,Nn=null,Vs=new Map,Ls=new Map,En=[],OT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Vs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(t.pointerId)}}function Yi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=wo(t),t!==null&&jh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function VT(e,t,n,r,i){switch(t){case"focusin":return Pn=Yi(Pn,e,t,n,r,i),!0;case"dragenter":return Rn=Yi(Rn,e,t,n,r,i),!0;case"mouseover":return Nn=Yi(Nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vs.set(s,Yi(Vs.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Yi(Ls.get(s)||null,e,t,n,r,i)),!0}return!1}function Dv(e){var t=ur(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ev(n),t!==null){e.blockedOn=t,bv(e.priority,function(){Rv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qc=r,n.target.dispatchEvent(r),Qc=null}else return t=wo(n),t!==null&&jh(t),e.blockedOn=n,!1;t.shift()}return!0}function Jp(e,t,n){Ta(e)&&n.delete(t)}function LT(){ef=!1,Pn!==null&&Ta(Pn)&&(Pn=null),Rn!==null&&Ta(Rn)&&(Rn=null),Nn!==null&&Ta(Nn)&&(Nn=null),Vs.forEach(Jp),Ls.forEach(Jp)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,ef||(ef=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,LT)))}function Ms(e){function t(i){return Xi(i,e)}if(0<qo.length){Xi(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Xi(Pn,e),Rn!==null&&Xi(Rn,e),Nn!==null&&Xi(Nn,e),Vs.forEach(t),Ls.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)Dv(n),n.blockedOn===null&&En.shift()}var fi=pn.ReactCurrentBatchConfig,Ua=!0;function MT(e,t,n,r){var i=Z,s=fi.transition;fi.transition=null;try{Z=1,zh(e,t,n,r)}finally{Z=i,fi.transition=s}}function FT(e,t,n,r){var i=Z,s=fi.transition;fi.transition=null;try{Z=4,zh(e,t,n,r)}finally{Z=i,fi.transition=s}}function zh(e,t,n,r){if(Ua){var i=tf(e,t,n,r);if(i===null)Yu(e,t,r,Ba,n),Xp(e,r);else if(VT(i,e,t,n,r))r.stopPropagation();else if(Xp(e,r),t&4&&-1<OT.indexOf(e)){for(;i!==null;){var s=wo(i);if(s!==null&&Pv(s),s=tf(e,t,n,r),s===null&&Yu(e,t,r,Ba,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yu(e,t,r,null,n)}}var Ba=null;function tf(e,t,n,r){if(Ba=null,e=Mh(r),e=ur(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ev(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ba=e,null}function Ov(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AT()){case Fh:return 1;case Av:return 4;case ja:case kT:return 16;case kv:return 536870912;default:return 16}default:return 16}}var In=null,Uh=null,Ia=null;function Vv(){if(Ia)return Ia;var e,t=Uh,n=t.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ia=i.slice(e,1<r?1-r:void 0)}function Sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Zp(){return!1}function yt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:Zp,this.isPropagationStopped=Zp,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),t}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=yt(Li),_o=fe({},Li,{view:0,detail:0}),$T=yt(_o),zu,Uu,Ji,Vl=fe({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?(zu=e.screenX-Ji.screenX,Uu=e.screenY-Ji.screenY):Uu=zu=0,Ji=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),em=yt(Vl),jT=fe({},Vl,{dataTransfer:0}),zT=yt(jT),UT=fe({},_o,{relatedTarget:0}),Bu=yt(UT),BT=fe({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),HT=yt(BT),WT=fe({},Li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qT=yt(WT),KT=fe({},Li,{data:0}),tm=yt(KT),GT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YT[e])?!!t[e]:!1}function Hh(){return XT}var JT=fe({},_o,{key:function(e){if(e.key){var t=GT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?QT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(e){return e.type==="keypress"?Sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZT=yt(JT),eI=fe({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=yt(eI),tI=fe({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),nI=yt(tI),rI=fe({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),iI=yt(rI),sI=fe({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oI=yt(sI),aI=[9,13,27,32],Wh=rn&&"CompositionEvent"in window,ys=null;rn&&"documentMode"in document&&(ys=document.documentMode);var lI=rn&&"TextEvent"in window&&!ys,Lv=rn&&(!Wh||ys&&8<ys&&11>=ys),rm=String.fromCharCode(32),im=!1;function Mv(e,t){switch(e){case"keyup":return aI.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function uI(e,t){switch(e){case"compositionend":return Fv(t);case"keypress":return t.which!==32?null:(im=!0,rm);case"textInput":return e=t.data,e===rm&&im?null:e;default:return null}}function cI(e,t){if(Gr)return e==="compositionend"||!Wh&&Mv(e,t)?(e=Vv(),Ia=Uh=In=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lv&&t.locale!=="ko"?null:t.data;default:return null}}var fI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fI[e.type]:t==="textarea"}function $v(e,t,n,r){gv(r),t=Ha(t,"onChange"),0<t.length&&(n=new Bh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vs=null,Fs=null;function hI(e){Yv(e,0)}function Ll(e){var t=Xr(e);if(uv(t))return e}function dI(e,t){if(e==="change")return t}var jv=!1;if(rn){var Hu;if(rn){var Wu="oninput"in document;if(!Wu){var om=document.createElement("div");om.setAttribute("oninput","return;"),Wu=typeof om.oninput=="function"}Hu=Wu}else Hu=!1;jv=Hu&&(!document.documentMode||9<document.documentMode)}function am(){vs&&(vs.detachEvent("onpropertychange",zv),Fs=vs=null)}function zv(e){if(e.propertyName==="value"&&Ll(Fs)){var t=[];$v(t,Fs,e,Mh(e)),wv(hI,t)}}function pI(e,t,n){e==="focusin"?(am(),vs=t,Fs=n,vs.attachEvent("onpropertychange",zv)):e==="focusout"&&am()}function mI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(Fs)}function gI(e,t){if(e==="click")return Ll(t)}function yI(e,t){if(e==="input"||e==="change")return Ll(t)}function vI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:vI;function $s(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mc.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function lm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function um(e,t){var n=lm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lm(n)}}function Uv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bv(){for(var e=window,t=Ma();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ma(e.document)}return t}function qh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _I(e){var t=Bv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(r!==null&&qh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=um(n,s);var o=um(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wI=rn&&"documentMode"in document&&11>=document.documentMode,Qr=null,nf=null,_s=null,rf=!1;function cm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rf||Qr==null||Qr!==Ma(r)||(r=Qr,"selectionStart"in r&&qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_s&&$s(_s,r)||(_s=r,r=Ha(nf,"onSelect"),0<r.length&&(t=new Bh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function Go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yr={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},qu={},Hv={};rn&&(Hv=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Ml(e){if(qu[e])return qu[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hv)return qu[e]=t[n];return e}var Wv=Ml("animationend"),qv=Ml("animationiteration"),Kv=Ml("animationstart"),Gv=Ml("transitionend"),Qv=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){Qv.set(e,t),Vr(t,[e])}for(var Ku=0;Ku<fm.length;Ku++){var Gu=fm[Ku],EI=Gu.toLowerCase(),TI=Gu[0].toUpperCase()+Gu.slice(1);Jn(EI,"on"+TI)}Jn(Wv,"onAnimationEnd");Jn(qv,"onAnimationIteration");Jn(Kv,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(Gv,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),II=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function hm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ET(r,t,void 0,e),e.currentTarget=null}function Yv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hm(i,a,u),s=l}}}if($a)throw e=Jc,$a=!1,Jc=null,e}function ne(e,t){var n=t[uf];n===void 0&&(n=t[uf]=new Set);var r=e+"__bubble";n.has(r)||(Xv(t,e,2,!1),n.add(r))}function Qu(e,t,n){var r=0;t&&(r|=4),Xv(n,e,r,t)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function js(e){if(!e[Qo]){e[Qo]=!0,iv.forEach(function(n){n!=="selectionchange"&&(II.has(n)||Qu(n,!1,e),Qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qo]||(t[Qo]=!0,Qu("selectionchange",!1,t))}}function Xv(e,t,n,r){switch(Ov(t)){case 1:var i=MT;break;case 4:i=FT;break;default:i=zh}n=i.bind(null,t,n,e),i=void 0,!Xc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yu(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ur(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wv(function(){var u=s,c=Mh(n),f=[];e:{var h=Qv.get(e);if(h!==void 0){var m=Bh,v=e;switch(e){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":m=ZT;break;case"focusin":v="focus",m=Bu;break;case"focusout":v="blur",m=Bu;break;case"beforeblur":case"afterblur":m=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=zT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nI;break;case Wv:case qv:case Kv:m=HT;break;case Gv:m=iI;break;case"scroll":m=$T;break;case"wheel":m=oI;break;case"copy":case"cut":case"paste":m=qT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=nm}var y=(t&4)!==0,E=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,g;d!==null;){g=d;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Os(d,p),_!=null&&y.push(zs(d,_,g)))),E)break;d=d.return}0<y.length&&(h=new m(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==Qc&&(v=n.relatedTarget||n.fromElement)&&(ur(v)||v[sn]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?ur(v):null,v!==null&&(E=Lr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=em,_="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=nm,_="onPointerLeave",p="onPointerEnter",d="pointer"),E=m==null?h:Xr(m),g=v==null?h:Xr(v),h=new y(_,d+"leave",m,n,c),h.target=E,h.relatedTarget=g,_=null,ur(c)===u&&(y=new y(p,d+"enter",v,n,c),y.target=g,y.relatedTarget=E,_=y),E=_,m&&v)t:{for(y=m,p=v,d=0,g=y;g;g=jr(g))d++;for(g=0,_=p;_;_=jr(_))g++;for(;0<d-g;)y=jr(y),d--;for(;0<g-d;)p=jr(p),g--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=jr(y),p=jr(p)}y=null}else y=null;m!==null&&dm(f,h,m,y,!1),v!==null&&E!==null&&dm(f,E,v,y,!0)}}e:{if(h=u?Xr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=dI;else if(sm(h))if(jv)T=yI;else{T=mI;var x=pI}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=gI);if(T&&(T=T(e,u))){$v(f,T,n,c);break e}x&&x(e,h,u),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Hc(h,"number",h.value)}switch(x=u?Xr(u):window,e){case"focusin":(sm(x)||x.contentEditable==="true")&&(Qr=x,nf=u,_s=null);break;case"focusout":_s=nf=Qr=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,cm(f,n,c);break;case"selectionchange":if(wI)break;case"keydown":case"keyup":cm(f,n,c)}var P;if(Wh)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Gr?Mv(e,n)&&(V="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(Lv&&n.locale!=="ko"&&(Gr||V!=="onCompositionStart"?V==="onCompositionEnd"&&Gr&&(P=Vv()):(In=c,Uh="value"in In?In.value:In.textContent,Gr=!0)),x=Ha(u,V),0<x.length&&(V=new tm(V,e,null,n,c),f.push({event:V,listeners:x}),P?V.data=P:(P=Fv(n),P!==null&&(V.data=P)))),(P=lI?uI(e,n):cI(e,n))&&(u=Ha(u,"onBeforeInput"),0<u.length&&(c=new tm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}Yv(f,t)})}function zs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Os(e,n),s!=null&&r.unshift(zs(e,s,i)),s=Os(e,t),s!=null&&r.push(zs(e,s,i))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dm(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Os(n,s),l!=null&&o.unshift(zs(n,l,a))):i||(l=Os(n,s),l!=null&&o.push(zs(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var SI=/\r\n?/g,AI=/\u0000|\uFFFD/g;function pm(e){return(typeof e=="string"?e:""+e).replace(SI,`
`).replace(AI,"")}function Yo(e,t,n){if(t=pm(t),pm(e)!==t&&n)throw Error(S(425))}function Wa(){}var sf=null,of=null;function af(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lf=typeof setTimeout=="function"?setTimeout:void 0,kI=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,CI=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(e){return mm.resolve(null).then(e).catch(xI)}:lf;function xI(e){setTimeout(function(){throw e})}function Xu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ms(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ms(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Mi,Us="__reactProps$"+Mi,sn="__reactContainer$"+Mi,uf="__reactEvents$"+Mi,PI="__reactListeners$"+Mi,RI="__reactHandles$"+Mi;function ur(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gm(e);e!==null;){if(n=e[Ft])return n;e=gm(e)}return t}e=n,n=e.parentNode}return null}function wo(e){return e=e[Ft]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Fl(e){return e[Us]||null}var cf=[],Jr=-1;function Zn(e){return{current:e}}function se(e){0>Jr||(e.current=cf[Jr],cf[Jr]=null,Jr--)}function te(e,t){Jr++,cf[Jr]=e.current,e.current=t}var Hn={},Ge=Zn(Hn),it=Zn(!1),Tr=Hn;function Ei(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function qa(){se(it),se(Ge)}function ym(e,t,n){if(Ge.current!==Hn)throw Error(S(168));te(Ge,t),te(it,n)}function Jv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,pT(e)||"Unknown",i));return fe({},n,r)}function Ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,Tr=Ge.current,te(Ge,e),te(it,it.current),!0}function vm(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Jv(e,t,Tr),r.__reactInternalMemoizedMergedChildContext=e,se(it),se(Ge),te(Ge,e)):se(it),te(it,n)}var Jt=null,$l=!1,Ju=!1;function Zv(e){Jt===null?Jt=[e]:Jt.push(e)}function NI(e){$l=!0,Zv(e)}function er(){if(!Ju&&Jt!==null){Ju=!0;var e=0,t=Z;try{var n=Jt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,$l=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),Sv(Fh,er),i}finally{Z=t,Ju=!1}}return null}var Zr=[],ei=0,Ga=null,Qa=0,_t=[],wt=0,Ir=null,Zt=1,en="";function or(e,t){Zr[ei++]=Qa,Zr[ei++]=Ga,Ga=e,Qa=t}function e0(e,t,n){_t[wt++]=Zt,_t[wt++]=en,_t[wt++]=Ir,Ir=e;var r=Zt;e=en;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zt=1<<32-bt(t)+i|n<<i|r,en=s+e}else Zt=1<<s|n<<i|r,en=e}function Kh(e){e.return!==null&&(or(e,1),e0(e,1,0))}function Gh(e){for(;e===Ga;)Ga=Zr[--ei],Zr[ei]=null,Qa=Zr[--ei],Zr[ei]=null;for(;e===Ir;)Ir=_t[--wt],_t[wt]=null,en=_t[--wt],_t[wt]=null,Zt=_t[--wt],_t[wt]=null}var ft=null,ct=null,ae=!1,Rt=null;function t0(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _m(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,ct=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ir!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,ct=null,!0):!1;default:return!1}}function ff(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hf(e){if(ae){var t=ct;if(t){var n=t;if(!_m(e,t)){if(ff(e))throw Error(S(418));t=bn(n.nextSibling);var r=ft;t&&_m(e,t)?t0(r,n):(e.flags=e.flags&-4097|2,ae=!1,ft=e)}}else{if(ff(e))throw Error(S(418));e.flags=e.flags&-4097|2,ae=!1,ft=e}}}function wm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function Xo(e){if(e!==ft)return!1;if(!ae)return wm(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!af(e.type,e.memoizedProps)),t&&(t=ct)){if(ff(e))throw n0(),Error(S(418));for(;t;)t0(e,t),t=bn(t.nextSibling)}if(wm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ft?bn(e.stateNode.nextSibling):null;return!0}function n0(){for(var e=ct;e;)e=bn(e.nextSibling)}function Ti(){ct=ft=null,ae=!1}function Qh(e){Rt===null?Rt=[e]:Rt.push(e)}var bI=pn.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ya=Zn(null),Xa=null,ti=null,Yh=null;function Xh(){Yh=ti=Xa=null}function Jh(e){var t=Ya.current;se(Ya),e._currentValue=t}function df(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hi(e,t){Xa=e,Yh=ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Yh!==e)if(e={context:e,memoizedValue:t,next:null},ti===null){if(Xa===null)throw Error(S(308));ti=e,Xa.dependencies={lanes:0,firstContext:e}}else ti=ti.next=e;return t}var cr=null;function Zh(e){cr===null?cr=[e]:cr.push(e)}function r0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zh(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function ed(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,Zh(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function Aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$h(e,n)}}function Em(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ja(e,t,n,r){var i=e.updateQueue;wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(m,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,f,h):v,h==null)break e;f=fe({},f,h);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ar|=o,e.lanes=o,e.memoizedState=f}}function Tm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var s0=new rv.Component().refs;function pf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Vn(e),s=nn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Dn(e,s,i),t!==null&&(Dt(t,e,i,r),Aa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Vn(e),s=nn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Dn(e,s,i),t!==null&&(Dt(t,e,i,r),Aa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=Vn(e),i=nn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,r),t!==null&&(Dt(t,e,r,n),Aa(t,e,r))}};function Im(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!$s(n,r)||!$s(i,s):!0}function o0(e,t,n){var r=!1,i=Hn,s=t.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=st(t)?Tr:Ge.current,r=t.contextTypes,s=(r=r!=null)?Ei(e,i):Hn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function mf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=s0,ed(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=st(t)?Tr:Ge.current,i.context=Ei(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(pf(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jl.enqueueReplaceState(i,i.state,null),Ja(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===s0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Jo(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Am(e){var t=e._init;return t(e._payload)}function a0(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Ln(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,_){return d===null||d.tag!==6?(d=sc(g,p.mode,_),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,_){var T=g.type;return T===Kr?c(p,d,g.props.children,_,g.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_n&&Am(T)===d.type)?(_=i(d,g.props),_.ref=Zi(p,d,g),_.return=p,_):(_=Na(g.type,g.key,g.props,null,p.mode,_),_.ref=Zi(p,d,g),_.return=p,_)}function u(p,d,g,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=oc(g,p.mode,_),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function c(p,d,g,_,T){return d===null||d.tag!==7?(d=_r(g,p.mode,_,T),d.return=p,d):(d=i(d,g),d.return=p,d)}function f(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=sc(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zo:return g=Na(d.type,d.key,d.props,null,p.mode,g),g.ref=Zi(p,null,d),g.return=p,g;case qr:return d=oc(d,p.mode,g),d.return=p,d;case _n:var _=d._init;return f(p,_(d._payload),g)}if(os(d)||Gi(d))return d=_r(d,p.mode,g,null),d.return=p,d;Jo(p,d)}return null}function h(p,d,g,_){var T=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(p,d,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:return g.key===T?l(p,d,g,_):null;case qr:return g.key===T?u(p,d,g,_):null;case _n:return T=g._init,h(p,d,T(g._payload),_)}if(os(g)||Gi(g))return T!==null?null:c(p,d,g,_,null);Jo(p,g)}return null}function m(p,d,g,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(d,p,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zo:return p=p.get(_.key===null?g:_.key)||null,l(d,p,_,T);case qr:return p=p.get(_.key===null?g:_.key)||null,u(d,p,_,T);case _n:var x=_._init;return m(p,d,g,x(_._payload),T)}if(os(_)||Gi(_))return p=p.get(g)||null,c(d,p,_,T,null);Jo(d,_)}return null}function v(p,d,g,_){for(var T=null,x=null,P=d,V=d=0,Y=null;P!==null&&V<g.length;V++){P.index>V?(Y=P,P=null):Y=P.sibling;var U=h(p,P,g[V],_);if(U===null){P===null&&(P=Y);break}e&&P&&U.alternate===null&&t(p,P),d=s(U,d,V),x===null?T=U:x.sibling=U,x=U,P=Y}if(V===g.length)return n(p,P),ae&&or(p,V),T;if(P===null){for(;V<g.length;V++)P=f(p,g[V],_),P!==null&&(d=s(P,d,V),x===null?T=P:x.sibling=P,x=P);return ae&&or(p,V),T}for(P=r(p,P);V<g.length;V++)Y=m(P,p,V,g[V],_),Y!==null&&(e&&Y.alternate!==null&&P.delete(Y.key===null?V:Y.key),d=s(Y,d,V),x===null?T=Y:x.sibling=Y,x=Y);return e&&P.forEach(function(kt){return t(p,kt)}),ae&&or(p,V),T}function y(p,d,g,_){var T=Gi(g);if(typeof T!="function")throw Error(S(150));if(g=T.call(g),g==null)throw Error(S(151));for(var x=T=null,P=d,V=d=0,Y=null,U=g.next();P!==null&&!U.done;V++,U=g.next()){P.index>V?(Y=P,P=null):Y=P.sibling;var kt=h(p,P,U.value,_);if(kt===null){P===null&&(P=Y);break}e&&P&&kt.alternate===null&&t(p,P),d=s(kt,d,V),x===null?T=kt:x.sibling=kt,x=kt,P=Y}if(U.done)return n(p,P),ae&&or(p,V),T;if(P===null){for(;!U.done;V++,U=g.next())U=f(p,U.value,_),U!==null&&(d=s(U,d,V),x===null?T=U:x.sibling=U,x=U);return ae&&or(p,V),T}for(P=r(p,P);!U.done;V++,U=g.next())U=m(P,p,V,U.value,_),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?V:U.key),d=s(U,d,V),x===null?T=U:x.sibling=U,x=U);return e&&P.forEach(function(qi){return t(p,qi)}),ae&&or(p,V),T}function E(p,d,g,_){if(typeof g=="object"&&g!==null&&g.type===Kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:e:{for(var T=g.key,x=d;x!==null;){if(x.key===T){if(T=g.type,T===Kr){if(x.tag===7){n(p,x.sibling),d=i(x,g.props.children),d.return=p,p=d;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_n&&Am(T)===x.type){n(p,x.sibling),d=i(x,g.props),d.ref=Zi(p,x,g),d.return=p,p=d;break e}n(p,x);break}else t(p,x);x=x.sibling}g.type===Kr?(d=_r(g.props.children,p.mode,_,g.key),d.return=p,p=d):(_=Na(g.type,g.key,g.props,null,p.mode,_),_.ref=Zi(p,d,g),_.return=p,p=_)}return o(p);case qr:e:{for(x=g.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=oc(g,p.mode,_),d.return=p,p=d}return o(p);case _n:return x=g._init,E(p,d,x(g._payload),_)}if(os(g))return v(p,d,g,_);if(Gi(g))return y(p,d,g,_);Jo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=sc(g,p.mode,_),d.return=p,p=d),o(p)):n(p,d)}return E}var Ii=a0(!0),l0=a0(!1),Eo={},Wt=Zn(Eo),Bs=Zn(Eo),Hs=Zn(Eo);function fr(e){if(e===Eo)throw Error(S(174));return e}function td(e,t){switch(te(Hs,t),te(Bs,e),te(Wt,Eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qc(t,e)}se(Wt),te(Wt,t)}function Si(){se(Wt),se(Bs),se(Hs)}function u0(e){fr(Hs.current);var t=fr(Wt.current),n=qc(t,e.type);t!==n&&(te(Bs,e),te(Wt,n))}function nd(e){Bs.current===e&&(se(Wt),se(Bs))}var ue=Zn(0);function Za(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zu=[];function rd(){for(var e=0;e<Zu.length;e++)Zu[e]._workInProgressVersionPrimary=null;Zu.length=0}var ka=pn.ReactCurrentDispatcher,ec=pn.ReactCurrentBatchConfig,Sr=0,ce=null,Te=null,Pe=null,el=!1,ws=!1,Ws=0,DI=0;function je(){throw Error(S(321))}function id(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function sd(e,t,n,r,i,s){if(Sr=s,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?MI:FI,e=n(r,i),ws){s=0;do{if(ws=!1,Ws=0,25<=s)throw Error(S(301));s+=1,Pe=Te=null,t.updateQueue=null,ka.current=$I,e=n(r,i)}while(ws)}if(ka.current=tl,t=Te!==null&&Te.next!==null,Sr=0,Pe=Te=ce=null,el=!1,t)throw Error(S(300));return e}function od(){var e=Ws!==0;return Ws=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ce.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function At(){if(Te===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Pe===null?ce.memoizedState:Pe.next;if(t!==null)Pe=t,Te=e;else{if(e===null)throw Error(S(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Pe===null?ce.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function qs(e,t){return typeof t=="function"?t(e):t}function tc(e){var t=At(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Sr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ce.lanes|=c,Ar|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ot(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ce.lanes|=s,Ar|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nc(e){var t=At(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ot(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function c0(){}function f0(e,t){var n=ce,r=At(),i=t(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,ad(p0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Ks(9,d0.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(S(349));Sr&30||h0(n,t,i)}return i}function h0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function d0(e,t,n,r){t.value=n,t.getSnapshot=r,m0(t)&&g0(e)}function p0(e,t,n){return n(function(){m0(t)&&g0(e)})}function m0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function g0(e){var t=on(e,1);t!==null&&Dt(t,e,1,-1)}function km(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qs,lastRenderedState:e},t.queue=e,e=e.dispatch=LI.bind(null,ce,e),[t.memoizedState,e]}function Ks(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function y0(){return At().memoizedState}function Ca(e,t,n,r){var i=Mt();ce.flags|=e,i.memoizedState=Ks(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var i=At();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&id(r,o.deps)){i.memoizedState=Ks(t,n,s,r);return}}ce.flags|=e,i.memoizedState=Ks(1|t,n,s,r)}function Cm(e,t){return Ca(8390656,8,e,t)}function ad(e,t){return zl(2048,8,e,t)}function v0(e,t){return zl(4,2,e,t)}function _0(e,t){return zl(4,4,e,t)}function w0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function E0(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,w0.bind(null,t,e),n)}function ld(){}function T0(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&id(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function I0(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&id(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function S0(e,t,n){return Sr&21?(Ot(n,t)||(n=Cv(),ce.lanes|=n,Ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function OI(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=ec.transition;ec.transition={};try{e(!1),t()}finally{Z=n,ec.transition=r}}function A0(){return At().memoizedState}function VI(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k0(e))C0(t,n);else if(n=r0(e,t,n,r),n!==null){var i=Ze();Dt(n,e,r,i),x0(n,t,r)}}function LI(e,t,n){var r=Vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(e))C0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,o)){var l=t.interleaved;l===null?(i.next=i,Zh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=r0(e,t,i,r),n!==null&&(i=Ze(),Dt(n,e,r,i),x0(n,t,r))}}function k0(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function C0(e,t){ws=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function x0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$h(e,n)}}var tl={readContext:St,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},MI={readContext:St,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Cm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4194308,4,w0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=VI.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:km,useDebugValue:ld,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=km(!1),t=e[0];return e=OI.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Mt();if(ae){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),Re===null)throw Error(S(349));Sr&30||h0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Cm(p0.bind(null,r,s,e),[e]),r.flags|=2048,Ks(9,d0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Re.identifierPrefix;if(ae){var n=en,r=Zt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ws++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=DI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},FI={readContext:St,useCallback:T0,useContext:St,useEffect:ad,useImperativeHandle:E0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:I0,useReducer:tc,useRef:y0,useState:function(){return tc(qs)},useDebugValue:ld,useDeferredValue:function(e){var t=At();return S0(t,Te.memoizedState,e)},useTransition:function(){var e=tc(qs)[0],t=At().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1},$I={readContext:St,useCallback:T0,useContext:St,useEffect:ad,useImperativeHandle:E0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:I0,useReducer:nc,useRef:y0,useState:function(){return nc(qs)},useDebugValue:ld,useDeferredValue:function(e){var t=At();return Te===null?t.memoizedState=e:S0(t,Te.memoizedState,e)},useTransition:function(){var e=nc(qs)[0],t=At().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1};function Ai(e,t){try{var n="",r=t;do n+=dT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function rc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jI=typeof WeakMap=="function"?WeakMap:Map;function P0(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,kf=r),gf(e,t)},n}function R0(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gf(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gf(e,t),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=e2.bind(null,e,t,n),t.then(e,e))}function Pm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e)}var zI=pn.ReactCurrentOwner,rt=!1;function Ye(e,t,n,r){t.child=e===null?l0(t,null,n,r):Ii(t,e.child,n,r)}function Nm(e,t,n,r,i){n=n.render;var s=t.ref;return hi(t,i),r=sd(e,t,n,r,s,i),n=od(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(ae&&n&&Kh(t),t.flags|=1,Ye(e,t,r,i),t.child)}function bm(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,N0(e,t,s,r,i)):(e=Na(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(o,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=Ln(s,r),e.ref=t.ref,e.return=t,t.child=e}function N0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if($s(s,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,an(e,t,i)}return yf(e,t,n,r,i)}function b0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(ri,ut),ut|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(ri,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(ri,ut),ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,te(ri,ut),ut|=r;return Ye(e,t,i,n),t.child}function D0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yf(e,t,n,r,i){var s=st(n)?Tr:Ge.current;return s=Ei(t,s),hi(t,i),n=sd(e,t,n,r,s,i),r=od(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(ae&&r&&Kh(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Dm(e,t,n,r,i){if(st(n)){var s=!0;Ka(t)}else s=!1;if(hi(t,i),t.stateNode===null)xa(e,t),o0(t,n,r),mf(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=st(n)?Tr:Ge.current,u=Ei(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sm(t,o,r,u),wn=!1;var h=t.memoizedState;o.state=h,Ja(t,r,o,i),l=t.memoizedState,a!==r||h!==l||it.current||wn?(typeof c=="function"&&(pf(t,n,c,r),l=t.memoizedState),(a=wn||Im(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,i0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:xt(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=St(l):(l=st(n)?Tr:Ge.current,l=Ei(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Sm(t,o,r,l),wn=!1,h=t.memoizedState,o.state=h,Ja(t,r,o,i);var v=t.memoizedState;a!==f||h!==v||it.current||wn?(typeof m=="function"&&(pf(t,n,m,r),v=t.memoizedState),(u=wn||Im(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return vf(e,t,n,r,s,i)}function vf(e,t,n,r,i,s){D0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&vm(t,n,!1),an(e,t,s);r=t.stateNode,zI.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ii(t,e.child,null,s),t.child=Ii(t,null,a,s)):Ye(e,t,a,s),t.memoizedState=r.state,i&&vm(t,n,!0),t.child}function O0(e){var t=e.stateNode;t.pendingContext?ym(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ym(e,t.context,!1),td(e,t.containerInfo)}function Om(e,t,n,r,i){return Ti(),Qh(i),t.flags|=256,Ye(e,t,n,r),t.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function wf(e){return{baseLanes:e,cachePool:null,transitions:null}}function V0(e,t,n){var r=t.pendingProps,i=ue.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ue,i&1),e===null)return hf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hl(o,r,0,null),e=_r(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=wf(n),t.memoizedState=_f,e):ud(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return UI(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ln(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=_f,r}return s=e.child,e=s.sibling,r=Ln(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ud(e,t){return t=Hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zo(e,t,n,r){return r!==null&&Qh(r),Ii(t,e.child,null,n),e=ud(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function UI(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=rc(Error(S(422))),Zo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Hl({mode:"visible",children:r.children},i,0,null),s=_r(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Ii(t,e.child,null,o),t.child.memoizedState=wf(o),t.memoizedState=_f,s);if(!(t.mode&1))return Zo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=rc(s,r,void 0),Zo(e,t,o,r)}if(a=(o&e.childLanes)!==0,rt||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,on(e,i),Dt(r,e,i,-1))}return md(),r=rc(Error(S(421))),Zo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=t2.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ct=bn(i.nextSibling),ft=t,ae=!0,Rt=null,e!==null&&(_t[wt++]=Zt,_t[wt++]=en,_t[wt++]=Ir,Zt=e.id,en=e.overflow,Ir=t),t=ud(t,r.children),t.flags|=4096,t)}function Vm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),df(e.return,t,n)}function ic(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function L0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ye(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vm(e,n,t);else if(e.tag===19)Vm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Za(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Za(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,s);break;case"together":ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function BI(e,t,n){switch(t.tag){case 3:O0(t),Ti();break;case 5:u0(t);break;case 1:st(t.type)&&Ka(t);break;case 4:td(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Ya,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?V0(e,t,n):(te(ue,ue.current&1),e=an(e,t,n),e!==null?e.sibling:null);te(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return L0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,b0(e,t,n)}return an(e,t,n)}var M0,Ef,F0,$0;M0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};F0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fr(Wt.current);var s=null;switch(n){case"input":i=Uc(e,i),r=Uc(e,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=Wc(e,i),r=Wc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wa)}Kc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};$0=function(e,t,n,r){n!==r&&(t.flags|=4)};function es(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function HI(e,t,n){var r=t.pendingProps;switch(Gh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return st(t.type)&&qa(),ze(t),null;case 3:return r=t.stateNode,Si(),se(it),se(Ge),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(Pf(Rt),Rt=null))),Ef(e,t),ze(t),null;case 5:nd(t);var i=fr(Hs.current);if(n=t.type,e!==null&&t.stateNode!=null)F0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ze(t),null}if(e=fr(Wt.current),Xo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ft]=t,r[Us]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)ne(ls[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Hp(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":qp(r,s),ne("invalid",r)}Kc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yo(r.textContent,a,e),i=["children",""+a]):bs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Uo(r),Wp(r,s,!0);break;case"textarea":Uo(r),Kp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ft]=t,e[Us]=r,M0(e,t,!1,!1),t.stateNode=e;e:{switch(o=Gc(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)ne(ls[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Hp(e,r),i=Uc(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ne("invalid",e);break;case"textarea":qp(e,r),i=Wc(e,r),ne("invalid",e);break;default:i=r}Kc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mv(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dv(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ds(e,l):typeof l=="number"&&Ds(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",e):l!=null&&Dh(e,s,l,o))}switch(n){case"input":Uo(e),Wp(e,r,!1);break;case"textarea":Uo(e),Kp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?li(e,!!r.multiple,s,!1):r.defaultValue!=null&&li(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)$0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=fr(Hs.current),fr(Wt.current),Xo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(s=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:Yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return ze(t),null;case 13:if(se(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&ct!==null&&t.mode&1&&!(t.flags&128))n0(),Ti(),t.flags|=98560,s=!1;else if(s=Xo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ft]=t}else Ti(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else Rt!==null&&(Pf(Rt),Rt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Se===0&&(Se=3):md())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Si(),Ef(e,t),e===null&&js(t.stateNode.containerInfo),ze(t),null;case 10:return Jh(t.type._context),ze(t),null;case 17:return st(t.type)&&qa(),ze(t),null;case 19:if(se(ue),s=t.memoizedState,s===null)return ze(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)es(s,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Za(e),o!==null){for(t.flags|=128,es(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ue,ue.current&1|2),t.child}e=e.sibling}s.tail!==null&&ge()>ki&&(t.flags|=128,r=!0,es(s,!1),t.lanes=4194304)}else{if(!r)if(e=Za(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return ze(t),null}else 2*ge()-s.renderingStartTime>ki&&n!==1073741824&&(t.flags|=128,r=!0,es(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ge(),t.sibling=null,n=ue.current,te(ue,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return pd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function WI(e,t){switch(Gh(t),t.tag){case 1:return st(t.type)&&qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Si(),se(it),se(Ge),rd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nd(t),null;case 13:if(se(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ue),null;case 4:return Si(),null;case 10:return Jh(t.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var ea=!1,He=!1,qI=typeof WeakSet=="function"?WeakSet:Set,N=null;function ni(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Tf(e,t,n){try{n()}catch(r){he(e,t,r)}}var Lm=!1;function KI(e,t){if(sf=Ua,e=Bv(),qh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(of={focusedElem:e,selectionRange:n},Ua=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:xt(t.type,y),E);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){he(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=Lm,Lm=!1,v}function Es(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tf(t,n,s)}i=i.next}while(i!==r)}}function Ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function If(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function j0(e){var t=e.alternate;t!==null&&(e.alternate=null,j0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[Us],delete t[uf],delete t[PI],delete t[RI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function z0(e){return e.tag===5||e.tag===3||e.tag===4}function Mm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wa));else if(r!==4&&(e=e.child,e!==null))for(Sf(e,t,n),e=e.sibling;e!==null;)Sf(e,t,n),e=e.sibling}function Af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Af(e,t,n),e=e.sibling;e!==null;)Af(e,t,n),e=e.sibling}var De=null,Pt=!1;function yn(e,t,n){for(n=n.child;n!==null;)U0(e,t,n),n=n.sibling}function U0(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:He||ni(n,t);case 6:var r=De,i=Pt;De=null,yn(e,t,n),De=r,Pt=i,De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?Xu(e.parentNode,n):e.nodeType===1&&Xu(e,n),Ms(e)):Xu(De,n.stateNode));break;case 4:r=De,i=Pt,De=n.stateNode.containerInfo,Pt=!0,yn(e,t,n),De=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,t,o),i=i.next}while(i!==r)}yn(e,t,n);break;case 1:if(!He&&(ni(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,t,a)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,yn(e,t,n),He=r):yn(e,t,n);break;default:yn(e,t,n)}}function Fm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qI),t.forEach(function(r){var i=n2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,Pt=!1;break e;case 3:De=a.stateNode.containerInfo,Pt=!0;break e;case 4:De=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(De===null)throw Error(S(160));U0(s,o,i),De=null,Pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B0(t,e),t=t.sibling}function B0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Lt(e),r&4){try{Es(3,e,e.return),Ul(3,e)}catch(y){he(e,e.return,y)}try{Es(5,e,e.return)}catch(y){he(e,e.return,y)}}break;case 1:Ct(t,e),Lt(e),r&512&&n!==null&&ni(n,n.return);break;case 5:if(Ct(t,e),Lt(e),r&512&&n!==null&&ni(n,n.return),e.flags&32){var i=e.stateNode;try{Ds(i,"")}catch(y){he(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cv(i,s),Gc(a,o);var u=Gc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?mv(i,f):c==="dangerouslySetInnerHTML"?dv(i,f):c==="children"?Ds(i,f):Dh(i,c,f,u)}switch(a){case"input":Bc(i,s);break;case"textarea":fv(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?li(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?li(i,!!s.multiple,s.defaultValue,!0):li(i,!!s.multiple,s.multiple?[]:"",!1))}i[Us]=s}catch(y){he(e,e.return,y)}}break;case 6:if(Ct(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){he(e,e.return,y)}}break;case 3:if(Ct(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(t.containerInfo)}catch(y){he(e,e.return,y)}break;case 4:Ct(t,e),Lt(e);break;case 13:Ct(t,e),Lt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hd=ge())),r&4&&Fm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||c,Ct(t,e),He=u):Ct(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(f=N=c;N!==null;){switch(h=N,m=h.child,h.tag){case 0:case 11:case 14:case 15:Es(4,h,h.return);break;case 1:ni(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:ni(h,h.return);break;case 22:if(h.memoizedState!==null){jm(f);continue}}m!==null?(m.return=h,N=m):jm(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=pv("display",o))}catch(y){he(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){he(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ct(t,e),Lt(e),r&4&&Fm(e);break;case 21:break;default:Ct(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(z0(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ds(i,""),r.flags&=-33);var s=Mm(e);Af(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mm(e);Sf(e,a,o);break;default:throw Error(S(161))}}catch(l){he(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function GI(e,t,n){N=e,H0(e)}function H0(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ea;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||He;a=ea;var u=He;if(ea=o,(He=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?zm(i):l!==null?(l.return=o,N=l):zm(i);for(;s!==null;)N=s,H0(s),s=s.sibling;N=i,ea=a,He=u}$m(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):$m(e)}}function $m(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Tm(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tm(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ms(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}He||t.flags&512&&If(t)}catch(h){he(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function jm(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function zm(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ul(4,t)}catch(l){he(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){he(t,i,l)}}var s=t.return;try{If(t)}catch(l){he(t,s,l)}break;case 5:var o=t.return;try{If(t)}catch(l){he(t,o,l)}}}catch(l){he(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var QI=Math.ceil,nl=pn.ReactCurrentDispatcher,cd=pn.ReactCurrentOwner,It=pn.ReactCurrentBatchConfig,Q=0,Re=null,Ee=null,Le=0,ut=0,ri=Zn(0),Se=0,Gs=null,Ar=0,Bl=0,fd=0,Ts=null,nt=null,hd=0,ki=1/0,Xt=null,rl=!1,kf=null,On=null,ta=!1,Sn=null,il=0,Is=0,Cf=null,Pa=-1,Ra=0;function Ze(){return Q&6?ge():Pa!==-1?Pa:Pa=ge()}function Vn(e){return e.mode&1?Q&2&&Le!==0?Le&-Le:bI.transition!==null?(Ra===0&&(Ra=Cv()),Ra):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Ov(e.type)),e):1}function Dt(e,t,n,r){if(50<Is)throw Is=0,Cf=null,Error(S(185));vo(e,n,r),(!(Q&2)||e!==Re)&&(e===Re&&(!(Q&2)&&(Bl|=n),Se===4&&Tn(e,Le)),ot(e,r),n===1&&Q===0&&!(t.mode&1)&&(ki=ge()+500,$l&&er()))}function ot(e,t){var n=e.callbackNode;bT(e,t);var r=za(e,e===Re?Le:0);if(r===0)n!==null&&Yp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yp(n),t===1)e.tag===0?NI(Um.bind(null,e)):Zv(Um.bind(null,e)),CI(function(){!(Q&6)&&er()}),n=null;else{switch(xv(r)){case 1:n=Fh;break;case 4:n=Av;break;case 16:n=ja;break;case 536870912:n=kv;break;default:n=ja}n=J0(n,W0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W0(e,t){if(Pa=-1,Ra=0,Q&6)throw Error(S(327));var n=e.callbackNode;if(di()&&e.callbackNode!==n)return null;var r=za(e,e===Re?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=Q;Q|=2;var s=K0();(Re!==e||Le!==t)&&(Xt=null,ki=ge()+500,vr(e,t));do try{JI();break}catch(a){q0(e,a)}while(1);Xh(),nl.current=s,Q=i,Ee!==null?t=0:(Re=null,Le=0,t=Se)}if(t!==0){if(t===2&&(i=Zc(e),i!==0&&(r=i,t=xf(e,i))),t===1)throw n=Gs,vr(e,0),Tn(e,r),ot(e,ge()),n;if(t===6)Tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!YI(i)&&(t=sl(e,r),t===2&&(s=Zc(e),s!==0&&(r=s,t=xf(e,s))),t===1))throw n=Gs,vr(e,0),Tn(e,r),ot(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:ar(e,nt,Xt);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=hd+500-ge(),10<t)){if(za(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lf(ar.bind(null,e,nt,Xt),t);break}ar(e,nt,Xt);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QI(r/1960))-r,10<r){e.timeoutHandle=lf(ar.bind(null,e,nt,Xt),r);break}ar(e,nt,Xt);break;case 5:ar(e,nt,Xt);break;default:throw Error(S(329))}}}return ot(e,ge()),e.callbackNode===n?W0.bind(null,e):null}function xf(e,t){var n=Ts;return e.current.memoizedState.isDehydrated&&(vr(e,t).flags|=256),e=sl(e,t),e!==2&&(t=nt,nt=n,t!==null&&Pf(t)),e}function Pf(e){nt===null?nt=e:nt.push.apply(nt,e)}function YI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~fd,t&=~Bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Um(e){if(Q&6)throw Error(S(327));di();var t=za(e,0);if(!(t&1))return ot(e,ge()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Zc(e);r!==0&&(t=r,n=xf(e,r))}if(n===1)throw n=Gs,vr(e,0),Tn(e,t),ot(e,ge()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ar(e,nt,Xt),ot(e,ge()),null}function dd(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(ki=ge()+500,$l&&er())}}function kr(e){Sn!==null&&Sn.tag===0&&!(Q&6)&&di();var t=Q;Q|=1;var n=It.transition,r=Z;try{if(It.transition=null,Z=1,e)return e()}finally{Z=r,It.transition=n,Q=t,!(Q&6)&&er()}}function pd(){ut=ri.current,se(ri)}function vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kI(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Gh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:Si(),se(it),se(Ge),rd();break;case 5:nd(r);break;case 4:Si();break;case 13:se(ue);break;case 19:se(ue);break;case 10:Jh(r.type._context);break;case 22:case 23:pd()}n=n.return}if(Re=e,Ee=e=Ln(e.current,null),Le=ut=t,Se=0,Gs=null,fd=Bl=Ar=0,nt=Ts=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cr=null}return e}function q0(e,t){do{var n=Ee;try{if(Xh(),ka.current=tl,el){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}el=!1}if(Sr=0,Pe=Te=ce=null,ws=!1,Ws=0,cd.current=null,n===null||n.return===null){Se=1,Gs=t,Ee=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Pm(o);if(m!==null){m.flags&=-257,Rm(m,o,a,s,t),m.mode&1&&xm(s,u,t),t=m,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){xm(s,u,t),md();break e}l=Error(S(426))}}else if(ae&&a.mode&1){var E=Pm(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Rm(E,o,a,s,t),Qh(Ai(l,a));break e}}s=l=Ai(l,a),Se!==4&&(Se=2),Ts===null?Ts=[s]:Ts.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=P0(s,l,t);Em(s,p);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(On===null||!On.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=R0(s,a,t);Em(s,_);break e}}s=s.return}while(s!==null)}Q0(n)}catch(T){t=T,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function K0(){var e=nl.current;return nl.current=tl,e===null?tl:e}function md(){(Se===0||Se===3||Se===2)&&(Se=4),Re===null||!(Ar&268435455)&&!(Bl&268435455)||Tn(Re,Le)}function sl(e,t){var n=Q;Q|=2;var r=K0();(Re!==e||Le!==t)&&(Xt=null,vr(e,t));do try{XI();break}catch(i){q0(e,i)}while(1);if(Xh(),Q=n,nl.current=r,Ee!==null)throw Error(S(261));return Re=null,Le=0,Se}function XI(){for(;Ee!==null;)G0(Ee)}function JI(){for(;Ee!==null&&!IT();)G0(Ee)}function G0(e){var t=X0(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Q0(e):Ee=t,cd.current=null}function Q0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=WI(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,Ee=null;return}}else if(n=HI(n,t,ut),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Se===0&&(Se=5)}function ar(e,t,n){var r=Z,i=It.transition;try{It.transition=null,Z=1,ZI(e,t,n,r)}finally{It.transition=i,Z=r}return null}function ZI(e,t,n,r){do di();while(Sn!==null);if(Q&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(DT(e,s),e===Re&&(Ee=Re=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ta||(ta=!0,J0(ja,function(){return di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var o=Z;Z=1;var a=Q;Q|=4,cd.current=null,KI(e,n),B0(n,e),_I(of),Ua=!!sf,of=sf=null,e.current=n,GI(n),ST(),Q=a,Z=o,It.transition=s}else e.current=n;if(ta&&(ta=!1,Sn=e,il=i),s=e.pendingLanes,s===0&&(On=null),CT(n.stateNode),ot(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,e=kf,kf=null,e;return il&1&&e.tag!==0&&di(),s=e.pendingLanes,s&1?e===Cf?Is++:(Is=0,Cf=e):Is=0,er(),null}function di(){if(Sn!==null){var e=xv(il),t=It.transition,n=Z;try{if(It.transition=null,Z=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,il=0,Q&6)throw Error(S(331));var i=Q;for(Q|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Es(8,c,s)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var h=c.sibling,m=c.return;if(j0(c),c===u){N=null;break}if(h!==null){h.return=m,N=h;break}N=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Es(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var d=e.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(T){he(a,a.return,T)}if(a===o){N=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,N=_;break e}N=a.return}}if(Q=i,er(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Ol,e)}catch{}r=!0}return r}finally{Z=n,It.transition=t}}return!1}function Bm(e,t,n){t=Ai(n,t),t=P0(e,t,1),e=Dn(e,t,1),t=Ze(),e!==null&&(vo(e,1,t),ot(e,t))}function he(e,t,n){if(e.tag===3)Bm(e,e,n);else for(;t!==null;){if(t.tag===3){Bm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Ai(n,e),e=R0(t,e,1),t=Dn(t,e,1),e=Ze(),t!==null&&(vo(t,1,e),ot(t,e));break}}t=t.return}}function e2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Le&n)===n&&(Se===4||Se===3&&(Le&130023424)===Le&&500>ge()-hd?vr(e,0):fd|=n),ot(e,t)}function Y0(e,t){t===0&&(e.mode&1?(t=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):t=1);var n=Ze();e=on(e,t),e!==null&&(vo(e,t,n),ot(e,n))}function t2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Y0(e,n)}function n2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Y0(e,n)}var X0;X0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,BI(e,t,n);rt=!!(e.flags&131072)}else rt=!1,ae&&t.flags&1048576&&e0(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xa(e,t),e=t.pendingProps;var i=Ei(t,Ge.current);hi(t,n),i=sd(null,t,r,e,i,n);var s=od();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(s=!0,Ka(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ed(t),i.updater=jl,t.stateNode=i,i._reactInternals=t,mf(t,r,e,n),t=vf(null,t,r,!0,s,n)):(t.tag=0,ae&&s&&Kh(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=i2(r),e=xt(r,e),i){case 0:t=yf(null,t,r,e,n);break e;case 1:t=Dm(null,t,r,e,n);break e;case 11:t=Nm(null,t,r,e,n);break e;case 14:t=bm(null,t,r,xt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),yf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Dm(e,t,r,i,n);case 3:e:{if(O0(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,i0(e,t),Ja(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ai(Error(S(423)),t),t=Om(e,t,r,n,i);break e}else if(r!==i){i=Ai(Error(S(424)),t),t=Om(e,t,r,n,i);break e}else for(ct=bn(t.stateNode.containerInfo.firstChild),ft=t,ae=!0,Rt=null,n=l0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){t=an(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return u0(t),e===null&&hf(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,af(r,i)?o=null:s!==null&&af(r,s)&&(t.flags|=32),D0(e,t),Ye(e,t,o,n),t.child;case 6:return e===null&&hf(t),null;case 13:return V0(e,t,n);case 4:return td(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ii(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Nm(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,te(Ya,r._currentValue),r._currentValue=o,s!==null)if(Ot(s.value,o)){if(s.children===i.children&&!it.current){t=an(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),df(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),df(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hi(t,n),i=St(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),bm(e,t,r,i,n);case 15:return N0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),xa(e,t),t.tag=1,st(r)?(e=!0,Ka(t)):e=!1,hi(t,n),o0(t,r,i),mf(t,r,i,n),vf(null,t,r,!0,e,n);case 19:return L0(e,t,n);case 22:return b0(e,t,n)}throw Error(S(156,t.tag))};function J0(e,t){return Sv(e,t)}function r2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new r2(e,t,n,r)}function gd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i2(e){if(typeof e=="function")return gd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vh)return 11;if(e===Lh)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Na(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")gd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kr:return _r(n.children,i,s,t);case Oh:o=8,i|=8;break;case Fc:return e=Tt(12,n,t,i|2),e.elementType=Fc,e.lanes=s,e;case $c:return e=Tt(13,n,t,i),e.elementType=$c,e.lanes=s,e;case jc:return e=Tt(19,n,t,i),e.elementType=jc,e.lanes=s,e;case av:return Hl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sv:o=10;break e;case ov:o=9;break e;case Vh:o=11;break e;case Lh:o=14;break e;case _n:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Tt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function _r(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Hl(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=av,e.lanes=n,e.stateNode={isHidden:!1},e}function sc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function oc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function s2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yd(e,t,n,r,i,s,o,a,l){return e=new s2(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Tt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(s),e}function o2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Z0(e){if(!e)return Hn;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(st(n))return Jv(e,n,t)}return t}function e1(e,t,n,r,i,s,o,a,l){return e=yd(n,r,!0,e,i,s,o,a,l),e.context=Z0(null),n=e.current,r=Ze(),i=Vn(n),s=nn(r,i),s.callback=t??null,Dn(n,s,i),e.current.lanes=i,vo(e,i,r),ot(e,r),e}function Wl(e,t,n,r){var i=t.current,s=Ze(),o=Vn(i);return n=Z0(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dn(i,t,o),e!==null&&(Dt(e,i,o,s),Aa(e,i,o)),o}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vd(e,t){Hm(e,t),(e=e.alternate)&&Hm(e,t)}function a2(){return null}var t1=typeof reportError=="function"?reportError:function(e){console.error(e)};function _d(e){this._internalRoot=e}ql.prototype.render=_d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Wl(e,t,null,null)};ql.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kr(function(){Wl(null,e,null,null)}),t[sn]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&Dv(e)}};function wd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function l2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ol(o);s.call(u)}}var o=e1(t,r,e,0,null,!1,!1,"",Wm);return e._reactRootContainer=o,e[sn]=o.current,js(e.nodeType===8?e.parentNode:e),kr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ol(l);a.call(u)}}var l=yd(e,0,!1,null,null,!1,!1,"",Wm);return e._reactRootContainer=l,e[sn]=l.current,js(e.nodeType===8?e.parentNode:e),kr(function(){Wl(t,l,n,r)}),l}function Gl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ol(o);a.call(l)}}Wl(t,o,e,i)}else o=l2(n,t,e,i,r);return ol(o)}Pv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=as(t.pendingLanes);n!==0&&($h(t,n|1),ot(t,ge()),!(Q&6)&&(ki=ge()+500,er()))}break;case 13:kr(function(){var r=on(e,1);if(r!==null){var i=Ze();Dt(r,e,1,i)}}),vd(e,1)}};jh=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=Ze();Dt(t,e,134217728,n)}vd(e,134217728)}};Rv=function(e){if(e.tag===13){var t=Vn(e),n=on(e,t);if(n!==null){var r=Ze();Dt(n,e,t,r)}vd(e,t)}};Nv=function(){return Z};bv=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Yc=function(e,t,n){switch(t){case"input":if(Bc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fl(r);if(!i)throw Error(S(90));uv(r),Bc(r,i)}}}break;case"textarea":fv(e,n);break;case"select":t=n.value,t!=null&&li(e,!!n.multiple,t,!1)}};vv=dd;_v=kr;var u2={usingClientEntryPoint:!1,Events:[wo,Xr,Fl,gv,yv,dd]},ts={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},c2={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tv(e),e===null?null:e.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||a2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{Ol=na.inject(c2),Ht=na}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u2;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(t))throw Error(S(200));return o2(e,t,null,n)};gt.createRoot=function(e,t){if(!wd(e))throw Error(S(299));var n=!1,r="",i=t1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yd(e,1,!1,null,null,n,!1,r,i),e[sn]=t.current,js(e.nodeType===8?e.parentNode:e),new _d(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Tv(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return kr(e)};gt.hydrate=function(e,t,n){if(!Kl(t))throw Error(S(200));return Gl(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!wd(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=t1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=e1(t,null,e,1,n??null,i,!1,s,o),e[sn]=t.current,js(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ql(t)};gt.render=function(e,t,n){if(!Kl(t))throw Error(S(200));return Gl(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(S(40));return e._reactRootContainer?(kr(function(){Gl(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};gt.unstable_batchedUpdates=dd;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Kl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Gl(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function n1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n1)}catch(e){console.error(e)}}n1(),ev.exports=gt;var f2=ev.exports,qm=f2;Lc.createRoot=qm.createRoot,Lc.hydrateRoot=qm.hydrateRoot;var Km;window.addEventListener("scroll",function(){let e=document.querySelector(".navbar");var t=window.scrollY||document.documentElement.scrollTop;t>Km?e.style.top="-80px":e.style.top="0",Km=t});/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qs(){return Qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qs.apply(this,arguments)}var An;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(An||(An={}));const Gm="popstate";function h2(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:a="",hash:l=""}=Mr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Rf("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:al(s))}function r(i,s){Ql(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return p2(t,n,r,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ql(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function d2(){return Math.random().toString(36).substr(2,8)}function Qm(e,t){return{usr:e.state,key:e.key,idx:t}}function Rf(e,t,n,r){return n===void 0&&(n=null),Qs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mr(t):t,{state:n,key:t&&t.key||r||d2()})}function al(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=An.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Qs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=An.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:p})}function h(E,p){a=An.Push;let d=Rf(y.location,E,p);n&&n(d,E),u=c()+1;let g=Qm(d,u),_=y.createHref(d);try{o.pushState(g,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function m(E,p){a=An.Replace;let d=Rf(y.location,E,p);n&&n(d,E),u=c();let g=Qm(d,u),_=y.createHref(d);o.replaceState(g,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:al(E);return ye(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gm,f),l=E,()=>{i.removeEventListener(Gm,f),l=null}},createHref(E){return t(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(E){return o.go(E)}};return y}var Ym;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ym||(Ym={}));function m2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mr(t):t,i=Ed(r.pathname||"/",n);if(i==null)return null;let s=r1(e);g2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=A2(s[a],C2(i));return o}function r1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Mn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),r1(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:I2(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of i1(s.path))i(s,o,l)}),t}function i1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=i1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function g2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:S2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y2=/^:\w+$/,v2=3,_2=2,w2=1,E2=10,T2=-2,Xm=e=>e==="*";function I2(e,t){let n=e.split("/"),r=n.length;return n.some(Xm)&&(r+=T2),t&&(r+=_2),n.filter(i=>!Xm(i)).reduce((i,s)=>i+(y2.test(s)?v2:s===""?w2:E2),r)}function S2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function A2(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=s1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:Mn([i,c.pathname]),pathnameBase:N2(Mn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Mn([i,c.pathnameBase]))}return s}function s1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=k2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=x2(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function k2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ql(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function C2(e){try{return decodeURI(e)}catch(t){return Ql(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function x2(e,t){try{return decodeURIComponent(e)}catch(n){return Ql(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ed(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function P2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Mr(e):e;return{pathname:n?n.startsWith("/")?n:R2(n,t):t,search:b2(r),hash:D2(i)}}function R2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ac(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function a1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Mr(e):(i=Qs({},e),ye(!i.pathname||!i.pathname.includes("?"),ac("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),ac("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),ac("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=P2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Mn=e=>e.join("/").replace(/\/\/+/g,"/"),N2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),b2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,D2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function O2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const l1=["post","put","patch","delete"];new Set(l1);const V2=["get",...l1];new Set(V2);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}const Td=k.createContext(null),u1=k.createContext(null),Fr=k.createContext(null),Yl=k.createContext(null),mn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),c1=k.createContext(null);function L2(e,t){let{relative:n}=t===void 0?{}:t;Fi()||ye(!1);let{basename:r,navigator:i}=k.useContext(Fr),{hash:s,pathname:o,search:a}=Id(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Mn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Fi(){return k.useContext(Yl)!=null}function $i(){return Fi()||ye(!1),k.useContext(Yl).location}function ul(e){Fi()||ye(!1);let{pathname:t}=$i();return k.useMemo(()=>s1(e,t),[t,e])}function f1(e){k.useContext(Fr).static||k.useLayoutEffect(e)}function M2(){let{isDataRoute:e}=k.useContext(mn);return e?Z2():F2()}function F2(){Fi()||ye(!1);let e=k.useContext(Td),{basename:t,navigator:n}=k.useContext(Fr),{matches:r}=k.useContext(mn),{pathname:i}=$i(),s=JSON.stringify(o1(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return f1(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=a1(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Mn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const $2=k.createContext(null);function j2(e){let t=k.useContext(mn).outlet;return t&&k.createElement($2.Provider,{value:e},t)}function z2(){let{matches:e}=k.useContext(mn),t=e[e.length-1];return t?t.params:{}}function Id(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(mn),{pathname:i}=$i(),s=JSON.stringify(o1(r).map(o=>o.pathnameBase));return k.useMemo(()=>a1(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function U2(e,t){return B2(e,t)}function B2(e,t,n){Fi()||ye(!1);let{navigator:r}=k.useContext(Fr),{matches:i}=k.useContext(mn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=$i(),u;if(t){var c;let y=typeof t=="string"?Mr(t):t;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||ye(!1),u=y}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",m=m2(e,{pathname:h}),v=G2(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Mn([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Mn([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&v?k.createElement(Yl.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:An.Pop}},v):v}function H2(){let e=J2(),t=O2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,s)}const W2=k.createElement(H2,null);class q2 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(mn.Provider,{value:this.props.routeContext},k.createElement(c1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K2(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Td);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(mn.Provider,{value:t},r)}function G2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ye(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||W2);let h=t.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=f:l.route.Component?v=k.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,k.createElement(K2,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(q2,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var h1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(h1||{}),cl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cl||{});function Q2(e){let t=k.useContext(Td);return t||ye(!1),t}function Y2(e){let t=k.useContext(u1);return t||ye(!1),t}function X2(e){let t=k.useContext(mn);return t||ye(!1),t}function d1(e){let t=X2(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function J2(){var e;let t=k.useContext(c1),n=Y2(cl.UseRouteError),r=d1(cl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Z2(){let{router:e}=Q2(h1.UseNavigateStable),t=d1(cl.UseNavigateStable),n=k.useRef(!1);return f1(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ll({fromRouteId:t},s)))},[e,t])}function eS(e){return j2(e.context)}function Ur(e){ye(!1)}function tS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=An.Pop,navigator:s,static:o=!1}=e;Fi()&&ye(!1);let a=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Mr(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:m="default"}=r,v=k.useMemo(()=>{let y=Ed(u,a);return y==null?null:{location:{pathname:y,search:c,hash:f,state:h,key:m},navigationType:i}},[a,u,c,f,h,m,i]);return v==null?null:k.createElement(Fr.Provider,{value:l},k.createElement(Yl.Provider,{children:n,value:v}))}function nS(e){let{children:t,location:n}=e;return U2(Nf(t),n)}new Promise(()=>{});function Nf(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Nf(r.props.children,s));return}r.type!==Ur&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Nf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fl.apply(this,arguments)}function p1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function iS(e,t){return e.button===0&&(!t||t==="_self")&&!rS(e)}const sS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],oS=["aria-current","caseSensitive","className","end","style","to","children"],aS="startTransition",Jm=tT[aS];function lS(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=h2({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=k.useCallback(f=>{u&&Jm?Jm(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(tS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const uS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,m1=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,f=p1(t,sS),{basename:h}=k.useContext(Fr),m,v=!1;if(typeof u=="string"&&cS.test(u)&&(m=u,uS))try{let d=new URL(window.location.href),g=u.startsWith("//")?new URL(d.protocol+u):new URL(u),_=Ed(g.pathname,h);g.origin===d.origin&&_!=null?u=_+g.search+g.hash:v=!0}catch{}let y=L2(u,{relative:i}),E=fS(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||E(d)}return k.createElement("a",fl({},f,{href:m||y,onClick:v||s?r:p,ref:n,target:l}))}),pi=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=t,c=p1(t,oS),f=Id(l,{relative:c.relative}),h=$i(),m=k.useContext(u1),{navigator:v}=k.useContext(Fr),y=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,E=h.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(E=E.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let d=E===y||!o&&E.startsWith(y)&&E.charAt(y.length)==="/",g=p!=null&&(p===y||!o&&p.startsWith(y)&&p.charAt(y.length)==="/"),_=d?r:void 0,T;typeof s=="function"?T=s({isActive:d,isPending:g}):T=[s,d?"active":null,g?"pending":null].filter(Boolean).join(" ");let x=typeof a=="function"?a({isActive:d,isPending:g}):a;return k.createElement(m1,fl({},c,{"aria-current":_,className:T,ref:n,style:x,to:l}),typeof u=="function"?u({isActive:d,isPending:g}):u)});var Zm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Zm||(Zm={}));var eg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(eg||(eg={}));function fS(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=M2(),l=$i(),u=Id(e,{relative:o});return k.useCallback(c=>{if(iS(c,n)){c.preventDefault();let f=r!==void 0?r:al(l)===al(u);a(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}const Sd="/simple-banking-app/assets/money-5edb62b0.webp";function tg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tg(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hl(e){"@babel/helpers - typeof";return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hl(e)}function hS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ng(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dS(e,t,n){return t&&ng(e.prototype,t),n&&ng(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ad(e,t){return mS(e)||yS(e,t)||g1(e,t)||_S()}function To(e){return pS(e)||gS(e)||g1(e)||vS()}function pS(e){if(Array.isArray(e))return bf(e)}function mS(e){if(Array.isArray(e))return e}function gS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function g1(e,t){if(e){if(typeof e=="string")return bf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bf(e,t)}}function bf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rg=function(){},kd={},y1={},v1=null,_1={mark:rg,measure:rg};try{typeof window<"u"&&(kd=window),typeof document<"u"&&(y1=document),typeof MutationObserver<"u"&&(v1=MutationObserver),typeof performance<"u"&&(_1=performance)}catch{}var wS=kd.navigator||{},ig=wS.userAgent,sg=ig===void 0?"":ig,Wn=kd,oe=y1,og=v1,ra=_1;Wn.document;var gn=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",w1=~sg.indexOf("MSIE")||~sg.indexOf("Trident/"),ia,sa,oa,aa,la,ln="___FONT_AWESOME___",Df=16,E1="fa",T1="svg-inline--fa",Cr="data-fa-i2svg",Of="data-fa-pseudo-element",ES="data-fa-pseudo-element-pending",Cd="data-prefix",xd="data-icon",ag="fontawesome-i2svg",TS="async",IS=["HTML","HEAD","STYLE","SCRIPT"],I1=function(){try{return!0}catch{return!1}}(),re="classic",de="sharp",Pd=[re,de];function Io(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[re]}})}var Ys=Io((ia={},ke(ia,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ke(ia,de,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ia)),Xs=Io((sa={},ke(sa,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ke(sa,de,{solid:"fass",regular:"fasr",light:"fasl"}),sa)),Js=Io((oa={},ke(oa,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ke(oa,de,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),oa)),SS=Io((aa={},ke(aa,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ke(aa,de,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),aa)),AS=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,S1="fa-layers-text",kS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,CS=Io((la={},ke(la,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ke(la,de,{900:"fass",400:"fasr",300:"fasl"}),la)),A1=[1,2,3,4,5,6,7,8,9,10],xS=A1.concat([11,12,13,14,15,16,17,18,19,20]),PS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zs=new Set;Object.keys(Xs[re]).map(Zs.add.bind(Zs));Object.keys(Xs[de]).map(Zs.add.bind(Zs));var RS=[].concat(Pd,To(Zs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hr.GROUP,hr.SWAP_OPACITY,hr.PRIMARY,hr.SECONDARY]).concat(A1.map(function(e){return"".concat(e,"x")})).concat(xS.map(function(e){return"w-".concat(e)})),Ss=Wn.FontAwesomeConfig||{};function NS(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function bS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var DS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DS.forEach(function(e){var t=Ad(e,2),n=t[0],r=t[1],i=bS(NS(n));i!=null&&(Ss[r]=i)})}var k1={styleDefault:"solid",familyDefault:"classic",cssPrefix:E1,replacementClass:T1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ss.familyPrefix&&(Ss.cssPrefix=Ss.familyPrefix);var Ci=R(R({},k1),Ss);Ci.autoReplaceSvg||(Ci.observeMutations=!1);var O={};Object.keys(k1).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){Ci[e]=n,As.forEach(function(r){return r(O)})},get:function(){return Ci[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){Ci.cssPrefix=t,As.forEach(function(n){return n(O)})},get:function(){return Ci.cssPrefix}});Wn.FontAwesomeConfig=O;var As=[];function OS(e){return As.push(e),function(){As.splice(As.indexOf(e),1)}}var vn=Df,zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function VS(e){if(!(!e||!gn)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return oe.head.insertBefore(t,r),e}}var LS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function eo(){for(var e=12,t="";e-- >0;)t+=LS[Math.random()*62|0];return t}function ji(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Rd(e){return e.classList?ji(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function C1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function MS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(C1(e[n]),'" ')},"").trim()}function Xl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Nd(e){return e.size!==zt.size||e.x!==zt.x||e.y!==zt.y||e.rotate!==zt.rotate||e.flipX||e.flipY}function FS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function $S(e){var t=e.transform,n=e.width,r=n===void 0?Df:n,i=e.height,s=i===void 0?Df:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&w1?l+="translate(".concat(t.x/vn-r/2,"em, ").concat(t.y/vn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/vn,"em), calc(-50% + ").concat(t.y/vn,"em)) "):l+="translate(".concat(t.x/vn,"em, ").concat(t.y/vn,"em) "),l+="scale(".concat(t.size/vn*(t.flipX?-1:1),", ").concat(t.size/vn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jS=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function x1(){var e=E1,t=T1,n=O.cssPrefix,r=O.replacementClass,i=jS;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var lg=!1;function lc(){O.autoAddCss&&!lg&&(VS(x1()),lg=!0)}var zS={mixout:function(){return{dom:{css:x1,insertCss:lc}}},hooks:function(){return{beforeDOMElementCreation:function(){lc()},beforeI2svg:function(){lc()}}}},un=Wn||{};un[ln]||(un[ln]={});un[ln].styles||(un[ln].styles={});un[ln].hooks||(un[ln].hooks={});un[ln].shims||(un[ln].shims=[]);var Nt=un[ln],P1=[],US=function e(){oe.removeEventListener("DOMContentLoaded",e),dl=1,P1.map(function(t){return t()})},dl=!1;gn&&(dl=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),dl||oe.addEventListener("DOMContentLoaded",US));function BS(e){gn&&(dl?setTimeout(e,0):P1.push(e))}function So(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?C1(e):"<".concat(t," ").concat(MS(r),">").concat(s.map(So).join(""),"</").concat(t,">")}function ug(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var HS=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},uc=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?HS(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,t[u],u,t);return c};function WS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Vf(e){var t=WS(e);return t.length===1?t[0].toString(16):null}function qS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function cg(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=cg(t);typeof Nt.hooks.addPack=="function"&&!i?Nt.hooks.addPack(e,cg(t)):Nt.styles[e]=R(R({},Nt.styles[e]||{}),s),e==="fas"&&Lf("fa",t)}var ua,ca,fa,ii=Nt.styles,KS=Nt.shims,GS=(ua={},ke(ua,re,Object.values(Js[re])),ke(ua,de,Object.values(Js[de])),ua),bd=null,R1={},N1={},b1={},D1={},O1={},QS=(ca={},ke(ca,re,Object.keys(Ys[re])),ke(ca,de,Object.keys(Ys[de])),ca);function YS(e){return~RS.indexOf(e)}function XS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!YS(i)?i:null}var V1=function(){var t=function(s){return uc(ii,function(o,a,l){return o[l]=uc(a,s,{}),o},{})};R1=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),N1=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),O1=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ii||O.autoFetchSvg,r=uc(KS,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});b1=r.names,D1=r.unicodes,bd=Jl(O.styleDefault,{family:O.familyDefault})};OS(function(e){bd=Jl(e.styleDefault,{family:O.familyDefault})});V1();function Dd(e,t){return(R1[e]||{})[t]}function JS(e,t){return(N1[e]||{})[t]}function dr(e,t){return(O1[e]||{})[t]}function L1(e){return b1[e]||{prefix:null,iconName:null}}function ZS(e){var t=D1[e],n=Dd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qn(){return bd}var Od=function(){return{prefix:null,iconName:null,rest:[]}};function Jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?re:n,i=Ys[r][e],s=Xs[r][e]||Xs[r][i],o=e in Nt.styles?e:null;return s||o||null}var fg=(fa={},ke(fa,re,Object.keys(Js[re])),ke(fa,de,Object.keys(Js[de])),fa);function Zl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ke(t,re,"".concat(O.cssPrefix,"-").concat(re)),ke(t,de,"".concat(O.cssPrefix,"-").concat(de)),t),o=null,a=re;(e.includes(s[re])||e.some(function(u){return fg[re].includes(u)}))&&(a=re),(e.includes(s[de])||e.some(function(u){return fg[de].includes(u)}))&&(a=de);var l=e.reduce(function(u,c){var f=XS(O.cssPrefix,c);if(ii[c]?(c=GS[a].includes(c)?SS[a][c]:c,o=c,u.prefix=c):QS[a].indexOf(c)>-1?(o=c,u.prefix=Jl(c,{family:a})):f?u.iconName=f:c!==O.replacementClass&&c!==s[re]&&c!==s[de]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?L1(u.iconName):{},m=dr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||m||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ii.far&&ii.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},Od());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===de&&(ii.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=dr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qn()||"fas"),l}var eA=function(){function e(){hS(this,e),this.definitions={}}return dS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),Lf(a,o[a]);var l=Js[re][a];l&&Lf(l,o[a]),V1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),hg=[],si={},mi={},tA=Object.keys(mi);function nA(e,t){var n=t.mixoutsTo;return hg=e,si={},Object.keys(mi).forEach(function(r){tA.indexOf(r)===-1&&delete mi[r]}),hg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),hl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){si[o]||(si[o]=[]),si[o].push(s[o])})}r.provides&&r.provides(mi)}),n}function Mf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=si[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function xr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=si[e]||[];i.forEach(function(s){s.apply(null,n)})}function cn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return mi[e]?mi[e].apply(null,t):void 0}function Ff(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||qn();if(t)return t=dr(n,t)||t,ug(M1.definitions,n,t)||ug(Nt.styles,n,t)}var M1=new eA,rA=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,xr("noAuto")},iA={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gn?(xr("beforeI2svg",t),cn("pseudoElements2svg",t),cn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,BS(function(){oA({autoReplaceSvgRoot:n}),xr("watch",t)})}},sA={icon:function(t){if(t===null)return null;if(hl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Jl(t[0]);return{prefix:r,iconName:dr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(AS))){var i=Zl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||qn(),iconName:dr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=qn();return{prefix:s,iconName:dr(s,t)||t}}}},vt={noAuto:rA,config:O,dom:iA,parse:sA,library:M1,findIconDefinition:Ff,toHtml:So},oA=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(Nt.styles).length>0||O.autoFetchSvg)&&gn&&O.autoReplaceSvg&&vt.dom.i2svg({node:r})};function eu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return So(r)})}}),Object.defineProperty(e,"node",{get:function(){if(gn){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function aA(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Nd(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Xl(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function lA(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Vd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,m=h===void 0?!1:h,v=r.found?r:n,y=v.width,E=v.height,p=i==="fak",d=[O.replacementClass,s?"".concat(O.cssPrefix,"-").concat(s):""].filter(function(Y){return f.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(f.classes).join(" "),g={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};m&&(g.attributes[Cr]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||eo())},children:[l]}),delete g.attributes.title);var T=R(R({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},_),f.styles)}),x=r.found&&n.found?cn("generateAbstractMask",T)||{children:[],attributes:{}}:cn("generateAbstractIcon",T)||{children:[],attributes:{}},P=x.children,V=x.attributes;return T.children=P,T.attributes=V,a?lA(T):aA(T)}function dg(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Cr]="");var c=R({},o.styles);Nd(i)&&(c.transform=$S({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Xl(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function uA(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Xl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cc=Nt.styles;function $f(e){var t=e[0],n=e[1],r=e.slice(4),i=Ad(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(hr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(hr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(hr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var cA={found:!1,width:512,height:512};function fA(e,t){!I1&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jf(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=qn()),new Promise(function(r,i){if(cn("missingIconAbstract"),n==="fa"){var s=L1(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&cc[t]&&cc[t][e]){var o=cc[t][e];return r($f(o))}fA(e,t),r(R(R({},cA),{},{icon:O.showMissingIcons&&e?cn("missingIconAbstract")||{}:{}}))})}var pg=function(){},zf=O.measurePerformance&&ra&&ra.mark&&ra.measure?ra:{mark:pg,measure:pg},us='FA "6.4.2"',hA=function(t){return zf.mark("".concat(us," ").concat(t," begins")),function(){return F1(t)}},F1=function(t){zf.mark("".concat(us," ").concat(t," ends")),zf.measure("".concat(us," ").concat(t),"".concat(us," ").concat(t," begins"),"".concat(us," ").concat(t," ends"))},Ld={begin:hA,end:F1},ba=function(){};function mg(e){var t=e.getAttribute?e.getAttribute(Cr):null;return typeof t=="string"}function dA(e){var t=e.getAttribute?e.getAttribute(Cd):null,n=e.getAttribute?e.getAttribute(xd):null;return t&&n}function pA(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function mA(){if(O.autoReplaceSvg===!0)return Da.replace;var e=Da[O.autoReplaceSvg];return e||Da.replace}function gA(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function yA(e){return oe.createElement(e)}function $1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gA:yA:n;if(typeof e=="string")return oe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild($1(o,{ceFn:r}))}),i}function vA(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Da={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore($1(i),n)}),n.getAttribute(Cr)===null&&O.keepOriginalSource){var r=oe.createComment(vA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Rd(n).indexOf(O.replacementClass))return Da.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return So(a)}).join(`
`);n.setAttribute(Cr,""),n.innerHTML=o}};function gg(e){e()}function j1(e,t){var n=typeof t=="function"?t:ba;if(e.length===0)n();else{var r=gg;O.mutateApproach===TS&&(r=Wn.requestAnimationFrame||gg),r(function(){var i=mA(),s=Ld.begin("mutate");e.map(i),s(),n()})}}var Md=!1;function z1(){Md=!0}function Uf(){Md=!1}var pl=null;function yg(e){if(og&&O.observeMutations){var t=e.treeCallback,n=t===void 0?ba:t,r=e.nodeCallback,i=r===void 0?ba:r,s=e.pseudoElementsCallback,o=s===void 0?ba:s,a=e.observeMutationsRoot,l=a===void 0?oe:a;pl=new og(function(u){if(!Md){var c=qn();ji(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!mg(f.addedNodes[0])&&(O.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&mg(f.target)&&~PS.indexOf(f.attributeName))if(f.attributeName==="class"&&dA(f.target)){var h=Zl(Rd(f.target)),m=h.prefix,v=h.iconName;f.target.setAttribute(Cd,m||c),v&&f.target.setAttribute(xd,v)}else pA(f.target)&&i(f.target)})}}),gn&&pl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _A(){pl&&pl.disconnect()}function wA(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function EA(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Zl(Rd(e));return i.prefix||(i.prefix=qn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=JS(i.prefix,e.innerText)||Dd(i.prefix,Vf(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function TA(e){var t=ji(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||eo()):(t["aria-hidden"]="true",t.focusable="false")),t}function IA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=EA(e),r=n.iconName,i=n.prefix,s=n.rest,o=TA(e),a=Mf("parseNodeAttributes",{},e),l=t.styleParser?wA(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var SA=Nt.styles;function U1(e){var t=O.autoReplaceSvg==="nest"?vg(e,{styleParser:!1}):vg(e);return~t.extra.classes.indexOf(S1)?cn("generateLayersText",e,t):cn("generateSvgReplacementMutation",e,t)}var Kn=new Set;Pd.map(function(e){Kn.add("fa-".concat(e))});Object.keys(Ys[re]).map(Kn.add.bind(Kn));Object.keys(Ys[de]).map(Kn.add.bind(Kn));Kn=To(Kn);function _g(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gn)return Promise.resolve();var n=oe.documentElement.classList,r=function(f){return n.add("".concat(ag,"-").concat(f))},i=function(f){return n.remove("".concat(ag,"-").concat(f))},s=O.autoFetchSvg?Kn:Pd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(SA));s.includes("fa")||s.push("fa");var o=[".".concat(S1,":not([").concat(Cr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Cr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ji(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ld.begin("onTree"),u=a.reduce(function(c,f){try{var h=U1(f);h&&c.push(h)}catch(m){I1||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){j1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function AA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;U1(e).then(function(n){n&&j1([n],t)})}function kA(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ff(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ff(i||{})),e(r,R(R({},n),{},{mask:i}))}}var CA=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?zt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,m=n.titleId,v=m===void 0?null:m,y=n.classes,E=y===void 0?[]:y,p=n.attributes,d=p===void 0?{}:p,g=n.styles,_=g===void 0?{}:g;if(t){var T=t.prefix,x=t.iconName,P=t.icon;return eu(R({type:"icon"},t),function(){return xr("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(h?d["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(v||eo()):(d["aria-hidden"]="true",d.focusable="false")),Vd({icons:{main:$f(P),mask:l?$f(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:x,transform:R(R({},zt),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:_,classes:E}})})}},xA={mixout:function(){return{icon:kA(CA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_g,n.nodeCallback=AA,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?oe:r,s=n.callback,o=s===void 0?function(){}:s;return _g(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(m,v){Promise.all([jf(i,a),c.iconName?jf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=Ad(y,2),p=E[0],d=E[1];m([n,Vd({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Xl(a);l.length>0&&(i.style=l);var u;return Nd(o)&&(u=cn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},PA={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return eu({type:"layer"},function(){xr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(To(s)).join(" ")},children:o}]})}}}},RA={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return eu({type:"counter",content:n},function(){return xr("beforeDOMElementCreation",{content:n,params:r}),uA({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(To(a))}})})}}}},NA={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?zt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,m=h===void 0?{}:h;return eu({type:"text",content:n},function(){return xr("beforeDOMElementCreation",{content:n,params:r}),dg({content:n,transform:R(R({},zt),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(O.cssPrefix,"-layers-text")].concat(To(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(w1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,dg({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},bA=new RegExp('"',"ug"),wg=[1105920,1112319];function DA(e){var t=e.replace(bA,""),n=qS(t,0),r=n>=wg[0]&&n<=wg[1],i=t.length===2?t[0]===t[1]:!1;return{value:Vf(i?t[0]:t),isSecondary:r||i}}function Eg(e,t){var n="".concat(ES).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=ji(e.children),o=s.filter(function(P){return P.getAttribute(Of)===t})[0],a=Wn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(kS),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?de:re,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xs[h][l[2].toLowerCase()]:CS[h][u],v=DA(f),y=v.value,E=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Dd(m,y),g=d;if(p){var _=ZS(y);_.iconName&&_.prefix&&(d=_.iconName,m=_.prefix)}if(d&&!E&&(!o||o.getAttribute(Cd)!==m||o.getAttribute(xd)!==g)){e.setAttribute(n,g),o&&e.removeChild(o);var T=IA(),x=T.extra;x.attributes[Of]=t,jf(d,m).then(function(P){var V=Vd(R(R({},T),{},{icons:{main:P,mask:Od()},prefix:m,iconName:g,extra:x,watchable:!0})),Y=oe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=V.map(function(U){return So(U)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function OA(e){return Promise.all([Eg(e,"::before"),Eg(e,"::after")])}function VA(e){return e.parentNode!==document.head&&!~IS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Of)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Tg(e){if(gn)return new Promise(function(t,n){var r=ji(e.querySelectorAll("*")).filter(VA).map(OA),i=Ld.begin("searchPseudoElements");z1(),Promise.all(r).then(function(){i(),Uf(),t()}).catch(function(){i(),Uf(),n()})})}var LA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Tg,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?oe:r;O.searchPseudoElements&&Tg(i)}}},Ig=!1,MA={mixout:function(){return{dom:{unwatch:function(){z1(),Ig=!0}}}},hooks:function(){return{bootstrap:function(){yg(Mf("mutationObserverCallbacks",{}))},noAuto:function(){_A()},watch:function(n){var r=n.observeMutationsRoot;Ig?Uf():yg(Mf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Sg=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},FA={mixout:function(){return{parse:{transform:function(n){return Sg(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Sg(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:R({},m.outer),children:[{tag:"g",attributes:R({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),m.path)}]}]}}}},fc={x:0,y:0,width:"100%",height:"100%"};function Ag(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $A(e){return e.tag==="g"?e.children:[e]}var jA={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Zl(i.split(" ").map(function(o){return o.trim()})):Od();return s.prefix||(s.prefix=qn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,m=FS({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:R(R({},fc),{},{fill:"white"})},y=c.children?{children:c.children.map(Ag)}:{},E={tag:"g",attributes:R({},m.inner),children:[Ag(R({tag:c.tag,attributes:R(R({},c.attributes),m.path)},y))]},p={tag:"g",attributes:R({},m.outer),children:[E]},d="mask-".concat(a||eo()),g="clip-".concat(a||eo()),_={tag:"mask",attributes:R(R({},fc),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:$A(h)},_]};return r.push(T,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},fc)}),{children:r,attributes:i}}}},zA={provides:function(t){var n=!1;Wn.matchMedia&&(n=Wn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},UA={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},BA=[zS,xA,PA,RA,NA,LA,MA,FA,jA,zA,UA];nA(BA,{mixoutsTo:vt});vt.noAuto;vt.config;vt.library;vt.dom;var Bf=vt.parse;vt.findIconDefinition;vt.toHtml;var HA=vt.icon;vt.layer;vt.text;vt.counter;var B1={exports:{}},WA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qA=WA,KA=qA;function H1(){}function W1(){}W1.resetWarningCache=H1;var GA=function(){function e(r,i,s,o,a,l){if(l!==KA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W1,resetWarningCache:H1};return n.PropTypes=n,n};B1.exports=GA();var QA=B1.exports;const H=By(QA);function kg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kg(Object(n),!0).forEach(function(r){oi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ml(e){"@babel/helpers - typeof";return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ml(e)}function oi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function YA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function XA(e,t){if(e==null)return{};var n=YA(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hf(e){return JA(e)||ZA(e)||ek(e)||tk()}function JA(e){if(Array.isArray(e))return Wf(e)}function ZA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ek(e,t){if(e){if(typeof e=="string")return Wf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wf(e,t)}}function Wf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nk(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,m=e.inverse,v=e.border,y=e.listItem,E=e.flip,p=e.size,d=e.rotation,g=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":m,"fa-border":v,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},oi(t,"fa-".concat(p),typeof p<"u"&&p!==null),oi(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),oi(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),oi(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(T){return _[T]?T:null}).filter(function(T){return T})}function rk(e){return e=e-0,e===e}function q1(e){return rk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ik=["style"];function sk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ok(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=q1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[sk(i)]=s:t[i]=s,t},{})}function K1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return K1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=ok(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[q1(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=XA(n,ik);return i.attrs.style=kn(kn({},i.attrs.style),o),e.apply(void 0,[t.tag,kn(kn({},i.attrs),a)].concat(Hf(r)))}var G1=!1;try{G1=!0}catch{}function ak(){if(!G1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Cg(e){if(e&&ml(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bf.icon)return Bf.icon(e);if(e===null)return null;if(e&&ml(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function hc(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?oi({},e,t):{}}var ht=Rh.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,s=e.className,o=e.title,a=e.titleId,l=e.maskId,u=Cg(n),c=hc("classes",[].concat(Hf(nk(e)),Hf(s.split(" ")))),f=hc("transform",typeof e.transform=="string"?Bf.transform(e.transform):e.transform),h=hc("mask",Cg(r)),m=HA(u,kn(kn(kn(kn({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return ak("Could not find icon",u),null;var v=m.abstract,y={ref:t};return Object.keys(e).forEach(function(E){ht.defaultProps.hasOwnProperty(E)||(y[E]=e[E])}),lk(v[0],y)});ht.displayName="FontAwesomeIcon";ht.propTypes={beat:H.bool,border:H.bool,beatFade:H.bool,bounce:H.bool,className:H.string,fade:H.bool,flash:H.bool,mask:H.oneOfType([H.object,H.array,H.string]),maskId:H.string,fixedWidth:H.bool,inverse:H.bool,flip:H.oneOf([!0,!1,"horizontal","vertical","both"]),icon:H.oneOfType([H.object,H.array,H.string]),listItem:H.bool,pull:H.oneOf(["right","left"]),pulse:H.bool,rotation:H.oneOf([0,90,180,270]),shake:H.bool,size:H.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:H.bool,spinPulse:H.bool,spinReverse:H.bool,symbol:H.oneOfType([H.bool,H.string]),title:H.string,titleId:H.string,transform:H.oneOfType([H.string,H.object]),swapOpacity:H.bool};ht.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var lk=K1.bind(null,Rh.createElement),Fd={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},uk={prefix:"fas",iconName:"money-bill",icon:[576,512,[],"f0d6","M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Q1={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Y1={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ck={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function fk(){const e=ul(":activeLink"),t=ul("/users/:id");return w.jsx(w.Fragment,{children:w.jsx("div",{className:"sidebar d-none d-md-block",children:w.jsx("div",{className:"side-navbar d-flex flex-column justify-content-between",children:w.jsxs("div",{children:[w.jsxs("div",{className:"justify-content-center fs-3 fw-bold text-light d-flex align-items-center",children:[w.jsx("img",{src:Sd,alt:"logo",width:"40",className:"logo"}),w.jsx("span",{children:"SoloBanker"})]}),w.jsx("hr",{}),w.jsxs("ul",{className:"nav nav-pills flex-column mt-3 mb-auto",children:[w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsxs(pi,{to:"/",className:`p-2  ${!e&&!t?"my-link":null}`,children:[w.jsx(ht,{icon:Y1,className:"pe-2"}),"Home"]})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsxs(pi,{to:"/users",className:`p-2   ${e?e.pathname=="/users"?"my-link":null:t?"my-link":null}`,children:[w.jsx(ht,{icon:Q1,className:"pe-2"})," Users"]})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsxs(pi,{to:"/history",className:`p-2   ${e&&e.pathname=="/history"?"my-link":null} `,children:[w.jsx(ht,{icon:Fd,className:"pe-2"})," Transactions History"]})})]})]})})})})}function hk(){const e=ul(":activeLink"),t=ul("/users/:id");return w.jsx(w.Fragment,{children:w.jsx("div",{className:"d-md-none mob-navbar pt-3 pb-3 ps-1 pe-1 navbar sticky-top",children:w.jsxs("div",{className:"d-flex justify-content-evenly align-items-center w-100 ",children:[w.jsxs("div",{className:"justify-content-center fs-3 fw-bold text-light d-flex align-items-center",children:[w.jsx("img",{src:Sd,alt:"logo",className:"logo",width:"40"}),w.jsx("span",{children:"SoloBanker"})]}),w.jsxs("ul",{className:"nav nav-pills d-flex mb-auto",children:[w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsx(pi,{to:"/",className:`p-2  ${!e&&!t?"my-link":null}`,children:w.jsx(ht,{icon:Y1,className:"ps-1 pe-1"})})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsx(pi,{to:"/users",className:`p-2   ${e?e.pathname=="/users"?"my-link":null:t?"my-link":null}`,children:w.jsx(ht,{icon:Q1,className:"ps-1 pe-1"})})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsx(pi,{to:"/history",className:`p-2   ${e&&e.pathname=="/history"?"my-link":null} `,children:w.jsx(ht,{icon:Fd,className:"ps-1 pe-1"})})})]})]})})})}function dk(){return w.jsxs(w.Fragment,{children:[w.jsx(fk,{}),w.jsx(hk,{}),w.jsx(eS,{})]})}const pk="/simple-banking-app/assets/bank-876ce1f7.jpg";function mk(){return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"cont home text-center",children:[w.jsx("header",{className:"d-flex justify-content-center",children:w.jsxs("h1",{className:"fw-bold d-flex align-items-center mt-5 ",children:[w.jsx("img",{src:Sd,alt:"logo",width:"80",className:"grey-img"}),w.jsx("span",{children:"SoloBanker"})]})}),w.jsx("div",{className:"slogan",children:"Manage transactions between users smoothly... from home!"}),w.jsx("img",{src:pk,alt:"bank-vector",className:"mt-5 bank-img"}),w.jsxs("div",{className:"info-container",children:[w.jsxs("div",{className:"info d-flex align-items-center pt-4 pb-4",children:[w.jsx("div",{className:"pe-4",children:"Carry out infinite transactions between registered users, quickly and easily!"}),w.jsx(ht,{icon:uk,className:"info-icon"})]}),w.jsxs("div",{className:"info d-flex flex-row-reverse align-items-center  pt-4 pb-4",children:[w.jsx("div",{className:"ps-4",children:"Track your users current balances in a clear and organised way!"}),w.jsx(ht,{icon:ck,className:"info-icon"})]}),w.jsxs("div",{className:"info d-flex align-items-center  pt-4 pb-4",children:[w.jsx("div",{className:"pe-4",children:"Monitor your transactions history in detail and in a simple way!"}),w.jsx(ht,{icon:Fd,className:"info-icon"})]})]})]})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},J1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[f],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(X1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new yk;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vk=function(e){const t=X1(e);return J1.encodeByteArray(t,!0)},gl=function(e){return vk(e).replace(/\./g,"")},_k=function(e){try{return J1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=()=>wk().__FIREBASE_DEFAULTS__,Tk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ik=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_k(e[1]);return t&&JSON.parse(t)},Z1=()=>{try{return Ek()||Tk()||Ik()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Sk=e=>{var t,n;return(n=(t=Z1())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ak=e=>{const t=Sk(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},e_=()=>{var e;return(e=Z1())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[gl(JSON.stringify(n)),gl(JSON.stringify(o)),a].join(".")}function xk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function t_(){try{return typeof indexedDB=="object"}catch{return!1}}function n_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Pk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk="FirebaseError";class tr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Rk,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tu.prototype.create)}}class tu{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Nk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tr(i,a,r)}}function Nk(e,t){return e.replace(bk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const bk=/\{\$([^}]+)}/g;function yl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(xg(s)&&xg(o)){if(!yl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xg(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=1e3,Ok=2,Vk=4*60*60*1e3,Lk=.5;function Pg(e,t=Dk,n=Ok){const r=t*Math.pow(n,e),i=Math.round(Lk*r*(Math.random()-.5)*2);return Math.min(Vk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e){return e&&e._delegate?e._delegate:e}class fn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new kk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($k(t))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=lr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=lr){return this.instances.has(t)}getOptions(t=lr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fk(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=lr){return this.component?this.component.multipleInstances?t:lr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fk(e){return e===lr?void 0:e}function $k(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Mk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const zk={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Uk=K.INFO,Bk={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Hk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Bk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $d{constructor(t){this.name=t,this._logLevel=Uk,this._logHandler=Hk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Wk=(e,t)=>t.some(n=>e instanceof n);let Rg,Ng;function qk(){return Rg||(Rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kk(){return Ng||(Ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r_=new WeakMap,qf=new WeakMap,i_=new WeakMap,dc=new WeakMap,jd=new WeakMap;function Gk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Fn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&r_.set(n,e)}).catch(()=>{}),jd.set(t,e),t}function Qk(e){if(qf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});qf.set(e,t)}let Kf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||i_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yk(e){Kf=e(Kf)}function Xk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(pc(this),t,...n);return i_.set(r,t.sort?t.sort():[t]),Fn(r)}:Kk().includes(e)?function(...t){return e.apply(pc(this),t),Fn(r_.get(this))}:function(...t){return Fn(e.apply(pc(this),t))}}function Jk(e){return typeof e=="function"?Xk(e):(e instanceof IDBTransaction&&Qk(e),Wk(e,qk())?new Proxy(e,Kf):e)}function Fn(e){if(e instanceof IDBRequest)return Gk(e);if(dc.has(e))return dc.get(e);const t=Jk(e);return t!==e&&(dc.set(e,t),jd.set(t,e)),t}const pc=e=>jd.get(e);function Zk(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const eC=["get","getKey","getAll","getAllKeys","count"],tC=["put","add","delete","clear"],mc=new Map;function bg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mc.get(t))return mc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=tC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mc.set(t,s),s}Yk(e=>({...e,get:(t,n,r)=>bg(t,n)||e.get(t,n,r),has:(t,n)=>!!bg(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gf="@firebase/app",Dg="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new $d("@firebase/app"),iC="@firebase/app-compat",sC="@firebase/analytics-compat",oC="@firebase/analytics",aC="@firebase/app-check-compat",lC="@firebase/app-check",uC="@firebase/auth",cC="@firebase/auth-compat",fC="@firebase/database",hC="@firebase/database-compat",dC="@firebase/functions",pC="@firebase/functions-compat",mC="@firebase/installations",gC="@firebase/installations-compat",yC="@firebase/messaging",vC="@firebase/messaging-compat",_C="@firebase/performance",wC="@firebase/performance-compat",EC="@firebase/remote-config",TC="@firebase/remote-config-compat",IC="@firebase/storage",SC="@firebase/storage-compat",AC="@firebase/firestore",kC="@firebase/firestore-compat",CC="firebase",xC="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="[DEFAULT]",PC={[Gf]:"fire-core",[iC]:"fire-core-compat",[oC]:"fire-analytics",[sC]:"fire-analytics-compat",[lC]:"fire-app-check",[aC]:"fire-app-check-compat",[uC]:"fire-auth",[cC]:"fire-auth-compat",[fC]:"fire-rtdb",[hC]:"fire-rtdb-compat",[dC]:"fire-fn",[pC]:"fire-fn-compat",[mC]:"fire-iid",[gC]:"fire-iid-compat",[yC]:"fire-fcm",[vC]:"fire-fcm-compat",[_C]:"fire-perf",[wC]:"fire-perf-compat",[EC]:"fire-rc",[TC]:"fire-rc-compat",[IC]:"fire-gcs",[SC]:"fire-gcs-compat",[AC]:"fire-fst",[kC]:"fire-fst-compat","fire-js":"fire-js",[CC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new Map,Yf=new Map;function RC(e,t){try{e.container.addComponent(t)}catch(n){Pr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Gn(e){const t=e.name;if(Yf.has(t))return Pr.debug(`There were multiple attempts to register component ${t}.`),!1;Yf.set(t,e);for(const n of vl.values())RC(n,e);return!0}function Ao(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new tu("app","Firebase",NC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=xC;function s_(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qf,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=e_()),!n)throw $n.create("no-options");const s=vl.get(i);if(s){if(yl(n,s.options)&&yl(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new jk(i);for(const l of Yf.values())o.addComponent(l);const a=new bC(n,r,o);return vl.set(i,a),a}function o_(e=Qf){const t=vl.get(e);if(!t&&e===Qf&&e_())return s_();if(!t)throw $n.create("no-app",{appName:e});return t}function qt(e,t,n){var r;let i=(r=PC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}Gn(new fn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="firebase-heartbeat-database",VC=1,to="firebase-heartbeat-store";let gc=null;function a_(){return gc||(gc=Zk(OC,VC,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(to)}}}).catch(e=>{throw $n.create("idb-open",{originalErrorMessage:e.message})})),gc}async function LC(e){try{return await(await a_()).transaction(to).objectStore(to).get(l_(e))}catch(t){if(t instanceof tr)Pr.warn(t.message);else{const n=$n.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(n.message)}}}async function Og(e,t){try{const r=(await a_()).transaction(to,"readwrite");await r.objectStore(to).put(t,l_(e)),await r.done}catch(n){if(n instanceof tr)Pr.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function l_(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=1024,FC=30*24*60*60*1e3;class $C{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=FC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vg(),{heartbeatsToSend:n,unsentEntries:r}=jC(this._heartbeatsCache.heartbeats),i=gl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vg(){return new Date().toISOString().substring(0,10)}function jC(e,t=MC){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lg(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t_()?n_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Lg(e){return gl(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(e){Gn(new fn("platform-logger",t=>new nC(t),"PRIVATE")),Gn(new fn("heartbeat",t=>new $C(t),"PRIVATE")),qt(Gf,Dg,e),qt(Gf,Dg,"esm2017"),qt("fire-js","")}UC("");var BC="firebase",HC="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(BC,HC,"app");const WC=(e,t)=>t.some(n=>e instanceof n);let Mg,Fg;function qC(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KC(){return Fg||(Fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u_=new WeakMap,Xf=new WeakMap,c_=new WeakMap,yc=new WeakMap,zd=new WeakMap;function GC(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(jn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&u_.set(n,e)}).catch(()=>{}),zd.set(t,e),t}function QC(e){if(Xf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Xf.set(e,t)}let Jf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||c_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function YC(e){Jf=e(Jf)}function XC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(vc(this),t,...n);return c_.set(r,t.sort?t.sort():[t]),jn(r)}:KC().includes(e)?function(...t){return e.apply(vc(this),t),jn(u_.get(this))}:function(...t){return jn(e.apply(vc(this),t))}}function JC(e){return typeof e=="function"?XC(e):(e instanceof IDBTransaction&&QC(e),WC(e,qC())?new Proxy(e,Jf):e)}function jn(e){if(e instanceof IDBRequest)return GC(e);if(yc.has(e))return yc.get(e);const t=JC(e);return t!==e&&(yc.set(e,t),zd.set(t,e)),t}const vc=e=>zd.get(e);function ZC(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=jn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(jn(o.result),l.oldVersion,l.newVersion,jn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ex=["get","getKey","getAll","getAllKeys","count"],tx=["put","add","delete","clear"],_c=new Map;function $g(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_c.get(t))return _c.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=tx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ex.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _c.set(t,s),s}YC(e=>({...e,get:(t,n,r)=>$g(t,n)||e.get(t,n,r),has:(t,n)=>!!$g(t,n)||e.has(t,n)}));const f_="@firebase/installations",Ud="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=1e4,d_=`w:${Ud}`,p_="FIS_v2",nx="https://firebaseinstallations.googleapis.com/v1",rx=60*60*1e3,ix="installations",sx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rr=new tu(ix,sx,ox);function m_(e){return e instanceof tr&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_({projectId:e}){return`${nx}/projects/${e}/installations`}function y_(e){return{token:e.token,requestStatus:2,expiresIn:lx(e.expiresIn),creationTime:Date.now()}}async function v_(e,t){const r=(await t.json()).error;return Rr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function __({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ax(e,{refreshToken:t}){const n=__(e);return n.append("Authorization",ux(t)),n}async function w_(e){const t=await e();return t.status>=500&&t.status<600?e():t}function lx(e){return Number(e.replace("s","000"))}function ux(e){return`${p_} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=g_(e),i=__(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:p_,appId:e.appId,sdkVersion:d_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await w_(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:y_(u.authToken)}}else throw await v_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=/^[cdef][\w-]{21}$/,Zf="";function dx(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=px(e);return hx.test(n)?n:Zf}catch{return Zf}}function px(e){return fx(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new Map;function I_(e,t){const n=ru(e);S_(n,t),mx(n,t)}function S_(e,t){const n=T_.get(e);if(n)for(const r of n)r(t)}function mx(e,t){const n=gx();n&&n.postMessage({key:e,fid:t}),yx()}let pr=null;function gx(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=e=>{S_(e.data.key,e.data.fid)}),pr}function yx(){T_.size===0&&pr&&(pr.close(),pr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="firebase-installations-database",_x=1,Nr="firebase-installations-store";let wc=null;function Bd(){return wc||(wc=ZC(vx,_x,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Nr)}}})),wc}async function _l(e,t){const n=ru(e),i=(await Bd()).transaction(Nr,"readwrite"),s=i.objectStore(Nr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&I_(e,t.fid),t}async function A_(e){const t=ru(e),r=(await Bd()).transaction(Nr,"readwrite");await r.objectStore(Nr).delete(t),await r.done}async function iu(e,t){const n=ru(e),i=(await Bd()).transaction(Nr,"readwrite"),s=i.objectStore(Nr),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&I_(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(e){let t;const n=await iu(e.appConfig,r=>{const i=wx(r),s=Ex(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Zf?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function wx(e){const t=e||{fid:dx(),registrationStatus:0};return k_(t)}function Ex(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Tx(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ix(e)}:{installationEntry:t}}async function Tx(e,t){try{const n=await cx(e,t);return _l(e.appConfig,n)}catch(n){throw m_(n)&&n.customData.serverCode===409?await A_(e.appConfig):await _l(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ix(e){let t=await jg(e.appConfig);for(;t.registrationStatus===1;)await E_(100),t=await jg(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hd(e);return r||n}return t}function jg(e){return iu(e,t=>{if(!t)throw Rr.create("installation-not-found");return k_(t)})}function k_(e){return Sx(e)?{fid:e.fid,registrationStatus:0}:e}function Sx(e){return e.registrationStatus===1&&e.registrationTime+h_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax({appConfig:e,heartbeatServiceProvider:t},n){const r=kx(e,n),i=ax(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:d_,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await w_(()=>fetch(r,a));if(l.ok){const u=await l.json();return y_(u)}else throw await v_("Generate Auth Token",l)}function kx(e,{fid:t}){return`${g_(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(e,t=!1){let n;const r=await iu(e.appConfig,s=>{if(!C_(s))throw Rr.create("not-registered");const o=s.authToken;if(!t&&Px(o))return s;if(o.requestStatus===1)return n=Cx(e,t),s;{if(!navigator.onLine)throw Rr.create("app-offline");const a=Nx(s);return n=xx(e,a),a}});return n?await n:r.authToken}async function Cx(e,t){let n=await zg(e.appConfig);for(;n.authToken.requestStatus===1;)await E_(100),n=await zg(e.appConfig);const r=n.authToken;return r.requestStatus===0?Wd(e,t):r}function zg(e){return iu(e,t=>{if(!C_(t))throw Rr.create("not-registered");const n=t.authToken;return bx(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function xx(e,t){try{const n=await Ax(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await _l(e.appConfig,r),n}catch(n){if(m_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await A_(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _l(e.appConfig,r)}throw n}}function C_(e){return e!==void 0&&e.registrationStatus===2}function Px(e){return e.requestStatus===2&&!Rx(e)}function Rx(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+rx}function Nx(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function bx(e){return e.requestStatus===1&&e.requestTime+h_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(e){const t=e,{installationEntry:n,registrationPromise:r}=await Hd(t);return r?r.catch(console.error):Wd(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(e,t=!1){const n=e;return await Vx(n),(await Wd(n,t)).token}async function Vx(e){const{registrationPromise:t}=await Hd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(e){if(!e||!e.options)throw Ec("App Configuration");if(!e.name)throw Ec("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ec(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ec(e){return Rr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="installations",Mx="installations-internal",Fx=e=>{const t=e.getProvider("app").getImmediate(),n=Lx(t),r=Ao(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$x=e=>{const t=e.getProvider("app").getImmediate(),n=Ao(t,x_).getImmediate();return{getId:()=>Dx(n),getToken:i=>Ox(n,i)}};function jx(){Gn(new fn(x_,Fx,"PUBLIC")),Gn(new fn(Mx,$x,"PRIVATE"))}jx();qt(f_,Ud);qt(f_,Ud,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="analytics",zx="firebase_id",Ux="origin",Bx=60*1e3,Hx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new $d("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new tu("analytics","Analytics",Wx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(e){if(!e.startsWith(qd)){const t=dt.create("invalid-gtag-resource",{gtagURL:e});return at.warn(t.message),""}return e}function P_(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Kx(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Gx(e,t){const n=Kx("firebase-js-sdk-policy",{createScriptURL:qx}),r=document.createElement("script"),i=`${qd}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Qx(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Yx(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await P_(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){at.error(a)}e("config",i,s)}async function Xx(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await P_(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){at.error(s)}}function Jx(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Xx(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await Yx(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){at.error(a)}}return i}function Zx(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Jx(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function eP(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(qd)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=30,nP=1e3;class rP{constructor(t={},n=nP){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const R_=new rP;function iP(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function sP(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:iP(r)},s=Hx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function oP(e,t=R_,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new uP;return setTimeout(async()=>{a.abort()},n!==void 0?n:Bx),N_({appId:r,apiKey:i,measurementId:s},o,a,t)}async function N_(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=R_){var s;const{appId:o,measurementId:a}=e;try{await aP(r,t)}catch(l){if(a)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await sP(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!lP(u)){if(i.deleteThrottleMetadata(o),a)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pg(n,i.intervalMillis,tP):Pg(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),at.debug(`Calling attemptFetch again in ${c} millis`),N_(e,f,r,i)}}function aP(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(dt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function lP(e){if(!(e instanceof tr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class uP{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function cP(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(){if(t_())try{await n_()}catch(e){return at.warn(dt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return at.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hP(e,t,n,r,i,s,o){var a;const l=oP(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>at.error(m)),t.push(l);const u=fP().then(m=>{if(m)return r.getId()}),[c,f]=await Promise.all([l,u]);eP(s)||Gx(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Ux]="firebase",h.update=!0,f!=null&&(h[zx]=f),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(t){this.app=t}_delete(){return delete ks[this.app.options.appId],Promise.resolve()}}let ks={},Ug=[];const Bg={};let Tc="dataLayer",pP="gtag",Hg,b_,Wg=!1;function mP(){const e=[];if(xk()&&e.push("This is a browser extension environment."),Pk()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:t});at.warn(n.message)}}function gP(e,t,n){mP();const r=e.options.appId;if(!r)throw dt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(ks[r]!=null)throw dt.create("already-exists",{id:r});if(!Wg){Qx(Tc);const{wrappedGtag:s,gtagCore:o}=Zx(ks,Ug,Bg,Tc,pP);b_=s,Hg=o,Wg=!0}return ks[r]=hP(e,Ug,Bg,t,Hg,Tc,n),new dP(e)}function yP(e=o_()){e=nu(e);const t=Ao(e,wl);return t.isInitialized()?t.getImmediate():vP(e)}function vP(e,t={}){const n=Ao(e,wl);if(n.isInitialized()){const i=n.getImmediate();if(yl(t,n.getOptions()))return i;throw dt.create("already-initialized")}return n.initialize({options:t})}function _P(e,t,n,r){e=nu(e),cP(b_,ks[e.app.options.appId],t,n,r).catch(i=>at.error(i))}const qg="@firebase/analytics",Kg="0.10.0";function wP(){Gn(new fn(wl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return gP(r,i,n)},"PUBLIC")),Gn(new fn("analytics-internal",e,"PRIVATE")),qt(qg,Kg),qt(qg,Kg,"esm2017");function e(t){try{const n=t.getProvider(wl).getImmediate();return{logEvent:(r,i,s)=>_P(n,r,i,s)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}wP();var EP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,Kd=Kd||{},F=EP||self;function su(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ko(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function TP(e){return Object.prototype.hasOwnProperty.call(e,Ic)&&e[Ic]||(e[Ic]=++IP)}var Ic="closure_uid_"+(1e9*Math.random()>>>0),IP=0;function SP(e,t,n){return e.call.apply(e.bind,arguments)}function AP(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function qe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=SP:qe=AP,qe.apply(null,arguments)}function ha(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function be(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function nr(){this.s=this.s,this.o=this.o}var kP=0;nr.prototype.s=!1;nr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kP!=0)&&TP(this)};nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const D_=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Gd(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Gg(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(su(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ke(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var CP=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{F.addEventListener("test",()=>{},t),F.removeEventListener("test",()=>{},t)}catch{}return e}();function no(e){return/^[\s\xa0]*$/.test(e)}function ou(){var e=F.navigator;return e&&(e=e.userAgent)?e:""}function $t(e){return ou().indexOf(e)!=-1}function Qd(e){return Qd[" "](e),e}Qd[" "]=function(){};function xP(e,t){var n=wR;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var PP=$t("Opera"),xi=$t("Trident")||$t("MSIE"),O_=$t("Edge"),eh=O_||xi,V_=$t("Gecko")&&!(ou().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),RP=ou().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function L_(){var e=F.document;return e?e.documentMode:void 0}var th;e:{var Sc="",Ac=function(){var e=ou();if(V_)return/rv:([^\);]+)(\)|;)/.exec(e);if(O_)return/Edge\/([\d\.]+)/.exec(e);if(xi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(RP)return/WebKit\/(\S+)/.exec(e);if(PP)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ac&&(Sc=Ac?Ac[1]:""),xi){var kc=L_();if(kc!=null&&kc>parseFloat(Sc)){th=String(kc);break e}}th=Sc}var nh;if(F.document&&xi){var Qg=L_();nh=Qg||parseInt(th,10)||void 0}else nh=void 0;var NP=nh;function ro(e,t){if(Ke.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V_){e:{try{Qd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:bP[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ro.$.h.call(this)}}be(ro,Ke);var bP={2:"touch",3:"pen",4:"mouse"};ro.prototype.h=function(){ro.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Co="closure_listenable_"+(1e6*Math.random()|0),DP=0;function OP(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++DP,this.fa=this.ia=!1}function au(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Yd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function VP(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function M_(e){const t={};for(const n in e)t[n]=e[n];return t}const Yg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F_(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Yg.length;s++)n=Yg[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function lu(e){this.src=e,this.g={},this.h=0}lu.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ih(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new OP(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function rh(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=D_(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(au(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ih(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Xd="closure_lm_"+(1e6*Math.random()|0),Cc={};function $_(e,t,n,r,i){if(r&&r.once)return z_(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)$_(e,t[s],n,r,i);return null}return n=ep(n),e&&e[Co]?e.O(t,n,ko(r)?!!r.capture:!!r,i):j_(e,t,n,!1,r,i)}function j_(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ko(i)?!!i.capture:!!i,a=Zd(e);if(a||(e[Xd]=a=new lu(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=LP(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)CP||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(B_(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LP(){function e(n){return t.call(e.src,e.listener,n)}const t=MP;return e}function z_(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)z_(e,t[s],n,r,i);return null}return n=ep(n),e&&e[Co]?e.P(t,n,ko(r)?!!r.capture:!!r,i):j_(e,t,n,!0,r,i)}function U_(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)U_(e,t[s],n,r,i);else r=ko(r)?!!r.capture:!!r,n=ep(n),e&&e[Co]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ih(s,n,r,i),-1<n&&(au(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ih(t,n,r,i)),(n=-1<e?t[e]:null)&&Jd(n))}function Jd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Co])rh(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(B_(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Zd(t))?(rh(n,e),n.h==0&&(n.src=null,t[Xd]=null)):au(e)}}}function B_(e){return e in Cc?Cc[e]:Cc[e]="on"+e}function MP(e,t){if(e.fa)e=!0;else{t=new ro(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Jd(e),e=n.call(r,t)}return e}function Zd(e){return e=e[Xd],e instanceof lu?e:null}var xc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(e){return typeof e=="function"?e:(e[xc]||(e[xc]=function(t){return e.handleEvent(t)}),e[xc])}function Ne(){nr.call(this),this.i=new lu(this),this.S=this,this.J=null}be(Ne,nr);Ne.prototype[Co]=!0;Ne.prototype.removeEventListener=function(e,t,n,r){U_(this,e,t,n,r)};function Me(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ke(t,e);else if(t instanceof Ke)t.target=t.target||e;else{var i=t;t=new Ke(r,e),F_(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=da(o,r,!0,t)&&i}if(o=t.g=e,i=da(o,r,!0,t)&&i,i=da(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=da(o,r,!1,t)&&i}Ne.prototype.N=function(){if(Ne.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)au(n[r]);delete e.g[t],e.h--}}this.J=null};Ne.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ne.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function da(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rh(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var tp=F.JSON.stringify;class FP{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function $P(){var e=np;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class jP{constructor(){this.h=this.g=null}add(t,n){const r=H_.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var H_=new FP(()=>new zP,e=>e.reset());class zP{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UP(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function BP(e){F.setTimeout(()=>{throw e},0)}let io,so=!1,np=new jP,W_=()=>{const e=F.Promise.resolve(void 0);io=()=>{e.then(HP)}};var HP=()=>{for(var e;e=$P();){try{e.h.call(e.g)}catch(n){BP(n)}var t=H_;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}so=!1};function uu(e,t){Ne.call(this),this.h=e||1,this.g=t||F,this.j=qe(this.qb,this),this.l=Date.now()}be(uu,Ne);C=uu.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Me(this,"tick"),this.ga&&(rp(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rp(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}C.N=function(){uu.$.N.call(this),rp(this),delete this.g};function ip(e,t,n){if(typeof e=="function")n&&(e=qe(e,n));else if(e&&typeof e.handleEvent=="function")e=qe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:F.setTimeout(e,t||0)}function q_(e){e.g=ip(()=>{e.g=null,e.i&&(e.i=!1,q_(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class WP extends nr{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:q_(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oo(e){nr.call(this),this.h=e,this.g={}}be(oo,nr);var Xg=[];function K_(e,t,n,r){Array.isArray(n)||(n&&(Xg[0]=n.toString()),n=Xg);for(var i=0;i<n.length;i++){var s=$_(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function G_(e){Yd(e.g,function(t,n){this.g.hasOwnProperty(n)&&Jd(t)},e),e.g={}}oo.prototype.N=function(){oo.$.N.call(this),G_(this)};oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function cu(){this.g=!0}cu.prototype.Ea=function(){this.g=!1};function qP(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function KP(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ai(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+QP(e,n)+(r?" "+r:"")})}function GP(e,t){e.info(function(){return"TIMEOUT: "+t})}cu.prototype.info=function(){};function QP(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return tp(n)}catch{return t}}var $r={},Jg=null;function fu(){return Jg=Jg||new Ne}$r.Ta="serverreachability";function Q_(e){Ke.call(this,$r.Ta,e)}be(Q_,Ke);function ao(e){const t=fu();Me(t,new Q_(t))}$r.STAT_EVENT="statevent";function Y_(e,t){Ke.call(this,$r.STAT_EVENT,e),this.stat=t}be(Y_,Ke);function Je(e){const t=fu();Me(t,new Y_(t,e))}$r.Ua="timingevent";function X_(e,t){Ke.call(this,$r.Ua,e),this.size=t}be(X_,Ke);function xo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){e()},t)}var hu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},J_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sp(){}sp.prototype.h=null;function Zg(e){return e.h||(e.h=e.i())}function Z_(){}var Po={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function op(){Ke.call(this,"d")}be(op,Ke);function ap(){Ke.call(this,"c")}be(ap,Ke);var sh;function du(){}be(du,sp);du.prototype.g=function(){return new XMLHttpRequest};du.prototype.i=function(){return{}};sh=new du;function Ro(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new oo(this),this.P=YP,e=eh?125:void 0,this.V=new uu(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ew}function ew(){this.i=null,this.g="",this.h=!1}var YP=45e3,oh={},El={};C=Ro.prototype;C.setTimeout=function(e){this.P=e};function ah(e,t,n){e.L=1,e.v=mu(hn(t)),e.s=n,e.S=!0,tw(e,null)}function tw(e,t){e.G=Date.now(),No(e),e.A=hn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),uw(n.i,"t",r),e.C=0,n=e.l.J,e.h=new ew,e.g=Rw(e.l,n?t:null,!e.s),0<e.O&&(e.M=new WP(qe(e.Pa,e,e.g),e.O)),K_(e.U,e.g,"readystatechange",e.nb),t=e.I?M_(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ao(),qP(e.j,e.u,e.A,e.m,e.W,e.s)}C.nb=function(e){e=e.target;const t=this.M;t&&Ut(e)==3?t.l():this.Pa(e)};C.Pa=function(e){try{if(e==this.g)e:{const c=Ut(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||eh||this.g&&(this.h.h||this.g.ja()||ry(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?ao(3):ao(2)),pu(this);var n=this.g.da();this.ca=n;t:if(nw(this)){var r=ry(this.g);e="";var i=r.length,s=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Cs(this);var o="";break t}this.h.i=new F.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,KP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!no(a)){var u=a;break t}}u=null}if(n=u)ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lh(this,n);else{this.i=!1,this.o=3,Je(12),mr(this),Cs(this);break e}}this.S?(rw(this,c,o),eh&&this.i&&c==3&&(K_(this.U,this.V,"tick",this.mb),this.V.start())):(ai(this.j,this.m,o,null),lh(this,o)),c==4&&mr(this),this.i&&!this.J&&(c==4?kw(this.l,this):(this.i=!1,No(this)))}else yR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),mr(this),Cs(this)}}}catch{}finally{}};function nw(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function rw(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=XP(e,n),i==El){t==4&&(e.o=4,Je(14),r=!1),ai(e.j,e.m,null,"[Incomplete Response]");break}else if(i==oh){e.o=4,Je(15),ai(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ai(e.j,e.m,i,null),lh(e,i);nw(e)&&i!=El&&i!=oh&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Je(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dp(t),t.M=!0,Je(11))):(ai(e.j,e.m,n,"[Invalid Chunked Response]"),mr(e),Cs(e))}C.mb=function(){if(this.g){var e=Ut(this.g),t=this.g.ja();this.C<t.length&&(pu(this),rw(this,e,t),this.i&&e!=4&&No(this))}};function XP(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?El:(n=Number(t.substring(n,r)),isNaN(n)?oh:(r+=1,r+n>t.length?El:(t=t.slice(r,r+n),e.C=r+n,t)))}C.cancel=function(){this.J=!0,mr(this)};function No(e){e.Y=Date.now()+e.P,iw(e,e.P)}function iw(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=xo(qe(e.lb,e),t)}function pu(e){e.B&&(F.clearTimeout(e.B),e.B=null)}C.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(GP(this.j,this.A),this.L!=2&&(ao(),Je(17)),mr(this),this.o=2,Cs(this)):iw(this,this.Y-e)};function Cs(e){e.l.H==0||e.J||kw(e.l,e)}function mr(e){pu(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,rp(e.V),G_(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function lh(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||uh(n.i,e))){if(!e.K&&uh(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Sl(n),_u(n);else break e;hp(n),Je(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=xo(qe(n.ib,n),6e3));if(1>=hw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else gr(n,11)}else if((e.K||n.g==e)&&Sl(n),!no(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(lp(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,ie(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Pw(r,r.J?r.pa:null,r.Y),o.K){dw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(pu(a),No(a)),r.g=o}else Sw(r);0<n.j.length&&wu(n)}else u[0]!="stop"&&u[0]!="close"||gr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gr(n,7):fp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ao(4)}catch{}}function JP(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(su(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ZP(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(su(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function sw(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(su(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ZP(e),r=JP(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var ow=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eR(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof wr){this.h=e.h,Tl(this,e.j),this.s=e.s,this.g=e.g,Il(this,e.m),this.l=e.l;var t=e.i,n=new lo;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ey(this,n),this.o=e.o}else e&&(t=String(e).match(ow))?(this.h=!1,Tl(this,t[1]||"",!0),this.s=cs(t[2]||""),this.g=cs(t[3]||"",!0),Il(this,t[4]),this.l=cs(t[5]||"",!0),ey(this,t[6]||"",!0),this.o=cs(t[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}wr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(fs(t,ty,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(fs(t,ty,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(fs(n,n.charAt(0)=="/"?rR:nR,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",fs(n,sR)),e.join("")};function hn(e){return new wr(e)}function Tl(e,t,n){e.j=n?cs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Il(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ey(e,t,n){t instanceof lo?(e.i=t,oR(e.i,e.h)):(n||(t=fs(t,iR)),e.i=new lo(t,e.h))}function ie(e,t,n){e.i.set(t,n)}function mu(e){return ie(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function cs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function fs(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,tR),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tR(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ty=/[#\/\?@]/g,nR=/[#\?:]/g,rR=/[#\?]/g,iR=/[#\?@]/g,sR=/#/g;function lo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rr(e){e.g||(e.g=new Map,e.h=0,e.i&&eR(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}C=lo.prototype;C.add=function(e,t){rr(this),this.i=null,e=zi(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function aw(e,t){rr(e),t=zi(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function lw(e,t){return rr(e),t=zi(e,t),e.g.has(t)}C.forEach=function(e,t){rr(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};C.ta=function(){rr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};C.Z=function(e){rr(this);let t=[];if(typeof e=="string")lw(this,e)&&(t=t.concat(this.g.get(zi(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};C.set=function(e,t){return rr(this),this.i=null,e=zi(this,e),lw(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};C.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function uw(e,t,n){aw(e,t),0<n.length&&(e.i=null,e.g.set(zi(e,t),Gd(n)),e.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function zi(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function oR(e,t){t&&!e.j&&(rr(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aw(this,r),uw(this,i,n))},e)),e.j=t}var aR=class{constructor(e,t){this.g=e,this.map=t}};function cw(e){this.l=e||lR,F.PerformanceNavigationTiming?(e=F.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lR=10;function fw(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function hw(e){return e.h?1:e.g?e.g.size:0}function uh(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function lp(e,t){e.g?e.g.add(t):e.h=t}function dw(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}cw.prototype.cancel=function(){if(this.i=pw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function pw(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Gd(e.i)}var uR=class{stringify(e){return F.JSON.stringify(e,void 0)}parse(e){return F.JSON.parse(e,void 0)}};function cR(){this.g=new uR}function fR(e,t,n){const r=n||"";try{sw(e,function(i,s){let o=i;ko(i)&&(o=tp(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function hR(e,t){const n=new cu;if(F.Image){const r=new Image;r.onload=ha(pa,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ha(pa,n,r,"TestLoadImage: error",!1,t),r.onabort=ha(pa,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ha(pa,n,r,"TestLoadImage: timeout",!1,t),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function pa(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function gu(e){this.l=e.ec||null,this.j=e.ob||!1}be(gu,sp);gu.prototype.g=function(){return new yu(this.l,this.j)};gu.prototype.i=function(e){return function(){return e}}({});function yu(e,t){Ne.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=up,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(yu,Ne);var up=0;C=yu.prototype;C.open=function(e,t){if(this.readyState!=up)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,uo(this)};C.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||F).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=up};C.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mw(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function mw(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}C.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?bo(this):uo(this),this.readyState==3&&mw(this)}};C.Za=function(e){this.g&&(this.response=this.responseText=e,bo(this))};C.Ya=function(e){this.g&&(this.response=e,bo(this))};C.ka=function(){this.g&&bo(this)};function bo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,uo(e)}C.setRequestHeader=function(e,t){this.v.append(e,t)};C.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function uo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var dR=F.JSON.parse;function pe(e){Ne.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gw,this.L=this.M=!1}be(pe,Ne);var gw="",pR=/^https?$/i,mR=["POST","PUT"];C=pe.prototype;C.Oa=function(e){this.M=e};C.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sh.g(),this.C=this.u?Zg(this.u):Zg(sh),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ny(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&e instanceof F.FormData,!(0<=D_(mR,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_w(this),0<this.B&&((this.L=gR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=ip(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ny(this,s)}};function gR(e){return xi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}C.ua=function(){typeof Kd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function ny(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,yw(e),vu(e)}function yw(e){e.F||(e.F=!0,Me(e,"complete"),Me(e,"error"))}C.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Me(this,"complete"),Me(this,"abort"),vu(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vu(this,!0)),pe.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?vw(this):this.kb())};C.kb=function(){vw(this)};function vw(e){if(e.h&&typeof Kd<"u"&&(!e.C[1]||Ut(e)!=4||e.da()!=2)){if(e.v&&Ut(e)==4)ip(e.La,0,e);else if(Me(e,"readystatechange"),Ut(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(ow)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!pR.test(i?i.toLowerCase():"")}n=r}if(n)Me(e,"complete"),Me(e,"success");else{e.m=6;try{var s=2<Ut(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",yw(e)}}finally{vu(e)}}}}function vu(e,t){if(e.g){_w(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Me(e,"ready");try{n.onreadystatechange=r}catch{}}}function _w(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(F.clearTimeout(e.A),e.A=null)}C.isActive=function(){return!!this.g};function Ut(e){return e.g?e.g.readyState:0}C.da=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),dR(t)}};function ry(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case gw:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function yR(e){const t={};e=(e.g&&2<=Ut(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(no(e[r]))continue;var n=UP(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}VP(t,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ww(e){let t="";return Yd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function cp(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ww(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ie(e,t,n))}function ns(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ew(e){this.Ga=0,this.j=[],this.l=new cu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ns("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ns("baseRetryDelayMs",5e3,e),this.hb=ns("retryDelaySeedMs",1e4,e),this.eb=ns("forwardChannelMaxRetries",2,e),this.xa=ns("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cw(e&&e.concurrentRequestLimit),this.Ja=new cR,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=Ew.prototype;C.ra=8;C.H=1;function fp(e){if(Tw(e),e.H==3){var t=e.W++,n=hn(e.I);if(ie(n,"SID",e.K),ie(n,"RID",t),ie(n,"TYPE","terminate"),Do(e,n),t=new Ro(e,e.l,t),t.L=2,t.v=mu(hn(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=t.v,n=!0),n||(t.g=Rw(t.l,null),t.g.ha(t.v)),t.G=Date.now(),No(t)}xw(e)}function _u(e){e.g&&(dp(e),e.g.cancel(),e.g=null)}function Tw(e){_u(e),e.u&&(F.clearTimeout(e.u),e.u=null),Sl(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&F.clearTimeout(e.m),e.m=null)}function wu(e){if(!fw(e.i)&&!e.m){e.m=!0;var t=e.Na;io||W_(),so||(io(),so=!0),np.add(t,e),e.C=0}}function vR(e,t){return hw(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=xo(qe(e.Na,e,t),Cw(e,e.C)),e.C++,!0)}C.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ro(this,this.l,e);let s=this.s;if(this.U&&(s?(s=M_(s),F_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Iw(this,i,t),n=hn(this.I),ie(n,"RID",e),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),Do(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ww(s)))+"&"+t:this.o&&cp(n,this.o,s)),lp(this.i,i),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",t),ie(n,"SID","null"),i.aa=!0,ah(i,n,null)):ah(i,n,t),this.H=2}}else this.H==3&&(e?iy(this,e):this.j.length==0||fw(this.i)||iy(this))};function iy(e,t){var n;t?n=t.m:n=e.W++;const r=hn(e.I);ie(r,"SID",e.K),ie(r,"RID",n),ie(r,"AID",e.V),Do(e,r),e.o&&e.s&&cp(r,e.o,e.s),n=new Ro(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Iw(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),lp(e.i,n),ah(n,r,t)}function Do(e,t){e.na&&Yd(e.na,function(n,r){ie(t,r,n)}),e.h&&sw({},function(n,r){ie(t,r,n)})}function Iw(e,t,n){n=Math.min(e.j.length,n);var r=e.h?qe(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{fR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Sw(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;io||W_(),so||(io(),so=!0),np.add(t,e),e.A=0}}function hp(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=xo(qe(e.Ma,e),Cw(e,e.A)),e.A++,!0)}C.Ma=function(){if(this.u=null,Aw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=xo(qe(this.jb,this),e)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Je(10),_u(this),Aw(this))};function dp(e){e.B!=null&&(F.clearTimeout(e.B),e.B=null)}function Aw(e){e.g=new Ro(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=hn(e.wa);ie(t,"RID","rpc"),ie(t,"SID",e.K),ie(t,"AID",e.V),ie(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ie(t,"TO",e.qa),ie(t,"TYPE","xmlhttp"),Do(e,t),e.o&&e.s&&cp(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=mu(hn(t)),n.s=null,n.S=!0,tw(n,e)}C.ib=function(){this.v!=null&&(this.v=null,_u(this),hp(this),Je(19))};function Sl(e){e.v!=null&&(F.clearTimeout(e.v),e.v=null)}function kw(e,t){var n=null;if(e.g==t){Sl(e),dp(e),e.g=null;var r=2}else if(uh(e.i,t))n=t.F,dw(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=fu(),Me(r,new X_(r,n)),wu(e)}else Sw(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&vR(e,t)||r==2&&hp(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:gr(e,5);break;case 4:gr(e,10);break;case 3:gr(e,6);break;default:gr(e,2)}}}function Cw(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function gr(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=qe(e.pb,e);n||(n=new wr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Tl(n,"https"),mu(n)),hR(n.toString(),r)}else Je(2);e.H=0,e.h&&e.h.za(t),xw(e),Tw(e)}C.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Je(2)):(this.l.info("Failed to ping google.com"),Je(1))};function xw(e){if(e.H=0,e.ma=[],e.h){const t=pw(e.i);(t.length!=0||e.j.length!=0)&&(Gg(e.ma,t),Gg(e.ma,e.j),e.i.i.length=0,Gd(e.j),e.j.length=0),e.h.ya()}}function Pw(e,t,n){var r=n instanceof wr?hn(n):new wr(n);if(r.g!="")t&&(r.g=t+"."+r.g),Il(r,r.m);else{var i=F.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new wr(null);r&&Tl(s,r),t&&(s.g=t),i&&Il(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ie(r,n,t),ie(r,"VER",e.ra),Do(e,r),r}function Rw(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new pe(new gu({ob:!0})):new pe(e.va),t.Oa(e.J),t}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function Nw(){}C=Nw.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function Al(){if(xi&&!(10<=Number(NP)))throw Error("Environmental error: no available transport.")}Al.prototype.g=function(e,t){return new mt(e,t)};function mt(e,t){Ne.call(this),this.g=new Ew(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!no(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!no(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ui(this)}be(mt,Ne);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Je(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Pw(e,null,e.Y),wu(e)};mt.prototype.close=function(){fp(this.g)};mt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=tp(e),e=n);t.j.push(new aR(t.fb++,e)),t.H==3&&wu(t)};mt.prototype.N=function(){this.g.h=null,delete this.j,fp(this.g),delete this.g,mt.$.N.call(this)};function bw(e){op.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}be(bw,op);function Dw(){ap.call(this),this.status=1}be(Dw,ap);function Ui(e){this.g=e}be(Ui,Nw);Ui.prototype.Ba=function(){Me(this.g,"a")};Ui.prototype.Aa=function(e){Me(this.g,new bw(e))};Ui.prototype.za=function(e){Me(this.g,new Dw)};Ui.prototype.ya=function(){Me(this.g,"b")};function _R(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}be(Vt,_R);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pc(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Vt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Pc(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Pc(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Pc(this,r),i=0;break}}this.h=i,this.i+=t};Vt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ee(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var wR={};function pp(e){return-128<=e&&128>e?xP(e,function(t){return new ee([t|0],0>t?-1:0)}):new ee([e|0],0>e?-1:0)}function Bt(e){if(isNaN(e)||!isFinite(e))return gi;if(0>e)return Ve(Bt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ch;return new ee(t,0)}function Ow(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ve(Ow(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(t,8)),r=gi,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Bt(Math.pow(t,s)),r=r.R(s).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var ch=4294967296,gi=pp(0),fh=pp(1),sy=pp(16777216);C=ee.prototype;C.ea=function(){if(Et(this))return-Ve(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ch+r)*t,t*=ch}return e};C.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(tn(this))return"0";if(Et(this))return"-"+Ve(this).toString(e);for(var t=Bt(Math.pow(e,6)),n=this,r="";;){var i=Cl(n,t).g;n=kl(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,tn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};C.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function tn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Et(e){return e.h==-1}C.X=function(e){return e=kl(this,e),Et(e)?-1:tn(e)?0:1};function Ve(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ee(n,~e.h).add(fh)}C.abs=function(){return Et(this)?Ve(this):this};C.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function kl(e,t){return e.add(Ve(t))}C.R=function(e){if(tn(this)||tn(e))return gi;if(Et(this))return Et(e)?Ve(this).R(Ve(e)):Ve(Ve(this).R(e));if(Et(e))return Ve(this.R(Ve(e)));if(0>this.X(sy)&&0>e.X(sy))return Bt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,ma(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ma(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ma(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ma(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ee(n,0)};function ma(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rs(e,t){this.g=e,this.h=t}function Cl(e,t){if(tn(t))throw Error("division by zero");if(tn(e))return new rs(gi,gi);if(Et(e))return t=Cl(Ve(e),t),new rs(Ve(t.g),Ve(t.h));if(Et(t))return t=Cl(e,Ve(t)),new rs(Ve(t.g),t.h);if(30<e.g.length){if(Et(e)||Et(t))throw Error("slowDivide_ only works with positive integers.");for(var n=fh,r=t;0>=r.X(e);)n=oy(n),r=oy(r);var i=zr(n,1),s=zr(r,1);for(r=zr(r,2),n=zr(n,2);!tn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=zr(r,1),n=zr(n,1)}return t=kl(e,i.R(t)),new rs(i,t)}for(i=gi;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bt(n),o=s.R(t);Et(o)||0<o.X(e);)n-=r,s=Bt(n),o=s.R(t);tn(s)&&(s=fh),i=i.add(s),e=kl(e,o)}return new rs(i,e)}C.gb=function(e){return Cl(this,e).h};C.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ee(n,this.h&e.h)};C.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ee(n,this.h|e.h)};C.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ee(n,this.h^e.h)};function oy(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ee(n,e.h)}function zr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ee(i,e.h)}Al.prototype.createWebChannel=Al.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;hu.NO_ERROR=0;hu.TIMEOUT=8;hu.HTTP_ERROR=6;J_.COMPLETE="complete";Z_.EventType=Po;Po.OPEN="a";Po.CLOSE="b";Po.ERROR="c";Po.MESSAGE="d";Ne.prototype.listen=Ne.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=Bt;ee.fromString=Ow;var ER=function(){return new Al},TR=function(){return fu()},Rc=hu,IR=J_,SR=$r,ay={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ga=Z_,AR=pe,kR=Vt,yi=ee;const ly="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new $d("@firebase/firestore");function is(){return br.logLevel}function D(e,...t){if(br.logLevel<=K.DEBUG){const n=t.map(mp);br.debug(`Firestore (${Bi}): ${e}`,...n)}}function dn(e,...t){if(br.logLevel<=K.ERROR){const n=t.map(mp);br.error(`Firestore (${Bi}): ${e}`,...n)}}function Pi(e,...t){if(br.logLevel<=K.WARN){const n=t.map(mp);br.warn(`Firestore (${Bi}): ${e}`,...n)}}function mp(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e="Unexpected state"){const t=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+e;throw dn(t),new Error(t)}function Ae(e,t){e||z()}function X(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends tr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class CR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class xR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PR{constructor(t){this.t=t,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Vw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ae(t===null||typeof t=="string"),new Be(t)}}class RR{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class NR{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new RR(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bR{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DR{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new bR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=OR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function J(e,t){return e<t?-1:e>t?1:0}function Ri(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.timestamp=t}static fromTimestamp(t){return new $(t)}static min(){return new $(new lt(0,0))}static max(){return new $(new lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,n,r){n===void 0?n=0:n>t.length&&z(),r===void 0?r=t.length-n:r>t.length-n&&z(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return co.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof co?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class le extends co{construct(t,n,r){return new le(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const VR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends co{construct(t,n,r){return new Xe(t,n,r)}static isValidIdentifier(t){return VR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new L(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(le.fromString(t))}static fromName(t){return new M(le.fromString(t).popFirst(5))}static empty(){return new M(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&le.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return le.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new le(t.slice()))}}function LR(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Qn(i,M.empty(),t)}function MR(e){return new Qn(e.readTime,e.key,-1)}class Qn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn($.min(),M.empty(),-1)}static max(){return new Qn($.max(),M.empty(),-1)}}function FR(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=M.comparator(e.documentKey,t.documentKey),n!==0?n:J(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==$R)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):I.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):I.reject(n)}static resolve(t){return new I((n,r)=>{n(t)})}static reject(t){return new I((n,r)=>{r(t)})}static waitFor(t){return new I((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=I.resolve(!1);for(const r of t)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new I((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new I((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Oo(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}yp.ae=-1;function Eu(e){return e==null}function hh(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Tu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function zR(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n){this.comparator=t,this.root=n||Oe.EMPTY}insert(t,n){return new ve(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(t){return new ve(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ya(this.root,t,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ya(this.root,t,this.comparator,!0)}}class ya{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Oe{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Oe(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Oe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.comparator=t,this.data=new ve(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(t){return new cy(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Fe)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Fe(this.comparator);return n.data=t,n}}class cy{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.fields=t,t.sort(Xe.comparator)}static empty(){return new Cn([])}unionWith(t){let n=new Fe(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Cn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ri(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Mw("Invalid base64 string: "+s):s}}(t);return new Qe(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const UR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(e){if(Ae(!!e),typeof e=="string"){let t=0;const n=UR.exec(e);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:we(e.seconds),nanos:we(e.nanos)}}function we(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Dr(e){return typeof e=="string"?Qe.fromBase64String(e):Qe.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _p(e){const t=e.mapValue.fields.__previous_value__;return vp(t)?_p(t):t}function fo(e){const t=Yn(e.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ho{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ho&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?vp(e)?4:HR(e)?9007199254740991:10:z()}function Qt(e,t){if(e===t)return!0;const n=Or(e);if(n!==Or(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return fo(e).isEqual(fo(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Yn(i.timestampValue),a=Yn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Dr(i.bytesValue).isEqual(Dr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?hh(o)===hh(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ri(e.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(uy(o)!==uy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Qt(o[l],a[l])))return!1;return!0}(e,t);default:return z()}}function po(e,t){return(e.values||[]).find(n=>Qt(n,t))!==void 0}function Ni(e,t){if(e===t)return 0;const n=Or(e),r=Or(t);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return fy(e.timestampValue,t.timestampValue);case 4:return fy(fo(e),fo(t));case 5:return J(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Dr(s),l=Dr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=J(a[u],l[u]);if(c!==0)return c}return J(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=J(we(s.latitude),we(o.latitude));return a!==0?a:J(we(s.longitude),we(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ni(a[u],l[u]);if(c)return c}return J(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===va.mapValue&&o===va.mapValue)return 0;if(s===va.mapValue)return 1;if(o===va.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=J(l[f],c[f]);if(h!==0)return h;const m=Ni(a[l[f]],u[c[f]]);if(m!==0)return m}return J(l.length,c.length)}(e.mapValue,t.mapValue);default:throw z()}}function fy(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return J(e,t);const n=Yn(e),r=Yn(t),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function bi(e){return dh(e)}function dh(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Yn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Dr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return M.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dh(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dh(n.fields[o])}`;return i+"}"}(e.mapValue):z()}function ph(e){return!!e&&"integerValue"in e}function wp(e){return!!e&&"arrayValue"in e}function hy(e){return!!e&&"nullValue"in e}function dy(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nc(e){return!!e&&"mapValue"in e}function xs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Tu(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=xs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function HR(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Nc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xs(n)}setAll(t){let n=Xe.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Tu(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new jt(xs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new We(t,0,$.min(),$.min(),$.min(),jt.empty(),0)}static newFoundDocument(t,n,r,i){return new We(t,1,n,$.min(),r,i,0)}static newNoDocument(t,n){return new We(t,2,n,$.min(),$.min(),jt.empty(),0)}static newUnknownDocument(t,n){return new We(t,3,n,$.min(),$.min(),jt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof We&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,n){this.position=t,this.inclusive=n}}function py(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function my(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Qt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,n="asc"){this.field=t,this.dir=n}}function WR(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{}class Ie extends Fw{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new KR(t,n,r):n==="array-contains"?new YR(t,r):n==="in"?new XR(t,r):n==="not-in"?new JR(t,r):n==="array-contains-any"?new ZR(t,r):new Ie(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new GR(t,r):new QR(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Fw{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Yt(t,n)}matches(t){return $w(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $w(e){return e.op==="and"}function jw(e){return qR(e)&&$w(e)}function qR(e){for(const t of e.filters)if(t instanceof Yt)return!1;return!0}function mh(e){if(e instanceof Ie)return e.field.canonicalString()+e.op.toString()+bi(e.value);if(jw(e))return e.filters.map(t=>mh(t)).join(",");{const t=e.filters.map(n=>mh(n)).join(",");return`${e.op}(${t})`}}function zw(e,t){return e instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)}(e,t):e instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zw(o,i.filters[a]),!0):!1}(e,t):void z()}function Uw(e){return e instanceof Ie?function(n){return`${n.field.canonicalString()} ${n.op} ${bi(n.value)}`}(e):e instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(Uw).join(" ,")+"}"}(e):"Filter"}class KR extends Ie{constructor(t,n,r){super(t,n,r),this.key=M.fromName(r.referenceValue)}matches(t){const n=M.comparator(t.key,this.key);return this.matchesComparison(n)}}class GR extends Ie{constructor(t,n){super(t,"in",n),this.keys=Bw("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class QR extends Ie{constructor(t,n){super(t,"not-in",n),this.keys=Bw("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Bw(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class YR extends Ie{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return wp(n)&&po(n.arrayValue,this.value)}}class XR extends Ie{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&po(this.value.arrayValue,n)}}class JR extends Ie{constructor(t,n){super(t,"not-in",n)}matches(t){if(po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!po(this.value.arrayValue,n)}}class ZR extends Ie{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!wp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function gy(e,t=null,n=[],r=[],i=null,s=null,o=null){return new e4(e,t,n,r,i,s,o)}function Ep(e){const t=X(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>mh(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Eu(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>bi(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>bi(r)).join(",")),t.le=n}return t.le}function Tp(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!WR(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!zw(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!my(e.startAt,t.startAt)&&my(e.endAt,t.endAt)}function gh(e){return M.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function t4(e,t,n,r,i,s,o,a){return new Iu(e,t,n,r,i,s,o,a)}function Ip(e){return new Iu(e)}function yy(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function n4(e){return e.collectionGroup!==null}function Ps(e){const t=X(e);if(t.he===null){t.he=[];const n=new Set;for(const s of t.explicitOrderBy)t.he.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Fe(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.he.push(new Pl(s,r))}),n.has(Xe.keyField().canonicalString())||t.he.push(new Pl(Xe.keyField(),r))}return t.he}function Kt(e){const t=X(e);return t.Pe||(t.Pe=r4(t,Ps(e))),t.Pe}function r4(e,t){if(e.limitType==="F")return gy(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pl(i.field,s)});const n=e.endAt?new xl(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new xl(e.startAt.position,e.startAt.inclusive):null;return gy(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function yh(e,t,n){return new Iu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Su(e,t){return Tp(Kt(e),Kt(t))&&e.limitType===t.limitType}function Hw(e){return`${Ep(Kt(e))}|lt:${e.limitType}`}function Br(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Uw(i)).join(", ")}]`),Eu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bi(i)).join(",")),`Target(${r})`}(Kt(e))}; limitType=${e.limitType})`}function Au(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Ps(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=py(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ps(r),i)||r.endAt&&!function(o,a,l){const u=py(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ps(r),i))}(e,t)}function i4(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ww(e){return(t,n)=>{let r=!1;for(const i of Ps(e)){const s=s4(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function s4(e,t,n){const r=e.field.isKeyField()?M.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ni(l,u):z()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Tu(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return zR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=new ve(M.comparator);function Xn(){return o4}const qw=new ve(M.comparator);function hs(...e){let t=qw;for(const n of e)t=t.insert(n.key,n);return t}function a4(e){let t=qw;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function yr(){return Rs()}function Kw(){return Rs()}function Rs(){return new Hi(e=>e.toString(),(e,t)=>e.isEqual(t))}const l4=new Fe(M.comparator);function G(...e){let t=l4;for(const n of e)t=t.add(n);return t}const u4=new Fe(J);function c4(){return u4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f4(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hh(t)?"-0":t}}function h4(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this._=void 0}}function d4(e,t,n){return e instanceof vh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&vp(s)&&(s=_p(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Rl?Gw(e,t):e instanceof Nl?Qw(e,t):function(i,s){const o=m4(i,s),a=vy(o)+vy(i.Te);return ph(o)&&ph(i.Te)?h4(a):f4(i.serializer,a)}(e,t)}function p4(e,t,n){return e instanceof Rl?Gw(e,t):e instanceof Nl?Qw(e,t):n}function m4(e,t){return e instanceof _h?function(r){return ph(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class vh extends ku{}class Rl extends ku{constructor(t){super(),this.elements=t}}function Gw(e,t){const n=Yw(t);for(const r of e.elements)n.some(i=>Qt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Nl extends ku{constructor(t){super(),this.elements=t}}function Qw(e,t){let n=Yw(t);for(const r of e.elements)n=n.filter(i=>!Qt(i,r));return{arrayValue:{values:n}}}class _h extends ku{constructor(t,n){super(),this.serializer=t,this.Te=n}}function vy(e){return we(e.integerValue||e.doubleValue)}function Yw(e){return wp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function g4(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Rl&&i instanceof Rl||r instanceof Nl&&i instanceof Nl?Ri(r.elements,i.elements,Qt):r instanceof _h&&i instanceof _h?Qt(r.Te,i.Te):r instanceof vh&&i instanceof vh}(e.transform,t.transform)}class Er{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Er}static exists(t){return new Er(void 0,t)}static updateTime(t){return new Er(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oa(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Sp{}function Xw(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new v4(e.key,Er.none()):new Ap(e.key,e.data,Er.none());{const n=e.data,r=jt.empty();let i=new Fe(Xe.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cu(e.key,r,new Cn(i.toArray()),Er.none())}}function y4(e,t,n){e instanceof Ap?function(i,s,o){const a=i.value.clone(),l=wy(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Cu?function(i,s,o){if(!Oa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=wy(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Jw(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ns(e,t,n,r){return e instanceof Ap?function(s,o,a,l){if(!Oa(s.precondition,o))return a;const u=s.value.clone(),c=Ey(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Cu?function(s,o,a,l){if(!Oa(s.precondition,o))return a;const u=Ey(s.fieldTransforms,l,o),c=o.data;return c.setAll(Jw(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(s,o,a){return Oa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function _y(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ri(r,i,(s,o)=>g4(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ap extends Sp{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cu extends Sp{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Jw(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function wy(e,t,n){const r=new Map;Ae(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,p4(o,a,n[i]))}return r}function Ey(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,d4(s,o,t))}return r}class v4 extends Sp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&y4(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ns(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ns(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Kw();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Xw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),G())}isEqual(t){return this.batchId===t.batchId&&Ri(this.mutations,t.mutations,(n,r)=>_y(n,r))&&Ri(this.baseMutations,t.baseMutations,(n,r)=>_y(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,q;function Zw(e){if(e===void 0)return dn("GRPC error has no .code"),A.UNKNOWN;switch(e){case _e.OK:return A.OK;case _e.CANCELLED:return A.CANCELLED;case _e.UNKNOWN:return A.UNKNOWN;case _e.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case _e.INTERNAL:return A.INTERNAL;case _e.UNAVAILABLE:return A.UNAVAILABLE;case _e.UNAUTHENTICATED:return A.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case _e.NOT_FOUND:return A.NOT_FOUND;case _e.ALREADY_EXISTS:return A.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return A.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case _e.ABORTED:return A.ABORTED;case _e.OUT_OF_RANGE:return A.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return A.UNIMPLEMENTED;case _e.DATA_LOSS:return A.DATA_LOSS;default:return z()}}(q=_e||(_e={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=new yi([4294967295,4294967295],0);function Ty(e){const t=T4().encode(e),n=new kR;return n.update(t),new Uint8Array(n.digest())}function Iy(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new yi([n,r],0),new yi([i,s],0)]}class kp{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ds(`Invalid padding: ${n}`);if(r<0)throw new ds(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ds(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=yi.fromNumber(this.Ee)}Ae(t,n,r){let i=t.add(n.multiply(yi.fromNumber(r)));return i.compare(I4)===1&&(i=new yi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ee===0)return!1;const n=Ty(t),[r,i]=Iy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new kp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ee===0)return;const n=Ty(t),[r,i]=Iy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Vo.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new xu($.min(),i,new ve(J),Xn(),G())}}class Vo{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Vo(r,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n,r,i){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=i}}class eE{constructor(t,n){this.targetId=t,this.ge=n}}class tE{constructor(t,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sy{constructor(){this.pe=0,this.ye=ky(),this.we=Qe.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=G(),n=G(),r=G();return this.ye.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Vo(this.we,this.Se,t,n,r)}Me(){this.be=!1,this.ye=ky()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class S4{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Xn(),this.Ke=Ay(),this.$e=new ve(J)}Ue(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.We(n,t.fe):this.Ge(n,t.key,t.fe);for(const n of t.removedTargetIds)this.Ge(n,t.key,t.fe)}ze(t){this.forEachTarget(t,n=>{const r=this.je(n);switch(t.state){case 0:this.He(n)&&r.ve(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(t.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(t.resumeToken));break;default:z()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.He(i)&&n(i)})}Ye(t){const n=t.targetId,r=t.ge.count,i=this.Ze(n);if(i){const s=i.target;if(gh(s))if(r===0){const o=new M(s.path);this.Ge(n,o,We.newNoDocument(o,$.min()))}else Ae(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(t),l=a?this.tt(a,t,o):1;if(l!==0){this.Je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,u)}}}}}et(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Dr(r).toUint8Array()}catch(l){if(l instanceof Mw)return Pi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new kp(o,i,s)}catch(l){return Pi(l instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(t,n,r){return n.ge.count===r-this.it(t,n.targetId)?0:2}it(t,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ge(n,s,null),i++)}),i}st(t){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Ze(o);if(a){if(s.current&&gh(a.target)){const l=new M(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,We.newNoDocument(l,t))}s.Ce&&(n.set(o,s.Fe()),s.Me())}});let r=G();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ze(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(t));const i=new xu(t,n,this.$e,this.Qe,r);return this.Qe=Xn(),this.Ke=Ay(),this.$e=new ve(J),i}We(t,n){if(!this.He(t))return;const r=this.ot(t,n.key)?2:0;this.je(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(t))}Ge(t,n,r){if(!this.He(t))return;const i=this.je(t);this.ot(t,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}Xe(t){const n=this.je(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.je(t).Ne()}je(t){let n=this.qe.get(t);return n||(n=new Sy,this.qe.set(t,n)),n}_t(t){let n=this.Ke.get(t);return n||(n=new Fe(J),this.Ke=this.Ke.insert(t,n)),n}He(t){const n=this.Ze(t)!==null;return n||D("WatchChangeAggregator","Detected inactive target",t),n}Ze(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.ut(t)}Je(t){this.qe.set(t,new Sy),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.Ge(t,n,null)})}ot(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function Ay(){return new ve(M.comparator)}function ky(){return new ve(M.comparator)}const A4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),k4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),C4=(()=>({and:"AND",or:"OR"}))();class x4{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function wh(e,t){return e.useProto3Json||Eu(t)?t:{value:t}}function P4(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function R4(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function vi(e){return Ae(!!e),$.fromTimestamp(function(n){const r=Yn(n);return new lt(r.seconds,r.nanos)}(e))}function N4(e,t){return function(r){return new le(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function nE(e){const t=le.fromString(e);return Ae(oE(t)),t}function bc(e,t){const n=nE(t);if(n.get(1)!==e.databaseId.projectId)throw new L(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new M(rE(n))}function Eh(e,t){return N4(e.databaseId,t)}function b4(e){const t=nE(e);return t.length===4?le.emptyPath():rE(t)}function Cy(e){return new le(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rE(e){return Ae(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function D4(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ae(c===void 0||typeof c=="string"),Qe.fromBase64String(c||"")):(Ae(c===void 0||c instanceof Uint8Array),Qe.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:Zw(u.code);return new L(c,u.message||"")}(o);n=new tE(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=bc(e,r.document.name),s=vi(r.document.updateTime),o=r.document.createTime?vi(r.document.createTime):$.min(),a=new jt({mapValue:{fields:r.document.fields}}),l=We.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Va(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=bc(e,r.document),s=r.readTime?vi(r.readTime):$.min(),o=We.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Va([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=bc(e,r.document),s=r.removedTargetIds||[];n=new Va([],s,i,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new E4(i,s),a=r.targetId;n=new eE(a,o)}}return n}function O4(e,t){return{documents:[Eh(e,t.path)]}}function V4(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Eh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Eh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return sE(Yt.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Hr(f.field),direction:F4(f.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=wh(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function L4(e){let t=b4(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=iE(f);return h instanceof Yt&&jw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(v){return new Pl(Wr(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,Eu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,m=f.values||[];return new xl(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,m=f.values||[];return new xl(m,h)}(n.endAt)),t4(t,i,o,s,a,"F",l,u)}function M4(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function iE(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Wr(n.unaryFilter.field);return Ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wr(n.unaryFilter.field);return Ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(n.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(e):e.fieldFilter!==void 0?function(n){return Ie.create(Wr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>iE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(e):z()}function F4(e){return A4[e]}function $4(e){return k4[e]}function j4(e){return C4[e]}function Hr(e){return{fieldPath:e.canonicalString()}}function Wr(e){return Xe.fromServerFormat(e.fieldPath)}function sE(e){return e instanceof Ie?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(hy(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(hy(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:$4(n.op),value:n.value}}}(e):e instanceof Yt?function(n){const r=n.getFilters().map(i=>sE(i));return r.length===1?r[0]:{compositeFilter:{op:j4(n.op),filters:r}}}(e):z()}function oE(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,n,r,i,s=$.min(),o=$.min(),a=Qe.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new xn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(t){this.ct=t}}function U4(e){const t=L4({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?yh(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(){this._n=new H4}addToCollectionParentIndex(t,n){return this._n.add(n),I.resolve()}getCollectionParents(t,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return I.resolve()}deleteFieldIndex(t,n){return I.resolve()}deleteAllFieldIndexes(t){return I.resolve()}createTargetIndexes(t,n){return I.resolve()}getDocumentsMatchingTarget(t,n){return I.resolve(null)}getIndexType(t,n){return I.resolve(0)}getFieldIndexes(t,n){return I.resolve([])}getNextCollectionGroupToUpdate(t){return I.resolve(null)}getMinOffset(t,n){return I.resolve(Qn.min())}getMinOffsetFromCollectionGroup(t,n){return I.resolve(Qn.min())}updateCollectionGroup(t,n,r){return I.resolve()}updateIndexEntries(t,n){return I.resolve()}}class H4{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Fe(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Fe(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Di(0)}static Bn(){return new Di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(){this.changes=new Hi(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,We.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ns(r.mutation,i,Cn.empty(),lt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,G()).next(()=>r))}getLocalViewOfDocuments(t,n,r=G()){const i=yr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=hs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=yr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,G()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Xn();const o=Rs(),a=function(){return Rs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Cu)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ns(c.mutation,u,c.mutation.getFieldMask(),lt.now())):o.set(u.key,Cn.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new q4(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Rs();let i=new ve((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Cn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=Kw();c.forEach(h=>{if(!s.has(h)){const m=Xw(n.get(h),r.get(h));m!==null&&f.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):n4(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):I.resolve(yr());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,G())).next(c=>({batchId:a,changes:a4(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new M(n)).next(r=>{let i=hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=hs();return this.indexManager.getCollectionParents(t,s).next(a=>I.forEach(a,l=>{const u=function(f,h){return new Iu(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,We.newInvalidDocument(c)))});let a=hs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ns(c.mutation,u,Cn.empty(),lt.now()),Au(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vi(i.createTime)}}(n)),I.resolve()}getNamedQuery(t,n){return I.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:U4(i.bundledQuery),readTime:vi(i.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.overlays=new ve(M.comparator),this.hr=new Map}getOverlay(t,n){return I.resolve(this.overlays.get(n))}getOverlays(t,n){const r=yr();return I.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),I.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(t,n,r){const i=yr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=yr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new w4(n,r));let s=this.hr.get(n);s===void 0&&(s=G(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.Pr=new Fe(xe.Ir),this.Tr=new Fe(xe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new xe(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new xe(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new M(new le([])),r=new xe(n,t),i=new xe(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new M(new le([])),r=new xe(n,t),i=new xe(n,t+1);let s=G();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new xe(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class xe{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return M.comparator(t.key,n.key)||J(t.pr,n.pr)}static Er(t,n){return J(t.pr,n.pr)||M.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Fe(xe.Ir)}checkEmpty(t){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new xe(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(t,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Fe(J);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new xe(new M(s),0);let a=new Fe(J);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Ae(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new xe(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,I.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(t){this.vr=t,this.docs=function(){return new ve(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(t,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Xn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||FR(MR(c),r)<=0||(i.has(c.key)||Au(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(t,n,r,i){z()}Fr(t,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new J4(this)}getSize(t){return I.resolve(this.size)}}class J4 extends W4{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(t){this.persistence=t,this.Mr=new Hi(n=>Ep(n),Tp),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Cp,this.targetCount=0,this.Br=Di.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(t){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return I.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Di(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(t,n){return this.qn(n),I.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(t){return I.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(t,n){return I.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(t,n){this.Lr={},this.overlays={},this.kr=new yp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Z4(this),this.indexManager=new B4,this.remoteDocumentCache=function(i){return new X4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new z4(n),this.$r=new G4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Q4,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Y4(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){D("MemoryPersistence","Starting transaction:",t);const i=new tN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class tN extends jR{constructor(t){super(),this.currentSequenceNumber=t}}class xp{constructor(t){this.persistence=t,this.zr=new Cp,this.jr=null}static Hr(t){return new xp(t)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const i=M.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pp(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nN;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(is()<=K.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Br(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(is()<=K.DEBUG&&D("QueryEngine","Query:",Br(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(is()<=K.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Br(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(n))):I.resolve())}ji(t,n){if(yy(n))return I.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yh(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=G(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(t,yh(n,null,"F")):this.es(t,u,n,l)}))})))}Hi(t,n,r,i){return yy(n)||i.isEqual($.min())?I.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(is()<=K.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Br(n)),this.es(t,o,n,LR(i,-1)).next(a=>a))})}Zi(t,n){let r=new Fe(Ww(t));return n.forEach((i,s)=>{Au(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return is()<=K.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Br(n)),this.zi.getDocumentsMatchingQuery(t,n,Qn.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new ve(J),this.rs=new Hi(s=>Ep(s),Tp),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new K4(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function sN(e,t,n,r){return new iN(e,t,n,r)}async function aE(e,t){const n=X(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function lE(e){const t=X(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function oN(e,t){const n=X(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,f)));let m=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(Qe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(f,m),function(y,E,p){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=Xn(),u=G();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(aN(s,o,t.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual($.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function aN(e,t,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function lN(e,t){const n=X(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new xn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Th(e,t,n){const r=X(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Oo(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function xy(e,t,n){const r=X(e);let i=$.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=X(l),h=f.rs.get(c);return h!==void 0?I.resolve(f.ns.get(h)):f.Qr.getTargetData(u,c)}(r,o,Kt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:$.min(),n?s:G())).next(a=>(uN(r,i4(t),a),{documents:a,hs:s})))}function uN(e,t,n){let r=e.ss.get(t)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class Py{constructor(){this.activeTargetIds=c4()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cN{constructor(){this.no=new Py,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Py,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function Dc(){return _a===null?_a=function(){return 268435456+Math.round(2147483648*Math.random())}():_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class pN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Dc(),l=this.bo(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Pi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=hN[n];return`${this.fo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=Dc();return new Promise((o,a)=>{const l=new AR;l.setWithCredentials(!0),l.listenOnce(IR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Rc.NO_ERROR:const c=l.getResponseJson();D(Ue,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Rc.TIMEOUT:D(Ue,`RPC '${t}' ${s} timed out`),a(new L(A.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const f=l.getStatus();if(D(Ue,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const v=function(E){const p=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(p)>=0?p:A.UNKNOWN}(m.status);a(new L(v,m.message))}else a(new L(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(A.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{D(Ue,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);D(Ue,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(t,n,r){const i=Dc(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ER(),a=TR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(Ue,`Creating RPC '${t}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,m=!1;const v=new dN({lo:E=>{m?D(Ue,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(h||(D(Ue,`Opening RPC '${t}' stream ${i} transport.`),f.open(),h=!0),D(Ue,`RPC '${t}' stream ${i} sending:`,E),f.send(E))},ho:()=>f.close()}),y=(E,p,d)=>{E.listen(p,g=>{try{d(g)}catch(_){setTimeout(()=>{throw _},0)}})};return y(f,ga.EventType.OPEN,()=>{m||D(Ue,`RPC '${t}' stream ${i} transport opened.`)}),y(f,ga.EventType.CLOSE,()=>{m||(m=!0,D(Ue,`RPC '${t}' stream ${i} transport closed`),v.Vo())}),y(f,ga.EventType.ERROR,E=>{m||(m=!0,Pi(Ue,`RPC '${t}' stream ${i} transport errored:`,E),v.Vo(new L(A.UNAVAILABLE,"The operation could not be completed")))}),y(f,ga.EventType.MESSAGE,E=>{var p;if(!m){const d=E.data[0];Ae(!!d);const g=d,_=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(_){D(Ue,`RPC '${t}' stream ${i} received error:`,_);const T=_.status;let x=function(Y){const U=_e[Y];if(U!==void 0)return Zw(U)}(T),P=_.message;x===void 0&&(x=A.INTERNAL,P="Unknown error status: "+T+" with message "+_.message),m=!0,v.Vo(new L(x,P)),f.close()}else D(Ue,`RPC '${t}' stream ${i} received:`,d),v.mo(d)}}),y(a,SR.STAT_EVENT,E=>{E.stat===ay.PROXY?D(Ue,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===ay.NOPROXY&&D(Ue,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(e){return new x4(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(t,n,r,i,s,o,a,l){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new cE(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(dn(n.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new L(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gN extends mN{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=D4(this.serializer,t),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?vi(o.readTime):$.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Cy(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=gh(l)?{documents:O4(s,l)}:{query:V4(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R4(s,o.resumeToken);const u=wh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=P4(s,o.snapshotVersion.toTimestamp());const u=wh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=M4(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Cy(this.serializer),n.removeTarget=t,this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new L(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(A.UNKNOWN,i.toString())})}vo(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(A.UNKNOWN,s.toString())})}terminate(){this.A_=!0}}class vN{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(dn(n),this.g_=!1):D("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Mo(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=X(l);u.v_.add(4),await Lo(u),u.x_.set("Unknown"),u.v_.delete(4),await Pu(u)}(this))})}),this.x_=new vN(r,i)}}async function Pu(e){if(Mo(e))for(const t of e.F_)await t(!0)}async function Lo(e){for(const t of e.F_)await t(!1)}function fE(e,t){const n=X(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),bp(n)?Np(n):Wi(n).Jo()&&Rp(n,t))}function hE(e,t){const n=X(e),r=Wi(n);n.C_.delete(t),r.Jo()&&dE(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Mo(n)&&n.x_.set("Unknown"))}function Rp(e,t){if(e.O_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Wi(e).c_(t)}function dE(e,t){e.O_.Ne(t),Wi(e).l_(t)}function Np(e){e.O_=new S4({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.C_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Wi(e).start(),e.x_.p_()}function bp(e){return Mo(e)&&!Wi(e).Ho()&&e.C_.size>0}function Mo(e){return X(e).v_.size===0}function pE(e){e.O_=void 0}async function wN(e){e.C_.forEach((t,n)=>{Rp(e,t)})}async function EN(e,t){pE(e),bp(e)?(e.x_.S_(t),Np(e)):e.x_.set("Unknown")}async function TN(e,t,n){if(e.x_.set("Online"),t instanceof tE&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ny(e,r)}else if(t instanceof Va?e.O_.Ue(t):t instanceof eE?e.O_.Ye(t):e.O_.ze(t),!n.isEqual($.min()))try{const r=await lE(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),dE(s,l);const f=new xn(c.target,l,u,c.sequenceNumber);Rp(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Ny(e,r)}}async function Ny(e,t,n){if(!Oo(t))throw t;e.v_.add(1),await Lo(e),e.x_.set("Offline"),n||(n=()=>lE(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Pu(e)})}async function by(e,t){const n=X(e);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Mo(n);n.v_.add(3),await Lo(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Pu(n)}async function IN(e,t){const n=X(e);t?(n.v_.delete(2),await Pu(n)):t||(n.v_.add(2),await Lo(n),n.x_.set("Unknown"))}function Wi(e){return e.N_||(e.N_=function(n,r,i){const s=X(n);return s.R_(),new gN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:wN.bind(null,e),To:EN.bind(null,e),u_:TN.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),bp(e)?Np(e):e.x_.set("Unknown")):(await e.N_.stop(),pE(e))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Dp(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mE(e,t){if(dn("AsyncQueue",`${t}: ${e}`),Oo(e))return new L(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.comparator=t?(n,r)=>t(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=hs(),this.sortedSet=new ve(this.comparator)}static emptySet(t){return new _i(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof _i)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new _i;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.L_=new ve(M.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):z():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Oi{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Oi(t,n,_i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Su(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.q_=void 0,this.listeners=[]}}class AN{constructor(){this.queries=new Hi(t=>Hw(t),Su),this.onlineState="Unknown",this.Q_=new Set}}async function gE(e,t){const n=X(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new SN),i)try{s.q_=await n.onListen(r)}catch(o){const a=mE(o,`Initialization of query '${Br(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.K_(n.onlineState),s.q_&&t.U_(s.q_)&&Op(n)}async function yE(e,t){const n=X(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function kN(e,t){const n=X(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.U_(i)&&(r=!0);o.q_=i}}r&&Op(n)}function CN(e,t,n){const r=X(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Op(e){e.Q_.forEach(t=>{t.next()})}class vE{constructor(t,n,r){this.query=t,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Oi(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.G_?this.j_(t)&&(this.W_.next(t),n=!0):this.H_(t,this.onlineState)&&(this.J_(t),n=!0),this.z_=t,n}onError(t){this.W_.error(t)}K_(t){this.onlineState=t;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,t)&&(this.J_(this.z_),n=!0),n}H_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}j_(t){if(t.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(t){t=Oi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.G_=!0,this.W_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t){this.key=t}}class wE{constructor(t){this.key=t}}class xN{constructor(t,n){this.query=t,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=G(),this.mutatedKeys=G(),this.aa=Ww(t),this.ua=new _i(this.aa)}get ca(){return this.sa}la(t,n){const r=n?n.ha:new Dy,i=n?n.ua:this.ua;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const h=i.get(c),m=Au(this.query,f)?f:null,v=!!h&&this.mutatedKeys.has(h.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;h&&m?h.data.isEqual(m.data)?v!==y&&(r.track({type:3,doc:m}),E=!0):this.Pa(h,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.aa(m,l)>0||u&&this.aa(m,u)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),E=!0):h&&!m&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ua:o,ha:r,Xi:a,mutatedKeys:s}}Pa(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ua;this.ua=t.ua,this.mutatedKeys=t.mutatedKeys;const s=t.ha.k_();s.sort((u,c)=>function(h,m){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return v(h)-v(m)}(u.type,c.type)||this.aa(u.doc,c.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,s.length!==0||l?{snapshot:new Oi(this.query,t.ua,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new Dy,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(t){return!this.sa.has(t)&&!!this.ua.has(t)&&!this.ua.get(t).hasLocalMutations}Ia(t){t&&(t.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=t.current)}Ta(){if(!this.current)return[];const t=this._a;this._a=G(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return t.forEach(r=>{this._a.has(r)||n.push(new wE(r))}),this._a.forEach(r=>{t.has(r)||n.push(new _E(r))}),n}Aa(t){this.sa=t.hs,this._a=G();const n=this.la(t.documents);return this.applyChanges(n,!0)}Ra(){return Oi.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class PN{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class RN{constructor(t){this.key=t,this.Va=!1}}class NN{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Hi(a=>Hw(a),Su),this.ga=new Map,this.pa=new Set,this.ya=new ve(M.comparator),this.wa=new Map,this.Sa=new Cp,this.ba={},this.Da=new Map,this.Ca=Di.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function bN(e,t){const n=$N(e);let r,i;const s=n.fa.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ra();else{const o=await lN(n.localStore,Kt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await DN(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&fE(n.remoteStore,o)}return i}async function DN(e,t,n,r,i){e.Fa=(f,h,m)=>async function(y,E,p,d){let g=E.view.la(p);g.Xi&&(g=await xy(y.localStore,E.query,!1).then(({documents:x})=>E.view.la(x,g)));const _=d&&d.targetChanges.get(E.targetId),T=E.view.applyChanges(g,y.isPrimaryClient,_);return Vy(y,E.targetId,T.Ea),T.snapshot}(e,f,h,m);const s=await xy(e.localStore,t,!0),o=new xN(t,s.hs),a=o.la(s.documents),l=Vo.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);Vy(e,n,u.Ea);const c=new PN(t,n,o);return e.fa.set(t,c),e.ga.has(n)?e.ga.get(n).push(t):e.ga.set(n,[t]),u.snapshot}async function ON(e,t){const n=X(e),r=n.fa.get(t),i=n.ga.get(r.targetId);if(i.length>1)return n.ga.set(r.targetId,i.filter(s=>!Su(s,t))),void n.fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Th(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hE(n.remoteStore,r.targetId),Ih(n,r.targetId)}).catch(gp)):(Ih(n,r.targetId),await Th(n.localStore,r.targetId,!0))}async function EE(e,t){const n=X(e);try{const r=await oN(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.wa.get(s);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Va=!0:i.modifiedDocuments.size>0?Ae(o.Va):i.removedDocuments.size>0&&(Ae(o.Va),o.Va=!1))}),await IE(n,r,t)}catch(r){await gp(r)}}function Oy(e,t,n){const r=X(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.fa.forEach((s,o)=>{const a=o.view.K_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.listeners)h.K_(a)&&(u=!0)}),u&&Op(l)}(r.eventManager,t),i.length&&r.ma.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function VN(e,t,n){const r=X(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.wa.get(t),s=i&&i.key;if(s){let o=new ve(M.comparator);o=o.insert(s,We.newNoDocument(s,$.min()));const a=G().add(s),l=new xu($.min(),new Map,new ve(J),o,a);await EE(r,l),r.ya=r.ya.remove(s),r.wa.delete(t),Vp(r)}else await Th(r.localStore,t,!1).then(()=>Ih(r,t,n)).catch(gp)}function Ih(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ga.get(t))e.fa.delete(r),n&&e.ma.Ma(r,n);e.ga.delete(t),e.isPrimaryClient&&e.Sa.Vr(t).forEach(r=>{e.Sa.containsKey(r)||TE(e,r)})}function TE(e,t){e.pa.delete(t.path.canonicalString());const n=e.ya.get(t);n!==null&&(hE(e.remoteStore,n),e.ya=e.ya.remove(t),e.wa.delete(n),Vp(e))}function Vy(e,t,n){for(const r of n)r instanceof _E?(e.Sa.addReference(r.key,t),LN(e,r)):r instanceof wE?(D("SyncEngine","Document no longer in limbo: "+r.key),e.Sa.removeReference(r.key,t),e.Sa.containsKey(r.key)||TE(e,r.key)):z()}function LN(e,t){const n=t.key,r=n.path.canonicalString();e.ya.get(n)||e.pa.has(r)||(D("SyncEngine","New document in limbo: "+n),e.pa.add(r),Vp(e))}function Vp(e){for(;e.pa.size>0&&e.ya.size<e.maxConcurrentLimboResolutions;){const t=e.pa.values().next().value;e.pa.delete(t);const n=new M(le.fromString(t)),r=e.Ca.next();e.wa.set(r,new RN(n)),e.ya=e.ya.insert(n,r),fE(e.remoteStore,new xn(Kt(Ip(n.path)),r,"TargetPurposeLimboResolution",yp.ae))}}async function IE(e,t,n){const r=X(e),i=[],s=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Pp.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ma.u_(i),await async function(l,u){const c=X(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>I.forEach(u,h=>I.forEach(h.qi,m=>c.persistence.referenceDelegate.addReference(f,h.targetId,m)).next(()=>I.forEach(h.Qi,m=>c.persistence.referenceDelegate.removeReference(f,h.targetId,m)))))}catch(f){if(!Oo(f))throw f;D("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const m=c.ns.get(h),v=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(v);c.ns=c.ns.insert(h,y)}}}(r.localStore,s))}async function MN(e,t){const n=X(e);if(!n.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await aE(n.localStore,t);n.currentUser=t,function(s,o){s.Da.forEach(a=>{a.forEach(l=>{l.reject(new L(A.CANCELLED,o))})}),s.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await IE(n,r.us)}}function FN(e,t){const n=X(e),r=n.wa.get(t);if(r&&r.Va)return G().add(r.key);{let i=G();const s=n.ga.get(t);if(!s)return i;for(const o of s){const a=n.fa.get(o);i=i.unionWith(a.view.ca)}return i}}function $N(e){const t=X(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=EE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=FN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=VN.bind(null,t),t.ma.u_=kN.bind(null,t.eventManager),t.ma.Ma=CN.bind(null,t.eventManager),t}class Ly{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=uE(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return sN(this.persistence,new rN,t.initialUser,this.serializer)}createPersistence(t){return new eN(xp.Hr,this.serializer)}createSharedClientState(t){return new cN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jN{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Oy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MN.bind(null,this.syncEngine),await IN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new AN}()}createDatastore(t){const n=uE(t.databaseInfo.databaseId),r=function(s){return new pN(s)}(t.databaseInfo);return function(s,o,a,l){return new yN(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new _N(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Oy(this.syncEngine,n,0),function(){return Ry.C()?new Ry:new fN}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,c){const f=new NN(i,s,o,a,l,u);return c&&(f.va=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=X(n);D("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await Lo(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Na(this.observer.next,t)}error(t){this.observer.error?this.Na(this.observer.error,t):dn("Uncaught Error in snapshot listener:",t.toString())}Ba(){this.muted=!0}Na(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=Lw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=mE(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Vc(e,t){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aE(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function My(e,t){e.asyncQueue.verifyOperationInProgress();const n=await BN(e);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>by(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>by(t.remoteStore,s)),e._onlineComponents=t}function UN(e){return e.name==="FirebaseError"?e.code===A.FAILED_PRECONDITION||e.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function BN(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!UN(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await Vc(e,new Ly)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Vc(e,new Ly);return e._offlineComponents}async function HN(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await My(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await My(e,new jN))),e._onlineComponents}async function AE(e){const t=await HN(e),n=t.eventManager;return n.onListen=bN.bind(null,t.syncEngine),n.onUnlisten=ON.bind(null,t.syncEngine),n}function WN(e,t,n={}){const r=new zn;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new SE({next:h=>{o.enqueueAndForget(()=>yE(s,f));const m=h.docs.has(a);!m&&h.fromCache?u.reject(new L(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&l&&l.source==="server"?u.reject(new L(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new vE(Ip(a.path),c,{includeMetadataChanges:!0,Y_:!0});return gE(s,f)}(await AE(e),e.asyncQueue,t,n,r)),r.promise}function qN(e,t,n={}){const r=new zn;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new SE({next:h=>{o.enqueueAndForget(()=>yE(s,f)),h.fromCache&&l.source==="server"?u.reject(new L(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new vE(a,c,{includeMetadataChanges:!0,Y_:!0});return gE(s,f)}(await AE(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(e,t,n){if(!n)throw new L(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function KN(e,t,n,r){if(t===!0&&r===!0)throw new L(A.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $y(e){if(!M.isDocumentKey(e))throw new L(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function jy(e){if(M.isDocumentKey(e))throw new L(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function GN(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":z()}function mo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=GN(e);throw new L(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}KN("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kE((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ru{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zy(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CR;switch(r.type){case"firstParty":return new NR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fy.get(n);r&&(D("ComponentProvider","Removing Datastore"),Fy.delete(n),r.terminate())}(this),Promise.resolve()}}function QN(e,t,n,r={}){var i;const s=(e=mo(e,Ru))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Be.MOCK_USER;else{a=Ck(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Be(u)}e._authCredentials=new xR(new Vw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Nu(this.firestore,t,this._query)}}class Gt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Gt(this.firestore,t,this._key)}}class Un extends Nu{constructor(t,n,r){super(t,n,Ip(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Gt(this.firestore,null,new M(t))}withConverter(t){return new Un(this.firestore,t,this._path)}}function xE(e,t,...n){if(e=nu(e),CE("collection","path",t),e instanceof Ru){const r=le.fromString(t,...n);return jy(r),new Un(e,null,r)}{if(!(e instanceof Gt||e instanceof Un))throw new L(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(le.fromString(t,...n));return jy(r),new Un(e.firestore,null,r)}}function Sh(e,t,...n){if(e=nu(e),arguments.length===1&&(t=Lw.V()),CE("doc","path",t),e instanceof Ru){const r=le.fromString(t,...n);return $y(r),new Gt(e,null,new M(r))}{if(!(e instanceof Gt||e instanceof Un))throw new L(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(le.fromString(t,...n));return $y(r),new Gt(e.firestore,e instanceof Un?e.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new cE(this,"async_queue_retry"),this.su=()=>{const n=Oc();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Oc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ou(),this._u(t)}enterRestrictedMode(t){if(!this.Xa){this.Xa=!0,this.ru=t||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(t){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new zn;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Za.push(t),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(t){if(!Oo(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(t){const n=this.Ya.then(()=>(this.nu=!0,t().catch(r=>{this.tu=r,this.nu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(t,n,r){this.ou(),this.iu.indexOf(t)>-1&&(n=0);const i=Dp.createAndSchedule(this,t,n,r,s=>this.uu(s));return this.eu.push(i),i}ou(){this.tu&&z()}verifyOperationInProgress(){}async cu(){let t;do t=this.Ya,await t;while(t!==this.Ya)}lu(t){for(const n of this.eu)if(n.timerId===t)return!0;return!1}hu(t){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.cu()})}Pu(t){this.iu.push(t)}uu(t){const n=this.eu.indexOf(t);this.eu.splice(n,1)}}class Lp extends Ru{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new YN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RE(this),this._firestoreClient.terminate()}}function XN(e,t){const n=typeof e=="object"?e:o_(),r=typeof e=="string"?e:t||"(default)",i=Ao(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ak("firestore");s&&QN(i,...s)}return i}function PE(e){return e._firestoreClient||RE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function RE(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new BR(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,kE(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new zN(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bl(Qe.fromBase64String(t))}catch(n){throw new L(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new bl(Qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}}const ZN=new RegExp("[~\\*/\\[\\]]");function eb(e,t,n){if(t.search(ZN)>=0)throw Uy(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new NE(...t.split("."))._internalPath}catch{throw Uy(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Uy(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(A.INVALID_ARGUMENT,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(DE("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tb extends bE{data(){return super.data()}}function DE(e,t){return typeof t=="string"?eb(e,t):t instanceof NE?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rb{convertValue(t,n="none"){switch(Or(t)){case 0:return null;case 1:return t.booleanValue;case 2:return we(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Dr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw z()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Tu(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new JN(we(t.latitude),we(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=_p(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fo(t));default:return null}}convertTimestamp(t){const n=Yn(t);return new lt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=le.fromString(t);Ae(oE(r));const i=new ho(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class OE extends bE{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(DE("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class La extends OE{data(t={}){return super.data(t)}}class ib{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new La(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new La(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new La(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:sb(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(e){e=mo(e,Gt);const t=mo(e.firestore,Lp);return WN(PE(t),e._key).then(n=>ob(t,e,n))}class VE extends rb{constructor(t){super(),this.firestore=t}convertBytes(t){return new bl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function LE(e){e=mo(e,Nu);const t=mo(e.firestore,Lp),n=PE(t),r=new VE(t);return nb(e._query),qN(n,e._query).then(i=>new ib(t,r,e,i))}function ob(e,t,n){const r=n.docs.get(t._key),i=new VE(e);return new OE(e,i,t._key,r,new ps(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Bi=i})(DC),Gn(new fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Lp(new PR(r.getProvider("auth-internal")),new DR(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ho(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qt(ly,"4.3.0",t),qt(ly,"4.3.0","esm2017")})();const ab={apiKey:"AIzaSyCyKnk0W-TlUSuRGVwssVmhl7N6dDNY044",authDomain:"solobanker-4e82b.firebaseapp.com",projectId:"solobanker-4e82b",storageBucket:"solobanker-4e82b.appspot.com",messagingSenderId:"684581452754",appId:"1:684581452754:web:6a879656f37a40c3b4e60b",measurementId:"G-PXB27771LR"},ME=s_(ab);yP(ME);const go=XN(ME),lb=xE(go,"users"),ub=xE(go,"transactions");async function cb(){const e=await LE(lb);if(e.empty)throw{message:"Failed to load users!"};return e.docs.map(n=>({...n.data(),id:n.id}))}async function fb(){const e=await LE(ub);if(e.empty)throw{message:"Failed to load transactions history!"};return await Promise.all(e.docs.map(async n=>{let r={...n.data()},i=Sh(go,"users",r.from),s=Sh(go,"users",r.to);const[o,a]=await Promise.all([Ah(i),Ah(s)]);return{date:new Date(r.date.toDate()).toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),from:o.data().name,to:a.data().name,value:r.value}}))}async function hb(e){let t=Sh(go,"users",e);const n=await Ah(t);if(n.empty)throw{message:"Failed to load user!"};return{...n.data(),id:n.id}}function db(){let[e,t]=k.useState([]);return k.useEffect(function(){async function n(){const r=await fb();t(r)}n()},[]),w.jsx(w.Fragment,{children:w.jsxs("div",{className:"cont",children:[w.jsx("div",{className:"header p-4 pb-1 pb-md-4",children:w.jsx("h1",{children:"Past Transactions"})}),e.length==0?w.jsx("h1",{className:"p-4 pb-1 pb-md-4",children:"Loading..."}):w.jsxs("table",{className:"table p-4 table-striped table-responsive",children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{scope:"col",children:"Date"}),w.jsx("th",{scope:"col",children:"From"}),w.jsx("th",{scope:"col",children:"To"}),w.jsx("th",{scope:"col",children:"Value"})]})}),w.jsx("tbody",{children:e.map((n,r)=>w.jsxs("tr",{children:[w.jsx("td",{children:n.date}),w.jsx("td",{children:n.from}),w.jsx("td",{children:n.to}),w.jsx("td",{className:"fw-bold",children:n.value})]},r))})]})]})})}function pb(){let e=z2().id,[t,n]=k.useState(null);return k.useEffect(function(){async function r(){let i=await hb(e);n(i)}r()},[]),w.jsx(w.Fragment,{children:w.jsx("div",{className:"cont",children:t==null?w.jsx("h1",{className:"p-4 pb-1 pb-md-4",children:"Loading..."}):w.jsxs("div",{className:"user",children:[w.jsx("div",{className:"header p-4 pb-1 pb-md-4",children:w.jsx("h1",{children:t.name})}),w.jsxs("div",{className:"user-info p-4 pb-1 pb-md-4",children:[w.jsxs("div",{className:" mb-3",children:[w.jsx("span",{className:"title",children:"Email: "})," ",t.email]}),w.jsxs("div",{className:"mb-3 mt-3",children:[w.jsx("span",{className:"title",children:"Phone: "}),t.phone]}),w.jsxs("div",{className:"mb-3 mt-3",children:[w.jsx("span",{className:"title",children:"Current Balance: "}),t.balance]}),w.jsx("button",{className:"btn trans-btn",children:"Make a Transaction"})," "]})]})})})}function mb(){let[e,t]=k.useState([]);return k.useEffect(function(){async function n(){const r=await cb();t(r)}n()},[]),w.jsx(w.Fragment,{children:w.jsxs("div",{className:"cont",children:[w.jsx("div",{className:"header p-4 pb-1 pb-md-4",children:w.jsx("h1",{children:" Available Users"})}),e.length==0?w.jsx("h1",{className:"p-4 pb-1 pb-md-4",children:"Loading..."}):w.jsxs("table",{className:"table p-4 table-striped table-responsive",children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{scope:"col",children:"ID"}),w.jsx("th",{scope:"col",children:"Name"}),w.jsx("th",{scope:"col",children:"Balance"}),w.jsx("th",{scope:"col"})]})}),w.jsx("tbody",{children:e.map((n,r)=>w.jsxs("tr",{children:[w.jsx("td",{children:r+1}),w.jsx("td",{children:w.jsx(m1,{to:n.id,children:n.name})}),w.jsx("td",{children:n.balance}),w.jsx("td",{children:w.jsx("button",{className:"btn trans-btn",children:"Make a Transaction"})})]},r))})]})]})})}Lc.createRoot(document.getElementById("root")).render(w.jsx(lS,{children:w.jsx(nS,{children:w.jsxs(Ur,{element:w.jsx(dk,{}),children:[w.jsx(Ur,{path:"/",element:w.jsx(mk,{})}),w.jsx(Ur,{path:"/users",element:w.jsx(mb,{})}),w.jsx(Ur,{path:"/users/:id",element:w.jsx(pb,{})}),w.jsx(Ur,{path:"/history",element:w.jsx(db,{})})]})})}));
