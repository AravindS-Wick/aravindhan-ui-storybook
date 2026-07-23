import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{B as s}from"./Button-ZK112Wt6.js";import{r as a}from"./index-pP6CS22B.js";import{r as _}from"./index-Bvak3XBe.js";import{c as O}from"./types-2dOUpm6k.js";import{T as z}from"./TextField-B4CvjsEL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FormProvider-B64XWQQ7.js";const S=["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])',"details > summary"].join(", ");function G(o){const n=a.useRef(null),t=a.useRef(null);return a.useEffect(()=>{if(!o||!n.current)return;t.current=document.activeElement;const r=n.current,i=r.querySelector(S);i==null||i.focus();function d(l){if(l.key!=="Tab")return;const c=Array.from(r.querySelectorAll(S));if(c.length===0){l.preventDefault();return}const h=c[0],x=c[c.length-1];l.shiftKey?document.activeElement===h&&(l.preventDefault(),x.focus()):document.activeElement===x&&(l.preventDefault(),h.focus())}return r.addEventListener("keydown",d),()=>{var l;r.removeEventListener("keydown",d),(l=t.current)==null||l.focus()}},[o]),n}function w({open:o,onClose:n,placement:t="right",size:r="md",title:i,footer:d,staticBackdrop:l=!1,hideCloseButton:c=!1,className:h="",children:x,transitionDuration:v=250}){const[L,C]=a.useState(o),[g,y]=a.useState(!1),E=G(o);return a.useEffect(()=>{if(o){C(!0);const u=requestAnimationFrame(()=>y(!0));return()=>cancelAnimationFrame(u)}else{y(!1);const u=setTimeout(()=>C(!1),v);return()=>clearTimeout(u)}},[o,v]),a.useEffect(()=>{if(!o)return;const u=document.body.style.overflow;document.body.style.overflow="hidden";const m=j=>{j.key==="Escape"&&!l&&n()};return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m),document.body.style.overflow=u}},[o,n,l]),L?_.createPortal(e.jsx("div",{className:O("av-drawer-backdrop",g&&"av-drawer-backdrop-show"),role:"presentation",onClick:u=>{!l&&u.target===u.currentTarget&&n()},children:e.jsxs("div",{ref:E,className:O("av-drawer",`av-drawer-${t}`,r!=="md"&&`av-drawer-${r}`,g&&"av-drawer-open",h),role:"dialog","aria-modal":"true","aria-labelledby":i?"av-drawer-title":void 0,children:[i&&e.jsxs("div",{className:"av-drawer-header",children:[e.jsx("h5",{className:"av-drawer-title",id:"av-drawer-title",children:i}),!c&&e.jsx("button",{type:"button",className:"av-drawer-close","aria-label":"Close drawer",onClick:n,children:"×"})]}),e.jsx("div",{className:"av-drawer-body",children:x}),d&&e.jsx("div",{className:"av-drawer-footer",children:d})]})}),document.body):null}function f({open:o,onClose:n,title:t,footer:r,size:i="md",staticBackdrop:d=!1,hideCloseButton:l=!1,className:c="",children:h,"aria-label":x,transitionDuration:v=200}){const[L,C]=a.useState(o),[g,y]=a.useState(!1),E=G(o);if(a.useEffect(()=>{if(o){C(!0);const m=requestAnimationFrame(()=>y(!0));return()=>cancelAnimationFrame(m)}else{y(!1);const m=setTimeout(()=>C(!1),v);return()=>clearTimeout(m)}},[o,v]),a.useEffect(()=>{if(!o)return;const m=document.body.style.overflow;document.body.style.overflow="hidden";const j=H=>{H.key==="Escape"&&!d&&n()};return document.addEventListener("keydown",j),()=>{document.removeEventListener("keydown",j),document.body.style.overflow=m}},[o,n,d]),!L)return null;const u=t?"av-modal-title":void 0;return _.createPortal(e.jsx("div",{className:O("av-modal-backdrop",g&&"av-modal-backdrop-show"),onClick:m=>{!d&&m.target===m.currentTarget&&n()},role:"presentation",children:e.jsxs("div",{ref:E,className:O("av-modal-dialog",i!=="md"&&`av-modal-${i}`,g&&"av-modal-open",c),role:"dialog","aria-modal":"true","aria-labelledby":u,"aria-label":t?void 0:x,children:[t&&e.jsxs("div",{className:"av-modal-header",children:[e.jsx("h5",{className:"av-modal-title",id:"av-modal-title",children:t}),!l&&e.jsx("button",{type:"button",className:"av-modal-close","aria-label":"Close modal",onClick:n,children:"×"})]}),e.jsx("div",{className:"av-modal-body",children:h}),r&&e.jsx("div",{className:"av-modal-footer",children:r})]})}),document.body)}function p(o=!1){const[n,t]=a.useState(o),r=a.useCallback(()=>t(!0),[]),i=a.useCallback(()=>t(!1),[]),d=a.useCallback(()=>t(c=>!c),[]),l=a.useCallback(c=>t(c),[]);return{isOpen:n,open:r,close:i,toggle:d,onOpenChange:l}}const se={title:"Overlays/Modal",component:f,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","fullscreen"]}}},b={render:()=>{const{isOpen:o,open:n,close:t}=p();return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",onClick:n,children:"Open Modal"}),e.jsx(f,{open:o,onClose:t,title:"Confirm action",footer:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",onClick:t,children:"Confirm"}),e.jsx(s,{variant:"ghost",onClick:t,children:"Cancel"})]}),children:e.jsx("p",{children:"Are you sure you want to proceed? This action cannot be undone."})})]})}},k={render:()=>{const o=p(),n=p(),t=p(),r=p();return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{size:"sm",onClick:o.open,children:"Small"}),e.jsx(s,{size:"sm",onClick:n.open,children:"Medium"}),e.jsx(s,{size:"sm",onClick:t.open,children:"Large"}),e.jsx(s,{size:"sm",onClick:r.open,children:"XLarge"}),e.jsx(f,{open:o.isOpen,onClose:o.close,title:"Small Modal",size:"sm",children:e.jsx("p",{children:"Small modal content"})}),e.jsx(f,{open:n.isOpen,onClose:n.close,title:"Medium Modal",size:"md",children:e.jsx("p",{children:"Medium modal content"})}),e.jsx(f,{open:t.isOpen,onClose:t.close,title:"Large Modal",size:"lg",children:e.jsx("p",{children:"Large modal content"})}),e.jsx(f,{open:r.isOpen,onClose:r.close,title:"XLarge Modal",size:"xl",children:e.jsx("p",{children:"XLarge modal content"})})]})}},D={render:()=>{const{isOpen:o,open:n,close:t}=p();return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",onClick:n,children:"New User"}),e.jsx(f,{open:o,onClose:t,title:"Create User",footer:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",children:"Create"}),e.jsx(s,{variant:"ghost",onClick:t,children:"Cancel"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(z,{label:"Full name",placeholder:"Jane Doe",fullWidth:!0}),e.jsx(z,{label:"Email",type:"email",placeholder:"jane@example.com",fullWidth:!0})]})})]})}},M={name:"Custom (controls)",args:{size:"md"},render:o=>{const{isOpen:n,open:t,close:r}=p();return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",onClick:t,children:"Open Modal"}),e.jsx(f,{...o,open:n,onClose:r,title:"Custom Modal",footer:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",onClick:r,children:"Confirm"}),e.jsx(s,{variant:"ghost",onClick:r,children:"Cancel"})]}),children:e.jsx("p",{children:"Use the controls panel to change the modal size and other props."})})]})}},B={render:()=>{const o=p(),n=p(),t=p(),r=p();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(s,{onClick:o.open,children:"Right Drawer"}),e.jsx(s,{onClick:n.open,children:"Left Drawer"}),e.jsx(s,{onClick:t.open,children:"Top Drawer"}),e.jsx(s,{onClick:r.open,children:"Bottom Drawer"}),e.jsx(w,{open:o.isOpen,onClose:o.close,title:"Right Drawer",placement:"right",children:e.jsx("p",{children:"Right side content"})}),e.jsx(w,{open:n.isOpen,onClose:n.close,title:"Left Drawer",placement:"left",children:e.jsx("p",{children:"Left side content"})}),e.jsx(w,{open:t.isOpen,onClose:t.close,title:"Top Drawer",placement:"top",children:e.jsx("p",{children:"Top content"})}),e.jsx(w,{open:r.isOpen,onClose:r.close,title:"Bottom Drawer",placement:"bottom",children:e.jsx("p",{children:"Bottom content"})})]})}};var T,F,N;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      open,
      close
    } = useDisclosure();
    return <>
        <Button variant="primary" onClick={open}>Open Modal</Button>
        <Modal open={isOpen} onClose={close} title="Confirm action" footer={<><Button variant="primary" onClick={close}>Confirm</Button><Button variant="ghost" onClick={close}>Cancel</Button></>}>
          <p>Are you sure you want to proceed? This action cannot be undone.</p>
        </Modal>
      </>;
  }
}`,...(N=(F=b.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var A,R,U;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const sm = useDisclosure();
    const md = useDisclosure();
    const lg = useDisclosure();
    const xl = useDisclosure();
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button size="sm" onClick={sm.open}>Small</Button>
        <Button size="sm" onClick={md.open}>Medium</Button>
        <Button size="sm" onClick={lg.open}>Large</Button>
        <Button size="sm" onClick={xl.open}>XLarge</Button>
        <Modal open={sm.isOpen} onClose={sm.close} title="Small Modal" size="sm"><p>Small modal content</p></Modal>
        <Modal open={md.isOpen} onClose={md.close} title="Medium Modal" size="md"><p>Medium modal content</p></Modal>
        <Modal open={lg.isOpen} onClose={lg.close} title="Large Modal" size="lg"><p>Large modal content</p></Modal>
        <Modal open={xl.isOpen} onClose={xl.close} title="XLarge Modal" size="xl"><p>XLarge modal content</p></Modal>
      </div>;
  }
}`,...(U=(R=k.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var W,X,q;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      open,
      close
    } = useDisclosure();
    return <>
        <Button variant="primary" onClick={open}>New User</Button>
        <Modal open={isOpen} onClose={close} title="Create User" footer={<><Button variant="primary">Create</Button><Button variant="ghost" onClick={close}>Cancel</Button></>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
            <TextField label="Full name" placeholder="Jane Doe" fullWidth />
            <TextField label="Email" type="email" placeholder="jane@example.com" fullWidth />
          </div>
        </Modal>
      </>;
  }
}`,...(q=(X=D.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var K,V,$;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  args: {
    size: 'md'
  },
  render: args => {
    const {
      isOpen,
      open,
      close
    } = useDisclosure();
    return <>
        <Button variant="primary" onClick={open}>Open Modal</Button>
        <Modal {...args} open={isOpen} onClose={close} title="Custom Modal" footer={<><Button variant="primary" onClick={close}>Confirm</Button><Button variant="ghost" onClick={close}>Cancel</Button></>}>
          <p>Use the controls panel to change the modal size and other props.</p>
        </Modal>
      </>;
  }
}`,...($=(V=M.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var I,J,P;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const right = useDisclosure();
    const left = useDisclosure();
    const top = useDisclosure();
    const bottom = useDisclosure();
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        <Button onClick={right.open}>Right Drawer</Button>
        <Button onClick={left.open}>Left Drawer</Button>
        <Button onClick={top.open}>Top Drawer</Button>
        <Button onClick={bottom.open}>Bottom Drawer</Button>
        <Drawer open={right.isOpen} onClose={right.close} title="Right Drawer" placement="right"><p>Right side content</p></Drawer>
        <Drawer open={left.isOpen} onClose={left.close} title="Left Drawer" placement="left"><p>Left side content</p></Drawer>
        <Drawer open={top.isOpen} onClose={top.close} title="Top Drawer" placement="top"><p>Top content</p></Drawer>
        <Drawer open={bottom.isOpen} onClose={bottom.close} title="Bottom Drawer" placement="bottom"><p>Bottom content</p></Drawer>
      </div>;
  }
}`,...(P=(J=B.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};const le=["Default","AllSizes","FormModal","Custom","DrawerVariants"];export{k as AllSizes,M as Custom,b as Default,B as DrawerVariants,D as FormModal,le as __namedExportsOrder,se as default};
