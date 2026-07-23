import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{B as s}from"./Badge-DU3qz2Z6.js";import{B as o}from"./Button-ZK112Wt6.js";import{C as y,a as g}from"./Card-DVb0QPTG.js";import{T as n}from"./Typography-C2jRilPu.js";import{T as u,u as f}from"./ThemeProvider-DMFfR7Eu.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./types-2dOUpm6k.js";const P={title:"Theme/ThemeProvider",tags:["autodocs"]},v=["light","dark","forest","ocean","professional","corporate"];function T(){const{theme:r,setTheme:x}=f();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:v.map(a=>e.jsx(o,{variant:r===a?"primary":"secondary",size:"sm",onClick:()=>x(a),children:a},a))}),e.jsx(y,{children:e.jsxs(g,{children:[e.jsxs(n,{variant:"h5",children:["Current theme: ",e.jsx(s,{variant:"primary",children:r})]}),e.jsxs(n,{variant:"body2",muted:!0,style:{marginTop:8},children:["The theme is applied via the ",e.jsx("code",{children:"data-av-theme"})," attribute on the root element."]})]})})]})}const t={render:()=>e.jsx(u,{defaultTheme:"light",children:e.jsx(T,{})})},i={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:v.map(r=>e.jsxs("div",{"data-av-theme":r,style:{padding:20,borderRadius:8,border:"1px solid var(--av-theme-color-border, #e5e7eb)",background:"var(--av-theme-color-surface, #fff)",color:"var(--av-theme-color-text-primary, #0f172a)"},children:[e.jsx(n,{variant:"label",style:{textTransform:"capitalize",marginBottom:12,display:"block"},children:r}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(o,{variant:"primary",size:"sm",children:"Primary"}),e.jsx(o,{variant:"secondary",size:"sm",children:"Secondary"}),e.jsx(o,{variant:"ghost",size:"sm",children:"Ghost"}),e.jsx(s,{variant:"success",children:"Active"}),e.jsx(s,{variant:"danger",children:"Error"}),e.jsx(s,{variant:"warning",children:"Warning"})]})]},r))})};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ThemeProvider defaultTheme="light">
      <ThemeSwitcherDemo />
    </ThemeProvider>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {THEMES.map(t => <div key={t} data-av-theme={t} style={{
      padding: 20,
      borderRadius: 8,
      border: '1px solid var(--av-theme-color-border, #e5e7eb)',
      background: 'var(--av-theme-color-surface, #fff)',
      color: 'var(--av-theme-color-text-primary, #0f172a)'
    }}>
          <Typography variant="label" style={{
        textTransform: 'capitalize',
        marginBottom: 12,
        display: 'block'
      }}>{t}</Typography>
          <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
            <Badge variant="success">Active</Badge>
            <Badge variant="danger">Error</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </div>)}
    </div>
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const C=["Default","AllThemes"];export{i as AllThemes,t as Default,C as __namedExportsOrder,P as default};
