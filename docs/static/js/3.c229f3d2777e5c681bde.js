webpackJsonp([3],{"2I9s":function(e,t){},b3RO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"Test",data:function(){return{msg:"Welcome to Test!",testArea:"testing",checkedNames:[],checkedNamesOtherSolution:[],options:[{value:"Sebastian Opt"},{value:"Natalia Opt"},{value:"Kamil Opt"}],showButtonIfIWriteSomething:"",toggleText:"yes",activeClass:"button-show-if",vPreTest:"v-pre test",counter:0,testHtmlElements:'test <a href="https://vuejs.org/">v-html</a>',counterMethods:0,x:0,userName:""}},props:{title:String},methods:{increment:function(){this.counterMethods++},decrement:function(){this.counterMethods--},xCoordinate:function(e){this.x=e.clientX}},computed:{greeting:function(){return"You're a monster, "+this.userName}},watch:{counter:function(){console.log("The counter is changed!")}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"test"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("router-link",{attrs:{to:"/"}},[e._v("Go to Home")]),e._v(" "),a("div",{staticClass:"v-model-textarea padding-container"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.testArea,expression:"testArea"}],attrs:{rows:"6",maxlength:"72"},domProps:{value:e.testArea},on:{input:function(t){t.target.composing||(e.testArea=t.target.value)}}}),e._v(" "),a("div",[e._v("\n          "+e._s(e.testArea)+"\n      ")])]),e._v(" "),a("div",{staticClass:"container-checked-names padding-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"sebastian",value:"Sebastian"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Sebastian")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,s=t.target,n=!!s.checked;if(Array.isArray(a)){var o=e._i(a,"Sebastian");s.checked?o<0&&(e.checkedNames=a.concat(["Sebastian"])):o>-1&&(e.checkedNames=a.slice(0,o).concat(a.slice(o+1)))}else e.checkedNames=n}}}),e._v(" "),a("label",{attrs:{for:"sebastian"}},[e._v("Sebastian")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"natalia",value:"Natalia"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Natalia")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,s=t.target,n=!!s.checked;if(Array.isArray(a)){var o=e._i(a,"Natalia");s.checked?o<0&&(e.checkedNames=a.concat(["Natalia"])):o>-1&&(e.checkedNames=a.slice(0,o).concat(a.slice(o+1)))}else e.checkedNames=n}}}),e._v(" "),a("label",{attrs:{for:"natalia"}},[e._v("Natalia")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"kamil",value:"Kamil"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Kamil")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,s=t.target,n=!!s.checked;if(Array.isArray(a)){var o=e._i(a,"Kamil");s.checked?o<0&&(e.checkedNames=a.concat(["Kamil"])):o>-1&&(e.checkedNames=a.slice(0,o).concat(a.slice(o+1)))}else e.checkedNames=n}}}),e._v(" "),a("label",{attrs:{for:"kamil"}},[e._v("Kamil")]),e._v(" "),a("div",{staticClass:"checked-names"},[e._v("\n          Checked names: "+e._s(e.checkedNames)+"\n      ")])]),e._v(" "),a("div",{staticClass:"container-checked-names padding-container"},[e._l(e.options,function(t,s){return a("span",{key:s,attrs:{option:t}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNamesOtherSolution,expression:"checkedNamesOtherSolution"}],attrs:{type:"checkbox",id:t.value},domProps:{value:t.value,checked:Array.isArray(e.checkedNamesOtherSolution)?e._i(e.checkedNamesOtherSolution,t.value)>-1:e.checkedNamesOtherSolution},on:{change:function(a){var s=e.checkedNamesOtherSolution,n=a.target,o=!!n.checked;if(Array.isArray(s)){var c=t.value,i=e._i(s,c);n.checked?i<0&&(e.checkedNamesOtherSolution=s.concat([c])):i>-1&&(e.checkedNamesOtherSolution=s.slice(0,i).concat(s.slice(i+1)))}else e.checkedNamesOtherSolution=o}}}),e._v(" "),a("label",{attrs:{for:"option.value"}},[e._v("\n          "+e._s(s)+". "+e._s(t.value)+"\n      ")])])}),e._v(" "),a("div",{staticClass:"checked-names"},[e._v("\n          Checked names options: "+e._s(e.checkedNamesOtherSolution)+"\n      ")])],2),e._v(" "),a("div",{staticClass:"container-show-button-if padding-container"},[a("div",{staticClass:"show-button"},[e._v("Show Button Test !")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.showButtonIfIWriteSomething,expression:"showButtonIfIWriteSomething"}],domProps:{value:e.showButtonIfIWriteSomething},on:{input:function(t){t.target.composing||(e.showButtonIfIWriteSomething=t.target.value)}}}),e._v(" "),a("div",[e.showButtonIfIWriteSomething?a("button",{staticClass:"button-show-if",attrs:{type:"sumbit"}},[e._v("\n              Let You see Me!\n          ")]):e._e()]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleText,expression:"toggleText"}],attrs:{type:"radio",id:"yes",value:"yes"},domProps:{checked:e._q(e.toggleText,"yes")},on:{change:function(t){e.toggleText="yes"}}}),e._v(" "),a("label",{class:["yes"===e.toggleText?e.activeClass:""],attrs:{for:"no"}},[e._v("Yes!")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleText,expression:"toggleText"}],attrs:{type:"radio",id:"no",value:"no"},domProps:{checked:e._q(e.toggleText,"no")},on:{change:function(t){e.toggleText="no"}}}),e._v(" "),a("label",{attrs:{for:"no"}},[e._v("No!")])]),e._v(" "),e.toggleText?a("div",["yes"===e.toggleText?a("p",[e._v("\n              Yeah, great!\n          ")]):a("p",[e._v("\n              No, isn't working!\n          ")])]):e._e(),e._v(" "),a("div",[a("span",{pre:!0},[e._v("\n              To decoumantion {{ vPreTest }}\n          ")]),e._v(" "),a("pre",[e._v("              All Data: "+e._s(e.$data)+"\n          ")]),e._v(" "),a("pre",[e._v("              vPreTest: "+e._s(e.$data.vPreTest)+"\n          ")])]),e._v(" "),a("div",[a("div",[a("button",{on:{click:function(t){e.counter+=1}}},[e._v("+")]),e._v(" "),a("button",{on:{click:function(t){e.counter>0&&(e.counter-=1)}}},[e._v("-")])]),e._v(" "),a("div",[e._v("\n              Counter: "+e._s(e.counter)+"\n          ")]),e._v(" "),a("div",{domProps:{innerHTML:e._s(e.testHtmlElements)}}),e._v(" "),a("div",{domProps:{textContent:e._s(e.showButtonIfIWriteSomething)}})]),e._v(" "),a("div",[a("div",[a("button",{on:{click:e.increment}},[e._v("+")]),e._v(" "),a("button",{on:{click:e.decrement}},[e._v("-")])]),e._v(" "),a("div",[e._v("\n              Test counter with binding methods: "+e._s(e.counterMethods)+"\n          ")])]),e._v(" "),a("div",{staticClass:"container-mousemove-change-background",style:{backgroundColor:"hsl("+e.x+", 80%, 50%"},on:{mousemove:e.xCoordinate}},[e._v("\n          This is the box events mousemove change background!\n      ")]),e._v(" "),a("div",{staticClass:"padding-container"},[e._v("\n          Your name:  "),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.userName,expression:"userName",modifiers:{lazy:!0}}],domProps:{value:e.userName},on:{change:function(t){e.userName=t.target.value}}}),e._v(" "),e.userName?a("div",[e._v(" Initial Value: "+e._s(e.userName))]):e._e(),e._v(" "),e.userName?a("div",[e._v(" Computed Value: "+e._s(e.greeting)+" ")]):e._e()])])],1)},staticRenderFns:[]};var o=a("VU/8")(s,n,!1,function(e){a("2I9s")},"data-v-b1dd466e",null);t.default=o.exports}});
//# sourceMappingURL=3.c229f3d2777e5c681bde.js.map