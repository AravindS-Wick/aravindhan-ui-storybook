import{j as s}from"./jsx-runtime-Z5uAzocK.js";import{A as a,a as C}from"./Avatar-BCu4Ly3h.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./types-2dOUpm6k.js";const W={title:"Data Display/Avatar",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},shape:{control:"select",options:["circle","square"]},color:{control:"select",options:["primary","secondary","success","danger","warning","info"]}}},i={args:{initials:"AS",size:"md"}},e={render:()=>s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[s.jsx(a,{initials:"JD",shape:"circle",size:"lg"}),s.jsx(a,{initials:"BK",shape:"square",size:"lg",color:"secondary"}),s.jsx(a,{initials:"AM",size:"lg",color:"success"})]})},r={render:()=>s.jsx("div",{style:{display:"flex",gap:8,alignItems:"center"},children:["xs","sm","md","lg","xl"].map(o=>s.jsx(a,{initials:"AV",size:o},o))})},t={render:()=>s.jsxs(C,{max:4,children:[s.jsx(a,{initials:"AL"}),s.jsx(a,{initials:"BO"}),s.jsx(a,{initials:"CA"}),s.jsx(a,{initials:"DA"}),s.jsx(a,{initials:"EV"}),s.jsx(a,{initials:"FR"})]})},n={render:()=>s.jsxs("div",{style:{display:"flex",gap:12},children:[s.jsx(a,{initials:"ON",status:"online",size:"lg"}),s.jsx(a,{initials:"BU",status:"busy",size:"lg"}),s.jsx(a,{initials:"AW",status:"away",size:"lg"}),s.jsx(a,{initials:"OF",status:"offline",size:"lg"})]})},l={name:"Custom (controls)",args:{initials:"AS",size:"md",shape:"circle",color:"primary"}};var c,p,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    initials: 'AS',
    size: 'md'
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Avatar initials="JD" shape="circle" size="lg" />
      <Avatar initials="BK" shape="square" size="lg" color="secondary" />
      <Avatar initials="AM" size="lg" color="success" />
    </div>
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,A,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <Avatar key={s} initials="AV" size={s} />)}
    </div>
}`,...(v=(A=r.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var y,z,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4}>
      <Avatar initials="AL" />
      <Avatar initials="BO" />
      <Avatar initials="CA" />
      <Avatar initials="DA" />
      <Avatar initials="EV" />
      <Avatar initials="FR" />
    </AvatarGroup>
}`,...(j=(z=t.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var f,S,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Avatar initials="ON" status="online" size="lg" />
      <Avatar initials="BU" status="busy" size="lg" />
      <Avatar initials="AW" status="away" size="lg" />
      <Avatar initials="OF" status="offline" size="lg" />
    </div>
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var D,O,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    initials: 'AS',
    size: 'md',
    shape: 'circle',
    color: 'primary'
  }
}`,...(B=(O=l.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const q=["Default","Variants","Sizes","Group","WithStatus","Custom"];export{l as Custom,i as Default,t as Group,r as Sizes,e as Variants,n as WithStatus,q as __namedExportsOrder,W as default};
