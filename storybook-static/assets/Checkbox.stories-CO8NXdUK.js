import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as h}from"./index-pP6CS22B.js";import{C as m,S as g}from"./Checkbox-CeX05X-T.js";import{c}from"./types-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D=h.forwardRef(function({label:a,color:t="primary",size:d="md",error:s=!1,className:i="",id:o,disabled:u,...p},n){return e.jsxs("label",{htmlFor:o,className:c("av-radio-wrapper",d!=="md"&&`av-radio-${d}`,s&&"av-radio-error",u&&"av-radio-disabled",i),children:[e.jsx("input",{ref:n,type:"radio",id:o,className:c("av-radio",`av-radio-${t}`),"aria-invalid":s||void 0,disabled:u,...p}),a&&e.jsx("span",{className:"av-radio-label",children:a})]})});D.displayName="Radio";function le({legend:r,options:a,value:t,defaultValue:d,onChange:s,name:i,direction:o="vertical",color:u="primary",size:p="md",error:n,required:f,className:x="",...b}){return e.jsxs("fieldset",{className:c("av-radio-group",`av-radio-group-${o}`,n&&"av-radio-group-error",x),"aria-required":f,...b,children:[r&&e.jsxs("legend",{className:"av-radio-group-legend",children:[r,f&&e.jsx("span",{className:"av-form-required","aria-hidden":"true",children:" *"})]}),a.map(l=>e.jsxs("div",{className:"av-radio-option",children:[e.jsx(D,{id:`${i}-${l.value}`,name:i,value:l.value,label:l.label,disabled:l.disabled,color:u,size:p,error:!!n,checked:t!==void 0?t===l.value:void 0,defaultChecked:d!==void 0?d===l.value:void 0,onChange:()=>s==null?void 0:s(l.value)}),l.helperText&&e.jsx("p",{className:"av-radio-helper",children:l.helperText})]},l.value)),n&&e.jsx("p",{className:"av-form-helper av-form-helper-error",role:"alert",children:n})]})}D.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:"Label text."},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color variant. Defaults to `'primary'`.",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size modifier. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};le.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{legend:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!0,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const y=h.forwardRef(function({min:a=0,max:t=100,step:d=1,showTooltip:s=!1,color:i="primary",size:o="md",label:u,marks:p=!1,error:n=!1,helperText:f,className:x="",id:b,...l},N){return e.jsxs("div",{className:c("av-slider-wrapper",o!=="md"&&`av-slider-${o}`,n&&"av-slider-error",x),children:[u&&e.jsx("label",{htmlFor:b,className:"av-form-label",children:u}),e.jsxs("div",{className:"av-slider-track-wrapper",children:[e.jsx("input",{ref:N,type:"range",id:b,min:a,max:t,step:d,className:c("av-slider",`av-slider-${i}`,s&&"av-slider-tooltip"),"aria-valuemin":a,"aria-valuemax":t,"aria-invalid":n||void 0,...l}),p&&e.jsxs("div",{className:"av-slider-marks","aria-hidden":"true",children:[e.jsx("span",{className:"av-slider-mark-label",children:a}),e.jsx("span",{className:"av-slider-mark-label",children:t})]})]}),f&&e.jsx("p",{className:c("av-form-helper",n&&"av-form-helper-error"),children:f})]})});y.displayName="Slider";y.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Show current value as tooltip on the thumb.",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},marks:{required:!1,tsType:{name:"boolean"},description:"Show min/max tick marks.",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state.",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};function C({value:r,defaultValue:a=0,max:t=5,onChange:d,readOnly:s=!1,disabled:i=!1,size:o="md",filledIcon:u="★",emptyIcon:p="☆",label:n="Rating",className:f="",...x}){const[b,l]=h.useState(a),[N,$]=h.useState(0),I=r??b,re=N||I;function se(R){s||i||(l(R),d==null||d(R))}return e.jsx("div",{className:c("av-rating",o!=="md"&&`av-rating-${o}`,s&&"av-rating-readonly",i&&"av-rating-disabled",f),role:"radiogroup","aria-label":n,...x,children:Array.from({length:t},(R,te)=>{const v=te+1,_=v<=re;return e.jsx("button",{type:"button",role:"radio","aria-checked":v===I,"aria-label":`${v} star${v!==1?"s":""}`,className:c("av-rating-star",_&&"av-rating-star-filled"),onClick:()=>se(v),onMouseEnter:()=>!s&&!i&&$(v),onMouseLeave:()=>$(0),disabled:i,tabIndex:i||s?-1:0,children:_?u:p},v)})})}C.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"Current value (1–max)."},defaultValue:{required:!1,tsType:{name:"number"},description:"Default value (uncontrolled).",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Max stars. Defaults to 5.",defaultValue:{value:"5",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Called when value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only display.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size modifier. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},filledIcon:{required:!1,tsType:{name:"string"},description:"Custom icon (filled).",defaultValue:{value:"'★'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Custom icon (empty).",defaultValue:{value:"'☆'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label.",defaultValue:{value:"'Rating'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const me={title:"Inputs/Checkbox",component:m,tags:["autodocs"]},j={render:()=>e.jsx(m,{label:"Accept terms and conditions"})},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(m,{label:"Unchecked"}),e.jsx(m,{label:"Checked",defaultChecked:!0}),e.jsx(m,{label:"Indeterminate",indeterminate:!0}),e.jsx(m,{label:"Disabled",disabled:!0}),e.jsx(m,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(m,{label:"With error",error:"This field is required"})]})},q={render:()=>{const[r,a]=h.useState("monthly");return e.jsx(le,{legend:"Billing cycle",name:"billing",value:r,onChange:a,options:[{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly (save 20%)"},{value:"lifetime",label:"Lifetime"}]})}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(g,{label:"Notifications",defaultChecked:!0}),e.jsx(g,{label:"Dark mode"}),e.jsx(g,{label:"Disabled",disabled:!0}),e.jsx(g,{label:"With helper",helperText:"Enables push notifications on your device"})]})},V={render:()=>{const[r,a]=h.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(C,{value:r,onChange:a,label:"Rate this product"}),e.jsx(C,{value:4.5,readOnly:!0,max:5}),e.jsx(C,{value:7,max:10,label:"Out of 10"})]})}},S={render:()=>{const[r,a]=h.useState(60);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(y,{label:`Volume: ${r}%`,value:String(r),onChange:t=>a(Number(t.target.value)),min:0,max:100,fullWidth:!0}),e.jsx(y,{label:"Disabled",defaultValue:"40",disabled:!0,fullWidth:!0}),e.jsx(y,{label:"Range with step",min:0,max:1e3,step:50,defaultValue:"500",fullWidth:!0})]})}},w={name:"Custom (controls)",args:{label:"Custom checkbox",disabled:!1,indeterminate:!1}};var W,O,E;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Checkbox label="Accept terms and conditions" />
}`,...(E=(O=j.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var z,A,B;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="With error" error="This field is required" />
    </div>
}`,...(B=(A=k.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var M,L,G;q.parameters={...q.parameters,docs:{...(M=q.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('monthly');
    return <RadioGroup legend="Billing cycle" name="billing" value={val} onChange={setVal} options={[{
      value: 'monthly',
      label: 'Monthly'
    }, {
      value: 'yearly',
      label: 'Yearly (save 20%)'
    }, {
      value: 'lifetime',
      label: 'Lifetime'
    }]} />;
  }
}`,...(G=(L=q.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var F,U,Y;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Switch label="Notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Disabled" disabled />
      <Switch label="With helper" helperText="Enables push notifications on your device" />
    </div>
}`,...(Y=(U=T.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var H,P,J;V.parameters={...V.parameters,docs:{...(H=V.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState(3);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Rating value={val} onChange={setVal} label="Rate this product" />
        <Rating value={4.5} readOnly max={5} />
        <Rating value={7} max={10} label="Out of 10" />
      </div>;
  }
}`,...(J=(P=V.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [vol, setVol] = useState(60);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Slider label={\`Volume: \${vol}%\`} value={String(vol)} onChange={e => setVol(Number(e.target.value))} min={0} max={100} fullWidth />
        <Slider label="Disabled" defaultValue="40" disabled fullWidth />
        <Slider label="Range with step" min={0} max={1000} step={50} defaultValue="500" fullWidth />
      </div>;
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    label: 'Custom checkbox',
    disabled: false,
    indeterminate: false
  } as Parameters<typeof Checkbox>[0]
}`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ce=["Default","States","RadioButtons","Switches","Ratings","Sliders","Custom"];export{w as Custom,j as Default,q as RadioButtons,V as Ratings,S as Sliders,k as States,T as Switches,ce as __namedExportsOrder,me as default};
