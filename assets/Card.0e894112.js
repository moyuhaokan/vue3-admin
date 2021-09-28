import{F as e}from"./index.b9e02b31.js";import{r as l,aN as a,aO as t,aP as r,aq as n,aQ as u,e as d,f as s,aI as o,aJ as p,aR as f}from"./vendor.b052d9b8.js";var i=(e,l)=>{for(const[a,t]of l)e[a]=t;return e};const v={name:"CardDemo",components:{"vra-card":e}},c=n(" 这是使用vue模块开发的 "),b=u("p",null,"标题使用props.title或title插槽",-1),g=u("p",null,"内容默认插槽",-1),h=u("p",null,'样式：headerStyle="font-weight: bold; font-size: 16px;"',-1);var m=i(v,[["render",function(e,n,u,d,s,o){const p=l("vra-card");return r(),a(p,{border:"",headerStyle:"font-weight: bold; font-size: 16px;"},{title:t((()=>[c])),default:t((()=>[b,g,h])),_:1})}]]),x=d({name:"ViewComponentCard",setup:()=>()=>s("div",{class:"view-space"},[s(o,{gutter:[14,14]},{default:()=>[s(p,{span:24},{default:()=>[s(e,null,{default:()=>[s(f,null,{default:()=>[s(f.Title,{level:2},{default:()=>[n("卡片-组件")]}),s(f.Paragraph,null,{default:()=>[n("卡片容器")]}),s(f.Title,{level:3},{default:()=>[n("使用场景")]}),s(f.Paragraph,null,{default:()=>[n("自定义组件，支持vue模板及jsx引用，友好的类型提示。自定义的内边距。")]}),s(f.Title,{level:3},{default:()=>[n("代码演示")]}),s(f.Paragraph,null,{default:()=>[s(o,{gutter:[14,14]},{default:()=>[s(p,{span:12},{default:()=>[s(e,{border:!0,title:"这是使用jsx开发的",headerStyle:{fontWeight:"bold",fontSize:"16px"}},{default:()=>[s("p",null,[n("标题使用props.title构造")]),s("p",null,[n("内容默认default插入")]),s("p",null,[n("样式限制："),s("pre",null,[s("code",null,["[Object, String] as PropType<CSSProperties | string>"])])])]})]}),s(p,{span:12},{default:()=>[s(m,null,null)]})]})]})]})]})]})]})])});export{x as default};