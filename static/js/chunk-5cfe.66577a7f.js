(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5cfe"],{"1D2j":function(t,e,r){},"5qhT":function(t,e,r){"use strict";r.d(e,"c",function(){return o}),r.d(e,"f",function(){return a}),r.d(e,"b",function(){return c}),r.d(e,"i",function(){return s}),r.d(e,"e",function(){return i}),r.d(e,"g",function(){return u}),r.d(e,"d",function(){return l}),r.d(e,"j",function(){return d}),r.d(e,"l",function(){return f}),r.d(e,"a",function(){return m}),r.d(e,"h",function(){return p}),r.d(e,"m",function(){return h}),r.d(e,"k",function(){return b});var n=r("t3Un"),o=function(t){return Object(n.a)({url:"cms/books",method:"get",params:t})},a=function(t){return Object(n.a)({url:"cms/book",method:"get",params:t})},c=function(t){return Object(n.a)({url:"cms/book",method:"post",data:t})},s=function(t){return Object(n.a)({url:"cms/books/"+t,method:"delete"})},i=function(t){return Object(n.a)({url:"cms/book/chapterstree",method:"get",params:t})},u=function(t,e){return Object(n.a)({url:"cms/book/chapter/"+e,method:"get",params:t})},l=function(t){return Object(n.a)({url:"cms/book/chapter",method:"post",data:t})},d=function(t){return Object(n.a)({url:"cms/book/chapters/"+t,method:"delete"})},f=function(t){return Object(n.a)({url:"cms/book/chapter/season",method:"post",data:t})},m=function(){return Object(n.a)({url:"cms/book/classifys/tree",method:"get"})},p=function(t){return Object(n.a)({url:"cms/book/classify",method:"get",params:t})},h=function(t){return Object(n.a)({url:"cms/book/classify",method:"post",data:t})},b=function(t){return Object(n.a)({url:"cms/book/classifys/"+t,method:"delete"})}},EYii:function(t,e,r){},LDet:function(t,e,r){"use strict";r.r(e);var n=r("14Xm"),o=r.n(n),a=r("D3Ub"),c=r.n(a),s=r("5qhT"),i=r("Qo5I"),u=r("Tvau"),l=r("qBbd"),d={components:{VSelect:u.a},props:{},data:function(){return{form:{},imageUrl:"",typeOptions:[],authorOptions:[],isEditMode:!1}},watch:{},computed:{},methods:{init:function(){var t=this;return c()(o.a.mark(function e(){var r,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)();case 2:return r=e.sent,n=r.data,t.typeOptions=n,e.next=7,Object(i.g)({type:"author"});case 7:a=e.sent,t.authorOptions=a.data;case 9:case"end":return e.stop()}},e,t)}))()},getInfo:function(){var t=this;return c()(o.a.mark(function e(){var r,n,a,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.id,n={id:r,as:1,cs:1,ts:1},e.next=4,Object(s.f)(n);case 4:a=e.sent,c=a.data,t.form=c,t.form.tags&&(t.form.tag=t.form.tags.split("|"));case 8:case"end":return e.stop()}},e,t)}))()},uploadFile:function(t){var e=this,r=new FormData;return r.append("file",t),Object(l.a)(r).then(function(t){1==t.status_code&&(e.$set(e.form,"thumb_id",t.data.id),e.$set(e.form,"thumb_url",t.data.url))}),!1},save:function(){var t=this;this.$refs.form.validate(function(){var e=c()(o.a.mark(function e(r){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return n=t.form,e.next=4,Object(s.b)(n);case 4:t.$message.success("保存成功!"),t.$router.push({name:"ContentBooksList"});case 6:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}())}},created:function(){this.isEditMode=-1===this.$route.name.indexOf("ContentBooksCreate"),this.isEditMode&&this.getInfo(),this.init()},mounted:function(){}},f=(r("SyFb"),r("KHd+")),m=Object(f.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"图书名称"}},[r("el-input",{attrs:{placeholder:"请输入图书名称"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"图书作者"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择图书作者"},model:{value:t.form.author_id,callback:function(e){t.$set(t.form,"author_id",e)},expression:"form.author_id"}},t._l(t.authorOptions,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),r("el-form-item",{attrs:{label:"图书类别"}},[r("v-select",{attrs:{placeholder:"请输入图书类别",options:t.typeOptions},model:{value:t.form.classify_id,callback:function(e){t.$set(t.form,"classify_id",e)},expression:"form.classify_id"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"图书标签"}},[r("el-select",{attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入图书标签"},model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"版权信息"}},[r("el-input",{attrs:{placeholder:"请输入版权信息"},model:{value:t.form.copyright,callback:function(e){t.$set(t.form,"copyright",e)},expression:"form.copyright"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"缩略图"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","list-type":"picture-card","show-file-list":!1,"before-upload":t.uploadFile}},[t.form.thumb_id?r("img",{staticClass:"avatar",attrs:{src:t.form.thumb_url+"?imageView2/1/w/400/h/400/q/85"}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),r("el-form-item",{attrs:{label:"图书简介"}},[r("el-input",{staticStyle:{width:"398px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"请输入图书内容"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),r("router-link",{attrs:{to:{name:"ContentBooksList"}}},[r("el-button",[t._v("取消")])],1)],1)],1)],1)},[],!1,null,"3ed14fa5",null);m.options.__file="edit.vue";e.default=m.exports},Qo5I:function(t,e,r){"use strict";r.d(e,"g",function(){return o}),r.d(e,"h",function(){return a}),r.d(e,"a",function(){return c}),r.d(e,"b",function(){return s}),r.d(e,"f",function(){return i}),r.d(e,"c",function(){return u}),r.d(e,"d",function(){return l}),r.d(e,"e",function(){return d});var n=r("t3Un"),o=function(t){return Object(n.a)({url:"/cms/resources",method:"get",params:t})},a=function(t){return Object(n.a)({url:"/cms/resource/classifys/tree",method:"get",params:t})},c=function(t){return Object(n.a)({url:"/cms/resource",method:"post",data:t})},s=function(t){return Object(n.a)({url:"/cms/resource/classify",method:"post",data:t})},i=function(t){return Object(n.a)({url:"/cms/resource",method:"get",params:t})},u=function(t){return Object(n.a)({url:"/cms/resource/classify",method:"get",params:t})},l=function(t,e){return Object(n.a)({url:"/cms/resources/"+e,method:"delete",params:t})},d=function(t,e){return Object(n.a)({url:"/cms/resource/classifys/"+e,method:"delete",params:t})}},SyFb:function(t,e,r){"use strict";var n=r("EYii");r.n(n).a},Tvau:function(t,e,r){"use strict";var n={props:{value:{required:!0},disabled:{type:Boolean,default:!1},options:{type:Array,default:function(){return[]},required:!0},placeholder:{type:String}},model:{prop:"value"},data:function(){return{selectId:this.value}},watch:{value:function(t){this.selectId=t}},methods:{changeFn:function(){this.$emit("input",this.selectId)},handleSelect:function(t){t.target.parentElement.previousElementSibling.children[0].children[1].click(),this.$refs.cascader.dropDownVisible=!1}}},o=(r("iGDy"),r("KHd+")),a=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-cascader",{ref:"cascader",attrs:{disabled:t.disabled,placeholder:t.placeholder,props:{children:"childs",label:"title",value:"id",checkStrictly:!0,expandTrigger:"hover",emitPath:!1},options:t.options,"show-all-levels":!1,clearable:""},on:{change:t.changeFn},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var n=e.data;return[r("div",{staticClass:"select-item",domProps:{innerHTML:t._s(n.title)},on:{click:t.handleSelect}})]}}]),model:{value:t.selectId,callback:function(e){t.selectId=e},expression:"selectId"}})},[],!1,null,null,null);a.options.__file="index.vue";e.a=a.exports},iGDy:function(t,e,r){"use strict";var n=r("1D2j");r.n(n).a},qBbd:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"c",function(){return a}),r.d(e,"a",function(){return c});var n=r("t3Un"),o=function(t){return Object(n.a)({url:"/cms/files",method:"get",params:t})},a=function(t){return Object(n.a)({url:"/cms/file/progress/"+t,method:"get"})},c=function(t){return Object(n.a)({url:"/cms/file",method:"post",data:t})}}}]);