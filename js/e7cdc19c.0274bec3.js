(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e7cdc19c"],{1505:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mypage"},[i("TitleBar",{attrs:{titleTx:t.title}}),i("q-list",{attrs:{highlight:"","no-border":"","inset-separator":""}},t._l(t.conversations,function(t){return i("q-item",{key:t.index,attrs:{to:{path:"Chat",query:{item:t}}}},[i("q-item-side",[i("q-item-tile",{attrs:{avatar:""}},[i("img",{attrs:{src:"statics/left.png"}})])],1),i("q-item-main",{attrs:{label:t.nickName}}),i("q-item-side",{attrs:{right:""}},[i("q-item-tile",{attrs:{icon:"chat_bubble",color:"green"}})],1)],1)}))],1)},a=[];n._withStripped=!0;var s=i("9bfb"),r={components:{TitleBar:s["a"]},data:function(){return{title:this.$t("mymsg"),conversations:[]}},mounted:function(){var t=this;JIM.getConversation().onSuccess(function(e){console.log(e),t.conversations=e.conversations}).onFail(function(t){})}},o=r,c=(i("18ab"),i("2877")),l=Object(c["a"])(o,n,a,!1,null,"7a9d46e0",null);l.options.__file="Conversation.vue";e["default"]=l.exports},"18ab":function(t,e,i){"use strict";var n=i("8352"),a=i.n(n);a.a},8352:function(t,e,i){},"9bfb":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-bar"},[i("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),i("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},a=[];n._withStripped=!0;var s={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},r=s,o=(i("a675"),i("2877")),c=Object(o["a"])(r,n,a,!1,null,null,null);c.options.__file="TitleBar.vue";e["a"]=c.exports},a675:function(t,e,i){"use strict";var n=i("ca51"),a=i.n(n);a.a},ca51:function(t,e,i){}}]);