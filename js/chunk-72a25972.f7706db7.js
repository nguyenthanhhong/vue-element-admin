(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72a25972"],{"10b2":function(e,r,t){"use strict";var s=t("cd4c"),a=t.n(s);a.a},"1da8":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login"},[t("el-card",[t("h2",[e._v("Login")]),t("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.model,rules:e.rules},nativeOn:{submit:function(r){return r.preventDefault(),e.login(r)}}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"Username","prefix-icon":"el-icon-user-solid"},model:{value:e.model.username,callback:function(r){e.$set(e.model,"username",r)},expression:"model.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{placeholder:"Password",type:"password","prefix-icon":"el-icon-lock"},model:{value:e.model.password,callback:function(r){e.$set(e.model,"password",r)},expression:"model.password"}})],1),t("el-form-item",[t("el-button",{staticClass:"login-button",attrs:{loading:e.loading,type:"primary","native-type":"submit",block:""}},[e._v("Login")])],1),t("a",{staticClass:"forgot-password",attrs:{href:"/pages/forgotpassword"}},[e._v("Forgot password ?")])],1)],1)],1)},a=[],n=(t("d3b7"),t("96cf"),t("1da1")),o={data:function(){return{validCredentials:{username:"lightscope",password:"lightscope"},model:{username:"",password:""},loading:!1,rules:{username:[{required:!0,message:"Username is required",trigger:"blur"},{min:4,message:"Username length should be at least 5 characters",trigger:"blur"}],password:[{required:!0,message:"Password is required",trigger:"blur"},{min:5,message:"Password length should be at least 5 characters",trigger:"blur"}]}}},methods:{simulateLogin:function(){return new Promise((function(e){setTimeout(e,800)}))},login:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$refs.form.validate();case 2:if(t=r.sent,t){r.next=5;break}return r.abrupt("return");case 5:return e.loading=!0,r.next=8,e.simulateLogin();case 8:e.loading=!1,e.$router.push("/index");case 10:case"end":return r.stop()}}),r)})))()}}},i=o,l=(t("10b2"),t("caaf"),t("2877")),u=Object(l["a"])(i,s,a,!1,null,"2dfee5af",null);r["default"]=u.exports},3556:function(e,r,t){},caaf:function(e,r,t){"use strict";var s=t("3556"),a=t.n(s);a.a},cd4c:function(e,r,t){}}]);
//# sourceMappingURL=chunk-72a25972.f7706db7.js.map