webpackJsonp([2],{"+/HG":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("mvHQ"),n=o.n(r),a=o("Tqaz"),i={components:{BButton:a.a,BCard:a.b,BForm:a.c,BFormCheckboxGroup:a.e,BFormCheckbox:a.d,BFormSelect:a.h,BFormInput:a.g,BFormGroup:a.f},data:function(){return{form:{email:"",name:"",food:null,checked:[]},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(n()(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick(function(){t.show=!0})}}},s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"contact"},[e.show?o("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[o("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[o("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-3",label:"Food:","label-for":"input-3"}},[o("b-form-select",{attrs:{id:"input-3",options:e.foods,required:""},model:{value:e.form.food,callback:function(t){e.$set(e.form,"food",t)},expression:"form.food"}})],1),e._v(" "),o("b-form-group",{attrs:{id:"input-group-4"}},[o("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[o("b-form-checkbox",{attrs:{value:"me"}},[e._v("Check me out")]),e._v(" "),o("b-form-checkbox",{attrs:{value:"that"}},[e._v("Check that out")])],1)],1),e._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),e._v(" "),o("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)},staticRenderFns:[]};var u=o("VU/8")(i,s,!1,function(e){o("cq7Y")},"data-v-19614ae7",null);t.default=u.exports},cq7Y:function(e,t){},mvHQ:function(e,t,o){e.exports={default:o("qkKv"),__esModule:!0}},qkKv:function(e,t,o){var r=o("FeBl"),n=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}}});
//# sourceMappingURL=2.9aa04b65dffd55b6d1f2.js.map