(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ee54","chunk-4ee5","chunk-4ee54a","chunk-4ee54a4","chunk-7d53","chunk-e3ec"],{"1F+2":function(t,e,i){},"2MCj":function(t,e,i){"use strict";var a=i("1F+2");i.n(a).a},BsgX:function(t,e,i){"use strict";var a={name:"ReportMenu",components:{},mixins:[i("Z+Ht").a],props:{list:Array},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{itemClick:function(t){this.$emit("select",t)}}},n=(i("2MCj"),i("KHd+")),l=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"report-menu"},t._l(t.list,function(e,a){return i("span",{key:a,staticClass:"report-menu-btn",on:{click:function(i){t.itemClick(e)}}},[i("i",{staticClass:"report-menu-btn__icon",class:t.getXrIcon(e.type),style:{color:t.getXrIconColor(e.type)}}),t._v(" "),i("span",{staticClass:"report-menu-btn__name"},[t._v(t._s(e.name))])])}))},[],!1,null,"37799401",null);l.options.__file="ReportMenu.vue";e.a=l.exports},I9HS:function(t,e,i){"use strict";var a=i("pWUH");i.n(a).a},MdnP:function(t,e,i){"use strict";var a={name:"PictureListView",props:{list:{type:Array,required:!0}},methods:{imgZoom:function(t,e){this.$bus.emit("preview-image-bus",{index:e,data:t.map(function(t,e,i){return{url:t.filePath||t.url||t.file_path_thumb,name:t.name,save_name:t.save_name}})})}}},n=(i("fx3D"),i("KHd+")),l=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"picture-list-view"},t._l(t.list,function(e,a){return i("div",{key:a,staticClass:"img-list-item",on:{click:function(e){t.imgZoom(t.list,a)}}},[i("img",{directives:[{name:"src",rawName:"v-src",value:e.filePath||e.url||e.file_path_thumb,expression:"imgItem.filePath || imgItem.url ||imgItem.file_path_thumb"}],key:e.filePath||e.url})])}))},[],!1,null,"3c82fb24",null);l.options.__file="PictureListView.vue";e.a=l.exports},PLZ3:function(t,e,i){},VmBU:function(t,e,i){"use strict";i.d(e,"e",function(){return n}),i.d(e,"a",function(){return l}),i.d(e,"c",function(){return s}),i.d(e,"b",function(){return o}),i.d(e,"k",function(){return r}),i.d(e,"i",function(){return c}),i.d(e,"g",function(){return u}),i.d(e,"h",function(){return d}),i.d(e,"j",function(){return p}),i.d(e,"d",function(){return f}),i.d(e,"n",function(){return m}),i.d(e,"m",function(){return h}),i.d(e,"l",function(){return v}),i.d(e,"o",function(){return _}),i.d(e,"f",function(){return b});var a=i("t3Un");function n(t){return Object(a.a)({url:"oa/log/index",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function l(t){return Object(a.a)({url:"oa/log/save",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function s(t){return Object(a.a)({url:"oa/log/"+(t.log_id?"update":"save"),method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function o(t){return Object(a.a)({url:"oa/log/delete",method:"post",data:t})}function r(t){return Object(a.a)({url:"oaLog/readLog",method:"post",data:t})}function c(t){return Object(a.a)({url:"oa/log/queryLog",method:"post",data:t})}function u(t){return Object(a.a)({url:"oa/log/logBulletin",method:"post",data:t})}function d(t){return Object(a.a)({url:"oa/log/newBulletin",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function p(t){return Object(a.a)({url:"oa/log/activityList",method:"post",data:t})}function f(t){return Object(a.a)({url:"oa/log/LogWelcomeSpeech",method:"post",data:t})}function m(t){return Object(a.a)({url:"oa/log/excelExport",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"},responseType:"blob"})}function h(t){return Object(a.a)({url:"oa/log/completeStats",method:"post",data:t})}function v(t){return Object(a.a)({url:"oa/log/completeLog",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function _(t){return Object(a.a)({url:"oa/log/inCompleteLog",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function b(t){return Object(a.a)({url:"oa/log/activityCount",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},fx3D:function(t,e,i){"use strict";var a=i("PLZ3");i.n(a).a},oWzH:function(t,e,i){"use strict";e.a={methods:{getCategoryIcon:function(t){var e=t&&"string"==typeof t?t.split(","):[];return e.length>1?{icon:e[0],color:e[1]}:{icon:"wk wk-approve",color:"#9376FF"}}}}},pWUH:function(t,e,i){},slnp:function(t,e,i){"use strict";var a=i("7qmR"),n=i("Ew9n"),l=i("3biH"),s=i("/407"),o=i("hwzM"),r=i("7Qib"),c=i("oWzH"),u={name:"ExamineDetail",components:{SlideView:n.a,ExamineInfo:l.a,RelatedBusinessCell:s.a,CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-7a7a"),i.e("chunk-1409"),i.e("chunk-7d53")]).then(i.bind(null,"3z7q"))},FileCell:o.a},filters:{fileName:function(t){return(t.name&&t.name.length>10?t.name.substring(0,10)+"...":t.name)+"("+Object(r.h)(t.size)+")"}},mixins:[c.a],props:{id:[String,Number],detailIndex:[String,Number],detailSection:[String,Number],noListenerClass:{type:Array,default:function(){return["list-box"]}}},data:function(){return{loading:!1,category_id:"",type:"",detail:null,list:[],category_name:"",fileList:[],imgList:[],travelList:[],travelField:[{prop:"vehicle",label:"交通工具"},{prop:"trip",label:"单程往返"},{prop:"start_address",label:"出发城市"},{prop:"end_address",label:"目的城市"},{prop:"start_time",label:"开始时间"},{prop:"end_time",label:"结束时间"},{prop:"duration",label:"时长（天）"},{prop:"description",label:"备注"}],expensesField:[{prop:"start_address",label:"出发城市"},{prop:"end_address",label:"目的城市"},{prop:"start_time",label:"开始时间"},{prop:"end_time",label:"结束时间"},{prop:"traffic",label:"交通费（元）"},{prop:"stay",label:"住宿费（元）"},{prop:"diet",label:"餐饮费（元）"},{prop:"other",label:"其他费用（元）"},{prop:"description",label:"费用明细描述"}],relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:{relatedListData:function(){for(var t=this,e={},i=["contacts","customer","business","contract"],a=function(a){var n=i[a],l=t.detail[n+"List"]||[];l.length>0&&(e[n]=l.map(function(t){return t.id&&(t[n+"Id"]=t.id),t}))},n=0;n<i.length;n++)a(n);return e},detailIcon:function(){return this.getCategoryIcon(this.detail.icon)}},watch:{id:function(t){this.detail=null,this.getDetail()}},mounted:function(){},methods:{viewAfterEnter:function(){this.getDetail()},getBaseInfo:function(){var t=this;this.loading=!0,Object(a.i)({types:"oa_examine",module:"oa",controller:"examine",action:"read",action_id:this.id}).then(function(e){t.list=e.data,t.loading=!1}).catch(function(){t.loading=!1})},getDetail:function(){var t=this;this.loading=!0,Object(a.l)({id:this.id}).then(function(e){t.loading=!1,t.category_id=e.data.category_id,t.type=e.data.category_id,t.getBaseInfo(),t.detail=e.data,t.category_name=t.detail.category_name,t.fileList=t.detail.fileList,t.imgList=t.detail.imgList,t.travelList=t.detail.travelList}).catch(function(){t.loading=!1,t.hideView()})},hideView:function(){this.$emit("hide-view")},checkRelatedDetail:function(t,e){this.relatedID=e[t+"_id"]||e.id,this.relatedCRMType=t,this.showRelatedDetail=!0},handleFile:function(t,e,i){"preview"===t?e&&e.length>0&&this.$bus.emit("preview-image-bus",{index:i,data:e.map(function(t){return t.file_path&&(t.url=t.file_path),t})}):"download"===t&&Object(r.d)({path:e.url,name:e.name})},imgZoom:function(t,e){this.$bus.emit("preview-image-bus",{index:e,data:t.map(function(t){return t.file_path&&(t.url=t.file_path),t})})},downloadFile:function(t){Object(r.d)({path:t.url,name:t.name})},examineHandle:function(t){this.$emit("on-examine-handle",t,this.detailIndex),this.$emit("handle",t,this.detailIndex)}}},d=(i("I9HS"),i("KHd+")),p=Object(d.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"d-view",attrs:{"listener-ids":["workbench-main-container"],"no-listener-class":t.noListenerClass},on:{afterEnter:t.viewAfterEnter,close:t.hideView}},[t.detail?i("flexbox",{staticClass:"detail-main",attrs:{orient:"vertical"}},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-icon",style:{backgroundColor:t.detailIcon.color}},[i("i",{class:["wk","wk-"+t.detailIcon.icon]})]),t._v(" "),i("div",{staticClass:"header-name"},[t._v(t._s(t.category_name))])]),t._v(" "),i("div",{staticClass:"detail-body"},[i("flexbox",{attrs:{gutter:0,align:"stretch",wrap:"wrap"}},t._l(t.list,function(e,a){return"examine_cause"!==e.form_type&&"business_cause"!==e.form_type?i("flexbox-item",{key:a,staticClass:"b-cell",attrs:{span:.5}},["checkbox"===e.form_type?i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},t._l(e.value,function(e,a){return i("div",{key:a},[t._v("\n                  "+t._s(e)+"  \n                ")])}))],1)]):"file"===e.form_type?i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"b-cell-value"},t._l(e.value,function(a,n){return i("flexbox",{key:n,staticClass:"f-item"},[i("i",{staticClass:"wukong wukong-file f-img"}),t._v(" "),i("div",{staticClass:"f-name"},[t._v(t._s(t._f("fileName")(a)))]),t._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){t.handleFile("preview",e.value,n)}}},[t._v("预览")]),t._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){t.handleFile("download",a,n)}}},[t._v("下载")])],1)}))]):i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"b-cell-value"},[t._v(t._s(e.value))])])]):t._e()})),t._v(" "),t.imgList.length>0?i("div",{staticClass:"img-box"},t._l(t.imgList,function(e,a){return i("div",{key:a,staticClass:"img-list",on:{click:function(e){t.imgZoom(t.imgList,a)}}},[i("img",{directives:[{name:"src",rawName:"v-src",value:e.file_path,expression:"imgItem.file_path"}],key:e.file_path})])})):t._e(),t._v(" "),t.fileList.length?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-file"}),t._v(" "),i("span",[t._v("附件")]),t._v(" "),i("span",[t._v("("+t._s(t.fileList.length)+")")])]),t._v(" "),i("div",{staticClass:"section__bd"},t._l(t.fileList,function(e,a){return i("file-cell",{key:a,attrs:{data:e,list:t.fileList,"cell-index":a}})}))]):t._e(),t._v(" "),t.type&&3==t.type&&t.travelList&&t.travelList.length>0?i("div",{staticClass:"table-sections"},[i("div",{staticClass:"table-sections__title"},[t._v("行程")]),t._v(" "),i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:t.travelList,align:"center","header-align":"center",stripe:""}},t._l(t.travelField,function(t,e){return i("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":""}})}))],1):t._e(),t._v(" "),t.type&&5==t.type&&t.travelList&&t.travelList.length>0?i("div",{staticClass:"table-sections"},[i("div",{staticClass:"table-sections__title"},[t._v("报销")]),t._v(" "),i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:t.travelList,align:"center","header-align":"center",stripe:""}},[t._l(t.expensesField,function(t,e){return i("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":""}})}),t._v(" "),i("el-table-column",{attrs:{label:"发票",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("flexbox",{attrs:{justify:"center"}},[i("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){t.handleFile("preview",e.row.imgList,0)}}},[t._v(t._s(e.row.imgList?e.row.imgList.length:0)+"张")])],1)]}}])})],2)],1):t._e(),t._v(" "),Object.keys(t.relatedListData).length>0?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-relevance"}),t._v(" "),i("span",[t._v("相关信息")])]),t._v(" "),i("div",{staticClass:"section__bd"},t._l(t.relatedListData,function(e,a){return i("div",{key:a},t._l(e,function(e,n){return i("related-business-cell",{key:n,attrs:{data:e,"cell-index":n,type:a,"show-foot":!1},nativeOn:{click:function(i){t.checkRelatedDetail(a,e)}}})}))}))]):t._e(),t._v(" "),i("div",{staticClass:"examine-section"},[i("examine-info",{staticClass:"create-sections-content",attrs:{id:t.id,"record-id":t.detail.flow_id,"examine-type":"oa_examine"},on:{"on-handle":t.examineHandle}})],1)],1)],1):t._e(),t._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:t.showRelatedDetail,"crm-type":t.relatedCRMType,id:t.relatedID},on:{"update:visible":function(e){t.showRelatedDetail=e}}})],1)},[],!1,null,"44bd26ca",null);p.options.__file="ExamineDetail.vue";e.a=p.exports}}]);