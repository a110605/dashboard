(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/auth/roles/index"],{4205:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return e.globalRoles&&e.roleTemplates?t("div",[t("header",[t("div",{staticClass:"title"},[t("h1",{staticClass:"m-0"},[e._v("\n        "+e._s(e.t("rbac.roletemplate.label"))+"\n      ")])]),e._v(" "),t("div",{staticClass:"actions-container"},[t("div",{staticClass:"actions"},[e.canCreate?t("n-link",{staticClass:"btn role-primary",attrs:{to:e.createLocation}},[e._v("\n          "+e._s(e.createLabel)+"\n        ")]):e._e()],1)])]),e._v(" "),t("Tabbed",[e.tabs[e.GLOBAL].canFetch?t("Tab",{attrs:{name:e.GLOBAL,weight:e.tabs[e.GLOBAL].weight,"label-key":e.tabs[e.GLOBAL].labelKey}},[t("ResourceTable",{attrs:{schema:e.tabs[e.GLOBAL].schema,rows:e.globalResources}})],1):e._e(),e._v(" "),e.tabs[e.CLUSTER].canFetch?t("Tab",{attrs:{name:e.CLUSTER,weight:e.tabs[e.CLUSTER].weight,"label-key":e.tabs[e.CLUSTER].labelKey}},[t("ResourceTable",{attrs:{schema:e.tabs[e.CLUSTER].schema,headers:e.tabs[e.CLUSTER].headers,rows:e.clusterResources}})],1):e._e(),e._v(" "),e.tabs[e.PROJECT].canFetch?t("Tab",{attrs:{name:e.PROJECT,weight:e.tabs[e.PROJECT].weight,"label-key":e.tabs[e.PROJECT].labelKey}},[t("ResourceTable",{attrs:{schema:e.tabs[e.PROJECT].schema,headers:e.tabs[e.PROJECT].headers,rows:e.namespaceResources}})],1):e._e()],1)],1):t("Loading")},n=[],s=(a("b64b"),a("a4d3"),a("e439"),a("159b"),a("dbb4"),a("2909")),c=a("ade3"),o=a("1da1"),l=(a("c740"),a("b0c0"),a("7db0"),a("d3b7"),a("4de4"),a("8a79"),a("a34a")),i=a.n(l),u=(a("96cf"),a("f38f")),b=a("a4d2"),h=a("a788"),d=a("b178"),E=a("c778"),L=a("7fed"),f=a("3124"),p=a("5f76");function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=L["SUBTYPE_MAPPING"].GLOBAL.key,R=L["SUBTYPE_MAPPING"].CLUSTER.key,A=L["SUBTYPE_MAPPING"].NAMESPACE.key,P={name:"c-cluster-".concat(f["NAME"],"-roles-resource-create"),params:{cluster:p["BLANK_CLUSTER"],resource:h["A"].GLOBAL_ROLE}},y={name:"c-cluster-".concat(f["NAME"],"-roles-resource-create"),params:{cluster:p["BLANK_CLUSTER"],resource:h["A"].ROLE_TEMPLATE}},C={name:"Roles",components:{Tab:u["a"],Tabbed:b["a"],ResourceTable:d["a"],Loading:E["a"]},asyncData:function(e){return Object(o["a"])(i.a.mark((function t(){var a,r,n;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.store,r=a.getters["management/schemaFor"](h["A"].GLOBAL_ROLE),n=a.getters["management/schemaFor"](h["A"].ROLE_TEMPLATE),!r){t.next=9;break}return t.next=6,a.dispatch("management/findAll",{type:h["A"].GLOBAL_ROLE});case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=[];case 10:if(t.t1=t.t0,!n){t.next=17;break}return t.next=14,a.dispatch("management/findAll",{type:h["A"].ROLE_TEMPLATE});case 14:t.t2=t.sent,t.next=18;break;case 17:t.t2=[];case 18:return t.t3=t.t2,t.abrupt("return",{globalRoles:t.t1,roleTemplates:t.t3});case 20:case"end":return t.stop()}}),t)})))()},data:function(){var e,t=this.$store.getters["management/schemaFor"](h["A"].GLOBAL_ROLE),a=this.$store.getters["management/schemaFor"](h["A"].ROLE_TEMPLATE),r=this.$store.getters["type-map/headersFor"](a),n=r.findIndex((function(e){return"default"===e.name}));return{tabs:(e={},Object(c["a"])(e,O,{canFetch:null===t||void 0===t?void 0:t.collectionMethods.find((function(e){return"GET"===e})),canCreate:null===t||void 0===t?void 0:t.resourceMethods.find((function(e){return L["CREATE_VERBS"].has(e)})),weight:3,labelKey:L["SUBTYPE_MAPPING"].GLOBAL.labelKey,schema:t,createLocation:m(m({},P),{},{query:{roleContext:O}})}),Object(c["a"])(e,R,{canFetch:null===a||void 0===a?void 0:a.collectionMethods.find((function(e){return"GET"===e})),canCreate:null===a||void 0===a?void 0:a.resourceMethods.find((function(e){return L["CREATE_VERBS"].has(e)})),labelKey:L["SUBTYPE_MAPPING"].CLUSTER.labelKey,weight:2,schema:a,headers:this.applyDefaultHeaderLabel(r,n,"tableHeaders.authRoles.clusterDefault"),createLocation:m(m({},y),{},{query:{roleContext:R}})}),Object(c["a"])(e,A,{canFetch:null===a||void 0===a?void 0:a.collectionMethods.find((function(e){return"GET"===e})),canCreate:null===a||void 0===a?void 0:a.resourceMethods.find((function(e){return L["CREATE_VERBS"].has(e)})),labelKey:L["SUBTYPE_MAPPING"].NAMESPACE.labelKey,weight:1,schema:a,headers:this.applyDefaultHeaderLabel(r,n,"tableHeaders.authRoles.projectDefault"),createLocation:m(m({},y),{},{query:{roleContext:A}})}),e),GLOBAL:O,CLUSTER:R,PROJECT:A,globalRoles:null,roleTemplates:null}},computed:{globalResources:function(){return this.globalRoles},clusterResources:function(){return this.roleTemplates.filter((function(e){return e.context===L["SUBTYPE_MAPPING"].CLUSTER.context}))},namespaceResources:function(){return this.roleTemplates.filter((function(e){return e.context===L["SUBTYPE_MAPPING"].NAMESPACE.context}))},type:function(){return this.$route.hash.endsWith(A)?A:this.$route.hash.endsWith(R)?R:O},canCreate:function(){return this.tabs[this.type].canCreate},createLabel:function(){return this.t("rbac.roletemplate.subtypes.".concat(this.type,".createButton"))},createLocation:function(){return this.tabs[this.type].createLocation}},methods:{applyDefaultHeaderLabel:function(e,t,a){var r=Object(s["a"])(e);return r[t]=m(m({},e[t]),{},{labelKey:a}),r}}},g=C,_=a("0c7c"),v=Object(_["a"])(g,r,n,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=index.5307e721.js.map