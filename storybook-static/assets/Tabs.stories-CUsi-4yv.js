import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as G}from"./index-pP6CS22B.js";import{c as n}from"./types-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";function I({items:r,defaultOpen:c=[],openItems:o,onChange:i,multiple:x=!1,flush:p=!1,className:T="",...j}){const[w,S]=G.useState(new Set(c)),m=o?new Set(o):w;function A(s){const t=new Set(m);t.has(s)?t.delete(s):(x||t.clear(),t.add(s)),S(t),i==null||i(Array.from(t))}return e.jsx("div",{className:n("av-accordion",p&&"av-accordion-flush",T),...j,children:r.map(s=>{const t=m.has(s.id);return e.jsxs("div",{className:n("av-accordion-item",t&&"av-accordion-item-open"),children:[e.jsxs("button",{type:"button",className:"av-accordion-trigger","aria-expanded":t,"aria-controls":`av-acc-${s.id}`,disabled:s.disabled,onClick:()=>!s.disabled&&A(s.id),children:[s.label,e.jsx("span",{className:"av-accordion-icon","aria-hidden":"true"})]}),e.jsx("div",{id:`av-acc-${s.id}`,className:n("av-accordion-body",t&&"av-accordion-body-open"),role:"region","aria-labelledby":`av-acc-trigger-${s.id}`,children:e.jsx("div",{className:"av-accordion-content",children:s.children})})]},s.id)})})}I.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItemProps"}],raw:"AccordionItemProps[]"},description:""},defaultOpen:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},openItems:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled open state."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(openIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"openIds"}],return:{name:"void"}}},description:"Called when open state changes — receives full set of open IDs."},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},flush:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};function l({items:r,defaultTab:c,activeTab:o,onTabChange:i,variant:x="tabs",placement:p="top",fill:T=!1,justified:j=!1,className:w="",...S}){var N;const[m,A]=G.useState(c??((N=r[0])==null?void 0:N.id)??""),s=o??m;function t(a){A(a),i==null||i(a)}const K=n("av-tabs",`av-tabs-${x}`,T&&"av-tabs-fill",j&&"av-tabs-justified",p!=="top"&&`av-tabs-${p}`,w);return e.jsxs("div",{className:n("av-tabs-wrapper",`av-tabs-wrapper-${p}`),...S,children:[e.jsx("div",{role:"tablist",className:K,children:r.map(a=>e.jsxs("button",{type:"button",role:"tab",id:`av-tab-${a.id}`,"aria-controls":`av-tabpanel-${a.id}`,"aria-selected":s===a.id,className:n("av-tab",s===a.id&&"av-tab-active",a.disabled&&"av-tab-disabled"),disabled:a.disabled,tabIndex:s===a.id?0:-1,onClick:()=>!a.disabled&&t(a.id),children:[a.icon&&e.jsx("span",{className:"av-tab-icon",children:a.icon}),a.label]},a.id))}),e.jsx("div",{className:"av-tab-panels",children:r.map(a=>e.jsx("div",{id:`av-tabpanel-${a.id}`,role:"tabpanel","aria-labelledby":`av-tab-${a.id}`,className:n("av-tab-panel",s===a.id&&"av-tab-panel-active"),hidden:s!==a.id,children:a.content},a.id))})]})}l.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab definitions."},defaultTab:{required:!1,tsType:{name:"string"},description:"Initially active tab id."},activeTab:{required:!1,tsType:{name:"string"},description:"Controlled active tab."},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called on tab change."},variant:{required:!1,tsType:{name:"union",raw:"'tabs' | 'pills' | 'underline'",elements:[{name:"literal",value:"'tabs'"},{name:"literal",value:"'pills'"},{name:"literal",value:"'underline'"}]},description:"Visual style.",defaultValue:{value:"'tabs'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Tabs placement.",defaultValue:{value:"'top'",computed:!1}},fill:{required:!1,tsType:{name:"boolean"},description:"Stretch tabs to fill container.",defaultValue:{value:"false",computed:!1}},justified:{required:!1,tsType:{name:"boolean"},description:"Justify tabs evenly.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const ae={title:"Navigation/Tabs",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["tabs","pills","underline"]},placement:{control:"select",options:["top","bottom","left","right"]},fill:{control:"boolean"}}},d=[{id:"overview",label:"Overview",content:e.jsx("p",{children:"Overview content with key metrics and summary information."})},{id:"analytics",label:"Analytics",content:e.jsx("p",{children:"Detailed analytics charts and data breakdowns."})},{id:"settings",label:"Settings",content:e.jsx("p",{children:"Configuration options and preferences."})},{id:"billing",label:"Billing",disabled:!0,content:e.jsx("p",{children:"Billing information."})}],u={render:()=>e.jsx(l,{items:d})},v={render:()=>e.jsx(l,{items:d,variant:"pills"})},f={render:()=>e.jsx(l,{items:d,variant:"underline"})},b={render:()=>e.jsx(l,{items:d,fill:!0})},h={render:()=>e.jsx("div",{style:{display:"flex",gap:16},children:e.jsx(l,{items:d,placement:"left"})})},y={name:"Custom (controls)",args:{variant:"tabs",placement:"top",fill:!1},render:({variant:r,placement:c,fill:o})=>e.jsx(l,{items:d,variant:r,placement:c,fill:o})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(I,{items:[{id:"1",label:"What is @aravi1008/ui?",children:"A CSS-class-based design system with React and Vue wrappers."},{id:"2",label:"How do I install it?",children:"Run: npm install @aravi1008/ui @aravi1008/ui-react"},{id:"3",label:"Does it support dark mode?",children:'Yes! Add data-av-theme="dark" to your html element or use ThemeProvider.'}]}),e.jsx(I,{allowMultiple:!0,items:[{id:"a",label:"Allow multiple open",children:"Multiple panels can be open at the same time."},{id:"b",label:"Second panel",children:"Each panel is independently expandable."},{id:"c",label:"Third panel",children:"All panels can be open simultaneously."}]})]})};var q,V,E;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Tabs items={ITEMS} />
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var M,$,C;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Tabs items={ITEMS} variant="pills" />
}`,...(C=($=v.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var k,D,O;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Tabs items={ITEMS} variant="underline" />
}`,...(O=(D=f.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var P,_,R;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Tabs items={ITEMS} fill />
}`,...(R=(_=b.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var H,B,F;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}><Tabs items={ITEMS} placement="left" /></div>
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var U,W,Y;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    variant: 'tabs',
    placement: 'top',
    fill: false
  },
  render: ({
    variant,
    placement,
    fill
  }) => <Tabs items={ITEMS} variant={variant} placement={placement} fill={fill} />
}`,...(Y=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var J,L,z;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Accordion items={[{
      id: '1',
      label: 'What is @aravi1008/ui?',
      children: 'A CSS-class-based design system with React and Vue wrappers.'
    }, {
      id: '2',
      label: 'How do I install it?',
      children: 'Run: npm install @aravi1008/ui @aravi1008/ui-react'
    }, {
      id: '3',
      label: 'Does it support dark mode?',
      children: 'Yes! Add data-av-theme="dark" to your html element or use ThemeProvider.'
    }]} />
      <Accordion allowMultiple items={[{
      id: 'a',
      label: 'Allow multiple open',
      children: 'Multiple panels can be open at the same time.'
    }, {
      id: 'b',
      label: 'Second panel',
      children: 'Each panel is independently expandable.'
    }, {
      id: 'c',
      label: 'Third panel',
      children: 'All panels can be open simultaneously.'
    }]} />
    </div>
}`,...(z=(L=g.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const se=["Default","Pills","Underline","Filled","Vertical","Custom","AccordionVariants"];export{g as AccordionVariants,y as Custom,u as Default,b as Filled,v as Pills,f as Underline,h as Vertical,se as __namedExportsOrder,ae as default};
