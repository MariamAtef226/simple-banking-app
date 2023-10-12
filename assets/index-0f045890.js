function TE(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ly(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var My={exports:{}},Rl={},$y={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),IE=Symbol.for("react.portal"),SE=Symbol.for("react.fragment"),AE=Symbol.for("react.strict_mode"),kE=Symbol.for("react.profiler"),CE=Symbol.for("react.provider"),xE=Symbol.for("react.context"),PE=Symbol.for("react.forward_ref"),RE=Symbol.for("react.suspense"),NE=Symbol.for("react.memo"),bE=Symbol.for("react.lazy"),bp=Symbol.iterator;function DE(e){return e===null||typeof e!="object"?null:(e=bp&&e[bp]||e["@@iterator"],typeof e=="function"?e:null)}var Fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jy=Object.assign,zy={};function Oi(e,t,n){this.props=e,this.context=t,this.refs=zy,this.updater=n||Fy}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uy(){}Uy.prototype=Oi.prototype;function wh(e,t,n){this.props=e,this.context=t,this.refs=zy,this.updater=n||Fy}var Eh=wh.prototype=new Uy;Eh.constructor=wh;jy(Eh,Oi.prototype);Eh.isPureReactComponent=!0;var Dp=Array.isArray,By=Object.prototype.hasOwnProperty,Th={current:null},Hy={key:!0,ref:!0,__self:!0,__source:!0};function Wy(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)By.call(t,r)&&!Hy.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:po,type:e,key:s,ref:o,props:i,_owner:Th.current}}function OE(e,t){return{$$typeof:po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ih(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function VE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Op=/\/+/g;function Ru(e,t){return typeof e=="object"&&e!==null&&e.key!=null?VE(""+e.key):t.toString(36)}function va(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case po:case IE:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ru(o,0):r,Dp(i)?(n="",e!=null&&(n=e.replace(Op,"$&/")+"/"),va(i,t,n,"",function(u){return u})):i!=null&&(Ih(i)&&(i=OE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Op,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ru(s,a);o+=va(s,t,n,l,i)}else if(l=DE(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ru(s,a++),o+=va(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mo(e,t,n){if(e==null)return e;var r=[],i=0;return va(e,r,"","",function(s){return t.call(n,s,i++)}),r}function LE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},_a={transition:null},ME={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:_a,ReactCurrentOwner:Th};W.Children={map:Mo,forEach:function(e,t,n){Mo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mo(e,function(){t++}),t},toArray:function(e){return Mo(e,function(t){return t})||[]},only:function(e){if(!Ih(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Oi;W.Fragment=SE;W.Profiler=kE;W.PureComponent=wh;W.StrictMode=AE;W.Suspense=RE;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jy({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Th.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)By.call(t,l)&&!Hy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:po,type:e.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(e){return e={$$typeof:xE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:CE,_context:e},e.Consumer=e};W.createElement=Wy;W.createFactory=function(e){var t=Wy.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:PE,render:e}};W.isValidElement=Ih;W.lazy=function(e){return{$$typeof:bE,_payload:{_status:-1,_result:e},_init:LE}};W.memo=function(e,t){return{$$typeof:NE,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=_a.transition;_a.transition={};try{e()}finally{_a.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return et.current.useCallback(e,t)};W.useContext=function(e){return et.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return et.current.useDeferredValue(e)};W.useEffect=function(e,t){return et.current.useEffect(e,t)};W.useId=function(){return et.current.useId()};W.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return et.current.useMemo(e,t)};W.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};W.useRef=function(e){return et.current.useRef(e)};W.useState=function(e){return et.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return et.current.useTransition()};W.version="18.2.0";$y.exports=W;var x=$y.exports;const Sh=Ly(x),$E=TE({__proto__:null,default:Sh},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FE=x,jE=Symbol.for("react.element"),zE=Symbol.for("react.fragment"),UE=Object.prototype.hasOwnProperty,BE=FE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HE={key:!0,ref:!0,__self:!0,__source:!0};function qy(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)UE.call(t,r)&&!HE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jE,type:e,key:s,ref:o,props:i,_owner:BE.current}}Rl.Fragment=zE;Rl.jsx=qy;Rl.jsxs=qy;My.exports=Rl;var w=My.exports,Nc={},Ky={exports:{}},gt={},Gy={exports:{}},Qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,j){var B=b.length;b.push(j);e:for(;0<B;){var me=B-1>>>1,Ce=b[me];if(0<i(Ce,j))b[me]=j,b[B]=Ce,B=me;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var j=b[0],B=b.pop();if(B!==j){b[0]=B;e:for(var me=0,Ce=b.length,Vo=Ce>>>1;me<Vo;){var tr=2*(me+1)-1,Pu=b[tr],nr=tr+1,Lo=b[nr];if(0>i(Pu,B))nr<Ce&&0>i(Lo,Pu)?(b[me]=Lo,b[nr]=B,me=nr):(b[me]=Pu,b[tr]=B,me=tr);else if(nr<Ce&&0>i(Lo,B))b[me]=Lo,b[nr]=B,me=nr;else break e}}return j}function i(b,j){var B=b.sortIndex-j.sortIndex;return B!==0?B:b.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=b)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function _(b){if(y=!1,g(b),!v)if(n(l)!==null)v=!0,Cu(T);else{var j=n(u);j!==null&&xu(_,j.startTime-b)}}function T(b,j){v=!1,y&&(y=!1,p(V),V=-1),m=!0;var B=h;try{for(g(j),f=n(l);f!==null&&(!(f.expirationTime>j)||b&&!kt());){var me=f.callback;if(typeof me=="function"){f.callback=null,h=f.priorityLevel;var Ce=me(f.expirationTime<=j);j=e.unstable_now(),typeof Ce=="function"?f.callback=Ce:f===n(l)&&r(l),g(j)}else r(l);f=n(l)}if(f!==null)var Vo=!0;else{var tr=n(u);tr!==null&&xu(_,tr.startTime-j),Vo=!1}return Vo}finally{f=null,h=B,m=!1}}var C=!1,P=null,V=-1,Y=5,U=-1;function kt(){return!(e.unstable_now()-U<Y)}function qi(){if(P!==null){var b=e.unstable_now();U=b;var j=!0;try{j=P(!0,b)}finally{j?Ki():(C=!1,P=null)}}else C=!1}var Ki;if(typeof d=="function")Ki=function(){d(qi)};else if(typeof MessageChannel<"u"){var Np=new MessageChannel,EE=Np.port2;Np.port1.onmessage=qi,Ki=function(){EE.postMessage(null)}}else Ki=function(){E(qi,0)};function Cu(b){P=b,C||(C=!0,Ki())}function xu(b,j){V=E(function(){b(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Cu(T))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var B=h;h=j;try{return b()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,j){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var B=h;h=b;try{return j()}finally{h=B}},e.unstable_scheduleCallback=function(b,j,B){var me=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?me+B:me):B=me,b){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=B+Ce,b={id:c++,callback:j,priorityLevel:b,startTime:B,expirationTime:Ce,sortIndex:-1},B>me?(b.sortIndex=B,t(u,b),n(l)===null&&b===n(u)&&(y?(p(V),V=-1):y=!0,xu(_,B-me))):(b.sortIndex=Ce,t(l,b),v||m||(v=!0,Cu(T))),b},e.unstable_shouldYield=kt,e.unstable_wrapCallback=function(b){var j=h;return function(){var B=h;h=j;try{return b.apply(this,arguments)}finally{h=B}}}})(Qy);Gy.exports=Qy;var WE=Gy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=x,pt=WE;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xy=new Set,Ns={};function Dr(e,t){_i(e,t),_i(e+"Capture",t)}function _i(e,t){for(Ns[e]=t,e=0;e<t.length;e++)Xy.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=Object.prototype.hasOwnProperty,qE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Lp={};function KE(e){return bc.call(Lp,e)?!0:bc.call(Vp,e)?!1:qE.test(e)?Lp[e]=!0:(Vp[e]=!0,!1)}function GE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function QE(e,t,n,r){if(t===null||typeof t>"u"||GE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ah=/[\-:]([a-z])/g;function kh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ah,kh);Fe[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ah,kh);Fe[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ah,kh);Fe[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ch(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(QE(t,n,i,r)&&(n=null),r||i===null?KE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),ev=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function Gi(e){return e===null||typeof e!="object"?null:(e=Mp&&e[Mp]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Nu;function ss(e){if(Nu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nu=t&&t[1]||""}return`
`+Nu+e}var bu=!1;function Du(e,t){if(!e||bu)return"";bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{bu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ss(e):""}function YE(e){switch(e.tag){case 5:return ss(e.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return e=Du(e.type,!1),e;case 11:return e=Du(e.type.render,!1),e;case 1:return e=Du(e.type,!0),e;default:return""}}function Lc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case Hr:return"Portal";case Dc:return"Profiler";case xh:return"StrictMode";case Oc:return"Suspense";case Vc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zy:return(e.displayName||"Context")+".Consumer";case Jy:return(e._context.displayName||"Context")+".Provider";case Ph:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rh:return t=e.displayName||null,t!==null?t:Lc(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return Lc(e(t))}catch{}}return null}function XE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lc(t);case 8:return t===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function JE(e){var t=tv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fo(e){e._valueTracker||(e._valueTracker=JE(e))}function nv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Va(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mc(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $p(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rv(e,t){t=t.checked,t!=null&&Ch(e,"checked",t,!1)}function $c(e,t){rv(e,t);var n=Fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fc(e,t.type,Fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fc(e,t,n){(t!=="number"||Va(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var os=Array.isArray;function oi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(os(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Fn(n)}}function iv(e,t){var n=Fn(t.value),r=Fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,ov=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZE=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(e){ZE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ps[t]=ps[e]})});function av(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ps.hasOwnProperty(e)&&ps[e]?(""+t).trim():t+"px"}function lv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=av(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var eT=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uc(e,t){if(t){if(eT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function Nh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wc=null,ai=null,li=null;function Up(e){if(e=yo(e)){if(typeof Wc!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Vl(t),Wc(e.stateNode,e.type,t))}}function uv(e){ai?li?li.push(e):li=[e]:ai=e}function cv(){if(ai){var e=ai,t=li;if(li=ai=null,Up(e),t)for(e=0;e<t.length;e++)Up(t[e])}}function fv(e,t){return e(t)}function hv(){}var Ou=!1;function dv(e,t,n){if(Ou)return e(t,n);Ou=!0;try{return fv(e,t,n)}finally{Ou=!1,(ai!==null||li!==null)&&(hv(),cv())}}function Ds(e,t){var n=e.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var qc=!1;if(nn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){qc=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{qc=!1}function tT(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ms=!1,La=null,Ma=!1,Kc=null,nT={onError:function(e){ms=!0,La=e}};function rT(e,t,n,r,i,s,o,a,l){ms=!1,La=null,tT.apply(nT,arguments)}function iT(e,t,n,r,i,s,o,a,l){if(rT.apply(this,arguments),ms){if(ms){var u=La;ms=!1,La=null}else throw Error(S(198));Ma||(Ma=!0,Kc=u)}}function Or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bp(e){if(Or(e)!==e)throw Error(S(188))}function sT(e){var t=e.alternate;if(!t){if(t=Or(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bp(i),e;if(s===r)return Bp(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function mv(e){return e=sT(e),e!==null?gv(e):null}function gv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gv(e);if(t!==null)return t;e=e.sibling}return null}var yv=pt.unstable_scheduleCallback,Hp=pt.unstable_cancelCallback,oT=pt.unstable_shouldYield,aT=pt.unstable_requestPaint,ge=pt.unstable_now,lT=pt.unstable_getCurrentPriorityLevel,bh=pt.unstable_ImmediatePriority,vv=pt.unstable_UserBlockingPriority,$a=pt.unstable_NormalPriority,uT=pt.unstable_LowPriority,_v=pt.unstable_IdlePriority,Nl=null,Ht=null;function cT(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Nl,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:dT,fT=Math.log,hT=Math.LN2;function dT(e){return e>>>=0,e===0?32:31-(fT(e)/hT|0)|0}var zo=64,Uo=4194304;function as(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=as(a):(s&=o,s!==0&&(r=as(s)))}else o=n&~i,o!==0?r=as(o):s!==0&&(r=as(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function pT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=pT(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Gc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wv(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function Vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function gT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Dh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function Ev(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tv,Oh,Iv,Sv,Av,Qc=!1,Bo=[],Cn=null,xn=null,Pn=null,Os=new Map,Vs=new Map,_n=[],yT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wp(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Os.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(t.pointerId)}}function Yi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=yo(t),t!==null&&Oh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vT(e,t,n,r,i){switch(t){case"focusin":return Cn=Yi(Cn,e,t,n,r,i),!0;case"dragenter":return xn=Yi(xn,e,t,n,r,i),!0;case"mouseover":return Pn=Yi(Pn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Os.set(s,Yi(Os.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vs.set(s,Yi(Vs.get(s)||null,e,t,n,r,i)),!0}return!1}function kv(e){var t=or(e.target);if(t!==null){var n=Or(t);if(n!==null){if(t=n.tag,t===13){if(t=pv(n),t!==null){e.blockedOn=t,Av(e.priority,function(){Iv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hc=r,n.target.dispatchEvent(r),Hc=null}else return t=yo(n),t!==null&&Oh(t),e.blockedOn=n,!1;t.shift()}return!0}function qp(e,t,n){wa(e)&&n.delete(t)}function _T(){Qc=!1,Cn!==null&&wa(Cn)&&(Cn=null),xn!==null&&wa(xn)&&(xn=null),Pn!==null&&wa(Pn)&&(Pn=null),Os.forEach(qp),Vs.forEach(qp)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,Qc||(Qc=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,_T)))}function Ls(e){function t(i){return Xi(i,e)}if(0<Bo.length){Xi(Bo[0],e);for(var n=1;n<Bo.length;n++){var r=Bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&Xi(Cn,e),xn!==null&&Xi(xn,e),Pn!==null&&Xi(Pn,e),Os.forEach(t),Vs.forEach(t),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)kv(n),n.blockedOn===null&&_n.shift()}var ui=dn.ReactCurrentBatchConfig,ja=!0;function wT(e,t,n,r){var i=Z,s=ui.transition;ui.transition=null;try{Z=1,Vh(e,t,n,r)}finally{Z=i,ui.transition=s}}function ET(e,t,n,r){var i=Z,s=ui.transition;ui.transition=null;try{Z=4,Vh(e,t,n,r)}finally{Z=i,ui.transition=s}}function Vh(e,t,n,r){if(ja){var i=Yc(e,t,n,r);if(i===null)Wu(e,t,r,za,n),Wp(e,r);else if(vT(i,e,t,n,r))r.stopPropagation();else if(Wp(e,r),t&4&&-1<yT.indexOf(e)){for(;i!==null;){var s=yo(i);if(s!==null&&Tv(s),s=Yc(e,t,n,r),s===null&&Wu(e,t,r,za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wu(e,t,r,null,n)}}var za=null;function Yc(e,t,n,r){if(za=null,e=Nh(r),e=or(e),e!==null)if(t=Or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function Cv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lT()){case bh:return 1;case vv:return 4;case $a:case uT:return 16;case _v:return 536870912;default:return 16}default:return 16}}var En=null,Lh=null,Ea=null;function xv(){if(Ea)return Ea;var e,t=Lh,n=t.length,r,i="value"in En?En.value:En.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ea=i.slice(e,1<r?1-r:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ho(){return!0}function Kp(){return!1}function yt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:Kp,this.isPropagationStopped=Kp,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),t}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=yt(Vi),go=ce({},Vi,{view:0,detail:0}),TT=yt(go),Lu,Mu,Ji,bl=ce({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$h,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?(Lu=e.screenX-Ji.screenX,Mu=e.screenY-Ji.screenY):Mu=Lu=0,Ji=e),Lu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Gp=yt(bl),IT=ce({},bl,{dataTransfer:0}),ST=yt(IT),AT=ce({},go,{relatedTarget:0}),$u=yt(AT),kT=ce({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),CT=yt(kT),xT=ce({},Vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),PT=yt(xT),RT=ce({},Vi,{data:0}),Qp=yt(RT),NT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=DT[e])?!!t[e]:!1}function $h(){return OT}var VT=ce({},go,{key:function(e){if(e.key){var t=NT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$h,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LT=yt(VT),MT=ce({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=yt(MT),$T=ce({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$h}),FT=yt($T),jT=ce({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),zT=yt(jT),UT=ce({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BT=yt(UT),HT=[9,13,27,32],Fh=nn&&"CompositionEvent"in window,gs=null;nn&&"documentMode"in document&&(gs=document.documentMode);var WT=nn&&"TextEvent"in window&&!gs,Pv=nn&&(!Fh||gs&&8<gs&&11>=gs),Xp=String.fromCharCode(32),Jp=!1;function Rv(e,t){switch(e){case"keyup":return HT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function qT(e,t){switch(e){case"compositionend":return Nv(t);case"keypress":return t.which!==32?null:(Jp=!0,Xp);case"textInput":return e=t.data,e===Xp&&Jp?null:e;default:return null}}function KT(e,t){if(qr)return e==="compositionend"||!Fh&&Rv(e,t)?(e=xv(),Ea=Lh=En=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pv&&t.locale!=="ko"?null:t.data;default:return null}}var GT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!GT[e.type]:t==="textarea"}function bv(e,t,n,r){uv(r),t=Ua(t,"onChange"),0<t.length&&(n=new Mh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ys=null,Ms=null;function QT(e){Bv(e,0)}function Dl(e){var t=Qr(e);if(nv(t))return e}function YT(e,t){if(e==="change")return t}var Dv=!1;if(nn){var Fu;if(nn){var ju="oninput"in document;if(!ju){var em=document.createElement("div");em.setAttribute("oninput","return;"),ju=typeof em.oninput=="function"}Fu=ju}else Fu=!1;Dv=Fu&&(!document.documentMode||9<document.documentMode)}function tm(){ys&&(ys.detachEvent("onpropertychange",Ov),Ms=ys=null)}function Ov(e){if(e.propertyName==="value"&&Dl(Ms)){var t=[];bv(t,Ms,e,Nh(e)),dv(QT,t)}}function XT(e,t,n){e==="focusin"?(tm(),ys=t,Ms=n,ys.attachEvent("onpropertychange",Ov)):e==="focusout"&&tm()}function JT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(Ms)}function ZT(e,t){if(e==="click")return Dl(t)}function e2(e,t){if(e==="input"||e==="change")return Dl(t)}function t2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:t2;function $s(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bc.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rm(e,t){var n=nm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function Vv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lv(){for(var e=window,t=Va();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Va(e.document)}return t}function jh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n2(e){var t=Lv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vv(n.ownerDocument.documentElement,n)){if(r!==null&&jh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=rm(n,s);var o=rm(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r2=nn&&"documentMode"in document&&11>=document.documentMode,Kr=null,Xc=null,vs=null,Jc=!1;function im(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||Kr==null||Kr!==Va(r)||(r=Kr,"selectionStart"in r&&jh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vs&&$s(vs,r)||(vs=r,r=Ua(Xc,"onSelect"),0<r.length&&(t=new Mh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function Wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},zu={},Mv={};nn&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function Ol(e){if(zu[e])return zu[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mv)return zu[e]=t[n];return e}var $v=Ol("animationend"),Fv=Ol("animationiteration"),jv=Ol("animationstart"),zv=Ol("transitionend"),Uv=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){Uv.set(e,t),Dr(t,[e])}for(var Uu=0;Uu<sm.length;Uu++){var Bu=sm[Uu],i2=Bu.toLowerCase(),s2=Bu[0].toUpperCase()+Bu.slice(1);Gn(i2,"on"+s2)}Gn($v,"onAnimationEnd");Gn(Fv,"onAnimationIteration");Gn(jv,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(zv,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o2=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function om(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,iT(r,t,void 0,e),e.currentTarget=null}function Bv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;om(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;om(i,a,u),s=l}}}if(Ma)throw e=Kc,Ma=!1,Kc=null,e}function ne(e,t){var n=t[rf];n===void 0&&(n=t[rf]=new Set);var r=e+"__bubble";n.has(r)||(Hv(t,e,2,!1),n.add(r))}function Hu(e,t,n){var r=0;t&&(r|=4),Hv(n,e,r,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function Fs(e){if(!e[qo]){e[qo]=!0,Xy.forEach(function(n){n!=="selectionchange"&&(o2.has(n)||Hu(n,!1,e),Hu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,Hu("selectionchange",!1,t))}}function Hv(e,t,n,r){switch(Cv(t)){case 1:var i=wT;break;case 4:i=ET;break;default:i=Vh}n=i.bind(null,t,n,e),i=void 0,!qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wu(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=or(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dv(function(){var u=s,c=Nh(n),f=[];e:{var h=Uv.get(e);if(h!==void 0){var m=Mh,v=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":m=LT;break;case"focusin":v="focus",m=$u;break;case"focusout":v="blur",m=$u;break;case"beforeblur":case"afterblur":m=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ST;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=FT;break;case $v:case Fv:case jv:m=CT;break;case zv:m=zT;break;case"scroll":m=TT;break;case"wheel":m=BT;break;case"copy":case"cut":case"paste":m=PT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yp}var y=(t&4)!==0,E=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,g;d!==null;){g=d;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Ds(d,p),_!=null&&y.push(js(d,_,g)))),E)break;d=d.return}0<y.length&&(h=new m(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==Hc&&(v=n.relatedTarget||n.fromElement)&&(or(v)||v[rn]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?or(v):null,v!==null&&(E=Or(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=Gp,_="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Yp,_="onPointerLeave",p="onPointerEnter",d="pointer"),E=m==null?h:Qr(m),g=v==null?h:Qr(v),h=new y(_,d+"leave",m,n,c),h.target=E,h.relatedTarget=g,_=null,or(c)===u&&(y=new y(p,d+"enter",v,n,c),y.target=g,y.relatedTarget=E,_=y),E=_,m&&v)t:{for(y=m,p=v,d=0,g=y;g;g=$r(g))d++;for(g=0,_=p;_;_=$r(_))g++;for(;0<d-g;)y=$r(y),d--;for(;0<g-d;)p=$r(p),g--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=$r(y),p=$r(p)}y=null}else y=null;m!==null&&am(f,h,m,y,!1),v!==null&&E!==null&&am(f,E,v,y,!0)}}e:{if(h=u?Qr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=YT;else if(Zp(h))if(Dv)T=e2;else{T=JT;var C=XT}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=ZT);if(T&&(T=T(e,u))){bv(f,T,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Fc(h,"number",h.value)}switch(C=u?Qr(u):window,e){case"focusin":(Zp(C)||C.contentEditable==="true")&&(Kr=C,Xc=u,vs=null);break;case"focusout":vs=Xc=Kr=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,im(f,n,c);break;case"selectionchange":if(r2)break;case"keydown":case"keyup":im(f,n,c)}var P;if(Fh)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else qr?Rv(e,n)&&(V="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(Pv&&n.locale!=="ko"&&(qr||V!=="onCompositionStart"?V==="onCompositionEnd"&&qr&&(P=xv()):(En=c,Lh="value"in En?En.value:En.textContent,qr=!0)),C=Ua(u,V),0<C.length&&(V=new Qp(V,e,null,n,c),f.push({event:V,listeners:C}),P?V.data=P:(P=Nv(n),P!==null&&(V.data=P)))),(P=WT?qT(e,n):KT(e,n))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(c=new Qp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}Bv(f,t)})}function js(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ua(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ds(e,n),s!=null&&r.unshift(js(e,s,i)),s=Ds(e,t),s!=null&&r.push(js(e,s,i))),e=e.return}return r}function $r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function am(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ds(n,s),l!=null&&o.unshift(js(n,l,a))):i||(l=Ds(n,s),l!=null&&o.push(js(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var a2=/\r\n?/g,l2=/\u0000|\uFFFD/g;function lm(e){return(typeof e=="string"?e:""+e).replace(a2,`
`).replace(l2,"")}function Ko(e,t,n){if(t=lm(t),lm(e)!==t&&n)throw Error(S(425))}function Ba(){}var Zc=null,ef=null;function tf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nf=typeof setTimeout=="function"?setTimeout:void 0,u2=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,c2=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(e){return um.resolve(null).then(e).catch(f2)}:nf;function f2(e){setTimeout(function(){throw e})}function qu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ls(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ls(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),$t="__reactFiber$"+Li,zs="__reactProps$"+Li,rn="__reactContainer$"+Li,rf="__reactEvents$"+Li,h2="__reactListeners$"+Li,d2="__reactHandles$"+Li;function or(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cm(e);e!==null;){if(n=e[$t])return n;e=cm(e)}return t}e=n,n=e.parentNode}return null}function yo(e){return e=e[$t]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Vl(e){return e[zs]||null}var sf=[],Yr=-1;function Qn(e){return{current:e}}function se(e){0>Yr||(e.current=sf[Yr],sf[Yr]=null,Yr--)}function te(e,t){Yr++,sf[Yr]=e.current,e.current=t}var jn={},Ge=Qn(jn),it=Qn(!1),wr=jn;function wi(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function Ha(){se(it),se(Ge)}function fm(e,t,n){if(Ge.current!==jn)throw Error(S(168));te(Ge,t),te(it,n)}function Wv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,XE(e)||"Unknown",i));return ce({},n,r)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,wr=Ge.current,te(Ge,e),te(it,it.current),!0}function hm(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Wv(e,t,wr),r.__reactInternalMemoizedMergedChildContext=e,se(it),se(Ge),te(Ge,e)):se(it),te(it,n)}var Xt=null,Ll=!1,Ku=!1;function qv(e){Xt===null?Xt=[e]:Xt.push(e)}function p2(e){Ll=!0,qv(e)}function Yn(){if(!Ku&&Xt!==null){Ku=!0;var e=0,t=Z;try{var n=Xt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,Ll=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),yv(bh,Yn),i}finally{Z=t,Ku=!1}}return null}var Xr=[],Jr=0,qa=null,Ka=0,_t=[],wt=0,Er=null,Jt=1,Zt="";function rr(e,t){Xr[Jr++]=Ka,Xr[Jr++]=qa,qa=e,Ka=t}function Kv(e,t,n){_t[wt++]=Jt,_t[wt++]=Zt,_t[wt++]=Er,Er=e;var r=Jt;e=Zt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jt=1<<32-bt(t)+i|n<<i|r,Zt=s+e}else Jt=1<<s|n<<i|r,Zt=e}function zh(e){e.return!==null&&(rr(e,1),Kv(e,1,0))}function Uh(e){for(;e===qa;)qa=Xr[--Jr],Xr[Jr]=null,Ka=Xr[--Jr],Xr[Jr]=null;for(;e===Er;)Er=_t[--wt],_t[wt]=null,Zt=_t[--wt],_t[wt]=null,Jt=_t[--wt],_t[wt]=null}var ft=null,ct=null,ae=!1,Rt=null;function Gv(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,ct=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Er!==null?{id:Jt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,ct=null,!0):!1;default:return!1}}function of(e){return(e.mode&1)!==0&&(e.flags&128)===0}function af(e){if(ae){var t=ct;if(t){var n=t;if(!dm(e,t)){if(of(e))throw Error(S(418));t=Rn(n.nextSibling);var r=ft;t&&dm(e,t)?Gv(r,n):(e.flags=e.flags&-4097|2,ae=!1,ft=e)}}else{if(of(e))throw Error(S(418));e.flags=e.flags&-4097|2,ae=!1,ft=e}}}function pm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function Go(e){if(e!==ft)return!1;if(!ae)return pm(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tf(e.type,e.memoizedProps)),t&&(t=ct)){if(of(e))throw Qv(),Error(S(418));for(;t;)Gv(e,t),t=Rn(t.nextSibling)}if(pm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ft?Rn(e.stateNode.nextSibling):null;return!0}function Qv(){for(var e=ct;e;)e=Rn(e.nextSibling)}function Ei(){ct=ft=null,ae=!1}function Bh(e){Rt===null?Rt=[e]:Rt.push(e)}var m2=dn.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ga=Qn(null),Qa=null,Zr=null,Hh=null;function Wh(){Hh=Zr=Qa=null}function qh(e){var t=Ga.current;se(Ga),e._currentValue=t}function lf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ci(e,t){Qa=e,Hh=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Hh!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(Qa===null)throw Error(S(308));Zr=e,Qa.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var ar=null;function Kh(e){ar===null?ar=[e]:ar.push(e)}function Yv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Kh(t)):(n.next=i.next,i.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sn(e,n)}return i=r.interleaved,i===null?(t.next=t,Kh(r)):(t.next=i.next,i.next=t),r.interleaved=t,sn(e,n)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dh(e,n)}}function mm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ya(e,t,n,r){var i=e.updateQueue;vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(m,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,f,h):v,h==null)break e;f=ce({},f,h);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ir|=o,e.lanes=o,e.memoizedState=f}}function gm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Jv=new Yy.Component().refs;function uf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ml={isMounted:function(e){return(e=e._reactInternals)?Or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Dn(e),s=tn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Nn(e,s,i),t!==null&&(Dt(t,e,i,r),Ia(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Dn(e),s=tn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Nn(e,s,i),t!==null&&(Dt(t,e,i,r),Ia(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=Dn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(Dt(t,e,r,n),Ia(t,e,r))}};function ym(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!$s(n,r)||!$s(i,s):!0}function Zv(e,t,n){var r=!1,i=jn,s=t.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=st(t)?wr:Ge.current,r=t.contextTypes,s=(r=r!=null)?wi(e,i):jn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function vm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ml.enqueueReplaceState(t,t.state,null)}function cf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jv,Gh(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=st(t)?wr:Ge.current,i.context=wi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(uf(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ml.enqueueReplaceState(i,i.state,null),Ya(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Jv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Qo(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _m(e){var t=e._init;return t(e._payload)}function e0(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=On(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,_){return d===null||d.tag!==6?(d=ec(g,p.mode,_),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,_){var T=g.type;return T===Wr?c(p,d,g.props.children,_,g.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===yn&&_m(T)===d.type)?(_=i(d,g.props),_.ref=Zi(p,d,g),_.return=p,_):(_=Pa(g.type,g.key,g.props,null,p.mode,_),_.ref=Zi(p,d,g),_.return=p,_)}function u(p,d,g,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=tc(g,p.mode,_),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function c(p,d,g,_,T){return d===null||d.tag!==7?(d=gr(g,p.mode,_,T),d.return=p,d):(d=i(d,g),d.return=p,d)}function f(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ec(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $o:return g=Pa(d.type,d.key,d.props,null,p.mode,g),g.ref=Zi(p,null,d),g.return=p,g;case Hr:return d=tc(d,p.mode,g),d.return=p,d;case yn:var _=d._init;return f(p,_(d._payload),g)}if(os(d)||Gi(d))return d=gr(d,p.mode,g,null),d.return=p,d;Qo(p,d)}return null}function h(p,d,g,_){var T=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(p,d,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $o:return g.key===T?l(p,d,g,_):null;case Hr:return g.key===T?u(p,d,g,_):null;case yn:return T=g._init,h(p,d,T(g._payload),_)}if(os(g)||Gi(g))return T!==null?null:c(p,d,g,_,null);Qo(p,g)}return null}function m(p,d,g,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(d,p,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $o:return p=p.get(_.key===null?g:_.key)||null,l(d,p,_,T);case Hr:return p=p.get(_.key===null?g:_.key)||null,u(d,p,_,T);case yn:var C=_._init;return m(p,d,g,C(_._payload),T)}if(os(_)||Gi(_))return p=p.get(g)||null,c(d,p,_,T,null);Qo(d,_)}return null}function v(p,d,g,_){for(var T=null,C=null,P=d,V=d=0,Y=null;P!==null&&V<g.length;V++){P.index>V?(Y=P,P=null):Y=P.sibling;var U=h(p,P,g[V],_);if(U===null){P===null&&(P=Y);break}e&&P&&U.alternate===null&&t(p,P),d=s(U,d,V),C===null?T=U:C.sibling=U,C=U,P=Y}if(V===g.length)return n(p,P),ae&&rr(p,V),T;if(P===null){for(;V<g.length;V++)P=f(p,g[V],_),P!==null&&(d=s(P,d,V),C===null?T=P:C.sibling=P,C=P);return ae&&rr(p,V),T}for(P=r(p,P);V<g.length;V++)Y=m(P,p,V,g[V],_),Y!==null&&(e&&Y.alternate!==null&&P.delete(Y.key===null?V:Y.key),d=s(Y,d,V),C===null?T=Y:C.sibling=Y,C=Y);return e&&P.forEach(function(kt){return t(p,kt)}),ae&&rr(p,V),T}function y(p,d,g,_){var T=Gi(g);if(typeof T!="function")throw Error(S(150));if(g=T.call(g),g==null)throw Error(S(151));for(var C=T=null,P=d,V=d=0,Y=null,U=g.next();P!==null&&!U.done;V++,U=g.next()){P.index>V?(Y=P,P=null):Y=P.sibling;var kt=h(p,P,U.value,_);if(kt===null){P===null&&(P=Y);break}e&&P&&kt.alternate===null&&t(p,P),d=s(kt,d,V),C===null?T=kt:C.sibling=kt,C=kt,P=Y}if(U.done)return n(p,P),ae&&rr(p,V),T;if(P===null){for(;!U.done;V++,U=g.next())U=f(p,U.value,_),U!==null&&(d=s(U,d,V),C===null?T=U:C.sibling=U,C=U);return ae&&rr(p,V),T}for(P=r(p,P);!U.done;V++,U=g.next())U=m(P,p,V,U.value,_),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?V:U.key),d=s(U,d,V),C===null?T=U:C.sibling=U,C=U);return e&&P.forEach(function(qi){return t(p,qi)}),ae&&rr(p,V),T}function E(p,d,g,_){if(typeof g=="object"&&g!==null&&g.type===Wr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case $o:e:{for(var T=g.key,C=d;C!==null;){if(C.key===T){if(T=g.type,T===Wr){if(C.tag===7){n(p,C.sibling),d=i(C,g.props.children),d.return=p,p=d;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===yn&&_m(T)===C.type){n(p,C.sibling),d=i(C,g.props),d.ref=Zi(p,C,g),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}g.type===Wr?(d=gr(g.props.children,p.mode,_,g.key),d.return=p,p=d):(_=Pa(g.type,g.key,g.props,null,p.mode,_),_.ref=Zi(p,d,g),_.return=p,p=_)}return o(p);case Hr:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=tc(g,p.mode,_),d.return=p,p=d}return o(p);case yn:return C=g._init,E(p,d,C(g._payload),_)}if(os(g))return v(p,d,g,_);if(Gi(g))return y(p,d,g,_);Qo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=ec(g,p.mode,_),d.return=p,p=d),o(p)):n(p,d)}return E}var Ti=e0(!0),t0=e0(!1),vo={},Wt=Qn(vo),Us=Qn(vo),Bs=Qn(vo);function lr(e){if(e===vo)throw Error(S(174));return e}function Qh(e,t){switch(te(Bs,t),te(Us,e),te(Wt,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zc(t,e)}se(Wt),te(Wt,t)}function Ii(){se(Wt),se(Us),se(Bs)}function n0(e){lr(Bs.current);var t=lr(Wt.current),n=zc(t,e.type);t!==n&&(te(Us,e),te(Wt,n))}function Yh(e){Us.current===e&&(se(Wt),se(Us))}var le=Qn(0);function Xa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gu=[];function Xh(){for(var e=0;e<Gu.length;e++)Gu[e]._workInProgressVersionPrimary=null;Gu.length=0}var Sa=dn.ReactCurrentDispatcher,Qu=dn.ReactCurrentBatchConfig,Tr=0,ue=null,Te=null,Pe=null,Ja=!1,_s=!1,Hs=0,g2=0;function je(){throw Error(S(321))}function Jh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function Zh(e,t,n,r,i,s){if(Tr=s,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sa.current=e===null||e.memoizedState===null?w2:E2,e=n(r,i),_s){s=0;do{if(_s=!1,Hs=0,25<=s)throw Error(S(301));s+=1,Pe=Te=null,t.updateQueue=null,Sa.current=T2,e=n(r,i)}while(_s)}if(Sa.current=Za,t=Te!==null&&Te.next!==null,Tr=0,Pe=Te=ue=null,Ja=!1,t)throw Error(S(300));return e}function ed(){var e=Hs!==0;return Hs=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ue.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function At(){if(Te===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Pe===null?ue.memoizedState:Pe.next;if(t!==null)Pe=t,Te=e;else{if(e===null)throw Error(S(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Pe===null?ue.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Ws(e,t){return typeof t=="function"?t(e):t}function Yu(e){var t=At(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Tr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ue.lanes|=c,Ir|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ot(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ue.lanes|=s,Ir|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xu(e){var t=At(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ot(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function r0(){}function i0(e,t){var n=ue,r=At(),i=t(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,td(a0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,qs(9,o0.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(S(349));Tr&30||s0(n,t,i)}return i}function s0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function o0(e,t,n,r){t.value=n,t.getSnapshot=r,l0(t)&&u0(e)}function a0(e,t,n){return n(function(){l0(t)&&u0(e)})}function l0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function u0(e){var t=sn(e,1);t!==null&&Dt(t,e,1,-1)}function wm(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:e},t.queue=e,e=e.dispatch=_2.bind(null,ue,e),[t.memoizedState,e]}function qs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function c0(){return At().memoizedState}function Aa(e,t,n,r){var i=Mt();ue.flags|=e,i.memoizedState=qs(1|t,n,void 0,r===void 0?null:r)}function $l(e,t,n,r){var i=At();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&Jh(r,o.deps)){i.memoizedState=qs(t,n,s,r);return}}ue.flags|=e,i.memoizedState=qs(1|t,n,s,r)}function Em(e,t){return Aa(8390656,8,e,t)}function td(e,t){return $l(2048,8,e,t)}function f0(e,t){return $l(4,2,e,t)}function h0(e,t){return $l(4,4,e,t)}function d0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function p0(e,t,n){return n=n!=null?n.concat([e]):null,$l(4,4,d0.bind(null,t,e),n)}function nd(){}function m0(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function g0(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y0(e,t,n){return Tr&21?(Ot(n,t)||(n=wv(),ue.lanes|=n,Ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function y2(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=Qu.transition;Qu.transition={};try{e(!1),t()}finally{Z=n,Qu.transition=r}}function v0(){return At().memoizedState}function v2(e,t,n){var r=Dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_0(e))w0(t,n);else if(n=Yv(e,t,n,r),n!==null){var i=Ze();Dt(n,e,r,i),E0(n,t,r)}}function _2(e,t,n){var r=Dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(e))w0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,o)){var l=t.interleaved;l===null?(i.next=i,Kh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Yv(e,t,i,r),n!==null&&(i=Ze(),Dt(n,e,r,i),E0(n,t,r))}}function _0(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function w0(e,t){_s=Ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dh(e,n)}}var Za={readContext:St,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},w2={readContext:St,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Em,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Aa(4194308,4,d0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Aa(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v2.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:wm,useDebugValue:nd,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=wm(!1),t=e[0];return e=y2.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=Mt();if(ae){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),Re===null)throw Error(S(349));Tr&30||s0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Em(a0.bind(null,r,s,e),[e]),r.flags|=2048,qs(9,o0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Re.identifierPrefix;if(ae){var n=Zt,r=Jt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},E2={readContext:St,useCallback:m0,useContext:St,useEffect:td,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:g0,useReducer:Yu,useRef:c0,useState:function(){return Yu(Ws)},useDebugValue:nd,useDeferredValue:function(e){var t=At();return y0(t,Te.memoizedState,e)},useTransition:function(){var e=Yu(Ws)[0],t=At().memoizedState;return[e,t]},useMutableSource:r0,useSyncExternalStore:i0,useId:v0,unstable_isNewReconciler:!1},T2={readContext:St,useCallback:m0,useContext:St,useEffect:td,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:g0,useReducer:Xu,useRef:c0,useState:function(){return Xu(Ws)},useDebugValue:nd,useDeferredValue:function(e){var t=At();return Te===null?t.memoizedState=e:y0(t,Te.memoizedState,e)},useTransition:function(){var e=Xu(Ws)[0],t=At().memoizedState;return[e,t]},useMutableSource:r0,useSyncExternalStore:i0,useId:v0,unstable_isNewReconciler:!1};function Si(e,t){try{var n="",r=t;do n+=YE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ju(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ff(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var I2=typeof WeakMap=="function"?WeakMap:Map;function T0(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Ef=r),ff(e,t)},n}function I0(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ff(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ff(e,t),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Tm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new I2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=M2.bind(null,e,t,n),t.then(e,e))}function Im(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var S2=dn.ReactCurrentOwner,rt=!1;function Ye(e,t,n,r){t.child=e===null?t0(t,null,n,r):Ti(t,e.child,n,r)}function Am(e,t,n,r,i){n=n.render;var s=t.ref;return ci(t,i),r=Zh(e,t,n,r,s,i),n=ed(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(ae&&n&&zh(t),t.flags|=1,Ye(e,t,r,i),t.child)}function km(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,S0(e,t,s,r,i)):(e=Pa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(o,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=On(s,r),e.ref=t.ref,e.return=t,t.child=e}function S0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if($s(s,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,on(e,t,i)}return hf(e,t,n,r,i)}function A0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(ti,ut),ut|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(ti,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(ti,ut),ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,te(ti,ut),ut|=r;return Ye(e,t,i,n),t.child}function k0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hf(e,t,n,r,i){var s=st(n)?wr:Ge.current;return s=wi(t,s),ci(t,i),n=Zh(e,t,n,r,s,i),r=ed(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(ae&&r&&zh(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Cm(e,t,n,r,i){if(st(n)){var s=!0;Wa(t)}else s=!1;if(ci(t,i),t.stateNode===null)ka(e,t),Zv(t,n,r),cf(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=st(n)?wr:Ge.current,u=wi(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&vm(t,o,r,u),vn=!1;var h=t.memoizedState;o.state=h,Ya(t,r,o,i),l=t.memoizedState,a!==r||h!==l||it.current||vn?(typeof c=="function"&&(uf(t,n,c,r),l=t.memoizedState),(a=vn||ym(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Xv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:xt(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=St(l):(l=st(n)?wr:Ge.current,l=wi(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&vm(t,o,r,l),vn=!1,h=t.memoizedState,o.state=h,Ya(t,r,o,i);var v=t.memoizedState;a!==f||h!==v||it.current||vn?(typeof m=="function"&&(uf(t,n,m,r),v=t.memoizedState),(u=vn||ym(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return df(e,t,n,r,s,i)}function df(e,t,n,r,i,s){k0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&hm(t,n,!1),on(e,t,s);r=t.stateNode,S2.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ti(t,e.child,null,s),t.child=Ti(t,null,a,s)):Ye(e,t,a,s),t.memoizedState=r.state,i&&hm(t,n,!0),t.child}function C0(e){var t=e.stateNode;t.pendingContext?fm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fm(e,t.context,!1),Qh(e,t.containerInfo)}function xm(e,t,n,r,i){return Ei(),Bh(i),t.flags|=256,Ye(e,t,n,r),t.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(e){return{baseLanes:e,cachePool:null,transitions:null}}function x0(e,t,n){var r=t.pendingProps,i=le.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(le,i&1),e===null)return af(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zl(o,r,0,null),e=gr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=mf(n),t.memoizedState=pf,e):rd(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return A2(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=On(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=On(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=pf,r}return s=e.child,e=s.sibling,r=On(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rd(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yo(e,t,n,r){return r!==null&&Bh(r),Ti(t,e.child,null,n),e=rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function A2(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ju(Error(S(422))),Yo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=zl({mode:"visible",children:r.children},i,0,null),s=gr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Ti(t,e.child,null,o),t.child.memoizedState=mf(o),t.memoizedState=pf,s);if(!(t.mode&1))return Yo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Ju(s,r,void 0),Yo(e,t,o,r)}if(a=(o&e.childLanes)!==0,rt||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sn(e,i),Dt(r,e,i,-1))}return ud(),r=Ju(Error(S(421))),Yo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$2.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ct=Rn(i.nextSibling),ft=t,ae=!0,Rt=null,e!==null&&(_t[wt++]=Jt,_t[wt++]=Zt,_t[wt++]=Er,Jt=e.id,Zt=e.overflow,Er=t),t=rd(t,r.children),t.flags|=4096,t)}function Pm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),lf(e.return,t,n)}function Zu(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function P0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ye(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,n,t);else if(e.tag===19)Pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zu(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zu(t,!0,n,null,s);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function k2(e,t,n){switch(t.tag){case 3:C0(t),Ei();break;case 5:n0(t);break;case 1:st(t.type)&&Wa(t);break;case 4:Qh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?x0(e,t,n):(te(le,le.current&1),e=on(e,t,n),e!==null?e.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return P0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,A0(e,t,n)}return on(e,t,n)}var R0,gf,N0,b0;R0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};N0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,lr(Wt.current);var s=null;switch(n){case"input":i=Mc(e,i),r=Mc(e,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=jc(e,i),r=jc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ba)}Uc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ns.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};b0=function(e,t,n,r){n!==r&&(t.flags|=4)};function es(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function C2(e,t,n){var r=t.pendingProps;switch(Uh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return st(t.type)&&Ha(),ze(t),null;case 3:return r=t.stateNode,Ii(),se(it),se(Ge),Xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(Sf(Rt),Rt=null))),gf(e,t),ze(t),null;case 5:Yh(t);var i=lr(Bs.current);if(n=t.type,e!==null&&t.stateNode!=null)N0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ze(t),null}if(e=lr(Wt.current),Go(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[$t]=t,r[zs]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)ne(ls[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":$p(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":jp(r,s),ne("invalid",r)}Uc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ko(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ko(r.textContent,a,e),i=["children",""+a]):Ns.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Fo(r),Fp(r,s,!0);break;case"textarea":Fo(r),zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ba)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$t]=t,e[zs]=r,R0(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bc(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)ne(ls[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":$p(e,r),i=Mc(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ne("invalid",e);break;case"textarea":jp(e,r),i=jc(e,r),ne("invalid",e);break;default:i=r}Uc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?lv(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ov(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bs(e,l):typeof l=="number"&&bs(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ns.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",e):l!=null&&Ch(e,s,l,o))}switch(n){case"input":Fo(e),Fp(e,r,!1);break;case"textarea":Fo(e),zp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?oi(e,!!r.multiple,s,!1):r.defaultValue!=null&&oi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)b0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=lr(Bs.current),lr(Wt.current),Go(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(s=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:Ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return ze(t),null;case 13:if(se(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&ct!==null&&t.mode&1&&!(t.flags&128))Qv(),Ei(),t.flags|=98560,s=!1;else if(s=Go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[$t]=t}else Ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else Rt!==null&&(Sf(Rt),Rt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?Se===0&&(Se=3):ud())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Ii(),gf(e,t),e===null&&Fs(t.stateNode.containerInfo),ze(t),null;case 10:return qh(t.type._context),ze(t),null;case 17:return st(t.type)&&Ha(),ze(t),null;case 19:if(se(le),s=t.memoizedState,s===null)return ze(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)es(s,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xa(e),o!==null){for(t.flags|=128,es(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(le,le.current&1|2),t.child}e=e.sibling}s.tail!==null&&ge()>Ai&&(t.flags|=128,r=!0,es(s,!1),t.lanes=4194304)}else{if(!r)if(e=Xa(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return ze(t),null}else 2*ge()-s.renderingStartTime>Ai&&n!==1073741824&&(t.flags|=128,r=!0,es(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ge(),t.sibling=null,n=le.current,te(le,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return ld(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function x2(e,t){switch(Uh(t),t.tag){case 1:return st(t.type)&&Ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ii(),se(it),se(Ge),Xh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yh(t),null;case 13:if(se(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(le),null;case 4:return Ii(),null;case 10:return qh(t.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var Xo=!1,He=!1,P2=typeof WeakSet=="function"?WeakSet:Set,N=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function yf(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Rm=!1;function R2(e,t){if(Zc=ja,e=Lv(),jh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ef={focusedElem:e,selectionRange:n},ja=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:xt(t.type,y),E);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){fe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=Rm,Rm=!1,v}function ws(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&yf(t,n,s)}i=i.next}while(i!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function D0(e){var t=e.alternate;t!==null&&(e.alternate=null,D0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[zs],delete t[rf],delete t[h2],delete t[d2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function O0(e){return e.tag===5||e.tag===3||e.tag===4}function Nm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ba));else if(r!==4&&(e=e.child,e!==null))for(_f(e,t,n),e=e.sibling;e!==null;)_f(e,t,n),e=e.sibling}function wf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wf(e,t,n),e=e.sibling;e!==null;)wf(e,t,n),e=e.sibling}var De=null,Pt=!1;function mn(e,t,n){for(n=n.child;n!==null;)V0(e,t,n),n=n.sibling}function V0(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:He||ei(n,t);case 6:var r=De,i=Pt;De=null,mn(e,t,n),De=r,Pt=i,De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?qu(e.parentNode,n):e.nodeType===1&&qu(e,n),Ls(e)):qu(De,n.stateNode));break;case 4:r=De,i=Pt,De=n.stateNode.containerInfo,Pt=!0,mn(e,t,n),De=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yf(n,t,o),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!He&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,mn(e,t,n),He=r):mn(e,t,n);break;default:mn(e,t,n)}}function bm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new P2),t.forEach(function(r){var i=F2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,Pt=!1;break e;case 3:De=a.stateNode.containerInfo,Pt=!0;break e;case 4:De=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(De===null)throw Error(S(160));V0(s,o,i),De=null,Pt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)L0(t,e),t=t.sibling}function L0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Lt(e),r&4){try{ws(3,e,e.return),Fl(3,e)}catch(y){fe(e,e.return,y)}try{ws(5,e,e.return)}catch(y){fe(e,e.return,y)}}break;case 1:Ct(t,e),Lt(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(Ct(t,e),Lt(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{bs(i,"")}catch(y){fe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rv(i,s),Bc(a,o);var u=Bc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?lv(i,f):c==="dangerouslySetInnerHTML"?ov(i,f):c==="children"?bs(i,f):Ch(i,c,f,u)}switch(a){case"input":$c(i,s);break;case"textarea":iv(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?oi(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?oi(i,!!s.multiple,s.defaultValue,!0):oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[zs]=s}catch(y){fe(e,e.return,y)}}break;case 6:if(Ct(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){fe(e,e.return,y)}}break;case 3:if(Ct(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ls(t.containerInfo)}catch(y){fe(e,e.return,y)}break;case 4:Ct(t,e),Lt(e);break;case 13:Ct(t,e),Lt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(od=ge())),r&4&&bm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||c,Ct(t,e),He=u):Ct(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(f=N=c;N!==null;){switch(h=N,m=h.child,h.tag){case 0:case 11:case 14:case 15:ws(4,h,h.return);break;case 1:ei(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){fe(r,n,y)}}break;case 5:ei(h,h.return);break;case 22:if(h.memoizedState!==null){Om(f);continue}}m!==null?(m.return=h,N=m):Om(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=av("display",o))}catch(y){fe(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){fe(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ct(t,e),Lt(e),r&4&&bm(e);break;case 21:break;default:Ct(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(O0(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bs(i,""),r.flags&=-33);var s=Nm(e);wf(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nm(e);_f(e,a,o);break;default:throw Error(S(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function N2(e,t,n){N=e,M0(e)}function M0(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||He;a=Xo;var u=He;if(Xo=o,(He=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Vm(i):l!==null?(l.return=o,N=l):Vm(i);for(;s!==null;)N=s,M0(s),s=s.sibling;N=i,Xo=a,He=u}Dm(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Dm(e)}}function Dm(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&gm(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gm(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ls(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}He||t.flags&512&&vf(t)}catch(h){fe(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Om(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Vm(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var s=t.return;try{vf(t)}catch(l){fe(t,s,l)}break;case 5:var o=t.return;try{vf(t)}catch(l){fe(t,o,l)}}}catch(l){fe(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var b2=Math.ceil,el=dn.ReactCurrentDispatcher,id=dn.ReactCurrentOwner,It=dn.ReactCurrentBatchConfig,Q=0,Re=null,Ee=null,Le=0,ut=0,ti=Qn(0),Se=0,Ks=null,Ir=0,jl=0,sd=0,Es=null,nt=null,od=0,Ai=1/0,Yt=null,tl=!1,Ef=null,bn=null,Jo=!1,Tn=null,nl=0,Ts=0,Tf=null,Ca=-1,xa=0;function Ze(){return Q&6?ge():Ca!==-1?Ca:Ca=ge()}function Dn(e){return e.mode&1?Q&2&&Le!==0?Le&-Le:m2.transition!==null?(xa===0&&(xa=wv()),xa):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Cv(e.type)),e):1}function Dt(e,t,n,r){if(50<Ts)throw Ts=0,Tf=null,Error(S(185));mo(e,n,r),(!(Q&2)||e!==Re)&&(e===Re&&(!(Q&2)&&(jl|=n),Se===4&&wn(e,Le)),ot(e,r),n===1&&Q===0&&!(t.mode&1)&&(Ai=ge()+500,Ll&&Yn()))}function ot(e,t){var n=e.callbackNode;mT(e,t);var r=Fa(e,e===Re?Le:0);if(r===0)n!==null&&Hp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hp(n),t===1)e.tag===0?p2(Lm.bind(null,e)):qv(Lm.bind(null,e)),c2(function(){!(Q&6)&&Yn()}),n=null;else{switch(Ev(r)){case 1:n=bh;break;case 4:n=vv;break;case 16:n=$a;break;case 536870912:n=_v;break;default:n=$a}n=W0(n,$0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $0(e,t){if(Ca=-1,xa=0,Q&6)throw Error(S(327));var n=e.callbackNode;if(fi()&&e.callbackNode!==n)return null;var r=Fa(e,e===Re?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var i=Q;Q|=2;var s=j0();(Re!==e||Le!==t)&&(Yt=null,Ai=ge()+500,mr(e,t));do try{V2();break}catch(a){F0(e,a)}while(1);Wh(),el.current=s,Q=i,Ee!==null?t=0:(Re=null,Le=0,t=Se)}if(t!==0){if(t===2&&(i=Gc(e),i!==0&&(r=i,t=If(e,i))),t===1)throw n=Ks,mr(e,0),wn(e,r),ot(e,ge()),n;if(t===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!D2(i)&&(t=rl(e,r),t===2&&(s=Gc(e),s!==0&&(r=s,t=If(e,s))),t===1))throw n=Ks,mr(e,0),wn(e,r),ot(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:ir(e,nt,Yt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=od+500-ge(),10<t)){if(Fa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nf(ir.bind(null,e,nt,Yt),t);break}ir(e,nt,Yt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b2(r/1960))-r,10<r){e.timeoutHandle=nf(ir.bind(null,e,nt,Yt),r);break}ir(e,nt,Yt);break;case 5:ir(e,nt,Yt);break;default:throw Error(S(329))}}}return ot(e,ge()),e.callbackNode===n?$0.bind(null,e):null}function If(e,t){var n=Es;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=rl(e,t),e!==2&&(t=nt,nt=n,t!==null&&Sf(t)),e}function Sf(e){nt===null?nt=e:nt.push.apply(nt,e)}function D2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~sd,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Lm(e){if(Q&6)throw Error(S(327));fi();var t=Fa(e,0);if(!(t&1))return ot(e,ge()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=Gc(e);r!==0&&(t=r,n=If(e,r))}if(n===1)throw n=Ks,mr(e,0),wn(e,t),ot(e,ge()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,nt,Yt),ot(e,ge()),null}function ad(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Ai=ge()+500,Ll&&Yn())}}function Sr(e){Tn!==null&&Tn.tag===0&&!(Q&6)&&fi();var t=Q;Q|=1;var n=It.transition,r=Z;try{if(It.transition=null,Z=1,e)return e()}finally{Z=r,It.transition=n,Q=t,!(Q&6)&&Yn()}}function ld(){ut=ti.current,se(ti)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,u2(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Uh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ha();break;case 3:Ii(),se(it),se(Ge),Xh();break;case 5:Yh(r);break;case 4:Ii();break;case 13:se(le);break;case 19:se(le);break;case 10:qh(r.type._context);break;case 22:case 23:ld()}n=n.return}if(Re=e,Ee=e=On(e.current,null),Le=ut=t,Se=0,Ks=null,sd=jl=Ir=0,nt=Es=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ar=null}return e}function F0(e,t){do{var n=Ee;try{if(Wh(),Sa.current=Za,Ja){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ja=!1}if(Tr=0,Pe=Te=ue=null,_s=!1,Hs=0,id.current=null,n===null||n.return===null){Se=1,Ks=t,Ee=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Im(o);if(m!==null){m.flags&=-257,Sm(m,o,a,s,t),m.mode&1&&Tm(s,u,t),t=m,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Tm(s,u,t),ud();break e}l=Error(S(426))}}else if(ae&&a.mode&1){var E=Im(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Sm(E,o,a,s,t),Bh(Si(l,a));break e}}s=l=Si(l,a),Se!==4&&(Se=2),Es===null?Es=[s]:Es.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=T0(s,l,t);mm(s,p);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(bn===null||!bn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=I0(s,a,t);mm(s,_);break e}}s=s.return}while(s!==null)}U0(n)}catch(T){t=T,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function j0(){var e=el.current;return el.current=Za,e===null?Za:e}function ud(){(Se===0||Se===3||Se===2)&&(Se=4),Re===null||!(Ir&268435455)&&!(jl&268435455)||wn(Re,Le)}function rl(e,t){var n=Q;Q|=2;var r=j0();(Re!==e||Le!==t)&&(Yt=null,mr(e,t));do try{O2();break}catch(i){F0(e,i)}while(1);if(Wh(),Q=n,el.current=r,Ee!==null)throw Error(S(261));return Re=null,Le=0,Se}function O2(){for(;Ee!==null;)z0(Ee)}function V2(){for(;Ee!==null&&!oT();)z0(Ee)}function z0(e){var t=H0(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?U0(e):Ee=t,id.current=null}function U0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=x2(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,Ee=null;return}}else if(n=C2(n,t,ut),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Se===0&&(Se=5)}function ir(e,t,n){var r=Z,i=It.transition;try{It.transition=null,Z=1,L2(e,t,n,r)}finally{It.transition=i,Z=r}return null}function L2(e,t,n,r){do fi();while(Tn!==null);if(Q&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(gT(e,s),e===Re&&(Ee=Re=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,W0($a,function(){return fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var o=Z;Z=1;var a=Q;Q|=4,id.current=null,R2(e,n),L0(n,e),n2(ef),ja=!!Zc,ef=Zc=null,e.current=n,N2(n),aT(),Q=a,Z=o,It.transition=s}else e.current=n;if(Jo&&(Jo=!1,Tn=e,nl=i),s=e.pendingLanes,s===0&&(bn=null),cT(n.stateNode),ot(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tl)throw tl=!1,e=Ef,Ef=null,e;return nl&1&&e.tag!==0&&fi(),s=e.pendingLanes,s&1?e===Tf?Ts++:(Ts=0,Tf=e):Ts=0,Yn(),null}function fi(){if(Tn!==null){var e=Ev(nl),t=It.transition,n=Z;try{if(It.transition=null,Z=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,nl=0,Q&6)throw Error(S(331));var i=Q;for(Q|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:ws(8,c,s)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var h=c.sibling,m=c.return;if(D0(c),c===u){N=null;break}if(h!==null){h.return=m,N=h;break}N=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ws(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var d=e.current;for(N=d;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fl(9,a)}}catch(T){fe(a,a.return,T)}if(a===o){N=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,N=_;break e}N=a.return}}if(Q=i,Yn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Nl,e)}catch{}r=!0}return r}finally{Z=n,It.transition=t}}return!1}function Mm(e,t,n){t=Si(n,t),t=T0(e,t,1),e=Nn(e,t,1),t=Ze(),e!==null&&(mo(e,1,t),ot(e,t))}function fe(e,t,n){if(e.tag===3)Mm(e,e,n);else for(;t!==null;){if(t.tag===3){Mm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=Si(n,e),e=I0(t,e,1),t=Nn(t,e,1),e=Ze(),t!==null&&(mo(t,1,e),ot(t,e));break}}t=t.return}}function M2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Le&n)===n&&(Se===4||Se===3&&(Le&130023424)===Le&&500>ge()-od?mr(e,0):sd|=n),ot(e,t)}function B0(e,t){t===0&&(e.mode&1?(t=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):t=1);var n=Ze();e=sn(e,t),e!==null&&(mo(e,t,n),ot(e,n))}function $2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),B0(e,n)}function F2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),B0(e,n)}var H0;H0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,k2(e,t,n);rt=!!(e.flags&131072)}else rt=!1,ae&&t.flags&1048576&&Kv(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ka(e,t),e=t.pendingProps;var i=wi(t,Ge.current);ci(t,n),i=Zh(null,t,r,e,i,n);var s=ed();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(s=!0,Wa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gh(t),i.updater=Ml,t.stateNode=i,i._reactInternals=t,cf(t,r,e,n),t=df(null,t,r,!0,s,n)):(t.tag=0,ae&&s&&zh(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ka(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=z2(r),e=xt(r,e),i){case 0:t=hf(null,t,r,e,n);break e;case 1:t=Cm(null,t,r,e,n);break e;case 11:t=Am(null,t,r,e,n);break e;case 14:t=km(null,t,r,xt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),hf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Cm(e,t,r,i,n);case 3:e:{if(C0(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Xv(e,t),Ya(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Si(Error(S(423)),t),t=xm(e,t,r,n,i);break e}else if(r!==i){i=Si(Error(S(424)),t),t=xm(e,t,r,n,i);break e}else for(ct=Rn(t.stateNode.containerInfo.firstChild),ft=t,ae=!0,Rt=null,n=t0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ei(),r===i){t=on(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return n0(t),e===null&&af(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,tf(r,i)?o=null:s!==null&&tf(r,s)&&(t.flags|=32),k0(e,t),Ye(e,t,o,n),t.child;case 6:return e===null&&af(t),null;case 13:return x0(e,t,n);case 4:return Qh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ti(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Am(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,te(Ga,r._currentValue),r._currentValue=o,s!==null)if(Ot(s.value,o)){if(s.children===i.children&&!it.current){t=on(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=tn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lf(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lf(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ci(t,n),i=St(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),km(e,t,r,i,n);case 15:return S0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),ka(e,t),t.tag=1,st(r)?(e=!0,Wa(t)):e=!1,ci(t,n),Zv(t,r,i),cf(t,r,i,n),df(null,t,r,!0,e,n);case 19:return P0(e,t,n);case 22:return A0(e,t,n)}throw Error(S(156,t.tag))};function W0(e,t){return yv(e,t)}function j2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new j2(e,t,n,r)}function cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z2(e){if(typeof e=="function")return cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ph)return 11;if(e===Rh)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pa(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")cd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wr:return gr(n.children,i,s,t);case xh:o=8,i|=8;break;case Dc:return e=Tt(12,n,t,i|2),e.elementType=Dc,e.lanes=s,e;case Oc:return e=Tt(13,n,t,i),e.elementType=Oc,e.lanes=s,e;case Vc:return e=Tt(19,n,t,i),e.elementType=Vc,e.lanes=s,e;case ev:return zl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jy:o=10;break e;case Zy:o=9;break e;case Ph:o=11;break e;case Rh:o=14;break e;case yn:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Tt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function gr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=ev,e.lanes=n,e.stateNode={isHidden:!1},e}function ec(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function tc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function U2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(e,t,n,r,i,s,o,a,l){return e=new U2(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Tt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gh(s),e}function B2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function q0(e){if(!e)return jn;e=e._reactInternals;e:{if(Or(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(st(n))return Wv(e,n,t)}return t}function K0(e,t,n,r,i,s,o,a,l){return e=fd(n,r,!0,e,i,s,o,a,l),e.context=q0(null),n=e.current,r=Ze(),i=Dn(n),s=tn(r,i),s.callback=t??null,Nn(n,s,i),e.current.lanes=i,mo(e,i,r),ot(e,r),e}function Ul(e,t,n,r){var i=t.current,s=Ze(),o=Dn(i);return n=q0(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,o),e!==null&&(Dt(e,i,o,s),Ia(e,i,o)),o}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hd(e,t){$m(e,t),(e=e.alternate)&&$m(e,t)}function H2(){return null}var G0=typeof reportError=="function"?reportError:function(e){console.error(e)};function dd(e){this._internalRoot=e}Bl.prototype.render=dd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ul(e,t,null,null)};Bl.prototype.unmount=dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sr(function(){Ul(null,e,null,null)}),t[rn]=null}};function Bl(e){this._internalRoot=e}Bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&kv(e)}};function pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function W2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=il(o);s.call(u)}}var o=K0(t,r,e,0,null,!1,!1,"",Fm);return e._reactRootContainer=o,e[rn]=o.current,Fs(e.nodeType===8?e.parentNode:e),Sr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=il(l);a.call(u)}}var l=fd(e,0,!1,null,null,!1,!1,"",Fm);return e._reactRootContainer=l,e[rn]=l.current,Fs(e.nodeType===8?e.parentNode:e),Sr(function(){Ul(t,l,n,r)}),l}function Wl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=il(o);a.call(l)}}Ul(t,o,e,i)}else o=W2(n,t,e,i,r);return il(o)}Tv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=as(t.pendingLanes);n!==0&&(Dh(t,n|1),ot(t,ge()),!(Q&6)&&(Ai=ge()+500,Yn()))}break;case 13:Sr(function(){var r=sn(e,1);if(r!==null){var i=Ze();Dt(r,e,1,i)}}),hd(e,1)}};Oh=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=Ze();Dt(t,e,134217728,n)}hd(e,134217728)}};Iv=function(e){if(e.tag===13){var t=Dn(e),n=sn(e,t);if(n!==null){var r=Ze();Dt(n,e,t,r)}hd(e,t)}};Sv=function(){return Z};Av=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Wc=function(e,t,n){switch(t){case"input":if($c(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vl(r);if(!i)throw Error(S(90));nv(r),$c(r,i)}}}break;case"textarea":iv(e,n);break;case"select":t=n.value,t!=null&&oi(e,!!n.multiple,t,!1)}};fv=ad;hv=Sr;var q2={usingClientEntryPoint:!1,Events:[yo,Qr,Vl,uv,cv,ad]},ts={findFiberByHostInstance:or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},K2={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mv(e),e===null?null:e.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||H2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Nl=Zo.inject(K2),Ht=Zo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q2;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(t))throw Error(S(200));return B2(e,t,null,n)};gt.createRoot=function(e,t){if(!pd(e))throw Error(S(299));var n=!1,r="",i=G0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fd(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,Fs(e.nodeType===8?e.parentNode:e),new dd(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=mv(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Sr(e)};gt.hydrate=function(e,t,n){if(!Hl(t))throw Error(S(200));return Wl(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!pd(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=G0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=K0(t,null,e,1,n??null,i,!1,s,o),e[rn]=t.current,Fs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bl(t)};gt.render=function(e,t,n){if(!Hl(t))throw Error(S(200));return Wl(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(S(40));return e._reactRootContainer?(Sr(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};gt.unstable_batchedUpdates=ad;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Wl(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(e){console.error(e)}}Q0(),Ky.exports=gt;var G2=Ky.exports,jm=G2;Nc.createRoot=jm.createRoot,Nc.hydrateRoot=jm.hydrateRoot;var zm;window.addEventListener("scroll",function(){let e=document.querySelector(".navbar");var t=window.scrollY||document.documentElement.scrollTop;t>zm?e.style.top="-80px":e.style.top="0",zm=t});/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gs.apply(this,arguments)}var In;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(In||(In={}));const Um="popstate";function Q2(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:a="",hash:l=""}=Vr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Af("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:sl(s))}function r(i,s){ql(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return X2(t,n,r,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ql(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y2(){return Math.random().toString(36).substr(2,8)}function Bm(e,t){return{usr:e.state,key:e.key,idx:t}}function Af(e,t,n,r){return n===void 0&&(n=null),Gs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vr(t):t,{state:n,key:t&&t.key||r||Y2()})}function sl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function X2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=In.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Gs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=In.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:p})}function h(E,p){a=In.Push;let d=Af(y.location,E,p);n&&n(d,E),u=c()+1;let g=Bm(d,u),_=y.createHref(d);try{o.pushState(g,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function m(E,p){a=In.Replace;let d=Af(y.location,E,p);n&&n(d,E),u=c();let g=Bm(d,u),_=y.createHref(d);o.replaceState(g,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:sl(E);return ye(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Um,f),l=E,()=>{i.removeEventListener(Um,f),l=null}},createHref(E){return t(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(E){return o.go(E)}};return y}var Hm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hm||(Hm={}));function J2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vr(t):t,i=md(r.pathname||"/",n);if(i==null)return null;let s=Y0(e);Z2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=lI(s[a],cI(i));return o}function Y0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Vn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Y0(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:oI(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X0(s.path))i(s,o,l)}),t}function X0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Z2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:aI(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eI=/^:\w+$/,tI=3,nI=2,rI=1,iI=10,sI=-2,Wm=e=>e==="*";function oI(e,t){let n=e.split("/"),r=n.length;return n.some(Wm)&&(r+=sI),t&&(r+=nI),n.filter(i=>!Wm(i)).reduce((i,s)=>i+(eI.test(s)?tI:s===""?rI:iI),r)}function aI(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function lI(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=J0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:Vn([i,c.pathname]),pathnameBase:pI(Vn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Vn([i,c.pathnameBase]))}return s}function J0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=uI(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=fI(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function uI(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ql(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function cI(e){try{return decodeURI(e)}catch(t){return ql(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fI(e,t){try{return decodeURIComponent(e)}catch(n){return ql(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function md(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hI(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vr(e):e;return{pathname:n?n.startsWith("/")?n:dI(n,t):t,search:mI(r),hash:gI(i)}}function dI(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function e1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Vr(e):(i=Gs({},e),ye(!i.pathname||!i.pathname.includes("?"),nc("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),nc("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),nc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=hI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Vn=e=>e.join("/").replace(/\/\/+/g,"/"),pI=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mI=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gI=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yI(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t1=["post","put","patch","delete"];new Set(t1);const vI=["get",...t1];new Set(vI);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ol.apply(this,arguments)}const gd=x.createContext(null),n1=x.createContext(null),Lr=x.createContext(null),Kl=x.createContext(null),Xn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),r1=x.createContext(null);function _I(e,t){let{relative:n}=t===void 0?{}:t;Mi()||ye(!1);let{basename:r,navigator:i}=x.useContext(Lr),{hash:s,pathname:o,search:a}=yd(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Mi(){return x.useContext(Kl)!=null}function $i(){return Mi()||ye(!1),x.useContext(Kl).location}function i1(e){Mi()||ye(!1);let{pathname:t}=$i();return x.useMemo(()=>J0(e,t),[t,e])}function s1(e){x.useContext(Lr).static||x.useLayoutEffect(e)}function wI(){let{isDataRoute:e}=x.useContext(Xn);return e?VI():EI()}function EI(){Mi()||ye(!1);let e=x.useContext(gd),{basename:t,navigator:n}=x.useContext(Lr),{matches:r}=x.useContext(Xn),{pathname:i}=$i(),s=JSON.stringify(Z0(r).map(l=>l.pathnameBase)),o=x.useRef(!1);return s1(()=>{o.current=!0}),x.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=e1(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Vn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}const TI=x.createContext(null);function II(e){let t=x.useContext(Xn).outlet;return t&&x.createElement(TI.Provider,{value:e},t)}function yd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(Xn),{pathname:i}=$i(),s=JSON.stringify(Z0(r).map(o=>o.pathnameBase));return x.useMemo(()=>e1(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function SI(e,t){return AI(e,t)}function AI(e,t,n){Mi()||ye(!1);let{navigator:r}=x.useContext(Lr),{matches:i}=x.useContext(Xn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=$i(),u;if(t){var c;let y=typeof t=="string"?Vr(t):t;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||ye(!1),u=y}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",m=J2(e,{pathname:h}),v=RI(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Vn([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Vn([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&v?x.createElement(Kl.Provider,{value:{location:ol({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:In.Pop}},v):v}function kI(){let e=OI(),t=yI(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,s)}const CI=x.createElement(kI,null);class xI extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(Xn.Provider,{value:this.props.routeContext},x.createElement(r1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PI(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(gd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Xn.Provider,{value:t},r)}function RI(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ye(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||CI);let h=t.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=f:l.route.Component?v=x.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,x.createElement(PI,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?x.createElement(xI,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var o1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(o1||{}),al=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(al||{});function NI(e){let t=x.useContext(gd);return t||ye(!1),t}function bI(e){let t=x.useContext(n1);return t||ye(!1),t}function DI(e){let t=x.useContext(Xn);return t||ye(!1),t}function a1(e){let t=DI(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function OI(){var e;let t=x.useContext(r1),n=bI(al.UseRouteError),r=a1(al.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function VI(){let{router:e}=NI(o1.UseNavigateStable),t=a1(al.UseNavigateStable),n=x.useRef(!1);return s1(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ol({fromRouteId:t},s)))},[e,t])}function LI(e){return II(e.context)}function jr(e){ye(!1)}function MI(e){let{basename:t="/",children:n=null,location:r,navigationType:i=In.Pop,navigator:s,static:o=!1}=e;Mi()&&ye(!1);let a=t.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Vr(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:m="default"}=r,v=x.useMemo(()=>{let y=md(u,a);return y==null?null:{location:{pathname:y,search:c,hash:f,state:h,key:m},navigationType:i}},[a,u,c,f,h,m,i]);return v==null?null:x.createElement(Lr.Provider,{value:l},x.createElement(Kl.Provider,{children:n,value:v}))}function $I(e){let{children:t,location:n}=e;return SI(kf(t),n)}new Promise(()=>{});function kf(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let s=[...t,i];if(r.type===x.Fragment){n.push.apply(n,kf(r.props.children,s));return}r.type!==jr&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=kf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}function l1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function FI(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jI(e,t){return e.button===0&&(!t||t==="_self")&&!FI(e)}const zI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],UI=["aria-current","caseSensitive","className","end","style","to","children"],BI="startTransition",qm=$E[BI];function HI(e){let{basename:t,children:n,future:r,window:i}=e,s=x.useRef();s.current==null&&(s.current=Q2({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=x.useCallback(f=>{u&&qm?qm(()=>l(f)):l(f)},[l,u]);return x.useLayoutEffect(()=>o.listen(c),[o,c]),x.createElement(MI,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const WI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,KI=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,f=l1(t,zI),{basename:h}=x.useContext(Lr),m,v=!1;if(typeof u=="string"&&qI.test(u)&&(m=u,WI))try{let d=new URL(window.location.href),g=u.startsWith("//")?new URL(d.protocol+u):new URL(u),_=md(g.pathname,h);g.origin===d.origin&&_!=null?u=_+g.search+g.hash:v=!0}catch{}let y=_I(u,{relative:i}),E=GI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||E(d)}return x.createElement("a",ll({},f,{href:m||y,onClick:v||s?r:p,ref:n,target:l}))}),hi=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=t,c=l1(t,UI),f=yd(l,{relative:c.relative}),h=$i(),m=x.useContext(n1),{navigator:v}=x.useContext(Lr),y=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,E=h.pathname,p=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(E=E.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let d=E===y||!o&&E.startsWith(y)&&E.charAt(y.length)==="/",g=p!=null&&(p===y||!o&&p.startsWith(y)&&p.charAt(y.length)==="/"),_=d?r:void 0,T;typeof s=="function"?T=s({isActive:d,isPending:g}):T=[s,d?"active":null,g?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:d,isPending:g}):a;return x.createElement(KI,ll({},c,{"aria-current":_,className:T,ref:n,style:C,to:l}),typeof u=="function"?u({isActive:d,isPending:g}):u)});var Km;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Km||(Km={}));var Gm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gm||(Gm={}));function GI(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=wI(),l=$i(),u=yd(e,{relative:o});return x.useCallback(c=>{if(jI(c,n)){c.preventDefault();let f=r!==void 0?r:sl(l)===sl(u);a(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}const vd="/simple-banking-app/assets/money-5edb62b0.webp";function Qm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qm(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ul(e){"@babel/helpers - typeof";return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ul(e)}function QI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ym(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function YI(e,t,n){return t&&Ym(e.prototype,t),n&&Ym(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _d(e,t){return JI(e)||eS(e,t)||u1(e,t)||nS()}function _o(e){return XI(e)||ZI(e)||u1(e)||tS()}function XI(e){if(Array.isArray(e))return Cf(e)}function JI(e){if(Array.isArray(e))return e}function ZI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function u1(e,t){if(e){if(typeof e=="string")return Cf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cf(e,t)}}function Cf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xm=function(){},wd={},c1={},f1=null,h1={mark:Xm,measure:Xm};try{typeof window<"u"&&(wd=window),typeof document<"u"&&(c1=document),typeof MutationObserver<"u"&&(f1=MutationObserver),typeof performance<"u"&&(h1=performance)}catch{}var rS=wd.navigator||{},Jm=rS.userAgent,Zm=Jm===void 0?"":Jm,zn=wd,oe=c1,eg=f1,ea=h1;zn.document;var pn=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",d1=~Zm.indexOf("MSIE")||~Zm.indexOf("Trident/"),ta,na,ra,ia,sa,an="___FONT_AWESOME___",xf=16,p1="fa",m1="svg-inline--fa",Ar="data-fa-i2svg",Pf="data-fa-pseudo-element",iS="data-fa-pseudo-element-pending",Ed="data-prefix",Td="data-icon",tg="fontawesome-i2svg",sS="async",oS=["HTML","HEAD","STYLE","SCRIPT"],g1=function(){try{return!0}catch{return!1}}(),re="classic",he="sharp",Id=[re,he];function wo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[re]}})}var Qs=wo((ta={},ke(ta,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ke(ta,he,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ta)),Ys=wo((na={},ke(na,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ke(na,he,{solid:"fass",regular:"fasr",light:"fasl"}),na)),Xs=wo((ra={},ke(ra,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ke(ra,he,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ra)),aS=wo((ia={},ke(ia,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ke(ia,he,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ia)),lS=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,y1="fa-layers-text",uS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cS=wo((sa={},ke(sa,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ke(sa,he,{900:"fass",400:"fasr",300:"fasl"}),sa)),v1=[1,2,3,4,5,6,7,8,9,10],fS=v1.concat([11,12,13,14,15,16,17,18,19,20]),hS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ur={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Js=new Set;Object.keys(Ys[re]).map(Js.add.bind(Js));Object.keys(Ys[he]).map(Js.add.bind(Js));var dS=[].concat(Id,_o(Js),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ur.GROUP,ur.SWAP_OPACITY,ur.PRIMARY,ur.SECONDARY]).concat(v1.map(function(e){return"".concat(e,"x")})).concat(fS.map(function(e){return"w-".concat(e)})),Is=zn.FontAwesomeConfig||{};function pS(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function mS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var gS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gS.forEach(function(e){var t=_d(e,2),n=t[0],r=t[1],i=mS(pS(n));i!=null&&(Is[r]=i)})}var _1={styleDefault:"solid",familyDefault:"classic",cssPrefix:p1,replacementClass:m1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Is.familyPrefix&&(Is.cssPrefix=Is.familyPrefix);var ki=R(R({},_1),Is);ki.autoReplaceSvg||(ki.observeMutations=!1);var O={};Object.keys(_1).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){ki[e]=n,Ss.forEach(function(r){return r(O)})},get:function(){return ki[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){ki.cssPrefix=t,Ss.forEach(function(n){return n(O)})},get:function(){return ki.cssPrefix}});zn.FontAwesomeConfig=O;var Ss=[];function yS(e){return Ss.push(e),function(){Ss.splice(Ss.indexOf(e),1)}}var gn=xf,zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vS(e){if(!(!e||!pn)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return oe.head.insertBefore(t,r),e}}var _S="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zs(){for(var e=12,t="";e-- >0;)t+=_S[Math.random()*62|0];return t}function Fi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Sd(e){return e.classList?Fi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function w1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(w1(e[n]),'" ')},"").trim()}function Gl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ad(e){return e.size!==zt.size||e.x!==zt.x||e.y!==zt.y||e.rotate!==zt.rotate||e.flipX||e.flipY}function ES(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function TS(e){var t=e.transform,n=e.width,r=n===void 0?xf:n,i=e.height,s=i===void 0?xf:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&d1?l+="translate(".concat(t.x/gn-r/2,"em, ").concat(t.y/gn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/gn,"em), calc(-50% + ").concat(t.y/gn,"em)) "):l+="translate(".concat(t.x/gn,"em, ").concat(t.y/gn,"em) "),l+="scale(".concat(t.size/gn*(t.flipX?-1:1),", ").concat(t.size/gn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var IS=`:root, :host {
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
}`;function E1(){var e=p1,t=m1,n=O.cssPrefix,r=O.replacementClass,i=IS;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var ng=!1;function rc(){O.autoAddCss&&!ng&&(vS(E1()),ng=!0)}var SS={mixout:function(){return{dom:{css:E1,insertCss:rc}}},hooks:function(){return{beforeDOMElementCreation:function(){rc()},beforeI2svg:function(){rc()}}}},ln=zn||{};ln[an]||(ln[an]={});ln[an].styles||(ln[an].styles={});ln[an].hooks||(ln[an].hooks={});ln[an].shims||(ln[an].shims=[]);var Nt=ln[an],T1=[],AS=function e(){oe.removeEventListener("DOMContentLoaded",e),cl=1,T1.map(function(t){return t()})},cl=!1;pn&&(cl=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),cl||oe.addEventListener("DOMContentLoaded",AS));function kS(e){pn&&(cl?setTimeout(e,0):T1.push(e))}function Eo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?w1(e):"<".concat(t," ").concat(wS(r),">").concat(s.map(Eo).join(""),"</").concat(t,">")}function rg(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var CS=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},ic=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?CS(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,t[u],u,t);return c};function xS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Rf(e){var t=xS(e);return t.length===1?t[0].toString(16):null}function PS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ig(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=ig(t);typeof Nt.hooks.addPack=="function"&&!i?Nt.hooks.addPack(e,ig(t)):Nt.styles[e]=R(R({},Nt.styles[e]||{}),s),e==="fas"&&Nf("fa",t)}var oa,aa,la,ni=Nt.styles,RS=Nt.shims,NS=(oa={},ke(oa,re,Object.values(Xs[re])),ke(oa,he,Object.values(Xs[he])),oa),kd=null,I1={},S1={},A1={},k1={},C1={},bS=(aa={},ke(aa,re,Object.keys(Qs[re])),ke(aa,he,Object.keys(Qs[he])),aa);function DS(e){return~dS.indexOf(e)}function OS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!DS(i)?i:null}var x1=function(){var t=function(s){return ic(ni,function(o,a,l){return o[l]=ic(a,s,{}),o},{})};I1=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),S1=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),C1=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ni||O.autoFetchSvg,r=ic(RS,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});A1=r.names,k1=r.unicodes,kd=Ql(O.styleDefault,{family:O.familyDefault})};yS(function(e){kd=Ql(e.styleDefault,{family:O.familyDefault})});x1();function Cd(e,t){return(I1[e]||{})[t]}function VS(e,t){return(S1[e]||{})[t]}function cr(e,t){return(C1[e]||{})[t]}function P1(e){return A1[e]||{prefix:null,iconName:null}}function LS(e){var t=k1[e],n=Cd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Un(){return kd}var xd=function(){return{prefix:null,iconName:null,rest:[]}};function Ql(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?re:n,i=Qs[r][e],s=Ys[r][e]||Ys[r][i],o=e in Nt.styles?e:null;return s||o||null}var sg=(la={},ke(la,re,Object.keys(Xs[re])),ke(la,he,Object.keys(Xs[he])),la);function Yl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ke(t,re,"".concat(O.cssPrefix,"-").concat(re)),ke(t,he,"".concat(O.cssPrefix,"-").concat(he)),t),o=null,a=re;(e.includes(s[re])||e.some(function(u){return sg[re].includes(u)}))&&(a=re),(e.includes(s[he])||e.some(function(u){return sg[he].includes(u)}))&&(a=he);var l=e.reduce(function(u,c){var f=OS(O.cssPrefix,c);if(ni[c]?(c=NS[a].includes(c)?aS[a][c]:c,o=c,u.prefix=c):bS[a].indexOf(c)>-1?(o=c,u.prefix=Ql(c,{family:a})):f?u.iconName=f:c!==O.replacementClass&&c!==s[re]&&c!==s[he]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?P1(u.iconName):{},m=cr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||m||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ni.far&&ni.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},xd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===he&&(ni.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=cr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Un()||"fas"),l}var MS=function(){function e(){QI(this,e),this.definitions={}}return YI(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),Nf(a,o[a]);var l=Xs[re][a];l&&Nf(l,o[a]),x1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),og=[],ri={},di={},$S=Object.keys(di);function FS(e,t){var n=t.mixoutsTo;return og=e,ri={},Object.keys(di).forEach(function(r){$S.indexOf(r)===-1&&delete di[r]}),og.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ul(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ri[o]||(ri[o]=[]),ri[o].push(s[o])})}r.provides&&r.provides(di)}),n}function bf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ri[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function kr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ri[e]||[];i.forEach(function(s){s.apply(null,n)})}function un(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return di[e]?di[e].apply(null,t):void 0}function Df(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Un();if(t)return t=cr(n,t)||t,rg(R1.definitions,n,t)||rg(Nt.styles,n,t)}var R1=new MS,jS=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,kr("noAuto")},zS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pn?(kr("beforeI2svg",t),un("pseudoElements2svg",t),un("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,kS(function(){BS({autoReplaceSvgRoot:n}),kr("watch",t)})}},US={icon:function(t){if(t===null)return null;if(ul(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:cr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ql(t[0]);return{prefix:r,iconName:cr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(lS))){var i=Yl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Un(),iconName:cr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Un();return{prefix:s,iconName:cr(s,t)||t}}}},vt={noAuto:jS,config:O,dom:zS,parse:US,library:R1,findIconDefinition:Df,toHtml:Eo},BS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(Nt.styles).length>0||O.autoFetchSvg)&&pn&&O.autoReplaceSvg&&vt.dom.i2svg({node:r})};function Xl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Eo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(pn){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function HS(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Ad(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Gl(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function WS(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Pd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,m=h===void 0?!1:h,v=r.found?r:n,y=v.width,E=v.height,p=i==="fak",d=[O.replacementClass,s?"".concat(O.cssPrefix,"-").concat(s):""].filter(function(Y){return f.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(f.classes).join(" "),g={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};m&&(g.attributes[Ar]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||Zs())},children:[l]}),delete g.attributes.title);var T=R(R({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},_),f.styles)}),C=r.found&&n.found?un("generateAbstractMask",T)||{children:[],attributes:{}}:un("generateAbstractIcon",T)||{children:[],attributes:{}},P=C.children,V=C.attributes;return T.children=P,T.attributes=V,a?WS(T):HS(T)}function ag(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ar]="");var c=R({},o.styles);Ad(i)&&(c.transform=TS({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Gl(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function qS(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Gl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var sc=Nt.styles;function Of(e){var t=e[0],n=e[1],r=e.slice(4),i=_d(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(ur.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(ur.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(ur.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var KS={found:!1,width:512,height:512};function GS(e,t){!g1&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vf(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=Un()),new Promise(function(r,i){if(un("missingIconAbstract"),n==="fa"){var s=P1(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&sc[t]&&sc[t][e]){var o=sc[t][e];return r(Of(o))}GS(e,t),r(R(R({},KS),{},{icon:O.showMissingIcons&&e?un("missingIconAbstract")||{}:{}}))})}var lg=function(){},Lf=O.measurePerformance&&ea&&ea.mark&&ea.measure?ea:{mark:lg,measure:lg},us='FA "6.4.2"',QS=function(t){return Lf.mark("".concat(us," ").concat(t," begins")),function(){return N1(t)}},N1=function(t){Lf.mark("".concat(us," ").concat(t," ends")),Lf.measure("".concat(us," ").concat(t),"".concat(us," ").concat(t," begins"),"".concat(us," ").concat(t," ends"))},Rd={begin:QS,end:N1},Ra=function(){};function ug(e){var t=e.getAttribute?e.getAttribute(Ar):null;return typeof t=="string"}function YS(e){var t=e.getAttribute?e.getAttribute(Ed):null,n=e.getAttribute?e.getAttribute(Td):null;return t&&n}function XS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function JS(){if(O.autoReplaceSvg===!0)return Na.replace;var e=Na[O.autoReplaceSvg];return e||Na.replace}function ZS(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function eA(e){return oe.createElement(e)}function b1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ZS:eA:n;if(typeof e=="string")return oe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(b1(o,{ceFn:r}))}),i}function tA(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Na={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(b1(i),n)}),n.getAttribute(Ar)===null&&O.keepOriginalSource){var r=oe.createComment(tA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Sd(n).indexOf(O.replacementClass))return Na.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Eo(a)}).join(`
`);n.setAttribute(Ar,""),n.innerHTML=o}};function cg(e){e()}function D1(e,t){var n=typeof t=="function"?t:Ra;if(e.length===0)n();else{var r=cg;O.mutateApproach===sS&&(r=zn.requestAnimationFrame||cg),r(function(){var i=JS(),s=Rd.begin("mutate");e.map(i),s(),n()})}}var Nd=!1;function O1(){Nd=!0}function Mf(){Nd=!1}var fl=null;function fg(e){if(eg&&O.observeMutations){var t=e.treeCallback,n=t===void 0?Ra:t,r=e.nodeCallback,i=r===void 0?Ra:r,s=e.pseudoElementsCallback,o=s===void 0?Ra:s,a=e.observeMutationsRoot,l=a===void 0?oe:a;fl=new eg(function(u){if(!Nd){var c=Un();Fi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!ug(f.addedNodes[0])&&(O.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&O.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&ug(f.target)&&~hS.indexOf(f.attributeName))if(f.attributeName==="class"&&YS(f.target)){var h=Yl(Sd(f.target)),m=h.prefix,v=h.iconName;f.target.setAttribute(Ed,m||c),v&&f.target.setAttribute(Td,v)}else XS(f.target)&&i(f.target)})}}),pn&&fl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nA(){fl&&fl.disconnect()}function rA(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function iA(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Yl(Sd(e));return i.prefix||(i.prefix=Un()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=VS(i.prefix,e.innerText)||Cd(i.prefix,Rf(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function sA(e){var t=Fi(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Zs()):(t["aria-hidden"]="true",t.focusable="false")),t}function oA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=iA(e),r=n.iconName,i=n.prefix,s=n.rest,o=sA(e),a=bf("parseNodeAttributes",{},e),l=t.styleParser?rA(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var aA=Nt.styles;function V1(e){var t=O.autoReplaceSvg==="nest"?hg(e,{styleParser:!1}):hg(e);return~t.extra.classes.indexOf(y1)?un("generateLayersText",e,t):un("generateSvgReplacementMutation",e,t)}var Bn=new Set;Id.map(function(e){Bn.add("fa-".concat(e))});Object.keys(Qs[re]).map(Bn.add.bind(Bn));Object.keys(Qs[he]).map(Bn.add.bind(Bn));Bn=_o(Bn);function dg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pn)return Promise.resolve();var n=oe.documentElement.classList,r=function(f){return n.add("".concat(tg,"-").concat(f))},i=function(f){return n.remove("".concat(tg,"-").concat(f))},s=O.autoFetchSvg?Bn:Id.map(function(c){return"fa-".concat(c)}).concat(Object.keys(aA));s.includes("fa")||s.push("fa");var o=[".".concat(y1,":not([").concat(Ar,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Ar,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Fi(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Rd.begin("onTree"),u=a.reduce(function(c,f){try{var h=V1(f);h&&c.push(h)}catch(m){g1||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){D1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function lA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;V1(e).then(function(n){n&&D1([n],t)})}function uA(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Df(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Df(i||{})),e(r,R(R({},n),{},{mask:i}))}}var cA=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?zt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,m=n.titleId,v=m===void 0?null:m,y=n.classes,E=y===void 0?[]:y,p=n.attributes,d=p===void 0?{}:p,g=n.styles,_=g===void 0?{}:g;if(t){var T=t.prefix,C=t.iconName,P=t.icon;return Xl(R({type:"icon"},t),function(){return kr("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(h?d["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(v||Zs()):(d["aria-hidden"]="true",d.focusable="false")),Pd({icons:{main:Of(P),mask:l?Of(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:C,transform:R(R({},zt),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:_,classes:E}})})}},fA={mixout:function(){return{icon:uA(cA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dg,n.nodeCallback=lA,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?oe:r,s=n.callback,o=s===void 0?function(){}:s;return dg(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(m,v){Promise.all([Vf(i,a),c.iconName?Vf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=_d(y,2),p=E[0],d=E[1];m([n,Pd({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Gl(a);l.length>0&&(i.style=l);var u;return Ad(o)&&(u=un("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},hA={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Xl({type:"layer"},function(){kr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(_o(s)).join(" ")},children:o}]})}}}},dA={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Xl({type:"counter",content:n},function(){return kr("beforeDOMElementCreation",{content:n,params:r}),qS({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(_o(a))}})})}}}},pA={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?zt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,m=h===void 0?{}:h;return Xl({type:"text",content:n},function(){return kr("beforeDOMElementCreation",{content:n,params:r}),ag({content:n,transform:R(R({},zt),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(O.cssPrefix,"-layers-text")].concat(_o(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(d1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ag({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},mA=new RegExp('"',"ug"),pg=[1105920,1112319];function gA(e){var t=e.replace(mA,""),n=PS(t,0),r=n>=pg[0]&&n<=pg[1],i=t.length===2?t[0]===t[1]:!1;return{value:Rf(i?t[0]:t),isSecondary:r||i}}function mg(e,t){var n="".concat(iS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Fi(e.children),o=s.filter(function(P){return P.getAttribute(Pf)===t})[0],a=zn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(uS),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?he:re,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ys[h][l[2].toLowerCase()]:cS[h][u],v=gA(f),y=v.value,E=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Cd(m,y),g=d;if(p){var _=LS(y);_.iconName&&_.prefix&&(d=_.iconName,m=_.prefix)}if(d&&!E&&(!o||o.getAttribute(Ed)!==m||o.getAttribute(Td)!==g)){e.setAttribute(n,g),o&&e.removeChild(o);var T=oA(),C=T.extra;C.attributes[Pf]=t,Vf(d,m).then(function(P){var V=Pd(R(R({},T),{},{icons:{main:P,mask:xd()},prefix:m,iconName:g,extra:C,watchable:!0})),Y=oe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=V.map(function(U){return Eo(U)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function yA(e){return Promise.all([mg(e,"::before"),mg(e,"::after")])}function vA(e){return e.parentNode!==document.head&&!~oS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gg(e){if(pn)return new Promise(function(t,n){var r=Fi(e.querySelectorAll("*")).filter(vA).map(yA),i=Rd.begin("searchPseudoElements");O1(),Promise.all(r).then(function(){i(),Mf(),t()}).catch(function(){i(),Mf(),n()})})}var _A={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gg,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?oe:r;O.searchPseudoElements&&gg(i)}}},yg=!1,wA={mixout:function(){return{dom:{unwatch:function(){O1(),yg=!0}}}},hooks:function(){return{bootstrap:function(){fg(bf("mutationObserverCallbacks",{}))},noAuto:function(){nA()},watch:function(n){var r=n.observeMutationsRoot;yg?Mf():fg(bf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vg=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},EA={mixout:function(){return{parse:{transform:function(n){return vg(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vg(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:R({},m.outer),children:[{tag:"g",attributes:R({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),m.path)}]}]}}}},oc={x:0,y:0,width:"100%",height:"100%"};function _g(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function TA(e){return e.tag==="g"?e.children:[e]}var IA={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Yl(i.split(" ").map(function(o){return o.trim()})):xd();return s.prefix||(s.prefix=Un()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,m=ES({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:R(R({},oc),{},{fill:"white"})},y=c.children?{children:c.children.map(_g)}:{},E={tag:"g",attributes:R({},m.inner),children:[_g(R({tag:c.tag,attributes:R(R({},c.attributes),m.path)},y))]},p={tag:"g",attributes:R({},m.outer),children:[E]},d="mask-".concat(a||Zs()),g="clip-".concat(a||Zs()),_={tag:"mask",attributes:R(R({},oc),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:TA(h)},_]};return r.push(T,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},oc)}),{children:r,attributes:i}}}},SA={provides:function(t){var n=!1;zn.matchMedia&&(n=zn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},AA={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},kA=[SS,fA,hA,dA,pA,_A,wA,EA,IA,SA,AA];FS(kA,{mixoutsTo:vt});vt.noAuto;vt.config;vt.library;vt.dom;var $f=vt.parse;vt.findIconDefinition;vt.toHtml;var CA=vt.icon;vt.layer;vt.text;vt.counter;var L1={exports:{}},xA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PA=xA,RA=PA;function M1(){}function $1(){}$1.resetWarningCache=M1;var NA=function(){function e(r,i,s,o,a,l){if(l!==RA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$1,resetWarningCache:M1};return n.PropTypes=n,n};L1.exports=NA();var bA=L1.exports;const H=Ly(bA);function wg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wg(Object(n),!0).forEach(function(r){ii(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hl(e){"@babel/helpers - typeof";return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hl(e)}function ii(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function DA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function OA(e,t){if(e==null)return{};var n=DA(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ff(e){return VA(e)||LA(e)||MA(e)||$A()}function VA(e){if(Array.isArray(e))return jf(e)}function LA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function MA(e,t){if(e){if(typeof e=="string")return jf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jf(e,t)}}function jf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $A(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FA(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,m=e.inverse,v=e.border,y=e.listItem,E=e.flip,p=e.size,d=e.rotation,g=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":m,"fa-border":v,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},ii(t,"fa-".concat(p),typeof p<"u"&&p!==null),ii(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),ii(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ii(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(T){return _[T]?T:null}).filter(function(T){return T})}function jA(e){return e=e-0,e===e}function F1(e){return jA(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var zA=["style"];function UA(e){return e.charAt(0).toUpperCase()+e.slice(1)}function BA(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=F1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[UA(i)]=s:t[i]=s,t},{})}function j1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return j1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=BA(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[F1(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=OA(n,zA);return i.attrs.style=Sn(Sn({},i.attrs.style),o),e.apply(void 0,[t.tag,Sn(Sn({},i.attrs),a)].concat(Ff(r)))}var z1=!1;try{z1=!0}catch{}function HA(){if(!z1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Eg(e){if(e&&hl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($f.icon)return $f.icon(e);if(e===null)return null;if(e&&hl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ac(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ii({},e,t):{}}var ht=Sh.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,s=e.className,o=e.title,a=e.titleId,l=e.maskId,u=Eg(n),c=ac("classes",[].concat(Ff(FA(e)),Ff(s.split(" ")))),f=ac("transform",typeof e.transform=="string"?$f.transform(e.transform):e.transform),h=ac("mask",Eg(r)),m=CA(u,Sn(Sn(Sn(Sn({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return HA("Could not find icon",u),null;var v=m.abstract,y={ref:t};return Object.keys(e).forEach(function(E){ht.defaultProps.hasOwnProperty(E)||(y[E]=e[E])}),WA(v[0],y)});ht.displayName="FontAwesomeIcon";ht.propTypes={beat:H.bool,border:H.bool,beatFade:H.bool,bounce:H.bool,className:H.string,fade:H.bool,flash:H.bool,mask:H.oneOfType([H.object,H.array,H.string]),maskId:H.string,fixedWidth:H.bool,inverse:H.bool,flip:H.oneOf([!0,!1,"horizontal","vertical","both"]),icon:H.oneOfType([H.object,H.array,H.string]),listItem:H.bool,pull:H.oneOf(["right","left"]),pulse:H.bool,rotation:H.oneOf([0,90,180,270]),shake:H.bool,size:H.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:H.bool,spinPulse:H.bool,spinReverse:H.bool,symbol:H.oneOfType([H.bool,H.string]),title:H.string,titleId:H.string,transform:H.oneOfType([H.string,H.object]),swapOpacity:H.bool};ht.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var WA=j1.bind(null,Sh.createElement),bd={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},qA={prefix:"fas",iconName:"money-bill",icon:[576,512,[],"f0d6","M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},U1={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},B1={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},KA={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function GA(){const e=i1(":activeLink");return w.jsx(w.Fragment,{children:w.jsx("div",{className:"sidebar d-none d-md-block",children:w.jsx("div",{className:"side-navbar d-flex flex-column justify-content-between",children:w.jsxs("div",{children:[w.jsxs("div",{className:"justify-content-center fs-3 fw-bold text-light d-flex align-items-center",children:[w.jsx("img",{src:vd,alt:"logo",width:"40",className:"logo"}),w.jsx("span",{children:"SoloBanker"})]}),w.jsx("hr",{}),w.jsxs("ul",{className:"nav nav-pills flex-column mt-3 mb-auto",children:[w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsxs(hi,{to:"/",className:`p-2  ${e?null:"my-link"}`,children:[w.jsx(ht,{icon:B1,className:"pe-2"}),"Home"]})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsxs(hi,{to:"/users",className:`p-2   ${e&&e.pathname=="/users"?"my-link":null}`,children:[w.jsx(ht,{icon:U1,className:"pe-2"})," Users"]})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsxs(hi,{to:"/history",className:`p-2   ${e&&e.pathname=="/history"?"my-link":null} `,children:[w.jsx(ht,{icon:bd,className:"pe-2"})," Transactions History"]})})]})]})})})})}function QA(){const e=i1(":activeLink");return w.jsx(w.Fragment,{children:w.jsx("div",{className:"d-md-none mob-navbar pt-3 pb-3 ps-1 pe-1 navbar sticky-top",children:w.jsxs("div",{className:"d-flex justify-content-evenly align-items-center w-100 ",children:[w.jsxs("div",{className:"justify-content-center fs-3 fw-bold text-light d-flex align-items-center",children:[w.jsx("img",{src:vd,alt:"logo",className:"logo",width:"40"}),w.jsx("span",{children:"SoloBanker"})]}),w.jsxs("ul",{className:"nav nav-pills d-flex mb-auto",children:[w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsx(hi,{to:"/",className:`p-2  ${e?null:"my-link"}`,children:w.jsx(ht,{icon:B1,className:"ps-1 pe-1"})})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsx(hi,{to:"/users",className:`p-2   ${e&&e.pathname=="/users"?"my-link":null}`,children:w.jsx(ht,{icon:U1,className:"ps-1 pe-1"})})}),w.jsx("li",{className:"nav-item ms-2 mb-2 mt-2",children:w.jsx(hi,{to:"/history",className:`p-2   ${e&&e.pathname=="/history"?"my-link":null} `,children:w.jsx(ht,{icon:bd,className:"ps-1 pe-1"})})})]})]})})})}function YA(){return w.jsxs(w.Fragment,{children:[w.jsx(GA,{}),w.jsx(QA,{}),w.jsx(LI,{})]})}const XA="/simple-banking-app/assets/bank-876ce1f7.jpg";function JA(){return w.jsx(w.Fragment,{children:w.jsxs("div",{className:"cont home text-center",children:[w.jsx("header",{className:"d-flex justify-content-center",children:w.jsxs("h1",{className:"fw-bold d-flex align-items-center mt-5 ",children:[w.jsx("img",{src:vd,alt:"logo",width:"80",className:"grey-img"}),w.jsx("span",{children:"SoloBanker"})]})}),w.jsx("div",{className:"slogan",children:"Manage transactions between users smoothly... from home!"}),w.jsx("img",{src:XA,alt:"bank-vector",className:"mt-5 bank-img"}),w.jsxs("div",{className:"info-container",children:[w.jsxs("div",{className:"info d-flex align-items-center pt-4 pb-4",children:[w.jsxs("div",{className:"pe-4",children:[" ","Carry out infinite transactions between registered users, quickly and easily!"]}),w.jsx(ht,{icon:qA,className:"info-icon"})]}),w.jsxs("div",{className:"info d-flex flex-row-reverse align-items-center  pt-4 pb-4",children:[w.jsx("div",{className:"ps-4",children:"Carry out infinite transactions between registered users, quickly and easily!"}),w.jsx(ht,{icon:KA,className:"info-icon"})]}),w.jsxs("div",{className:"info d-flex align-items-center  pt-4 pb-4",children:[w.jsx("div",{className:"pe-4",children:"Carry out infinite transactions between registered users, quickly and easily!"}),w.jsx(ht,{icon:bd,className:"info-icon"})]})]})]})})}function ZA(){return w.jsxs(w.Fragment,{children:[w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"}),w.jsx("h1",{children:"This is the history page"})]})}function ek(){return w.jsx(w.Fragment,{children:w.jsx("h1",{children:"This is the user's profile"})})}/**
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
 */const H1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},tk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},W1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[f],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(H1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new nk;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rk=function(e){const t=H1(e);return W1.encodeByteArray(t,!0)},dl=function(e){return rk(e).replace(/\./g,"")},ik=function(e){try{return W1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function sk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ok=()=>sk().__FIREBASE_DEFAULTS__,ak=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},lk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ik(e[1]);return t&&JSON.parse(t)},q1=()=>{try{return ok()||ak()||lk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},uk=e=>{var t,n;return(n=(t=q1())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ck=e=>{const t=uk(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},K1=()=>{var e;return(e=q1())===null||e===void 0?void 0:e.config};/**
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
 */class fk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function hk(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),a].join(".")}function dk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function G1(){try{return typeof indexedDB=="object"}catch{return!1}}function Q1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function pk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mk="FirebaseError";class Jn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=mk,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jl.prototype.create)}}class Jl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?gk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,a,r)}}function gk(e,t){return e.replace(yk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const yk=/\{\$([^}]+)}/g;function pl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Tg(s)&&Tg(o)){if(!pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tg(e){return e!==null&&typeof e=="object"}/**
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
 */const vk=1e3,_k=2,wk=4*60*60*1e3,Ek=.5;function Ig(e,t=vk,n=_k){const r=t*Math.pow(n,e),i=Math.round(Ek*r*(Math.random()-.5)*2);return Math.min(wk,r+i)}/**
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
 */function Dd(e){return e&&e._delegate?e._delegate:e}class cn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class Tk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new fk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sk(t))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=sr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sr){return this.instances.has(t)}getOptions(t=sr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ik(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=sr){return this.component?this.component.multipleInstances?t:sr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ik(e){return e===sr?void 0:e}function Sk(e){return e.instantiationMode==="EAGER"}/**
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
 */class Ak{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Tk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const kk={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Ck=K.INFO,xk={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Pk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=xk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Od{constructor(t){this.name=t,this._logLevel=Ck,this._logHandler=Pk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Rk=(e,t)=>t.some(n=>e instanceof n);let Sg,Ag;function Nk(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bk(){return Ag||(Ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y1=new WeakMap,zf=new WeakMap,X1=new WeakMap,lc=new WeakMap,Vd=new WeakMap;function Dk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ln(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Y1.set(n,e)}).catch(()=>{}),Vd.set(t,e),t}function Ok(e){if(zf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});zf.set(e,t)}let Uf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||X1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vk(e){Uf=e(Uf)}function Lk(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(uc(this),t,...n);return X1.set(r,t.sort?t.sort():[t]),Ln(r)}:bk().includes(e)?function(...t){return e.apply(uc(this),t),Ln(Y1.get(this))}:function(...t){return Ln(e.apply(uc(this),t))}}function Mk(e){return typeof e=="function"?Lk(e):(e instanceof IDBTransaction&&Ok(e),Rk(e,Nk())?new Proxy(e,Uf):e)}function Ln(e){if(e instanceof IDBRequest)return Dk(e);if(lc.has(e))return lc.get(e);const t=Mk(e);return t!==e&&(lc.set(e,t),Vd.set(t,e)),t}const uc=e=>Vd.get(e);function $k(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Fk=["get","getKey","getAll","getAllKeys","count"],jk=["put","add","delete","clear"],cc=new Map;function kg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cc.get(t))return cc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=jk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return cc.set(t,s),s}Vk(e=>({...e,get:(t,n,r)=>kg(t,n)||e.get(t,n,r),has:(t,n)=>!!kg(t,n)||e.has(t,n)}));/**
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
 */class zk{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Uk(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bf="@firebase/app",Cg="0.9.20";/**
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
 */const Cr=new Od("@firebase/app"),Bk="@firebase/app-compat",Hk="@firebase/analytics-compat",Wk="@firebase/analytics",qk="@firebase/app-check-compat",Kk="@firebase/app-check",Gk="@firebase/auth",Qk="@firebase/auth-compat",Yk="@firebase/database",Xk="@firebase/database-compat",Jk="@firebase/functions",Zk="@firebase/functions-compat",eC="@firebase/installations",tC="@firebase/installations-compat",nC="@firebase/messaging",rC="@firebase/messaging-compat",iC="@firebase/performance",sC="@firebase/performance-compat",oC="@firebase/remote-config",aC="@firebase/remote-config-compat",lC="@firebase/storage",uC="@firebase/storage-compat",cC="@firebase/firestore",fC="@firebase/firestore-compat",hC="firebase",dC="10.5.0";/**
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
 */const Hf="[DEFAULT]",pC={[Bf]:"fire-core",[Bk]:"fire-core-compat",[Wk]:"fire-analytics",[Hk]:"fire-analytics-compat",[Kk]:"fire-app-check",[qk]:"fire-app-check-compat",[Gk]:"fire-auth",[Qk]:"fire-auth-compat",[Yk]:"fire-rtdb",[Xk]:"fire-rtdb-compat",[Jk]:"fire-fn",[Zk]:"fire-fn-compat",[eC]:"fire-iid",[tC]:"fire-iid-compat",[nC]:"fire-fcm",[rC]:"fire-fcm-compat",[iC]:"fire-perf",[sC]:"fire-perf-compat",[oC]:"fire-rc",[aC]:"fire-rc-compat",[lC]:"fire-gcs",[uC]:"fire-gcs-compat",[cC]:"fire-fst",[fC]:"fire-fst-compat","fire-js":"fire-js",[hC]:"fire-js-all"};/**
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
 */const ml=new Map,Wf=new Map;function mC(e,t){try{e.container.addComponent(t)}catch(n){Cr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hn(e){const t=e.name;if(Wf.has(t))return Cr.debug(`There were multiple attempts to register component ${t}.`),!1;Wf.set(t,e);for(const n of ml.values())mC(n,e);return!0}function To(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const gC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new Jl("app","Firebase",gC);/**
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
 */class yC{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const vC=dC;function J1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hf,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=K1()),!n)throw Mn.create("no-options");const s=ml.get(i);if(s){if(pl(n,s.options)&&pl(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const o=new Ak(i);for(const l of Wf.values())o.addComponent(l);const a=new yC(n,r,o);return ml.set(i,a),a}function Z1(e=Hf){const t=ml.get(e);if(!t&&e===Hf&&K1())return J1();if(!t)throw Mn.create("no-app",{appName:e});return t}function qt(e,t,n){var r;let i=(r=pC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}Hn(new cn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const _C="firebase-heartbeat-database",wC=1,eo="firebase-heartbeat-store";let fc=null;function e_(){return fc||(fc=$k(_C,wC,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(eo)}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),fc}async function EC(e){try{return await(await e_()).transaction(eo).objectStore(eo).get(t_(e))}catch(t){if(t instanceof Jn)Cr.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(n.message)}}}async function xg(e,t){try{const r=(await e_()).transaction(eo,"readwrite");await r.objectStore(eo).put(t,t_(e)),await r.done}catch(n){if(n instanceof Jn)Cr.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function t_(e){return`${e.name}!${e.options.appId}`}/**
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
 */const TC=1024,IC=30*24*60*60*1e3;class SC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pg(),{heartbeatsToSend:n,unsentEntries:r}=AC(this._heartbeatsCache.heartbeats),i=dl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pg(){return new Date().toISOString().substring(0,10)}function AC(e,t=TC){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rg(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G1()?Q1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await EC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rg(e){return dl(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function CC(e){Hn(new cn("platform-logger",t=>new zk(t),"PRIVATE")),Hn(new cn("heartbeat",t=>new SC(t),"PRIVATE")),qt(Bf,Cg,e),qt(Bf,Cg,"esm2017"),qt("fire-js","")}CC("");var xC="firebase",PC="10.5.0";/**
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
 */qt(xC,PC,"app");const RC=(e,t)=>t.some(n=>e instanceof n);let Ng,bg;function NC(){return Ng||(Ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bC(){return bg||(bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n_=new WeakMap,qf=new WeakMap,r_=new WeakMap,hc=new WeakMap,Ld=new WeakMap;function DC(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n($n(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&n_.set(n,e)}).catch(()=>{}),Ld.set(t,e),t}function OC(e){if(qf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});qf.set(e,t)}let Kf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||r_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function VC(e){Kf=e(Kf)}function LC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(dc(this),t,...n);return r_.set(r,t.sort?t.sort():[t]),$n(r)}:bC().includes(e)?function(...t){return e.apply(dc(this),t),$n(n_.get(this))}:function(...t){return $n(e.apply(dc(this),t))}}function MC(e){return typeof e=="function"?LC(e):(e instanceof IDBTransaction&&OC(e),RC(e,NC())?new Proxy(e,Kf):e)}function $n(e){if(e instanceof IDBRequest)return DC(e);if(hc.has(e))return hc.get(e);const t=MC(e);return t!==e&&(hc.set(e,t),Ld.set(t,e)),t}const dc=e=>Ld.get(e);function $C(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=$n(o);return r&&o.addEventListener("upgradeneeded",l=>{r($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const FC=["get","getKey","getAll","getAllKeys","count"],jC=["put","add","delete","clear"],pc=new Map;function Dg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(pc.get(t))return pc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=jC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return pc.set(t,s),s}VC(e=>({...e,get:(t,n,r)=>Dg(t,n)||e.get(t,n,r),has:(t,n)=>!!Dg(t,n)||e.has(t,n)}));const i_="@firebase/installations",Md="0.6.4";/**
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
 */const s_=1e4,o_=`w:${Md}`,a_="FIS_v2",zC="https://firebaseinstallations.googleapis.com/v1",UC=60*60*1e3,BC="installations",HC="Installations";/**
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
 */const WC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xr=new Jl(BC,HC,WC);function l_(e){return e instanceof Jn&&e.code.includes("request-failed")}/**
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
 */function u_({projectId:e}){return`${zC}/projects/${e}/installations`}function c_(e){return{token:e.token,requestStatus:2,expiresIn:KC(e.expiresIn),creationTime:Date.now()}}async function f_(e,t){const r=(await t.json()).error;return xr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function h_({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function qC(e,{refreshToken:t}){const n=h_(e);return n.append("Authorization",GC(t)),n}async function d_(e){const t=await e();return t.status>=500&&t.status<600?e():t}function KC(e){return Number(e.replace("s","000"))}function GC(e){return`${a_} ${e}`}/**
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
 */async function QC({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=u_(e),i=h_(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:a_,appId:e.appId,sdkVersion:o_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await d_(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:c_(u.authToken)}}else throw await f_("Create Installation",l)}/**
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
 */function p_(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function YC(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const XC=/^[cdef][\w-]{21}$/,Gf="";function JC(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ZC(e);return XC.test(n)?n:Gf}catch{return Gf}}function ZC(e){return YC(e).substr(0,22)}/**
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
 */function Zl(e){return`${e.appName}!${e.appId}`}/**
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
 */const m_=new Map;function g_(e,t){const n=Zl(e);y_(n,t),ex(n,t)}function y_(e,t){const n=m_.get(e);if(n)for(const r of n)r(t)}function ex(e,t){const n=tx();n&&n.postMessage({key:e,fid:t}),nx()}let fr=null;function tx(){return!fr&&"BroadcastChannel"in self&&(fr=new BroadcastChannel("[Firebase] FID Change"),fr.onmessage=e=>{y_(e.data.key,e.data.fid)}),fr}function nx(){m_.size===0&&fr&&(fr.close(),fr=null)}/**
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
 */const rx="firebase-installations-database",ix=1,Pr="firebase-installations-store";let mc=null;function $d(){return mc||(mc=$C(rx,ix,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pr)}}})),mc}async function gl(e,t){const n=Zl(e),i=(await $d()).transaction(Pr,"readwrite"),s=i.objectStore(Pr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&g_(e,t.fid),t}async function v_(e){const t=Zl(e),r=(await $d()).transaction(Pr,"readwrite");await r.objectStore(Pr).delete(t),await r.done}async function eu(e,t){const n=Zl(e),i=(await $d()).transaction(Pr,"readwrite"),s=i.objectStore(Pr),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&g_(e,a.fid),a}/**
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
 */async function Fd(e){let t;const n=await eu(e.appConfig,r=>{const i=sx(r),s=ox(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Gf?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function sx(e){const t=e||{fid:JC(),registrationStatus:0};return __(t)}function ox(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(xr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ax(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:lx(e)}:{installationEntry:t}}async function ax(e,t){try{const n=await QC(e,t);return gl(e.appConfig,n)}catch(n){throw l_(n)&&n.customData.serverCode===409?await v_(e.appConfig):await gl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function lx(e){let t=await Og(e.appConfig);for(;t.registrationStatus===1;)await p_(100),t=await Og(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Fd(e);return r||n}return t}function Og(e){return eu(e,t=>{if(!t)throw xr.create("installation-not-found");return __(t)})}function __(e){return ux(e)?{fid:e.fid,registrationStatus:0}:e}function ux(e){return e.registrationStatus===1&&e.registrationTime+s_<Date.now()}/**
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
 */async function cx({appConfig:e,heartbeatServiceProvider:t},n){const r=fx(e,n),i=qC(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:o_,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await d_(()=>fetch(r,a));if(l.ok){const u=await l.json();return c_(u)}else throw await f_("Generate Auth Token",l)}function fx(e,{fid:t}){return`${u_(e)}/${t}/authTokens:generate`}/**
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
 */async function jd(e,t=!1){let n;const r=await eu(e.appConfig,s=>{if(!w_(s))throw xr.create("not-registered");const o=s.authToken;if(!t&&px(o))return s;if(o.requestStatus===1)return n=hx(e,t),s;{if(!navigator.onLine)throw xr.create("app-offline");const a=gx(s);return n=dx(e,a),a}});return n?await n:r.authToken}async function hx(e,t){let n=await Vg(e.appConfig);for(;n.authToken.requestStatus===1;)await p_(100),n=await Vg(e.appConfig);const r=n.authToken;return r.requestStatus===0?jd(e,t):r}function Vg(e){return eu(e,t=>{if(!w_(t))throw xr.create("not-registered");const n=t.authToken;return yx(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function dx(e,t){try{const n=await cx(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await gl(e.appConfig,r),n}catch(n){if(l_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await v_(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await gl(e.appConfig,r)}throw n}}function w_(e){return e!==void 0&&e.registrationStatus===2}function px(e){return e.requestStatus===2&&!mx(e)}function mx(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+UC}function gx(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function yx(e){return e.requestStatus===1&&e.requestTime+s_<Date.now()}/**
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
 */async function vx(e){const t=e,{installationEntry:n,registrationPromise:r}=await Fd(t);return r?r.catch(console.error):jd(t).catch(console.error),n.fid}/**
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
 */async function _x(e,t=!1){const n=e;return await wx(n),(await jd(n,t)).token}async function wx(e){const{registrationPromise:t}=await Fd(e);t&&await t}/**
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
 */function Ex(e){if(!e||!e.options)throw gc("App Configuration");if(!e.name)throw gc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function gc(e){return xr.create("missing-app-config-values",{valueName:e})}/**
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
 */const E_="installations",Tx="installations-internal",Ix=e=>{const t=e.getProvider("app").getImmediate(),n=Ex(t),r=To(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sx=e=>{const t=e.getProvider("app").getImmediate(),n=To(t,E_).getImmediate();return{getId:()=>vx(n),getToken:i=>_x(n,i)}};function Ax(){Hn(new cn(E_,Ix,"PUBLIC")),Hn(new cn(Tx,Sx,"PRIVATE"))}Ax();qt(i_,Md);qt(i_,Md,"esm2017");/**
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
 */const yl="analytics",kx="firebase_id",Cx="origin",xx=60*1e3,Px="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zd="https://www.googletagmanager.com/gtag/js";/**
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
 */const at=new Od("@firebase/analytics");/**
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
 */const Rx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new Jl("analytics","Analytics",Rx);/**
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
 */function Nx(e){if(!e.startsWith(zd)){const t=dt.create("invalid-gtag-resource",{gtagURL:e});return at.warn(t.message),""}return e}function T_(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function bx(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Dx(e,t){const n=bx("firebase-js-sdk-policy",{createScriptURL:Nx}),r=document.createElement("script"),i=`${zd}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ox(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Vx(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await T_(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){at.error(a)}e("config",i,s)}async function Lx(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await T_(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){at.error(s)}}function Mx(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Lx(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await Vx(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){at.error(a)}}return i}function $x(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Mx(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Fx(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(zd)&&n.src.includes(e))return n;return null}/**
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
 */const jx=30,zx=1e3;class Ux{constructor(t={},n=zx){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const I_=new Ux;function Bx(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Hx(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Bx(r)},s=Px.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Wx(e,t=I_,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Gx;return setTimeout(async()=>{a.abort()},n!==void 0?n:xx),S_({appId:r,apiKey:i,measurementId:s},o,a,t)}async function S_(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=I_){var s;const{appId:o,measurementId:a}=e;try{await qx(r,t)}catch(l){if(a)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Hx(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Kx(u)){if(i.deleteThrottleMetadata(o),a)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ig(n,i.intervalMillis,jx):Ig(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),at.debug(`Calling attemptFetch again in ${c} millis`),S_(e,f,r,i)}}function qx(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(dt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Kx(e){if(!(e instanceof Jn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Gx{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Qx(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function Yx(){if(G1())try{await Q1()}catch(e){return at.warn(dt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return at.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Xx(e,t,n,r,i,s,o){var a;const l=Wx(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>at.error(m)),t.push(l);const u=Yx().then(m=>{if(m)return r.getId()}),[c,f]=await Promise.all([l,u]);Fx(s)||Dx(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Cx]="firebase",h.update=!0,f!=null&&(h[kx]=f),i("config",c.measurementId,h),c.measurementId}/**
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
 */class Jx{constructor(t){this.app=t}_delete(){return delete As[this.app.options.appId],Promise.resolve()}}let As={},Lg=[];const Mg={};let yc="dataLayer",Zx="gtag",$g,A_,Fg=!1;function eP(){const e=[];if(dk()&&e.push("This is a browser extension environment."),pk()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:t});at.warn(n.message)}}function tP(e,t,n){eP();const r=e.options.appId;if(!r)throw dt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(As[r]!=null)throw dt.create("already-exists",{id:r});if(!Fg){Ox(yc);const{wrappedGtag:s,gtagCore:o}=$x(As,Lg,Mg,yc,Zx);A_=s,$g=o,Fg=!0}return As[r]=Xx(e,Lg,Mg,t,$g,yc,n),new Jx(e)}function nP(e=Z1()){e=Dd(e);const t=To(e,yl);return t.isInitialized()?t.getImmediate():rP(e)}function rP(e,t={}){const n=To(e,yl);if(n.isInitialized()){const i=n.getImmediate();if(pl(t,n.getOptions()))return i;throw dt.create("already-initialized")}return n.initialize({options:t})}function iP(e,t,n,r){e=Dd(e),Qx(A_,As[e.app.options.appId],t,n,r).catch(i=>at.error(i))}const jg="@firebase/analytics",zg="0.10.0";function sP(){Hn(new cn(yl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return tP(r,i,n)},"PUBLIC")),Hn(new cn("analytics-internal",e,"PRIVATE")),qt(jg,zg),qt(jg,zg,"esm2017");function e(t){try{const n=t.getProvider(yl).getImmediate();return{logEvent:(r,i,s)=>iP(n,r,i,s)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}sP();var oP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Ud=Ud||{},$=oP||self;function tu(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Io(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function aP(e){return Object.prototype.hasOwnProperty.call(e,vc)&&e[vc]||(e[vc]=++lP)}var vc="closure_uid_"+(1e9*Math.random()>>>0),lP=0;function uP(e,t,n){return e.call.apply(e.bind,arguments)}function cP(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function qe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=uP:qe=cP,qe.apply(null,arguments)}function ua(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function be(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var fP=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fP!=0)&&aP(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k_=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Bd(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ug(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(tu(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ke(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var hP=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{$.addEventListener("test",()=>{},t),$.removeEventListener("test",()=>{},t)}catch{}return e}();function to(e){return/^[\s\xa0]*$/.test(e)}function nu(){var e=$.navigator;return e&&(e=e.userAgent)?e:""}function Ft(e){return nu().indexOf(e)!=-1}function Hd(e){return Hd[" "](e),e}Hd[" "]=function(){};function dP(e,t){var n=sR;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var pP=Ft("Opera"),Ci=Ft("Trident")||Ft("MSIE"),C_=Ft("Edge"),Qf=C_||Ci,x_=Ft("Gecko")&&!(nu().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),mP=nu().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function P_(){var e=$.document;return e?e.documentMode:void 0}var Yf;e:{var _c="",wc=function(){var e=nu();if(x_)return/rv:([^\);]+)(\)|;)/.exec(e);if(C_)return/Edge\/([\d\.]+)/.exec(e);if(Ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(mP)return/WebKit\/(\S+)/.exec(e);if(pP)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(wc&&(_c=wc?wc[1]:""),Ci){var Ec=P_();if(Ec!=null&&Ec>parseFloat(_c)){Yf=String(Ec);break e}}Yf=_c}var Xf;if($.document&&Ci){var Bg=P_();Xf=Bg||parseInt(Yf,10)||void 0}else Xf=void 0;var gP=Xf;function no(e,t){if(Ke.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(x_){e:{try{Hd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:yP[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&no.$.h.call(this)}}be(no,Ke);var yP={2:"touch",3:"pen",4:"mouse"};no.prototype.h=function(){no.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var So="closure_listenable_"+(1e6*Math.random()|0),vP=0;function _P(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++vP,this.fa=this.ia=!1}function ru(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Wd(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function wP(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function R_(e){const t={};for(const n in e)t[n]=e[n];return t}const Hg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N_(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Hg.length;s++)n=Hg[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function iu(e){this.src=e,this.g={},this.h=0}iu.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Zf(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new _P(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Jf(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=k_(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ru(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Zf(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var qd="closure_lm_"+(1e6*Math.random()|0),Tc={};function b_(e,t,n,r,i){if(r&&r.once)return O_(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)b_(e,t[s],n,r,i);return null}return n=Qd(n),e&&e[So]?e.O(t,n,Io(r)?!!r.capture:!!r,i):D_(e,t,n,!1,r,i)}function D_(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Io(i)?!!i.capture:!!i,a=Gd(e);if(a||(e[qd]=a=new iu(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=EP(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)hP||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(L_(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function EP(){function e(n){return t.call(e.src,e.listener,n)}const t=TP;return e}function O_(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)O_(e,t[s],n,r,i);return null}return n=Qd(n),e&&e[So]?e.P(t,n,Io(r)?!!r.capture:!!r,i):D_(e,t,n,!0,r,i)}function V_(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)V_(e,t[s],n,r,i);else r=Io(r)?!!r.capture:!!r,n=Qd(n),e&&e[So]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Zf(s,n,r,i),-1<n&&(ru(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Gd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zf(t,n,r,i)),(n=-1<e?t[e]:null)&&Kd(n))}function Kd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[So])Jf(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(L_(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Gd(t))?(Jf(n,e),n.h==0&&(n.src=null,t[qd]=null)):ru(e)}}}function L_(e){return e in Tc?Tc[e]:Tc[e]="on"+e}function TP(e,t){if(e.fa)e=!0;else{t=new no(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Kd(e),e=n.call(r,t)}return e}function Gd(e){return e=e[qd],e instanceof iu?e:null}var Ic="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qd(e){return typeof e=="function"?e:(e[Ic]||(e[Ic]=function(t){return e.handleEvent(t)}),e[Ic])}function Ne(){Zn.call(this),this.i=new iu(this),this.S=this,this.J=null}be(Ne,Zn);Ne.prototype[So]=!0;Ne.prototype.removeEventListener=function(e,t,n,r){V_(this,e,t,n,r)};function Me(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ke(t,e);else if(t instanceof Ke)t.target=t.target||e;else{var i=t;t=new Ke(r,e),N_(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ca(o,r,!0,t)&&i}if(o=t.g=e,i=ca(o,r,!0,t)&&i,i=ca(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ca(o,r,!1,t)&&i}Ne.prototype.N=function(){if(Ne.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ru(n[r]);delete e.g[t],e.h--}}this.J=null};Ne.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ne.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ca(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Jf(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yd=$.JSON.stringify;class IP{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function SP(){var e=Xd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class AP{constructor(){this.h=this.g=null}add(t,n){const r=M_.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var M_=new IP(()=>new kP,e=>e.reset());class kP{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function CP(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function xP(e){$.setTimeout(()=>{throw e},0)}let ro,io=!1,Xd=new AP,$_=()=>{const e=$.Promise.resolve(void 0);ro=()=>{e.then(PP)}};var PP=()=>{for(var e;e=SP();){try{e.h.call(e.g)}catch(n){xP(n)}var t=M_;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}io=!1};function su(e,t){Ne.call(this),this.h=e||1,this.g=t||$,this.j=qe(this.qb,this),this.l=Date.now()}be(su,Ne);k=su.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Me(this,"tick"),this.ga&&(Jd(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}k.N=function(){su.$.N.call(this),Jd(this),delete this.g};function Zd(e,t,n){if(typeof e=="function")n&&(e=qe(e,n));else if(e&&typeof e.handleEvent=="function")e=qe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:$.setTimeout(e,t||0)}function F_(e){e.g=Zd(()=>{e.g=null,e.i&&(e.i=!1,F_(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class RP extends Zn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:F_(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function so(e){Zn.call(this),this.h=e,this.g={}}be(so,Zn);var Wg=[];function j_(e,t,n,r){Array.isArray(n)||(n&&(Wg[0]=n.toString()),n=Wg);for(var i=0;i<n.length;i++){var s=b_(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function z_(e){Wd(e.g,function(t,n){this.g.hasOwnProperty(n)&&Kd(t)},e),e.g={}}so.prototype.N=function(){so.$.N.call(this),z_(this)};so.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ou(){this.g=!0}ou.prototype.Ea=function(){this.g=!1};function NP(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function bP(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function si(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+OP(e,n)+(r?" "+r:"")})}function DP(e,t){e.info(function(){return"TIMEOUT: "+t})}ou.prototype.info=function(){};function OP(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yd(n)}catch{return t}}var Mr={},qg=null;function au(){return qg=qg||new Ne}Mr.Ta="serverreachability";function U_(e){Ke.call(this,Mr.Ta,e)}be(U_,Ke);function oo(e){const t=au();Me(t,new U_(t))}Mr.STAT_EVENT="statevent";function B_(e,t){Ke.call(this,Mr.STAT_EVENT,e),this.stat=t}be(B_,Ke);function Je(e){const t=au();Me(t,new B_(t,e))}Mr.Ua="timingevent";function H_(e,t){Ke.call(this,Mr.Ua,e),this.size=t}be(H_,Ke);function Ao(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){e()},t)}var lu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},W_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ep(){}ep.prototype.h=null;function Kg(e){return e.h||(e.h=e.i())}function q_(){}var ko={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tp(){Ke.call(this,"d")}be(tp,Ke);function np(){Ke.call(this,"c")}be(np,Ke);var eh;function uu(){}be(uu,ep);uu.prototype.g=function(){return new XMLHttpRequest};uu.prototype.i=function(){return{}};eh=new uu;function Co(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new so(this),this.P=VP,e=Qf?125:void 0,this.V=new su(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new K_}function K_(){this.i=null,this.g="",this.h=!1}var VP=45e3,th={},vl={};k=Co.prototype;k.setTimeout=function(e){this.P=e};function nh(e,t,n){e.L=1,e.v=fu(fn(t)),e.s=n,e.S=!0,G_(e,null)}function G_(e,t){e.G=Date.now(),xo(e),e.A=fn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),nw(n.i,"t",r),e.C=0,n=e.l.J,e.h=new K_,e.g=Iw(e.l,n?t:null,!e.s),0<e.O&&(e.M=new RP(qe(e.Pa,e,e.g),e.O)),j_(e.U,e.g,"readystatechange",e.nb),t=e.I?R_(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),oo(),NP(e.j,e.u,e.A,e.m,e.W,e.s)}k.nb=function(e){e=e.target;const t=this.M;t&&Ut(e)==3?t.l():this.Pa(e)};k.Pa=function(e){try{if(e==this.g)e:{const c=Ut(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Qf||this.g&&(this.h.h||this.g.ja()||Xg(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?oo(3):oo(2)),cu(this);var n=this.g.da();this.ca=n;t:if(Q_(this)){var r=Xg(this.g);e="";var i=r.length,s=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),ks(this);var o="";break t}this.h.i=new $.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,bP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!to(a)){var u=a;break t}}u=null}if(n=u)si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rh(this,n);else{this.i=!1,this.o=3,Je(12),hr(this),ks(this);break e}}this.S?(Y_(this,c,o),Qf&&this.i&&c==3&&(j_(this.U,this.V,"tick",this.mb),this.V.start())):(si(this.j,this.m,o,null),rh(this,o)),c==4&&hr(this),this.i&&!this.J&&(c==4?_w(this.l,this):(this.i=!1,xo(this)))}else nR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),hr(this),ks(this)}}}catch{}finally{}};function Q_(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Y_(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=LP(e,n),i==vl){t==4&&(e.o=4,Je(14),r=!1),si(e.j,e.m,null,"[Incomplete Response]");break}else if(i==th){e.o=4,Je(15),si(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else si(e.j,e.m,i,null),rh(e,i);Q_(e)&&i!=vl&&i!=th&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Je(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),lp(t),t.M=!0,Je(11))):(si(e.j,e.m,n,"[Invalid Chunked Response]"),hr(e),ks(e))}k.mb=function(){if(this.g){var e=Ut(this.g),t=this.g.ja();this.C<t.length&&(cu(this),Y_(this,e,t),this.i&&e!=4&&xo(this))}};function LP(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?vl:(n=Number(t.substring(n,r)),isNaN(n)?th:(r+=1,r+n>t.length?vl:(t=t.slice(r,r+n),e.C=r+n,t)))}k.cancel=function(){this.J=!0,hr(this)};function xo(e){e.Y=Date.now()+e.P,X_(e,e.P)}function X_(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ao(qe(e.lb,e),t)}function cu(e){e.B&&($.clearTimeout(e.B),e.B=null)}k.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(DP(this.j,this.A),this.L!=2&&(oo(),Je(17)),hr(this),this.o=2,ks(this)):X_(this,this.Y-e)};function ks(e){e.l.H==0||e.J||_w(e.l,e)}function hr(e){cu(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Jd(e.V),z_(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function rh(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ih(n.i,e))){if(!e.K&&ih(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)El(n),mu(n);else break e;ap(n),Je(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ao(qe(n.ib,n),6e3));if(1>=sw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else dr(n,11)}else if((e.K||n.g==e)&&El(n),!to(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rp(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,ie(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Tw(r,r.J?r.pa:null,r.Y),o.K){ow(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(cu(a),xo(a)),r.g=o}else yw(r);0<n.j.length&&gu(n)}else u[0]!="stop"&&u[0]!="close"||dr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?dr(n,7):op(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}oo(4)}catch{}}function MP(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(tu(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function $P(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(tu(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function J_(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(tu(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=$P(e),r=MP(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Z_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FP(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function yr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof yr){this.h=e.h,_l(this,e.j),this.s=e.s,this.g=e.g,wl(this,e.m),this.l=e.l;var t=e.i,n=new ao;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gg(this,n),this.o=e.o}else e&&(t=String(e).match(Z_))?(this.h=!1,_l(this,t[1]||"",!0),this.s=cs(t[2]||""),this.g=cs(t[3]||"",!0),wl(this,t[4]),this.l=cs(t[5]||"",!0),Gg(this,t[6]||"",!0),this.o=cs(t[7]||"")):(this.h=!1,this.i=new ao(null,this.h))}yr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(fs(t,Qg,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(fs(t,Qg,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(fs(n,n.charAt(0)=="/"?UP:zP,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",fs(n,HP)),e.join("")};function fn(e){return new yr(e)}function _l(e,t,n){e.j=n?cs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function wl(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gg(e,t,n){t instanceof ao?(e.i=t,WP(e.i,e.h)):(n||(t=fs(t,BP)),e.i=new ao(t,e.h))}function ie(e,t,n){e.i.set(t,n)}function fu(e){return ie(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function cs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function fs(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,jP),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jP(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Qg=/[#\/\?@]/g,zP=/[#\?:]/g,UP=/[#\?]/g,BP=/[#\?@]/g,HP=/#/g;function ao(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function er(e){e.g||(e.g=new Map,e.h=0,e.i&&FP(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}k=ao.prototype;k.add=function(e,t){er(this),this.i=null,e=ji(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ew(e,t){er(e),t=ji(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tw(e,t){return er(e),t=ji(e,t),e.g.has(t)}k.forEach=function(e,t){er(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};k.ta=function(){er(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};k.Z=function(e){er(this);let t=[];if(typeof e=="string")tw(this,e)&&(t=t.concat(this.g.get(ji(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};k.set=function(e,t){return er(this),this.i=null,e=ji(this,e),tw(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};k.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function nw(e,t,n){ew(e,t),0<n.length&&(e.i=null,e.g.set(ji(e,t),Bd(n)),e.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ji(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function WP(e,t){t&&!e.j&&(er(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ew(this,r),nw(this,i,n))},e)),e.j=t}var qP=class{constructor(e,t){this.g=e,this.map=t}};function rw(e){this.l=e||KP,$.PerformanceNavigationTiming?(e=$.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KP=10;function iw(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function sw(e){return e.h?1:e.g?e.g.size:0}function ih(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function rp(e,t){e.g?e.g.add(t):e.h=t}function ow(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}rw.prototype.cancel=function(){if(this.i=aw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function aw(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Bd(e.i)}var GP=class{stringify(e){return $.JSON.stringify(e,void 0)}parse(e){return $.JSON.parse(e,void 0)}};function QP(){this.g=new GP}function YP(e,t,n){const r=n||"";try{J_(e,function(i,s){let o=i;Io(i)&&(o=Yd(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function XP(e,t){const n=new ou;if($.Image){const r=new Image;r.onload=ua(fa,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ua(fa,n,r,"TestLoadImage: error",!1,t),r.onabort=ua(fa,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ua(fa,n,r,"TestLoadImage: timeout",!1,t),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function fa(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function hu(e){this.l=e.ec||null,this.j=e.ob||!1}be(hu,ep);hu.prototype.g=function(){return new du(this.l,this.j)};hu.prototype.i=function(e){return function(){return e}}({});function du(e,t){Ne.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ip,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(du,Ne);var ip=0;k=du.prototype;k.open=function(e,t){if(this.readyState!=ip)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,lo(this)};k.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||$).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Po(this)),this.readyState=ip};k.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,lo(this)),this.g&&(this.readyState=3,lo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lw(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function lw(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}k.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Po(this):lo(this),this.readyState==3&&lw(this)}};k.Za=function(e){this.g&&(this.response=this.responseText=e,Po(this))};k.Ya=function(e){this.g&&(this.response=e,Po(this))};k.ka=function(){this.g&&Po(this)};function Po(e){e.readyState=4,e.l=null,e.j=null,e.A=null,lo(e)}k.setRequestHeader=function(e,t){this.v.append(e,t)};k.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function lo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var JP=$.JSON.parse;function pe(e){Ne.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=uw,this.L=this.M=!1}be(pe,Ne);var uw="",ZP=/^https?$/i,eR=["POST","PUT"];k=pe.prototype;k.Oa=function(e){this.M=e};k.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():eh.g(),this.C=this.u?Kg(this.u):Kg(eh),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Yg(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&e instanceof $.FormData,!(0<=k_(eR,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hw(this),0<this.B&&((this.L=tR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=Zd(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Yg(this,s)}};function tR(e){return Ci&&typeof e.timeout=="number"&&e.ontimeout!==void 0}k.ua=function(){typeof Ud<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function Yg(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,cw(e),pu(e)}function cw(e){e.F||(e.F=!0,Me(e,"complete"),Me(e,"error"))}k.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Me(this,"complete"),Me(this,"abort"),pu(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pu(this,!0)),pe.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?fw(this):this.kb())};k.kb=function(){fw(this)};function fw(e){if(e.h&&typeof Ud<"u"&&(!e.C[1]||Ut(e)!=4||e.da()!=2)){if(e.v&&Ut(e)==4)Zd(e.La,0,e);else if(Me(e,"readystatechange"),Ut(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Z_)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!ZP.test(i?i.toLowerCase():"")}n=r}if(n)Me(e,"complete"),Me(e,"success");else{e.m=6;try{var s=2<Ut(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",cw(e)}}finally{pu(e)}}}}function pu(e,t){if(e.g){hw(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Me(e,"ready");try{n.onreadystatechange=r}catch{}}}function hw(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&($.clearTimeout(e.A),e.A=null)}k.isActive=function(){return!!this.g};function Ut(e){return e.g?e.g.readyState:0}k.da=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),JP(t)}};function Xg(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case uw:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function nR(e){const t={};e=(e.g&&2<=Ut(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(to(e[r]))continue;var n=CP(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}wP(t,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dw(e){let t="";return Wd(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function sp(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dw(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ie(e,t,n))}function ns(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function pw(e){this.Ga=0,this.j=[],this.l=new ou,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ns("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ns("baseRetryDelayMs",5e3,e),this.hb=ns("retryDelaySeedMs",1e4,e),this.eb=ns("forwardChannelMaxRetries",2,e),this.xa=ns("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new rw(e&&e.concurrentRequestLimit),this.Ja=new QP,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=pw.prototype;k.ra=8;k.H=1;function op(e){if(mw(e),e.H==3){var t=e.W++,n=fn(e.I);if(ie(n,"SID",e.K),ie(n,"RID",t),ie(n,"TYPE","terminate"),Ro(e,n),t=new Co(e,e.l,t),t.L=2,t.v=fu(fn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=t.v,n=!0),n||(t.g=Iw(t.l,null),t.g.ha(t.v)),t.G=Date.now(),xo(t)}Ew(e)}function mu(e){e.g&&(lp(e),e.g.cancel(),e.g=null)}function mw(e){mu(e),e.u&&($.clearTimeout(e.u),e.u=null),El(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&$.clearTimeout(e.m),e.m=null)}function gu(e){if(!iw(e.i)&&!e.m){e.m=!0;var t=e.Na;ro||$_(),io||(ro(),io=!0),Xd.add(t,e),e.C=0}}function rR(e,t){return sw(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ao(qe(e.Na,e,t),ww(e,e.C)),e.C++,!0)}k.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Co(this,this.l,e);let s=this.s;if(this.U&&(s?(s=R_(s),N_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=gw(this,i,t),n=fn(this.I),ie(n,"RID",e),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),Ro(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(dw(s)))+"&"+t:this.o&&sp(n,this.o,s)),rp(this.i,i),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",t),ie(n,"SID","null"),i.aa=!0,nh(i,n,null)):nh(i,n,t),this.H=2}}else this.H==3&&(e?Jg(this,e):this.j.length==0||iw(this.i)||Jg(this))};function Jg(e,t){var n;t?n=t.m:n=e.W++;const r=fn(e.I);ie(r,"SID",e.K),ie(r,"RID",n),ie(r,"AID",e.V),Ro(e,r),e.o&&e.s&&sp(r,e.o,e.s),n=new Co(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=gw(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),rp(e.i,n),nh(n,r,t)}function Ro(e,t){e.na&&Wd(e.na,function(n,r){ie(t,r,n)}),e.h&&J_({},function(n,r){ie(t,r,n)})}function gw(e,t,n){n=Math.min(e.j.length,n);var r=e.h?qe(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{YP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function yw(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ro||$_(),io||(ro(),io=!0),Xd.add(t,e),e.A=0}}function ap(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ao(qe(e.Ma,e),ww(e,e.A)),e.A++,!0)}k.Ma=function(){if(this.u=null,vw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ao(qe(this.jb,this),e)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Je(10),mu(this),vw(this))};function lp(e){e.B!=null&&($.clearTimeout(e.B),e.B=null)}function vw(e){e.g=new Co(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=fn(e.wa);ie(t,"RID","rpc"),ie(t,"SID",e.K),ie(t,"AID",e.V),ie(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ie(t,"TO",e.qa),ie(t,"TYPE","xmlhttp"),Ro(e,t),e.o&&e.s&&sp(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=fu(fn(t)),n.s=null,n.S=!0,G_(n,e)}k.ib=function(){this.v!=null&&(this.v=null,mu(this),ap(this),Je(19))};function El(e){e.v!=null&&($.clearTimeout(e.v),e.v=null)}function _w(e,t){var n=null;if(e.g==t){El(e),lp(e),e.g=null;var r=2}else if(ih(e.i,t))n=t.F,ow(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=au(),Me(r,new H_(r,n)),gu(e)}else yw(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&rR(e,t)||r==2&&ap(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:dr(e,5);break;case 4:dr(e,10);break;case 3:dr(e,6);break;default:dr(e,2)}}}function ww(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function dr(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=qe(e.pb,e);n||(n=new yr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||_l(n,"https"),fu(n)),XP(n.toString(),r)}else Je(2);e.H=0,e.h&&e.h.za(t),Ew(e),mw(e)}k.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Je(2)):(this.l.info("Failed to ping google.com"),Je(1))};function Ew(e){if(e.H=0,e.ma=[],e.h){const t=aw(e.i);(t.length!=0||e.j.length!=0)&&(Ug(e.ma,t),Ug(e.ma,e.j),e.i.i.length=0,Bd(e.j),e.j.length=0),e.h.ya()}}function Tw(e,t,n){var r=n instanceof yr?fn(n):new yr(n);if(r.g!="")t&&(r.g=t+"."+r.g),wl(r,r.m);else{var i=$.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new yr(null);r&&_l(s,r),t&&(s.g=t),i&&wl(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ie(r,n,t),ie(r,"VER",e.ra),Ro(e,r),r}function Iw(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new pe(new hu({ob:!0})):new pe(e.va),t.Oa(e.J),t}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function Sw(){}k=Sw.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function Tl(){if(Ci&&!(10<=Number(gP)))throw Error("Environmental error: no available transport.")}Tl.prototype.g=function(e,t){return new mt(e,t)};function mt(e,t){Ne.call(this),this.g=new pw(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!to(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!to(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new zi(this)}be(mt,Ne);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Je(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Tw(e,null,e.Y),gu(e)};mt.prototype.close=function(){op(this.g)};mt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Yd(e),e=n);t.j.push(new qP(t.fb++,e)),t.H==3&&gu(t)};mt.prototype.N=function(){this.g.h=null,delete this.j,op(this.g),delete this.g,mt.$.N.call(this)};function Aw(e){tp.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}be(Aw,tp);function kw(){np.call(this),this.status=1}be(kw,np);function zi(e){this.g=e}be(zi,Sw);zi.prototype.Ba=function(){Me(this.g,"a")};zi.prototype.Aa=function(e){Me(this.g,new Aw(e))};zi.prototype.za=function(e){Me(this.g,new kw)};zi.prototype.ya=function(){Me(this.g,"b")};function iR(){this.blockSize=-1}function Vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}be(Vt,iR);Vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sc(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Vt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Sc(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Sc(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Sc(this,r),i=0;break}}this.h=i,this.i+=t};Vt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ee(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var sR={};function up(e){return-128<=e&&128>e?dP(e,function(t){return new ee([t|0],0>t?-1:0)}):new ee([e|0],0>e?-1:0)}function Bt(e){if(isNaN(e)||!isFinite(e))return pi;if(0>e)return Ve(Bt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=sh;return new ee(t,0)}function Cw(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ve(Cw(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(t,8)),r=pi,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Bt(Math.pow(t,s)),r=r.R(s).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var sh=4294967296,pi=up(0),oh=up(1),Zg=up(16777216);k=ee.prototype;k.ea=function(){if(Et(this))return-Ve(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:sh+r)*t,t*=sh}return e};k.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(en(this))return"0";if(Et(this))return"-"+Ve(this).toString(e);for(var t=Bt(Math.pow(e,6)),n=this,r="";;){var i=Sl(n,t).g;n=Il(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,en(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function en(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Et(e){return e.h==-1}k.X=function(e){return e=Il(this,e),Et(e)?-1:en(e)?0:1};function Ve(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ee(n,~e.h).add(oh)}k.abs=function(){return Et(this)?Ve(this):this};k.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function Il(e,t){return e.add(Ve(t))}k.R=function(e){if(en(this)||en(e))return pi;if(Et(this))return Et(e)?Ve(this).R(Ve(e)):Ve(Ve(this).R(e));if(Et(e))return Ve(this.R(Ve(e)));if(0>this.X(Zg)&&0>e.X(Zg))return Bt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,ha(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ha(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ha(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ha(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ee(n,0)};function ha(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rs(e,t){this.g=e,this.h=t}function Sl(e,t){if(en(t))throw Error("division by zero");if(en(e))return new rs(pi,pi);if(Et(e))return t=Sl(Ve(e),t),new rs(Ve(t.g),Ve(t.h));if(Et(t))return t=Sl(e,Ve(t)),new rs(Ve(t.g),t.h);if(30<e.g.length){if(Et(e)||Et(t))throw Error("slowDivide_ only works with positive integers.");for(var n=oh,r=t;0>=r.X(e);)n=ey(n),r=ey(r);var i=Fr(n,1),s=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!en(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Fr(r,1),n=Fr(n,1)}return t=Il(e,i.R(t)),new rs(i,t)}for(i=pi;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bt(n),o=s.R(t);Et(o)||0<o.X(e);)n-=r,s=Bt(n),o=s.R(t);en(s)&&(s=oh),i=i.add(s),e=Il(e,o)}return new rs(i,e)}k.gb=function(e){return Sl(this,e).h};k.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ee(n,this.h&e.h)};k.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ee(n,this.h|e.h)};k.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ee(n,this.h^e.h)};function ey(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ee(n,e.h)}function Fr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ee(i,e.h)}Tl.prototype.createWebChannel=Tl.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;lu.NO_ERROR=0;lu.TIMEOUT=8;lu.HTTP_ERROR=6;W_.COMPLETE="complete";q_.EventType=ko;ko.OPEN="a";ko.CLOSE="b";ko.ERROR="c";ko.MESSAGE="d";Ne.prototype.listen=Ne.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;Vt.prototype.digest=Vt.prototype.l;Vt.prototype.reset=Vt.prototype.reset;Vt.prototype.update=Vt.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=Bt;ee.fromString=Cw;var oR=function(){return new Tl},aR=function(){return au()},Ac=lu,lR=W_,uR=Mr,ty={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},da=q_,cR=pe,fR=Vt,mi=ee;const ny="@firebase/firestore";/**
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
 */class Be{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let Ui="10.5.0";/**
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
 */const Rr=new Od("@firebase/firestore");function is(){return Rr.logLevel}function D(e,...t){if(Rr.logLevel<=K.DEBUG){const n=t.map(cp);Rr.debug(`Firestore (${Ui}): ${e}`,...n)}}function hn(e,...t){if(Rr.logLevel<=K.ERROR){const n=t.map(cp);Rr.error(`Firestore (${Ui}): ${e}`,...n)}}function xi(e,...t){if(Rr.logLevel<=K.WARN){const n=t.map(cp);Rr.warn(`Firestore (${Ui}): ${e}`,...n)}}function cp(e){if(typeof e=="string")return e;try{/**
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
 */function z(e="Unexpected state"){const t=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: `+e;throw hn(t),new Error(t)}function Ae(e,t){e||z()}function X(e,t){return e}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Jn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class xw{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class dR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pR{constructor(t){this.t=t,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new xw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ae(t===null||typeof t=="string"),new Be(t)}}class mR{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gR{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new mR(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yR{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vR{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new yR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _R(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wR{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=_R(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function J(e,t){return e<t?-1:e>t?1:0}function Pi(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new lt(0,0))}static max(){return new F(new lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class uo{constructor(t,n,r){n===void 0?n=0:n>t.length&&z(),r===void 0?r=t.length-n:r>t.length-n&&z(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return uo.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof uo?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class de extends uo{construct(t,n,r){return new de(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const ER=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends uo{construct(t,n,r){return new Xe(t,n,r)}static isValidIdentifier(t){return ER.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new L(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(de.fromString(t))}static fromName(t){return new M(de.fromString(t).popFirst(5))}static empty(){return new M(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&de.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return de.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new de(t.slice()))}}function TR(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Wn(i,M.empty(),t)}function IR(e){return new Wn(e.readTime,e.key,-1)}class Wn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(F.min(),M.empty(),-1)}static max(){return new Wn(F.max(),M.empty(),-1)}}function SR(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=M.comparator(e.documentKey,t.documentKey),n!==0?n:J(e.largestBatchId,t.largestBatchId))}/**
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
 */const AR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function fp(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==AR)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):I.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):I.reject(n)}static resolve(t){return new I((n,r)=>{n(t)})}static reject(t){return new I((n,r)=>{r(t)})}static waitFor(t){return new I((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=I.resolve(!1);for(const r of t)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new I((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new I((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function No(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class hp{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}hp.ae=-1;function yu(e){return e==null}function ah(e){return e===0&&1/e==-1/0}/**
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
 */function ry(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function CR(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ve{constructor(t,n){this.comparator=t,this.root=n||Oe.EMPTY}insert(t,n){return new ve(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(t){return new ve(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pa(this.root,t,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pa(this.root,t,this.comparator,!0)}}class pa{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Oe{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Oe(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Oe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(t){this.comparator=t,this.data=new ve(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new iy(this.data.getIterator())}getIteratorFrom(t){return new iy(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof $e)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new $e(this.comparator);return n.data=t,n}}class iy{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class An{constructor(t){this.fields=t,t.sort(Xe.comparator)}static empty(){return new An([])}unionWith(t){let n=new $e(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new An(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Pi(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Pw("Invalid base64 string: "+s):s}}(t);return new Qe(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const xR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(e){if(Ae(!!e),typeof e=="string"){let t=0;const n=xR.exec(e);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:we(e.seconds),nanos:we(e.nanos)}}function we(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Nr(e){return typeof e=="string"?Qe.fromBase64String(e):Qe.fromUint8Array(e)}/**
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
 */function dp(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pp(e){const t=e.mapValue.fields.__previous_value__;return dp(t)?pp(t):t}function co(e){const t=qn(e.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
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
 */class PR{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class fo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?dp(e)?4:RR(e)?9007199254740991:10:z()}function Gt(e,t){if(e===t)return!0;const n=br(e);if(n!==br(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return co(e).isEqual(co(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qn(i.timestampValue),a=qn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Nr(i.bytesValue).isEqual(Nr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?ah(o)===ah(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Pi(e.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ry(o)!==ry(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Gt(o[l],a[l])))return!1;return!0}(e,t);default:return z()}}function ho(e,t){return(e.values||[]).find(n=>Gt(n,t))!==void 0}function Ri(e,t){if(e===t)return 0;const n=br(e),r=br(t);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return sy(e.timestampValue,t.timestampValue);case 4:return sy(co(e),co(t));case 5:return J(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Nr(s),l=Nr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=J(a[u],l[u]);if(c!==0)return c}return J(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=J(we(s.latitude),we(o.latitude));return a!==0?a:J(we(s.longitude),we(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ri(a[u],l[u]);if(c)return c}return J(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ma.mapValue&&o===ma.mapValue)return 0;if(s===ma.mapValue)return 1;if(o===ma.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=J(l[f],c[f]);if(h!==0)return h;const m=Ri(a[l[f]],u[c[f]]);if(m!==0)return m}return J(l.length,c.length)}(e.mapValue,t.mapValue);default:throw z()}}function sy(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return J(e,t);const n=qn(e),r=qn(t),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Ni(e){return lh(e)}function lh(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=qn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Nr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return M.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=lh(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${lh(n.fields[o])}`;return i+"}"}(e.mapValue):z()}function uh(e){return!!e&&"integerValue"in e}function mp(e){return!!e&&"arrayValue"in e}function oy(e){return!!e&&"nullValue"in e}function ay(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function kc(e){return!!e&&"mapValue"in e}function Cs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vu(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Cs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Cs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function RR(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!kc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cs(n)}setAll(t){let n=Xe.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Cs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];kc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){vu(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new jt(Cs(this.value))}}/**
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
 */class We{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new We(t,0,F.min(),F.min(),F.min(),jt.empty(),0)}static newFoundDocument(t,n,r,i){return new We(t,1,n,F.min(),r,i,0)}static newNoDocument(t,n){return new We(t,2,n,F.min(),F.min(),jt.empty(),0)}static newUnknownDocument(t,n){return new We(t,3,n,F.min(),F.min(),jt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof We&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Al{constructor(t,n){this.position=t,this.inclusive=n}}function ly(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Ri(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function uy(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Gt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class kl{constructor(t,n="asc"){this.field=t,this.dir=n}}function NR(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Rw{}class Ie extends Rw{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new DR(t,n,r):n==="array-contains"?new LR(t,r):n==="in"?new MR(t,r):n==="not-in"?new $R(t,r):n==="array-contains-any"?new FR(t,r):new Ie(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new OR(t,r):new VR(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ri(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Ri(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends Rw{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Qt(t,n)}matches(t){return Nw(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Nw(e){return e.op==="and"}function bw(e){return bR(e)&&Nw(e)}function bR(e){for(const t of e.filters)if(t instanceof Qt)return!1;return!0}function ch(e){if(e instanceof Ie)return e.field.canonicalString()+e.op.toString()+Ni(e.value);if(bw(e))return e.filters.map(t=>ch(t)).join(",");{const t=e.filters.map(n=>ch(n)).join(",");return`${e.op}(${t})`}}function Dw(e,t){return e instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.field.isEqual(i.field)&&Gt(r.value,i.value)}(e,t):e instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Dw(o,i.filters[a]),!0):!1}(e,t):void z()}function Ow(e){return e instanceof Ie?function(n){return`${n.field.canonicalString()} ${n.op} ${Ni(n.value)}`}(e):e instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(Ow).join(" ,")+"}"}(e):"Filter"}class DR extends Ie{constructor(t,n,r){super(t,n,r),this.key=M.fromName(r.referenceValue)}matches(t){const n=M.comparator(t.key,this.key);return this.matchesComparison(n)}}class OR extends Ie{constructor(t,n){super(t,"in",n),this.keys=Vw("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class VR extends Ie{constructor(t,n){super(t,"not-in",n),this.keys=Vw("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Vw(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class LR extends Ie{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return mp(n)&&ho(n.arrayValue,this.value)}}class MR extends Ie{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class $R extends Ie{constructor(t,n){super(t,"not-in",n)}matches(t){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class FR extends Ie{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!mp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
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
 */class jR{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function cy(e,t=null,n=[],r=[],i=null,s=null,o=null){return new jR(e,t,n,r,i,s,o)}function gp(e){const t=X(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ch(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yu(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Ni(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Ni(r)).join(",")),t.le=n}return t.le}function yp(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!NR(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Dw(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!uy(e.startAt,t.startAt)&&uy(e.endAt,t.endAt)}function fh(e){return M.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class _u{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function zR(e,t,n,r,i,s,o,a){return new _u(e,t,n,r,i,s,o,a)}function Lw(e){return new _u(e)}function fy(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function UR(e){return e.collectionGroup!==null}function xs(e){const t=X(e);if(t.he===null){t.he=[];const n=new Set;for(const s of t.explicitOrderBy)t.he.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $e(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.he.push(new kl(s,r))}),n.has(Xe.keyField().canonicalString())||t.he.push(new kl(Xe.keyField(),r))}return t.he}function Kt(e){const t=X(e);return t.Pe||(t.Pe=BR(t,xs(e))),t.Pe}function BR(e,t){if(e.limitType==="F")return cy(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new kl(i.field,s)});const n=e.endAt?new Al(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Al(e.startAt.position,e.startAt.inclusive):null;return cy(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function hh(e,t,n){return new _u(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wu(e,t){return yp(Kt(e),Kt(t))&&e.limitType===t.limitType}function Mw(e){return`${gp(Kt(e))}|lt:${e.limitType}`}function zr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ow(i)).join(", ")}]`),yu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ni(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ni(i)).join(",")),`Target(${r})`}(Kt(e))}; limitType=${e.limitType})`}function Eu(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=ly(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,xs(r),i)||r.endAt&&!function(o,a,l){const u=ly(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,xs(r),i))}(e,t)}function HR(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function $w(e){return(t,n)=>{let r=!1;for(const i of xs(e)){const s=WR(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WR(e,t,n){const r=e.field.isKeyField()?M.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ri(l,u):z()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class Bi{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){vu(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return CR(this.inner)}size(){return this.innerSize}}/**
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
 */const qR=new ve(M.comparator);function Kn(){return qR}const Fw=new ve(M.comparator);function hs(...e){let t=Fw;for(const n of e)t=t.insert(n.key,n);return t}function KR(e){let t=Fw;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function pr(){return Ps()}function jw(){return Ps()}function Ps(){return new Bi(e=>e.toString(),(e,t)=>e.isEqual(t))}const GR=new $e(M.comparator);function G(...e){let t=GR;for(const n of e)t=t.add(n);return t}const QR=new $e(J);function YR(){return QR}/**
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
 */function XR(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ah(t)?"-0":t}}function JR(e){return{integerValue:""+e}}/**
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
 */class Tu{constructor(){this._=void 0}}function ZR(e,t,n){return e instanceof dh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&dp(s)&&(s=pp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Cl?zw(e,t):e instanceof xl?Uw(e,t):function(i,s){const o=t4(i,s),a=hy(o)+hy(i.Te);return uh(o)&&uh(i.Te)?JR(a):XR(i.serializer,a)}(e,t)}function e4(e,t,n){return e instanceof Cl?zw(e,t):e instanceof xl?Uw(e,t):n}function t4(e,t){return e instanceof ph?function(r){return uh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class dh extends Tu{}class Cl extends Tu{constructor(t){super(),this.elements=t}}function zw(e,t){const n=Bw(t);for(const r of e.elements)n.some(i=>Gt(i,r))||n.push(r);return{arrayValue:{values:n}}}class xl extends Tu{constructor(t){super(),this.elements=t}}function Uw(e,t){let n=Bw(t);for(const r of e.elements)n=n.filter(i=>!Gt(i,r));return{arrayValue:{values:n}}}class ph extends Tu{constructor(t,n){super(),this.serializer=t,this.Te=n}}function hy(e){return we(e.integerValue||e.doubleValue)}function Bw(e){return mp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function n4(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Cl&&i instanceof Cl||r instanceof xl&&i instanceof xl?Pi(r.elements,i.elements,Gt):r instanceof ph&&i instanceof ph?Gt(r.Te,i.Te):r instanceof dh&&i instanceof dh}(e.transform,t.transform)}class _r{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new _r}static exists(t){return new _r(void 0,t)}static updateTime(t){return new _r(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ba(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class vp{}function Hw(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new i4(e.key,_r.none()):new _p(e.key,e.data,_r.none());{const n=e.data,r=jt.empty();let i=new $e(Xe.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Iu(e.key,r,new An(i.toArray()),_r.none())}}function r4(e,t,n){e instanceof _p?function(i,s,o){const a=i.value.clone(),l=py(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Iu?function(i,s,o){if(!ba(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=py(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ww(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Rs(e,t,n,r){return e instanceof _p?function(s,o,a,l){if(!ba(s.precondition,o))return a;const u=s.value.clone(),c=my(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Iu?function(s,o,a,l){if(!ba(s.precondition,o))return a;const u=my(s.fieldTransforms,l,o),c=o.data;return c.setAll(Ww(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(s,o,a){return ba(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function dy(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pi(r,i,(s,o)=>n4(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _p extends vp{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Iu extends vp{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ww(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function py(e,t,n){const r=new Map;Ae(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,e4(o,a,n[i]))}return r}function my(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZR(s,o,t))}return r}class i4 extends vp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class s4{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&r4(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Rs(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Rs(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=jw();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Hw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),G())}isEqual(t){return this.batchId===t.batchId&&Pi(this.mutations,t.mutations,(n,r)=>dy(n,r))&&Pi(this.baseMutations,t.baseMutations,(n,r)=>dy(n,r))}}/**
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
 */class o4{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class a4{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var _e,q;function qw(e){if(e===void 0)return hn("GRPC error has no .code"),A.UNKNOWN;switch(e){case _e.OK:return A.OK;case _e.CANCELLED:return A.CANCELLED;case _e.UNKNOWN:return A.UNKNOWN;case _e.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case _e.INTERNAL:return A.INTERNAL;case _e.UNAVAILABLE:return A.UNAVAILABLE;case _e.UNAUTHENTICATED:return A.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case _e.NOT_FOUND:return A.NOT_FOUND;case _e.ALREADY_EXISTS:return A.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return A.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case _e.ABORTED:return A.ABORTED;case _e.OUT_OF_RANGE:return A.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return A.UNIMPLEMENTED;case _e.DATA_LOSS:return A.DATA_LOSS;default:return z()}}(q=_e||(_e={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function l4(){return new TextEncoder}/**
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
 */const u4=new mi([4294967295,4294967295],0);function gy(e){const t=l4().encode(e),n=new fR;return n.update(t),new Uint8Array(n.digest())}function yy(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new mi([n,r],0),new mi([i,s],0)]}class wp{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ds(`Invalid padding: ${n}`);if(r<0)throw new ds(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ds(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=mi.fromNumber(this.Ee)}Ae(t,n,r){let i=t.add(n.multiply(mi.fromNumber(r)));return i.compare(u4)===1&&(i=new mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ee===0)return!1;const n=gy(t),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new wp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ee===0)return;const n=gy(t),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Su{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,bo.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Su(F.min(),i,new ve(J),Kn(),G())}}class bo{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new bo(r,n,G(),G(),G())}}/**
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
 */class Da{constructor(t,n,r,i){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=i}}class Kw{constructor(t,n){this.targetId=t,this.ge=n}}class Gw{constructor(t,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vy{constructor(){this.pe=0,this.ye=wy(),this.we=Qe.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=G(),n=G(),r=G();return this.ye.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new bo(this.we,this.Se,t,n,r)}Me(){this.be=!1,this.ye=wy()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class c4{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Kn(),this.Ke=_y(),this.$e=new ve(J)}Ue(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.We(n,t.fe):this.Ge(n,t.key,t.fe);for(const n of t.removedTargetIds)this.Ge(n,t.key,t.fe)}ze(t){this.forEachTarget(t,n=>{const r=this.je(n);switch(t.state){case 0:this.He(n)&&r.ve(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(t.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(t.resumeToken));break;default:z()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.He(i)&&n(i)})}Ye(t){const n=t.targetId,r=t.ge.count,i=this.Ze(n);if(i){const s=i.target;if(fh(s))if(r===0){const o=new M(s.path);this.Ge(n,o,We.newNoDocument(o,F.min()))}else Ae(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(t),l=a?this.tt(a,t,o):1;if(l!==0){this.Je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,u)}}}}}et(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Nr(r).toUint8Array()}catch(l){if(l instanceof Pw)return xi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new wp(o,i,s)}catch(l){return xi(l instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(t,n,r){return n.ge.count===r-this.it(t,n.targetId)?0:2}it(t,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ge(n,s,null),i++)}),i}st(t){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Ze(o);if(a){if(s.current&&fh(a.target)){const l=new M(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,We.newNoDocument(l,t))}s.Ce&&(n.set(o,s.Fe()),s.Me())}});let r=G();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ze(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(t));const i=new Su(t,n,this.$e,this.Qe,r);return this.Qe=Kn(),this.Ke=_y(),this.$e=new ve(J),i}We(t,n){if(!this.He(t))return;const r=this.ot(t,n.key)?2:0;this.je(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(t))}Ge(t,n,r){if(!this.He(t))return;const i=this.je(t);this.ot(t,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}Xe(t){const n=this.je(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.je(t).Ne()}je(t){let n=this.qe.get(t);return n||(n=new vy,this.qe.set(t,n)),n}_t(t){let n=this.Ke.get(t);return n||(n=new $e(J),this.Ke=this.Ke.insert(t,n)),n}He(t){const n=this.Ze(t)!==null;return n||D("WatchChangeAggregator","Detected inactive target",t),n}Ze(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.ut(t)}Je(t){this.qe.set(t,new vy),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.Ge(t,n,null)})}ot(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function _y(){return new ve(M.comparator)}function wy(){return new ve(M.comparator)}const f4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),h4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),d4=(()=>({and:"AND",or:"OR"}))();class p4{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function mh(e,t){return e.useProto3Json||yu(t)?t:{value:t}}function m4(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function g4(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function gi(e){return Ae(!!e),F.fromTimestamp(function(n){const r=qn(n);return new lt(r.seconds,r.nanos)}(e))}function y4(e,t){return function(r){return new de(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Qw(e){const t=de.fromString(e);return Ae(Zw(t)),t}function Cc(e,t){const n=Qw(t);if(n.get(1)!==e.databaseId.projectId)throw new L(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new M(Yw(n))}function gh(e,t){return y4(e.databaseId,t)}function v4(e){const t=Qw(e);return t.length===4?de.emptyPath():Yw(t)}function Ey(e){return new de(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Yw(e){return Ae(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _4(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ae(c===void 0||typeof c=="string"),Qe.fromBase64String(c||"")):(Ae(c===void 0||c instanceof Uint8Array),Qe.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:qw(u.code);return new L(c,u.message||"")}(o);n=new Gw(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cc(e,r.document.name),s=gi(r.document.updateTime),o=r.document.createTime?gi(r.document.createTime):F.min(),a=new jt({mapValue:{fields:r.document.fields}}),l=We.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Da(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Cc(e,r.document),s=r.readTime?gi(r.readTime):F.min(),o=We.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Da([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Cc(e,r.document),s=r.removedTargetIds||[];n=new Da([],s,i,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new a4(i,s),a=r.targetId;n=new Kw(a,o)}}return n}function w4(e,t){return{documents:[gh(e,t.path)]}}function E4(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=gh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=gh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Jw(Qt.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Ur(f.field),direction:S4(f.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=mh(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function T4(e){let t=v4(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=Xw(f);return h instanceof Qt&&bw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(v){return new kl(Br(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,yu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,m=f.values||[];return new Al(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,m=f.values||[];return new Al(m,h)}(n.endAt)),zR(t,i,o,s,a,"F",l,u)}function I4(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Xw(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Br(n.unaryFilter.field);return Ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Br(n.unaryFilter.field);return Ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(n.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(e):e.fieldFilter!==void 0?function(n){return Ie.create(Br(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>Xw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(e):z()}function S4(e){return f4[e]}function A4(e){return h4[e]}function k4(e){return d4[e]}function Ur(e){return{fieldPath:e.canonicalString()}}function Br(e){return Xe.fromServerFormat(e.fieldPath)}function Jw(e){return e instanceof Ie?function(n){if(n.op==="=="){if(ay(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(oy(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ay(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(oy(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:A4(n.op),value:n.value}}}(e):e instanceof Qt?function(n){const r=n.getFilters().map(i=>Jw(i));return r.length===1?r[0]:{compositeFilter:{op:k4(n.op),filters:r}}}(e):z()}function Zw(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class kn{constructor(t,n,r,i,s=F.min(),o=F.min(),a=Qe.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new kn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class C4{constructor(t){this.ct=t}}function x4(e){const t=T4({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?hh(t,t.limit,"L"):t}/**
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
 */class P4{constructor(){this._n=new R4}addToCollectionParentIndex(t,n){return this._n.add(n),I.resolve()}getCollectionParents(t,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return I.resolve()}deleteFieldIndex(t,n){return I.resolve()}deleteAllFieldIndexes(t){return I.resolve()}createTargetIndexes(t,n){return I.resolve()}getDocumentsMatchingTarget(t,n){return I.resolve(null)}getIndexType(t,n){return I.resolve(0)}getFieldIndexes(t,n){return I.resolve([])}getNextCollectionGroupToUpdate(t){return I.resolve(null)}getMinOffset(t,n){return I.resolve(Wn.min())}getMinOffsetFromCollectionGroup(t,n){return I.resolve(Wn.min())}updateCollectionGroup(t,n,r){return I.resolve()}updateIndexEntries(t,n){return I.resolve()}}class R4{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new $e(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new $e(de.comparator)).toArray()}}/**
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
 */class bi{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new bi(0)}static Bn(){return new bi(-1)}}/**
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
 */class N4{constructor(){this.changes=new Bi(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,We.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class b4{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class D4{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Rs(r.mutation,i,An.empty(),lt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,G()).next(()=>r))}getLocalViewOfDocuments(t,n,r=G()){const i=pr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=hs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=pr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,G()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Kn();const o=Ps(),a=function(){return Ps()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Iu)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Rs(c.mutation,u,c.mutation.getFieldMask(),lt.now())):o.set(u.key,An.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new b4(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ps();let i=new ve((o,a)=>o-a),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||An.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||G()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=jw();c.forEach(h=>{if(!s.has(h)){const m=Hw(n.get(h),r.get(h));m!==null&&f.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):UR(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):I.resolve(pr());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,G())).next(c=>({batchId:a,changes:KR(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new M(n)).next(r=>{let i=hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=hs();return this.indexManager.getCollectionParents(t,s).next(a=>I.forEach(a,l=>{const u=function(f,h){return new _u(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,We.newInvalidDocument(c)))});let a=hs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Rs(c.mutation,u,An.empty(),lt.now()),Eu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class O4{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gi(i.createTime)}}(n)),I.resolve()}getNamedQuery(t,n){return I.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:x4(i.bundledQuery),readTime:gi(i.readTime)}}(n)),I.resolve()}}/**
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
 */class V4{constructor(){this.overlays=new ve(M.comparator),this.hr=new Map}getOverlay(t,n){return I.resolve(this.overlays.get(n))}getOverlays(t,n){const r=pr();return I.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),I.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(t,n,r){const i=pr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=pr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=pr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new o4(n,r));let s=this.hr.get(n);s===void 0&&(s=G(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Ep{constructor(){this.Pr=new $e(xe.Ir),this.Tr=new $e(xe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new xe(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new xe(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new M(new de([])),r=new xe(n,t),i=new xe(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new M(new de([])),r=new xe(n,t),i=new xe(n,t+1);let s=G();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new xe(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class xe{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return M.comparator(t.key,n.key)||J(t.pr,n.pr)}static Er(t,n){return J(t.pr,n.pr)||M.comparator(t.key,n.key)}}/**
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
 */class L4{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new $e(xe.Ir)}checkEmpty(t){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new xe(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(t,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new $e(J);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new xe(new M(s),0);let a=new $e(J);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Ae(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new xe(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,I.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class M4{constructor(t){this.vr=t,this.docs=function(){return new ve(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(t,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Kn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||SR(IR(c),r)<=0||(i.has(c.key)||Eu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(t,n,r,i){z()}Fr(t,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new $4(this)}getSize(t){return I.resolve(this.size)}}class $4 extends N4{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class F4{constructor(t){this.persistence=t,this.Mr=new Bi(n=>gp(n),yp),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ep,this.targetCount=0,this.Br=bi.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(t){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return I.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new bi(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(t,n){return this.qn(n),I.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(t){return I.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(t,n){return I.resolve(this.Nr.containsKey(n))}}/**
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
 */class j4{constructor(t,n){this.Lr={},this.overlays={},this.kr=new hp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new F4(this),this.indexManager=new P4,this.remoteDocumentCache=function(i){return new M4(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new C4(n),this.$r=new O4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new V4,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new L4(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){D("MemoryPersistence","Starting transaction:",t);const i=new z4(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class z4 extends kR{constructor(t){super(),this.currentSequenceNumber=t}}class Tp{constructor(t){this.persistence=t,this.zr=new Ep,this.jr=null}static Hr(t){return new Tp(t)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const i=M.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class Ip{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=G(),i=G();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ip(t,n.fromCache,r,i)}}/**
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
 */class U4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class B4{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new U4;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(is()<=K.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(is()<=K.DEBUG&&D("QueryEngine","Query:",zr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(is()<=K.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(n))):I.resolve())}ji(t,n){if(fy(n))return I.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hh(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=G(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(t,hh(n,null,"F")):this.es(t,u,n,l)}))})))}Hi(t,n,r,i){return fy(n)||i.isEqual(F.min())?I.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(is()<=K.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zr(n)),this.es(t,o,n,TR(i,-1)).next(a=>a))})}Zi(t,n){let r=new $e($w(t));return n.forEach((i,s)=>{Eu(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return is()<=K.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",zr(n)),this.zi.getDocumentsMatchingQuery(t,n,Wn.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class H4{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new ve(J),this.rs=new Bi(s=>gp(s),yp),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new D4(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function W4(e,t,n,r){return new H4(e,t,n,r)}async function eE(e,t){const n=X(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=G();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function tE(e){const t=X(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function q4(e,t){const n=X(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,f)));let m=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(Qe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(f,m),function(y,E,p){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=Kn(),u=G();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(K4(s,o,t.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(F.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function K4(e,t,n){let r=G(),i=G();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Kn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function G4(e,t){const n=X(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new kn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function yh(e,t,n){const r=X(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!No(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Ty(e,t,n){const r=X(e);let i=F.min(),s=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=X(l),h=f.rs.get(c);return h!==void 0?I.resolve(f.ns.get(h)):f.Qr.getTargetData(u,c)}(r,o,Kt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:F.min(),n?s:G())).next(a=>(Q4(r,HR(t),a),{documents:a,hs:s})))}function Q4(e,t,n){let r=e.ss.get(t)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class Iy{constructor(){this.activeTargetIds=YR()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Y4{constructor(){this.no=new Iy,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Iy,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class X4{io(t){}shutdown(){}}/**
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
 */class Sy{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ga=null;function xc(){return ga===null?ga=function(){return 268435456+Math.round(2147483648*Math.random())}():ga++,"0x"+ga.toString(16)}/**
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
 */const J4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Z4{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Ue="WebChannelConnection";class eN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=xc(),l=this.bo(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw xi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ui}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=J4[n];return`${this.fo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=xc();return new Promise((o,a)=>{const l=new cR;l.setWithCredentials(!0),l.listenOnce(lR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ac.NO_ERROR:const c=l.getResponseJson();D(Ue,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ac.TIMEOUT:D(Ue,`RPC '${t}' ${s} timed out`),a(new L(A.DEADLINE_EXCEEDED,"Request time out"));break;case Ac.HTTP_ERROR:const f=l.getStatus();if(D(Ue,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const v=function(E){const p=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(p)>=0?p:A.UNKNOWN}(m.status);a(new L(v,m.message))}else a(new L(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(A.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{D(Ue,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);D(Ue,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(t,n,r){const i=xc(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=oR(),a=aR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(Ue,`Creating RPC '${t}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,m=!1;const v=new Z4({lo:E=>{m?D(Ue,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(h||(D(Ue,`Opening RPC '${t}' stream ${i} transport.`),f.open(),h=!0),D(Ue,`RPC '${t}' stream ${i} sending:`,E),f.send(E))},ho:()=>f.close()}),y=(E,p,d)=>{E.listen(p,g=>{try{d(g)}catch(_){setTimeout(()=>{throw _},0)}})};return y(f,da.EventType.OPEN,()=>{m||D(Ue,`RPC '${t}' stream ${i} transport opened.`)}),y(f,da.EventType.CLOSE,()=>{m||(m=!0,D(Ue,`RPC '${t}' stream ${i} transport closed`),v.Vo())}),y(f,da.EventType.ERROR,E=>{m||(m=!0,xi(Ue,`RPC '${t}' stream ${i} transport errored:`,E),v.Vo(new L(A.UNAVAILABLE,"The operation could not be completed")))}),y(f,da.EventType.MESSAGE,E=>{var p;if(!m){const d=E.data[0];Ae(!!d);const g=d,_=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(_){D(Ue,`RPC '${t}' stream ${i} received error:`,_);const T=_.status;let C=function(Y){const U=_e[Y];if(U!==void 0)return qw(U)}(T),P=_.message;C===void 0&&(C=A.INTERNAL,P="Unknown error status: "+T+" with message "+_.message),m=!0,v.Vo(new L(C,P)),f.close()}else D(Ue,`RPC '${t}' stream ${i} received:`,d),v.mo(d)}}),y(a,uR.STAT_EVENT,E=>{E.stat===ty.PROXY?D(Ue,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===ty.NOPROXY&&D(Ue,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function Pc(){return typeof document<"u"?document:null}/**
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
 */function nE(e){return new p4(e,!0)}/**
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
 */class rE{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class tN{constructor(t,n,r,i,s,o,a,l){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new rE(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(hn(n.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new L(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nN extends tN{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=_4(this.serializer,t),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?gi(o.readTime):F.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Ey(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=fh(l)?{documents:w4(s,l)}:{query:E4(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=g4(s,o.resumeToken);const u=mh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=m4(s,o.snapshotVersion.toTimestamp());const u=mh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=I4(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Ey(this.serializer),n.removeTarget=t,this.t_(n)}}/**
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
 */class rN extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new L(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(A.UNKNOWN,i.toString())})}vo(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(A.UNKNOWN,s.toString())})}terminate(){this.A_=!0}}class iN{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(hn(n),this.g_=!1):D("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class sN{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Oo(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=X(l);u.v_.add(4),await Do(u),u.x_.set("Unknown"),u.v_.delete(4),await Au(u)}(this))})}),this.x_=new iN(r,i)}}async function Au(e){if(Oo(e))for(const t of e.F_)await t(!0)}async function Do(e){for(const t of e.F_)await t(!1)}function iE(e,t){const n=X(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),kp(n)?Ap(n):Hi(n).Jo()&&Sp(n,t))}function sE(e,t){const n=X(e),r=Hi(n);n.C_.delete(t),r.Jo()&&oE(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Oo(n)&&n.x_.set("Unknown"))}function Sp(e,t){if(e.O_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Hi(e).c_(t)}function oE(e,t){e.O_.Ne(t),Hi(e).l_(t)}function Ap(e){e.O_=new c4({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.C_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Hi(e).start(),e.x_.p_()}function kp(e){return Oo(e)&&!Hi(e).Ho()&&e.C_.size>0}function Oo(e){return X(e).v_.size===0}function aE(e){e.O_=void 0}async function oN(e){e.C_.forEach((t,n)=>{Sp(e,t)})}async function aN(e,t){aE(e),kp(e)?(e.x_.S_(t),Ap(e)):e.x_.set("Unknown")}async function lN(e,t,n){if(e.x_.set("Online"),t instanceof Gw&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ay(e,r)}else if(t instanceof Da?e.O_.Ue(t):t instanceof Kw?e.O_.Ye(t):e.O_.ze(t),!n.isEqual(F.min()))try{const r=await tE(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),oE(s,l);const f=new kn(c.target,l,u,c.sequenceNumber);Sp(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Ay(e,r)}}async function Ay(e,t,n){if(!No(t))throw t;e.v_.add(1),await Do(e),e.x_.set("Offline"),n||(n=()=>tE(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Au(e)})}async function ky(e,t){const n=X(e);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Oo(n);n.v_.add(3),await Do(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Au(n)}async function uN(e,t){const n=X(e);t?(n.v_.delete(2),await Au(n)):t||(n.v_.add(2),await Do(n),n.x_.set("Unknown"))}function Hi(e){return e.N_||(e.N_=function(n,r,i){const s=X(n);return s.R_(),new nN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:oN.bind(null,e),To:aN.bind(null,e),u_:lN.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),kp(e)?Ap(e):e.x_.set("Unknown")):(await e.N_.stop(),aE(e))})),e.N_}/**
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
 */class Cp{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Cp(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lE(e,t){if(hn("AsyncQueue",`${t}: ${e}`),No(e))return new L(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class yi{constructor(t){this.comparator=t?(n,r)=>t(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=hs(),this.sortedSet=new ve(this.comparator)}static emptySet(t){return new yi(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof yi)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Cy{constructor(){this.L_=new ve(M.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):z():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Di{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Di(t,n,yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class cN{constructor(){this.q_=void 0,this.listeners=[]}}class fN{constructor(){this.queries=new Bi(t=>Mw(t),wu),this.onlineState="Unknown",this.Q_=new Set}}async function hN(e,t){const n=X(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new cN),i)try{s.q_=await n.onListen(r)}catch(o){const a=lE(o,`Initialization of query '${zr(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.K_(n.onlineState),s.q_&&t.U_(s.q_)&&xp(n)}async function dN(e,t){const n=X(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pN(e,t){const n=X(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.U_(i)&&(r=!0);o.q_=i}}r&&xp(n)}function mN(e,t,n){const r=X(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function xp(e){e.Q_.forEach(t=>{t.next()})}class gN{constructor(t,n,r){this.query=t,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Di(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.G_?this.j_(t)&&(this.W_.next(t),n=!0):this.H_(t,this.onlineState)&&(this.J_(t),n=!0),this.z_=t,n}onError(t){this.W_.error(t)}K_(t){this.onlineState=t;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,t)&&(this.J_(this.z_),n=!0),n}H_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}j_(t){if(t.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(t){t=Di.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.G_=!0,this.W_.next(t)}}/**
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
 */class uE{constructor(t){this.key=t}}class cE{constructor(t){this.key=t}}class yN{constructor(t,n){this.query=t,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=G(),this.mutatedKeys=G(),this.aa=$w(t),this.ua=new yi(this.aa)}get ca(){return this.sa}la(t,n){const r=n?n.ha:new Cy,i=n?n.ua:this.ua;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const h=i.get(c),m=Eu(this.query,f)?f:null,v=!!h&&this.mutatedKeys.has(h.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;h&&m?h.data.isEqual(m.data)?v!==y&&(r.track({type:3,doc:m}),E=!0):this.Pa(h,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.aa(m,l)>0||u&&this.aa(m,u)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),E=!0):h&&!m&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ua:o,ha:r,Xi:a,mutatedKeys:s}}Pa(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ua;this.ua=t.ua,this.mutatedKeys=t.mutatedKeys;const s=t.ha.k_();s.sort((u,c)=>function(h,m){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return v(h)-v(m)}(u.type,c.type)||this.aa(u.doc,c.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,s.length!==0||l?{snapshot:new Di(this.query,t.ua,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new Cy,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(t){return!this.sa.has(t)&&!!this.ua.has(t)&&!this.ua.get(t).hasLocalMutations}Ia(t){t&&(t.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=t.current)}Ta(){if(!this.current)return[];const t=this._a;this._a=G(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return t.forEach(r=>{this._a.has(r)||n.push(new cE(r))}),this._a.forEach(r=>{t.has(r)||n.push(new uE(r))}),n}Aa(t){this.sa=t.hs,this._a=G();const n=this.la(t.documents);return this.applyChanges(n,!0)}Ra(){return Di.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class vN{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class _N{constructor(t){this.key=t,this.Va=!1}}class wN{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Bi(a=>Mw(a),wu),this.ga=new Map,this.pa=new Set,this.ya=new ve(M.comparator),this.wa=new Map,this.Sa=new Ep,this.ba={},this.Da=new Map,this.Ca=bi.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function EN(e,t){const n=xN(e);let r,i;const s=n.fa.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ra();else{const o=await G4(n.localStore,Kt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await TN(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&iE(n.remoteStore,o)}return i}async function TN(e,t,n,r,i){e.Fa=(f,h,m)=>async function(y,E,p,d){let g=E.view.la(p);g.Xi&&(g=await Ty(y.localStore,E.query,!1).then(({documents:C})=>E.view.la(C,g)));const _=d&&d.targetChanges.get(E.targetId),T=E.view.applyChanges(g,y.isPrimaryClient,_);return Py(y,E.targetId,T.Ea),T.snapshot}(e,f,h,m);const s=await Ty(e.localStore,t,!0),o=new yN(t,s.hs),a=o.la(s.documents),l=bo.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);Py(e,n,u.Ea);const c=new vN(t,n,o);return e.fa.set(t,c),e.ga.has(n)?e.ga.get(n).push(t):e.ga.set(n,[t]),u.snapshot}async function IN(e,t){const n=X(e),r=n.fa.get(t),i=n.ga.get(r.targetId);if(i.length>1)return n.ga.set(r.targetId,i.filter(s=>!wu(s,t))),void n.fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sE(n.remoteStore,r.targetId),vh(n,r.targetId)}).catch(fp)):(vh(n,r.targetId),await yh(n.localStore,r.targetId,!0))}async function fE(e,t){const n=X(e);try{const r=await q4(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.wa.get(s);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Va=!0:i.modifiedDocuments.size>0?Ae(o.Va):i.removedDocuments.size>0&&(Ae(o.Va),o.Va=!1))}),await dE(n,r,t)}catch(r){await fp(r)}}function xy(e,t,n){const r=X(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.fa.forEach((s,o)=>{const a=o.view.K_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.listeners)h.K_(a)&&(u=!0)}),u&&xp(l)}(r.eventManager,t),i.length&&r.ma.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function SN(e,t,n){const r=X(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.wa.get(t),s=i&&i.key;if(s){let o=new ve(M.comparator);o=o.insert(s,We.newNoDocument(s,F.min()));const a=G().add(s),l=new Su(F.min(),new Map,new ve(J),o,a);await fE(r,l),r.ya=r.ya.remove(s),r.wa.delete(t),Pp(r)}else await yh(r.localStore,t,!1).then(()=>vh(r,t,n)).catch(fp)}function vh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ga.get(t))e.fa.delete(r),n&&e.ma.Ma(r,n);e.ga.delete(t),e.isPrimaryClient&&e.Sa.Vr(t).forEach(r=>{e.Sa.containsKey(r)||hE(e,r)})}function hE(e,t){e.pa.delete(t.path.canonicalString());const n=e.ya.get(t);n!==null&&(sE(e.remoteStore,n),e.ya=e.ya.remove(t),e.wa.delete(n),Pp(e))}function Py(e,t,n){for(const r of n)r instanceof uE?(e.Sa.addReference(r.key,t),AN(e,r)):r instanceof cE?(D("SyncEngine","Document no longer in limbo: "+r.key),e.Sa.removeReference(r.key,t),e.Sa.containsKey(r.key)||hE(e,r.key)):z()}function AN(e,t){const n=t.key,r=n.path.canonicalString();e.ya.get(n)||e.pa.has(r)||(D("SyncEngine","New document in limbo: "+n),e.pa.add(r),Pp(e))}function Pp(e){for(;e.pa.size>0&&e.ya.size<e.maxConcurrentLimboResolutions;){const t=e.pa.values().next().value;e.pa.delete(t);const n=new M(de.fromString(t)),r=e.Ca.next();e.wa.set(r,new _N(n)),e.ya=e.ya.insert(n,r),iE(e.remoteStore,new kn(Kt(Lw(n.path)),r,"TargetPurposeLimboResolution",hp.ae))}}async function dE(e,t,n){const r=X(e),i=[],s=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ip.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ma.u_(i),await async function(l,u){const c=X(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>I.forEach(u,h=>I.forEach(h.qi,m=>c.persistence.referenceDelegate.addReference(f,h.targetId,m)).next(()=>I.forEach(h.Qi,m=>c.persistence.referenceDelegate.removeReference(f,h.targetId,m)))))}catch(f){if(!No(f))throw f;D("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const m=c.ns.get(h),v=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(v);c.ns=c.ns.insert(h,y)}}}(r.localStore,s))}async function kN(e,t){const n=X(e);if(!n.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await eE(n.localStore,t);n.currentUser=t,function(s,o){s.Da.forEach(a=>{a.forEach(l=>{l.reject(new L(A.CANCELLED,o))})}),s.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await dE(n,r.us)}}function CN(e,t){const n=X(e),r=n.wa.get(t);if(r&&r.Va)return G().add(r.key);{let i=G();const s=n.ga.get(t);if(!s)return i;for(const o of s){const a=n.fa.get(o);i=i.unionWith(a.view.ca)}return i}}function xN(e){const t=X(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=fE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=CN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=SN.bind(null,t),t.ma.u_=pN.bind(null,t.eventManager),t.ma.Ma=mN.bind(null,t.eventManager),t}class Ry{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=nE(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return W4(this.persistence,new B4,t.initialUser,this.serializer)}createPersistence(t){return new j4(Tp.Hr,this.serializer)}createSharedClientState(t){return new Y4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PN{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kN.bind(null,this.syncEngine),await uN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fN}()}createDatastore(t){const n=nE(t.databaseInfo.databaseId),r=function(s){return new eN(s)}(t.databaseInfo);return function(s,o,a,l){return new rN(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new sN(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>xy(this.syncEngine,n,0),function(){return Sy.C()?new Sy:new X4}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,c){const f=new wN(i,s,o,a,l,u);return c&&(f.va=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=X(n);D("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await Do(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
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
 */class RN{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Na(this.observer.next,t)}error(t){this.observer.error?this.Na(this.observer.error,t):hn("Uncaught Error in snapshot listener:",t.toString())}Ba(){this.muted=!0}Na(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class NN{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=wR.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=lE(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Rc(e,t){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eE(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ny(e,t){e.asyncQueue.verifyOperationInProgress();const n=await DN(e);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>ky(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>ky(t.remoteStore,s)),e._onlineComponents=t}function bN(e){return e.name==="FirebaseError"?e.code===A.FAILED_PRECONDITION||e.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function DN(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!bN(n))throw n;xi("Error using user provided cache. Falling back to memory cache: "+n),await Rc(e,new Ry)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Rc(e,new Ry);return e._offlineComponents}async function ON(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Ny(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Ny(e,new PN))),e._onlineComponents}async function VN(e){const t=await ON(e),n=t.eventManager;return n.onListen=EN.bind(null,t.syncEngine),n.onUnlisten=IN.bind(null,t.syncEngine),n}function LN(e,t,n={}){const r=new vr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new RN({next:h=>{o.enqueueAndForget(()=>dN(s,f)),h.fromCache&&l.source==="server"?u.reject(new L(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new gN(a,c,{includeMetadataChanges:!0,Y_:!0});return hN(s,f)}(await VN(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function pE(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const by=new Map;/**
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
 */function MN(e,t,n){if(!n)throw new L(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function $N(e,t,n,r){if(t===!0&&r===!0)throw new L(A.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Dy(e){if(M.isDocumentKey(e))throw new L(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function FN(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":z()}function _h(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=FN(e);throw new L(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Oy{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$N("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pE((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rp{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oy(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hR;switch(r.type){case"firstParty":return new gR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=by.get(n);r&&(D("ComponentProvider","Removing Datastore"),by.delete(n),r.terminate())}(this),Promise.resolve()}}function jN(e,t,n,r={}){var i;const s=(e=_h(e,Rp))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Be.MOCK_USER;else{a=hk(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Be(u)}e._authCredentials=new dR(new xw(a,l))}}/**
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
 */class ku{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ku(this.firestore,t,this._query)}}class Wi{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Wi(this.firestore,t,this._key)}}class vi extends ku{constructor(t,n,r){super(t,n,Lw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Wi(this.firestore,null,new M(t))}withConverter(t){return new vi(this.firestore,t,this._path)}}function zN(e,t,...n){if(e=Dd(e),MN("collection","path",t),e instanceof Rp){const r=de.fromString(t,...n);return Dy(r),new vi(e,null,r)}{if(!(e instanceof Wi||e instanceof vi))throw new L(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(de.fromString(t,...n));return Dy(r),new vi(e.firestore,null,r)}}/**
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
 */class UN{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new rE(this,"async_queue_retry"),this.su=()=>{const n=Pc();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Pc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ou(),this._u(t)}enterRestrictedMode(t){if(!this.Xa){this.Xa=!0,this.ru=t||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(t){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new vr;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Za.push(t),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(t){if(!No(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(t){const n=this.Ya.then(()=>(this.nu=!0,t().catch(r=>{this.tu=r,this.nu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(t,n,r){this.ou(),this.iu.indexOf(t)>-1&&(n=0);const i=Cp.createAndSchedule(this,t,n,r,s=>this.uu(s));return this.eu.push(i),i}ou(){this.tu&&z()}verifyOperationInProgress(){}async cu(){let t;do t=this.Ya,await t;while(t!==this.Ya)}lu(t){for(const n of this.eu)if(n.timerId===t)return!0;return!1}hu(t){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.cu()})}Pu(t){this.iu.push(t)}uu(t){const n=this.eu.indexOf(t);this.eu.splice(n,1)}}class mE extends Rp{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new UN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gE(this),this._firestoreClient.terminate()}}function BN(e,t){const n=typeof e=="object"?e:Z1(),r=typeof e=="string"?e:t||"(default)",i=To(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ck("firestore");s&&jN(i,...s)}return i}function HN(e){return e._firestoreClient||gE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function gE(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new PR(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,pE(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new NN(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Pl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pl(Qe.fromBase64String(t))}catch(n){throw new L(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pl(Qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class yE{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class WN{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}}const qN=new RegExp("[~\\*/\\[\\]]");function KN(e,t,n){if(t.search(qN)>=0)throw Vy(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new yE(...t.split("."))._internalPath}catch{throw Vy(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Vy(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(A.INVALID_ARGUMENT,a+e+l)}/**
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
 */class vE{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new GN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(_E("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GN extends vE{data(){return super.data()}}function _E(e,t){return typeof t=="string"?KN(e,t):t instanceof yE?t._internalPath:t._delegate._internalPath}/**
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
 */function QN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class YN{convertValue(t,n="none"){switch(br(t)){case 0:return null;case 1:return t.booleanValue;case 2:return we(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Nr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw z()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return vu(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new WN(we(t.latitude),we(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=pp(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(co(t));default:return null}}convertTimestamp(t){const n=qn(t);return new lt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=de.fromString(t);Ae(Zw(r));const i=new fo(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||hn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class ya{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class XN extends vE{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(_E("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oa extends XN{data(t={}){return super.data(t)}}class JN{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Oa(this._firestore,this._userDataWriter,r.key,r,new ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ya(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:ZN(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class eb extends YN{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Wi(this.firestore,null,n)}}function tb(e){e=_h(e,ku);const t=_h(e.firestore,mE),n=HN(t),r=new eb(t);return QN(e._query),LN(n,e._query).then(i=>new JN(t,r,e,i))}(function(t,n=!0){(function(i){Ui=i})(vC),Hn(new cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new mE(new pR(r.getProvider("auth-internal")),new vR(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qt(ny,"4.3.0",t),qt(ny,"4.3.0","esm2017")})();const nb={apiKey:"AIzaSyCyKnk0W-TlUSuRGVwssVmhl7N6dDNY044",authDomain:"solobanker-4e82b.firebaseapp.com",projectId:"solobanker-4e82b",storageBucket:"solobanker-4e82b.appspot.com",messagingSenderId:"684581452754",appId:"1:684581452754:web:6a879656f37a40c3b4e60b",measurementId:"G-PXB27771LR"},wE=J1(nb);nP(wE);const rb=BN(wE),ib=zN(rb,"users");async function sb(){const e=await tb(ib);if(e.empty)throw{message:"Failed to load users!"};return e.docs.map(n=>({...n.data(),id:n.id}))}function ob(){let[e,t]=x.useState([]);return x.useEffect(function(){async function n(){const r=await sb();t(r)}n()},[]),w.jsx(w.Fragment,{children:w.jsxs("div",{className:"cont",children:[w.jsx("div",{className:"header p-4 pb-1 pb-md-4",children:w.jsx("h1",{children:" Available Users"})}),w.jsxs("table",{className:"table p-4 table-striped table-responsive",children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{scope:"col",children:"ID"}),w.jsx("th",{scope:"col",children:"Name"}),w.jsx("th",{scope:"col",children:"Balance"}),w.jsx("th",{scope:"col",children:"Make a Transaction"})]})}),w.jsx("tbody",{children:e.map((n,r)=>w.jsxs("tr",{children:[w.jsx("td",{children:r+1}),w.jsx("td",{children:n.name}),w.jsx("td",{children:n.balance}),w.jsx("td",{children:"-"})]},r))})]})]})})}Nc.createRoot(document.getElementById("root")).render(w.jsx(HI,{children:w.jsx($I,{children:w.jsxs(jr,{element:w.jsx(YA,{}),children:[w.jsx(jr,{path:"/",element:w.jsx(JA,{})}),w.jsx(jr,{path:"/users",element:w.jsx(ob,{})}),w.jsx(jr,{path:"/users/:id",element:w.jsx(ek,{})}),w.jsx(jr,{path:"/history",element:w.jsx(ZA,{})})]})})}));
