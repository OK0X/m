(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b23ee254"],{"21a5":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"adipage",staticClass:"mypage"},[n("TitleBar",{attrs:{titleTx:t.title}}),n("div",{staticClass:"myblock",staticStyle:{"overflow-y":"auto"}},[n("q-input",{staticClass:"adi-input",attrs:{type:"text",placeholder:t.$t("actualname")},model:{value:t.actualname,callback:function(e){t.actualname=e},expression:"actualname"}}),n("span",{staticClass:"tip-tx"},[t._v(t._s(t.$t("aditiptx"))+":")]),n("span",{staticClass:"tip-tx"},[t._v("1."+t._s(t.$t("bankcardreceive")))]),n("q-input",{staticClass:"adi-input",attrs:{placeholder:t.$t("cardno")},model:{value:t.cardno,callback:function(e){t.cardno=e},expression:"cardno"}}),n("span",{staticClass:"tip-tx"},[t._v("2."+t._s(t.$t("alipayreceive")))]),n("q-input",{staticClass:"adi-input",attrs:{type:"text",placeholder:t.$t("alipayno")},model:{value:t.alipayno,callback:function(e){t.alipayno=e},expression:"alipayno"}}),n("span",{staticClass:"tip-tx"},[t._v("\n      3."+t._s(t.$t("weixinshoukuan"))+"（\n      "),n("span",{staticStyle:{color:"#3587F2"},on:{click:t.getwxCodetip}},[t._v("不知道如何获取收款码？点击查看")]),t._v("）\n    ")]),n("input",{staticStyle:{"margin-top":"10px"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.wximgShow,expression:"wximgShow"}],staticStyle:{"margin-top":"10px",width:"200px",height:"274px","align-self":"center"},attrs:{src:t.wximgsrc}}),""===t.global.user.mobile?n("span",{staticClass:"tip-tx"},[t._v(t._s(t.$t("phonetx")))]):t._e(),""===t.global.user.mobile?n("div",{staticStyle:{display:"flex","margin-top":"15px","align-items":"flex-end"}},[n("q-input",{staticStyle:{flex:"1"},attrs:{type:"number",placeholder:t.$t("mobile")},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),n("q-btn",{attrs:{rounded:"",label:this.$t("sendsmscode")+t.smsbtnTx,color:"primary"},on:{click:t.sendsmscode}})],1):t._e(),""===t.global.user.mobile?n("q-input",{staticClass:"adi-input",attrs:{placeholder:t.$t("smscode")},model:{value:t.smscode,callback:function(e){t.smscode=e},expression:"smscode"}}):t._e(),n("q-btn",{staticStyle:{margin:"15px"},attrs:{rounded:"",label:t.$t("submit"),color:"primary"},on:{click:t.submitinfo}})],1)],1)},o=[];i._withStripped=!0;n("a481");var r=n("9bfb"),a=(n("a002"),n("3022"),n("3e8f"),{components:{TitleBar:r["a"]},data:function(){return{title:this.$t("receiptinfoTitle"),smsbtnTx:"",mcount:60,alipayno:"",actualname:"",cardno:"",mobile:"",smscode:"",wximgsrc:"",wximgShow:!1,wximgbmobUrl:"",wximgfile:""}},mounted:function(){var t=this;window.onresize=function(){var e=window.screen.height;t.$refs.adipage.style.height=e+"px"},console.log(this.global.user.mobile)},methods:{onFileChange:function(t){var e=this,n=t.target.files||t.dataTransfer.files;if(n.length){var i=n[0];this.wximgfile=i;var o=new FileReader;o.readAsDataURL(i),o.onload=function(t){e.wximgsrc=t.target.result,e.wximgShow=!0;var n=window.screen.height;e.$refs.adipage.style.height=n+"px"}}},uploadimg2bmob:function(){var t=this;this.$axios.request({url:"https://api2.bmob.cn/2/files/"+this.global.wallet.ethAddress+".jpg",method:"post",headers:{"X-Bmob-Application-Id":this.global.apiconfig.bmobotcappid,"X-Bmob-REST-API-Key":this.global.apiconfig.bmobotcapikey,"Content-Type":"image/jpeg"},data:this.wximgfile}).then(function(e){200===e.status&&(t.wximgbmobUrl=e.data.url,t.submitinfo2bmob()),t.$q.loading.hide()}).catch(function(e){console.error(e),t.$q.loading.hide()})},getwxCodetip:function(){this.$q.dialog({message:"打开微信，依次点击【我】——【支付】——【收付款】，点击下方【二维码收款】，再点击【保存收款码】，然后回到ok0x，点击【选择文件】，选择刚才保存的收款码。",ok:!0})},submitinfo:function(){""!==this.alipayno||""!==this.cardno||""!==this.wximgsrc?""===this.cardno||/^([1-9]{1})(\d{15}|\d{18})$/.test(this.cardno)?""!==this.actualname?""!==this.global.user.mobile||""!==this.smscode?(this.$q.loading.show({message:this.$t("txsubmiting"),spinnerSize:50}),""===this.global.user.mobile?this.smscodecheck():""!==this.wximgsrc?this.uploadimg2bmob():this.submitinfo2bmob()):toast(this.$t("smsnull")):toast(this.$t("namecheckfail")):toast(this.$t("cardnocheckfail")):toast(this.$t("aditiptx"))},smscodecheck:function(){var t=this,e=this;this.$axios.post(this.global.apiconfig.BmobRestAPIUrl+"verifySmsCode/"+this.smscode,{mobilePhoneNumber:this.mobile+""},{headers:this.global.apiconfig.BmobRestAPIHeaders}).then(function(n){"ok"===n.data.msg&&(""!==t.wximgsrc?e.uploadimg2bmob():e.submitinfo2bmob())}).catch(function(t){console.error(t),toast(e.$t("smscodeerror")),e.$q.loading.hide()})},submitinfo2bmob:function(){var t=this;this.$axios.put(this.global.apiconfig.BmobRestAPIUrl+"classes/login/"+this.global.user.objectId,{actualname:this.actualname,cardno:this.cardno,alipayno:this.alipayno,weixin:this.wximgbmobUrl,mobile:""===this.global.user.mobile?this.mobile+"":this.global.user.mobile},{headers:this.global.apiconfig.BmobRestAPIHeaders}).then(function(e){t.$q.loading.hide(),200===e.status&&(toast(t.$t("setsuccess")),""===t.global.user.mobile&&(t.global.user.mobile=t.mobile+""),""!==t.actualname&&(t.global.user.actualname=t.actualname),""!==t.cardno&&(t.global.user.cardno=t.cardno),""!==t.alipayno&&(t.global.user.alipayno=t.alipayno),""!==t.wximgbmobUrl&&(t.global.user.weixin=t.wximgbmobUrl),t.$router.replace({path:"/SubmitAD",query:{item:{tradeamount:"",floatrate:"0",lowestprice:"",cardno:"",alipayno:"",weixincodeUrl:"",singmin:""},from:"setpaymentinfo"}}))})},smsBtnCountdown:function(){var t=this,e=setInterval(function(){t.smsbtnTx="("+t.mcount+"S)",t.mcount--,-1===t.mcount&&(t.mcount=60,t.smsbtnTx="",clearInterval(e))},1e3)},sendsmscode:function(){var t=this;/^1(3|4|5|7|8)\d{9}$/.test(this.mobile)?60===this.mcount?this.$axios.post(this.global.apiconfig.BmobRestAPIUrl+"requestSmsCode",{mobilePhoneNumber:this.mobile+"",template:"ok0x1"},{headers:this.global.apiconfig.BmobRestAPIHeaders}).then(function(e){t.smsBtnCountdown()}):toast(this.$t("latersend")):toast(this.$t("mobilecheckfail"))},beforeDestroy:function(){clearInterval(priceTask)}}}),s=a,l=(n("ba79"),n("2877")),c=Object(l["a"])(s,i,o,!1,null,"21ea1d46",null);c.options.__file="SetPaymentInfo.vue";e["default"]=c.exports},3022:function(t,e,n){(function(t,i){var o=/%[sdj%]/g;e.format=function(t){if(!$(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(s(arguments[n]));return e.join(" ")}n=1;for(var i=arguments,r=i.length,a=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=r)return t;switch(t){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(t){return"[Circular]"}default:return t}}),l=i[n];n<r;l=i[++n])x(l)||!E(l)?a+=" "+l:a+=" "+s(l);return a},e.deprecate=function(n,o){if(_(t.process))return function(){return e.deprecate(n,o).apply(this,arguments)};if(!0===i.noDeprecation)return n;var r=!1;function a(){if(!r){if(i.throwDeprecation)throw new Error(o);i.traceDeprecation?console.trace(o):console.error(o),r=!0}return n.apply(this,arguments)}return a};var r,a={};function s(t,n){var i={seen:[],stylize:c};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),y(n)?i.showHidden=n:n&&e._extend(i,n),_(i.showHidden)&&(i.showHidden=!1),_(i.depth)&&(i.depth=2),_(i.colors)&&(i.colors=!1),_(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=l),p(i,t,i.depth)}function l(t,e){var n=s.styles[e];return n?"["+s.colors[n][0]+"m"+t+"["+s.colors[n][1]+"m":t}function c(t,e){return t}function u(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function p(t,n,i){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(i,t);return $(o)||(o=p(t,o,i)),o}var r=f(t,n);if(r)return r;var a=Object.keys(n),s=u(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),j(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return m(n);if(0===a.length){if(C(n)){var l=n.name?": "+n.name:"";return t.stylize("[Function"+l+"]","special")}if(O(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(k(n))return t.stylize(Date.prototype.toString.call(n),"date");if(j(n))return m(n)}var c,y="",x=!1,v=["{","}"];if(h(n)&&(x=!0,v=["[","]"]),C(n)){var w=n.name?": "+n.name:"";y=" [Function"+w+"]"}return O(n)&&(y=" "+RegExp.prototype.toString.call(n)),k(n)&&(y=" "+Date.prototype.toUTCString.call(n)),j(n)&&(y=" "+m(n)),0!==a.length||x&&0!=n.length?i<0?O(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),c=x?d(t,n,i,s,a):a.map(function(e){return b(t,n,i,s,e,x)}),t.seen.pop(),g(c,y,v)):v[0]+y+v[1]}function f(t,e){if(_(e))return t.stylize("undefined","undefined");if($(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return w(e)?t.stylize(""+e,"number"):y(e)?t.stylize(""+e,"boolean"):x(e)?t.stylize("null","null"):void 0}function m(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,n,i,o){for(var r=[],a=0,s=e.length;a<s;++a)T(e,String(a))?r.push(b(t,e,n,i,String(a),!0)):r.push("");return o.forEach(function(o){o.match(/^\d+$/)||r.push(b(t,e,n,i,o,!0))}),r}function b(t,e,n,i,o,r){var a,s,l;if(l=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},l.get?s=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(s=t.stylize("[Setter]","special")),T(i,o)||(a="["+o+"]"),s||(t.seen.indexOf(l.value)<0?(s=x(n)?p(t,l.value,null):p(t,l.value,n-1),s.indexOf("\n")>-1&&(s=r?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n"))):s=t.stylize("[Circular]","special")),_(a)){if(r&&o.match(/^\d+$/))return s;a=JSON.stringify(""+o),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function g(t,e,n){var i=t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function h(t){return Array.isArray(t)}function y(t){return"boolean"===typeof t}function x(t){return null===t}function v(t){return null==t}function w(t){return"number"===typeof t}function $(t){return"string"===typeof t}function S(t){return"symbol"===typeof t}function _(t){return void 0===t}function O(t){return E(t)&&"[object RegExp]"===z(t)}function E(t){return"object"===typeof t&&null!==t}function k(t){return E(t)&&"[object Date]"===z(t)}function j(t){return E(t)&&("[object Error]"===z(t)||t instanceof Error)}function C(t){return"function"===typeof t}function R(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function z(t){return Object.prototype.toString.call(t)}function D(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(_(r)&&(r=Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,THEME:"mat",MODE:"spa",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined"}).NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(r)){var n=i.pid;a[t]=function(){var i=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,i)}}else a[t]=function(){};return a[t]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=h,e.isBoolean=y,e.isNull=x,e.isNullOrUndefined=v,e.isNumber=w,e.isString=$,e.isSymbol=S,e.isUndefined=_,e.isRegExp=O,e.isObject=E,e.isDate=k,e.isError=j,e.isFunction=C,e.isPrimitive=R,e.isBuffer=n("d60a");var U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var t=new Date,e=[D(t.getHours()),D(t.getMinutes()),D(t.getSeconds())].join(":");return[t.getDate(),U[t.getMonth()],e].join(" ")}function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",A(),e.format.apply(e,arguments))},e.inherits=n("3fb5"),e._extend=function(t,e){if(!e||!E(e))return t;var n=Object.keys(e),i=n.length;while(i--)t[n[i]]=e[n[i]];return t}}).call(this,n("c8ba"),n("4362"))},"3e8f":function(t,e){},"3fb5":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},"7f77":function(t,e,n){},"9bfb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-bar"},[n("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},o=[];i._withStripped=!0;var r={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},a=r,s=(n("a675"),n("2877")),l=Object(s["a"])(a,i,o,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,n){"use strict";var i=n("ca51"),o=n.n(i);o.a},ba79:function(t,e,n){"use strict";var i=n("7f77"),o=n.n(i);o.a},ca51:function(t,e,n){},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}}}]);