import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as z}from"./index-pP6CS22B.js";import{B as t}from"./Button-ZK112Wt6.js";import{c as q}from"./types-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";function S({appearance:r="ghost",color:n="secondary",size:l="md",loading:o=!1,rounded:s=!1,className:i="",disabled:m,children:u,...p}){return e.jsx("button",{type:"button",className:q("av-btn","av-btn-icon",`av-btn-${r}-${n}`,l!=="md"&&`av-btn-${l}`,s&&"av-rounded-full",o&&"av-btn-loading",i),disabled:m||o,...p,children:o?e.jsx("span",{className:"av-spinner av-spinner-border av-spinner-sm",role:"status","aria-hidden":"true"}):u})}S.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label (required)."},children:{required:!0,tsType:{name:"ReactNode"},description:"Icon content."},appearance:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'ghost' | 'link'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'link'"}]},description:"Visual appearance. Defaults to 'ghost'.",defaultValue:{value:"'ghost'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Semantic color theme. Defaults to 'secondary'.",defaultValue:{value:"'secondary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size modifier. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner.",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"Rounded circle shape.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};function k({size:r,vertical:n=!1,fluid:l=!1,className:o="",children:s,...i}){return e.jsx("div",{role:"group",className:q("av-btn-group",n&&"av-btn-group-vertical",l&&"av-btn-group-fluid",r&&`av-btn-group-${r}`,o),...i,children:s})}k.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size applied to all buttons."},vertical:{required:!1,tsType:{name:"boolean"},description:"Vertical layout.",defaultValue:{value:"false",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"Stretch to fill container.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function w({selected:r,onChange:n,value:l,color:o="primary",size:s="md",className:i="",children:m,...u}){const[p,V]=z.useState(!1),d=r??p;function I(){const a=!d;V(a),n==null||n(a)}return e.jsx("button",{type:"button",role:"button","aria-pressed":d,"data-value":l,className:q("av-toggle-btn",d&&`av-toggle-btn-active av-toggle-btn-${o}`,s!=="md"&&`av-toggle-btn-${s}`,i),onClick:I,...u,children:m})}function te({value:r,defaultValue:n=[],onChange:l,exclusive:o=!1,size:s,color:i="primary",className:m="",children:u}){const[p,V]=z.useState(n),d=r??p;function I(a,g){let c;o?c=g?[a]:[]:c=g?[...d,a]:d.filter(le=>le!==a),V(c),l==null||l(c)}return e.jsx("div",{role:"group",className:q("av-toggle-btn-group",s&&`av-toggle-btn-group-${s}`,m),children:Array.isArray(u)?u.map(a=>{var g;return(g=a==null?void 0:a.props)!=null&&g.value?{...a,props:{...a.props,color:i,size:s??a.props.size,selected:d.includes(a.props.value),onChange:c=>I(a.props.value,c)}}:a}):u})}w.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{selected:{required:!1,tsType:{name:"boolean"},description:"Current pressed state."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:"Called on toggle."},value:{required:!1,tsType:{name:"string"},description:"Value identifier (used in ToggleButtonGroup)."},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color when selected. Defaults to `'primary'`.",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size modifier. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};te.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroup",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Selected values (controlled)."},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected values (uncontrolled).",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:"Called with new selection array."},exclusive:{required:!1,tsType:{name:"boolean"},description:"Allow only one selected at a time.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size for all buttons."},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Color for selected buttons.",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ce={title:"Inputs/Button",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","warning","success","info","ghost","link","outline"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},block:{control:"boolean"}}},v={args:{children:"Button",variant:"primary"}},f={render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["primary","secondary","danger","warning","success","info","ghost","outline"].map(r=>e.jsx(t,{variant:r,children:r},r))})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"})]})},x={args:{children:"Saving…",loading:!0,variant:"primary"}},B={args:{children:"Block Button",block:!0,variant:"primary"}},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(S,{"aria-label":"Search",children:e.jsx("span",{children:"🔍"})}),e.jsx(S,{"aria-label":"Settings",variant:"secondary",children:e.jsx("span",{children:"⚙️"})}),e.jsx(S,{"aria-label":"Delete",variant:"danger",children:e.jsx("span",{children:"🗑"})})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(k,{children:[e.jsx(t,{variant:"primary",children:"Left"}),e.jsx(t,{variant:"primary",children:"Center"}),e.jsx(t,{variant:"primary",children:"Right"})]}),e.jsxs(k,{vertical:!0,children:[e.jsx(t,{variant:"secondary",children:"Top"}),e.jsx(t,{variant:"secondary",children:"Middle"}),e.jsx(t,{variant:"secondary",children:"Bottom"})]})]})},T={render:()=>{const[r,n]=z.useState(["bold"]);return e.jsxs(te,{value:r,onChange:n,children:[e.jsx(w,{value:"bold",children:e.jsx("b",{children:"B"})}),e.jsx(w,{value:"italic",children:e.jsx("i",{children:"I"})}),e.jsx(w,{value:"underline",children:e.jsx("u",{children:"U"})})]})}},j={name:"Custom (controls)",args:{children:"My Button",variant:"primary",size:"md",loading:!1,disabled:!1,block:!1}};var N,G,D;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...(D=(G=v.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var C,A,_;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'ghost', 'outline'] as const).map(v => <Button key={v} variant={v}>{v}</Button>)}
    </div>
}`,...(_=(A=f.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var L,M,$;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...($=(M=y.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var R,E,O;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Saving…',
    loading: true,
    variant: 'primary'
  }
}`,...(O=(E=x.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var U,W,H;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'Block Button',
    block: true,
    variant: 'primary'
  }
}`,...(H=(W=B.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var F,J,K;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      <IconButton aria-label="Search"><span>🔍</span></IconButton>
      <IconButton aria-label="Settings" variant="secondary"><span>⚙️</span></IconButton>
      <IconButton aria-label="Delete" variant="danger"><span>🗑</span></IconButton>
    </div>
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <ButtonGroup>
        <Button variant="primary">Left</Button>
        <Button variant="primary">Center</Button>
        <Button variant="primary">Right</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button variant="secondary">Top</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Bottom</Button>
      </ButtonGroup>
    </div>
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['bold']);
    return <ToggleButtonGroup value={value} onChange={setValue}>
        <ToggleButton value="bold"><b>B</b></ToggleButton>
        <ToggleButton value="italic"><i>I</i></ToggleButton>
        <ToggleButton value="underline"><u>U</u></ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,ne;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    children: 'My Button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    block: false
  }
}`,...(ne=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const me=["Default","AllVariants","Sizes","Loading","BlockButton","IconButtons","Groups","Toggle","Custom"];export{f as AllVariants,B as BlockButton,j as Custom,v as Default,h as Groups,b as IconButtons,x as Loading,y as Sizes,T as Toggle,me as __namedExportsOrder,ce as default};
