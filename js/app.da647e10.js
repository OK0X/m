(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var a=n("fb1c"),s=n.n(a);s.a},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var a=n("2b0e"),s=n("d1e7"),r=n("e84f"),o=n("4487"),i=n("7051"),l=n("46a9"),c=n("32a1"),u=n("c563"),p=n("db7b"),d=n("482e"),m=n("5d8b"),f=n("52b5"),b=n("1180"),g=n("506f"),h=n("b8d9"),y=n("0388"),v=n("d3e7"),w=n("1c93"),k=n("1526"),T=n("a9a0"),C=n("6780");a["a"].use(r["a"],{config:{cordova:{backButtonExit:!0}},i18n:s["a"],components:{QLayoutFooter:o["a"],QLayout:i["a"],QPageContainer:l["a"],QPage:c["a"],QTabs:u["a"],QTab:p["a"],QBtn:d["a"],QInput:m["a"],QIcon:f["a"],QList:b["a"],QItem:g["a"],QItemMain:h["a"],QDialog:y["a"],QProgress:v["a"],QRating:w["a"]},directives:{Ripple:k["a"]},plugins:{Loading:T["a"],Dialog:C["a"]}});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},P=[];x._withStripped=!0;n("7f7f"),n("4917");var A=n("e7ea"),I=n("a002"),M=n.n(I),_=n("96a1"),L={name:"App",data:function(){return{isGrayRelease:!1,latestVersionCode:0,updateTips:""}},created:function(){console.log("----app created");var e=this;M.a.getItem("cryptMnemonic").then(function(t){null===t?e.$router.push("/walletfirst"):e.global.cryptMnemonic=t}).catch(function(e){toast(e)}),this.checkConnection(),window.addEventListener("offline",this.onOffline,!1)},mounted:function(){console.log("----app mounted"),this.openinWeixinQQtips(),this.global.defaultProvider=new A["ethers"].providers.InfuraProvider(this.global.contractConfig.ethersNet,this.global.apiUrl.infuraPROJECTID),this.global.m3gameContract=new A["ethers"].Contract(this.global.contractConfig.smartFinaceAddress,this.global.m3gameABI,this.global.defaultProvider),this.global.nabContract=new A["ethers"].Contract(this.global.contractConfig.nabAddress,this.global.nabABI,this.global.defaultProvider),this.global.okContract=new A["ethers"].Contract(this.global.contractConfig.ok0xcoinAddress,this.global.okABI,this.global.defaultProvider),this.checkAppUpdate()},methods:{onOffline:function(){toast("网络已断开")},checkConnection:function(){var e=navigator.connection.type;"undefined"!==typeof Connection&&e===Connection.NONE&&toast("当前无网络")},openinWeixinQQtips:function(){var e=this;e.global.isWebVersion&&e.isWXQQBrowser()&&M.a.getItem("istip").then(function(t){null===t&&(e.$q.dialog({message:$t("openinqqtip"),color:"secondary"}),M.a.setItem("istip",!0))})},isWXQQBrowser:function(){return null!==navigator.userAgent.match("MicroMessenger|MQQBrowser")},checkAppUpdate:function(){var e=this;this.$axios.get(this.global.apiUrl.BmobRestAPIUrl+"cmaconfig",{headers:this.global.apiUrl.BmobRestAPIHeaders}).then(function(t){if(200===t.status){for(var n=t.data.results,a=0;a<n.length;a++)switch(n[a].name){case"latestVersionCode":e.latestVersionCode=n[a].value;break;case"updateTips":e.updateTips=n[a].value;break;case"updateUrl":e.global.bmobConfig.downloadUrl=n[a].value;break;case"referUrl":e.global.bmobConfig.referUrl=n[a].value;break;case"investDistrice24":e.global.bmobConfig.investDistrice24=n[a].value;break;case"grayScaleRelease":e.isGrayRelease="true"===n[a].value;break;case"minPerInvest":e.global.bmobConfig.minPerInvest=n[a].value;break;case"TTYDescribeCN":e.global.bmobConfig.TTYDescribeCN=n[a].value;break;case"TTYDescribeEN":e.global.bmobConfig.TTYDescribeEN=n[a].value;break;case"referLevel3Num":e.global.config.referLevel3Num=n[a].value;break;case"referLevel4Num":e.global.config.referLevel4Num=n[a].value;break;case"referLevel5Num":e.global.config.referLevel5Num=n[a].value;break;case"week1Ratio":e.global.config.week1Ratio=n[a].value;break;case"week2Ratio":e.global.config.week2Ratio=n[a].value;break;case"week3Ratio":e.global.config.week3Ratio=n[a].value;break;case"week4Ratio":e.global.config.week4Ratio=n[a].value;break;case"enspriceLevel1":e.global.bmobConfig.enspriceLevel1=n[a].value;break;case"enspriceLevel2":e.global.bmobConfig.enspriceLevel2=n[a].value;break;case"enspriceLevel3":e.global.bmobConfig.enspriceLevel3=n[a].value;break;case"enspriceLevel4":e.global.bmobConfig.enspriceLevel4=n[a].value;break;case"enspriceLevel5":e.global.bmobConfig.enspriceLevel5=n[a].value;break;case"nameMinLength":e.global.bmobConfig.nameMinLength=n[a].value;break;case"freeNameLength":e.global.bmobConfig.freeNameLength=n[a].value;break}e.getLocalAddress()}})},getLocalAddress:function(){var e=this;M.a.getItem("ethAddress").then(function(t){null!==t&&(e.global.wallet.ethAddress=t.toLowerCase(),e.getBmobLoginfo(t.toLowerCase()))})},getBmobLoginfo:function(e){var t=this,n={address:e};this.$axios.get(this.global.apiUrl.BmobRestAPIUrl+"login?where="+encodeURI(JSON.stringify(n)),{headers:this.global.apiUrl.BmobRestAPIHeaders}).then(function(e){200===e.status&&(0===e.data.results.length?t.bmobLoginSave():(t.bmobLoginUpdate(e.data.results[0].objectId),t.global.bmobConfig.isGrayUser="undefined"!==typeof e.data.results[0].AUser&&e.data.results[0].AUser,!t.global.isWebVersion&&t.latestVersionCode>t.global.versionCode&&(t.isGrayRelease?t.global.bmobConfig.isGrayUser&&t.showUpdateDialog():t.showUpdateDialog())))})},showUpdateDialog:function(){var e=this;this.$q.dialog({title:e.$t("havenew"),message:e.updateTips,ok:e.$t("downnew"),cancel:e.$t("updatelater")}).then(function(){Object(_["a"])(e.global.bmobConfig.downloadUrl)}).catch(function(){})},bmobLoginUpdate:function(e){this.$axios.put(this.global.apiUrl.BmobRestAPIUrl+"login/"+e,{appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.apiUrl.BmobRestAPIHeaders}).then(function(e){})},bmobLoginSave:function(){this.$axios.post(this.global.apiUrl.BmobRestAPIUrl+"login",{address:this.global.wallet.ethAddress,appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.apiUrl.BmobRestAPIHeaders}).then(function(e){})}}},R=L,N=(n("034f"),n("2877")),E=Object(N["a"])(R,x,P,!1,null,null,null);E.options.__file="App.vue";var U=E.exports,B=n("2f62"),D={count:0},S=n("a709"),H=n("8d6f"),Q=n("5781"),O={namespaced:!0,state:D,getters:S,mutations:H,actions:Q};a["a"].use(B["a"]);var V=function(){var e=new B["a"].Store({modules:{example:O}});return e},W=n("8c4f"),$=[{path:"/",component:function(){return Promise.all([n.e("50984092"),n.e("2d0a4887"),n.e("cc593d60")]).then(n.bind(null,"f241"))}},{path:"/walletfirst",component:function(){return n.e("7933fb6e").then(n.bind(null,"d4c0"))}},{path:"/walletcreate",component:function(){return Promise.all([n.e("50984092"),n.e("2d0a4887"),n.e("5298a240")]).then(n.bind(null,"41d7"))}},{path:"/ethtransfer",component:function(){return n.e("9b7cbcb6").then(n.bind(null,"63d0"))}},{path:"/transfereth",component:function(){return Promise.all([n.e("50984092"),n.e("2d0a4887"),n.e("2158a490")]).then(n.bind(null,"845e"))}},{path:"/receipteth",component:function(){return n.e("787323fa").then(n.bind(null,"7350"))}},{path:"/importwallet",component:function(){return Promise.all([n.e("2d0a4887"),n.e("d9a73c08")]).then(n.bind(null,"33c5"))}},{path:"/invest",component:function(){return n.e("61c1620b").then(n.bind(null,"47b2"))}},{path:"/investdetail",component:function(){return Promise.all([n.e("50984092"),n.e("0fb28c6f")]).then(n.bind(null,"1e34"))}},{path:"/TianTianYinReadMe",component:function(){return n.e("6c67977d").then(n.bind(null,"fcf0"))}},{path:"/transferdetail",component:function(){return n.e("9a7f2b10").then(n.bind(null,"6302"))}},{path:"/registeens",component:function(){return Promise.all([n.e("50984092"),n.e("2bd31d2a")]).then(n.bind(null,"2348"))}},{path:"/investhome",component:function(){return Promise.all([n.e("50984092"),n.e("77cee59a")]).then(n.bind(null,"f064"))}},{path:"/NameSell",component:function(){return Promise.all([n.e("50984092"),n.e("437320c6")]).then(n.bind(null,"7ea7"))}},{path:"/NameSellDetail",component:function(){return n.e("092d0ec5").then(n.bind(null,"75a0"))}},{path:"/Announcement",component:function(){return n.e("6961b814").then(n.bind(null,"ab38"))}},{path:"/test",component:function(){return n.e("26e01538").then(n.bind(null,"c961"))}}];$.push({path:"*",component:function(){return Promise.all([n.e("50984092"),n.e("2d0a4887"),n.e("cc593d60")]).then(n.bind(null,"f241"))}});var q=$;a["a"].use(W["a"]);var F,j,Y,K,z,X,G=function(){var e=new W["a"]({scrollBehavior:function(){return{y:0}},routes:q,mode:"hash",base:""});return e},J=function(){var e="function"===typeof V?V():V,t="function"===typeof G?G({store:e}):G;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(U)}};return{app:n,store:e,router:t}},Z=n("a925"),ee={failed:"Action failed",success:"Action was successful",ok:"OK",cancel:"Cancel",buy:"Buy",trrecord:"Transaction log",txsubmiting:"Submitting transaction, please wait...",toastnowallet:"There is currently no backup wallet and will jump to the Create Wallet page.",submitted:"Submitted",passworderror:"Password Error",viewresults:"View Results",close:"Close",receive:"Receive",send:"Send",tinvestment:"Total investment",trevenue:"Total revenue",app:"App",joinlog:"Join log",referral:"Referral award",curearned:"Currently earned",curprogress:"Current progress",myreferralnum:"My referral number",myrewardlevel:"My reward level",mrewardbal:"My reward balance",lastdrawt:"Last withdrawal time",withdraw:"Withdraw",submit:"submit",fillreferCode:"Please input referral code",referralcode:"referral code",canntrefself:"The referee cannot input yourself.",checking:"Checking,please wait...",invalidcode:"Invalid referral code",enterpswd:"Please enter your wallet password",pswdnull:"Password cannot be empty",referaward0:"Your referral award is 0.",cashonce24:"hours,Can only be cashed once.",drawsuccess:"Withdrawal successful",w:" W ",d:" D ",h:" H ",m:" M ",nodata:"No data",tipinputmnic:"Please enter a mnemonic, separated by a space",setpswd:"Please set the wallet password",confirmpswd:"Please confirm the password again",naojimima:"Please remember the password, we cant help you find it back.",importOK:"Successfully imported",mnicnull:"The mnemonic cannot be empty.",fillspacetip:"Multiple spaces entered at the {index} characters",pwsdless6:"The password length cannot be less than 6 characters.",twopswddiff:"Inconsistent input passwords twice",invlidmnic:"The mnemonic entered is invalid",beginimport:"Start importing",quickbuy:"Quick buy",customamt:"Or custom amount",ivamt:"Amount of investment",needcusum:"Need to consume",lookgg:"View announcement",joininv:"join in investment",singleinv:"Single investment amount minimum {min} ETH, up to {max} ETH",ethnotenough:"Your ETH balance is not enough, please transfer to sufficient ETH then try again.",gasfeeless:"Please reserve enough miners (eg: 0.001eth), otherwise the submit may fail.",cmatless:"Insufficient OK0X balance, please purchase the corresponding amount of OK0X first.",investsuccess:"Successful investment",investfail:"Investment failed, please try again",ivben:"Investing capital",ivstartt:"Starting time",ivprogress:"Current progress",candraw:"Currently available",repaytiptx:'Note: The current available is composed of the left of first three periods of the principal and interest: <span style="color:dodgerblue;">{leftCanDraw3}</span> ETH and the fourth period principal and interest: <span style="color:dodgerblue;">{bx4}</span> ETH,withdraw the fourth period need reinvest <span style="color:dodgerblue;">{iamt}</span> ETH',drawlog:"Withdraw log",ivdetail:"Invest Detail",candraw0:"The current available amount is 0",copyaddress:"Copy Address",alreadycpoy:"Address copied",refernoenstip:"You have not yet registered for the Ethereum domain name. You need to register your domain name to generate your exclusive recommendation code before you can make a recommendation. If you have already registered, please wait for the Ethereum network to confirm.",ensinputtip:"Please enter the name you want to register",vinstructions:"View instructions",ensregsub:'Currently you have submitted the rname <span class="dodgerblue">{regName}</span> for registration , please wait for the network confirmation',vprogress:"View progress",reregtiptx:'Currently you have registered a name <span class="dodgerblue">{oldname}</span>,After registe new name<span class="dodgerblue"> {newname} </span>successful,The original name will be released immediately.',registename:"Registered Name",isee:"Got it",nullinput:"Input cannot be empty",namelengtip:"The length should between 5 and 12",namealrdused:"The name has been registered, please choose another",registestuction:"<p>1. Support 5 to 12 digits of any letter, number and their combinations. 5 digits, 6 digits have a registration fee of 0.001 ETH, and 7 or more names are free to register.</p><p>2. Each name is unique across the network, stored in the blockchain, and is permanently owned after registration. Subsequent transactions are possible</p><p>3. This name has the function of the Ethereum domain name, which can be used instead of the address when transferring funds</p> <p>4. This name can be used as your exclusive recommendation code</p>",registesuccess:"name {name} registed successful",registefailed:"Registration failed, please try again later",switchlang:"Switch language",checkupdate:"Check update (current version:{versionName})",refertofred:"Share",feedback:"Feedback",exitcut:"Exit",backupmnic:"Backup mnemonic",getingcode:"Please wait, I am getting your referral code...",advphrase:"A true smart contract opens your journey to wealth",refercode:"Recommendation code",longtouchcopy:"[long press copy]",aleadylatest:"Already the latest version",contactus:"If you encounter any problems during use, please take easy to send an email to: support@ok0x.com, we will solve it for you in time.",havenew:"Have New!",downnew:"Download update",updatelater:"Try Later",cuationbackup:"Be sure to back up the mnemonic before exiting, otherwise you will not be able to restore your wallet.",mnemonic:"Mnemonic",from:"From",to:"To",gasfee:"Gas Fee",txhash:"Transaction #",block:"Block #",confirms:"Confirmation Number",txtime:"Transaction Time",ensoraddrs:"Receiver address or name",tramt:"Transfer amount",cbalance:"Current balance",addressnull:"The payment address cannot be empty.",tramtnull:"The transfer amount cannot be empty.",ensnoexist:"The name is not registered, please enter the address",wmnemonictip:"Important: Be sure to copy the mnemonics in a safe place to restore your wallet.",setsuccess:"Successful setup",cryptwallet:"Encrypted wallet",importwallet:"Import",createwallet:"Create",totalasset:"Total assets",openinqqtip:"Please open it in your mobile browser",timeout:"Network timeout, please try again later",error:"Error,Please try again later",nonetwork:"Currently no network",disconnect:"Disconnected",assets:"Assets",set:"Setting",inputbyamt:"Please enter the quantity purchased",drawamt:"Please enter the amount of cash",repayamt:"Please enter the reinvestment amount",cutprice:"Current price",payethnum:"You need to pay {num} ETH",numnull:"The quantity cannot be empty.",drawexceed:"The amount of cash raised cannot be greater than the amount available",repayinsuffit:"The amount of reinstatement cannot be less",drawexdtalivst:"The amount of cash raised cannot exceed the total investment amount.",cmatinsuft:"Insufficient OK0X balance, please purchase the corresponding amount of OK0X first.",registe:"Registered",cantregnew:"You have a domain name in the sale, please cancel first or wait for selled ,then register a new one.",submitsuccess:"Submitted successfully",submitfailed:"Submit failed, please try again later",transfersuccess:"Transfer successful",transferfailed:"Transfer failed",crypting:"Encryption, please wait...",namesellmax:"The maximum price cannot be greater than 100 ETH",daydayearn:"Investment",namereg:"Name Reg",namesell:"Name Sell",myname:"My Name",nonamecrt:"You have not registered any names yet.",gotoreg:"Go to registration",nsell:"Sell",modifysellprice:"Modify Price",cancelsell:"Cancel",inputsellprice:"Please enter the price",nselllist:"Sell List",candraw1:"WithDraw",finished:"Finished"},te=(n("28a5"),{lang:"zh-hans",label:{clear:"清空",ok:"确定",cancel:"取消",close:"关闭",set:"设置",select:"选择",reset:"重置",remove:"移除",update:"更新",create:"创建",search:"搜索",filter:"过滤",refresh:"刷新"},date:{days:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),daysShort:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"一_二_三_四_五_六_七_八_九_十_十一_十二".split("_"),firstDayOfWeek:0,format24h:!1},pullToRefresh:{pull:"下拉刷新",release:"释放刷新",refresh:"正在刷新..."},table:{noData:"没有可用数据",noResults:"找不到匹配的数据",loading:"正在加载...",selectedRecords:function(e){return"已选择"+e+"行"},recordsPerPage:"每页的行数:",allRows:"全部",pagination:function(e,t,n){return e+"-"+t+" / "+n},columns:"列"},editor:{url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除样式",formatting:"格式化",fontSize:"字体大小",align:"对齐",hr:"插入水平线",undo:"撤消",redo:"重做",header1:"标题一",header2:"标题二",header3:"标题三",header4:"标题四",header5:"标题五",header6:"标题六",paragraph:"段落",code:"代码",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",defaultFont:"默认字体"},tree:{noNodes:"没有可用节点",noResults:"找不到匹配的节点"},ok:"确定",cancel:"取消",buy:"买入",trrecord:"交易记录",txsubmiting:"正在提交交易，请稍后...",toastnowallet:"当前没有可备份钱包，将跳到创建钱包页面。",submitted:"已提交",passworderror:"密码错误",viewresults:"查看结果",close:"关闭",receive:"收款",send:"转账",tinvestment:"总投入本金",trevenue:"总收益",app:"应用",joinlog:"参与记录",referral:"推荐奖",curearned:"当前已赚",curprogress:"当前进度",myreferralnum:"我的推荐人数",myrewardlevel:"我的奖励等级",mrewardbal:"我的奖励余额",lastdrawt:"最近一次提现时间",withdraw:"提现",submit:"提交",fillreferCode:"填写推荐码",referralcode:"推荐码",canntrefself:"推荐人不能填写自己哦.",checking:"检测中，请稍后...",invalidcode:"推荐码无效",enterpswd:"请输入钱包密码",pswdnull:"密码不能为空哦",referaward0:"你的推荐奖为0",cashonce24:"小时，只能提现一次",drawsuccess:"提现成功",drawfailed:"提现失败,请稍后重试",w:"周",d:"天",h:"小时",m:"分",nodata:"无数据",tipinputmnic:"请输入助记词，按空格分隔",setpswd:"请设置钱包密码",confirmpswd:"请再次确认密码",naojimima:"请牢记密码，我们无法帮您找回",importOK:"导入成功",mnicnull:"助记词不能为空哦",fillspacetip:"第 {index} 个字符处输入了多个空格",pwsdless6:"密码长度不能小于6位哦",twopswddiff:"两次输入密码不一致哦",invlidmnic:"输入的助记词无效",beginimport:"开始导入",quickbuy:"快捷买入",customamt:"或自定义金额",ivamt:"投入金额",needcusum:"需要消耗",lookgg:"查看公告",joininv:"参与投资",singleinv:"单笔投入金额最少{min} ETH,最多{max} ETH",ethnotenough:"你的ETH余额不足，请先转入足量ETH再操作",gasfeeless:"请预留足够的矿工费(例如：0.001eth)，否则可能提交失败",cmatless:"OK0X余额不足，请先购买相应数量的OK0X",investsuccess:"投资成功",investfail:"投资失败，请重试",ivben:"投入本金",ivstartt:"起投时间",ivprogress:"当前进度",candraw:"当前可提",repaytiptx:'说明：当前可提包含前3期本息剩余可提: <span style="color:dodgerblue;">{leftCanDraw3}</span> ETH和第4期本息: <span style="color:dodgerblue;">{bx4}</span> ETH，提取第四期部分需复投当期本金(<span style="color:dodgerblue;">{iamt}</span> ETH)的金额',drawlog:"提现记录",ivdetail:"投入详情",candraw0:"当前可提金额为 0",copyaddress:"复制地址",alreadycpoy:"地址已复制",refernoenstip:"你还未注册以太坊域名,需要先注册域名生成你的专属推荐码后才能进行推荐,如果已经注册，请等待以太坊网络确认。",ensinputtip:"请输入你想要注册的域名",vinstructions:"查看说明",ensregsub:'当前你已提交注册 <span class="dodgerblue">{regName}</span>的域名，请等待网络确认',vprogress:"查看进展",reregtiptx:'当前你已注册域名<span class="dodgerblue">{oldname}</span>。注册新域名<span class="dodgerblue">{newname}</span>成功后，原域名会立即释放。',registename:"注册域名",isee:"知道了",nullinput:"输入不能为空哦",namelengtip:"长度在5到12位之间哦",namealrdused:"名称已被注册,请重新选择一个",registestuction:"<p>1.支持填写5到12位任意字母，数字和汉字及其组合，其中5位，6位的名称注册费用0.001ETH,7位及以上名称免费注册</p><p>2.每个名称全网唯一，存储在区块链上，注册后永久拥有，后续可交易</p><p>3.该名称具有以太坊域名的功能，转账时可代替地址使用</p><p>4.该名称可做为你的专属推荐码</p>",registesuccess:"域名 {name} 注册成功",registefailed:"注册失败，请稍后重试",switchlang:"切换语言",checkupdate:"检测更新(当前版本:{versionName})",refertofred:"推荐给好友",feedback:"问题反馈",exitcut:"退出当前账号",backupmnic:"备份助记词",getingcode:"请稍后，正在获取你的推荐码...",advphrase:"真正的智能合约开启你的财富之旅",refercode:"推荐码",longtouchcopy:"【长按复制】",aleadylatest:"已是最新版",contactus:"使用过程中遇到任何问题可发邮件到：support@ok0x.com ，我们将及时为你解决。",havenew:"有新的版本！",downnew:"下载更新",updatelater:"暂不更新",cuationbackup:"务必先备份助记词后再退出,否则将无法恢复钱包",mnemonic:"助记词",from:"发款方",to:"收款方",gasfee:"矿工费用",txhash:"交易号",block:"区块",confirms:"确认数",txtime:"交易时间",ensoraddrs:"收款人地址或域名",tramt:"转账金额",cbalance:"当前余额",addressnull:"收款地址不能为空哦",tramtnull:"转账金额不能为空哦",ensnoexist:"名称未注册，请输入地址",wmnemonictip:"重要提示：请务必将助记词抄写在安全的地方，以便恢复钱包使用",setsuccess:"设置成功",cryptwallet:"加密钱包",importwallet:"导入钱包",createwallet:"创建钱包",totalasset:"总资产",openinqqtip:"请用手机自带浏览器(或谷歌，火狐，UC，360等常用手机浏览器)打开，微信和QQ里面不具备标准浏览器的功能，无法正常使用。若不是在微信和QQ里面使用请忽略该提示",timeout:"网络超时，请稍后重试",error:"出错了,请稍后重试",nonetwork:"当前无网络",disconnect:"网络已断开",assets:"资产",set:"设置",inputbyamt:"请输入购买数量",drawamt:"请输入提现金额",repayamt:"请输入复投金额",cutprice:"当前价",payethnum:"你需要支付{num}个ETH",numnull:"数量不能为空哦",drawexceed:"提现金额不能大于可提数量",repayinsuffit:"复投金额不能少于",drawexdtalivst:"提现金额不能大于总投资金额哦",cmatinsuft:"OK0X余额不足，请先购买相应数量的OK0X",registe:"注册",cantregnew:"你有域名正在出售中,请先取消或等成交后再注册新域名",submitsuccess:"提交成功",submitfailed:"提交失败，请稍后重试",transfersuccess:"转账成功",transferfailed:"转账失败",crypting:"加密中，请稍后...",namesellmax:"最高售价不能大于100ETH",daydayearn:"天天盈",namereg:"域名注册",namesell:"域名交易",myname:"我的域名",nonamecrt:"你当前还未注册任何域名",gotoreg:"前往注册",nsell:"出售",modifysellprice:"修改售价",cancelsell:"取消出售",inputsellprice:"请输入售价",nselllist:"出售的域名",candraw1:"可提",finished:"已结束"}),ne={"en-us":ee,"zh-cn":te},ae=function(e){var t=e.app,n=e.Vue;n.use(Z["a"]),t.i18n=new Z["a"]({locale:localStorage.getItem("lang")||("zh-cn"===navigator.language.toLowerCase()?"zh-cn":"en-us"),fallbackLocale:"en-us",messages:ne})},se=n("bc3a"),re=n.n(se),oe=function(e){var t=e.Vue;t.prototype.$axios=re.a},ie=n("b5ab"),le=n("c9f9"),ce=n("de00"),ue={smartFinaceAddress:"0x0aa919017d565d2cd9c70af8f22bf72d97b141bf",ok0xcoinAddress:"0x5e11b24f5d03a48f7868f76b73bb8f1072403954",nabAddress:"0x7a45c9c1b3cef3865b8c165e10e0e341692e55f9",ethersNet:"homestead",eventFromBlock:7162382},pe={BmobRestAPIUrl:"https://api2.bmob.cn/1/classes/",BmobRestAPIHeaders:{"X-Bmob-Application-Id":"ac7f17d258941e666eb88514048c351a","X-Bmob-REST-API-Key":"f31e47e1bcf4d276e1bc19226abee442","Content-Type":"application/json"},infuraPROJECTID:"302e28323be84e288f504f5d1ad75cce",etherscanAPIKey:"HTVDPVIB3UCKJVVVFHMJ9B9WPJWEWFRUS8",etherscanAPIPrefix:"https://api",etherscanio:"https://etherscan.io/"},de="1.8.0",me=180,fe=!0,be="0x0000000000000000000000000000000000000000",ge=3e3,he="",ye="wallet",ve={ethAddress:"",lastEthbalance:"0.0000",lastMcoinBalance:"0.0000"},we={investDistrice24:!0,minPerInvest:.1,isGrayUser:!1,enspriceLevel1:10,enspriceLevel2:5,enspriceLevel3:1,enspriceLevel4:.1,enspriceLevel5:.01,nameMinLength:4,freeNameLength:7,announcementCN:"",announcementCNUpdated:"",announcementEN:"",announcementENUpdated:"",downloadUrl:"",referUrl:"https://m.ok0x.com",TTYDescribeCN:"",TTYDescribeEN:""},ke={referLevel3Num:6,referLevel4Num:10,referLevel5Num:12,week1Ratio:100,week2Ratio:100,week3Ratio:100,week4Ratio:100,totolApproveAmt:5e3,maxPerInvest:10,handlingFee:100,intervalHours:24,referDrawInterval:24,mcoinPrice:.001},Te={m3gameABI:ie,contractConfig:ue,defaultProvider:j,wallet:ve,m3gameContract:Y,currentTab:ye,emptyAddress:be,config:ke,taskInterval:ge,versionName:de,versionCode:me,isWebVersion:fe,apiUrl:pe,nabContract:K,nabABI:le,ensname:he,cryptMnemonic:X,ethPrice:F,bmobConfig:we,okABI:ce,okContract:z},Ce=function(e){var t=e.Vue;t.prototype.global=Te},xe=(n("6b54"),n("3452"));function Pe(e,t){try{var n=xe.AES.decrypt(e.global.cryptMnemonic,t),a=n.toString(xe.enc.Utf8),s=A["ethers"].Wallet.fromMnemonic(a),r=s.connect(e.global.defaultProvider);return r}catch(t){console.error(t),toast(e.$t("passworderror")),e.$q.loading.hide()}}function Ae(e,t,n,a){e.$q.dialog({title:t,message:"",ok:e.$t("viewresults"),cancel:e.$t("close")}).then(function(){a&&e.$router.go(-1),Object(_["a"])(e.global.apiUrl.etherscanio+"tx/"+n)}).catch(function(){a&&e.$router.go(-1)})}function Ie(e,t,n,a,s){e.global.defaultProvider.once(t,function(e){console.log("----Transaction Minded:----"),1===e.status?(toast(n),"function"===typeof s&&s()):toast(a)})}function Me(e,t,n){console.error(n),(n+"").indexOf("insufficient funds")>=0?toast("操作失败,请预留充足的矿工费后再操作"):(n+"").indexOf("timeout")>=0?toast("网络超时，请稍后重试"):toast("出错了,请稍后重试"),e.$axios.post(e.global.apiUrl.BmobRestAPIUrl+"errorlog",{address:e.global.wallet.ethAddress,error:n+"",method:t},{headers:e.global.apiUrl.BmobRestAPIHeaders}).then(function(e){})}function _e(e){function t(e){return e>9?e:"0"+e}var n=new Date(e),a=n.getFullYear(),s=t(n.getMonth()+1),r=t(n.getDate()),o=n.getHours();o=t(o);var i=t(n.getMinutes()),l=a+"-"+s+"-"+r+" "+o+":"+i;return l}var Le={getWallet:Pe,showInfoDialog:Ae,listen4TxResult:Ie,reprotError2Bmob:Me,convertUTCTimeToLocalTime:_e},Re=n("a65d"),Ne=n.n(Re),Ee=function(e){var t=e.Vue;t.use(Ne.a),window.toast=function(e){t.toasted.show(e,{theme:"bubble",position:"top-center",duration:3e3})},t.prototype.util=Le},Ue=J(),Be=Ue.app,De=Ue.store,Se=Ue.router;[ae,oe,Ce,Ee].forEach(function(e){e({app:Be,router:Se,store:De,Vue:a["a"],ssrContext:null})}),new a["a"](Be)},5781:function(e,t){},"7e6d":function(e,t,n){},"8d6f":function(e,t){},a709:function(e,t){},b5ab:function(e){e.exports=[{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referNums",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referAwards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referLastdrawTi",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"totalInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"refermap",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getStatus",outputs:[{name:"_status",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"tAlreadyDrawById",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcctBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcct",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConfigInfo",outputs:[{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_referDrawInterval",type:"uint256"},{name:"_intervalHours",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"referWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"inverstOnce",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"refer",type:"address"}],name:"referAndInvestOnce",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"},{name:"amt",type:"uint256"}],name:"investWithdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"contrDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"number",type:"uint256"}],name:"buyMCoin",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"investid",type:"uint256"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investEvent",type:"event"},{constant:!1,inputs:[{name:"refer",type:"address"}],name:"onlyRefer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]},c9f9:function(e){e.exports=[{constant:!1,inputs:[{name:"name",type:"string"}],name:"registeNameByEth",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"ensname",type:"string"},{name:"recipient",type:"address"},{name:"mobile",type:"string"},{name:"name",type:"string"},{name:"payMethod1",type:"string"},{name:"payMethod2",type:"string"},{name:"payMethod3",type:"string"}],name:"registeNameWithNotify",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"getAddress",outputs:[{name:"_address",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_address",type:"address"}],name:"getName",outputs:[{name:"name",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"name",type:"string"},{name:"priceEth",type:"uint256"}],name:"sellName",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]},de00:function(e){e.exports=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]},fb1c:function(e,t,n){}},[[0,"runtime","vendor"]]]);