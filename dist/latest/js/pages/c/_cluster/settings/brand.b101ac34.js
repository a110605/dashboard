(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/settings/brand"],{"0c1b":function(t,o,e){"use strict";e("818f2")},"4b7f":function(t,o,e){var i=e("4bad");o=i(!1),o.push([t.i,".link-example[data-v-6d5f2b26]{display:flex;align-content:center}.link-example a[data-v-6d5f2b26]{margin:auto}.logo-container[data-v-6d5f2b26]{display:flex;flex-direction:column}.logo-container[data-v-6d5f2b26].simple-box{position:relative;flex:1;max-height:120px}.logo-container[data-v-6d5f2b26].simple-box .content{height:100%;display:flex}.logo-container[data-v-6d5f2b26].simple-box .logo-preview{max-width:100%}.logo-container LABEL[data-v-6d5f2b26]{position:absolute;top:10px;left:10px}",""]),t.exports=o},"818f2":function(t,o,e){var i=e("4b7f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("499e").default;a("72dec7ac",i,!0,{sourceMap:!1,shadowMode:!1})},a07d:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t._self._c;return t.$fetchState.pending?o("Loading"):o("div",[o("h1",{staticClass:"mb-20"},[t._v("\n    "+t._s(t.t("branding.label"))+"\n  ")]),t._v(" "),o("TypeDescription",{attrs:{resource:"branding"}}),t._v(" "),o("div",[o("div",{staticClass:"row mb-20"},[o("div",{staticClass:"col span-6"},[o("LabeledInput",{attrs:{label:t.t("branding.uiPL.label"),mode:t.mode,maxlength:100},model:{value:t.uiPLSetting.value,callback:function(o){t.$set(t.uiPLSetting,"value",o)},expression:"uiPLSetting.value"}})],1)]),t._v(" "),o("h3",{staticClass:"mt-20 mb-5 pb-5"},[t._v("\n      "+t._s(t.t("branding.logos.label"))+"\n    ")]),t._v(" "),o("label",{staticClass:"text-label"},[t._v("\n      "+t._s(t.t("branding.logos.tip",{},!0))+"\n    ")]),t._v(" "),o("div",{staticClass:"row mt-10 mb-20"},[o("Checkbox",{attrs:{label:t.t("branding.logos.useCustom"),mode:t.mode},model:{value:t.customizeLogo,callback:function(o){t.customizeLogo=o},expression:"customizeLogo"}})],1),t._v(" "),t.customizeLogo?o("div",{staticClass:"row mb-20"},[o("div",{staticClass:"col logo-container span-6"},[o("div",{staticClass:"mb-10"},[o("FileSelector",{staticClass:"role-secondary",attrs:{"byte-limit":2e4,"read-as-data-url":!0,label:t.t("branding.logos.uploadLight"),mode:t.mode},on:{error:t.setError,selected:function(o){return t.updateLogo(o,"uiLogoLight")}}})],1),t._v(" "),t.uiLogoLight||t.uiLogoDark?o("SimpleBox",{staticClass:"theme-light mb-10"},[o("label",{staticClass:"text-muted"},[t._v(t._s(t.t("branding.logos.lightPreview")))]),t._v(" "),o("img",{staticClass:"logo-preview",attrs:{src:t.uiLogoLight?t.uiLogoLight:t.uiLogoDark}})]):t._e()],1),t._v(" "),o("div",{staticClass:"col logo-container span-6"},[o("div",{staticClass:"mb-10"},[o("FileSelector",{staticClass:"role-secondary",attrs:{"byte-limit":2e4,"read-as-data-url":!0,label:t.t("branding.logos.uploadDark"),mode:t.mode},on:{error:t.setError,selected:function(o){return t.updateLogo(o,"uiLogoDark")}}})],1),t._v(" "),t.uiLogoDark||t.uiLogoLight?o("SimpleBox",{staticClass:"theme-dark mb-10"},[o("label",{staticClass:"text-muted"},[t._v(t._s(t.t("branding.logos.darkPreview")))]),t._v(" "),o("img",{staticClass:"logo-preview",attrs:{src:t.uiLogoDark?t.uiLogoDark:t.uiLogoLight}})]):t._e()],1)]):t._e(),t._v(" "),o("h3",{staticClass:"mt-20 mb-5 pb-5"},[t._v("\n      "+t._s(t.t("branding.favicon.label"))+"\n    ")]),t._v(" "),o("label",{staticClass:"text-label"},[t._v("\n      "+t._s(t.t("branding.favicon.tip",{},!0))+"\n    ")]),t._v(" "),o("div",{staticClass:"row mt-10 mb-20"},[o("Checkbox",{attrs:{label:t.t("branding.favicon.useCustom"),mode:t.mode},model:{value:t.customizeFavicon,callback:function(o){t.customizeFavicon=o},expression:"customizeFavicon"}})],1),t._v(" "),t.customizeFavicon?o("div",{staticClass:"row mb-20"},[o("div",{staticClass:"col logo-container span-12"},[o("div",{staticClass:"mb-10"},[o("FileSelector",{staticClass:"role-secondary",attrs:{"byte-limit":2e4,"read-as-data-url":!0,label:t.t("branding.favicon.upload"),mode:t.mode},on:{error:t.setError,selected:function(o){return t.updateLogo(o,"uiFavicon")}}})],1),t._v(" "),t.uiFavicon?o("SimpleBox",[o("label",{staticClass:"text-muted"},[t._v(t._s(t.t("branding.favicon.preview")))]),t._v(" "),o("img",{staticClass:"logo-preview",attrs:{src:t.uiFavicon}})]):t._e()],1)]):t._e(),t._v(" "),o("h3",{staticClass:"mt-40 mb-5 pb-0"},[t._v("\n      "+t._s(t.t("branding.color.label"))+"\n    ")]),t._v(" "),o("label",{staticClass:"text-label"},[t._v("\n      "+t._s(t.t("branding.color.tip",{},!0))+"\n    ")]),t._v(" "),o("div",{staticClass:"row mt-20"},[o("Checkbox",{attrs:{label:t.t("branding.color.useCustom"),mode:t.mode},model:{value:t.customizeColor,callback:function(o){t.customizeColor=o},expression:"customizeColor"}})],1),t._v(" "),t.customizeColor?o("div",{staticClass:"row mt-20 mb-20"},[o("ColorInput",{attrs:{"component-testid":"primary"},model:{value:t.uiColor,callback:function(o){t.uiColor=o},expression:"uiColor"}})],1):t._e(),t._v(" "),o("h3",{staticClass:"mt-40 mb-5 pb-0"},[t._v("\n      "+t._s(t.t("branding.linkColor.label"))+"\n    ")]),t._v(" "),o("label",{staticClass:"text-label"},[t._v("\n      "+t._s(t.t("branding.linkColor.tip",{},!0))+"\n    ")]),t._v(" "),o("div",{staticClass:"row mt-20"},[o("Checkbox",{attrs:{label:t.t("branding.linkColor.useCustom"),mode:t.mode},model:{value:t.customizeLinkColor,callback:function(o){t.customizeLinkColor=o},expression:"customizeLinkColor"}})],1),t._v(" "),t.customizeLinkColor?o("div",{staticClass:"row mt-20 mb-20"},[o("ColorInput",{staticClass:"col",attrs:{"component-testid":"link"},model:{value:t.uiLinkColor,callback:function(o){t.uiLinkColor=o},expression:"uiLinkColor"}}),t._v(" "),o("span",{staticClass:"col link-example"},[o("a",[t._v("\n          "+t._s(t.t("branding.linkColor.example"))+"\n        ")])])],1):t._e()]),t._v(" "),t._l(t.errors,(function(t){return[o("Banner",{key:t,attrs:{color:"error",label:t}})]})),t._v(" "),"edit"===t.mode?o("div",[o("AsyncButton",{staticClass:"pull-right mt-20",attrs:{"component-testid":"branding-apply",mode:"apply"},on:{click:t.save}})],1):t._e()],2)},a=[],n=e("1da1"),l=e("a34a"),s=e.n(l),r=(e("96cf"),e("cca6"),e("caad"),e("2532"),e("498a"),e("ac1f"),e("5319"),e("ad9d"),e("e260"),e("d3b7"),e("e6cf"),e("3ca3"),e("ddb0"),e("84d3")),c=e("5ed1"),u=e("35f4"),g=e("4de2"),d=e("f7ac"),v=e("8af7"),m=e("c778"),b=e("67c9"),p=e("bec1"),L=e("fa98"),C=e("a788"),_=e("58ec"),f=e("2f40"),h=e("c5b9"),k=e("fa3b"),S=e("16cc"),x=e("6929"),y={layout:"authenticated",components:{LabeledInput:r["a"],Checkbox:g["a"],FileSelector:d["b"],Loading:m["a"],SimpleBox:v["a"],AsyncButton:b["b"],Banner:p["a"],ColorInput:c["a"],TypeDescription:u["a"]},fetch:function(){var t=this;return Object(n["a"])(s.a.mark((function o(){var e;return s.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(L["a"])({uiPLSetting:t.$store.dispatch("management/find",{type:C["A"].SETTING,id:h["c"].PL}),uiLogoDarkSetting:Object(f["a"])(t.$store,h["c"].LOGO_DARK,""),uiLogoLightSetting:Object(f["a"])(t.$store,h["c"].LOGO_LIGHT,""),uiColorSetting:Object(f["a"])(t.$store,h["c"].PRIMARY_COLOR,""),uiLinkColorSetting:Object(f["a"])(t.$store,h["c"].LINK_COLOR,""),uiFaviconSetting:Object(f["a"])(t.$store,h["c"].FAVICON,"")});case 2:if(e=o.sent,Object.assign(t,e),e.uiLogoDarkSetting.value)try{t.uiLogoDark=e.uiLogoDarkSetting.value,t.customizeLogo=!0}catch(i){}if(e.uiLogoLightSetting.value)try{t.uiLogoLight=e.uiLogoLightSetting.value,t.customizeLogo=!0}catch(a){}if(e.uiFaviconSetting.value)try{t.uiFavicon=e.uiFaviconSetting.value,t.customizeFavicon=!0}catch(n){}e.uiColorSetting.value&&(t.uiColor=x(e.uiColorSetting.value).hex(),t.customizeColor=!0),e.uiLinkColorSetting.value&&(t.uiLinkColor=x(e.uiLinkColorSetting.value).hex(),t.customizeLinkColor=!0);case 9:case"end":return o.stop()}}),o)})))()},data:function(){return{vendor:Object(_["d"])(),uiPLSetting:{},uiLogoDarkSetting:{},uiLogoDark:"",uiLogoLightSetting:{},uiLogoLight:"",customizeLogo:!1,uiFaviconSetting:{},uiFavicon:"",customizeFavicon:!1,uiColorSetting:{},uiColor:null,customizeColor:!1,uiLinkColorSetting:{},uiLinkColor:null,customizeLinkColor:!1,errors:[]}},computed:{mode:function(){var t,o=this.$store.getters["management/schemaFor"](C["A"].SETTING);return null!==o&&void 0!==o&&null!==(t=o.resourceMethods)&&void 0!==t&&t.includes("PUT")?k["M"]:k["T"]}},mounted:function(){var t=getComputedStyle(document.body).getPropertyValue("--primary"),o=getComputedStyle(document.body).getPropertyValue("--link"),e=document.querySelector(".suse");e&&(t=getComputedStyle(e).getPropertyValue("--primary"),o=getComputedStyle(e).getPropertyValue("--link")),this.uiColor=this.uiColor||t.trim(),this.uiLinkColor=this.uiLinkColor||o.trim()},methods:{updateLogo:function(t,o){this[o]=t},setError:function(t){this.errors=[],this.errors.push(t)},save:function(t){var o=this;return Object(n["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.uiPLSetting.value=o.uiPLSetting.value.replaceAll(/[\<>&=#()"]/gm,""),o.customizeLogo?(o.uiLogoLightSetting.value=o.uiLogoLight,o.uiLogoDarkSetting.value=o.uiLogoDark):(o.uiLogoLightSetting.value="",o.uiLogoDarkSetting.value=""),o.customizeFavicon?o.uiFaviconSetting.value=o.uiFavicon:o.uiFaviconSetting.value="",o.customizeColor?o.uiColorSetting.value=x(o.uiColor).rgb().string():o.uiColorSetting.value=null,o.customizeLinkColor?o.uiLinkColorSetting.value=x(o.uiLinkColor).rgb().string():o.uiLinkColorSetting.value=null,o.errors=[],e.prev=6,e.next=9,Promise.all([o.uiPLSetting.save(),o.uiLogoDarkSetting.save(),o.uiLogoLightSetting.save(),o.uiColorSetting.save(),o.uiLinkColorSetting.save(),o.uiFaviconSetting.save()]);case 9:o.uiPLSetting.value!==o.vendor&&Object(_["f"])(o.uiPLSetting.value),Object(S["b"])(o.$store),t(!0),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](6),o.errors.push(e.t0),t(!1);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})))()}}},w=y,z=(e("0c1b"),e("0c7c")),F=Object(z["a"])(w,i,a,!1,null,"6d5f2b26",null);o["default"]=F.exports}}]);
//# sourceMappingURL=brand.b101ac34.js.map