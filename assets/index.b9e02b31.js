import{e as t,f as e}from"./vendor.b052d9b8.js";const r=({instance:t,ctx:e,props:r={}},a="default")=>{const s=(null==t?void 0:t.$slots[a])||(null==e?void 0:e.slots[a]);return(s?s(t):"")||r[a]};var a,s={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
a=s,function(){var t={}.hasOwnProperty;function e(){for(var r=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var d=typeof s;if("string"===d||"number"===d)r.push(s);else if(Array.isArray(s)){if(s.length){var o=e.apply(null,s);o&&r.push(o)}}else if("object"===d)if(s.toString===Object.prototype.toString)for(var l in s)t.call(s,l)&&s[l]&&r.push(l);else r.push(s.toString())}}return r.join(" ")}a.exports?(e.default=e,a.exports=e):window.classNames=e}();var d=s.exports;var o=t({name:"VRACard",props:{title:{type:[Object,String],default:void 0},func:{type:[Object,String],default:void 0},headerClass:{type:String,default:""},headerStyle:{type:[Object,String],default:""},bodyClass:{type:String,default:""},bodyStyle:{type:[Object,String],default:""},bodyPadding:{type:Boolean,default:!0},border:{type:Boolean,defalut:!1}},setup:(t,a)=>()=>{const s=r({ctx:a}),o=r({props:t,ctx:a},"title"),l=r({props:t,ctx:a},"func"),n=d("vra-card",t.border&&"vra-card-border"),i=d("vra-card-header",t.headerClass),p=d("vra-card-body",t.bodyClass,!t.bodyPadding&&"vra-card-body-nopadding");return e("div",{class:n},[o&&e("div",{class:i,style:t.headerStyle},[e("div",{class:"vra-card-title"},[o]),l&&e("div",{class:"vra-card-func"},[l])]),e("div",{class:p,style:t.bodyStyle},[s])])}});export{o as F};