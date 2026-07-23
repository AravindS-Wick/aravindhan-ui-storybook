import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{A as E}from"./Avatar-BCu4Ly3h.js";import{B as n}from"./Button-ZK112Wt6.js";import{C as o,b as B,a as p,c as P}from"./Card-DVb0QPTG.js";import{T as a}from"./Typography-C2jRilPu.js";import{c as D}from"./types-2dOUpm6k.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t({elevation:r=1,radius:c="md",outlined:u=!1,transparent:w=!1,as:S="div",className:W="",children:k,...z}){return e.jsx(S,{className:D("av-paper",!u&&r>0&&`av-shadow-${r}`,u&&"av-paper-outlined",c!=="md"&&`av-rounded-${c}`,w&&"av-paper-transparent",W),...z,children:k})}t.__docgenInfo={description:"",methods:[],displayName:"Paper",props:{elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"Elevation level 0-5. Defaults to 1.",defaultValue:{value:"1",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"Border radius variant. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},outlined:{required:!1,tsType:{name:"boolean"},description:"Outlined instead of shadow.",defaultValue:{value:"false",computed:!1}},transparent:{required:!1,tsType:{name:"boolean"},description:"Remove background.",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"ElementType"},description:"Rendered element. Defaults to `'div'`.",defaultValue:{value:"'div'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const U={title:"Layout/Card",component:o,tags:["autodocs"],argTypes:{bordered:{control:"boolean",description:"Add a visible border"},hoverable:{control:"boolean",description:"Add a hover shadow effect"},flush:{control:"boolean",description:"Remove default padding from card body"}}},i={render:()=>e.jsxs(o,{style:{maxWidth:360},children:[e.jsx(B,{children:e.jsx(a,{variant:"h5",children:"Card Title"})}),e.jsx(p,{children:e.jsx(a,{variant:"body2",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})}),e.jsxs(P,{children:[e.jsx(n,{variant:"primary",size:"sm",children:"Action"}),e.jsx(n,{variant:"ghost",size:"sm",children:"Cancel"})]})]})},s={render:()=>e.jsx(o,{style:{maxWidth:300,textAlign:"center",padding:"24px 16px"},children:e.jsx(p,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(E,{initials:"AS",size:"xl"}),e.jsx(a,{variant:"h5",children:"Aravindhan S"}),e.jsx(a,{variant:"body2",muted:!0,children:"Senior Frontend Engineer"}),e.jsx(n,{variant:"primary",size:"sm",children:"Follow"})]})})})},d={name:"Paper – Elevations",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(a,{variant:"overline",muted:!0,children:"Shadow elevations (0–4)"}),e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[0,1,2,3,4].map(r=>e.jsxs(t,{elevation:r,style:{padding:"20px 24px",minWidth:100,textAlign:"center"},children:[e.jsx(a,{variant:"caption",muted:!0,children:"elevation"}),e.jsx(a,{variant:"h5",children:r})]},r))}),e.jsx(a,{variant:"overline",muted:!0,children:"Outlined variant"}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(t,{outlined:!0,style:{padding:16,minWidth:140},children:e.jsx(a,{variant:"body2",children:"Outlined paper — border, no shadow. Use for subtle containers on non-white backgrounds."})}),e.jsx(t,{elevation:0,style:{padding:16,minWidth:140,background:"var(--av-color-surface-raised)"},children:e.jsx(a,{variant:"body2",children:"Elevation 0 — flat surface. Use inside modals or cards."})})]}),e.jsx(a,{variant:"overline",muted:!0,children:"As semantic elements"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsxs(t,{as:"section",elevation:2,style:{padding:16,flex:1},children:[e.jsx(a,{variant:"h6",children:"Section"}),e.jsx(a,{variant:"body2",muted:!0,children:"Paper renders as any HTML element via the `as` prop."})]}),e.jsxs(t,{as:"article",elevation:2,radius:"lg",style:{padding:16,flex:1},children:[e.jsx(a,{variant:"h6",children:"Article (lg radius)"}),e.jsx(a,{variant:"body2",muted:!0,children:"Border radius is independently controllable."})]})]})]})},l={name:"Custom (controls)",args:{bordered:!1,hoverable:!1,flush:!1},render:r=>e.jsxs(o,{...r,style:{maxWidth:360,padding:16},children:[e.jsx(B,{children:e.jsx(a,{variant:"h5",children:"Custom Card"})}),e.jsx(p,{children:e.jsx(a,{variant:"body2",children:"Adjust the controls panel to explore card variants."})}),e.jsxs(P,{children:[e.jsx(n,{variant:"primary",size:"sm",children:"Action"}),e.jsx(n,{variant:"ghost",size:"sm",children:"Cancel"})]})]})};var m,y,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 360
  }}>
      <CardHeader>
        <Typography variant="h5">Card Title</Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="body2">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</Typography>
      </CardBody>
      <CardFooter>
        <Button variant="primary" size="sm">Action</Button>
        <Button variant="ghost" size="sm">Cancel</Button>
      </CardFooter>
    </Card>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,x,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 300,
    textAlign: 'center',
    padding: '24px 16px'
  }}>
      <CardBody>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}>
          <Avatar initials="AS" size="xl" />
          <Typography variant="h5">Aravindhan S</Typography>
          <Typography variant="body2" muted>Senior Frontend Engineer</Typography>
          <Button variant="primary" size="sm">Follow</Button>
        </div>
      </CardBody>
    </Card>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,j,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Paper – Elevations',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Typography variant="overline" muted>Shadow elevations (0–4)</Typography>
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }}>
        {([0, 1, 2, 3, 4] as const).map(e => <Paper key={e} elevation={e} style={{
        padding: '20px 24px',
        minWidth: 100,
        textAlign: 'center'
      }}>
            <Typography variant="caption" muted>elevation</Typography>
            <Typography variant="h5">{e}</Typography>
          </Paper>)}
      </div>

      <Typography variant="overline" muted>Outlined variant</Typography>
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>
        <Paper outlined style={{
        padding: 16,
        minWidth: 140
      }}>
          <Typography variant="body2">Outlined paper — border, no shadow. Use for subtle containers on non-white backgrounds.</Typography>
        </Paper>
        <Paper elevation={0} style={{
        padding: 16,
        minWidth: 140,
        background: 'var(--av-color-surface-raised)'
      }}>
          <Typography variant="body2">Elevation 0 — flat surface. Use inside modals or cards.</Typography>
        </Paper>
      </div>

      <Typography variant="overline" muted>As semantic elements</Typography>
      <div style={{
      display: 'flex',
      gap: 16
    }}>
        <Paper as="section" elevation={2} style={{
        padding: 16,
        flex: 1
      }}>
          <Typography variant="h6">Section</Typography>
          <Typography variant="body2" muted>Paper renders as any HTML element via the \`as\` prop.</Typography>
        </Paper>
        <Paper as="article" elevation={2} radius="lg" style={{
        padding: 16,
        flex: 1
      }}>
          <Typography variant="h6">Article (lg radius)</Typography>
          <Typography variant="body2" muted>Border radius is independently controllable.</Typography>
        </Paper>
      </div>
    </div>
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var b,C,A;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    bordered: false,
    hoverable: false,
    flush: false
  },
  render: args => <Card {...args} style={{
    maxWidth: 360,
    padding: 16
  }}>
      <CardHeader><Typography variant="h5">Custom Card</Typography></CardHeader>
      <CardBody><Typography variant="body2">Adjust the controls panel to explore card variants.</Typography></CardBody>
      <CardFooter>
        <Button variant="primary" size="sm">Action</Button>
        <Button variant="ghost" size="sm">Cancel</Button>
      </CardFooter>
    </Card>
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const _=["Default","ProfileCard","PaperVariants","Custom"];export{l as Custom,i as Default,d as PaperVariants,s as ProfileCard,_ as __namedExportsOrder,U as default};
