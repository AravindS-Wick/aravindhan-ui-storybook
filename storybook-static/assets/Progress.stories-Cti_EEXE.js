import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as g}from"./types-2dOUpm6k.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function L({value:a,variant:t="primary",striped:s=!1,animated:r=!1,label:l}){const n=Math.max(0,Math.min(100,a));return e.jsx("div",{className:g("av-progress-bar",`av-progress-bar-${t}`,s&&"av-progress-bar-striped",r&&"av-progress-bar-animated"),role:"progressbar",style:{width:`${n}%`},"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,children:l&&e.jsx("span",{className:"av-progress-label",children:l})})}function i({value:a=0,variant:t="primary",striped:s=!1,animated:r=!1,size:l,stacked:n=!1,className:x="",children:u,...d}){return e.jsx("div",{className:g("av-progress",l&&`av-progress-${l}`,n&&"av-progress-stacked",x),...d,children:n?u:e.jsx(L,{value:a,variant:t,striped:s,animated:r})})}L.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:"Value 0–100."},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color variant.",defaultValue:{value:"'primary'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Striped pattern.",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"Animated stripes.",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label shown inside the bar."}}};i.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"Value 0–100 (single bar shorthand).",defaultValue:{value:"0",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color variant (single bar shorthand).",defaultValue:{value:"'primary'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Striped (single bar shorthand).",defaultValue:{value:"false",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"Animated (single bar shorthand).",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Height size."},stacked:{required:!1,tsType:{name:"boolean"},description:"Stacked bars — pass multiple ProgressBar children.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function b(a){return typeof a=="number"?`${a}px`:a}function o({variant:a="text",width:t,height:s,lines:r,animation:l="pulse",className:n="",style:x,...u}){const d=g("av-skeleton",`av-skeleton-${a}`,l!=="none"&&`av-skeleton-${l}`,n),y={...t?{width:b(t)}:{},...s?{height:b(s)}:{},...x};return r&&r>1?e.jsx("div",{className:"av-skeleton-group",...u,children:Array.from({length:r},($,h)=>e.jsx("div",{className:d,style:h===r-1?{...y,width:"70%"}:y},h))}):e.jsx("div",{className:d,style:y,...u})}o.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'rect' | 'circle' | 'button' | 'avatar' | 'card'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'rect'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'button'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'card'"}]},description:"Shape preset. Defaults to `'text'`.",defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width (CSS value or number in px)."},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height (CSS value or number in px)."},lines:{required:!1,tsType:{name:"number"},description:"Number of repeated skeleton lines."},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"Animation type. Defaults to `'pulse'`.",defaultValue:{value:"'pulse'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function f({variant:a="border",color:t="primary",size:s="md",label:r="Loading…",className:l="",...n}){return e.jsx("span",{className:g("av-spinner",`av-spinner-${a}`,`av-spinner-${t}`,s!=="md"&&`av-spinner-${s}`,l),role:"status","aria-label":r,...n,children:e.jsx("span",{className:"av-sr-only",children:r})})}f.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{variant:{required:!1,tsType:{name:"union",raw:"'border' | 'dots' | 'grow'",elements:[{name:"literal",value:"'border'"},{name:"literal",value:"'dots'"},{name:"literal",value:"'grow'"}]},description:"Visual variant. Defaults to `'border'`.",defaultValue:{value:"'border'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color. Defaults to `'primary'`.",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size modifier. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label. Defaults to `'Loading…'`.",defaultValue:{value:"'Loading…'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const M={title:"Feedback/Progress",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","success","warning","danger","info"]},value:{control:"range",min:0,max:100},indeterminate:{control:"boolean"},striped:{control:"boolean"},animated:{control:"boolean"},label:{control:"text"}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{value:25,label:"25%"}),e.jsx(i,{value:50,variant:"success",label:"50% complete"}),e.jsx(i,{value:75,variant:"warning"}),e.jsx(i,{value:90,variant:"danger"}),e.jsx(i,{value:100,variant:"success",label:"Done!"}),e.jsx(i,{indeterminate:!0,label:"Loading…"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[["sm","md","lg"].map(a=>e.jsx(f,{size:a},a)),e.jsx(f,{color:"success"}),e.jsx(f,{color:"danger"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:400},children:[e.jsx(o,{variant:"text",width:"80%"}),e.jsx(o,{variant:"text",width:"60%"}),e.jsx(o,{variant:"rectangular",height:200}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(o,{variant:"circular",width:48,height:48}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(o,{variant:"text",width:"70%"}),e.jsx(o,{variant:"text",width:"40%"})]})]})]})},v={name:"Custom (controls)",args:{value:60,variant:"primary",indeterminate:!1,striped:!1,animated:!1,label:"Progress"}};var w,j,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Progress value={25} label="25%" />
      <Progress value={50} variant="success" label="50% complete" />
      <Progress value={75} variant="warning" />
      <Progress value={90} variant="danger" />
      <Progress value={100} variant="success" label="Done!" />
      <Progress indeterminate label="Loading…" />
    </div>
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,T,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {(['sm', 'md', 'lg'] as const).map(s => <Spinner key={s} size={s} />)}
      <Spinner color="success" />
      <Spinner color="danger" />
    </div>
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var V,N,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 400
  }}>
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="rectangular" height={200} />
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
    </div>
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var D,_,C;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    value: 60,
    variant: 'primary',
    indeterminate: false,
    striped: false,
    animated: false,
    label: 'Progress'
  }
}`,...(C=(_=v.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const z=["ProgressBars","Spinners","Skeletons","Custom"];export{v as Custom,m as ProgressBars,p as Skeletons,c as Spinners,z as __namedExportsOrder,M as default};
