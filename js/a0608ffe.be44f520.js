(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a0608ffe"],{"0949":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mypage"},[i("TitleBar",{attrs:{titleTx:t.title}}),i("div",{staticClass:"myblock"},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("span",{staticClass:"mytx-minor"},[t._v(t._s(t.$t("transactionamount")))]),i("span",{staticClass:"mytx-minor"},[t._v(t._s(t.$t("orderno"))+"："+t._s(t.$route.query.item.id))])]),i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[i("span",{staticStyle:{color:"red","font-weight":"700","font-size":"22px"}},[t._v(t._s(t.$route.query.item.value))]),t._v(" CNY\n        "),i("img",{staticClass:"imgamtcopy",staticStyle:{height:"20px","margin-left":"5px"},attrs:{src:"statics/copy.png","data-clipboard-text":t.$route.query.item.value}})]),i("span",{style:{color:3===t.orderStatus?"green":t.orderStatus<0?"red":"black","font-size":"18px"}},[t._v(t._s(t.showStatus))])]),i("div",{staticClass:"mytx-minor"},[t._v("\n      "+t._s(t.$t("amount"))+"\n      "),i("span",{staticStyle:{color:"black"}},[t._v(t._s(t.$route.query.item.amount))]),t._v(" ETH\n    ")]),i("div",{staticClass:"mytx-minor"},[t._v("\n      "+t._s(t.$t("unitprice"))+"\n      "),i("span",{staticStyle:{color:"black"}},[t._v(t._s(t.$route.query.item.buy_price))]),t._v(" CNY/ETH\n    ")])]),0===t.orderStatus?i("div",{staticClass:"myblock",staticStyle:{"margin-top":"10px","align-self":"center"}},[i("img",{staticStyle:{width:"40px",height:"40px","align-self":"center"},attrs:{src:"statics/alarm.png"}}),i("div",{staticStyle:{"align-self":"center",color:"green","font-size":"25px"}},[t._v(t._s(t.$t("countdown"))+t._s(t.countdown)+"S")]),i("div",{staticStyle:{"align-self":"center",color:"#6f7d8e","font-size":"13px"}},[t._v(t._s(t.showStatus)+","+t._s(t.$t("timeoutcanceltip")))])]):t._e(),t.orderStatus<0?i("div",{staticClass:"myblock",staticStyle:{"margin-top":"10px","align-self":"center"}},[i("img",{staticStyle:{width:"54px",height:"54px","align-self":"center","margin-top":"10px"},attrs:{src:"statics/tr-failed.png"}}),i("div",{staticStyle:{"align-self":"center",color:"red","font-size":"13px"}},[t._v(t._s(-1===t.orderStatus?t.$t("alreadytimeouttip"):"买家已取消订单"))])]):t._e(),1===t.orderStatus&&"buy"===t.$route.query.type?i("div",{staticClass:"myblock",staticStyle:{"margin-top":"10px","align-self":"center"}},[i("img",{staticStyle:{width:"54px",height:"54px","align-self":"center","margin-top":"10px"},attrs:{src:"statics/ethconfirm.jpg"}}),i("div",{staticStyle:{"align-self":"center",color:"green","font-size":"13px"}},[t._v("\n      卖家已完成链上抵押，\n      "),i("u",{on:{click:function(e){t.blockdetail(t.$route.query.item.confirm_order_hash)}}},[t._v("查看详情")])])]):t._e(),2===t.orderStatus?i("div",{staticClass:"myblock",staticStyle:{"margin-top":"10px","align-self":"center"}},[i("img",{staticStyle:{width:"54px","align-self":"center","margin-top":"10px"},attrs:{src:"statics/buyerpayed.png"}}),i("span",{staticStyle:{"align-self":"center",color:"green","font-size":"25px"}},[t._v("\n      订单已付款\n    ")]),"buy"===t.$route.query.type?i("span",{staticClass:"mytx-tip",staticStyle:{"align-self":"center"}},[t._v("请耐心等待卖家确认收款")]):t._e(),"buy"===t.$route.query.type?i("div",{staticClass:"block-gray"},[i("span",{staticClass:"mytx-minor"},[t._v("联系卖家："),i("span",{staticStyle:{color:"black","font-size":"15px"}},[t._v(t._s(t.$route.query.item.seller_actual_name))])]),i("img",{staticStyle:{height:"20px","margin-left":"5px"},attrs:{src:"statics/phone.png"},on:{click:function(e){t.phoneclick(t.$route.query.item.seller_mobile)}}})]):t._e()]):t._e(),3===t.orderStatus?i("div",{staticClass:"myblock",staticStyle:{"margin-top":"10px","align-self":"center"}},[i("img",{staticStyle:{width:"54px","align-self":"center","margin-top":"10px"},attrs:{src:"statics/finished.png"}}),i("span",{staticStyle:{"align-self":"center",color:"green","font-size":"25px"}},[t._v("\n      订单已完成\n    ")]),i("span",{staticClass:"mytx-tip",staticStyle:{"align-self":"center"}},[t._v("查看链上"),i("u",{staticStyle:{color:"green"},on:{click:function(e){t.blockdetail(t.$route.query.item.confirm_receipt_hash)}}},[t._v("确认记录")]),t._v("，若有疑问可联系"),i("u",[t._v("在线客服")]),t._v("。")])]):t._e(),1===t.orderStatus&&"buy"===t.$route.query.type?i("div",{staticClass:"myblock mytx-minor",staticStyle:{"margin-top":"10px","overflow-y":"auto"}},[i("div",[i("span",[t._v("收款方姓名:")]),i("span",{staticStyle:{color:"black","font-size":"16px"}},[t._v(t._s(t.$route.query.item.seller_actual_name))]),i("img",{staticClass:"imgnamecopy",staticStyle:{height:"20px","margin-left":"5px"},attrs:{src:"statics/copy.png","data-clipboard-text":t.$route.query.item.seller_actual_name}}),i("img",{staticStyle:{height:"20px","margin-left":"5px"},attrs:{src:"statics/phone.png"},on:{click:function(e){t.phoneclick(t.$route.query.item.seller_mobile)}}})]),i("div",{staticStyle:{"margin-top":"5px"}},[t._v("请按下单时选择的方式付款以便卖家确认:")]),""!==t.$route.query.item.seller_card_no?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[i("div",[i("img",{staticStyle:{height:"18px","margin-left":"5px"},attrs:{src:"statics/bankcards.png"}}),i("span",[t._v("\n          网银汇款\n          "),"bankcard"===t.$route.query.item.pay_method?i("span",{staticClass:"emphasizeTx"},[t._v(" ✓")]):t._e()])]),i("div",[i("span",{staticClass:"payinfo"},[t._v(t._s(t.$route.query.item.seller_card_no))]),i("img",{staticClass:"imgcardnocopy",staticStyle:{height:"20px","margin-left":"5px"},attrs:{src:"statics/copy.png","data-clipboard-text":t.$route.query.item.seller_card_no}})])]):t._e(),""!==t.$route.query.item.seller_alipay_no?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[i("div",[i("img",{staticStyle:{height:"18px","margin-left":"5px"},attrs:{src:"statics/alipays.png"}}),i("span",[t._v("\n          支付宝\n          "),"alipay"===t.$route.query.item.pay_method?i("span",{staticClass:"emphasizeTx"},[t._v(" ✓")]):t._e()])]),i("div",[i("span",{staticClass:"payinfo"},[t._v(t._s(t.$route.query.item.seller_alipay_no))]),i("img",{staticClass:"imgalipaycopy",staticStyle:{height:"20px","margin-left":"5px"},attrs:{src:"statics/copy.png","data-clipboard-text":t.$route.query.item.seller_alipay_no}})])]):t._e(),""!==t.$route.query.item.weixin_code_url?i("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"5px"}},[i("div",[i("img",{staticStyle:{height:"18px","margin-left":"5px"},attrs:{src:"statics/wepay.png"}}),i("span",[t._v("\n          微信\n          "),"wepay"===t.$route.query.item.pay_method?i("span",{staticClass:"emphasizeTx"},[t._v(" ✓")]):t._e()])]),i("img",{staticStyle:{"align-self":"center",width:"200px",height:"274px","margin-top":"10px"},attrs:{src:t.$route.query.item.weixin_code_url}})]):t._e(),i("span",[t._v("\n      付款备注:\n      "),i("span",{staticStyle:{color:"black"}},[t._v(t._s(t.$route.query.item.remark))]),i("span",{staticStyle:{color:"red"}},[t._v("(请务必填写)")])])]):t._e(),1!==t.orderStatus&&2!==t.orderStatus||"sell"!==t.$route.query.type?t._e():i("div",{staticClass:"myblock",staticStyle:{"margin-top":"10px"}},[i("div",[i("span",{staticClass:"mytx-minor"},[t._v("付款账户:")]),t._v("\n      "+t._s("wepay"===t.$route.query.item.pay_method?"微信":"alipay"===t.$route.query.item.pay_method?"支付宝":"银联")+" \n      "+t._s(t.$route.query.item.pay_account)+"\n    ")]),i("div",[i("span",{staticClass:"mytx-minor"},[t._v("备注信息:")]),t._v("\n      "+t._s(t.$route.query.item.remark)+"\n    ")]),i("div",[i("span",{staticClass:"mytx-minor"},[t._v("联系买家:")]),i("img",{staticStyle:{height:"20px","margin-left":"5px"},attrs:{src:"statics/phone.png"},on:{click:function(e){t.phoneclick(t.$route.query.item.buyer_mobile)}}})])]),0===t.orderStatus&&"sell"===t.$route.query.type?i("q-btn",{staticClass:"mybtn-normal",attrs:{rounded:"",label:t.$t("confirmOrder"),color:"primary"},on:{click:function(e){t.sellerConfirm("confirmOrder")}}}):t._e(),1===t.orderStatus&&"buy"===t.$route.query.type?i("q-btn",{staticClass:"mybtn-normal",attrs:{rounded:"",label:t.$t("confirmpayed"),color:"primary"},on:{click:t.confirmPayed}}):t._e(),2===t.orderStatus&&"sell"===t.$route.query.type?i("q-btn",{staticClass:"mybtn-normal",attrs:{rounded:"",label:t.$t("confirmrecept"),color:"primary"},on:{click:function(e){t.sellerConfirm("confirmrecept")}}}):t._e(),0===t.orderStatus&&"buy"===t.$route.query.type?i("q-btn",{staticClass:"mybtn-normal",attrs:{rounded:"",label:"取消订单",color:"primary"},on:{click:function(e){t.cancelOrder(-2)}}}):t._e(),1===t.orderStatus||2===t.orderStatus?i("q-btn",{staticClass:"mybtn-normal",attrs:{rounded:"",label:"申诉订单",color:"primary"},on:{click:t.appeal}}):t._e()],1)},s=[];a._withStripped=!0;i("96cf");var r,n,o,c,l,u=i("c973"),p=i.n(u),d=i("9bfb"),m=(i("a002"),i("e7ea")),y=i("b311"),h=i.n(y),f=i("96a1"),g={components:{TitleBar:d["a"]},data:function(){return{title:this.$t("orderdetail"),orderStatus:this.$route.query.item.status,countdown:300}},computed:{showStatus:function(){switch(this.orderStatus){case 0:return"buy"===this.$route.query.type?this.$t("waitadrecept"):this.$t("waiturecept");case 1:return"buy"===this.$route.query.type?this.$t("waitupay"):this.$t("wait4pay");case 2:return"buy"===this.$route.query.type?this.$t("confirmpay"):this.$t("confirmpayu");case 3:return this.$t("finished2");case-1:case-2:return this.$t("alreadycanceled")}}},mounted:function(){this.util.refreshGasPrice(this),this.initDom(),this.refreshTokenBlance(),console.log(this.$route.query.item),n=new h.a(".imgamtcopy"),n.on("success",function(t){toast("金额已复制")}),o=new h.a(".imgnamecopy"),o.on("success",function(t){toast("姓名已复制")}),c=new h.a(".imgcardnocopy"),c.on("success",function(t){toast("卡号已复制")}),l=new h.a(".imgalipaycopy"),l.on("success",function(t){toast("支付宝账号已复制")})},methods:{blockdetail:function(t){Object(f["a"])(this.global.apiconfig.etherscanio+"tx/"+t)},refreshTokenBlance:function(){var t=this,e=function(){var e=p()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.tokenContract.balanceOf(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.global.wallet.lastMcoinBalance="0"===e?"0.0000":m["ethers"].utils.formatEther(e)})},initDom:function(){if(0===this.orderStatus){var t=new Date(this.$route.query.item.create_at).getTime(),e=(new Date).getTime()-t;e>=3e5?this.cancelOrder(-1):(this.countdown-=parseInt(e/1e3),this.orderCountdown())}},confirmPayed:function(){var t=this;this.$q.dialog({title:"温馨提示",message:"付款前请先确认卖家已完成链上抵押。点击确认付款后视您承诺已汇款，若卖家没有收到款项提出申诉，客服24小时内会介入处理，若您在24小时内没配合处理，则判定您败诉，资金损失由您承担。",ok:"确定",cancel:"取消"}).then(function(){t.$q.loading.show({message:t.$t("txsubmiting"),spinnerSize:50}),t.$axios.put(t.global.apiconfig.otcbackapi+"/confirm_paid?id="+t.$route.query.item.id,null,{headers:t.global.apiconfig.otcapiheader}).then(function(e){t.$q.loading.hide(),200===e.status&&0===e.data.code&&(t.orderStatus=2)})}).catch(function(){})},sellerConfirm:function(t){var e=this,i=this;this.$q.dialog({message:this.$t("enterpswd"),prompt:{model:"",type:"text"},ok:this.$t("ok"),cancel:this.$t("cancel"),color:"secondary"}).then(function(a){if(""===a)toast(i.$t("pswdnull"));else{i.$q.loading.show({message:i.$t("txsubmiting"),spinnerSize:50});var s=i.util.getWallet(i,a);"confirmOrder"===t?e.doConfrimOrder(s):e.doConfrimReceipt(s)}}).catch(function(t){console.error(t)})},doConfrimOrder:function(t){var e=this,i=this,a=this.global.otcContract.connect(t),s=this.$route.query.item.amount,r=parseFloat((s*this.global.bmobconfig.otcsellfee).toFixed(10)),n=parseFloat(r)/this.global.cmatconfig.mcoinPrice;this.global.wallet.lastMcoinBalance>=n&&(r=0);var o={value:m["ethers"].utils.parseEther(parseFloat((parseFloat(s)+parseFloat(r)).toFixed(10))+""),gasPrice:m["ethers"].utils.bigNumberify(this.global.contractConfig.gasprice)};a.confirmOrder(m["ethers"].utils.parseEther(s),this.$route.query.item.value,this.$route.query.item.buyer,o).then(function(t){console.log(t),i.$q.loading.hide(),e.confirmOrderStatus(t.hash),i.util.showInfoDialog(i,t.hash,!1),i.util.listen4TxResult(i,t.hash,i.$t("ordersuccess"),i.$t("submitfailed"))}).catch(function(t){i.util.reprotError2Bmob(i,"confirmOrder",t,s+","+value+","+e.$route.query.item.buyer+","+o.value),i.$q.loading.hide()})},doConfrimReceipt:function(t){var e=this,i=this.global.otcContract.connect(t),a={gasPrice:m["ethers"].utils.bigNumberify(this.global.contractConfig.gasprice)};i.confirmPayed(parseInt(this.$route.query.item.order_contract_id)-1,a).then(function(t){console.log(t),e.$q.loading.hide(),e.confirmOrderPaid(t.hash),e.util.showInfoDialog(e,t.hash,!1),e.util.listen4TxResult(e,t.hash,e.$t("submitsuccess"),e.$t("submitfailed"))}).catch(function(t){e.util.reprotError2Bmob(e,"confirmPayed",t,parseInt(e.$route.query.item.order_contract_id)-1+""),e.$q.loading.hide()})},confirmOrderStatus:function(t){var e=this;this.$axios.put(this.global.apiconfig.otcbackapi+"/confirm_status?id="+this.$route.query.item.id+"&confirmOrderHash="+t,null,{headers:this.global.apiconfig.otcapiheader}).then(function(t){200===t.status&&0===t.data.code&&(e.orderStatus=1,clearInterval(r))})},confirmOrderPaid:function(t){var e=this;this.$axios.put(this.global.apiconfig.otcbackapi+"/confirm_receipt?id="+this.$route.query.item.id+"&receiptHash="+t,null,{headers:this.global.apiconfig.otcapiheader}).then(function(t){200===t.status&&0===t.data.code&&(e.orderStatus=3)})},orderCountdown:function(){var t=this;r=setInterval(function(){t.countdown--,0===t.countdown&&(t.isTimeOut=!0,t.cancelOrder(-1))},1e3)},cancelOrder:function(t){var e=this;clearInterval(r),this.$axios.put(this.global.apiconfig.otcbackapi+"/cancel_order?id="+this.$route.query.item.id+"&tag="+t,null,{headers:this.global.apiconfig.otcapiheader}).then(function(i){200===i.status&&0===i.data.code&&(e.orderStatus=t)})},phoneclick:function(t){this.$q.dialog({title:t})},appeal:function(){this.$route.query.item.whomaked=this.$route.query.type,this.$axios.post(this.global.apiconfig.BmobRestAPIUrl+"classes/appeal",this.$route.query.item,{headers:this.global.apiconfig.BmobRestAPIHeaders}).then(function(t){201===t.status&&toast("提交成功，客服将在24小时内介入处理")})}},beforeDestroy:function(){clearInterval(r),this.$q.loading.hide()},destroyed:function(){n.destroy(),o.destroy(),c.destroy(),l.destroy()}},_=g,b=(i("af9c"),i("2877")),v=Object(b["a"])(_,a,s,!1,null,"17007aa9",null);v.options.__file="OrderDetail.vue";e["default"]=v.exports},af9c:function(t,e,i){"use strict";var a=i("c6a5"),s=i.n(a);s.a},c6a5:function(t,e,i){}}]);