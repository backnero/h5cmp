(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0489"],{"1D2j":function(t,e,r){},JikL:function(t,e,r){"use strict";var n=r("ptxC");r.n(n).a},PlEl:function(t,e,r){"use strict";r.r(e);var n=r("14Xm"),o=r.n(n),i=r("D3Ub"),a=r.n(i),s=r("Qo5I"),c=(r("Yfch"),r("qBbd")),l={components:{VSelect:r("Tvau").a},props:{},data:function(){return{checked:!1,dialogVisible:!1,form:{},imageUrl:"",options:[],typeOptions:[],isEditMode:!1,id:"",text:"",type:"article",rules:{title:[{required:!0,message:"文章名称不能为空"}],classify_id:[{required:!0,message:"类别不能为空",trigger:"change"}],content:[{required:!0,message:"正文不能为空"}]}}},watch:{},computed:{},methods:{empty:function(){this.$refs.text.innerHTML=""},paste:function(t){this.$refs.text.focus()},leadIn:function(){var t=this.$refs.text.innerHTML;this.form.content=t,this.dialogVisible=!1},save:function(){var t=this;this.$refs.form.validate(function(){var e=a()(o.a.mark(function e(r){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return(n=t.form).type=t.type,e.next=5,Object(s.a)(n);case 5:t.$message({type:"success",message:"保存成功!"}),t.$router.push({name:"ContentArticleList"});case 7:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}())},$imgAdd:function(t,e){var r=this,n=new FormData;n.append("file",e),Object(c.a)(n).then(function(e){1==e.status_code&&r.$refs.md.$img2Url(t,e.data.url)})},getInfo:function(){var t=this;return a()(o.a.mark(function e(){var r,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.id=t.$route.params.id,r={id:t.id,type:t.type,cs:1,ts:1,as:1},e.next=4,Object(s.f)(r);case 4:n=e.sent,i=n.data,t.form=i,t.form.thumb_info&&(t.form.thumb_url=t.form.thumb_info.url),t.form.tags&&(t.form.tag=t.form.tags.split("|"));case 9:case"end":return e.stop()}},e,t)}))()},init:function(){var t=this;return a()(o.a.mark(function e(){var r,n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.g)({type:"author"});case 2:return r=e.sent,n=r.data,t.options=n,e.next=7,Object(s.h)({type:t.type});case 7:i=e.sent,n=i.data,t.typeOptions=n;case 10:case"end":return e.stop()}},e,t)}))()},toPreviousPage:function(){this.$router.go(-1)},uploadFile:function(t){var e=this,r=new FormData;return r.append("file",t),Object(c.a)(r).then(function(t){1==t.status_code&&(e.$set(e.form,"thumb_id",t.data.id),e.$set(e.form,"thumb_url",t.data.url))}),!1}},created:function(){this.isEditMode=-1===this.$route.name.indexOf("ContentArticleCreate"),this.isEditMode&&this.getInfo(),this.init()},mounted:function(){}},u=(r("JikL"),r("KHd+")),d=Object(u.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"文章名称",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"文章简介",prop:"description"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"请输入内容",maxlength:"200","show-word-limit":""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"缩略图",prop:"thumb_id"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","list-type":"picture-card","show-file-list":!1,"before-upload":t.uploadFile}},[t.form.thumb_id?r("img",{staticClass:"avatar",attrs:{src:t.form.thumb_url+"?imageView2/1/w/400/h/400/q/85"}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),r("el-form-item",{attrs:{label:"文章类别",prop:"classify_id"}},[r("v-select",{attrs:{options:t.typeOptions},model:{value:t.form.classify_id,callback:function(e){t.$set(t.form,"classify_id",e)},expression:"form.classify_id"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"文章正文",prop:"content"}},[r("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-folder-opened"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("导入文章")]),t._v(" "),r("mavon-editor",{ref:"md",staticStyle:{"min-height":"400px"},on:{imgAdd:t.$imgAdd},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),r("el-checkbox",{staticStyle:{"margin-top":"10px"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("图片资源下载到服务器")])],1),t._v(" "),r("el-form-item",{attrs:{label:"文章作者",prop:"author_id"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.author_id,callback:function(e){t.$set(t.form,"author_id",e)},expression:"form.author_id"}},t._l(t.options,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),r("el-form-item",{attrs:{label:"文章标签",prop:"tag"}},[r("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入文章标签"},model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"文章来源",prop:"source"}},[r("el-input",{attrs:{placeholder:"请输入来源"},model:{value:t.form.source,callback:function(e){t.$set(t.form,"source",e)},expression:"form.source"}})],1),t._v(" "),r("el-form-item",[r("el-button",{on:{click:t.toPreviousPage}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1),t._v(" "),r("el-dialog",{attrs:{title:"粘贴正文",visible:t.dialogVisible,width:"80em"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.empty}},[r("div",{staticStyle:{width:"100%","max-height":"500px"}},[r("el-scrollbar",{staticStyle:{width:"100%",height:"100%"}},[r("div",{ref:"text",staticStyle:{"max-height":"500px"},attrs:{id:"conversation-content",contenteditable:"true"}})])],1),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-thumb"},on:{click:t.paste}},[t._v("获取焦点")]),t._v(" "),r("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.leadIn}},[t._v("确 定")])],1)])],1)},[],!1,null,"6c8e2412",null);d.options.__file="edit.vue";e.default=d.exports},Qo5I:function(t,e,r){"use strict";r.d(e,"g",function(){return o}),r.d(e,"h",function(){return i}),r.d(e,"a",function(){return a}),r.d(e,"b",function(){return s}),r.d(e,"f",function(){return c}),r.d(e,"c",function(){return l}),r.d(e,"d",function(){return u}),r.d(e,"e",function(){return d});var n=r("t3Un"),o=function(t){return Object(n.a)({url:"/cms/resources",method:"get",params:t})},i=function(t){return Object(n.a)({url:"/cms/resource/classifys/tree",method:"get",params:t})},a=function(t){return Object(n.a)({url:"/cms/resource",method:"post",data:t})},s=function(t){return Object(n.a)({url:"/cms/resource/classify",method:"post",data:t})},c=function(t){return Object(n.a)({url:"/cms/resource",method:"get",params:t})},l=function(t){return Object(n.a)({url:"/cms/resource/classify",method:"get",params:t})},u=function(t,e){return Object(n.a)({url:"/cms/resources/"+e,method:"delete",params:t})},d=function(t,e){return Object(n.a)({url:"/cms/resource/classifys/"+e,method:"delete",params:t})}},Tvau:function(t,e,r){"use strict";var n={props:{value:{required:!0},disabled:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]},required:!0},placeholder:{type:String}},model:{prop:"value"},data:function(){return{selectId:this.value}},watch:{value:function(t){this.selectId=t}},methods:{changeFn:function(){this.$emit("input",this.selectId)},handleSelect:function(t){t.target.parentElement.previousElementSibling.children[0].children[1].click(),this.$refs.cascader.dropDownVisible=!1}}},o=(r("iGDy"),r("KHd+")),i=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-cascader",{ref:"cascader",attrs:{disabled:t.disabled,placeholder:t.placeholder,props:{children:"childs",label:"title",value:"id",checkStrictly:!0,expandTrigger:"hover",emitPath:!1},options:t.options,"show-all-levels":!1,clearable:""},on:{change:t.changeFn},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var n=e.data;return[r("div",{staticClass:"select-item",domProps:{innerHTML:t._s(n.title)},on:{click:t.handleSelect}})]}}]),model:{value:t.selectId,callback:function(e){t.selectId=e},expression:"selectId"}})},[],!1,null,null,null);i.options.__file="index.vue";e.a=i.exports},iGDy:function(t,e,r){"use strict";var n=r("1D2j");r.n(n).a},ptxC:function(t,e,r){},qBbd:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"c",function(){return i}),r.d(e,"a",function(){return a});var n=r("t3Un"),o=function(t){return Object(n.a)({url:"/cms/files",method:"get",params:t})},i=function(t){return Object(n.a)({url:"/cms/file/progress/"+t,method:"get"})},a=function(t){return Object(n.a)({url:"/cms/file",method:"post",data:t})}}}]);