(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a39ab86a"],{"1e1d":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"title-bar"},[!1!==e.showBack?o("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(t){return e.goBack(t)}}}):e._e(),o("div",{staticClass:"title-tx"},[e._v(e._s(e.titleTx))])],1)},n=[],a={props:["titleTx","showBack"],methods:{goBack:function(){this.$router.go(-1)}}},i=a,c=(o("5854"),o("2877")),s=Object(c["a"])(i,r,n,!1,null,null,null);t["a"]=s.exports},"27ae":function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(e,t){module.exports=t(e)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.1",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},o=0,r=e.length;o<r;o++)t[e.charAt(o)]=o;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],o=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),r=[b64chars.charAt(o>>>18),b64chars.charAt(o>>>12&63),t>=2?"=":b64chars.charAt(o>>>6&63),t>=1?"=":b64chars.charAt(63&o)];return r.join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e)).toString("base64")}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e)).toString("base64")}:function(e){return btoa(utob(e))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(String(e))},encodeURI=function(e){return encode(e,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(e){switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),o=t-65536;return fromCharCode(55296+(o>>>10))+fromCharCode(56320+(1023&o));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,o=t%4,r=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),n=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return n.length-=[0,0,2,1][o],n.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global["Meteor"]&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__("c8ba"))},5854:function(e,t,o){"use strict";var r=o("b722"),n=o.n(r);n.a},9293:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mypage"},[o("TitleBar",{attrs:{titleTx:e.title}}),o("div",{staticClass:"myblock"},[o("q-input",{attrs:{dense:!0,type:"textarea","float-label":"请在这里描述您的问题!","max-height":50,rows:"5"},model:{value:e.feedcontent,callback:function(t){e.feedcontent="string"===typeof t?t.trim():t},expression:"feedcontent"}}),o("input",{staticStyle:{"margin-top":"10px"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFileChange}}),o("img",{directives:[{name:"show",rawName:"v-show",value:e.imgShow,expression:"imgShow"}],staticStyle:{"margin-top":"10px",width:"200px",height:"274px","align-self":"center"},attrs:{src:e.imgsrc}})],1),o("q-btn",{staticClass:"mybtn-normal",attrs:{rounded:"",label:e.$t("submit"),color:"primary"},on:{click:e.uploadfile}})],1)},n=[],a=o("1e1d"),i=o("3452"),c=o.n(i),s=o("27ae"),u={components:{TitleBar:a["a"]},data:function(){return{title:this.$t("feedback"),feedcontent:"",imgfile:"",imgsrc:"",imgShow:!1,imgbmobUrl:""}},mounted:function(){},methods:{onFileChange:function(e){var t=this,o=e.target.files||e.dataTransfer.files;if(o.length){var r=o[0];this.imgfile=r;var n=new FileReader;n.readAsDataURL(r),n.onload=function(e){t.imgsrc=e.target.result,t.imgShow=!0}}},uploadfile:function(){var e=this;if(""!==this.feedcontent)if(this.$q.loading.show({message:this.$t("txsubmiting"),spinnerSize:50}),""!==this.imgfile){var t=new Date;t.setSeconds(t.getSeconds()+600);var o={expiration:t.toISOString(),conditions:[["content-length-range",0,1048576e3]]},r=s["Base64"].encode(JSON.stringify(o)),n=c.a.HmacSHA1(r,this.global.apiconfig.aliyunossaccesskey),a=c.a.enc.Base64.stringify(n),i="feedback"+(new Date).getTime()+".jpg",u=new FormData;u.append("key",i),u.append("policy",r),u.append("OSSAccessKeyId",this.global.apiconfig.aliyunossaccessid),u.append("success_action_status","200"),u.append("signature",a),u.append("file",this.imgfile,i),this.$axios.post(this.global.apiconfig.aliyunosshost,u,{headers:{"Content-Type":"application/x-www-form-urlencoded;boundary=----WebKitFormBoundarytkUbKWcxgeMi1fIr"}}).then((function(t){200===t.status&&(e.imgbmobUrl=i,e.submit2bmob()),e.$q.loading.hide()})).catch((function(t){console.error(t),e.$q.loading.hide()}))}else this.submit2bmob();else toast("输入为空")},generateImgUrl:function(){var e=this.global.wallet.ethAddress+".jpg",t=parseInt((new Date).getTime()/1e3)+600,o="GET\n\n\n"+t+"\n/otcfiles/"+e;encodeURIComponent(c.a.enc.Base64.stringify(c.a.HmacSHA1(o,this.global.apiconfig.aliyunossaccesskey)))},submit2bmob:function(){var e=this;if("orderdetail"===this.$route.query.from){var t=this.$route.query.orderinfo;t.whomaked="buy"===this.$route.query.whomaked?"buyer":"seller",t.question=this.feedcontent,t.order_id=t.id,delete t.id,delete t.update_at,delete t.create_at,delete t.is_refund,delete t.refund_hash,delete t.confirm_receipt_hash,delete t.remark,t.imgurl=this.imgbmobUrl;var o=(new Date).getTime();this.$axios.post(this.global.apiconfig.otcbackapi+"otcstatics/report_appeal",t,{headers:{"access-token":this.util.generateToken(JSON.stringify(t),o),"otc-timestamp":o}}).then((function(t){e.$q.loading.hide(),200===t.status&&0===t.data.code&&(toast("提交成功，客服将尽快为您处理"),e.$router.go(-1))}))}else{var r={address:this.global.wallet.ethAddress,app_version:this.global.versionCode+"",webview_version:navigator.userAgent,feedcontent:this.feedcontent,imgurl:this.imgbmobUrl},n=(new Date).getTime();this.$axios.post(this.global.apiconfig.otcbackapi+"otcstatics/report_feedback",r,{headers:{"access-token":this.util.generateToken(JSON.stringify(r),n),"otc-timestamp":n}}).then((function(t){e.$q.loading.hide(),200===t.status&&0===t.data.code&&(toast("提交成功,我们将尽快处理！"),e.$router.go(-1))}))}}},beforeDestroy:function(){this.$q.loading.hide()}},l=u,f=o("2877"),d=Object(f["a"])(l,r,n,!1,null,"3aa9ed50",null);t["default"]=d.exports},b722:function(e,t,o){}}]);