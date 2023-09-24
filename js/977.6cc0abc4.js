"use strict";(self["webpackChunktool_source"]=self["webpackChunktool_source"]||[]).push([[977],{2325:function(e,a,m){m.d(a,{X:function(){return t}});const t=e=>{var a=document.createElement("input");a.type="text",a.value=e,document.body.appendChild(a),a.select(),a.setSelectionRange(0,99999),navigator.clipboard.writeText(a.value),document.body.removeChild(a)}},5977:function(e,a,m){m.r(a),m.d(a,{default:function(){return F}});var t=m(3396),n=m(7139);const o={class:"mt-5 flex flex-wrap gap-10"},r=(0,t._)("div",{class:"flex justify-end w-full text-[blue]"},[(0,t._)("a",{href:"https://github.com/tronghao/module-frontend/blob/main/module/utils/index.js",target:"_blank"},"https://github.com/tronghao/module-frontend/blob/main/module/utils/index.js")],-1),c={class:"font-bold text-[1.7rem] flex items-center mb-10"},s=(0,t._)("div",null,[(0,t._)("img",{class:"w-[3rem] h-[3rem] mr-2",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl43TCl7WwNbydwuJxTLGF4ZS75g-4Atk5w&usqp=CAU"})],-1),i={class:"mt-5 flex flex-wrap gap-10"},l={key:0,class:"w-[25rem] min-h-[15rem] wrap-modules rounded-xl"},p=["src"],d=["onClick"];function u(e,a,m,u,g,h){const f=(0,t.up)("el-input"),b=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",o,[r,(0,t.Wm)(f,{modelValue:e.form.search,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.search=a),placeholder:"Search module"},null,8,["modelValue"]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(u.moduleList,((e,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"w-full bg-white p-5 rounded-lg",key:a},[(0,t._)("div",c,[s,(0,t._)("div",null,(0,n.zw)(e.group)+" ("+(0,n.zw)(u.lengthComponent(e.components))+")",1)]),(0,t._)("div",i,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.components,((e,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"max-w-[25rem]",key:a},[e.name?((0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("img",{class:"w-[4rem] h-[4rem] rounded-xl mb-2",src:u.generateImageIcon(a)},null,8,p),(0,t._)("div",null,[(0,t._)("span",{class:"text-center mt-2 font-bold cursor-pointer text-[blue] mr-2 break-words",onClick:a=>u.handleCopyToClipBoard(e.name)},(0,n.zw)(e.name),9,d),(0,t._)("span",null,[(0,t._)("i",null,(0,n.zw)(e.param),1)]),(0,t._)("div",null,(0,n.zw)(e.comment),1)])])):(0,t.kq)("",!0)])))),128))])])))),128))]),(0,t.Wm)(b)],64)}m(7658);var g=m(4870),h=m(7178);const f=[{name:"dataURLtoFile",param:"(dataurl, filename)",comment:"base64 to file"},{name:"imageToBase64",param:"async (file)",comment:"image to base64"},{name:"getExtensionFile",param:"(filename)",comment:""},{name:"getFileNameFromPath",param:"(path)",comment:""},{name:"checkFileExistence",param:"(file)",comment:"Sử dụng khi upload file mà xóa ở dưới máy"},{name:"",param:"",comment:""}],b=[{name:"numberFormatter",param:"(num, digits) - ,[digits]",comment:"Format k | M | G | T | P | E"},{name:"toThousandFilter",param:"(num)",comment:"format 400,000"},{name:"kFormatter",param:"(num)",comment:"format 40k"},{name:"",param:"",comment:""}],w=[{name:"getYears",param:"(from, to, select = false)",comment:""},{name:"getMonths",param:"(from = 1, to = 12, select = false)",comment:""},{name:"getHours",param:"(from = 0, to = 23, select = false)",comment:""},{name:"getMinutes",param:"(step = 5, select = false)",comment:""},{name:"daysInMonth",param:"(dateString, subName = true, select = false)",comment:""},{name:"formatDate",param:"(date)",comment:""},{name:"secondToDay",param:"(second)",comment:""},{name:"parseTime",param:"(time, cFormat)",comment:"parse time to format"},{name:"getTim­eNowJP",param:"()",comment:""},{name:"parseTimeToTzJapan",param:"(date)",comment:""},{name:"roundTimeQuarterHour",param:"(time)",comment:""},{name:"disabledDateElDatePicker",param:"(time)",comment:"Function handle disabled past date for datepicker of element ui"},{name:"resetDateToFirstHourOfTheDay",param:"(date)",comment:""},{name:"getDistanceDateWithNow",param:"(date)",comment:""},{name:"isAfterDate",param:"(dateAfter, dateBefore)",comment:""},{name:"",param:"",comment:""}],v=[{name:"checkOnlyNumber",param:"(string)",comment:""},{name:"checkNumberOneAndTwoByte",param:"(string)",comment:""},{name:"checkCharacterJP",param:"(string)",comment:""},{name:"checkCharacterTwoByte",param:"(string)",comment:""},{name:"checkOnlyFloatNumber",param:"(string)",comment:""},{name:"isString",param:"(string)",comment:""},{name:"isArray",param:"(argument)",comment:""},{name:"validateLowerCase",param:"(string)",comment:""},{name:"validateUpperCase",param:"(string)",comment:""},{name:"validateAlphabets",param:"(string)",comment:""},{name:"isEmailValid",param:"(email)",comment:""},{name:"validateOneByte",param:"(string)",comment:""},{name:"numberOneByte",param:"(string)",comment:""},{name:"validURL",param:"(url)",comment:""},{name:"",param:"",comment:""}],y=[{name:"scrollToTop",param:"(top = 0)",comment:""},{name:"scrollToBottom",param:"()",comment:""},{name:"stripHtml",param:"(html)",comment:"remove html tag"},{name:"convertBase64",param:"(val)",comment:"convert text to base 64"},{name:"downloadTagA",param:"(url, filename)",comment:""},{name:"matchInArray",param:"(string, expressions)",comment:"have expression in string?"},{name:"createUniqueString",param:"()",comment:""},{name:"debounce",param:"(func, wait, immediate)",comment:""},{name:"param2Obj",param:"(url)",comment:""},{name:"functionForSortJavascriptByAttributeAsc",param:"(item1, item2, attribute, sortTypeASC = true)",comment:"function for Array.sort of javascript by attribute asc or desc"},{name:"removeTailwindClass",param:"(content)",comment:"Sử dụng cho editor copy text dính class tailwind"},{name:"copyToClipBoard",param:"(id)",comment:"id là id của input text cần bỏ text vào để copy"},{name:"copyToClipBoardNotInput",param:"(text)",comment:""},{name:"checkMatchingHighlightRed",param:"(source, string)",comment:"Check matching and highlight red in character incorrectly"},{name:"",param:"",comment:""}];var x=m(2325),C={setup(){const e=(0,g.qj)({form:{search:"",textSelect:""},modules:[{group:"File",components:f},{group:"Format",components:b},{group:"Time",components:w},{group:"Validate",components:v},{group:"Other",components:y}]}),a=(0,t.Fl)((()=>{const a=[];return e.modules.forEach((m=>{const t={...m,components:m.components.filter((a=>a.name.toLowerCase().includes(e.form.search.toLowerCase())||a.comment.toLowerCase().includes(e.form.search.toLowerCase())))};t.components.length>0&&a.push(t)})),a})),m=e=>{const a=["https://cdn-icons-png.flaticon.com/512/2002/2002051.png"];return a[e%a.length]},n=async e=>{(0,x.X)(e),(0,h.z8)({message:"Copied to clipboard!",type:"success"})},o=e=>e.filter((e=>""!==e.name)).length;return{...(0,g.BK)(e),moduleList:a,generateImageIcon:m,handleCopyToClipBoard:n,lengthComponent:o}}},T=m(89);const k=(0,T.Z)(C,[["render",u]]);var F=k}}]);
//# sourceMappingURL=977.6cc0abc4.js.map