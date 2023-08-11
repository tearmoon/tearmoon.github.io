import{r as M,R as h,k as g,j as r,s as A,i as N,c as Q,b as c,l as X,n as T,o as z,q as Y,e as B,t as Z,h as V,v as ee,w as te,x as k,y as ne,z as re,A as ae,u as oe,D as le,C as se,E as ie,B as _,F as ce,G as de,H as ue}from"./index-4e1f7ab9.js";import{r as pe}from"./logs-3ad1b39c.js";import{S as x}from"./Select-6ddba6cd.js";import{R as he}from"./rotate-cw-cf0e82c5.js";function S(){return S=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},S.apply(this,arguments)}function fe(e,a){if(e==null)return{};var o=me(e,a),n,t;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function me(e,a){if(e==null)return{};var o={},n=Object.keys(e),t,l;for(l=0;l<n.length;l++)t=n[l],!(a.indexOf(t)>=0)&&(o[t]=e[t]);return o}var j=M.forwardRef(function(e,a){var o=e.color,n=o===void 0?"currentColor":o,t=e.size,l=t===void 0?24:t,d=fe(e,["color","size"]);return h.createElement("svg",S({ref:a,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),h.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),h.createElement("polyline",{points:"16 17 21 12 16 7"}),h.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))});j.propTypes={color:g.string,size:g.oneOfType([g.string,g.number])};j.displayName="LogOut";const ge=j;function P(){return P=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},P.apply(this,arguments)}function ve(e,a){if(e==null)return{};var o=ye(e,a),n,t;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ye(e,a){if(e==null)return{};var o={},n=Object.keys(e),t,l;for(l=0;l<n.length;l++)t=n[l],!(a.indexOf(t)>=0)&&(o[t]=e[t]);return o}var I=M.forwardRef(function(e,a){var o=e.color,n=o===void 0?"currentColor":o,t=e.size,l=t===void 0?24:t,d=ve(e,["color","size"]);return h.createElement("svg",P({ref:a,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),h.createElement("polyline",{points:"3 6 5 6 21 6"}),h.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),h.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),h.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))});I.propTypes={color:g.string,size:g.oneOfType([g.string,g.number])};I.displayName="Trash2";const be=I,{useState:we,useRef:Ce,useEffect:ke,useCallback:_e}=N;function xe(e){return r("input",{className:A.input,...e})}function Oe({value:e,...a}){const[o,n]=we(e),t=Ce(e);ke(()=>{t.current!==e&&n(e),t.current=e},[e]);const l=_e(d=>n(d.target.value),[n]);return r("input",{className:A.input,value:o,onChange:l,...a})}const Se="_root_vyhny_1",Pe="_section_vyhny_2",Ne="_wrapSwitch_vyhny_27",je="_sep_vyhny_33",Ie="_label_vyhny_46",i={root:Se,section:Pe,wrapSwitch:Ne,sep:je,label:Ie},Ee="_fieldset_1ghjp_1",Le="_input_1ghjp_9",$e="_cnt_1ghjp_9",O={fieldset:Ee,input:Le,cnt:$e};function Re({OptionComponent:e,optionPropsList:a,selectedIndex:o,onChange:n}){const t=Q("visually-hidden",O.input),l=d=>{n(d.target.value)};return r("fieldset",{className:O.fieldset,children:a.map((d,v)=>c("label",{children:[r("input",{type:"radio",checked:o===v,name:"selection",value:v,"aria-labelledby":"traffic chart type "+v,onChange:l,className:t}),r("div",{className:O.cnt,children:r(e,{...d})})]},v))})}const{useMemo:Te}=N,ze={plugins:{legend:{display:!1}},scales:{x:{display:!1,type:"category"},y:{display:!1,type:"linear"}}},W=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],Me=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],Ae=W;function Be({id:e}){const a=X.read(),o=Te(()=>({labels:Ae,datasets:[{...T,...z[e].up,data:W},{...T,...z[e].down,data:Me}]}),[e]),n="chart-"+e;return Y(a.Chart,n,o,null,ze),r("div",{style:{width:100,padding:5},children:r("canvas",{id:n})})}const{useEffect:F,useState:Ve,useCallback:m,useRef:We,useMemo:Fe}=N,Ue=[{id:0},{id:1},{id:2},{id:3}],De=[["debug","Debug"],["info","Info"],["warning","Warning"],["error","Error"],["silent","Silent"]],He=[{key:"port",label:"HTTP Proxy Port"},{key:"socks-port",label:"SOCKS5 Proxy Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"},{key:"tproxy-port",label:"tProxy Port"}],Ge=[["zh","中文"],["en","English"]],qe=[["Global","Global"],["Rule","Rule"],["Direct","Direct"]],Je=e=>({configs:Z(e),apiConfig:V(e)}),Ke=e=>({selectedChartStyleIndex:de(e),latencyTestUrl:ue(e),apiConfig:V(e)}),Qe=B(Ke)(Ze),at=B(Je)(Xe);function Xe({dispatch:e,configs:a,apiConfig:o}){return F(()=>{e(ee(o))},[e,o]),r(Qe,{configs:a})}function Ye(e){return e&&e.meta&&!e.premium?"Clash.Meta ":e&&e.meta&&e.premium?"sing-box ":"Clash Premium"}function Ze({dispatch:e,configs:a,selectedChartStyleIndex:o,latencyTestUrl:n,apiConfig:t}){const[l,d]=Ve(a),v=We(a);F(()=>{v.current!==a&&d(a),v.current=a},[a]);const U=m(()=>{e(te("apiConfig"))},[e]),y=m((s,u)=>{d({...l,[s]:u})},[l]),D=m(s=>{const u="allow-lan",p=s;y(u,p),e(k(t,{"allow-lan":p}))},[t,e,y]),w=m(({name:s,value:u})=>{switch(s){case"mode":case"log-level":y(s,u),e(k(t,{[s]:u})),s==="log-level"&&pe({...t,logLevel:u});break;case"tproxy-port":case"redir-port":case"socks-port":case"mixed-port":case"port":if(u!==""){const p=parseInt(u,10);if(p<0||p>65535)return}y(s,u);break;default:return}},[t,e,y]),H=m(s=>w(s.target),[w]),{selectChartStyleIndex:G,updateAppConfig:E}=ne(),L=m(s=>{const u=s.target,{name:p,value:R}=u;switch(p){case"port":case"socks-port":case"mixed-port":case"redir-port":case"tproxy-port":{const C=parseInt(R,10);if(C<0||C>65535)return;e(k(t,{[p]:C}));break}case"latencyTestUrl":{E(p,R);break}default:throw new Error(`unknown input name ${p}`)}},[t,e,E]),q=m(()=>{e(re(t))},[t,e]),J=m(()=>{e(ae(t))},[t,e]),K=Fe(()=>{const s=l.mode;return typeof s=="string"&&s[0].toUpperCase()+s.slice(1)},[l.mode]),{t:f,i18n:$}=oe(),{data:b}=le(["/version",t],()=>ce("/version",t));return c("div",{children:[r(se,{title:f("Config")}),c("div",{className:i.root,children:[b.meta&&b.premium||He.map(s=>l[s.key]!==void 0?c("div",{children:[r("div",{className:i.label,children:s.label}),r(xe,{name:s.key,value:l[s.key],onChange:H,onBlur:L})]},s.key):null),c("div",{children:[r("div",{className:i.label,children:"Mode"}),r(x,{options:qe,selected:K,onChange:s=>w({name:"mode",value:s.target.value})})]}),c("div",{children:[r("div",{className:i.label,children:"Log Level"}),r(x,{options:De,selected:l["log-level"],onChange:s=>w({name:"log-level",value:s.target.value})})]}),b.meta&&b.premium||c("div",{children:[r("div",{className:i.label,children:"Allow LAN"}),r("div",{className:i.wrapSwitch,children:r(ie,{name:"allow-lan",checked:l["allow-lan"],onChange:D})})]})]}),r("div",{className:i.sep,children:r("div",{})}),c("div",{className:i.section,children:[c("div",{children:[r("div",{className:i.label,children:"Reload"}),r(_,{start:r(he,{size:16}),label:f("reload_config_file"),onClick:q})]}),c("div",{children:[r("div",{className:i.label,children:"FakeIP"}),r(_,{start:r(be,{size:16}),label:f("flush_fake_ip_pool"),onClick:J})]})]}),r("div",{className:i.sep,children:r("div",{})}),c("div",{className:i.section,children:[c("div",{children:[r("div",{className:i.label,children:f("latency_test_url")}),r(Oe,{name:"latencyTestUrl",type:"text",value:n,onBlur:L})]}),c("div",{children:[r("div",{className:i.label,children:f("lang")}),r("div",{children:r(x,{options:Ge,selected:$.language,onChange:s=>$.changeLanguage(s.target.value)})})]}),c("div",{children:[r("div",{className:i.label,children:f("chart_style")}),r(Re,{OptionComponent:Be,optionPropsList:Ue,selectedIndex:o,onChange:G})]}),c("div",{children:[c("div",{className:i.label,children:[f("current_backend"),r("p",{children:Ye(b)+t.baseURL})]}),r("div",{className:i.label,children:"Action"}),r(_,{start:r(ge,{size:16}),label:f("switch_backend"),onClick:U})]})]})]})}export{at as default};
