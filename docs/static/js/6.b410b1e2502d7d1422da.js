webpackJsonp([6],{HFPk:function(t,o){},h6qm:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={data:function(){return{msg:"Welcome to Vue.js App!",newWord:"Something",geolection:0,latitude:0,longitude:0,status:""}},methods:{geolocation:function(){navigator.geolocation&&function(){var t=document.querySelector("#map-link");navigator.geolocation?(console.log("Locating…"),navigator.geolocation.getCurrentPosition(function(o){var e=o.coords.latitude,n=o.coords.latitude;this.latitude=e,this.longitude=n,t.href="https://www.openstreetmap.org/#map=18/"+e+"/"+n,t.textContent="Latitude: "+e+" °, Longitude: "+n+" °"},function(){console.log("Unable to retrieve your location")})):console.log("Geolocation is not supported by your browser")}()}},mounted:function(){this.geolocation()}},i={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"home-container"}},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("div",[t._v("\n    "+t._s(t.newWord)+"\n  ")]),t._v(" "),e("div",[t._v("\n    "+t._s(this.latitude)+" + ' '\n    "+t._s(this.longitude)+"\n  ")]),t._v(" "),e("div",{attrs:{id:"#map-link"}})])},staticRenderFns:[]};var a=e("VU/8")(n,i,!1,function(t){e("HFPk")},"data-v-5a303258",null);o.default=a.exports}});
//# sourceMappingURL=6.b410b1e2502d7d1422da.js.map