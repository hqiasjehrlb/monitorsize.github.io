(function(t){function e(e){for(var r,i,a=e[0],c=e[1],p=e[2],l=0,f=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(f.length)f.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var s=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1207:function(t,e,n){"use strict";n("7465")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("MonitorSpecCounter")],1)},u=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1"}},[n("tr",[n("td",[t._v("螢幕尺寸")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.i,expression:"i"}],attrs:{type:"number"},domProps:{value:t.i},on:{input:function(e){e.target.composing||(t.i=e.target.value)}}}),t._v("吋 ")])]),n("tr",[n("td",[t._v("寬高比")]),n("td",[t._v("寬"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.w,expression:"w"}],attrs:{type:"number"},domProps:{value:t.w},on:{input:function(e){e.target.composing||(t.w=e.target.value)}}}),t._v(":高"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.h,expression:"h"}],attrs:{type:"number"},domProps:{value:t.h},on:{input:function(e){e.target.composing||(t.h=e.target.value)}}})])]),n("tr",[n("td",[t._v("換算公分")]),n("td",[t._v(" 寬: "+t._s(t.answers.w)+" cm"),n("br"),t._v(" 高: "+t._s(t.answers.h)+" cm ")])])])},a=[],c={data:function(){return{i:30,w:16,h:9}},methods:{count:function(t,e,n){var r=2.54*t,o=r/Math.pow(Math.pow(e,2)+Math.pow(n,2),.5);return{h:n*o,w:e*o}}},computed:{answers:function(){return this.count(this.i,this.w,this.h)}}},p=c,s=(n("1207"),n("2877")),l=Object(s["a"])(p,i,a,!1,null,null,null),f=l.exports,d={name:"App",components:{MonitorSpecCounter:f}},v=d,m=(n("034f"),Object(s["a"])(v,o,u,!1,null,null,null)),h=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(h)}}).$mount("#app")},7465:function(t,e,n){},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.666d9c70.js.map