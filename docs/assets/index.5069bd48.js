import{M as a}from"./index.3775902b.js";import{e as l,al as e,aq as s,aG as t,d as n,aH as i,ai as u,ae as c,ah as d,aI as o,aJ as r,aj as p,aK as m,aL as v,aF as f,ak as y}from"./vendor.82f76491.js";import{C as g}from"./index.8e6e2add.js";var b=()=>l("div",{class:"workspace-header"},[l("div",{class:"welcome"},[l("div",{class:"avatar"},[l(e,{shape:"circle",size:60,src:"/vue3-admin/static/img/boy01.jpg"},null)]),l("div",{class:"msg"},[l("div",{class:"hello"},[s("早上好，毛利小五郎，开始奋斗吧！")]),l("div",{class:"weather"},[l(a,{type:"icon-tianqi",class:"icon"},null),l("span",null,[s("外面太阳很大，33℃ - 41℃，建议你不要建议我建议你别去上班！")])])])]),l("div",{class:"todo"},[l(t,{class:"todo-item",title:l("span",{class:"item-title"},[l(a,{type:"icon-beOnDutyIssue"},null),s(" "),l("span",null,[s("issues")])]),suffix:l("span",null,[s("/ 30")]),value:13},null),l(t,{class:"todo-item",title:l("span",{class:"item-title"},[l(a,{type:"icon-renwu"},null),s(" "),l("span",null,[s("任务")])]),suffix:l("span",null,[s("/ 25")]),value:13},null),l(t,{class:"todo-item",title:l("span",{class:"item-title"},[l(a,{type:"icon-youjian"},null),s(" "),l("span",null,[s("邮件")])]),suffix:l("span",null,[s("/ 23")]),value:13},null)])]);const h={title:"vue3-admin",description:"项目基于vue@3.x系列开发，开发环境使用vite@2.x搭配纯jsx",avatar:"/vue3-admin/static/img/boy01.jpg",team:"vra-dever",date:"4个月前"},j=n({setup:()=>()=>{let t;return l(g,{class:"va-mb project",title:l(c,null,[l(a,{type:"icon-shouye",class:"title-icon"},null),s("进行中的项目")]),bodyClass:"clear",bodyStyle:{paddingTop:10},func:l(d,{to:"/project",class:"normal-link"},{default:()=>[s("全部项目")]})},"function"==typeof(n=t=[1,2,3,4,5].map((a=>l(i.Grid,null,{default:()=>[l(i.Meta,{title:h.title,description:h.description,avatar:l(e,{src:h.avatar},null),key:`project-item-${a}`},null),l("div",{class:"footer"},[l("a",{href:"#"},[h.team]),s(" "),l("span",null,[h.date])])]}))))||"[object Object]"===Object.prototype.toString.call(n)&&!u(n)?t:{default:()=>[t]});var n}}),k=()=>l(g,{class:"va-mb",title:l(c,null,[l(a,{type:"icon-changyongfenlei",class:"title-icon"},null),s("常用功能")])},{default:()=>[l(o,{class:"used-list"},{default:()=>[l(r,{span:8},{default:()=>[l("div",{class:"used-item"},[l(a,{type:"icon-liebiao",class:"used-item-icon"},null),l("span",null,[s("列表")])])]}),l(r,{span:8},{default:()=>[l("div",{class:"used-item"},[l(a,{type:"icon-dingdan",class:"used-item-icon"},null),l("span",null,[s("表单")])])]}),l(r,{span:8},{default:()=>[l("div",{class:"used-item"},[l(a,{type:"icon-icon_A",class:"used-item-icon"},null),l("span",null,[s("设置")])])]}),l(r,{span:8},{default:()=>[l("div",{class:"used-item"},[l(a,{type:"icon-sousuo",class:"used-item-icon"},null),l("span",null,[s("搜索")])])]}),l(r,{span:8},{default:()=>[l("div",{class:"used-item"},[l(a,{type:"icon-yibiaopan",class:"used-item-icon"},null),l("span",null,[s("监控台")])])]}),l(r,{span:8},{default:()=>[l("div",{class:"used-item"},[l(a,{type:"icon-gongju",class:"used-item-icon"},null),l("span",null,[s("工具")])])]})]})]}),x=[{title:"名称",dataIndex:"name",key:"name"},{title:"进度",dataIndex:"progress",key:"progress",width:"120px",customRender:({text:a})=>l(v,{percent:a,size:"small"},null)},{title:"操作",align:"center",key:"action",customRender:()=>l(f,{size:"small",type:"link"},{default:()=>[s("详情")]})}],w=[{key:"1",code:"10001",name:"完成vue3-admin开发",progress:30},{key:"2",code:"10002",name:"完成开发文档编写",progress:100},{key:"3",code:"10003",name:"完成公共组件提取",progress:78},{key:"4",code:"10004",name:"开一个无聊的会",progress:56}],I=n({setup(){const e=p({data:w,columns:x});return()=>l(g,{class:"va-mb",title:l(c,null,[l(a,{type:"icon-shouye",class:"title-icon"},null),s("我的代办")])},{default:()=>[l(m,{columns:e.columns,dataSource:e.data,pagination:!1,size:"middle",showHeader:!1},null)]})}}),z=[{title:l(c,null,[l("b",null,[l("a",{href:"#"},[s("毛利小五郎")])]),s(" 创建了文章 "),l("b",null,[l("a",{href:"#"},[s("前端学习笔记")])])]),time:"8小时前",avatar:"/vue3-admin/static/img/boy01.jpg"},{title:l(c,null,[l("b",null,[l("a",{href:"#"},[s("江户川柯南")])]),s(" 创建了文章 "),l("b",null,[l("a",{href:"#"},[s("React与Vue的状态更新对比")])])]),time:"23小时前",avatar:"/vue3-admin/static/img/boy01.jpg"},{title:l(c,null,[l("b",null,[l("a",{href:"#"},[s("工藤优作")])]),s(" 创建了文章 "),l("b",null,[l("a",{href:"#"},[s("简单版本的echarts")])])]),time:"2021年04月16日18:24:51",avatar:"/vue3-admin/static/img/boy01.jpg"},{title:l(c,null,[l("b",null,[l("a",{href:"#"},[s("毛利兰")])]),s(" 创建了文章 "),l("b",null,[l("a",{href:"#"},[s("魔幻的css（一）")])])]),time:"2021年03月16日18:24:59",avatar:"/vue3-admin/static/img/boy01.jpg"},{title:l(c,null,[l("b",null,[l("a",{href:"#"},[s("赤井秀一")])]),s(" 创建了文章 "),l("b",null,[l("a",{href:"#"},[s("Java从入门到猝死")])])]),time:"2021年02月16日18:25:08",avatar:"/vue3-admin/static/img/boy01.jpg"}],S=n({setup(){const t=p({list:z});return()=>l(g,{class:"va-mb",title:l(c,null,[l(a,{type:"icon-dongtai",class:"title-icon"},null),s("动态")])},{default:()=>[l(y,{dataSource:t.list,renderItem:({item:a})=>l(y.Item,null,{default:()=>[l(y.Item.Meta,{title:a.title,avatar:l(e,{src:a.avatar},null),description:a.time},null)]})},null)]})}}),H=n({setup:()=>()=>l(g,{class:"va-mb team",title:l(c,null,[l(a,{type:"icon-86",class:"title-icon"},null),s("一个提莫")])},{default:()=>[l(o,null,{default:()=>[l(r,{span:12},{default:()=>[l("a",{href:"#",class:"item"},[l(e,{src:"/vue3-admin/static/img/boy01.jpg"},null),l("span",{class:"name"},[s("vra-dever")])])]}),l(r,{span:12},{default:()=>[l("a",{href:"#",class:"item"},[l(e,{src:"/vue3-admin/static/img/boy01.jpg"},null),l("span",{class:"name"},[s("vra-dever")])])]}),l(r,{span:12},{default:()=>[l("a",{href:"#",class:"item"},[l(e,{src:"/vue3-admin/static/img/boy01.jpg"},null),l("span",{class:"name"},[s("vra-dever")])])]}),l(r,{span:12},{default:()=>[l("a",{href:"#",class:"item"},[l(e,{src:"/vue3-admin/static/img/boy01.jpg"},null),l("span",{class:"name"},[s("vra-dever")])])]}),l(r,{span:12},{default:()=>[l("a",{href:"#",class:"item"},[l(e,{src:"/vue3-admin/static/img/boy01.jpg"},null),l("span",{class:"name"},[s("vra-dever")])])]})]})]})});var M=()=>l("div",{class:"view-space workspace-body"},[l(o,{gutter:[14,14]},{default:()=>[l(r,{span:16},{default:()=>[l(j,null,null),l(S,null,null)]}),l(r,{span:8},{default:()=>[l(k,null,null),l(I,null,null),l(H,null,null)]})]})]);const O=n({name:"ViewHomeWorkspace",setup:()=>()=>l("div",{class:"workspace"},[l(b,null,null),l(M,null,null)])});export default O;
