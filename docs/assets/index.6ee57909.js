import{e as t,f as e}from"./vendor.15fb5b17.js";const r=({instance:t,ctx:e,props:r={}},a="default")=>{const s=(null==t?void 0:t.$slots[a])||(null==e?void 0:e.slots[a]);return(s?s(t):"")||r[a]};var a,s={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
a=s,function(){var t={}.hasOwnProperty;function e(){for(var r=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var o=typeof s;if("string"===o||"number"===o)r.push(s);else if(Array.isArray(s)){if(s.length){var l=e.apply(null,s);l&&r.push(l)}}else if("object"===o)if(s.toString===Object.prototype.toString)for(var d in s)t.call(s,d)&&s[d]&&r.push(d);else r.push(s.toString())}}return r.join(" ")}a.exports?(e.default=e,a.exports=e):window.classNames=e}();var o=s.exports;const l=t({name:"VRACard",props:{title:{type:[Object,String],default:void 0},func:{type:[Object,String],default:void 0},headerClass:{type:String,default:""},headerStyle:{type:[Object,String],default:""},bodyClass:{type:String,default:""},bodyStyle:{type:[Object,String],default:""},border:{type:Boolean,defalut:!1}},setup:(t,a)=>()=>{const s=r({ctx:a}),l=r({props:t,ctx:a},"title"),d=r({props:t,ctx:a},"func"),n=o("vra-card",t.border&&"vra-card-border"),i=o("vra-card-header",t.headerClass),c=o("vra-card-body",t.bodyClass);return e("div",{class:n},[l&&e("div",{class:i,style:t.headerStyle},[e("div",{class:"vra-card-title"},[l]),d&&e("div",{class:"vra-card-func"},[d])]),e("div",{class:c,style:t.bodyStyle},[s])])}});export{l as C};