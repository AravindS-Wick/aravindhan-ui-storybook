import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as s}from"./types-2dOUpm6k.js";import{T as t}from"./Typography-C2jRilPu.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function P({vertical:a=!1,label:r,variant:n="solid",className:o="",...l}){return r?e.jsx("div",{className:s("av-divider","av-divider-labeled",o),children:e.jsx("span",{className:"av-divider-label",children:r})}):e.jsx("hr",{className:s("av-divider",a&&"av-divider-vertical",n!=="solid"&&`av-divider-${n}`,o),"aria-hidden":"true",...l})}P.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{vertical:{required:!1,tsType:{name:"boolean"},description:"Vertical divider (for use inside flex rows).",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label in the middle."},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:"Color variant.",defaultValue:{value:"'solid'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function i({underline:a="hover",color:r="primary",external:n=!1,className:o="",children:l,...d}){const f=n?{target:"_blank",rel:"noopener noreferrer"}:{};return e.jsx("a",{className:s("av-link",`av-link-${r}`,a!=="hover"&&`av-link-underline-${a}`,o),...f,...d,children:l})}i.__docgenInfo={description:"",methods:[],displayName:"Link",props:{underline:{required:!1,tsType:{name:"union",raw:"'always' | 'hover' | 'none'",elements:[{name:"literal",value:"'always'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'none'"}]},description:"Underline behavior. Defaults to `'hover'`.",defaultValue:{value:"'hover'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'muted' | 'danger' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'inherit'"}]},description:"Color variant.",defaultValue:{value:"'primary'",computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"Open in new tab (sets target + rel automatically).",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["AnchorHTMLAttributes"]};function h({size:a="md",className:r="",children:n,...o}){return e.jsx("kbd",{className:s("av-kbd",a!=="md"&&`av-kbd-${a}`,r),...o,children:n})}h.__docgenInfo={description:"",methods:[],displayName:"Kbd",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size modifier.",defaultValue:{value:"'md'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function z({block:a=!1,lang:r,copyable:n=!1,className:o="",children:l,...d}){return a?e.jsxs("div",{className:s("av-code-block",o),children:[r&&e.jsx("span",{className:"av-code-lang",children:r}),n&&e.jsx("button",{type:"button",className:"av-code-copy","aria-label":"Copy code",onClick:()=>{var g;const f=typeof l=="string"?l:"";(g=navigator.clipboard)==null||g.writeText(f)},children:"Copy"}),e.jsx("pre",{"data-lang":r,...d,children:e.jsx("code",{className:"av-code",children:l})})]}):e.jsx("code",{className:s("av-code","av-code-inline",o),...d,children:l})}z.__docgenInfo={description:"",methods:[],displayName:"Code",props:{block:{required:!1,tsType:{name:"boolean"},description:"Render as a block (pre + code). Defaults to inline.",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"string"},description:"Programming language hint (adds data-lang)."},copyable:{required:!1,tsType:{name:"boolean"},description:"Copy button for block variant.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const U={title:"Typography/Typography",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body1","body2","subtitle1","subtitle2","caption","overline","label"]},muted:{control:"boolean"},align:{control:"select",options:["left","center","right","justify"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]},clamp:{control:"number"},gutterBottom:{control:"boolean"}}},c={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body1"}},p={render:()=>e.jsx("div",{children:["h1","h2","h3","h4","h5","h6"].map(a=>e.jsxs(t,{variant:a,children:[a," — Design System Heading"]},a))})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{variant:"body1",children:"body1 — Regular paragraph text used for main content areas."}),e.jsx(t,{variant:"body2",children:"body2 — Slightly smaller body text for secondary content."}),e.jsx(t,{variant:"caption",children:"caption — Used for image captions and small annotations."}),e.jsx(t,{variant:"overline",children:"overline — ALL-CAPS label above content."})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(i,{href:"#",children:"Default link"}),e.jsx(i,{href:"#",color:"primary",children:"Primary"}),e.jsx(i,{href:"#",underline:"always",children:"Always underlined"}),e.jsx(i,{href:"#",external:!0,children:"External ↗"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("div",{children:["Press ",e.jsx(h,{children:"⌘"})," + ",e.jsx(h,{children:"K"})," to open command palette"]}),e.jsxs("div",{children:["Inline ",e.jsx(z,{children:"const x = 42;"})," code snippet"]}),e.jsx(P,{}),e.jsx(t,{variant:"caption",children:"After divider"})]})},y={name:"Custom (controls)",args:{children:"The quick brown fox jumps over the lazy dog.",variant:"body1",muted:!1,align:"left",weight:"normal",gutterBottom:!1}};var x,b,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body1'
  }
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var T,k,L;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(v => <Typography key={v} variant={v}>{v} — Design System Heading</Typography>)}
    </div>
}`,...(L=(k=p.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var w,q,C;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Typography variant="body1">body1 — Regular paragraph text used for main content areas.</Typography>
      <Typography variant="body2">body2 — Slightly smaller body text for secondary content.</Typography>
      <Typography variant="caption">caption — Used for image captions and small annotations.</Typography>
      <Typography variant="overline">overline — ALL-CAPS label above content.</Typography>
    </div>
}`,...(C=(q=u.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var N,A,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Link href="#">Default link</Link>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" underline="always">Always underlined</Link>
      <Link href="#" external>External ↗</Link>
    </div>
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var S,V,_;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <div>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command palette</div>
      <div>Inline <Code>const x = 42;</Code> code snippet</div>
      <Divider />
      <Typography variant="caption">After divider</Typography>
    </div>
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,I,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body1',
    muted: false,
    align: 'left',
    weight: 'normal',
    gutterBottom: false
  }
}`,...(K=(I=y.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};const O=["Default","AllHeadings","BodyText","Links","Inline","Custom"];export{p as AllHeadings,u as BodyText,y as Custom,c as Default,v as Inline,m as Links,O as __namedExportsOrder,U as default};
