(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-924a4ca8"],{"46a5":function(t,e,a){"use strict";var s,o,n,i,r,l,c,d,u,m,h,p,f,b,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"modal",staticClass:"modal fade",staticStyle:{"z-index":"11000"},attrs:{id:"exampleModal"}},[a("div",{staticClass:"modal-dialog modal-xl modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-primary"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("輪盤小遊戲")]),a("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.closeModal}})]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container d-lg-flex"},[a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[a("div",{staticClass:"wheelArea position-relative"},[a("button",{attrs:{type:"button",id:"spin_button",disabled:t.isRoll},on:{click:t.btnEvent}},[t._v(" 開始 ")]),a("canvas",{attrs:{id:"canvas"}})]),a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:t.removerAll}},[t._v(" 移除全部 ")])]),a("table",{staticClass:"table table-striped table-hover align-middle"},[t._m(0),a("tbody",t._l(t.points,(function(e,s){return a("tr",{key:s},[a("th",{staticClass:"text-center"},[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.name))]),a("td",[a("button",{staticClass:"btn btn-danger btn-sm text-white",attrs:{type:"button"},on:{click:function(a){return t.removerPoint(e.key)}}},[t._v(" 移除 ")])])])})),0)])])]),t._m(1)])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("編號")]),a("th",[t._v("景點名稱")]),a("th")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" 關閉 ")])])}],g=(a("cb29"),a("b0c0"),a("b64b"),a("d3b7"),a("159b"),a("7c2b")),_=a.n(g),x={data:function(){return{modal:"",points:[],isRoll:!1}},inject:["emitter"],methods:{init:function(){s=document.getElementById("canvas"),s.width=350,s.height=350,o=s.getContext("2d"),n=125,i=0,r=90,l=s.width/2,c=s.height/2,d=0,u=2*Math.PI/this.points.length,m=4e3,h=10,p=0},easeOut:function(t,e,a,s){return(t/=s/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e},drawRouletteWheel:function(){o.clearRect(0,0,s.width,s.height);for(var t=0;t<this.points.length;t++){var e=d+u*t,a=e+u;o.save(),t%3===0?o.fillStyle="#B6CCA1":t%3===1?o.fillStyle="#6D98BA":t%3===2&&(o.fillStyle="#77ACA2"),o.beginPath(),o.arc(s.width/2,s.height/2,n,e,a,!1),o.arc(s.width/2,s.height/2,i,a,e,!0),o.fill(),o.restore(),o.save(),o.font="bold 16px Helvetica, Arial",o.fillStyle="#000",o.translate(l+Math.cos(e+u/2)*r,c+Math.sin(e+u/2)*r),o.rotate(e+u/2+Math.PI/2),o.fillText(t+1,-o.measureText(t+1).width/2,0),o.restore()}o.save(),o.beginPath(),o.moveTo(l,c-n+8),o.lineTo(l-10,c-n),o.lineTo(l-4,c-n),o.lineTo(l-4,c-n-10),o.lineTo(l+4,c-n-10),o.lineTo(l+4,c-n),o.lineTo(l+10,c-n),o.closePath(),o.fill(),o.restore()},rotateWheel:function(){var t=this;if(this.isRoll=!0,p+=20,p>=f)return this.closeModal(),this.$swal.fire({title:"轉到 ".concat(this.getValue()," 囉"),showCancelButton:!0,confirmButtonText:"開啟輪盤",cancelButtonText:"關閉"}).then((function(e){e.isConfirmed&&t.openModal()})),void(this.isRoll=!1);var e=(b-this.easeOut(p,0,b,f))*(Math.PI/180);d+=e,this.drawRouletteWheel(),window.requestAnimationFrame(this.rotateWheel)},getValue:function(){var t=180*d/Math.PI,e=180*u/Math.PI,a=90,s=(t+a)%360,o=360-s,n=Math.floor(o/e);return this.points[n].name},btnEvent:function(){console.log("點到ㄌ"),p=0,f=3*Math.random()+m,b=10*Math.random()+h,this.rotateWheel()},openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()},getPoints:function(){var t=this;this.points=[];var e=Object.keys(localStorage);e.forEach((function(e){t.points.push({key:e,name:localStorage.getItem(e)})}))},removerPoint:function(t){localStorage.removeItem(t),this.emitter.emit("push-message",{style:"primary",title:"移除輪盤項目結果",content:"已從輪盤中移除"});var e=Object.keys(localStorage);e.length<=1&&(this.$swal.fire({icon:"info",title:"請至少加入 2 個景點"}),this.closeModal()),this.getPoints(),this.init(),this.drawRouletteWheel()},removerAll:function(){localStorage.clear(),this.emitter.emit("push-message",{style:"danger",title:"移除輪盤項目結果",content:"已全部清除"}),this.closeModal(),this.getPoints(),this.init(),this.drawRouletteWheel()}},mounted:function(){this.modal=new _.a(this.$refs.modal)}},w=x,C=(a("e103"),a("2877")),k=Object(C["a"])(w,v,y,!1,null,null,null);e["a"]=k.exports},"81d5":function(t,e,a){"use strict";var s=a("7b0b"),o=a("23cb"),n=a("07fa");t.exports=function(t){var e=s(this),a=n(e),i=arguments.length,r=o(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,c=void 0===l?a:o(l,a);while(c>r)e[r++]=t;return e}},"8ac8":function(t,e,a){"use strict";a("bdfd")},b0c0:function(t,e,a){var s=a("83ab"),o=a("5e77").EXISTS,n=a("e330"),i=a("9bf2").f,r=Function.prototype,l=n(r.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=n(c.exec),u="name";s&&!o&&i(r,u,{configurable:!0,get:function(){try{return d(c,l(this))[1]}catch(t){return""}}})},b0c9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark header"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("img",{staticClass:"logoImg",attrs:{src:a("b32b"),alt:""}})]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent"}},[s("div",{staticClass:"navbar-nav text-sm-center"},[s("router-link",{staticClass:"nav-item nav-link mx-2 d-flex justify-content-center",attrs:{to:"/"}},[t._v("首頁")]),t.isMember?t._e():s("router-link",{staticClass:"nav-item nav-link mx-2 d-flex justify-content-center",attrs:{to:"/memberSignUp"}},[t._v("會員註冊")]),t.isMember?t._e():s("router-link",{staticClass:"nav-item nav-link mx-2 d-flex justify-content-center",attrs:{to:"/memberLogin"}},[t._v("會員登入")]),s("a",{staticClass:"nav-item nav-link mx-2 d-flex justify-content-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openRouletteModal.apply(null,arguments)}}},[t._v("隨機輪盤")]),s("div",{staticClass:"dropdown"},[t._m(1),s("ul",{staticClass:"dropdown-menu dropdown-menu-end py-0 right-0",attrs:{"aria-labelledby":"navbarDropdown"}},[s("li",[s("a",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{href:"/shops/all"},on:{click:function(e){return e.preventDefault(),t.getAllShops.apply(null,arguments)}}},[t._v("全部商家")])]),s("li",[s("a",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{href:"/shops/all"},on:{click:function(e){return e.preventDefault(),t.getTypeShops("bar")}}},[t._v("酒吧")])]),s("li",[s("a",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{href:"/shops/desserts"},on:{click:function(e){return e.preventDefault(),t.getTypeShops("dessert")}}},[t._v("咖啡甜點")])]),s("li",[s("a",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{href:"/shops/snacks"},on:{click:function(e){return e.preventDefault(),t.getTypeShops("snack")}}},[t._v("小吃宵夜")])]),s("li",[s("a",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{href:"/shops/nightviews"},on:{click:function(e){return e.preventDefault(),t.getTypeShops("viewpoint")}}},[t._v("夜間景點")])])])]),t.isMember?s("div",{staticClass:"dropdown"},[t._m(2),s("ul",{staticClass:"dropdown-menu dropdown-menu-end py-0 right-0 bg-dark text-sm-center",attrs:{"aria-labelledby":"navbarDropdown"}},[s("li",[s("router-link",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{to:"/member/memberInfo"}},[t._v("會員資料")])],1),s("li",[s("router-link",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{to:"/member/favorites"}},[t._v("我的最愛")])],1),s("li",[s("router-link",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{to:"/member/reviews"}},[t._v("分享紀錄")])],1),s("li",[s("router-link",{staticClass:"dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center",attrs:{to:"/member/routes"}},[t._v("行程規劃")])],1)])]):t._e(),t.isMember?s("a",{staticClass:"nav-item nav-link mx-2 d-flex justify-content-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openDelModal.apply(null,arguments)}}},[t._v("會員登出")]):t._e()],1)])],1)]),s("Roulette",{ref:"modal"}),s("DeleteModal",{ref:"delModal",attrs:{type:t.type},on:{"delete-item":t.logout}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link dropdown d-flex justify-content-center align-items-center mx-2",attrs:{href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v(" 主題頁面"),a("span",{staticClass:"material-icons"},[t._v(" expand_more ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link dropdown d-flex justify-content-center align-items-center mx-2",attrs:{href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v(" 功能選單"),a("span",{staticClass:"material-icons"},[t._v(" expand_more ")])])}],n=(a("b64b"),a("46a5")),i=a("ec05"),r={props:["isMember"],data:function(){return{type:"logout"}},components:{Roulette:n["a"],DeleteModal:i["a"]},methods:{openDelModal:function(){this.$refs.delModal.openModal()},logout:function(){var t=this;document.cookie="memberToken=; expires=; path=/",document.cookie="memberID=; expires=; path=/",this.$swal.fire({icon:"success",title:"已登出，將回到首頁",showConfirmButton:!1,timer:1500}),this.$refs.delModal.closeModal(),setTimeout((function(){"/"==t.$router.history.current.fullPath?t.$router.go(0):t.$router.push("/")}),1e3)},getAllShops:function(){"/shops/all"!==this.$router.history.current.fullPath?(this.$router.push("/shops/all"),this.$emit("get-all-shops")):this.$emit("get-all-shops")},getTypeShops:function(t){"/shops/all"!==this.$router.history.current.fullPath&&(this.$router.push("/shops/all"),this.$emit("get-type-shops",t),console.log("觸發")),this.$emit("get-type-shops",t)},openRouletteModal:function(){var t=Object.keys(localStorage);t.length<2?this.showAlert():(this.$refs.modal.getPoints(),this.$refs.modal.init(),this.$refs.modal.drawRouletteWheel(),this.$refs.modal.openModal())},showAlert:function(){this.$swal.fire({icon:"info",title:"請至少加入 2 個景點"})}}},l=r,c=(a("8ac8"),a("2877")),d=Object(c["a"])(l,s,o,!1,null,null,null);e["a"]=d.exports},b32b:function(t,e,a){t.exports=a.p+"img/logo_full.4cb5b812.svg"},bbec:function(t,e,a){"use strict";a("eb5c")},bdfd:function(t,e,a){},be04:function(t,e,a){},cb29:function(t,e,a){var s=a("23e7"),o=a("81d5"),n=a("44d2");s({target:"Array",proto:!0},{fill:o}),n("fill")},d08d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footer",{staticClass:"footer"},[s("div",{staticClass:"container-fuild bg-dark py-5"},[s("div",{staticClass:"container text-center"},[s("router-link",{staticClass:"text-white h4 link-hover-opacity mb-3",attrs:{to:"/"}},[s("img",{staticClass:"logoImg",attrs:{src:a("e347"),alt:""}})]),t._m(0),s("p",{staticClass:"text-white mb-3 mt-3"},[t._v("© 2022 LOGO All Rights Reserved.")]),s("router-link",{staticClass:"text-white fs-6",attrs:{to:"/adminLogin"}},[t._v("進入後台")])],1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"d-flex justify-content-center list-unstyled"},[a("li",[a("a",{staticClass:"link-hover-opacity text-white px-3 py-2 border-1 border-end",attrs:{href:"#"}},[t._v("facebook")])]),a("li",[a("a",{staticClass:"link-hover-opacity text-white px-3 py-2",attrs:{href:"#"}},[t._v("instagram")])])])}],n=(a("bbec"),a("2877")),i={},r=Object(n["a"])(i,s,o,!1,null,"4f57bbf8",null);e["a"]=r.exports},e103:function(t,e,a){"use strict";a("be04")},e347:function(t,e,a){t.exports=a.p+"img/logo.b48cc9ee.svg"},eb5c:function(t,e,a){},ec05:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"modal",staticClass:"modal fade",staticStyle:{"z-index":"11000"},attrs:{id:"exampleModal",tabindex:"-1"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},["shopReview"===t.type?[t._v(" 刪除評論 ")]:"websiteReview"===t.type?[t._v(" 刪除意見回饋 ")]:"shopInfo"===t.type?[t._v(" 刪除店家 ")]:"favorite"===t.type?[t._v(" 移除我的最愛 ")]:"route"===t.type?[t._v(" 移除我的行程 ")]:"adminMember"===t.type?[t._v(" 移除會員 ")]:"logout"===t.type?[t._v(" 會員登出 ")]:t._e()],2),a("button",{staticClass:"btn-close text-white",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a("div",{staticClass:"modal-body"},["shopReview"===t.type?[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v("此評論")]),t._v("（刪除後將無法恢復）。 ")]:t._e(),"websiteReview"===t.type?[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v("此意見回饋")]),t._v("（刪除後將無法恢復）。 ")]:t._e(),"favorite"===t.type?[t._v(" 是否從我的最愛中移除 "),t.item.ShopInfo?a("strong",{staticClass:"text-danger"},[t._v(t._s(t.item.ShopInfo.Name))]):t._e()]:t._e(),"route"===t.type?[t._v(" 是否將此行程 "),t.item.Title?a("strong",{staticClass:"text-danger"},[t._v(t._s(t.item.Title))]):t._e(),t._v(" 移除 ")]:t._e(),"adminMember"===t.type?[t._v(" 是否將此會員 "),t.item.MemberID?a("strong",{staticClass:"text-danger"},[t._v(t._s(t.item.Name))]):t._e(),t._v(" 移除 ")]:t._e(),"logout"===t.type?[t._v(" 是否要 "),a("strong",{staticClass:"text-danger"},[t._v("登出")])]:t._e()],2),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" 取消 ")]),"logout"===t.type?a("button",{staticClass:"btn btn-primary text-white",attrs:{type:"button"},on:{click:t.deleteItem}},[t._v(" 確定 ")]):a("button",{staticClass:"btn btn-danger text-white",attrs:{type:"button"},on:{click:t.deleteItem}},[t._v(" 刪除 ")])])])])])},o=[],n=a("7c2b"),i=a.n(n),r={props:["type","item"],data:function(){return{modal:""}},methods:{openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()},deleteItem:function(){this.$emit("delete-item",this.item)}},mounted:function(){this.modal=new i.a(this.$refs.modal)}},l=r,c=a("2877"),d=Object(c["a"])(l,s,o,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-924a4ca8.b7b6f10e.js.map