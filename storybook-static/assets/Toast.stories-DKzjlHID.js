import{j as s}from"./jsx-runtime-Z5uAzocK.js";import{B as a}from"./Button-ZK112Wt6.js";import{r as p}from"./index-pP6CS22B.js";import{r as E}from"./index-Bvak3XBe.js";import{c as B}from"./types-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";function S({item:t,onDismiss:e}){return p.useEffect(()=>{if(t.duration===0)return;const n=setTimeout(()=>e(t.id),t.duration??4e3);return()=>clearTimeout(n)},[t.id,t.duration,e]),s.jsxs("div",{className:B("av-toast",(t.variant??t.type)&&`av-toast-${t.variant??t.type}`),role:"alert","aria-live":"assertive","aria-atomic":"true",children:[t.icon&&s.jsx("span",{className:"av-toast-icon",children:t.icon}),s.jsxs("div",{className:"av-toast-body",children:[t.title&&s.jsx("div",{className:"av-toast-title",children:t.title}),s.jsx("div",{className:"av-toast-message",children:t.message})]}),t.dismissible!==!1&&s.jsx("button",{type:"button",className:"av-toast-dismiss","aria-label":"Dismiss",onClick:()=>e(t.id),children:"×"})]})}let u=[];const r={show(t){const e={id:typeof crypto<"u"?crypto.randomUUID():String(Date.now()),...t};return u.forEach(n=>n(e)),e.id},success(t,e){return r.show({message:t,variant:"success",...e})},error(t,e){return r.show({message:t,variant:"danger",...e})},warning(t,e){return r.show({message:t,variant:"warning",...e})},info(t,e){return r.show({message:t,variant:"info",...e})}};function h({position:t="top-right",maxVisible:e=5}){const[n,g]=p.useState([]),b=p.useCallback(o=>{g(i=>i.filter(m=>m.id!==o))},[]);return p.useEffect(()=>{const o=i=>{g(m=>[i,...m].slice(0,e))};return u.push(o),()=>{u=u.filter(i=>i!==o)}},[e]),typeof document>"u"?null:E.createPortal(s.jsx("div",{className:B("av-toast-container",`av-toast-container-${t}`),children:n.map(o=>s.jsx(S,{item:o,onDismiss:b},o.id))}),document.body)}S.__docgenInfo={description:"",methods:[],displayName:"ToastItem",props:{item:{required:!0,tsType:{name:"ToastItem"},description:""},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const F={title:"Overlays/Toast",tags:["autodocs"]},c={render:()=>s.jsxs(s.Fragment,{children:[s.jsx(h,{}),s.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[s.jsx(a,{variant:"primary",onClick:()=>r.show({title:"Info",message:"This is an info toast.",type:"info"}),children:"Info"}),s.jsx(a,{variant:"success",onClick:()=>r.show({title:"Success!",message:"Changes saved.",type:"success"}),children:"Success"}),s.jsx(a,{variant:"warning",onClick:()=>r.show({title:"Warning",message:"Review your input.",type:"warning"}),children:"Warning"}),s.jsx(a,{variant:"danger",onClick:()=>r.show({title:"Error",message:"Something went wrong.",type:"error"}),children:"Error"}),s.jsx(a,{variant:"secondary",onClick:()=>r.show({title:"Persistent",type:"info",duration:0}),children:"Persistent"})]})]})},l={render:()=>s.jsxs(s.Fragment,{children:[s.jsx(h,{position:"top-right"}),s.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(t=>s.jsx(a,{size:"sm",variant:"secondary",onClick:()=>r.show({title:t,type:"info"}),children:t},t))})]})},d={name:"Custom (controls)",render:()=>s.jsxs(s.Fragment,{children:[s.jsx(h,{}),s.jsx(a,{variant:"primary",onClick:()=>r.show({title:"Custom Toast",message:"Adjust the controls to change props.",type:"info"}),children:"Show Toast"})]})};var f,y,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <>
      <ToastContainer />
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" onClick={() => toast.show({
        title: 'Info',
        message: 'This is an info toast.',
        type: 'info'
      })}>Info</Button>
        <Button variant="success" onClick={() => toast.show({
        title: 'Success!',
        message: 'Changes saved.',
        type: 'success'
      })}>Success</Button>
        <Button variant="warning" onClick={() => toast.show({
        title: 'Warning',
        message: 'Review your input.',
        type: 'warning'
      })}>Warning</Button>
        <Button variant="danger" onClick={() => toast.show({
        title: 'Error',
        message: 'Something went wrong.',
        type: 'error'
      })}>Error</Button>
        <Button variant="secondary" onClick={() => toast.show({
        title: 'Persistent',
        type: 'info',
        duration: 0
      })}>Persistent</Button>
      </div>
    </>
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,x,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <>
      <ToastContainer position="top-right" />
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {(['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const).map(p => <Button key={p} size="sm" variant="secondary" onClick={() => toast.show({
        title: p,
        type: 'info'
      })}>
            {p}
          </Button>)}
      </div>
    </>
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,T,k;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  render: () => <>
      <ToastContainer />
      <Button variant="primary" onClick={() => toast.show({
      title: 'Custom Toast',
      message: 'Adjust the controls to change props.',
      type: 'info'
    })}>
        Show Toast
      </Button>
    </>
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const R=["AllTypes","Positions","Custom"];export{c as AllTypes,d as Custom,l as Positions,R as __namedExportsOrder,F as default};
