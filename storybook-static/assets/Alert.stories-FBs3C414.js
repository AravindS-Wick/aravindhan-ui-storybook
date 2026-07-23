import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as m}from"./types-2dOUpm6k.js";import{B as v}from"./Badge-DU3qz2Z6.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function u({color:a="info",appearance:s="soft",title:r,dismissible:l=!1,onDismiss:i,icon:n,className:o="",children:d,...p}){const c=m("av-alert",`av-alert-appearance-${s}`,`av-alert-color-${a}`,o);return e.jsxs("div",{className:c,role:"alert",...p,children:[n&&e.jsx("span",{className:"av-alert-icon",children:n}),e.jsxs("div",{className:"av-alert-body",children:[r&&e.jsx("div",{className:"av-alert-title",children:r}),d&&e.jsx("div",{className:"av-alert-message",children:d})]}),l&&e.jsx("button",{type:"button",className:"av-alert-dismiss","aria-label":"Dismiss",onClick:i,children:"×"})]})}u.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"The semantic color tint of the alert. Defaults to `'info'`.",defaultValue:{value:"'info'",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'soft' | 'solid' | 'outline' | 'left-accent'",elements:[{name:"literal",value:"'soft'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'left-accent'"}]},description:"The visual appearance of the alert. Defaults to `'soft'`.",defaultValue:{value:"'soft'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title rendered above the message."},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be dismissed (renders an × button).",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon rendered on the left side."},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};function t({label:a,color:s="primary",size:r="md",outlined:l=!1,icon:i,onDelete:n,avatar:o,className:d="",children:p,...c}){return e.jsxs("span",{className:m("av-chip",`av-chip-${s}`,l&&"av-chip-outlined",r!=="md"&&`av-chip-${r}`,c.onClick&&"av-chip-clickable",d),role:c.onClick?"button":void 0,tabIndex:c.onClick?0:void 0,...c,children:[o&&e.jsx("span",{className:"av-chip-avatar",children:o}),i&&e.jsx("span",{className:"av-chip-icon",children:i}),e.jsx("span",{className:"av-chip-label",children:a??p}),n&&e.jsx("button",{type:"button",className:"av-chip-delete","aria-label":"Remove",onClick:$=>{$.stopPropagation(),n()},children:"×"})]})}function H({gap:a="sm",wrap:s=!0,className:r="",children:l,...i}){return e.jsx("div",{className:m("av-chip-group",a!=="sm"&&`av-chip-group-gap-${a}`,s&&"av-chip-group-wrap",r),...i,children:l})}t.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"Label text (or pass children)."},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color variant. Defaults to `'primary'`.",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size modifier. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},outlined:{required:!1,tsType:{name:"boolean"},description:"Outlined style.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon."},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Show delete button."},avatar:{required:!1,tsType:{name:"ReactNode"},description:"Avatar element before label."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:"Clickable chip — adds button role/style."},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};H.__docgenInfo={description:"",methods:[],displayName:"ChipGroup",props:{gap:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Gap size.",defaultValue:{value:"'sm'",computed:!1}},wrap:{required:!1,tsType:{name:"boolean"},description:"Wrap chips.",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function M({color:a="primary",size:s="md",outlined:r,icon:l,onClose:i,dot:n,className:o="",children:d,...p}){return e.jsxs("span",{className:m("av-tag",`av-tag-${a}`,r&&"av-tag-outlined",s!=="md"&&`av-tag-${s}`,o),...p,children:[n&&e.jsx("span",{className:`av-tag-dot av-tag-dot-${a}`,"aria-hidden":"true"}),l&&e.jsx("span",{className:"av-tag-icon",children:l}),d,i&&e.jsx("button",{type:"button",className:"av-tag-close","aria-label":"Remove tag",onClick:i,children:"×"})]})}function O({wrap:a=!0,className:s="",children:r,...l}){return e.jsx("div",{className:m("av-tag-group",a&&"av-tag-group-wrap",s),...l,children:r})}M.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color variant. Defaults to `'primary'`.",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size modifier. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},outlined:{required:!1,tsType:{name:"boolean"},description:"Bordered/outlined style."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Dismiss handler."},dot:{required:!1,tsType:{name:"boolean"},description:"Dot indicator before label."},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};O.__docgenInfo={description:"",methods:[],displayName:"TagGroup",props:{wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const F={title:"Feedback/Alert",component:u,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"]},dismissible:{control:"boolean"}}},f={args:{children:"This is an informational alert message.",variant:"info"}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(u,{variant:"info",title:"Info",children:"Something you should know about this operation."}),e.jsx(u,{variant:"success",title:"Success",dismissible:!0,children:"Your changes have been saved successfully!"}),e.jsx(u,{variant:"warning",title:"Warning",children:"Please review before proceeding."}),e.jsx(u,{variant:"danger",title:"Error",dismissible:!0,children:"Something went wrong. Please try again."})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["primary","secondary","success","danger","warning","info"].map(a=>e.jsx(v,{variant:a,children:a},a))}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(v,{pill:!0,variant:"success",children:"Active"}),e.jsx(v,{pill:!0,variant:"danger",children:"Offline"}),e.jsx(v,{pill:!0,variant:"warning",children:"Pending"})]})]})},y={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:e.jsxs(H,{children:[e.jsx(t,{color:"secondary",children:"React"}),e.jsx(t,{color:"success",onDelete:()=>{},children:"TypeScript"}),e.jsx(t,{color:"primary",children:"Selected"}),e.jsx(t,{color:"warning",outlined:!0,children:"Outlined"}),e.jsx(t,{color:"danger",children:"Error"}),e.jsx(t,{color:"secondary","aria-disabled":"true",style:{opacity:.5,pointerEvents:"none"},children:"Disabled"})]})})},x={render:()=>e.jsx(O,{children:["design-system","ui","react","typescript","open-source"].map(a=>e.jsx(M,{children:a},a))})},b={name:"Custom (controls)",args:{children:"This is a customizable alert. Use the controls panel to change props.",variant:"info",dismissible:!1}};var T,w,j;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'This is an informational alert message.',
    variant: 'info'
  }
}`,...(j=(w=f.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var C,N,q;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Alert variant="info" title="Info">Something you should know about this operation.</Alert>
      <Alert variant="success" title="Success" dismissible>Your changes have been saved successfully!</Alert>
      <Alert variant="warning" title="Warning">Please review before proceeding.</Alert>
      <Alert variant="danger" title="Error" dismissible>Something went wrong. Please try again.</Alert>
    </div>
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var D,S,A;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {(['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const).map(v => <Badge key={v} variant={v}>{v}</Badge>)}
      </div>
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Badge pill variant="success">Active</Badge>
        <Badge pill variant="danger">Offline</Badge>
        <Badge pill variant="warning">Pending</Badge>
      </div>
    </div>
}`,...(A=(S=h.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var k,V,B;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <ChipGroup>
        <Chip color="secondary">React</Chip>
        <Chip color="success" onDelete={() => {}}>TypeScript</Chip>
        <Chip color="primary">Selected</Chip>
        <Chip color="warning" outlined>Outlined</Chip>
        <Chip color="danger">Error</Chip>
        <Chip color="secondary" aria-disabled="true" style={{
        opacity: 0.5,
        pointerEvents: 'none'
      }}>Disabled</Chip>
      </ChipGroup>
    </div>
}`,...(B=(V=y.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var R,E,_;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <TagGroup>
      {['design-system', 'ui', 'react', 'typescript', 'open-source'].map(t => <Tag key={t}>{t}</Tag>)}
    </TagGroup>
}`,...(_=(E=x.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var G,I,L;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    children: 'This is a customizable alert. Use the controls panel to change props.',
    variant: 'info',
    dismissible: false
  }
}`,...(L=(I=b.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const J=["Default","AllVariants","Badges","Chips","Tags","Custom"];export{g as AllVariants,h as Badges,y as Chips,b as Custom,f as Default,x as Tags,J as __namedExportsOrder,F as default};
