(function(){var e={9035:function(e,t,o){"use strict";var i=o(9242),n=o(3396);function r(e,t){const o=(0,n.up)("router-link"),i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",null,[(0,n.Wm)(o,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Uk)(" | "),(0,n.Wm)(o,{to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1})]),(0,n.Wm)(i)],64)}var l=o(89);const a={},s=(0,l.Z)(a,[["render",r]]);var u=s,d=o(5431);(0,d.z)("/syncld/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("This app has been updated, please close the app & re-open")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var c=o(2483),p=o(7139);const h={id:"app"},m=(0,n._)("h1",null,[(0,n.Uk)("Todo Vue "),(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",viewBox:"0 0 24 24"},[(0,n._)("path",{d:"M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z"})])],-1),w={key:0},f={key:1},g={class:"scroll"},b={id:"my-accordion",class:"accordion",role:"tablist"},v={key:0},k={key:0},y={key:0},_={key:1},W={key:2},C=(0,n._)("hr",null,null,-1),P={class:"scroll"},x=["onUpdate:modelValue"],V={key:0},D={key:1};function A(e,t,o,r,l,a){const s=(0,n.up)("b-toast"),u=(0,n.up)("b-form-input"),d=(0,n.up)("b-col"),c=(0,n.up)("RiLockUnlockLine"),A=(0,n.up)("RiLock2Line"),U=(0,n.up)("b-row"),T=(0,n.up)("RiClipboardLine"),L=(0,n.up)("b-button"),M=(0,n.up)("RiGitBranchLine"),j=(0,n.up)("b-button-group"),R=(0,n.up)("RiCloseCircleLine"),S=(0,n.up)("RiDeleteBinLine"),E=(0,n.up)("b-button-toolbar"),O=(0,n.up)("b-form-textarea"),Z=(0,n.up)("RiAddCircleFill"),z=(0,n.up)("b-card-header"),H=(0,n.up)("RiPencilLine"),q=(0,n.up)("RiAttachment2"),B=(0,n.up)("RiAttachmentLine"),F=(0,n.up)("RiLink"),K=(0,n.up)("RiSave3Fill"),N=(0,n.up)("b-list-group-item"),Y=(0,n.up)("b-collapse"),G=(0,n.up)("b-card"),Q=(0,n.up)("b-list-group"),X=(0,n.up)("b-modal"),I=(0,n.up)("b-container");return(0,n.wg)(),(0,n.iD)("main",h,[(0,n.Wm)(s,{ref:"toast",toastClass:l.toastClass,modelValue:l.toast.show,"onUpdate:modelValue":t[0]||(t[0]=e=>l.toast.show=e),title:l.toast.title,body:l.toast.body,variant:l.toast.variant},null,8,["toastClass","modelValue","title","body","variant"]),m,(0,n.Wm)(I,null,{default:(0,n.w5)((()=>[(0,n.Wm)(U,{class:"my-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{sm:"10"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"new-todo",autofocus:"",autocomplete:"off",placeholder:"What needs to be done?",modelValue:l.newTodo,"onUpdate:modelValue":t[1]||(t[1]=e=>l.newTodo=e),onKeyup:(0,i.D2)(a.addTodo,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,n.Wm)(d,{sm:"2",onClick:t[2]||(t[2]=e=>l.privacy=!l.privacy)},{default:(0,n.w5)((()=>[l.privacy?((0,n.wg)(),(0,n.iD)("div",w,[(0,n.Wm)(c,{width:"20",height:"20",fill:"rgba(250,200,0,1)"}),(0,n.Uk)(" public ")])):((0,n.wg)(),(0,n.iD)("div",f,[(0,n.Wm)(A,{width:"20",height:"20",fill:"rgba(0,250,0,1)"}),(0,n.Uk)(" private ")]))])),_:1})])),_:1}),(0,n.Wm)(U,{class:"mt-5"},{default:(0,n.w5)((()=>[null!=l.current?((0,n.wg)(),(0,n.j4)(d,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(E,{"key-nav":"","aria-label":"Toolbar with button groups"},{default:(0,n.w5)((()=>[(0,n.Wm)(j,{class:"mx-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(L,{onClick:t[3]||(t[3]=e=>a.copy(l.current)),variant:"outiline"},{default:(0,n.w5)((()=>[(0,n.Wm)(T,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1}),(0,n.Wm)(L,{onClick:t[4]||(t[4]=e=>a.fork(l.current)),variant:"outiline"},{default:(0,n.w5)((()=>[(0,n.Wm)(M,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1})])),_:1}),(0,n.Wm)(j,{class:"mx-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(L,{onClick:t[5]||(t[5]=e=>l.current=null),variant:"outline"},{default:(0,n.w5)((()=>[(0,n.Wm)(R,{width:"20",height:"20"})])),_:1})])),_:1}),(0,n.Wm)(j,{class:"mx-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(L,{size:"sm",variant:"outline-danger",onClick:t[6]||(t[6]=(0,i.iM)((e=>a.removeTodo(l.current)),["stop"]))},{default:(0,n.w5)((()=>[(0,n.Wm)(S,{width:"10",height:"10",fill:"rgba(250,0,0,1)"})])),_:1})])),_:1})])),_:1}),(0,n.Uk)(" name: "),(0,n.Wm)(u,{autofocus:"",autocomplete:"off",placeholder:"name",modelValue:l.current.name,"onUpdate:modelValue":t[7]||(t[7]=e=>l.current.name=e)},null,8,["modelValue"]),(0,n.Uk)(" description : "),(0,n.Wm)(O,{modelValue:l.current.description,"onUpdate:modelValue":t[8]||(t[8]=e=>l.current.description=e),placeholder:"description...",rows:"3","max-rows":"6"},null,8,["modelValue"]),(0,n.Uk)(" proposition: "),(0,n.Wm)(O,{modelValue:l.current.proposition,"onUpdate:modelValue":t[9]||(t[9]=e=>l.current.proposition=e),placeholder:"proposition...",rows:"3","max-rows":"6"},null,8,["modelValue"]),1!=l.addPropShow?((0,n.wg)(),(0,n.j4)(L,{key:0,onClick:t[10]||(t[10]=e=>l.addPropShow=!0),variant:"outline"},{default:(0,n.w5)((()=>[(0,n.Wm)(Z,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1})):(0,n.kq)("",!0),1==l.addPropShow?((0,n.wg)(),(0,n.j4)(u,{key:1,autofocus:"",autocomplete:"off",placeholder:"add a prop...",modelValue:l.newProp,"onUpdate:modelValue":t[11]||(t[11]=e=>l.newProp=e),onKeyup:(0,i.D2)(a.addProp,["enter"])},null,8,["modelValue","onKeyup"])):(0,n.kq)("",!0),(0,n._)("div",g,[(0,n.Wm)(G,null,{default:(0,n.w5)((()=>[(0,n._)("div",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.currentPropertiesSorted,(e=>((0,n.wg)(),(0,n.j4)(G,{"no-body":"",class:"mb-1",key:e[0]},{default:(0,n.w5)((()=>[(0,n.Wm)(z,{"header-tag":"header",class:"p-1 d-grid gap-2",role:"tab"},{default:(0,n.w5)((()=>[(0,n.Wm)(L,{onClick:t=>l.currentProp==e[0]?l.currentProp=null:l.currentProp=e[0],variant:"info"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,p.zw)(e[0])+" , "+(0,p.zw)(a.since(l.current.properties[e[0]].lastEdit))+" / ("+(0,p.zw)(l.current.properties[e[0]].values.length)+") values / ",1)])),_:2},1032,["onClick"])])),_:2},1024),(0,n.Wm)(Y,{visible:l.currentProp==e[0],accordion:"my-accordion",role:"tabpanel"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(L,{onClick:a.edit,variant:"outline",title:"edit"},{default:(0,n.w5)((()=>[(0,n.Wm)(H,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1},8,["onClick"]),l.clipboard.length>0?((0,n.wg)(),(0,n.iD)("span",v,[(0,n.Wm)(L,{onClick:t[12]||(t[12]=e=>a.paste(null)),variant:"outline",title:"paste"},{default:(0,n.w5)((()=>[(0,n.Wm)(q,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1}),(0,n.Wm)(L,{onClick:t[13]||(t[13]=e=>l.openPaste=!0),variant:"outline",title:"paste"},{default:(0,n.w5)((()=>[(0,n.Wm)(B,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1})])):(0,n.kq)("",!0),(0,n.Wm)(L,{onClick:a.link,variant:"outline",title:"link"},{default:(0,n.w5)((()=>[(0,n.Wm)(F,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1},8,["onClick"])]),l.textAreaShow?((0,n.wg)(),(0,n.iD)("div",k,[(0,n.Wm)(O,{modelValue:l.textAreaValue,"onUpdate:modelValue":t[14]||(t[14]=e=>l.textAreaValue=e),placeholder:"Enter a text value...",rows:"3","max-rows":"6"},null,8,["modelValue"]),(0,n.Wm)(L,{onClick:a.saveTextArea,variant:"outline",title:"link"},{default:(0,n.w5)((()=>[(0,n.Wm)(K,{width:"32",height:"32",fill:"rgba(0,250,0,1)"})])),_:1},8,["onClick"])])):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Array.from(l.current.properties[e[0]].values).sort(((e,t)=>t.lastEdit-e.lastEdit)),(e=>((0,n.wg)(),(0,n.j4)(N,{key:e.id},{default:(0,n.w5)((()=>[void 0!=e.id?((0,n.wg)(),(0,n.iD)("div",y,[(0,n.Wm)(L,{onClick:(0,i.iM)((t=>a.switchTo(e.id)),["stop"]),variant:"outline-success",title:"switch to"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,p.zw)(e.name),1)])),_:2},1032,["onClick"])])):"http://www.w3.org/2001/XMLSchema#string"==e.type?((0,n.wg)(),(0,n.iD)("div",_,(0,p.zw)(e.value),1)):((0,n.wg)(),(0,n.iD)("div",W,(0,p.zw)(e),1)),(0,n.Uk)(" "+(0,p.zw)(a.since(e.lastEdit))+" ",1),C])),_:2},1024)))),128))])),_:2},1032,["visible"])])),_:2},1024)))),128))])])),_:1})]),(0,n.Wm)(X,{modelValue:l.openPaste,"onUpdate:modelValue":t[15]||(t[15]=e=>l.openPaste=e),title:"clipboard"},{default:(0,n.w5)((()=>[(0,n.Wm)(L,{disabled:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Paste all")])),_:1}),(0,n.Uk)(),(0,n.Wm)(L,{disabled:""},{default:(0,n.w5)((()=>[(0,n.Uk)("clear")])),_:1}),(0,n.Wm)(Q,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.clipboard,(e=>((0,n.wg)(),(0,n.j4)(N,{button:"",key:e.id,onClick:t=>a.paste(e)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,p.zw)(e.name)+", "+(0,p.zw)(e.id),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(d,{md:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(Q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(L,{pressed:"streched"==l.listMode,variant:"success",size:"sm",onClick:t[16]||(t[16]=e=>"stretched"==l.listMode?l.listMode="expanded":l.listMode="stretched")},{default:(0,n.w5)((()=>[(0,n.Uk)((0,p.zw)(l.listMode),1)])),_:1},8,["pressed"]),(0,n._)("div",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(Array.from(l.store.todos).sort(((e,t)=>t.lastEdit-e.lastEdit)),(e=>((0,n.wg)(),(0,n.j4)(N,{button:"",key:e.id,onClick:t=>a.setCurrent(e)},{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(L,{onClick:(0,i.iM)((t=>a.copy(e)),["stop"]),variant:"outiline",size:"sm"},{default:(0,n.w5)((()=>[(0,n.Wm)(T,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:2},1032,["onClick"])])),_:2},1024),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>["expanded"==l.listMode?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,class:"toggle",type:"checkbox","onUpdate:modelValue":t=>e.completed=t,onClick:t[17]||(t[17]=(0,i.iM)((()=>{}),["stop"]))},null,8,x)),[[i.e8,e.completed]]):(0,n.kq)("",!0),(0,n.Uk)(" "+(0,p.zw)(e.name),1)])),_:2},1024),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n._)("small",null,(0,p.zw)(a.since(e.lastEdit)),1)])),_:2},1024),"expanded"==l.listMode?((0,n.wg)(),(0,n.j4)(d,{key:0},{default:(0,n.w5)((()=>["public"==e.privacy?((0,n.wg)(),(0,n.iD)("div",V,[(0,n.Wm)(c,{onClick:(0,i.iM)((t=>e.privacy="private"),["stop"]),width:"20",height:"20",fill:"rgba(250,200,0,1)"},null,8,["onClick"])])):((0,n.wg)(),(0,n.iD)("div",D,[(0,n.Wm)(A,{onClick:(0,i.iM)((t=>e.privacy="public"),["stop"]),width:"20",height:"20",fill:"rgba(0,250,0,1)"},null,8,["onClick"])]))])),_:2},1024)):(0,n.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])])),_:1})])),_:1})])),_:1})])),_:1})])}o(7658);var U=o(3029),T=o(3122),L=o(5288),M=o(9373),j=o(3089),R=o(2213),S=o(114);const E={brains:[],neurones:[],todos:[]},O=(0,L.wI)(E),Z=(0,L.ms)(O),z=new S.GL(Z),H=new M.x$("noossync",Z,{awareness:z,signaling:["wss://noosld-webrtc.glitch.me"]}),q=(new j.H7("noossync",Z),new R.VU("wss://yjs-leveldb.glitch.me/noosphere","noosld",Z));H.on("status",(e=>{console.log("** webrtcProvider in y_store",e.status)})),q.on("status",(e=>{console.log("## websocketProvider in y_store",e.status)}));const B={"@vocab":"https://scenaristeur.github.io/noosphere#",as:"https://scenaristeur.github.io/noosphere#",no:"https://scenaristeur.github.io/noosphere#",id:"@id",type:"@type",value:"@value",base:"https://scenaristeur.github.io/noosphere#"};var F=o(6866),K=o(2882),N=o(2108),Y=o(1790),G=o(124),Q=o(9255),X=o(2189),I=o(5696),J=o(5496),$=o(7163),ee=o(6800),te=o(8301),oe=o(8881),ie=o(2026);(0,L.QB)(F);var ne={name:"HomeView",directives:{"b-toggle":ie.Be},components:{RiLockUnlockLine:K.Z,RiLock2Line:N.Z,RiClipboardLine:Y.Z,RiDeleteBinLine:G.Z,RiCloseCircleLine:Q.Z,RiAttachmentLine:X.Z,RiAttachment2:I.Z,RiPencilLine:J.Z,RiAddCircleFill:$.Z,RiLink:ee.Z,RiGitBranchLine:te.Z,RiSave3Fill:oe.Z},data(){return{store:O,newTodo:"",privacy:!0,current:null,toast:{},listMode:"stretched",newProp:"",toastClass:["toast"],addPropShow:!1,currentProp:null,clipboard:[],openPaste:!1,textAreaShow:!1,textAreaValue:""}},mounted(){(0,L.QT)(this.store.todos,this.y_storeChanged)},methods:{addTodo(){const e=this.newTodo&&this.newTodo.trim();if(!e)return;let t={"@context":B,id:(0,U.Z)(),type:"todo",name:e,completed:!1,privacy:this.privacy?"public":"private",created:Date.now(),lastEdit:Date.now()};console.log(t),this.store.todos.push(t),this.expand(t),this.newTodo="",this.toasting({title:"created",body:t.name})},addProp(){0!=this.newProp.trim().length&&(console.log(this.newProp),void 0==this.current.properties&&(this.current.properties={}),this.currentProp=this.newProp,void 0==this.current.properties[this.currentProp]&&(this.current.properties[this.currentProp]={lastEdit:Date.now(),values:[]}),this.newProp="",this.addPropShow=!1,this.textAreaShow=!1)},setCurrent(e){this.textAreaShow=!1,this.textAreaValue="",e.lastEdit=Date.now(),this.current=e,this.toasting({title:"current",body:e.name})},switchTo(e){console.log(e);let t=this.store.todos.find((t=>t.id==e));console.log(t.name),this.setCurrent(t)},copy(e){navigator.clipboard?navigator.clipboard.writeText(e.id):window.clipboardData&&window.clipboardData.setData&&window.clipboardData.setData("Text",e.id),this.clipboard.unshift({id:e.id,name:e.name}),console.log("copy",e.name),this.toasting({title:"copied",body:e.name,variant:"info"})},async paste(e){console.log(e),console.log(this.clipboard),null==e&&(e=this.clipboard[0]),console.log("paste",e.id,e.name);let t={id:e.id,name:e.name,comment:"not sure for the name id must be sufficient",lastEdit:Date.now()};null!=this.currentProp&&this.current.properties[this.currentProp].values.push(t)},edit(){console.log("edit"),this.textAreaShow=!0,this.textAreaValue=""},saveTextArea(){console.log(this.textAreaValue);let e=this.textAreaValue.trim();if(null!=this.currentProp&&e.length>0){let t={value:e,type:"http://www.w3.org/2001/XMLSchema#string",lastEdit:Date.now()};this.current.properties[this.currentProp].values.push(t),this.current.properties[this.currentProp].lastEdit=Date.now()}this.newProp="",this.textAreaShow=!1},link(){console.log("link should open multi source, google / duckduck / dbpedia / solid /AV....")},toasting(e){this.toast.variant=e.variant||"info",this.toast.title=e.title,this.toast.body=e.body,this.toast.show=!0},clickValue(e){console.log(e)},fork(e){console.log("forking",e),this.toasting({title:"forked",body:e.name})},async expand(e){const t=await T.expand(e);console.log(t);const o=await T.compact(t,B);console.log(JSON.stringify(o,null,2))},y_storeChanged(e){console.log("changes",e)},removeTodo(e){this.store.todos.splice(this.store.todos.indexOf(e),1),this.current=null},since(e){return this.secondsToHms((new Date-new Date(e))/1e3)},secondsToHms(e){e=Number(e);var t=Math.floor(e/31557600),o=Math.floor(e/2592e3),i=Math.floor(e/86400),n=Math.floor(e/3600),r=Math.floor(e%3600/60),l=Math.floor(e%3600%60),a="";return a=t>0?t+"a":o>0?o+"m":i>0?i+"j":n>0?n+"h":r>0?r+"min":l+"s",a}},computed:{currentPropertiesSorted:function(){return void 0==this.current.properties?[]:Object.entries(this.current.properties).sort(((e,t)=>t[1].lastEdit-e[1].lastEdit))}}};const re=(0,l.Z)(ne,[["render",A]]);var le=re;const ae=[{path:"/",name:"home",component:le},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,833))}],se=(0,c.p7)({history:(0,c.PO)("/syncld/"),routes:ae});var ue=se,de=o(65);const ce=()=>({}),pe={},he={};var me={namespaced:!0,state:ce,actions:he,mutations:pe},we=(0,de.MT)({state:{},getters:{},mutations:{},actions:{},modules:{core:me}});(0,i.ri)(u).use(we).use(ue).use(ie.ZP).mount("#app")},7670:function(){}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,i,n,r){if(!i){var l=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],r=e[d][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](i[s])}))?i.splice(s--,1):(a=!1,r<l&&(l=r));if(a){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,i){return o.f[i](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.3faabdc9.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="syncld:";o.l=function(i,n,r,l){if(e[i])e[i].push(n);else{var a,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==t+r){a=c;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+r),a.src=i),e[i]=[n];var p=function(t,o){a.onerror=a.onload=null,clearTimeout(h);var n=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/syncld/"}(),function(){var e={143:0};o.f.j=function(t,i){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise((function(o,i){n=e[t]=[o,i]}));i.push(n[2]=r);var l=o.p+o.u(t),a=new Error,s=function(i){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",a.name="ChunkLoadError",a.type=r,a.request=l,n[1](a)}};o.l(l,s,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,r,l=i[0],a=i[1],s=i[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(s)var d=s(o)}for(t&&t(i);u<l.length;u++)r=l[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},i=self["webpackChunksyncld"]=self["webpackChunksyncld"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(9035)}));i=o.O(i)})();
//# sourceMappingURL=app.c56488ac.js.map