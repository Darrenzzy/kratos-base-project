(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-324604c2"],{"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,n){var a=s(),o=t-a,l=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=l;var s=Math.easeInOutQuad(u,a,o,e);r(s),u<e?i(t):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(n("5660"),n("2877")),p=Object(d["a"])(c,a,o,!1,null,"6af373ef",null);e["a"]=p.exports},5660:function(t,e,n){"use strict";n("7a30")},"59a3":function(t,e,n){"use strict";n("5c5f")},"5c5f":function(t,e,n){},6724:function(t,e,n){"use strict";n("8d41");var a="@@wavesContext";function o(t,e){function n(n){var a=Object.assign({},e.value),o=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),i=o.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var r=i.getBoundingClientRect(),s=i.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(r.width,r.height)+"px",i.appendChild(s)),o.type){case"center":s.style.top=r.height/2-s.offsetHeight/2+"px",s.style.left=r.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-r.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-r.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=o.color,s.className="waves-ripple z-active",!1}}return t[a]?t[a].removeHandle=n:t[a]={removeHandle:n},n}var i={bind:function(t,e){t.addEventListener("click",o(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[a].removeHandle,!1),t.addEventListener("click",o(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[a].removeHandle,!1),t[a]=null,delete t[a]}},r=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(r)),i.install=r;e["a"]=i},"7a30":function(t,e,n){},"8d41":function(t,e,n){},"8efd":function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"f",(function(){return c}));var a=n("b775");function o(t){return Object(a["a"])({url:"/admin/v1/goods",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/admin/v1/goods/"+t,method:"get"})}function r(t){return Object(a["a"])({url:"/admin/v1/goods/"+t,method:"delete"})}function s(t){return Object(a["a"])({url:"/admin/v1/goods",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/admin/v1/goods",method:"patch",data:t})}function u(t){return Object(a["a"])({url:"/admin/v1/goods/sale",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/admin/v1/goods/sale/logs",method:"get",params:t})}},f2d3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",[n("h2",[t._v("商品信息")]),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("商品名称:"+t._s(t.record.name))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("商品款式:"+t._s(t.record.style))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("商品尺码:"+t._s(t.record.size))])])],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("商品序列号:"+t._s(t.record.code))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("商品价格:"+t._s(t.record.price))])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("商品库存:"+t._s(t.record.number))])])],1)],1),n("h2",[t._v("商品出售记录")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"ID",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),n("el-table-column",{attrs:{label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),n("el-table-column",{attrs:{label:"商品款式"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.style))])]}}])}),n("el-table-column",{attrs:{label:"商品尺码"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.size))])]}}])}),n("el-table-column",{attrs:{label:"商品序列号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.code))])]}}])}),n("el-table-column",{attrs:{label:"商品价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.price))])]}}])}),n("el-table-column",{attrs:{label:"出售时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.created_at))])]}}])}),n("el-table-column",{attrs:{label:"出售数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.number))])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.pageNum,limit:t.listQuery.pageSize},on:{"update:page":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:limit":function(e){return t.$set(t.listQuery,"pageSize",e)},pagination:t.fetchData}})],1)},o=[],i=(n("d81d"),n("8efd")),r=n("6724"),s=n("333d"),l={name:"GoodsLogs",components:{Pagination:s["a"]},directives:{waves:r["a"]},filters:{},data:function(){return{list:null,total:0,listQuery:{pageNum:1,pageSize:10,goods_id:0},listLoading:!0,record:{id:void 0,name:void 0,style:void 0,size:void 0,code:void 0,price:void 0,number:void 0,created_at:void 0,updated_at:void 0,deleted_at:void 0},dialogFormVisible:!1,dialogStatus:"",rules:{}}},created:function(){this.fetchData(this.$route.query.id)},methods:{fetchData:function(t){var e=this;this.listLoading=!0,this.listQuery.goods_id=t,Object(i["f"])(this.listQuery).then((function(t){e.list=t.data.list,e.total=t.data.total})),Object(i["d"])(t).then((function(t){e.record=t.data})),this.listLoading=!1},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}},u=l,c=(n("59a3"),n("2877")),d=Object(c["a"])(u,a,o,!1,null,null,null);e["default"]=d.exports}}]);