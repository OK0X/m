(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["28c569f5"],{"291c":function(t,a,e){},4952:function(t,a,e){"use strict";var s=e("ef88"),i=e.n(s);i.a},"7ea7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mypage"},[e("div",{staticClass:"ns-up"},[e("TitleBar",{attrs:{titleTx:t.$t("namesell")}}),e("div",{staticClass:"up-part"},[e("span",{staticClass:"ns-myname"},[t._v(t._s(t.$t("myname")))]),e("span",{staticClass:"ns-myname",staticStyle:{"font-size":"20px"}},[t._v(t._s(""===t.global.ensname?t.$t("nonamecrt"):t.global.ensname))]),""===t.global.ensname?e("q-btn",{staticClass:"btn",staticStyle:{width:"100px","align-self":"center"},attrs:{flat:"",color:"primary",label:t.$t("gotoreg")},nativeOn:{click:function(a){return t.toRegisteENS(a)}}}):t._e(),""!==t.global.ensname?e("div",{staticClass:"tr-btn"},[e("q-btn",{staticClass:"btn",attrs:{flat:"",color:"primary",label:t.$t("nsell")},nativeOn:{click:function(a){return t.sellMyName(a)}}}),e("div",{staticClass:"porti-line"}),e("q-btn",{staticClass:"btn",attrs:{flat:"",color:"primary",label:t.$t("modifysellprice")},nativeOn:{click:function(a){return t.toReceiveEth(a)}}}),e("div",{staticClass:"porti-line"}),e("q-btn",{staticClass:"btn",attrs:{flat:"",color:"primary",label:t.$t("cancelsell")},nativeOn:{click:function(a){return t.toTransferEth(a)}}})],1):t._e()],1)],1),e("div",{staticClass:"ns-down"},[e("div",{staticClass:"horial-line"}),e("span",{staticClass:"ns-sellist"},[t._v(t._s(t.$t("nselllist")))]),e("q-list",{staticClass:"ns-list",attrs:{highlight:"",separator:"","no-border":""}},[e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])]),e("q-item",{staticClass:"item"},[e("span",[t._v("name")]),e("span",[t._v("10 eth")])])],1)],1),e("MutiInputDialog",{attrs:{dialogData:t.mutiInputDialog},on:{mutiInputOk:t.mutiInputOk}})],1)},i=[];s._withStripped=!0;var n=e("9bfb"),l=e("f536"),o=e("e7ea"),c=(e("a002"),e("96a1"),e("3452"),{data:function(){return{mutiInputDialog:{show:!1,ok:this.$t("submit"),title:this.$t("namesell"),placeholder1:this.$t("inputsellprice"),show2:!0,placeholder2:this.$t("enterpswd"),type1:"number",from:"namesell"}}},components:{TitleBar:n["a"],MutiInputDialog:l["a"]},methods:{toRegisteENS:function(){this.$router.push({path:"/registeens",query:{p1:"namesell"}})},sellMyName:function(){this.mutiInputDialog.show=!0},mutiInputOk:function(t){var a=this;this.$q.loading.show({message:this.$t("txsubmiting"),spinnerSize:50});var e=this.util.getWallet(a,t.v2);this.doSell(e,t.v1)},doSell:function(t,a){var e=this,s=this.global.nabContract.connect(t);s.sellName(this.global.ensname,o["ethers"].utils.parseEther(a+"")).then(function(t){console.log(t),e.$q.loading.hide(),e.util.showInfoDialog(e,e.$t("submitted"),t.hash,!1),e.util.listen4TxResult(e,t.hash,e.$t("submitsuccess"),e.$t("submitfailed"))}).catch(function(t){console.error(t),e.util.reprotError2Bmob(e,"doSell",t),e.$q.loading.hide()})}}}),r=c,u=(e("4952"),e("2877")),p=Object(u["a"])(r,s,i,!1,null,"70a25130",null);p.options.__file="NameSell.vue";a["default"]=p.exports},"9bfb":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-bar"},[e("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(a){return t.goBack(a)}}}),e("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},i=[];s._withStripped=!0;var n={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},l=n,o=(e("a675"),e("2877")),c=Object(o["a"])(l,s,i,!1,null,null,null);c.options.__file="TitleBar.vue";a["a"]=c.exports},a675:function(t,a,e){"use strict";var s=e("ca51"),i=e.n(s);i.a},c0a8:function(t,a,e){"use strict";var s=e("291c"),i=e.n(s);i.a},ca51:function(t,a,e){},ef88:function(t,a,e){},f536:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-dialog",{on:{show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(a){return e("div",{staticClass:"dialog-btn"},[t._e(),e("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.dialogData.ok},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(a){t.$set(t.dialogData,"show",a)},expression:"dialogData.show"}},[e("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.title))]),e("div",{attrs:{slot:"body"},slot:"body"},[e("q-input",{attrs:{placeholder:t.dialogData.placeholder1,type:t.dialogData.type1},model:{value:t.text1,callback:function(a){t.text1=a},expression:"text1"}}),t.dialogData.show2?e("q-input",{attrs:{placeholder:t.dialogData.placeholder2},model:{value:t.text2,callback:function(a){t.text2=a},expression:"text2"}}):t._e()],1)])},i=[];s._withStripped=!0;e("7f7f"),e("96cf");var n=e("c973"),l=e.n(n),o={props:["dialogData"],data:function(){return{text1:"",text2:""}},methods:{onOk:function(){""!==this.text1&&(!0!==this.dialogData.show2||""!==this.text2)?"namesell"===this.dialogData.from&&this.text1>50?toast(this.$t("namesellmax")):(this.$emit("mutiInputOk",{v1:this.text1,v2:this.text2}),this.dialogData.show=!1):toast(this.$t("nullinput"))},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=l()(regeneratorRuntime.mark(function t(a,e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.name.length){t.next=4;break}this.$q.dialog({title:"Please specify your name!",message:"Can't buy tickets without knowing your name."}),t.next=7;break;case 4:return t.next=6,a();case 6:this.$q.notify("Ok ".concat(this.name,", going with ").concat(e));case 7:case"end":return t.stop()}},t,this)}));return function(a,e){return t.apply(this,arguments)}}()}},c=o,r=(e("c0a8"),e("2877")),u=Object(r["a"])(c,s,i,!1,null,"169158e8",null);u.options.__file="MutiInputDialog.vue";a["a"]=u.exports}}]);