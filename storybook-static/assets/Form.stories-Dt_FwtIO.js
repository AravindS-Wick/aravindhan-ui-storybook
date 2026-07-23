import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as P}from"./index-pP6CS22B.js";import{B as m}from"./Button-ZK112Wt6.js";import{S as k,C as W}from"./Checkbox-CeX05X-T.js";import{T as r}from"./TextField-B4CvjsEL.js";import{P as D}from"./PasswordInput-Vh8-qyEs.js";import{S as C}from"./Select-BqaT2lBL.js";import{F as q}from"./FormProvider-B64XWQQ7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./types-2dOUpm6k.js";const V={title:"Inputs/Form",tags:["autodocs"]},t={render:()=>{const[a,d]=P.useState({}),n=u=>{u.preventDefault();const c=new FormData(u.target),l={};c.get("email")||(l.email="Email is required"),c.get("password")||(l.password="Password is required"),d(l),Object.keys(l).length||alert("Login successful!")};return e.jsx("div",{style:{maxWidth:400},children:e.jsxs("form",{onSubmit:n,noValidate:!0,style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{name:"email",label:"Email",type:"email",placeholder:"you@example.com",error:a.email,fullWidth:!0}),e.jsx(D,{name:"password",label:"Password",placeholder:"••••••••",error:a.password,fullWidth:!0}),e.jsx(W,{name:"remember",label:"Remember me"}),e.jsx(m,{type:"submit",variant:"primary",block:!0,children:"Sign in"})]})})}},s={render:()=>{const[a,d]=P.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(k,{label:"Disable all fields",checked:a,onChange:n=>d(n.target.checked)}),e.jsx(q,{disabled:a,size:"sm",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(r,{label:"First name",placeholder:"Jane",fullWidth:!0}),e.jsx(r,{label:"Last name",placeholder:"Doe",fullWidth:!0}),e.jsx(C,{label:"Role",options:[{value:"admin",label:"Admin"},{value:"user",label:"User"}],fullWidth:!0}),e.jsx(m,{type:"submit",variant:"primary",children:"Save"})]})})]})}},o={render:()=>e.jsx("div",{style:{maxWidth:480},children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:16},noValidate:!0,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[e.jsx(r,{label:"First name",placeholder:"Jane",required:!0,fullWidth:!0}),e.jsx(r,{label:"Last name",placeholder:"Doe",required:!0,fullWidth:!0})]}),e.jsx(r,{label:"Email",type:"email",placeholder:"you@example.com",required:!0,fullWidth:!0}),e.jsx(D,{label:"Password",showStrength:!0,placeholder:"Choose a strong password",required:!0,fullWidth:!0}),e.jsx(C,{label:"Country",options:[{value:"us",label:"USA"},{value:"uk",label:"UK"}],fullWidth:!0}),e.jsx(W,{label:"I agree to the Terms of Service and Privacy Policy",required:!0}),e.jsx(m,{type:"submit",variant:"primary",size:"lg",block:!0,children:"Create Account"})]})})},i={name:"Custom (controls)",render:()=>e.jsx("p",{style:{color:"var(--av-color-text-secondary)",fontSize:14},children:"See Login Form, Registration Form, and Form Provider Propagation stories above for interactive examples."})};var p,h,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const data = new FormData(e.target as HTMLFormElement);
      const errs: Record<string, string> = {};
      if (!data.get('email')) errs.email = 'Email is required';
      if (!data.get('password')) errs.password = 'Password is required';
      setErrors(errs);
      if (!Object.keys(errs).length) alert('Login successful!');
    };
    return <div style={{
      maxWidth: 400
    }}>
        <form onSubmit={handleSubmit} noValidate style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <TextField name="email" label="Email" type="email" placeholder="you@example.com" error={errors.email} fullWidth />
          <PasswordInput name="password" label="Password" placeholder="••••••••" error={errors.password} fullWidth />
          <Checkbox name="remember" label="Remember me" />
          <Button type="submit" variant="primary" block>Sign in</Button>
        </form>
      </div>;
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,x,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Switch label="Disable all fields" checked={disabled} onChange={e => setDisabled(e.target.checked)} />
        <FormProvider disabled={disabled} size="sm">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <TextField label="First name" placeholder="Jane" fullWidth />
            <TextField label="Last name" placeholder="Doe" fullWidth />
            <Select label="Role" options={[{
            value: 'admin',
            label: 'Admin'
          }, {
            value: 'user',
            label: 'User'
          }]} fullWidth />
            <Button type="submit" variant="primary">Save</Button>
          </div>
        </FormProvider>
      </div>;
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,v,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }} noValidate>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }}>
          <TextField label="First name" placeholder="Jane" required fullWidth />
          <TextField label="Last name" placeholder="Doe" required fullWidth />
        </div>
        <TextField label="Email" type="email" placeholder="you@example.com" required fullWidth />
        <PasswordInput label="Password" showStrength placeholder="Choose a strong password" required fullWidth />
        <Select label="Country" options={[{
        value: 'us',
        label: 'USA'
      }, {
        value: 'uk',
        label: 'UK'
      }]} fullWidth />
        <Checkbox label="I agree to the Terms of Service and Privacy Policy" required />
        <Button type="submit" variant="primary" size="lg" block>Create Account</Button>
      </form>
    </div>
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var F,j,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Custom (controls)',
  render: () => <p style={{
    color: 'var(--av-color-text-secondary)',
    fontSize: 14
  }}>
      See Login Form, Registration Form, and Form Provider Propagation stories above for interactive examples.
    </p>
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const O=["LoginForm","FormProviderPropagation","RegistrationForm","Custom"];export{i as Custom,s as FormProviderPropagation,t as LoginForm,o as RegistrationForm,O as __namedExportsOrder,V as default};
