(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/settings/DefaultLinksEditor"],{"2f11":function(e,t,a){"use strict";a("6cb1")},5668:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"key-value"},[t("div",{staticClass:"clearfix"},[t("h3",[e._v("\n      "+e._s(e.t("customLinks.settings.default"))+"\n    ")])]),e._v(" "),t("div",{staticClass:"kv-container"},[t("label",{staticClass:"text-label"},[e._v("\n      "+e._s(e.t("customLinks.settings.keyLabel"))+"\n    ")]),e._v(" "),t("label",{staticClass:"text-label"},[e._v("\n      "+e._s(e.t("customLinks.settings.valueLabel"))+"\n    ")]),e._v(" "),t("label",{staticClass:"text-label"}),e._v(" "),e._l(e.value,(function(a,s){return[t("div",{key:s+"key",staticClass:"kv-item key",class:{"link-hidden":!a.enabled}},[t("span",[e._v(e._s(a.label))])]),e._v(" "),t("div",{key:s+"value",staticClass:"kv-item value",class:{"link-hidden":!a.enabled}},[t("span",[e._v(e._s(a.value))])]),e._v(" "),a.readonly||e.isView?t("div",{key:s+"show"}):t("div",{key:s+"show"},[e.isView?e._e():t("Checkbox",{attrs:{"label-key":"customLinks.settings.showLabel"},on:{input:function(t){return e.showhide(a,s,t)}},model:{value:a.enabled,callback:function(t){e.$set(a,"enabled",t)},expression:"row.enabled"}})],1)]}))],2)])},i=[],n=a("2b0e"),l=a("fa3b"),o=a("4de2"),d={name:"DefaultLinksEditor",components:{Checkbox:o["a"]},props:{value:{type:Array,default:function(){return[]}},mode:{type:String,required:!0}},computed:{isView:function(){return this.mode===l["T"]}},methods:{showhide:function(e,t,a){var s=this.value[t];n["default"].set(s,"enabled",!!s.enabled),this.$emit("input",this.value)}}},r=d,u=(a("2f11"),a("0c7c")),c=Object(u["a"])(r,s,i,!1,null,"5e339f98",null);t["default"]=c.exports},"6cb1":function(e,t,a){var s=a("7817");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var i=a("499e").default;i("051b30f1",s,!0,{sourceMap:!1,shadowMode:!1})},7817:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".key-value[data-v-5e339f98]{width:100%}.key-value .kv-container[data-v-5e339f98]{display:grid;align-items:center;grid-template-columns:1fr 1fr 50px;-moz-column-gap:1.75%;column-gap:1.75%}.key-value .kv-container .kv-item[data-v-5e339f98]{background-color:var(--disabled-bg);border:1px solid var(--border);border-radius:5px;width:100%;margin:10px 0 10px 0;height:40px;line-height:40px;padding:0 10px}.key-value .kv-container .kv-item.link-hidden[data-v-5e339f98]{color:var(--disabled-text)}.key-value .kv-container .kv-item.key[data-v-5e339f98]{align-self:flex-start}",""]),e.exports=t}}]);
//# sourceMappingURL=DefaultLinksEditor.d4390d16.js.map