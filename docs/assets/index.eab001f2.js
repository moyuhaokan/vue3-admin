var o;import{N as e,c as r,a,b as t,d as n,e as c,f as l,r as i,C as m,l as b,u as d,g as s}from"./vendor.15fb5b17.js";var p={openKeys:["/error"]},g="THEME_tXS5b3c3",u="TOKEN_Mb3xHEGi",k={"@theme":"dark","@blue-1":"mix(color(~`colorPalette('@{blue-base}', 8) `), @component-background, 15%)","@blue-2":"mix(color(~`colorPalette('@{blue-base}', 7) `), @component-background, 25%)","@blue-3":"mix(@blue-base, @component-background, 30%)","@blue-4":"mix(@blue-base, @component-background, 45%)","@blue-5":"mix(@blue-base, @component-background, 65%)","@blue-6":"mix(@blue-base, @component-background, 85%)","@blue-7":"mix(color(~`colorPalette('@{blue-base}', 5) `), @component-background, 90%)","@blue-8":"mix(color(~`colorPalette('@{blue-base}', 4) `), @component-background, 95%)","@blue-9":"mix(color(~`colorPalette('@{blue-base}', 3) `), @component-background, 97%)","@blue-10":"mix(color(~`colorPalette('@{blue-base}', 2) `), @component-background, 98%)","@purple-1":"mix(color(~`colorPalette('@{purple-base}', 8) `), @component-background, 15%)","@purple-2":"mix(color(~`colorPalette('@{purple-base}', 7) `), @component-background, 25%)","@purple-3":"mix(@purple-base, @component-background, 30%)","@purple-4":"mix(@purple-base, @component-background, 45%)","@purple-5":"mix(@purple-base, @component-background, 65%)","@purple-6":"mix(@purple-base, @component-background, 85%)","@purple-7":"mix(color(~`colorPalette('@{purple-base}', 5) `), @component-background, 90%)","@purple-8":"mix(color(~`colorPalette('@{purple-base}', 4) `), @component-background, 95%)","@purple-9":"mix(color(~`colorPalette('@{purple-base}', 3) `), @component-background, 97%)","@purple-10":"mix(color(~`colorPalette('@{purple-base}', 2) `), @component-background, 98%)","@cyan-1":"mix(color(~`colorPalette('@{cyan-base}', 8) `), @component-background, 15%)","@cyan-2":"mix(color(~`colorPalette('@{cyan-base}', 7) `), @component-background, 25%)","@cyan-3":"mix(@cyan-base, @component-background, 30%)","@cyan-4":"mix(@cyan-base, @component-background, 45%)","@cyan-5":"mix(@cyan-base, @component-background, 65%)","@cyan-6":"mix(@cyan-base, @component-background, 85%)","@cyan-7":"mix(color(~`colorPalette('@{cyan-base}', 5) `), @component-background, 90%)","@cyan-8":"mix(color(~`colorPalette('@{cyan-base}', 4) `), @component-background, 95%)","@cyan-9":"mix(color(~`colorPalette('@{cyan-base}', 3) `), @component-background, 97%)","@cyan-10":"mix(color(~`colorPalette('@{cyan-base}', 2) `), @component-background, 98%)","@green-1":"mix(color(~`colorPalette('@{green-base}', 8) `), @component-background, 15%)","@green-2":"mix(color(~`colorPalette('@{green-base}', 7) `), @component-background, 25%)","@green-3":"mix(@green-base, @component-background, 30%)","@green-4":"mix(@green-base, @component-background, 45%)","@green-5":"mix(@green-base, @component-background, 65%)","@green-6":"mix(@green-base, @component-background, 85%)","@green-7":"mix(color(~`colorPalette('@{green-base}', 5) `), @component-background, 90%)","@green-8":"mix(color(~`colorPalette('@{green-base}', 4) `), @component-background, 95%)","@green-9":"mix(color(~`colorPalette('@{green-base}', 3) `), @component-background, 97%)","@green-10":"mix(color(~`colorPalette('@{green-base}', 2) `), @component-background, 98%)","@magenta-1":"mix(color(~`colorPalette('@{magenta-base}', 8) `), @component-background, 15%)","@magenta-2":"mix(color(~`colorPalette('@{magenta-base}', 7) `), @component-background, 25%)","@magenta-3":"mix(@magenta-base, @component-background, 30%)","@magenta-4":"mix(@magenta-base, @component-background, 45%)","@magenta-5":"mix(@magenta-base, @component-background, 65%)","@magenta-6":"mix(@magenta-base, @component-background, 85%)","@magenta-7":"mix(color(~`colorPalette('@{magenta-base}', 5) `), @component-background, 90%)","@magenta-8":"mix(color(~`colorPalette('@{magenta-base}', 4) `), @component-background, 95%)","@magenta-9":"mix(color(~`colorPalette('@{magenta-base}', 3) `), @component-background, 97%)","@magenta-10":"mix(color(~`colorPalette('@{magenta-base}', 2) `), @component-background, 98%)","@pink-1":"mix(color(~`colorPalette('@{pink-base}', 8) `), @component-background, 15%)","@pink-2":"mix(color(~`colorPalette('@{pink-base}', 7) `), @component-background, 25%)","@pink-3":"mix(@pink-base, @component-background, 30%)","@pink-4":"mix(@pink-base, @component-background, 45%)","@pink-5":"mix(@pink-base, @component-background, 65%)","@pink-6":"mix(@pink-base, @component-background, 85%)","@pink-7":"mix(color(~`colorPalette('@{pink-base}', 5) `), @component-background, 90%)","@pink-8":"mix(color(~`colorPalette('@{pink-base}', 4) `), @component-background, 95%)","@pink-9":"mix(color(~`colorPalette('@{pink-base}', 3) `), @component-background, 97%)","@pink-10":"mix(color(~`colorPalette('@{pink-base}', 2) `), @component-background, 98%)","@red-1":"mix(color(~`colorPalette('@{red-base}', 8) `), @component-background, 15%)","@red-2":"mix(color(~`colorPalette('@{red-base}', 7) `), @component-background, 25%)","@red-3":"mix(@red-base, @component-background, 30%)","@red-4":"mix(@red-base, @component-background, 45%)","@red-5":"mix(@red-base, @component-background, 65%)","@red-6":"mix(@red-base, @component-background, 85%)","@red-7":"mix(color(~`colorPalette('@{red-base}', 5) `), @component-background, 90%)","@red-8":"mix(color(~`colorPalette('@{red-base}', 4) `), @component-background, 95%)","@red-9":"mix(color(~`colorPalette('@{red-base}', 3) `), @component-background, 97%)","@red-10":"mix(color(~`colorPalette('@{red-base}', 2) `), @component-background, 98%)","@orange-1":"mix(color(~`colorPalette('@{orange-base}', 8) `), @component-background, 15%)","@orange-2":"mix(color(~`colorPalette('@{orange-base}', 7) `), @component-background, 25%)","@orange-3":"mix(@orange-base, @component-background, 30%)","@orange-4":"mix(@orange-base, @component-background, 45%)","@orange-5":"mix(@orange-base, @component-background, 65%)","@orange-6":"mix(@orange-base, @component-background, 85%)","@orange-7":"mix(color(~`colorPalette('@{orange-base}', 5) `), @component-background, 90%)","@orange-8":"mix(color(~`colorPalette('@{orange-base}', 4) `), @component-background, 95%)","@orange-9":"mix(color(~`colorPalette('@{orange-base}', 3) `), @component-background, 97%)","@orange-10":"mix(color(~`colorPalette('@{orange-base}', 2) `), @component-background, 98%)","@yellow-1":"mix(color(~`colorPalette('@{yellow-base}', 8) `), @component-background, 15%)","@yellow-2":"mix(color(~`colorPalette('@{yellow-base}', 7) `), @component-background, 25%)","@yellow-3":"mix(@yellow-base, @component-background, 30%)","@yellow-4":"mix(@yellow-base, @component-background, 45%)","@yellow-5":"mix(@yellow-base, @component-background, 65%)","@yellow-6":"mix(@yellow-base, @component-background, 85%)","@yellow-7":"mix(color(~`colorPalette('@{yellow-base}', 5) `), @component-background, 90%)","@yellow-8":"mix(color(~`colorPalette('@{yellow-base}', 4) `), @component-background, 95%)","@yellow-9":"mix(color(~`colorPalette('@{yellow-base}', 3) `), @component-background, 97%)","@yellow-10":"mix(color(~`colorPalette('@{yellow-base}', 2) `), @component-background, 98%)","@volcano-1":"mix(color(~`colorPalette('@{volcano-base}', 8) `), @component-background, 15%)","@volcano-2":"mix(color(~`colorPalette('@{volcano-base}', 7) `), @component-background, 25%)","@volcano-3":"mix(@volcano-base, @component-background, 30%)","@volcano-4":"mix(@volcano-base, @component-background, 45%)","@volcano-5":"mix(@volcano-base, @component-background, 65%)","@volcano-6":"mix(@volcano-base, @component-background, 85%)","@volcano-7":"mix(color(~`colorPalette('@{volcano-base}', 5) `), @component-background, 90%)","@volcano-8":"mix(color(~`colorPalette('@{volcano-base}', 4) `), @component-background, 95%)","@volcano-9":"mix(color(~`colorPalette('@{volcano-base}', 3) `), @component-background, 97%)","@volcano-10":"mix(color(~`colorPalette('@{volcano-base}', 2) `), @component-background, 98%)","@geekblue-1":"mix(color(~`colorPalette('@{geekblue-base}', 8) `), @component-background, 15%)","@geekblue-2":"mix(color(~`colorPalette('@{geekblue-base}', 7) `), @component-background, 25%)","@geekblue-3":"mix(@geekblue-base, @component-background, 30%)","@geekblue-4":"mix(@geekblue-base, @component-background, 45%)","@geekblue-5":"mix(@geekblue-base, @component-background, 65%)","@geekblue-6":"mix(@geekblue-base, @component-background, 85%)","@geekblue-7":"mix(color(~`colorPalette('@{geekblue-base}', 5) `), @component-background, 90%)","@geekblue-8":"mix(color(~`colorPalette('@{geekblue-base}', 4) `), @component-background, 95%)","@geekblue-9":"mix(color(~`colorPalette('@{geekblue-base}', 3) `), @component-background, 97%)","@geekblue-10":"mix(color(~`colorPalette('@{geekblue-base}', 2) `), @component-background, 98%)","@lime-1":"mix(color(~`colorPalette('@{lime-base}', 8) `), @component-background, 15%)","@lime-2":"mix(color(~`colorPalette('@{lime-base}', 7) `), @component-background, 25%)","@lime-3":"mix(@lime-base, @component-background, 30%)","@lime-4":"mix(@lime-base, @component-background, 45%)","@lime-5":"mix(@lime-base, @component-background, 65%)","@lime-6":"mix(@lime-base, @component-background, 85%)","@lime-7":"mix(color(~`colorPalette('@{lime-base}', 5) `), @component-background, 90%)","@lime-8":"mix(color(~`colorPalette('@{lime-base}', 4) `), @component-background, 95%)","@lime-9":"mix(color(~`colorPalette('@{lime-base}', 3) `), @component-background, 97%)","@lime-10":"mix(color(~`colorPalette('@{lime-base}', 2) `), @component-background, 98%)","@gold-1":"mix(color(~`colorPalette('@{gold-base}', 8) `), @component-background, 15%)","@gold-2":"mix(color(~`colorPalette('@{gold-base}', 7) `), @component-background, 25%)","@gold-3":"mix(@gold-base, @component-background, 30%)","@gold-4":"mix(@gold-base, @component-background, 45%)","@gold-5":"mix(@gold-base, @component-background, 65%)","@gold-6":"mix(@gold-base, @component-background, 85%)","@gold-7":"mix(color(~`colorPalette('@{gold-base}', 5) `), @component-background, 90%)","@gold-8":"mix(color(~`colorPalette('@{gold-base}', 4) `), @component-background, 95%)","@gold-9":"mix(color(~`colorPalette('@{gold-base}', 3) `), @component-background, 97%)","@gold-10":"mix(color(~`colorPalette('@{gold-base}', 2) `), @component-background, 98%)","@primary-1":"mix(color(~`colorPalette('@{primary-color}', 8) `), @component-background, 15%)","@primary-2":"mix(color(~`colorPalette('@{primary-color}', 7) `), @component-background, 25%)","@primary-3":"mix(@primary-color, @component-background, 30%)","@primary-4":"mix(@primary-color, @component-background, 45%)","@primary-5":"mix(@primary-color, @component-background, 65%)","@primary-6":"@primary-color","@primary-7":"mix(color(~`colorPalette('@{primary-color}', 5) `), @component-background, 90%)","@primary-8":"mix(color(~`colorPalette('@{primary-color}', 4) `), @component-background, 95%)","@primary-9":"mix(color(~`colorPalette('@{primary-color}', 3) `), @component-background, 97%)","@primary-10":"mix(color(~`colorPalette('@{primary-color}', 2) `), @component-background, 98%)","@popover-background":"#1f1f1f","@popover-customize-border-color":"#3a3a3a","@body-background":"@black","@component-background":"#141414","@text-color":"fade(@white, 85%)","@text-color-secondary":"fade(@white, 45%)","@text-color-inverse":"@white","@icon-color-hover":"fade(@white, 75%)","@heading-color":"fade(@white, 85%)","@item-active-bg":"@primary-1","@item-hover-bg":"fade(@white, 8%)","@border-color-base":"#434343","@border-color-split":"#303030","@background-color-light":"fade(@white, 4%)","@background-color-base":"fade(@white, 8%)","@disabled-color":"fade(@white, 30%)","@disabled-bg":"@background-color-base","@disabled-color-dark":"fade(@white, 30%)","@tree-bg":"transparent","@list-customize-card-bg":"transparent","@shadow-color":"rgba(0, 0, 0, 0.45)","@shadow-color-inverse":"@component-background","@box-shadow-base":"@shadow-2","@shadow-1-up":"0 -6px 16px -8px rgba(0, 0, 0, 0.32), 0 -9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 -12px 48px 16px rgba(0, 0, 0, 0.12)","@shadow-1-down":"0 6px 16px -8px rgba(0, 0, 0, 0.32), 0 9px 28px 0 rgba(0, 0, 0, 0.2),\n  0 12px 48px 16px rgba(0, 0, 0, 0.12)","@shadow-1-right":"6px 0 16px -8px rgba(0, 0, 0, 0.32), 9px 0 28px 0 rgba(0, 0, 0, 0.2),\n  12px 0 48px 16px rgba(0, 0, 0, 0.12)","@shadow-2":"0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32),\n  0 9px 28px 8px rgba(0, 0, 0, 0.2)","@btn-shadow":"0 2px 0 rgba(0, 0, 0, 0.015)","@btn-primary-shadow":"0 2px 0 rgba(0, 0, 0, 0.045)","@btn-text-shadow":"0 -1px 0 rgba(0, 0, 0, 0.12)","@btn-default-bg":"transparent","@btn-default-ghost-color":"@text-color","@btn-default-ghost-border":"fade(@white, 25%)","@btn-text-hover-bg":"rgba(255, 255, 255, 0.03)","@checkbox-check-bg":"transparent","@descriptions-bg":"@background-color-light","@divider-color":"rgba(255, 255, 255, 12%)","@modal-header-bg":"@popover-background","@modal-header-border-color-split":"@border-color-split","@modal-content-bg":"@popover-background","@modal-footer-border-color-split":"@border-color-split","@radio-solid-checked-color":"@white","@radio-dot-disabled-color":"fade(@white, 20%)","@radio-disabled-button-checked-bg":"fade(@white, 20%)","@radio-disabled-button-checked-color":"@disabled-color","@layout-body-background":"@body-background","@layout-header-background":"@popover-background","@layout-trigger-background":"#262626","@input-bg":"transparent","@input-placeholder-color":"fade(@white, 30%)","@input-icon-color":"fade(@white, 30%)","@input-number-handler-active-bg":"@item-hover-bg","@input-icon-hover-color":"fade(@white, 85%)","@select-background":"transparent","@select-dropdown-bg":"@popover-background","@select-clear-background":"@component-background","@select-selection-item-bg":"fade(@white, 8)","@select-selection-item-border-color":"@border-color-split","@select-multiple-disabled-background":"@component-background","@select-multiple-item-disabled-color":"#595959","@select-multiple-item-disabled-border-color":"@popover-background","@cascader-bg":"transparent","@cascader-menu-bg":"@popover-background","@cascader-menu-border-color-split":"@border-color-split","@tooltip-bg":"#434343","@menu-dark-submenu-bg":"@component-background","@menu-dark-bg":"@popover-background","@menu-popup-bg":"@popover-background","@message-notice-content-bg":"@popover-background","@notification-bg":"@popover-background","@link-hover-color":"@primary-5","@link-active-color":"@primary-7","@table-header-bg":"#1d1d1d","@table-body-sort-bg":"fade(@white, 1%)","@table-row-hover-bg":"#262626","@table-header-sort-bg":"#262626","@table-header-filter-active-bg":"#434343","@table-header-sort-active-bg":"#303030","@table-filter-btns-bg":"@popover-background","@table-expanded-row-bg":"@table-header-bg","@table-filter-dropdown-bg":"@popover-background","@table-expand-icon-bg":"transparent","@picker-basic-cell-hover-with-range-color":"darken(@primary-color, 35%)","@picker-basic-cell-disabled-bg":"#303030","@picker-border-color":"@border-color-split","@picker-bg":"transparent","@picker-date-hover-range-border-color":"darken(@primary-color, 20%)","@dropdown-menu-bg":"@popover-background","@dropdown-menu-submenu-disabled-bg":"transparent","@steps-nav-arrow-color":"fade(@white, 20%)","@steps-background":"transparent","@avatar-bg":"fade(@white, 30%)","@progress-steps-item-bg":"fade(@white, 8%)","@calendar-bg":"@popover-background","@calendar-input-bg":"@calendar-bg","@calendar-border-color":"transparent","@calendar-full-bg":"@component-background","@badge-text-color":"@white","@popover-bg":"@popover-background","@drawer-bg":"@popover-background","@card-actions-background":"@component-background","@card-skeleton-bg":"#303030","@card-shadow":"0 1px 2px -2px rgba(0, 0, 0, 0.64), 0 3px 6px 0 rgba(0, 0, 0, 0.48),\n  0 5px 12px 4px rgba(0, 0, 0, 0.36)","@transfer-item-hover-bg":"#262626","@comment-bg":"transparent","@comment-author-time-color":"fade(@white, 30%)","@comment-action-hover-color":"fade(@white, 65%)","@rate-star-bg":"fade(@white, 12%)","@switch-bg":"@white","@pagination-item-bg":"transparent","@pagination-item-bg-active":"transparent","@pagination-item-link-bg":"transparent","@pagination-item-disabled-bg-active":"fade(@white, 25%)","@pagination-item-disabled-color-active":"@black","@pagination-item-input-bg":"@pagination-item-bg","@page-header-back-color":"@icon-color","@page-header-ghost-bg":"transparent","@slider-rail-background-color":"#262626","@slider-rail-background-color-hover":"@border-color-base","@slider-dot-border-color":"@border-color-split","@slider-dot-border-color-active":"@primary-4","@skeleton-to-color":"fade(@white, 16%)","@alert-success-border-color":"@green-3","@alert-success-bg-color":"@green-1","@alert-success-icon-color":"@success-color","@alert-info-border-color":"@primary-3","@alert-info-bg-color":"@primary-1","@alert-info-icon-color":"@info-color","@alert-warning-border-color":"@gold-3","@alert-warning-bg-color":"@gold-1","@alert-warning-icon-color":"@warning-color","@alert-error-border-color":"@red-3","@alert-error-bg-color":"@red-1","@alert-error-icon-color":"@error-color","@timeline-color":"@border-color-split","@timeline-dot-color":"@primary-color","@mentions-dropdown-bg":"@popover-background"},x={"@primary-color":"@green-6","@select-item-selected-option-color":"@primary-color","@processing-color":"@primary-color","@select-item-selected-bg":"@background-color-base","@secondary-color":"@primary-color","@skeleton-color":"@primary-color","@btn-primary-bg":"@primary-color"};const h=o=>{switch(o){case"dark":window.less.modifyVars(k);break;case"light":window.less.modifyVars(x);break;case"mix":window.less.modifyVars(x)}},y=localStorage.getItem(g),_={aside:"open",selectedKeys:["/"],openKeys:p.openKeys,breadcrumbs:[],theme:("dark"===y?"dark":"light"===y&&"light")||"mix"===y&&"mix"||"dark",cacheList:[]};h(_.theme);const P=o=>{const e=new Set,r=o=>{o.forEach((o=>{o.meta&&o.meta.keepAlive&&o.meta.cname&&e.add(o.meta.cname),o.children&&o.children.length>0&&r(o.children)}))};return r(o),Array.from(e)};var f={namespaced:!0,state:_,mutations:{asideState(o,e){o.aside=e.aside},routeChanged(o,e){const r=e.path.match(/[^/]+/g)||[];r.pop();const a=p.openKeys;0===r.length&&r.push(""),r.reduce(((o,e)=>(a.push(o+"/"+e),o+"/"+e)),""),o.selectedKeys=[e.path],o.openKeys=a,o.breadcrumbs=e.breadcrumbs},themeChanged(o,e){o.theme=e.theme,localStorage.setItem(g,e.theme),h(e.theme)},setCacheList(o,e){o.cacheList=[...o.cacheList,...P(e.routes)]}},actions:{}};let v;const w={},E=function(o,e){if(!e)return o();if(void 0===v){const o=document.createElement("link").relList;v=o&&o.supports&&o.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((o=>{if(o in w)return;w[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");return a.rel=e?"stylesheet":v,e||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),e?new Promise(((o,e)=>{a.addEventListener("load",o),a.addEventListener("error",e)})):void 0}))).then((()=>o()))},L={layout:()=>E((()=>import("./index.1007eb24.js")),["https://imzbf.github.io/vue3-admin/assets/index.1007eb24.js","https://imzbf.github.io/vue3-admin/assets/index.9c6e6620.css","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js","https://imzbf.github.io/vue3-admin/assets/index.fc568beb.js","https://imzbf.github.io/vue3-admin/assets/UserOutlined.7e714f82.js"]),login:()=>E((()=>import("./index.974a8dee.js")),["https://imzbf.github.io/vue3-admin/assets/index.974a8dee.js","https://imzbf.github.io/vue3-admin/assets/index.6a8465d1.css","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js","https://imzbf.github.io/vue3-admin/assets/UserOutlined.7e714f82.js"]),workspace:()=>E((()=>import("./index.718a409c.js")),["https://imzbf.github.io/vue3-admin/assets/index.718a409c.js","https://imzbf.github.io/vue3-admin/assets/index.85d3e8c9.css","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js","https://imzbf.github.io/vue3-admin/assets/index.fc568beb.js","https://imzbf.github.io/vue3-admin/assets/index.6ee57909.js","https://imzbf.github.io/vue3-admin/assets/index.0fe80207.css"]),monitor:()=>E((()=>import("./index.f349bb6a.js")),["https://imzbf.github.io/vue3-admin/assets/index.f349bb6a.js","https://imzbf.github.io/vue3-admin/assets/index.1b162c4c.css","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js","https://imzbf.github.io/vue3-admin/assets/index.6ee57909.js","https://imzbf.github.io/vue3-admin/assets/index.0fe80207.css"]),card_data:()=>E((()=>import("./Card.f6b165cd.js")),["https://imzbf.github.io/vue3-admin/assets/Card.f6b165cd.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js","https://imzbf.github.io/vue3-admin/assets/index.6ee57909.js","https://imzbf.github.io/vue3-admin/assets/index.0fe80207.css"]),base_form:()=>E((()=>import("./index.72c62738.js")),["https://imzbf.github.io/vue3-admin/assets/index.72c62738.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),def_form:()=>E((()=>import("./Def.e90d0f74.js")),["https://imzbf.github.io/vue3-admin/assets/Def.e90d0f74.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),demo_m1:()=>E((()=>import("./index.b880c688.js")),["https://imzbf.github.io/vue3-admin/assets/index.b880c688.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),demo_m2:()=>E((()=>import("./index.41178713.js")),["https://imzbf.github.io/vue3-admin/assets/index.41178713.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),demo_m2_1:()=>E((()=>import("./index.a6a9d578.js")),["https://imzbf.github.io/vue3-admin/assets/index.a6a9d578.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),demo_m2_2:()=>E((()=>import("./index.335070be.js")),["https://imzbf.github.io/vue3-admin/assets/index.335070be.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),user_center:()=>E((()=>import("./index.96709063.js")),["https://imzbf.github.io/vue3-admin/assets/index.96709063.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),user_setting:()=>E((()=>import("./index.51c5a515.js")),["https://imzbf.github.io/vue3-admin/assets/index.51c5a515.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),table_base:()=>E((()=>import("./Basic.ea53e10c.js")),["https://imzbf.github.io/vue3-admin/assets/Basic.ea53e10c.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js","https://imzbf.github.io/vue3-admin/assets/index.module.b3b6ab7c.js","https://imzbf.github.io/vue3-admin/assets/index.module.24b18e25.css"]),table_dynamic:()=>E((()=>import("./Server.653c7e63.js")),["https://imzbf.github.io/vue3-admin/assets/Server.653c7e63.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),table_query:()=>E((()=>import("./Query.f1af2eb9.js")),["https://imzbf.github.io/vue3-admin/assets/Query.f1af2eb9.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js","https://imzbf.github.io/vue3-admin/assets/index.module.b3b6ab7c.js","https://imzbf.github.io/vue3-admin/assets/index.module.24b18e25.css"]),error_403:()=>E((()=>import("./403.44916db0.js")),["https://imzbf.github.io/vue3-admin/assets/403.44916db0.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),error_404:()=>E((()=>import("./404.aaf8479e.js")),["https://imzbf.github.io/vue3-admin/assets/404.aaf8479e.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"]),error_500:()=>E((()=>import("./500.5341631c.js")),["https://imzbf.github.io/vue3-admin/assets/500.5341631c.js","https://imzbf.github.io/vue3-admin/assets/vendor.15fb5b17.js"])},R=()=>localStorage.getItem(u)||"",T=o=>o.map((o=>(o.component&&(o.component=L[o.component]),o.children&&o.children instanceof Array&&(o.children=T(o.children)),o))),I=(o=[])=>{S.getRoutes().map((o=>o.name)).forEach((o=>o&&S.removeRoute(o))),o.concat(D).forEach((o=>{S.addRoute(o)}))};e.configure({minimum:.1});const D=[{path:"/login",name:"Login",meta:{title:"登录"},component:L.login},{path:"/404",name:"Global404",meta:{title:"页面不见啦."},component:L.error_404},{path:"/:pathMatch(.*)*",name:"All",redirect:o=>({path:"/404",query:{from:o.path}})}],S=r({history:a("/vue3-admin"),routes:D});S.beforeEach((async(o,r,a)=>{var t;e.start();if(R())/^\/login.*/.test(o.path)?o.query.from?a(o.query.from):a("/"):(N.commit("setting/routeChanged",{path:o.path,breadcrumbs:o.matched.filter((o=>{var e;return null==(e=o.meta)?void 0:e.title})).map((o=>{var e;return null==(e=o.meta)?void 0:e.title}))}),document.title=`${(null==(t=o.meta)?void 0:t.title)||""} - 管理系统`,a());else if(/^\/login.*/.test(o.path))a();else if(/^\/404/.test(o.path)){const e=o.query.from;a(e?`/login?from=${e}`:"/login")}else a(`/login?from=${o.path}`)})),S.afterEach((()=>{e.done()}));var A={namespaced:!0,state:{menuList:[]},mutations:{resetMenu(o,e){o.menuList=(o=>{const e=[],r=(o,e)=>{o.forEach((o=>{var a,t,n;if(o.menu){const c={title:(null==(a=o.meta)?void 0:a.title)||"",path:`${e.path.replace(/\/$/,"")}/${o.path.replace(/^\//,"")}`,iconName:null==(t=o.meta)?void 0:t.iconName,iconHref:null==(n=o.meta)?void 0:n.iconHref,children:[],outLink:o.outLink};o.children&&o.children.length>0&&r(o.children,c),e.children.push(c)}}))};return r(o,{children:e,path:"",title:""}),e})(D.concat(e.newRoutes))}},actions:{}};const O=t.create({timeout:7600,baseURL:"https://www.fastmock.site/mock/61da36186af9bf6a412666ded8d70842/api/"}),V=o=>{if(o.response){const{data:e}=o.response;if(4e4===(null==e?void 0:e.code)){localStorage.getItem(u)&&N.dispatch("user/logout")}}return Promise.reject(o)};O.interceptors.request.use((o=>(N.getters.token&&(o.headers.TOKEN=N.getters.token),o)),V),O.interceptors.response.use((o=>o.data),V);const j={username:"",avatar:""};var $={namespaced:!0,state:{info:j,token:localStorage.getItem(u)||""},mutations:{setToken(o,e){o.token=e.token},reset(o){o.token="",o.info=j,localStorage.removeItem(u)},setUserInfo(o,e){o.info=e.info}},actions:{login(o,e){return(r=e,O.post("login",r)).then((({data:e})=>(o.commit("setToken",e),e.token))).then((o=>{e.remembered&&localStorage.setItem(u,o)})).then((async()=>{await o.dispatch("getLoginUser")})).then((()=>{const o=S.currentRoute.value.query.from;S.push(o||"/")}));var r},logout:o=>O.post("logout").then((()=>{o.commit("reset")})).then((()=>{o.commit("menu/resetMenu",{newRoutes:[]},{root:!0}),I([])})).then((()=>{S.push(`/login?from=${encodeURIComponent(S.currentRoute.value.fullPath)}`)})),async getLoginUser(o){const{data:e}=await O.get("user");o.commit("setUserInfo",e);const r=T(e.menus);return o.commit("menu/resetMenu",{newRoutes:r},{root:!0}),o.commit("setting/setCacheList",{routes:r},{root:!0}),I(r),e}}};const q={state:{statusList:[],dataSourceList:[],total:0},namespaced:!0,actions:{getRadioStatus:o=>O.get("/table/statusRadio").then((e=>(o.commit("setRadioStatus",e),e.token))),getBaseTableList:(o,e)=>((o,e,r="")=>O.get(`/table/getBaseTableList?pageNo=${o}&pageSize=${e}&name=${r}`))(e.pageNo,e.pageSize,"").then((e=>{o.commit("setBaseDataList",e)}))},mutations:{setRadioStatus(o){o.statusList=[{name:"全部",value:"all"},{name:"进行中",value:"doing"},{name:"等待中",value:"wating"}]},setBaseDataList(o,e){const{records:r,total:a}=e;o.dataSourceList=r,o.total=a}}},C={namespaced:!0,state:{dataSourceList:[],total:0},actions:{getQueryTableList:(o,e)=>((o,e,r="")=>O.get(`/table/getQueryTableList?pageNo=${o}&pageSize=${e}&name=${r}`))(e.pageNo,e.pageSize,"").then((e=>{o.commit("setQueryDataList",e)}))},mutations:{setQueryDataList(o,e){const{records:r,total:a}=e;o.dataSourceList=r,o.total=a}}},K=Symbol(),N=n({getters:{token:o=>o.user.token},mutations:{},actions:{},modules:{setting:f,menu:A,user:$,baseTable:q,queryTable:C}});var U=c({setup(){const o=b,e=d(K);return()=>l(m,{locale:o},{default:()=>[l("div",{class:`theme-wrapper theme-${e.state.setting.theme}`},[l(i("router-view"),null,null)])]})}});R()?(null==(o=N.state.user.info)?void 0:o.username)||N.dispatch("user/getLoginUser").then((()=>{s(U).use(N,K).use(S).mount("#app")})):s(U).use(N,K).use(S).mount("#app");export{K as k};
