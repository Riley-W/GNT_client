(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53822e84"],{"454c":function(t,e,o){"use strict";o("ec77")},ec77:function(t,e,o){},f0e4:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mb-4"},[o("loading",{attrs:{active:t.isLoading,loader:"spinner",color:t.loader.color,width:t.loader.width,height:t.loader.height,"lock-scroll":t.loader.lockScroll,"is-full-page":t.loader.isFullPage}}),o("h1",{staticClass:"h2 mb-5 mt-5"},[t._v("我的最愛")]),t._m(0),o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table align-middle table-hover table-striped table-favorite"},[t._m(1),o("tbody",t._l(t.favorites,(function(e,a){return o("tr",{key:a},[e.ShopInfo?o("th",[t._v(t._s(e.ShopInfo.Name))]):t._e(),o("td",[t._v(" "+t._s(e.ShopInfo.Address)+" ")]),o("td",{staticClass:"text-center"},[t._v(t._s(e.ShopInfo.Min))]),o("td",[o("button",{staticClass:"btn btn-outline-gray btn-sm me-2",attrs:{type:"button"},on:{click:function(o){return t.openShopModal(e.ShopInfo,"more")}}},[t._v(" 查看更多 ")]),o("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(o){return t.openShopModal(e,"delete")}}},[t._v(" 移除 ")])])])})),0)])]),o("ShopInfoModal",{ref:"modal",attrs:{favorite:t.tempFavorite}}),o("DeleteModal",{ref:"delModal",attrs:{type:t.delType,item:t.tempFavorite},on:{"delete-item":t.deleteFavorite}})],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("h2",{staticClass:"h4 mb-3"},[t._v("已儲存的地點")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("店家名稱")]),o("th",[t._v("店家地區")]),o("th",{staticClass:"text-center"},[t._v("低消")]),o("th",{attrs:{width:"150"}})])])}],i=o("5530"),s=(o("ac1f"),o("5319"),o("a9e3"),o("99af"),o("d3b7"),o("159b"),o("27ed")),l=o("ec05"),c={components:{ShopInfoModal:s["a"],DeleteModal:l["a"]},data:function(){return{memberID:0,favorites:[],tempFavorite:{},delType:"favorite",isLoading:!0,loader:{width:150,height:150,color:"#000",lockScroll:!0,isFullPage:!0}}},inject:["emitter"],methods:{getMemberID:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,"$1");this.memberID=Number(t)},getFavorites:function(){var t=this,e="".concat("https://localhost:44333","/api/MemberFavorites/").concat(this.memberID);this.isLoading=!0,this.$http.get(e).then((function(e){setTimeout((function(){t.isLoading=!1}),1e3),t.favorites=e.data,t.favorites.forEach((function(e,o){t.getShopInfo(e.ShopID,o)}))})).catch((function(t){console.log(t)}))},getShopInfo:function(t,e){var o=this,a="".concat("https://localhost:44333","/api/shopinfoes/").concat(t);this.$http.get(a).then((function(t){o.favorites[e].ShopInfo=t.data[0]})).catch((function(t){console.log(t)}))},deleteFavorite:function(t){var e=this,o="".concat("https://localhost:44333","/api/MemberFavorites/").concat(t.MemberID,"/").concat(t.ShopID);this.$http.delete(o).then((function(){e.emitter.emit("push-message",{style:"primary",title:"已移除"}),e.getFavorites(),e.$refs.delModal.closeModal()})).catch((function(t){console.log(t)}))},openShopModal:function(t,e){this.tempFavorite=Object(i["a"])({},t),"more"===e?this.$refs.modal.openModal():"delete"===e&&this.$refs.delModal.openModal()}},mounted:function(){this.getMemberID(),this.getFavorites()}},r=c,h=(o("454c"),o("2877")),d=Object(h["a"])(r,a,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-53822e84.4b50a085.js.map