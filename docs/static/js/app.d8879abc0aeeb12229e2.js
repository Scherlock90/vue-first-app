webpackJsonp([7],{"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("4TJt"),r=n.n(a),i=(n("Jmt5"),n("9M+g"),n("TdT6")),u=n("TVmP"),s={components:{FixedHeader:r.a,Navbar:i.default,Footer:u.default}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("fixed-header",[e("div",{staticClass:"navbar"},[e("navbar")],1)]),this._v(" "),e("router-view"),this._v(" "),e("Footer",{attrs:{testProps:this.msg,nextProps:this.newWord}})],1)},staticRenderFns:[]};var v=n("VU/8")(s,c,!1,function(t){n("yEP+")},null,null).exports,m=n("/ocq");function d(t,e){return function(){return n("mUJ2")("./"+t+"/"+e+".vue")}}o.default.use(m.a);var f=new m.a({base:"/vue-first-app/",mode:"history",routes:[{path:"*",name:"NotFoundComponent",component:d("not-found","NotFoundComponent")},{path:"/",name:"Home",component:d("home","Home")},{path:"/contact",name:"Contact",component:d("contact","Contact")},{path:"/about-me",name:"About Me",component:d("about-me","AboutMe")}]});o.default.config.productionTip=!1;var l=new o.default({el:"#app",router:f,components:{App:v},template:"<App/>"});e.default=l},TVmP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer-container"}},[e("div",{staticClass:"footer"},[e("div",[this._v("\n      "+this._s(this.footerText)+"\n    ")])])])},staticRenderFns:[]};var a=n("VU/8")({name:"Footer",data:function(){return{footerText:"Design SeN"}}},o,!1,function(t){n("Ul31")},"data-v-f62cfc00",null);e.default=a.exports},TdT6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Tqaz"),a={components:{"b-nav-item":o.i,"b-nav":o.h}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-nav",{attrs:{small:""}},[e("b-nav-item",{attrs:{to:"/",active:""}},[this._v("Home")]),this._v(" "),e("b-nav-item",{attrs:{to:"/about-me"}},[this._v("About Me")]),this._v(" "),e("b-nav-item",{attrs:{to:"/contact"}},[this._v("Contact")])],1)],1)},staticRenderFns:[]};var i=n("VU/8")(a,r,!1,function(t){n("Z1i2")},null,null);e.default=i.exports},Ul31:function(t,e){},Z1i2:function(t,e){},mUJ2:function(t,e,n){var o={"./ChildComponent.vue":["Ba6J",5],"./Footer.vue":["TVmP"],"./about-me/AboutMe.vue":["KzEr",1],"./contact/Contact.vue":["+/HG",0],"./home/Home.vue":["h6qm",4],"./navbar/Navbar.vue":["TdT6"],"./not-found/NotFoundComponent.vue":["Rnkk",2],"./testing-component/Test.vue":["b3RO",3]};function a(t){var e=o[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}a.keys=function(){return Object.keys(o)},a.id="mUJ2",t.exports=a},"yEP+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d8879abc0aeeb12229e2.js.map