(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-995f7478"],{"159b":function(t,a,s){var i=s("da84"),e=s("fdbc"),n=s("785a"),r=s("17c2"),c=s("9112"),l=function(t){if(t&&t.forEach!==r)try{c(t,"forEach",r)}catch(a){t.forEach=r}};for(var o in e)e[o]&&l(i[o]&&i[o].prototype);l(n)},"17c2":function(t,a,s){"use strict";var i=s("b727").forEach,e=s("a640"),n=e("forEach");t.exports=n?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"341b":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading,loader:"spinner",color:t.loader.color,width:t.loader.width,height:t.loader.height,"lock-scroll":t.loader.lockScroll,"is-full-page":t.loader.isFullPage}}),t._m(0),s("div",[s("h2",{staticClass:"text-white mb-3"},[t._v(" 精選景點 "),s("button",{staticClass:"btn btn-light ms-3",on:{click:t.showTag}},[t.toggleTag?s("span",[t._v("關閉標籤")]):s("span",[t._v("開啟商家標籤")])])]),t._m(1)]),s("div",{staticClass:"row"},[t._l(t.nightViews,(function(a){return[a.Enable?s("div",{key:a.ShopID,staticClass:"col-12 col-md-6 col-lg-4 mb-4"},[s("div",{staticClass:"card border-primary rounded-lg w-100 overflow-hidden"},[s("div",{staticClass:"position-relative"},[t._m(2,!0),s("p",{staticClass:"card-browse"},[s("span",{staticClass:"material-icons"},[t._v(" visibility ")]),s("span",[t._v(t._s(a.Click))])]),s("div",{staticClass:"card-img bg-primary",style:{backgroundImage:"url("+a.Image1+")"}})]),s("div",{staticClass:"card-body"},[t._m(3,!0),s("h5",{staticClass:"card-title fs-5 fw-bold d-flex align-items-center"},[t._v(" "+t._s(a.Name)+" ")]),t.toggleTag?s("div",t._l(a.tags,(function(a,i){return s("span",{key:a+i,staticClass:"fs-7 fw-light badge bg-info me-1 lh-sm"},[t._v(t._s(a))])})),0):t._e(),s("ul",{staticClass:"list-unstyled mb-0"},[s("li",[t._v("地址："+t._s(a.Address))]),s("li",[t._v("低消："+t._s(a.Min))])])]),s("div",{staticClass:"card-footer bg-primary"},[s("router-link",{staticClass:"fs-4 text-center text-dark",attrs:{to:"shop/"+a.ShopID}},[t._v("查看更多")])],1)])]):t._e()]}))],2)],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"banner-nightview banner d-flex align-items-end mb-6"},[s("div",{staticClass:"container mb-4"},[s("h1",{staticClass:"text-primary fw-bold"},[t._v("夜間景點")]),s("p",{staticClass:"fs-3 text-primary"},[t._v("慢下來，一起欣賞台南夜景")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"list-unstyled d-flex"},[s("li",[s("a",{staticClass:"btn btn-outline-primary me-3",attrs:{href:"#"}},[t._v("全部")])]),s("li",[s("a",{staticClass:"btn btn-outline-primary me-3",attrs:{href:"#"}},[t._v("散步")])]),s("li",[s("a",{staticClass:"btn btn-outline-primary me-3",attrs:{href:"#"}},[t._v("拍照")])]),s("li",[s("a",{staticClass:"btn btn-outline-primary",attrs:{href:"#"}},[t._v("夜市")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"card-icon bg-transparent lh-sm",attrs:{href:"#"}},[s("span",{staticClass:"material-icons"},[t._v(" favorite ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"fs-7 mb-1 d-flex justify-content-between align-items-center"},[s("div",{staticClass:"d-flex align-items-center"},[s("span",{staticClass:"material-icons text-primary"},[t._v("star")]),s("span",{staticClass:"ms-2"},[t._v("4.5")])]),s("div",[s("a",{staticClass:"btn btn-outline-primary bg-transparnt d-flex align-items-center lh-base",attrs:{href:"#"}},[s("span",{staticClass:"material-icons fs-6 me-1"},[t._v("add")]),t._v("加入行程 ")])])])}],n=(s("d3b7"),s("159b"),{data:function(){return{nightViews:[],toggleTag:!1,isLoading:!0,loader:{width:150,height:150,color:"#fff",lockScroll:!0,isFullPage:!1}}},methods:{getNightViews:function(){var t=this,a="https://localhost:44333/api/ShopInfoes/type/viewpoint";this.$http.get(a).then((function(a){t.isLoading=!0,t.nightViews=a.data,t.nightViews.forEach((function(a,s){t.getShopTags(a.ShopID,s)})),t.isLoading=!1})).catch((function(t){console.dir(t)}))},getShopTags:function(t,a){var s=this,i="https://localhost:44333/api/shoptag/".concat(t);this.$http.get(i).then((function(t){var i=[];t.data.forEach((function(t){i.push(t.TagName),s.nightViews[a].tags=i}))})).catch((function(t){console.dir(t)}))},showTag:function(){this.toggleTag=!this.toggleTag}},mounted:function(){this.getNightViews()}}),r=n,c=(s("ab19"),s("2877")),l=Object(c["a"])(r,i,e,!1,null,"24f3149c",null);a["default"]=l.exports},"8b7d":function(t,a,s){},a640:function(t,a,s){"use strict";var i=s("d039");t.exports=function(t,a){var s=[][t];return!!s&&i((function(){s.call(null,a||function(){return 1},1)}))}},ab19:function(t,a,s){"use strict";s("8b7d")},b727:function(t,a,s){var i=s("0366"),e=s("e330"),n=s("44ad"),r=s("7b0b"),c=s("07fa"),l=s("65f0"),o=e([].push),f=function(t){var a=1==t,s=2==t,e=3==t,f=4==t,d=6==t,h=7==t,u=5==t||d;return function(g,v,p,m){for(var b,_,C=r(g),w=n(C),y=i(v,p),x=c(w),E=0,k=m||l,T=a?k(g,x):s||h?k(g,0):void 0;x>E;E++)if((u||E in w)&&(b=w[E],_=y(b,E,C),t))if(a)T[E]=_;else if(_)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:o(T,b)}else switch(t){case 4:return!1;case 7:o(T,b)}return d?-1:e||f?f:T}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}}}]);
//# sourceMappingURL=chunk-995f7478.8c704cfc.js.map