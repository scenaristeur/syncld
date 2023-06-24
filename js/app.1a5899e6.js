(function(){var e={6022:function(e,t,o){"use strict";var n=o(9242),i=o(3396);function r(e,t){const o=(0,i.up)("router-link"),n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(o,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1}),(0,i.Uk)(" | "),(0,i.Wm)(o,{to:"/about"},{default:(0,i.w5)((()=>[(0,i.Uk)("About")])),_:1})]),(0,i.Wm)(n)],64)}var a=o(89);const l={},s=(0,a.Z)(l,[["render",r]]);var u=s,c=o(5431);(0,c.z)("/syncld/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("This app has been updated, please close the app & re-open")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=o(2483),p=o(7139);const f={id:"app"},m=(0,i._)("h1",null,[(0,i.Uk)("Todo Vue "),(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",viewBox:"0 0 24 24"},[(0,i._)("path",{d:"M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z"})])],-1),h={key:0},w={key:1},g=(0,i._)("br",null,null,-1),b={class:"scroll"},v=["onUpdate:modelValue"],k={key:0},y={key:1};function C(e,t,o,r,a,l){const s=(0,i.up)("b-toast"),u=(0,i.up)("b-form-input"),c=(0,i.up)("b-col"),d=(0,i.up)("RiLockUnlockLine"),C=(0,i.up)("RiLock2Line"),W=(0,i.up)("b-row"),_=(0,i.up)("RiClipboardLine"),T=(0,i.up)("b-button"),x=(0,i.up)("RiGitBranchLine"),L=(0,i.up)("b-button-group"),M=(0,i.up)("RiCloseCircleLine"),U=(0,i.up)("RiDeleteBinLine"),V=(0,i.up)("b-button-toolbar"),D=(0,i.up)("b-form-textarea"),R=(0,i.up)("RiAddCircleFill"),j=(0,i.up)("RiPencilLine"),O=(0,i.up)("RiAttachment2"),Z=(0,i.up)("RiLink"),A=(0,i.up)("b-list-group-item"),E=(0,i.up)("b-list-group"),P=(0,i.up)("b-container");return(0,i.wg)(),(0,i.iD)("main",f,[(0,i.Wm)(s,{ref:"toast",toastClass:"toast",modelValue:a.toast.show,"onUpdate:modelValue":t[0]||(t[0]=e=>a.toast.show=e),title:a.toast.title,body:a.toast.body,variant:a.toast.variant},null,8,["modelValue","title","body","variant"]),m,(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[(0,i.Wm)(W,{class:"my-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{sm:"10"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"new-todo",autofocus:"",autocomplete:"off",placeholder:"What needs to be done?",modelValue:a.newTodo,"onUpdate:modelValue":t[1]||(t[1]=e=>a.newTodo=e),onKeyup:(0,n.D2)(l.addTodo,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(c,{sm:"2",onClick:t[2]||(t[2]=e=>a.privacy=!a.privacy)},{default:(0,i.w5)((()=>[a.privacy?((0,i.wg)(),(0,i.iD)("div",h,[(0,i.Wm)(d,{width:"20",height:"20",fill:"rgba(250,200,0,1)"}),(0,i.Uk)(" public ")])):((0,i.wg)(),(0,i.iD)("div",w,[(0,i.Wm)(C,{width:"20",height:"20",fill:"rgba(0,250,0,1)"}),(0,i.Uk)(" private ")]))])),_:1})])),_:1}),(0,i.Wm)(W,{class:"mt-5"},{default:(0,i.w5)((()=>[null!=a.current?((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(V,{"key-nav":"","aria-label":"Toolbar with button groups"},{default:(0,i.w5)((()=>[(0,i.Wm)(L,{class:"mx-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{onClick:t[3]||(t[3]=e=>l.copy(a.current)),variant:"outiline"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1}),(0,i.Wm)(T,{onClick:t[4]||(t[4]=e=>l.fork(a.current)),variant:"outiline"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1})])),_:1}),(0,i.Wm)(L,{class:"mx-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{onClick:t[5]||(t[5]=e=>a.current=null),variant:"outline"},{default:(0,i.w5)((()=>[(0,i.Wm)(M,{width:"20",height:"20"})])),_:1})])),_:1}),(0,i.Wm)(L,{class:"mx-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{size:"sm",variant:"outline-danger",onClick:t[6]||(t[6]=(0,n.iM)((e=>l.removeTodo(a.current)),["stop"]))},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{width:"10",height:"10",fill:"rgba(250,0,0,1)"})])),_:1})])),_:1})])),_:1}),(0,i.Uk)(" name: "),(0,i.Wm)(u,{autofocus:"",autocomplete:"off",placeholder:"name",modelValue:a.current.name,"onUpdate:modelValue":t[7]||(t[7]=e=>a.current.name=e)},null,8,["modelValue"]),(0,i.Uk)(" description : "),(0,i.Wm)(D,{modelValue:a.current.description,"onUpdate:modelValue":t[8]||(t[8]=e=>a.current.description=e),placeholder:"description...",rows:"3","max-rows":"6"},null,8,["modelValue"]),(0,i.Uk)(" proposition: "),(0,i.Wm)(D,{modelValue:a.current.proposition,"onUpdate:modelValue":t[9]||(t[9]=e=>a.current.proposition=e),placeholder:"proposition...",rows:"3","max-rows":"6"},null,8,["modelValue"]),(0,i.Wm)(T,{onClick:e.paste,variant:"outline"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1},8,["onClick"]),(0,i.Wm)(T,{onClick:e.paste,variant:"outline"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1},8,["onClick"]),(0,i.Wm)(T,{onClick:e.paste,variant:"outline"},{default:(0,i.w5)((()=>[(0,i.Wm)(O,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1},8,["onClick"]),(0,i.Wm)(T,{onClick:e.paste,variant:"outline"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:1},8,["onClick"]),g,(0,i.Uk)(" "+(0,p.zw)(a.current),1)])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(c,{md:"6"},{default:(0,i.w5)((()=>[(0,i.Wm)(E,null,{default:(0,i.w5)((()=>[(0,i.Wm)(T,{pressed:"streched"==a.listMode,variant:"success",size:"sm",onClick:t[10]||(t[10]=e=>"stretched"==a.listMode?a.listMode="expanded":a.listMode="stretched")},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(a.listMode),1)])),_:1},8,["pressed"]),(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Array.from(a.store.todos).sort(((e,t)=>t.lastEdit-e.lastEdit)),(o=>((0,i.wg)(),(0,i.j4)(A,{button:"",class:"todo",key:o.id,onClick:e=>l.setCurrent(o)},{default:(0,i.w5)((()=>[(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(T,{onClick:(0,n.iM)((e=>l.copy(o)),["stop"]),variant:"outiline",size:e.sm},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{width:"20",height:"20",fill:"rgba(0,0,250,1)"})])),_:2},1032,["onClick","size"])])),_:2},1024),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>["expanded"==a.listMode?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,class:"toggle",type:"checkbox","onUpdate:modelValue":e=>o.completed=e,onClick:t[11]||(t[11]=(0,n.iM)((()=>{}),["stop"]))},null,8,v)),[[n.e8,o.completed]]):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,p.zw)(o.name),1)])),_:2},1024),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i._)("small",null,(0,p.zw)(l.since(o.lastEdit)),1)])),_:2},1024),"expanded"==a.listMode?((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>["public"==o.privacy?((0,i.wg)(),(0,i.iD)("div",k,[(0,i.Wm)(d,{onClick:(0,n.iM)((e=>o.privacy="private"),["stop"]),width:"20",height:"20",fill:"rgba(250,200,0,1)"},null,8,["onClick"])])):((0,i.wg)(),(0,i.iD)("div",y,[(0,i.Wm)(C,{onClick:(0,n.iM)((e=>o.privacy="public"),["stop"]),width:"20",height:"20",fill:"rgba(0,250,0,1)"},null,8,["onClick"])]))])),_:2},1024)):(0,i.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])])),_:1})])),_:1})])),_:1})])),_:1})])}o(7658);var W=o(3029),_=o(3122),T=o(5288),x=o(9373),L=o(3089),M=o(2213),U=o(114);const V={brains:[],neurones:[],todos:[]},D=(0,T.wI)(V),R=(0,T.ms)(D),j=new U.GL(R),O=new x.x$("noossync",R,{awareness:j,signaling:["wss://noosld-webrtc.glitch.me"]}),Z=(new L.H7("noossync",R),new M.VU("wss://yjs-leveldb.glitch.me/noosphere","noosld",R));O.on("status",(e=>{console.log("** webrtcProvider in y_store",e.status)})),Z.on("status",(e=>{console.log("## websocketProvider in y_store",e.status)}));const A={"@vocab":"https://scenaristeur.github.io/noosphere#",as:"https://scenaristeur.github.io/noosphere#",no:"https://scenaristeur.github.io/noosphere#",id:"@id",type:"@type",base:"https://scenaristeur.github.io/noosphere#"};var E=o(6866),P=o(2882),H=o(2108),z=o(1790),B=o(124),N=o(9255),S=o(5696),F=o(5496),q=o(7163),G=o(6800),K=o(8301);(0,T.QB)(E);var Q={name:"HomeView",components:{RiLockUnlockLine:P.Z,RiLock2Line:H.Z,RiClipboardLine:z.Z,RiDeleteBinLine:B.Z,RiCloseCircleLine:N.Z,RiAttachment2:S.Z,RiPencilLine:F.Z,RiAddCircleFill:q.Z,RiLink:G.Z,RiGitBranchLine:K.Z},data(){return{store:D,newTodo:"",privacy:!0,current:null,toast:{},listMode:"stretched"}},mounted(){(0,T.QT)(this.store.todos,this.y_storeChanged)},methods:{addTodo(){const e=this.newTodo&&this.newTodo.trim();if(!e)return;let t={"@context":A,id:(0,W.Z)(),type:"todo",name:e,completed:!1,privacy:this.privacy?"public":"private",created:Date.now(),lastEdit:Date.now()};console.log(t),this.store.todos.push(t),this.expand(t),this.newTodo="",this.toasting({title:"created",body:t.name})},setCurrent(e){e.lastEdit=Date.now(),this.current=e,this.toasting({title:"current",body:e.name})},copy(e){console.log(e),navigator.clipboard?navigator.clipboard.writeText(e.id):window.clipboardData&&window.clipboardData.setData&&window.clipboardData.setData("Text",e.id),this.toasting({title:"copied",body:e.name,variant:"info"})},toasting(e){this.toast.variant=e.variant||"info",this.toast.title=e.title,this.toast.body=e.body,this.toast.show=!0},fork(e){console.log("forking",e),this.toasting({title:"forked",body:e.name})},async expand(e){const t=await _.expand(e);console.log(t);const o=await _.compact(t,A);console.log(JSON.stringify(o,null,2))},y_storeChanged(e){console.log("changes",e)},removeTodo(e){this.store.todos.splice(this.store.todos.indexOf(e),1),this.current=null},since(e){return this.secondsToHms((new Date-new Date(e))/1e3)},secondsToHms(e){e=Number(e);var t=Math.floor(e/31557600),o=Math.floor(e/2592e3),n=Math.floor(e/86400),i=Math.floor(e/3600),r=Math.floor(e%3600/60),a=Math.floor(e%3600%60),l="";return l=t>0?t+"a":o>0?o+"m":n>0?n+"j":i>0?i+"h":r>0?r+"min":a+"s",l}}};const Y=(0,a.Z)(Q,[["render",C]]);var I=Y;const J=[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,833))}],$=(0,d.p7)({history:(0,d.PO)("/syncld/"),routes:J});var X=$,ee=o(65);const te=()=>({}),oe={},ne={};var ie={namespaced:!0,state:te,actions:ne,mutations:oe},re=(0,ee.MT)({state:{},getters:{},mutations:{},actions:{},modules:{core:ie}}),ae=o(2026);(0,n.ri)(u).use(re).use(X).use(ae.ZP).mount("#app")},7670:function(){}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,r){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],r=e[c][2];for(var l=!0,s=0;s<n.length;s++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(l=!1,r<a&&(a=r));if(l){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.3faabdc9.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="syncld:";o.l=function(n,i,r,a){if(e[n])e[n].push(i);else{var l,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+r),l.src=n),e[n]=[i];var p=function(t,o){l.onerror=l.onload=null,clearTimeout(f);var i=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/syncld/"}(),function(){var e={143:0};o.f.j=function(t,n){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(o,n){i=e[t]=[o,n]}));n.push(i[2]=r);var a=o.p+o.u(t),l=new Error,s=function(n){if(o.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,i[1](l)}};o.l(a,s,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],l=n[1],s=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var c=s(o)}for(t&&t(n);u<a.length;u++)r=a[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self["webpackChunksyncld"]=self["webpackChunksyncld"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6022)}));n=o.O(n)})();
//# sourceMappingURL=app.1a5899e6.js.map