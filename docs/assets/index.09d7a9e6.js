import{d as e,aM as t,ad as a,e as d,u as l,aQ as r,aR as s,aq as u,aS as i}from"./vendor.8d8b2e23.js";import{k as o}from"./index.8188c4d8.js";import{J as m}from"./style.1ff4bf82.js";import{C as n}from"./index.aaefec94.js";var f=e({name:"MdEditor",setup(){const e=t(""),r=l(o),s=a((()=>"dark"===r.state.setting.theme?"dark":"light"));return()=>d(n,null,{default:()=>[d(m,{modelValue:e.value,onChange:t=>e.value=t,theme:s.value,editorName:"editor-tsx"},null)]})}}),p=e({render:()=>d(n,null,{default:()=>[d(r,null,{default:()=>[d(s,{level:2},{default:()=>[u("md-editor-v3")]}),d(i,null,{default:()=>[u("Markdown编辑器，基于vue3，使用jsx和typescript语法开发，支持切换主题、prettier美化文本等。")]}),d(i,null,{default:()=>[u("在线文档："),d("a",{href:"https://imzbf.github.io/md-editor-v3"},[u("md-editor-v3")]),u("，github仓库："),d("a",{href:"https://github.com/imzbf/md-editor-v3"},[u("md-editor-v3")]),u("。")]})]})]})}),v=e({data:()=>({type:"jsx"}),render:()=>d("div",{class:"editor-demo-wrapper"},[d(p,null,null),d(f,null,null)])});export default v;
