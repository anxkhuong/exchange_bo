(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4acdb9"],{"210b":function(t,e,s){t.exports=s.p+"img/paypal-mini.4a147115.png"},"64f2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list-container",attrs:{id:"list-trade-member"}},[a("vs-prompt",{staticClass:"export-options",attrs:{title:"Export To Excel","accept-text":"Export",active:t.activePrompt},on:{cancle:t.clearFields,accept:t.exportToExcel,close:t.clearFields,"update:active":function(e){t.activePrompt=e}}},[a("vs-input",{staticClass:"w-full",attrs:{placeholder:"Enter File Name.."},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),a("v-select",{staticClass:"my-4",attrs:{options:t.formats},model:{value:t.selectedFormat,callback:function(e){t.selectedFormat=e},expression:"selectedFormat"}}),a("div",{staticClass:"flex"},[a("span",{staticClass:"mr-4"},[t._v("Cell Auto Width:")]),a("vs-switch",{model:{value:t.cellAutoWidth,callback:function(e){t.cellAutoWidth=e},expression:"cellAutoWidth"}},[t._v("Cell Auto Width")])],1)],1),a("div",{staticClass:"vs-con-loading__container",attrs:{id:"loading-corners"}},[a("div",{staticClass:"mb-2"},[a("p",[a("span",{staticClass:"mr-4",staticStyle:{color:"#ffb0b0"}},[t._v("Tổng tiền nạp: "),a("b",[t._v(t._s(t.formatPrice(t.dtUSD,2))+" USDT")])]),a("span",{staticClass:"mr-4",staticStyle:{color:"#ffa500"}},[t._v("Phí: "),a("b",[t._v(t._s(t.formatPrice(t.feeBNB,10))+" BNB")])])]),a("p",[a("span",{staticClass:"mr-4",staticStyle:{color:"#ffb0b0"}},[t._v("Tổng tiền rút: "),a("b",[t._v(t._s(t.formatPrice(t.dtUSDR,2))+" USDT")])]),a("span",{staticClass:"mr-4",staticStyle:{color:"#ffa500"}},[t._v("Phí: "),a("b",[t._v(t._s(t.formatPrice(t.feeBNBR,10))+" BNB")])])]),a("p",[a("span",{staticClass:"mr-4",staticStyle:{color:"#ffb0b0"}},[t._v("Tổng: "),a("b",[t._v(t._s(t.formatPrice(t.dtUSD-t.dtUSDR,2))+" USDT")])]),a("span",{staticClass:"mr-4",staticStyle:{color:"#ffa500"}},[t._v("Tổng Phí: "),a("b",[t._v(t._s(t.formatPrice(t.feeBNB-t.feeBNBR,10))+" BNB")])])])]),a("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.products},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return[a("tbody",t._l(r,(function(e,r){return a("vs-tr",{key:r,attrs:{data:e}},[a("vs-td",[a("p",{staticClass:"trade-account font-medium truncate"},[t._v("Từ: "+t._s(e.from_u)),a("br"),t._v("Đến: "+t._s(e.to_u)),a("br"),a("br"),t._v("Mô tả: "+t._s(e.type))])]),a("vs-td",[a("p",{staticClass:"trade-amount"},[null==e.paypal?a("IconCrypto",{staticStyle:{width:"20px"},attrs:{coinname:t.getIconType(e.currency),color:"color",format:"svg"}}):a("img",{attrs:{width:"20",src:s("210b")}}),t._v(" \n\n                        "+t._s(t.getAmountDecimal(e.currency,e.amount))+"\n\n                    ")],1)]),a("vs-td",[a("p",{staticClass:"trade-note"},[t._v(t._s(e.note))])]),a("vs-td",[a("vs-chip",{staticClass:"de-status",attrs:{color:t.getOrderStatusColor(e.status)}},[t._v(t._s(t._f("title")(t.getOrderStatusColorText(e.status))))])],1),a("vs-td",[a("p",{staticClass:"trade-create"},[t._v(t._s(t.formatDate(e.created_at)))])]),a("vs-td",{staticClass:"whitespace-no-wrap text-center"}),a("vs-td",{staticClass:"whitespace-no-wrap text-center"},[0==e.delete_status?a("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"danger",text:"Xóa"}},[a("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-trash"},on:{click:function(s){return s.stopPropagation(),t.deleteTrade(e.id,r,1)}}})],1):a("vx-tooltip",{staticStyle:{float:"left"},attrs:{color:"warning",text:"Thu hồi"}},[a("vs-button",{attrs:{color:"dark",type:"line","icon-pack":"feather",icon:"icon-arrow-up-left"},on:{click:function(s){return s.stopPropagation(),t.deleteTrade(e.id,r,0)}}})],1)],1)],1)})),1)]}}]),model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"flex flex-wrap-reverse items-center data-list-btn-container"},[a("vs-dropdown",{staticClass:"dd-actions cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full"},[a("span",{staticClass:"mr-2"},[t._v("Tác vụ")]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",[t.showDeleteMultiBt?a("span",{staticClass:"flex items-center",on:{click:t.deleteMultiple}},[a("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),a("span",[t._v("Xóa")])],1):t._e()]),a("vs-dropdown-item",[a("span",{staticClass:"flex items-center",on:{click:function(e){t.activePrompt=!0}}},[a("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),a("span",[t._v("In")])],1)])],1)],1),a("div",{staticClass:"btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-danger border border-solid border-danger",on:{click:function(e){return e.stopPropagation(),t.getTrashTrade.apply(null,arguments)}}},[a("feather-icon",{attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2 text-base text-danger"},[t._v("Thùng rác")])],1),a("div",{staticClass:"btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-success border border-solid border-success",on:{click:t.reloadList}},[a("feather-icon",{attrs:{icon:"ArrowLeftIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2 text-base text-sucess"},[t._v("Trở về")])],1)],1),a("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4 items-per-page-handler",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.products.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.products.length)+" of "+t._s(t.queriedItems))]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=4}}},[a("span",[t._v("4")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[a("span",[t._v("10")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[a("span",[t._v("15")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[a("span",[t._v("20")])])],1)],1)],1),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"account"}},[t._v("Tài khoản")]),a("vs-th",{attrs:{"sort-key":"amount"}},[t._v("Số tiền")]),a("vs-th",{attrs:{"sort-key":"note"}},[t._v("Ghi chú")]),a("vs-th",{attrs:{"sort-key":"status"}},[t._v("Trạng thái")]),a("vs-th",{attrs:{"sort-key":"datecreate"}},[t._v("Thời gian")]),a("vs-th",[t._v("Tác vụ")])],1)],2)],1)],1)},r=[],n=s("4a7a"),o=s.n(n),i=s("c5b9"),c=s("c1df"),l=s.n(c),d=s("2b0e"),u={components:{vSelect:o.a},data:function(){return{showDeleteMultiBt:!0,activePrompt:!1,selectedUser:[],fileName:"",formats:["xlsx","csv","txt"],cellAutoWidth:!0,selectedFormat:"xlsx",headerTitle:["ID","Mô tả","Số Tiền","Ghi Chú","Ngày Giao Dịch"],headerVal:["id","account","amount","note","datecreate"],productsFake:[{id:1,from_u:"123",to_u:"5344",type_key:"hh",type:"Hoa hồng Giao dịch",currency:"sys",amount:100,note:"",status:1,created_at:"00:00:00 02-04-2021"},{id:2,from_u:"123",to_u:"0x9459287648927947298453",type_key:"rt",type:"Rút tiền Onchain",currency:"BTC",amount:100,note:"",status:0,created_at:"00:00:00 02-04-2021"},{id:3,from_u:"123",to_u:"0x9459287648927947298453",type_key:"rt",type:"Rút tiền ERC20",currency:"ETH",amount:100,note:"",status:0,created_at:"00:00:00 02-04-2021"},{id:4,from_u:"123",to_u:"skyNice",type_key:"rt",type:"Rút tiền (Nội bộ)",currency:"sys",amount:100,note:"",status:1,created_at:"00:00:00 02-04-2021"},{id:5,from_u:"5436434",to_u:"skyNice",type_key:"ct",type:"Chuyển tiền từ Live Account -> (Nội bộ)",currency:"sys",amount:100,note:"",status:1,created_at:"00:00:00 02-04-2021"},{id:6,from_u:"skyNice",to_u:"431344",type_key:"rt",type:"Chuyển tiền từ (Nội bộ) -> Live Account",currency:"sys",amount:100,note:"",status:1,created_at:"00:00:00 02-04-2021"}],itemsPerPage:10,isMounted:!1,dtUSD:0,dtBNB:0,feeBNB:0,dtUSDR:0,dtBNBR:0,feeBNBR:0}},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0},products:function(){return this.productsFake},queriedItems:function(){return this.$refs.table?this.$refs.table.queriedResults.length:this.productsFake.length}},methods:{deleteMultiple:function(){var t=this,e=localStorage.getItem("token");if(this.$store.dispatch("setToken",e),0==this.selectedUser.length)return this.$vs.notify({text:"Hãy chọn đối tượng cần xóa",color:"warning",iconPack:"feather",icon:"icon-check"});for(var s=this.selectedUser.length-1;s>=0;s--){var a=this.selectedUser[s]["id"],r={id:a,val:1};i["a"].deleteTrashByID(r).then((function(e){e.data.success||(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))})),d["default"].delete(this.productsFake,s)}return this.selectedUser=[],this.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"})},deleteTrade:function(t,e,s){var a=this,r=localStorage.getItem("token");this.$store.dispatch("setToken",r);var n={id:t,val:s};i["a"].deleteTrashByID(n).then((function(t){if(t.data.success)return d["default"].delete(a.productsFake,e),a.popupDeleteActive=!1,a.$vs.notify({text:"Đã xóa thành công",color:"success",iconPack:"feather",icon:"icon-check"});localStorage.removeItem("token"),a.$router.push("/pages/login").catch((function(){}))}))},getOrderStatusColor:function(t){return 0==t?"warning":1==t?"success":3==t?"danger":"warning"},getOrderStatusColorText:function(t){return 0==t?"Chờ xử lý":1==t?"Hoàn thành":3==t?"Không giải quyết":"Chờ xử lý"},getIconType:function(t){var e=t;return null==e&&(e="usdt"),e},formatDate:function(t){if(t)return l()(String(t)).format("MM/DD/YYYY hh:mm:ss")},formatPrice:function(t,e){void 0===t&&(t=0);var s=new Intl.NumberFormat("en-US",{minimumFractionDigits:e});return s.format(t)},getAmountDecimal:function(t,e){null==t&&(t="usdt");var s="$",a=t.toUpperCase(),r=2;"BTC"==a&&(r=6),"ETH"==a&&(r=4),"USDT"==a&&(r=2);var n=new Intl.NumberFormat("en-US",{minimumFractionDigits:r});return s+n.format(e)},toggleDataSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.addNewDataSidebar=t},getTrashTrade:function(){var t=this;this.showDeleteMultiBt=!1;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),i["a"].gethistoryAllTrash().then((function(e){e.data.success?t.productsFake=e.data.data:(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))}))},exportToExcel:function(){var t=this;if(0==this.selectedUser.length)return this.$vs.notify({title:"Xuất dữ liệu",text:"Vui lòng chọn nội dung để hoàn thành",color:"danger",iconPack:"feather",icon:"icon-heart"});Promise.all([s.e("chunk-2a72a530"),s.e("chunk-510b18c2")]).then(s.bind(null,"4bf8d")).then((function(e){var s=t.selectedUser,a=t.formatJson(t.headerVal,s);e.export_json_to_excel({header:t.headerTitle,data:a,filename:t.fileName,autoWidth:t.cellAutoWidth,bookType:t.selectedFormat}),t.clearFields()}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},clearFields:function(){this.fileName="",this.cellAutoWidth=!0,this.selectedFormat="xlsx"},openLoadingInDiv:function(){this.$vs.loading({container:"#loading-corners",type:"corners",scale:.6})},reloadList:function(){var t=this;this.showDeleteMultiBt=!0;var e=localStorage.getItem("token");this.$store.dispatch("setToken",e),i["a"].getTradeListHistory().then((function(e){t.$vs.loading.close("#loading-corners > .con-vs-loading"),e.data.success?t.productsFake=e.data.data:(localStorage.removeItem("token"),t.$router.push("/pages/login").catch((function(){})))}))},getDTNap:function(){var t=this;i["a"].getRevenueNap().then((function(e){var s=e.data;1==s.success&&(t.dtUSD=s.data.dtUSD,t.dtBNB=s.data.dtBNB,t.feeBNB=s.data.freeBNB)}))},getDTRut:function(){var t=this;i["a"].getRevenueRut().then((function(e){var s=e.data;1==s.success&&(t.dtUSDR=s.data.dtUSD,t.dtBNBR=s.data.dtBNB,t.feeBNBR=s.data.freeBNB)}))}},created:function(){this.reloadList(),this.getDTNap(),this.getDTRut()},mounted:function(){this.isMounted=!0,this.openLoadingInDiv()}},h=u,f=(s("a895"),s("2877")),p=Object(f["a"])(h,a,r,!1,null,null,null);e["default"]=p.exports},a895:function(t,e,s){"use strict";s("c96e")},c96e:function(t,e,s){}}]);