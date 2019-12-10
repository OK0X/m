(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["47e55582"],{"1e1d":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-bar"},[!1!==t.showBack?s("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}):t._e(),s("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},r=[],i={props:["titleTx","showBack"],methods:{goBack:function(){this.$router.go(-1)}}},c=i,l=(s("5854"),s("2877")),n=Object(l["a"])(c,a,r,!1,null,null,null);e["a"]=n.exports},5854:function(t,e,s){"use strict";var a=s("b722"),r=s.n(a);r.a},"8af4":function(t,e,s){},a715:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mypage"},[s("TitleBar",{attrs:{titleTx:t.title}}),s("div",{staticClass:"myblock",staticStyle:{padding:"0px",flex:"1"}},[s("div",{staticStyle:{display:"flex","flex-direction":"column","border-bottom":"1px solid rgba(247, 241, 241, 0.726)"}},[s("div",{staticStyle:{display:"flex","justify-content":"space-around","padding-top":"10px","padding-bottom":"10px"}},[s("span",{style:"buyorder"===t.selectedTab?"color: #44566B;":"color: #6F7D8E;",on:{click:function(e){return t.tabClick("buyorder")}}},[t._v(t._s(t.$t("buyorder")))]),s("span",{style:"sellorder"===t.selectedTab?"color: #44566B;":"color: #6F7D8E;",on:{click:function(e){return t.tabClick("sellorder")}}},[t._v(t._s(t.$t("sellorder")))])]),s("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[s("div",{staticClass:"tab-line",style:"buyorder"===t.selectedTab?"background-color:#687788;":"background-color:transparent;"}),s("div",{staticClass:"tab-line",style:"sellorder"===t.selectedTab?"background-color:#687788;":"background-color:transparent;"})])]),s("div",{staticClass:"order-block"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"buyorder"===t.selectedTab,expression:"selectedTab==='buyorder'"}],staticClass:"order-list"},t._l(t.buyorders,(function(e){return s("q-card",{key:e.index,staticClass:"otc-card",nativeOn:{click:function(s){return t.buyCardClick(e)}}},[s("div",{staticClass:"card-item"},[s("span",{staticClass:"mytx-minor",staticStyle:{"align-self":"center"}},[t._v(t._s(t.util.convertUTCTimeToLocalTime(e.create_at)))]),s("span",{style:{color:3===e.status?"green":e.status<0?"red":"black"}},[t._v(t._s(t.showStatus("buy",e.status)))])]),s("div",{staticClass:"card-item"},[s("span",[t._v(t._s(t.$t("buyeth")))]),s("span",{staticClass:"mytx-minor"},[t._v(t._s(t.$t("amount"))+":"+t._s(e.amount))])]),s("div",{staticClass:"card-item",staticStyle:{"justify-content":"flex-end"}},[s("span",{staticClass:"mytx-minor"},[t._v(t._s(t.$t("unitprice"))+":"+t._s(e.buy_price))])]),s("div",{staticClass:"card-item",staticStyle:{"justify-content":"flex-end"}},[s("span",{staticStyle:{color:"black"}},[t._v(t._s(t.$t("totalprice"))+":"+t._s(e.value))])])])})),1),s("div",{directives:[{name:"show",rawName:"v-show",value:"sellorder"===t.selectedTab,expression:"selectedTab==='sellorder'"}],staticClass:"order-list"},t._l(t.sellorders,(function(e){return s("q-card",{key:e.index,staticClass:"otc-card",nativeOn:{click:function(s){return t.sellCardClick(e)}}},[s("div",{staticClass:"card-item"},[s("span",{staticClass:"mytx-minor",staticStyle:{"align-self":"center"}},[t._v(t._s(t.util.convertUTCTimeToLocalTime(e.create_at)))]),s("span",{style:{color:3===e.status?"green":e.status<0?"red":"black"}},[t._v(t._s(t.showStatus("sell",e.status)))])]),s("div",{staticClass:"card-item"},[s("span",[t._v(t._s(t.$t("sellEth")))]),s("span",{staticClass:"mytx-minor"},[t._v(t._s(t.$t("amount"))+":"+t._s(e.amount))])]),s("div",{staticClass:"card-item",staticStyle:{"justify-content":"flex-end"}},[s("span",{staticClass:"mytx-minor"},[t._v(t._s(t.$t("unitprice"))+":"+t._s(e.buy_price))])]),s("div",{staticClass:"card-item",staticStyle:{"justify-content":"flex-end"}},[s("span",{staticStyle:{color:"black"}},[t._v(t._s(t.$t("totalprice"))+":"+t._s(e.value))])])])})),1)])])],1)},r=[],i=s("1e1d"),c=s("a002"),l=s.n(c),n={components:{TitleBar:i["a"]},data:function(){return{title:this.$t("myorder"),selectedTab:"buyorder",sellorders:[],buyorders:[],curtconfirmOrder:""}},mounted:function(){var t=this;l.a.getItem("buyorders").then((function(e){null!==e&&(t.buyorders=JSON.parse(e))})),l.a.getItem("sellorders").then((function(e){null!==e&&(t.sellorders=JSON.parse(e))})),this.getBuyOrder(),this.getSellOrder()},methods:{showStatus:function(t,e){switch(e){case 0:return"buy"===t?this.$t("waitadrecept"):this.$t("waiturecept");case 1:return"buy"===t?this.$t("waitupay"):this.$t("wait4pay");case 2:return"buy"===t?this.$t("confirmpay"):this.$t("confirmpayu");case 3:return this.$t("finished2");case-1:case-2:return this.$t("alreadycanceled")}},getBuyOrder:function(){var t=this,e={buyer:this.global.wallet.ethAddress},s=(new Date).getTime();this.$axios.get(this.global.apiconfig.otcbackapi+"otcorders/get_orders",{params:e,headers:{"access-token":this.util.generateToken(JSON.stringify(e),s),"otc-timestamp":s}}).then((function(e){200===e.status&&0===e.data.code&&(t.buyorders=e.data.data.rows,l.a.setItem("buyorders",JSON.stringify(t.buyorders)))}))},getSellOrder:function(){var t=this,e={seller:this.global.wallet.ethAddress},s=(new Date).getTime();this.$axios.get(this.global.apiconfig.otcbackapi+"otcorders/get_orders",{params:e,headers:{"access-token":this.util.generateToken(JSON.stringify(e),s),"otc-timestamp":s}}).then((function(e){200===e.status&&0===e.data.code&&(t.sellorders=e.data.data.rows,l.a.setItem("sellorders",JSON.stringify(t.sellorders)))}))},tabClick:function(t){this.selectedTab=t},buyCardClick:function(t){this.$router.push({path:"/OrderDetail",query:{item:t,type:"buy"}})},sellCardClick:function(t){this.$router.push({path:"/OrderDetail",query:{item:t,type:"sell"}})}},beforeDestroy:function(){}},o=n,d=(s("bf13"),s("2877")),u=Object(d["a"])(o,a,r,!1,null,"5b78fcf3",null);e["default"]=u.exports},b722:function(t,e,s){},bf13:function(t,e,s){"use strict";var a=s("8af4"),r=s.n(a);r.a}}]);