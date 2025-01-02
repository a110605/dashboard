(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/uiplugins/SetupUIPlugins"],{"0edd":function(e,t,a){"use strict";a("5c08")},"1f19":function(e,t,a){"use strict";a("5827")},5827:function(e,t,a){var n=a("c962");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("727c343c",n,!0,{sourceMap:!1,shadowMode:!1})},"5c08":function(e,t,a){var n=a("d353");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("2ae77750",n,!0,{sourceMap:!1,shadowMode:!1})},c150:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("IconMessage",{attrs:{vertical:!0,subtle:!1,icon:"icon-gear"},scopedSlots:e._u([{key:"message",fn:function(){return[t("h2",[e._v("\n        "+e._s(e.t("plugins.setup.title"))+"\n      ")]),e._v(" "),e.loading?e._e():t("div",[e.haveCharts?t("div",[t("p",[e._v("\n            "+e._s(e.t("plugins.setup.prompt.can"))+"\n          ")]),e._v(" "),t("AsyncButton",{staticClass:"enable-plugin-support",attrs:{mode:"enable",manual:!0,"current-phase":e.buttonState,"data-testid":"extension-enable-operator"},on:{click:e.enable}})],1):t("div",[t("p",[e._v("\n            "+e._s(e.t("plugins.setup.prompt.cant"))+"\n          ")])]),e._v(" "),e._l(e.errors,(function(a,n){return t("div",{key:n,staticClass:"plugin-setup-error"},[e._v("\n          "+e._s(a)+"\n        ")])}))],2)]},proxy:!0}])}),e._v(" "),e.showDialog?t("Dialog",{attrs:{name:"confirm-uiplugins-setup",title:e.t("plugins.setup.install.title")},on:{closed:e.dialogClosed}},[[t("p",[e._v("\n        "+e._s(e.t("plugins.setup.install.prompt"))+"\n      ")]),e._v(" "),e.hasRancherUIPluginsRepo?e._e():t("div",{staticClass:"mt-20"},[t("Checkbox",{attrs:{primary:!0,"label-key":"plugins.setup.install.addRancherRepo"},model:{value:e.addRepo,callback:function(t){e.addRepo=t},expression:"addRepo"}}),e._v(" "),t("div",{staticClass:"checkbox-info"},[e._v("\n          "+e._s(e.t("plugins.setup.install.airgap"))+"\n        ")])],1)]],2):e._e()],1)},s=[],r=a("ade3"),o=a("1da1"),i=a("a34a"),c=a.n(i),l=(a("96cf"),a("07ac"),a("d3b7"),a("159b"),a("7db0"),a("b0c0"),a("e260"),a("ddb0"),a("99af"),a("e6cf"),a("67c9")),u=a("2678"),p=a("a788"),d=a("7388"),f=a("e5e4"),h=a("bd30"),g=a("7600"),v={components:{AsyncButton:l["b"],Checkbox:h["a"],IconMessage:u["a"],Dialog:f["a"]},fetch:function(){var e=this;return Object(o["a"])(c.a.mark((function t(){var a,n,s;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.$store.getters["catalog/rawCharts"],n=Object.values(a),s=[],g["e"].forEach((function(e){var t=n.find((function(t){return t.repoName===g["j"]&t.chartName===e}));t&&s.push(t)})),e.haveCharts=s.length===g["e"].length,!e.haveCharts){t.next=10;break}if(e.installCharts=s,!e.$store.getters["management/schemaFor"](p["f"].CLUSTER_REPO)){t.next=10;break}return t.next=10,e.$store.dispatch("management/findAll",{type:p["f"].CLUSTER_REPO});case 10:return t.next=12,e.$store.dispatch("management/find",{type:p["A"].SETTING,id:"system-default-registry"});case 12:e.defaultRegistrySetting=t.sent,e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!0,haveCharts:!1,installCharts:[],errors:[],addRepo:!0,buttonState:l["a"].ACTION,defaultRegistrySetting:null,showDialog:!1}},computed:{hasRancherUIPluginsRepo:function(){var e=this.$store.getters["catalog/repos"];return!!e.find((function(e){return e.name===g["b"]}))}},methods:{installChart:function(e){var t=this;return Object(o["a"])(c.a.mark((function a(){var n,s,o,i,l,u,f,h,v,m,b,_;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e.versions[0],i=o.repoType,l=o.repoName,u=t.$store.getters["catalog/repo"]({repoType:i,repoName:l}),f={chartName:e.chartName,version:o.version,releaseName:e.chartName,annotations:(n={},Object(r["a"])(n,d["e"].SOURCE_REPO_TYPE,i),Object(r["a"])(n,d["e"].SOURCE_REPO_NAME,l),n),values:{}},h=(null===(s=t.defaultRegistrySetting)||void 0===s?void 0:s.value)||"",h&&(f.values.global=f.values.global||{},f.values.global.cattle=f.values.global.cattle||{},f.values.global.cattle.systemDefaultRegistry=h),v={charts:[f],wait:!0,namespace:g["h"]},m="install",a.next=11,u.doAction(m,v);case 11:return b=a.sent,_="".concat(b.operationNamespace,"/").concat(b.operationName),a.next=15,u.waitForOperation(_);case 15:return a.abrupt("return",t.$store.dispatch("management/find",{type:p["f"].OPERATION,id:_}));case 16:case"end":return a.stop()}}),a)})))()},enable:function(){this.errors=[],this.addRepo=!this.hasRancherUIPluginsRepo,this.showDialog=!0},dialogClosed:function(e){var t=this;return Object(o["a"])(c.a.mark((function a(){return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.errors=[],t.showDialog=!1,!e){a.next=13;break}if(t.buttonState=l["a"].WAITING,!t.addRepo){a.next=7;break}return a.next=7,t.addDefaultHelmRepository();case 7:return a.next=9,t.installPluginCharts();case 9:return a.next=11,new Promise((function(e){return setTimeout(e,5e3)}));case 11:t.buttonState=t.errors.length>0?l["a"].ERROR:l["a"].ACTION,t.$emit("done");case 13:case"end":return a.stop()}}),a)})))()},addDefaultHelmRepository:function(){var e=this;return Object(o["a"])(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=g["b"],t.prev=1,t.next=4,e.$store.dispatch("management/create",{type:p["f"].CLUSTER_REPO,metadata:{name:a},spec:{gitBranch:g["a"],gitRepo:g["c"]}});case 4:return n=t.sent,t.abrupt("return",n.save());case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0),e.errors.push(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},installPluginCharts:function(){var e=this;return Object(o["a"])(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=0;case 1:if(!(a<e.installCharts.length)){t.next=14;break}return n=e.installCharts[a],t.prev=3,t.next=6,e.installChart(n);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](3),e.errors.push(t.t0.message);case 11:a++,t.next=1;break;case 14:return t.abrupt("return",new Promise((function(e){return setTimeout(e,2e3)})));case 15:case"end":return t.stop()}}),t,null,[[3,8]])})))()}}},m=v,b=(a("0edd"),a("0c7c")),_=Object(b["a"])(m,n,s,!1,null,"9a79b8d8",null);t["default"]=_.exports},c962:function(e,t,a){var n=a("4bad");t=n(!1),t.push([e.i,".modal-dialog[data-v-559afa2c]{padding:10px}.modal-dialog h4[data-v-559afa2c]{font-weight:700}.modal-dialog .dialog-buttons[data-v-559afa2c]{display:flex;justify-content:flex-end;margin-top:10px}.modal-dialog .dialog-buttons[data-v-559afa2c]>:not(:last-child){margin-right:10px}",""]),e.exports=t},d353:function(e,t,a){var n=a("4bad");t=n(!1),t.push([e.i,".enable-plugin-support[data-v-9a79b8d8]{font-size:14px;margin-top:20px}.plugin-setup-error[data-v-9a79b8d8]{font-size:14px;color:var(--error);margin:10px 0 0 0}.checkbox-info[data-v-9a79b8d8]{margin-left:20px;opacity:.7}",""]),e.exports=t},e5e4:function(e,t,a){"use strict";a("b0c0");var n=function(){var e=this,t=e._self._c;return t("app-modal",{attrs:{name:e.name,height:"auto",scrollable:!0},on:{"before-open":e.beforeOpen,close:function(t){return e.closeDialog(!1)}}},[t("div",{staticClass:"modal-dialog"},[t("h4",[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),e._t("default"),e._v(" "),t("div",{staticClass:"dialog-buttons mt-20"},[e._t("buttons"),e._v(" "),e.$slots.buttons?e._e():t("div",[t("button",{staticClass:"btn role-secondary",on:{click:function(t){return e.closeDialog(!1)}}},[e._v("\n          "+e._s(e.t("generic.cancel"))+"\n        ")]),e._v(" "),e.mode?t("AsyncButton",{staticClass:"ml-10",attrs:{mode:e.mode},on:{click:e.ok}}):t("button",{staticClass:"btn role-primary ml-10",on:{click:function(t){return e.closeDialog(!0)}}},[e._v("\n          "+e._s(e.t("generic.ok"))+"\n        ")])],1)],2)],2)])},s=[],r=a("67c9"),o=a("8dbe"),i={components:{AsyncButton:r["b"],AppModal:o["a"]},props:{name:{type:String,required:!0},title:{type:String,required:!0},mode:{type:String,default:""}},data:function(){return{closed:!1}},methods:{beforeOpen:function(){this.closed=!1},ok:function(e){var t=this,a=function(a){e(a),a&&t.closeDialog(!0)};this.$emit("okay",a)},closeDialog:function(e){this.closed||(this.$emit("closed",e),this.closed=!0)}}},c=i,l=(a("1f19"),a("0c7c")),u=Object(l["a"])(c,n,s,!1,null,"559afa2c",null);t["a"]=u.exports}}]);
//# sourceMappingURL=SetupUIPlugins.47d953d2.js.map