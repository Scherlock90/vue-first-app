webpackJsonp([2,4],{"1bck":function(t,e){},A7t3:function(t,e){},TVmP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"Footer",props:{testProps:[String,Number],nextProps:{type:String,required:!0,default:"Default prop"}},data:function(){return{footerText:"Footer is a test sharing components"}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer-container"}},[n("div",{staticClass:"footer"},[n("div",[t._v("\n      "+t._s(t.footerText)+"\n    ")]),t._v(" "),n("div",[t._v("\n      Testing props: "+t._s(t.testProps)+"\n    ")]),t._v(" "),n("div",[t._v("\n      Next props: "+t._s(t.nextProps)+"\n    ")])])])},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(t){n("A7t3")},"data-v-9120dc62",null);e.default=s.exports},lO7g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"Home",components:{Footer:n("TVmP").default},data:function(){return{msg:"Welcome to Your Vue.js App!",newWord:"Something"}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("div",[t._v("\n    "+t._s(t.newWord)+"\n  ")]),t._v(" "),n("div",[n("router-link",{attrs:{to:"/Contact"}},[t._v("Go to Contact")])],1),t._v(" "),n("div",[n("router-link",{attrs:{to:"/Test"}},[t._v("Go to Test")])],1),t._v(" "),n("Footer",{attrs:{testProps:t.msg,nextProps:t.newWord}})],1)},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(t){n("1bck")},"data-v-23364361",null);e.default=s.exports}});
//# sourceMappingURL=2.c667df08ceca15483994.js.map