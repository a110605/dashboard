(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login6"],{"20c9":function(t,n,i){"use strict";i("b0c0");n["a"]={props:{focusOnMount:{type:Boolean,required:!0},name:{type:String,required:!0}},computed:{displayName:function(){return this.t("model.authConfig.provider.".concat(this.name))}},mounted:function(){this.focusOnMount&&this.focus()},methods:{focus:function(){this.$refs.btn.focus()}}}},dc57:function(t,n,i){"use strict";i.r(n);var o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"text-center"},[n("button",{ref:"btn",staticClass:"btn bg-primary",staticStyle:{"font-size":"18px"},on:{click:t.login}},[t._v("\n    "+t._s(t.t("login.loginWithProvider",{provider:t.displayName}))+"\n  ")])])},e=[],s=(i("b0c0"),i("20c9")),c={mixins:[s["a"]],methods:{login:function(){this.$store.dispatch("auth/redirectTo",{provider:this.name})}}},r=c,u=i("0c7c"),a=Object(u["a"])(r,o,e,!1,null,null,null);n["default"]=a.exports}}]);
//# sourceMappingURL=login6.a1b61814.js.map