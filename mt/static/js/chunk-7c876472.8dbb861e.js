(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c876472"],{"4e39":function(t,e,s){"use strict";var a=s("a613"),l=s.n(a);l.a},7042:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-product"},[s("el-row",{staticClass:"m-crumbs"},[s("crumbs")],1),s("el-row",[s("el-col",{attrs:{span:19}},[s("el-row",[s("categroy")],1),s("el-row",[s("list")],1)],1),s("el-col",{attrs:{span:5}},[t._v(" map + fav ")])],1)],1)},l=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",[t._v(t._s(t.$store.state.address)+"美团")]),s("el-breadcrumb-item",[t._v(t._s(t.$store.state.address)+t._s(t.$route.params.name))])],1)},i=[],c={},r=c,o=s("2877"),m=Object(o["a"])(r,n,i,!1,null,null,null),u=m.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-product-categroy"},[s("dl",{staticClass:"classic"},[s("dt",[t._v("分类")]),s("dt",[t._v("全部")]),t._l(t.classicList,(function(t){return s("dd",{key:t.type},[s("m-select",{attrs:{name:t.title,list:t.sub_list}})],1)}))],2),s("dl",{staticClass:"classic"},[s("dt",[t._v("区域")]),s("dt",[t._v("全部")]),t._l(t.areaList,(function(t){return s("dd",{key:t.type},[s("m-select",{attrs:{name:t.title,list:t.sub_list}})],1)}))],2)])},p=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-product-select"},[s("dl",{staticClass:"tab"},[s("dt",[t._v(" "+t._s(t.name)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("dd",[s("span",{staticClass:"select-title"},[t._v(t._s(t.name))]),t._l(t.list,(function(e,a){return s("span",{key:a},[t._v(t._s(e.name))])}))],2)])])},v=[],f={props:["name","list"]},b=f,C=Object(o["a"])(b,d,v,!1,null,null,null),y=C.exports,h={data:function(){return{classicList:[{title:"美食",type:"food",sub_list:[{name:"日本菜",id:"Japan"},{name:"饮品店",id:"drink"},{name:"面包甜点",id:"cate"}]},{title:"酒店住宿",type:"hotal",sub_list:[{name:"温泉酒店",id:"hot_spring"},{name:"经济型酒店",id:"economy"},{name:"高端酒店",id:"high"}]}],areaList:[{title:"推荐商圈",sub_list:[{name:"望京",id:12e4},{name:"昌平",id:12222}]}]}},components:{MSelect:y}},k=h,w=Object(o["a"])(k,_,p,!1,null,null,null),g=w.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-products-list"},[s("ul",t._l(t.nav,(function(e){return s("li",{key:e.key,class:{"s-nav-active":e.active}},[t._v(t._s(e.name))])})),0),s("el-row",t._l(t.productList,(function(t,e){return s("item",{key:e,attrs:{meta:t}})})),1)],1)},x=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",{staticClass:"s-item"},[s("dt",[s("img",{attrs:{src:t.meta.image,alt:"图片"}})]),s("dd",[s("h3",[s("router-link",{attrs:{to:{name:"detail",params:{name:t.meta.title}}}},[t._v(t._s(t.meta.title))])],1),s("p",[s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.meta.score,callback:function(e){t.$set(t.meta,"score",e)},expression:"meta.score"}}),t.meta.score>4.5?s("span",[t._v("很好")]):t.meta.score>4?s("span",[t._v("好")]):t.meta.score>3.5?s("span",[t._v("不错")]):t.meta.score>3?s("span",[t._v("一般")]):s("span",[t._v("很差")]),s("span",{},[t._v(t._s(t.meta.score)+"分")]),s("span",{staticClass:"s-item-comment-total"},[t._v(t._s(t.meta.commentNum)+"人评论")])],1),s("p",[s("span",{staticClass:"s-item-tab"},t._l(t.meta.tab,(function(e){return s("span",{key:e},[t._v(t._s(e))])})),0),s("span",{staticClass:"s-item-addr"},[t._v(t._s(t.meta.address))]),t._m(0)]),s("p",[s("span",{staticClass:"s-item-price"},[t._v(" 人均￥"+t._s(t.meta.avgPrice)+" ")])]),s("ul",{staticClass:"deal-items"},t._l(t.meta.dealItems.slice(0,2),(function(e,a){return s("li",{key:a,staticClass:"items"},[s("p",{staticClass:"deal-title"},[t._v(" "+t._s(e.title)+" ")]),s("p",[s("span",{staticClass:"deal-price"},[t._v(" ￥"+t._s(e.price)+" ")]),s("span",{staticClass:"deal-old-price"},[t._v("门市价￥"+t._s(e.counterPrice))]),s("span",{staticClass:"deal-sales"},[t._v("已售"+t._s(e.saleNum))])])])})),0)])])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"el-icon-location"}),t._v(" 查看地图 ")])])}],E={props:["meta"]},O=E,J=Object(o["a"])(O,L,j,!1,null,null,null),I=J.exports,N={data:function(){return{nav:[{key:"s-default",name:"智能排序",active:!0},{key:"s-price",name:"价格最低",active:!1},{key:"s-score",name:"人气最高",active:!1},{key:"s-comment",name:"评价最高",active:!1}],productList:[]}},created:function(){var t=this;this.axios.get("/api/meituan/list/goodsList.json",{params:{appkey:"virtual_1569514431385"}}).then((function(e){t.productList=e}))},components:{Item:I}},P=N,M=Object(o["a"])(P,$,x,!1,null,null,null),S=M.exports,q={components:{crumbs:u,Categroy:g,List:S}},z=q,A=(s("4e39"),Object(o["a"])(z,a,l,!1,null,null,null));e["default"]=A.exports},a613:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7c876472.8dbb861e.js.map