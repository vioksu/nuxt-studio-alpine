import $ from"./ProseTh.P98xhoYs.js";import g from"./ProseTr.iAnXLopS.js";import V from"./ProseThead.yrdCBriL.js";import C from"./ProseCodeInline.4p5u0CTg.js";import b from"./ProseTd.oJT5dMQ0.js";import N from"./ProseTbody.EgonpeMv.js";import R from"./ProseTable.SCh8y0hJ.js";import{u as F}from"./asyncData.eAG9JG-r.js";import{k as L,d as S,af as Y,H as m,b as o,W as l,w as e,C as d,g as s,f,F as A,t as c,Y as E,c as H}from"./entry.Mct3wrgb.js";const I=S({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const h=`/api/component-meta/${Y(t.of)}`,{data:k}=await F(t.of,()=>$fetch(h),"$ZOKkBp5eoL"),i=m(()=>k.value.props.filter(a=>{var n;return!((n=a.tags)!=null&&n.ignore.includes(a))})),w=m(()=>{var a;return t.required!==void 0?t.required:(a=i.value)==null?void 0:a.find(n=>n.required!==void 0)}),q=m(()=>{var a;return t.values!==void 0?t.values:(a=i.value)==null?void 0:a.find(n=>n.values)}),r=m(()=>{var a;return t.description!==void 0?t.description:(a=i.value)==null?void 0:a.find(n=>n.description)}),y=m(()=>{var a;return t.default!==void 0?t.default:(a=i.value)==null?void 0:a.find(n=>n.default)});return{meta:k,properties:i,showRequired:w,showValues:q,showDescription:r,showDefault:y}}});function K(t,h,k,i,w,q){var v,D,P;const r=$,y=g,a=V,n=C,_=b,B=N,T=R;return t.meta&&((v=t.meta)!=null&&v.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(o(),l(T,{key:0},{default:e(()=>[s(a,null,{default:e(()=>[s(y,null,{default:e(()=>[s(r,null,{default:e(()=>[d("Prop")]),_:1}),s(r,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(o(),l(r,{key:0},{default:e(()=>[d(" Required ")]),_:1})):f("",!0),t.showDefault?(o(),l(r,{key:1},{default:e(()=>[d(" Default ")]),_:1})):f("",!0),t.showValues?(o(),l(r,{key:2},{default:e(()=>[d(" Values ")]),_:1})):f("",!0),t.showDescription?(o(),l(r,{key:3},{default:e(()=>[d(" Description ")]),_:1})):f("",!0)]),_:1})]),_:1}),s(B,null,{default:e(()=>[(o(!0),H(A,null,E(t.properties,u=>(o(),l(y,{key:u.name},{default:e(()=>[s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),s(_,null,{default:e(()=>[s(n,null,{default:e(()=>[d(c((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(o(),l(_,{key:0},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):f("",!0),t.showDefault?(o(),l(_,{key:1},{default:e(()=>[u.default?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):f("",!0)]),_:2},1024)):f("",!0),t.showValues?(o(),l(_,{key:2},{default:e(()=>[u.values?(o(),l(n,{key:0},{default:e(()=>[d(c((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(o(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):f("",!0),t.showDescription?(o(),l(_,{key:3},{default:e(()=>[s(n,null,{default:e(()=>[d(c(u.description),1)]),_:2},1024)]),_:2},1024)):f("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):f("",!0)}const Q=L(I,[["render",K]]);export{Q as default};
