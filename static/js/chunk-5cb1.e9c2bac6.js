(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5cb1"],{"2f65":function(t,e,a){},"4dIA":function(t,e,a){"use strict";var s=a("Flj7"),i={name:"TaskCell",components:{},mixins:[a("kK4T").a],props:{data:Object,dataIndex:Number,dataSection:Number},data:function(){return{}},mounted:function(){},methods:{taskOverClick:function(t){Object(s.n)({task_id:t.task_id,status:t.checked?5:1}).then(function(t){}).catch(function(){t.checked=!1})},rowFun:function(t){this.$emit("on-handle",{type:"view",data:{item:this.data,index:this.dataIndex,section:this.dataSection}})}}},l=(a("zDjq"),a("KHd+")),n=Object(l.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"taskRow",staticClass:"list",style:{"border-left-color":t.getPriorityColor(t.data.priority).color},on:{click:function(e){t.rowFun(t.data)}}},[a("div",{ref:"listLeft",staticClass:"list-left"},[a("div",{class:t.data.checked?"title title-active":"title",on:{click:function(t){t.stopPropagation()}}},[a("el-checkbox",{on:{change:function(e){t.taskOverClick(t.data)}},model:{value:t.data.checked,callback:function(e){t.$set(t.data,"checked",e)},expression:"data.checked"}})],1),t._v(" "),a("el-tooltip",{attrs:{placement:"bottom",effect:"light","popper-class":"task-tooltip tooltip-change-border"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("span",[t._v(t._s(t.data.name))])]),t._v(" "),a("span",{ref:"itemSpan",class:t.data.checked?"item-name-active":"item-name"},[t._v("\n        "+t._s(t.data.name)+"\n      ")])])],1),t._v(" "),a("div",{staticClass:"list-right"},[t.data.lableList?a("div",{staticClass:"tag-box"},[t.data.lableList.length<=2?t._l(t.data.lableList,function(e,s){return a("div",{key:s,staticClass:"item-label"},[a("span",{staticClass:"k-name",style:{background:e.color}},[t._v(t._s(e.name))])])}):[a("span",{staticClass:"k-name",style:{background:t.data.lableList[0].color}},[t._v(t._s(t.data.lableList[0].name))]),t._v(" "),a("span",{staticClass:"k-name",style:{background:t.data.lableList[1].color}},[t._v(t._s(t.data.lableList[1].name))]),t._v(" "),a("el-tooltip",{attrs:{placement:"top",effect:"light","popper-class":"tooltip-change-border task-tooltip"}},[a("div",{staticClass:"tooltip-content",staticStyle:{margin:"10px 10px 10px 0"},attrs:{slot:"content"},slot:"content"},t._l(t.data.lableList,function(e,s){return a("div",{key:s,staticClass:"item-label",staticStyle:{display:"inline-block","margin-right":"10px"}},[s>=2?a("span",{staticClass:"k-name",staticStyle:{"border-radius":"3px",color:"#FFF",padding:"3px 10px"},style:{background:e.color?e.color:"#ccc"}},[t._v(t._s(e.name))]):t._e()])})),t._v(" "),a("span",{staticClass:"color-label-more"},[a("i",[t._v("...")])])])]],2):t._e(),t._v(" "),a("div",{staticClass:"img-group"},[t.data.relationCount?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-relevance"}),t._v(" "),a("span",[t._v(t._s(t.data.relationCount))])]):t._e(),t._v(" "),t.data.subdonecount>0||t.data.subcount>0?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-sub-task"}),t._v(" "),a("span",[t._v(t._s(t.data.subdonecount)+"/"+t._s(t.data.subdonecount+t.data.subcount))])]):t._e(),t._v(" "),t.data.filecount?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-file"}),t._v(" "),a("span",[t._v(t._s(t.data.filecount))])]):t._e(),t._v(" "),t.data.commentcount?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-comment-task"}),t._v(" "),a("span",[t._v(t._s(t.data.commentcount))])]):t._e(),t._v(" "),t.data.stop_time?a("div",{staticClass:"img-box"},[a("i",{staticClass:"wukong wukong-time-task",style:{color:1!=t.data.is_end||t.data.checked?"#999":"red"}}),t._v(" "),a("span",{style:{color:1!=t.data.is_end||t.data.checked?"#999":"red"}},[t._v(t._s(t._f("moment")(t.data.stop_time,"MM-DD"))+" 截止")])]):t._e()]),t._v(" "),a("div",{staticClass:"item-own-box"},[t.data.main_user&&t.data.main_user.id?a("el-tooltip",{attrs:{placement:"bottom",effect:"light","popper-class":"tooltip-change-border"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("span",[t._v(t._s(t.data.main_user.realname))])]),t._v(" "),a("xr-avatar",{staticClass:"user-img",attrs:{name:t.data.main_user.realname,size:24,src:t.data.main_user.img}})],1):t._e()],1)])])},[],!1,null,"3071fd8f",null);n.options.__file="TaskCell.vue";e.a=n.exports},"7mY3":function(t,e,a){"use strict";var s=a("2f65");a.n(s).a},"7rD8":function(t,e,a){"use strict";a.r(e);var s=a("FyfS"),i=a.n(s),l=a("Ajln"),n=a("4dIA"),o=a("pKm3"),c=a("9GgJ"),r={components:{TaskDetail:o.a,TaskCell:n.a,XrHeader:c.a},data:function(){return{loading:!0,lable_id:"",taskList:[],colorList:["#53D397","#20C1BD","#58DADA","#0FC9E7","#3498DB","#4586FF","#8983F3","#AEA1EA","#FF6699","#F24D70","#FF6F6F"],labelName:"",labelColor:"#53D397",collapseNames:[],editLabelName:"",editLabelColor:"",labelSetShow:!1,taskID:"",detailIndex:-1,detailSection:-1,taskDetailShow:!1}},beforeRouteUpdate:function(t,e,a){this.lable_id=t.params.id,this.taskList=[],this.collapseNames=[],this.getDetail({lable_id:t.params.id}),this.getList(),a()},created:function(){this.lable_id=this.$route.params.id,this.getDetail({lable_id:this.$route.params.id}),this.getList()},mounted:function(){document.getElementById("project-container").addEventListener("click",this.taskShowHandle,!1)},methods:{getDetail:function(t){var e=this;Object(l.d)(t).then(function(t){e.labelName=t.data.name,e.labelColor=t.data.color}).catch(function(){})},getList:function(){var t=this;this.loading=!0,Object(l.b)({lable_id:this.lable_id}).then(function(e){t.taskList=e.data||[];var a=!0,s=!1,l=void 0;try{for(var n,o=i()(t.taskList);!(a=(n=o.next()).done);a=!0){var c=n.value,r=!0,d=!1,u=void 0;try{for(var h,p=i()(c.list);!(r=(h=p.next()).done);r=!0){var m=h.value;5==m.status&&(m.checked=!0)}}catch(t){d=!0,u=t}finally{try{!r&&p.return&&p.return()}finally{if(d)throw u}}}}catch(t){s=!0,l=t}finally{try{!a&&o.return&&o.return()}finally{if(s)throw l}}t.collapseNames=e.data.map(function(t){return t.work_id}),t.loading=!1}).catch(function(){t.loading=!1})},labelSetSave:function(){var t=this;Object(l.f)({name:this.editLabelName,lable_id:this.lable_id,color:this.editLabelColor}).then(function(e){t.labelName=t.editLabelName,t.labelColor=t.editLabelColor,t.labelSetShow=!1})},labelSetClick:function(){this.editLabelName=this.labelName,this.editLabelColor=this.labelColor},taskCellHandle:function(t){if("view"==t.type){var e=t.data;this.taskID=e.item.task_id,this.detailIndex=e.index,this.detailSection=e.section,this.taskDetailShow=!0}},closeBtn:function(){this.taskDetailShow=!1},detailHandle:function(t){if(0==t.index||t.index)if("title-check"==t.type)this.$set(this.taskList[t.section].list[t.index],"checked",t.value);else if("delete"==t.type||"activate-task"==t.type||"recover-task"==t.type||"thorough-delete-task"==t.type)this.taskList.splice(t.index,1);else if("change-stop-time"==t.type){new Date(t.value).getTime()/1e3+86399>(new Date).getTime()/1e3?this.taskList[t.section].list[t.index].isEnd=!1:this.taskList[t.section].list[t.index].isEnd=!0,this.taskList[t.section].list[t.index].stopTime=t.value}else if("change-priority"==t.type)this.taskList[t.section].list[t.index].priority=t.value.id;else if("change-name"==t.type)this.taskList[t.section].list[t.index].name=t.value;else if("change-comments"==t.type){var e=this.taskList[t.section].list[t.index].commentCount;"add"==t.value?this.taskList[t.section].list[t.index].commentCount=e+1:this.taskList[t.section].list[t.index].commentCount=e-1}else"change-sub-task"==t.type?(this.taskList[t.section].list[t.index].childWCCount=t.value.subdonecount,this.taskList[t.section].list[t.index].childAllCount=t.value.allcount):"change-main-user"==t.type?this.taskList[t.section].list[t.index].mainUser=t.value:"change-label"==t.type&&(this.taskList[t.section].list[t.index].labelList=t.value)},taskShowHandle:function(t){if(this.$refs.particulars&&!this.$refs.particulars.$el.contains(t.target)){for(var e=!0,a=document.getElementsByClassName("board-column"),s=0;s<a.length;s++){if(a[s].contains(t.target)){e=!1;break}}this.taskDetailShow=!e}}}},d=(a("tlah"),a("KHd+")),u=Object(d.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-tag"},[a("xr-header",{staticClass:"xr-header",attrs:{"icon-color":t.labelColor||"#4AB8B8","icon-class":"wk wk-label"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.labelName))]),t._v(" "),a("el-popover",{attrs:{slot:"label",placement:"bottom-start",width:"300",trigger:"click"},slot:"label",model:{value:t.labelSetShow,callback:function(e){t.labelSetShow=e},expression:"labelSetShow"}},[a("div",{staticClass:"new-tag-dialog"},[a("div",{staticClass:"title"},[a("span",[t._v("标签设置")]),t._v(" "),a("span",{staticClass:"el-icon-close rt",on:{click:function(e){t.labelSetShow=!1}}})]),t._v(" "),a("div",{staticClass:"search"},[a("el-input",{attrs:{size:"mini",placeholder:"输入标签名"},model:{value:t.editLabelName,callback:function(e){t.editLabelName=e},expression:"editLabelName"}}),t._v(" "),a("span",{staticClass:"checked-color",style:{background:t.editLabelColor}})],1),t._v(" "),a("div",{staticClass:"color-box"},t._l(t.colorList,function(e,s){return a("span",{key:s,style:{background:e},on:{click:function(a){t.editLabelColor=e}}})})),t._v(" "),a("div",{staticClass:"footer"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.labelSetSave}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:function(e){t.labelSetShow=!1}}},[t._v("取消")])],1)]),t._v(" "),a("i",{staticClass:"wk wk-manage img-set",attrs:{slot:"reference"},on:{click:t.labelSetClick},slot:"reference"})])],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[a("div",{directives:[{name:"empty",rawName:"v-empty",value:0==t.taskList.length&&0==t.loading,expression:"taskList.length == 0 && loading == false"}],staticClass:"content-body-items"},[a("el-collapse",{model:{value:t.collapseNames,callback:function(e){t.collapseNames=e},expression:"collapseNames"}},t._l(t.taskList,function(e,s){return a("el-collapse-item",{key:s,staticClass:"list-box",attrs:{name:e.work_id}},[a("i",{staticClass:"wukong wukong-subproject",style:{color:e.color?e.color:"#4AB8B8"},attrs:{slot:"title"},slot:"title"}),t._v(" "),a("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.list,function(e,i){return a("task-cell",{key:i,staticClass:"item-list",attrs:{data:e,"data-section":s,"data-index":i},on:{"on-handle":t.taskCellHandle}})})],2)}))],1)]),t._v(" "),t.taskDetailShow?a("task-detail",{ref:"particulars",attrs:{id:t.taskID,"detail-index":t.detailIndex,"detail-section":t.detailSection},on:{"on-handle":t.detailHandle,close:t.closeBtn}}):t._e()],1)},[],!1,null,"46da25d1",null);u.options.__file="index.vue";e.default=u.exports},"9GgJ":function(t,e,a){"use strict";var s={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},i=(a("7mY3"),a("KHd+")),l=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("flexbox",{staticClass:"xr-header"},[t.iconClass?a("div",{staticClass:"xr-header__icon",style:{backgroundColor:t.iconColor}},[a("i",{class:t.iconClass})]):t._e(),t._v(" "),a("div",{staticClass:"xr-header__label"},[t.$slots.label?t._t("label"):[t._v(t._s(t.label))]],2),t._v(" "),t.showSearch?a("el-input",t._b({staticClass:"xr-header__search",class:{"is-text":"text"===t.searchIconType},style:{"margin-top":t.ftTop},attrs:{placeholder:t.placeholder},on:{input:t.inputChange},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchClick(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},"el-input",t.inputAttr,!1),["text"===t.searchIconType?a("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"},[t._v("搜索")]):a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"})],1):t._e(),t._v(" "),a("div",{staticClass:"xr-header__ft",style:{top:t.ftTop}},[t._t("ft")],2)],1)},[],!1,null,"acb6d756",null);l.options.__file="index.vue";e.a=l.exports},jpma:function(t,e,a){},tlah:function(t,e,a){"use strict";var s=a("jpma");a.n(s).a},"wo/F":function(t,e,a){},zDjq:function(t,e,a){"use strict";var s=a("wo/F");a.n(s).a}}]);