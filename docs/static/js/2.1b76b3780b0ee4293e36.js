webpackJsonp([2],{"+/HG":function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("mvHQ"),n=t.n(r),a=t("Tqaz"),i={components:{BButton:a.a,BCard:a.b,BForm:a.c,BFormCheckboxGroup:a.e,BFormCheckbox:a.d,BFormSelect:a.h,BFormInput:a.g,BFormGroup:a.f},data:function(){return{form:{email:"",name:"",food:null,checked:[]},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0}},methods:{onSubmit:function(o){o.preventDefault(),alert(n()(this.form))},geolocation:function(){navigator.geolocation&&function(){var o=document.querySelector("#map-link");navigator.geolocation?(console.log("Locating…"),navigator.geolocation.getCurrentPosition(function(e){var t=e.coords.latitude,r=e.coords.longitude;o.href="https://www.openstreetmap.org/#map=18/"+t+"/"+r,o.textContent="Latitude: "+t+" °, Longitude: "+r+" °"},function(){console.log("Unable to retrieve your location")},{maximumAge:6e4,timeout:5e3,enableHighAccuracy:!0})):console.log("Geolocation is not supported by your browser")}()},onReset:function(o){var e=this;o.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick(function(){e.show=!0})}}},l={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"contact"},[t("div",{staticClass:"container-form"},[o.show?t("b-form",{on:{submit:o.onSubmit,reset:o.onReset}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[t("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:o.form.email,callback:function(e){o.$set(o.form,"email",e)},expression:"form.email"}})],1),o._v(" "),t("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[t("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:o.form.name,callback:function(e){o.$set(o.form,"name",e)},expression:"form.name"}})],1),o._v(" "),t("b-form-group",{attrs:{id:"input-group-3",label:"Food:","label-for":"input-3"}},[t("b-form-select",{attrs:{id:"input-3",options:o.foods,required:""},model:{value:o.form.food,callback:function(e){o.$set(o.form,"food",e)},expression:"form.food"}})],1),o._v(" "),t("b-form-group",{attrs:{id:"input-group-4"}},[t("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:o.form.checked,callback:function(e){o.$set(o.form,"checked",e)},expression:"form.checked"}},[t("b-form-checkbox",{attrs:{value:"me"}},[o._v("Check me out")]),o._v(" "),t("b-form-checkbox",{attrs:{value:"that"}},[o._v("Check that out")])],1)],1),o._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[o._v("Submit")]),o._v(" "),t("b-button",{attrs:{type:"reset",variant:"danger"}},[o._v("Reset")])],1):o._e()],1),o._v(" "),t("div",{staticClass:"geolocation"},[t("button",{staticClass:"geolocation__button",on:{click:o.geolocation}},[o._v("Take my location")]),o._v(" "),o._m(0)])])},staticRenderFns:[function(){var o=this.$createElement,e=this._self._c||o;return e("div",[e("a",{attrs:{id:"map-link"}})])}]};var s=t("VU/8")(i,l,!1,function(o){t("6N7j")},"data-v-ce133d4c",null);e.default=s.exports},"6N7j":function(o,e){},mvHQ:function(o,e,t){o.exports={default:t("qkKv"),__esModule:!0}},qkKv:function(o,e,t){var r=t("FeBl"),n=r.JSON||(r.JSON={stringify:JSON.stringify});o.exports=function(o){return n.stringify.apply(n,arguments)}}});
//# sourceMappingURL=2.1b76b3780b0ee4293e36.js.map