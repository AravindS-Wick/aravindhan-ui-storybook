import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as c}from"./index-pP6CS22B.js";import{T as M}from"./TextField-B4CvjsEL.js";import{c as W}from"./types-2dOUpm6k.js";import{u as Ee}from"./FormProvider-B64XWQQ7.js";import{P as X}from"./PasswordInput-Vh8-qyEs.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U=c.forwardRef(function(o,a){const{label:t,helperText:l,error:r,success:n=!1,size:S="md",fullWidth:i=!1,required:s=!1,autoResize:T=!1,showCount:d=!1,className:x="",id:q,value:f,defaultValue:N,maxLength:g,onChange:D,...b}=Ee(o),h=c.useRef(null),v=a??h,F=c.useId(),m=q??F,p=!!r;c.useEffect(()=>{if(!T||!(v!=null&&v.current))return;const u=v.current;u.style.height="auto",u.style.height=`${u.scrollHeight}px`});const[w,I]=c.useState(String(f??N??"").length);return e.jsxs("div",{className:W("av-textarea-field",i&&"av-textarea-field-full",p&&"av-textarea-field-error",n&&"av-textarea-field-success",x),children:[t&&e.jsxs("label",{htmlFor:m,className:"av-form-label",children:[t,s&&e.jsx("span",{className:"av-form-required","aria-hidden":"true",children:" *"})]}),e.jsx("textarea",{ref:v,id:m,className:W("av-textarea",S!=="md"&&`av-textarea-${S}`,p&&"av-textarea-error",n&&"av-textarea-success",T&&"av-textarea-autoresize",i&&"av-textarea-full"),"aria-invalid":p||void 0,"aria-describedby":p?`${m}-error`:l?`${m}-helper`:void 0,required:s,maxLength:g,value:f,defaultValue:N,onChange:u=>{I(u.target.value.length),D==null||D(u)},...b}),e.jsxs("div",{className:"av-textarea-footer",children:[p?e.jsx("p",{id:`${m}-error`,className:"av-form-helper av-form-helper-error",role:"alert",children:r}):l?e.jsx("p",{id:`${m}-helper`,className:"av-form-helper",children:l}):e.jsx("span",{}),d&&g&&e.jsxs("span",{className:W("av-textarea-count",w>=g&&"av-textarea-count-max"),children:[w,"/",g]})]})]})});U.displayName="Textarea";U.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:"Error message — also sets aria-invalid."},success:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},autoResize:{required:!1,tsType:{name:"boolean"},description:"Auto-grow to fit content."},showCount:{required:!1,tsType:{name:"boolean"},description:"Show character count (requires maxLength)."}},composes:["TextareaHTMLAttributes"]};const A=c.forwardRef(function({label:o,helperText:a,error:t,size:l="md",fullWidth:r=!1,required:n=!1,step:S=1,min:i,max:s,precision:T,onChange:d,value:x,defaultValue:q,stepper:f=!0,controls:N=!1,className:g="",id:D,disabled:b,...h},v){const F=c.useId(),m=D??F,p=!!t,[w,I]=c.useState(x!=null?String(x):q!=null?String(q):""),u=x!=null?String(x):w;function E(y){return i!=null&&y<i?i:s!=null&&y>s?s:y}function G(y){return T!=null?Number(y.toFixed(T)):y}function J(){const y=parseFloat(u)||0,z=G(E(y+S));I(String(z)),d==null||d(z)}function K(){const y=parseFloat(u)||0,z=G(E(y-S));I(String(z)),d==null||d(z)}function Me(y){const z=y.target.value;I(z);const C=z===""?null:parseFloat(z);(C===null||!isNaN(C))&&(d==null||d(C!=null?G(E(C)):null))}return e.jsxs("div",{className:W("av-number-input",r&&"av-number-input-full",p&&"av-number-input-error",g),children:[o&&e.jsxs("label",{htmlFor:m,className:"av-form-label",children:[o,n&&e.jsx("span",{className:"av-form-required","aria-hidden":"true",children:" *"})]}),e.jsxs("div",{className:W("av-number-input-control",l!=="md"&&`av-number-input-${l}`),children:[N&&e.jsx("button",{type:"button",className:"av-number-input-btn",onClick:K,disabled:b||i!=null&&parseFloat(u)<=i,"aria-label":"Decrease",children:"−"}),e.jsx("input",{ref:v,id:m,type:"number",className:W("av-input","av-number-input-field",l!=="md"&&`av-input-${l}`,p&&"av-input-error"),value:u,step:S,min:i,max:s,required:n,disabled:b,"aria-invalid":p||void 0,onChange:Me,...h}),N&&e.jsx("button",{type:"button",className:"av-number-input-btn",onClick:J,disabled:b||s!=null&&parseFloat(u)>=s,"aria-label":"Increase",children:"+"}),f&&!N&&e.jsxs("div",{className:"av-number-input-stepper",children:[e.jsx("button",{type:"button",className:"av-number-input-step-up",onClick:J,disabled:b||s!=null&&parseFloat(u)>=s,"aria-label":"Increase",tabIndex:-1,children:"▲"}),e.jsx("button",{type:"button",className:"av-number-input-step-down",onClick:K,disabled:b||i!=null&&parseFloat(u)<=i,"aria-label":"Decrease",tabIndex:-1,children:"▼"})]})]}),p?e.jsx("p",{className:"av-form-helper av-form-helper-error",role:"alert",children:t}):a?e.jsx("p",{className:"av-form-helper",children:a}):null]})});A.displayName="NumberInput";A.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step amount. Defaults to 1.",defaultValue:{value:"1",computed:!1}},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},precision:{required:!1,tsType:{name:"number"},description:"Decimal precision."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | null) => void",signature:{arguments:[{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Called with the numeric value (or null if empty)."},value:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Controlled numeric value."},defaultValue:{required:!1,tsType:{name:"number"},description:""},stepper:{required:!1,tsType:{name:"boolean"},description:"Show increment/decrement buttons.",defaultValue:{value:"true",computed:!1}},controls:{required:!1,tsType:{name:"boolean"},description:"Show +/- prefix buttons.",defaultValue:{value:"false",computed:!1}},required:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const Z=c.forwardRef(function({label:o,size:a="md",fullWidth:t=!1,debounce:l=0,onSearch:r,clearable:n=!0,loading:S=!1,className:i="",id:s,value:T,defaultValue:d="",onChange:x,...q},f){const N=c.useId(),g=s??N,[D,b]=c.useState(String(d)),h=c.useRef(),v=T!==void 0?String(T):D;function F(p){const w=p.target.value;b(w),x==null||x(p),r&&(clearTimeout(h.current),l>0?h.current=setTimeout(()=>r(w),l):r(w))}function m(){b(""),r==null||r(""),f&&"current"in f&&f.current&&(f.current.value="",f.current.focus())}return e.jsxs("div",{className:W("av-search-input",t&&"av-search-input-full",i),children:[o&&e.jsx("label",{htmlFor:g,className:"av-form-label",children:o}),e.jsxs("div",{className:W("av-input-wrapper av-input-wrapper-start",v&&n&&"av-input-wrapper-end"),children:[e.jsx("span",{className:"av-input-adornment av-input-adornment-start","aria-hidden":"true",children:S?e.jsx("span",{className:"av-spinner av-spinner-border av-spinner-sm av-spinner-primary",role:"status","aria-label":"Searching"}):e.jsx("span",{className:"av-search-icon",children:"🔍"})}),e.jsx("input",{ref:f,id:g,type:"search",className:W("av-input",a!=="md"&&`av-input-${a}`),value:v,onChange:F,autoComplete:"off",...q}),n&&v&&e.jsx("span",{className:"av-input-adornment av-input-adornment-end",children:e.jsx("button",{type:"button",className:"av-search-clear","aria-label":"Clear search",onClick:m,children:"×"})})]})]})});Z.displayName="SearchInput";Z.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},debounce:{required:!1,tsType:{name:"number"},description:"Debounce delay in ms. 0 = no debounce. Defaults to 0.",defaultValue:{value:"0",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called with the search value (debounced if set)."},clearable:{required:!1,tsType:{name:"boolean"},description:"Show clear button when input has value.",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state (shows spinner).",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1},defaultValue:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const Ae={phone:"+# (###) ###-####","phone-us":"(###) ###-####",card:"#### #### #### ####",date:"##/##/####",time:"##:##",ssn:"###-##-####",zip:"#####"};function Ce(j,o){let a="",t=0;for(let l=0;l<o.length&&t<j.length;l++){const r=o[l],n=j[t];r==="#"?(/\d/.test(n)&&(a+=n),t++):r==="A"?(/[a-zA-Z]/.test(n)&&(a+=n),t++):r==="*"?(a+=n,t++):(a+=r,n===r&&t++)}return a}function Pe(j,o){return j.split("").filter((a,t)=>{const l=o[t];return l==="#"||l==="A"||l==="*"}).join("")}const k=c.forwardRef(function({mask:o,preset:a,label:t,helperText:l,error:r,size:n,fullWidth:S,onValueChange:i,onChange:s,placeholder:T,className:d="",id:x,required:q,disabled:f,value:N,defaultValue:g,...D},b){const h=o??(a?Ae[a]:void 0),v=c.useRef(null),F=b??v,m=x??(t?`av-masked-${t.replace(/\s+/g,"-").toLowerCase()}`:void 0),p=h==null?void 0:h.replace(/#/g,"0").replace(/A/g,"A").replace(/\*/g,"_"),w=I=>{if(!h){s==null||s(I);return}const u=Pe(I.target.value,h),E=Ce(u,h);I.target.value=E,i==null||i(u,E),s==null||s(I)};return e.jsxs("div",{className:W("av-text-field",S&&"av-text-field-full",r&&"av-text-field-error",d),children:[t&&e.jsxs("label",{className:"av-form-label",htmlFor:m,children:[t,q&&e.jsx("span",{className:"av-form-required","aria-hidden":"true",children:" *"})]}),e.jsx("input",{ref:F,id:m,type:"text",inputMode:a==="card"||a==="zip"||a==="ssn"||a!=null&&a.startsWith("phone")?"numeric":void 0,className:W("av-input",n&&n!=="md"&&`av-input-${n}`,r&&"av-input-error"),placeholder:T??p,required:q,disabled:f,value:N,defaultValue:g,onChange:w,"aria-invalid":!!r||void 0,...D}),r&&e.jsx("p",{className:"av-form-helper av-form-helper-error",role:"alert",children:r}),!r&&l&&e.jsx("p",{className:"av-form-helper",children:l})]})});k.displayName="MaskedInput";k.__docgenInfo={description:"",methods:[],displayName:"MaskedInput",props:{mask:{required:!1,tsType:{name:"string"},description:"Custom mask string. Use `#` for digits, `A` for letters, `*` for any char."},preset:{required:!1,tsType:{name:"union",raw:"'phone' | 'phone-us' | 'card' | 'date' | 'time' | 'ssn' | 'zip'",elements:[{name:"literal",value:"'phone'"},{name:"literal",value:"'phone-us'"},{name:"literal",value:"'card'"},{name:"literal",value:"'date'"},{name:"literal",value:"'time'"},{name:"literal",value:"'ssn'"},{name:"literal",value:"'zip'"}]},description:"Preset mask. Overridden by `mask` if both provided."},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(raw: string, masked: string) => void",signature:{arguments:[{type:{name:"string"},name:"raw"},{type:{name:"string"},name:"masked"}],return:{name:"void"}}},description:"Called with raw (unmasked) value."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const He={title:"Inputs/TextField",component:M,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},error:{control:"text"}}},P={args:{label:"Email",placeholder:"you@example.com",fullWidth:!0}},R={args:{label:"Email",defaultValue:"bad-email",error:"Enter a valid email address",fullWidth:!0}},L={name:"With Adornments",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(M,{label:"Search",startAdornment:e.jsx("span",{style:{fontSize:16},children:"🔍"}),placeholder:"Type to search…",fullWidth:!0}),e.jsx(M,{label:"Amount",endAdornment:e.jsx("span",{style:{fontWeight:600,fontSize:13},children:"USD"}),placeholder:"0.00",type:"number",fullWidth:!0}),e.jsx(M,{label:"Website",startAdornment:e.jsx("span",{style:{fontSize:12,opacity:.6},children:"https://"}),endAdornment:e.jsx("span",{style:{fontSize:12,opacity:.6},children:".com"}),placeholder:"yoursite",fullWidth:!0})]})},V={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(M,{label:"Small (sm)",size:"sm",placeholder:"Small input",fullWidth:!0}),e.jsx(M,{label:"Medium (md)",size:"md",placeholder:"Medium input",fullWidth:!0}),e.jsx(M,{label:"Large (lg)",size:"lg",placeholder:"Large input",fullWidth:!0})]})},$={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(U,{label:"Message",placeholder:"Write your message…",rows:4,fullWidth:!0}),e.jsx(U,{label:"Bio",showCount:!0,maxLength:200,autoResize:!0,placeholder:"Auto-resizes as you type…",fullWidth:!0})]})},_={name:"Number – Stepper (▲▼)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:320},children:[e.jsx(A,{label:"Price",min:0,precision:2,stepper:!0,fullWidth:!0}),e.jsx(A,{label:"Percentage",min:0,max:100,step:5,stepper:!0,fullWidth:!0})]})},Y={name:"Number – Controls (− / +)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:320},children:[e.jsx(A,{label:"Quantity",min:0,max:100,step:1,controls:!0,stepper:!1,fullWidth:!0}),e.jsx(A,{label:"Rating",min:1,max:10,step:1,controls:!0,stepper:!1,fullWidth:!0})]})},B={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(X,{label:"Password",placeholder:"Enter password",fullWidth:!0}),e.jsx(X,{label:"Password with strength meter",showStrength:!0,placeholder:"Choose a strong password",fullWidth:!0})]})},H={render:()=>{const[j,o]=c.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(Z,{placeholder:"Search…",value:j,onChange:a=>o(a.target.value),onSearch:a=>alert(`Search: ${a}`),clearable:!0,fullWidth:!0}),e.jsx(Z,{placeholder:"Debounced search (400ms)",debounce:400,onSearch:a=>console.log("debounced:",a),fullWidth:!0})]})}},O={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(k,{label:"Phone (US)",preset:"phone-us",fullWidth:!0}),e.jsx(k,{label:"Credit Card",preset:"card",fullWidth:!0}),e.jsx(k,{label:"Date (MM/DD/YYYY)",preset:"date",fullWidth:!0}),e.jsx(k,{label:"ZIP Code",preset:"zip",fullWidth:!0}),e.jsx(k,{label:"Custom mask (SSN)",preset:"ssn",fullWidth:!0})]})},Q={name:"Custom (controls)",args:{label:"Custom Field",placeholder:"Type something…",size:"md",fullWidth:!0,disabled:!1,error:""}};var ee,ae,re;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    fullWidth: true
  }
}`,...(re=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,le,se;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    defaultValue: 'bad-email',
    error: 'Enter a valid email address',
    fullWidth: true
  }
}`,...(se=(le=R.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ne,ie,ue;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'With Adornments',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      <TextField label="Search" startAdornment={<span style={{
      fontSize: 16
    }}>🔍</span>} placeholder="Type to search…" fullWidth />
      <TextField label="Amount" endAdornment={<span style={{
      fontWeight: 600,
      fontSize: 13
    }}>USD</span>} placeholder="0.00" type="number" fullWidth />
      <TextField label="Website" startAdornment={<span style={{
      fontSize: 12,
      opacity: 0.6
    }}>https://</span>} endAdornment={<span style={{
      fontSize: 12,
      opacity: 0.6
    }}>.com</span>} placeholder="yoursite" fullWidth />
    </div>
}`,...(ue=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var oe,de,pe;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
      <TextField label="Small (sm)" size="sm" placeholder="Small input" fullWidth />
      <TextField label="Medium (md)" size="md" placeholder="Medium input" fullWidth />
      <TextField label="Large (lg)" size="lg" placeholder="Large input" fullWidth />
    </div>
}`,...(pe=(de=V.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,me,fe;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
      <Textarea label="Message" placeholder="Write your message…" rows={4} fullWidth />
      <Textarea label="Bio" showCount maxLength={200} autoResize placeholder="Auto-resizes as you type…" fullWidth />
    </div>
}`,...(fe=(me=$.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ve,xe;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Number – Stepper (▲▼)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 320
  }}>
      <NumberInput label="Price" min={0} precision={2} stepper fullWidth />
      <NumberInput label="Percentage" min={0} max={100} step={5} stepper fullWidth />
    </div>
}`,...(xe=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var be,ye,ge;Y.parameters={...Y.parameters,docs:{...(be=Y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Number – Controls (− / +)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 320
  }}>
      <NumberInput label="Quantity" min={0} max={100} step={1} controls stepper={false} fullWidth />
      <NumberInput label="Rating" min={1} max={10} step={1} controls stepper={false} fullWidth />
    </div>
}`,...(ge=(ye=Y.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var We,je,Se;B.parameters={...B.parameters,docs:{...(We=B.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      <PasswordInput label="Password" placeholder="Enter password" fullWidth />
      <PasswordInput label="Password with strength meter" showStrength placeholder="Choose a strong password" fullWidth />
    </div>
}`,...(Se=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Te,Ne,we;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [q, setQ] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 400
    }}>
        <SearchInput placeholder="Search…" value={q} onChange={e => setQ(e.target.value)} onSearch={v => alert(\`Search: \${v}\`)} clearable fullWidth />
        <SearchInput placeholder="Debounced search (400ms)" debounce={400} onSearch={v => console.log('debounced:', v)} fullWidth />
      </div>;
  }
}`,...(we=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Ie,qe,De;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
      <MaskedInput label="Phone (US)" preset="phone-us" fullWidth />
      <MaskedInput label="Credit Card" preset="card" fullWidth />
      <MaskedInput label="Date (MM/DD/YYYY)" preset="date" fullWidth />
      <MaskedInput label="ZIP Code" preset="zip" fullWidth />
      <MaskedInput label="Custom mask (SSN)" preset="ssn" fullWidth />
    </div>
}`,...(De=(qe=O.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var ze,Fe,ke;Q.parameters={...Q.parameters,docs:{...(ze=Q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    label: 'Custom Field',
    placeholder: 'Type something…',
    size: 'md',
    fullWidth: true,
    disabled: false,
    error: ''
  }
}`,...(ke=(Fe=Q.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};const Oe=["Default","WithError","WithAdornments","Sizes","TextareaField","NumberStepper","NumberControls","PasswordFields","SearchFields","MaskedInputs","Custom"];export{Q as Custom,P as Default,O as MaskedInputs,Y as NumberControls,_ as NumberStepper,B as PasswordFields,H as SearchFields,V as Sizes,$ as TextareaField,L as WithAdornments,R as WithError,Oe as __namedExportsOrder,He as default};
