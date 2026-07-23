import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as o}from"./types-2dOUpm6k.js";import{r as P}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function b({value:a,label:s,description:t,trend:r,trendDirection:i,icon:l,bordered:c=!1,className:m="",...p}){return e.jsxs("div",{className:o("av-stat",c&&"av-stat-bordered",m),...p,children:[l&&e.jsx("div",{className:"av-stat-icon",children:l}),e.jsxs("div",{className:"av-stat-body",children:[e.jsx("div",{className:"av-stat-value",children:a}),e.jsx("div",{className:"av-stat-label",children:s}),t&&e.jsx("div",{className:"av-stat-description",children:t}),r&&e.jsx("div",{className:o("av-stat-trend",i&&`av-stat-trend-${i}`),children:r})]})]})}function le({cols:a,className:s="",children:t,...r}){return e.jsx("div",{className:o("av-stat-group",a&&`av-stat-group-${a}`,s),...r,children:t})}b.__docgenInfo={description:"",methods:[],displayName:"Stat",props:{value:{required:!0,tsType:{name:"ReactNode"},description:"Main metric value."},label:{required:!0,tsType:{name:"ReactNode"},description:"Label under the value."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description below label."},trend:{required:!1,tsType:{name:"ReactNode"},description:"Trend indicator: positive/negative percentage or text."},trendDirection:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'neutral'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'neutral'"}]},description:"Trend direction for coloring."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon displayed alongside value."},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordered card style.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};le.__docgenInfo={description:"",methods:[],displayName:"StatGroup",props:{cols:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"Number of columns. Defaults to auto."},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function S({columns:a,data:s,rowKey:t,striped:r=!1,hoverable:i=!0,compact:l=!1,bordered:c=!1,plain:m=!1,loading:p=!1,emptyText:y="No data",stickyHeader:f=!1,responsive:ce=!0,onRowClick:v,onSort:A,activeRowIndex:me,className:pe="",...E}){const[D,ue]=P.useState(null),[C,ve]=P.useState(null);function ye(n,d){return t?typeof t=="function"?t(n):String(n[t]):String(d)}function fe(n){let d;D!==n?d="asc":C==="asc"?d="desc":d=null,ue(d?n:null),ve(d),A==null||A(n,d)}const be=o("av-table",r&&"av-table-striped",i&&"av-table-hover",l&&"av-table-compact",c&&"av-table-bordered",m&&"av-table-plain",f&&"av-table-sticky",pe),H=e.jsxs("table",{className:be,children:[e.jsx("thead",{children:e.jsx("tr",{children:a.map(n=>e.jsxs("th",{style:{width:n.width,textAlign:n.align},scope:"col","aria-sort":D===n.key?C==="asc"?"ascending":"descending":void 0,className:o(n.sortable&&"av-table-th-sortable"),onClick:n.sortable?()=>fe(n.key):void 0,children:[n.header,n.sortable&&e.jsx("span",{className:"av-table-sort-icon","aria-hidden":"true",children:D===n.key?C==="asc"?" ↑":" ↓":" ↕"})]},n.key))})}),e.jsx("tbody",{children:p?e.jsx("tr",{children:e.jsx("td",{colSpan:a.length,className:"av-table-loading",children:e.jsx("span",{className:"av-spinner av-spinner-border av-spinner-primary av-spinner-sm",role:"status","aria-label":"Loading"})})}):s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:a.length,className:"av-table-empty",children:y})}):s.map((n,d)=>e.jsx("tr",{className:o(me===d&&"av-table-row-active",v&&"av-table-row-clickable"),onClick:v?()=>v(n,d):void 0,tabIndex:v?0:void 0,onKeyDown:v?u=>{(u.key==="Enter"||u.key===" ")&&v(n,d)}:void 0,children:a.map(u=>{const M=n[u.key];return e.jsx("td",{style:{textAlign:u.align},children:u.render?u.render(M,n,d):String(M??"")},u.key)})},ye(n,d)))})]});return ce?e.jsx("div",{className:"av-table-responsive",...E,children:H}):e.jsx("div",{...E,children:H})}S.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"union",raw:"keyof T | ((row: T) => string)",elements:[{name:"T"},{name:"unknown"}]},description:""},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},plain:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyText:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'No data'",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called when a row is clicked."},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: 'asc' | 'desc' | null) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},name:"direction"}],return:{name:"void"}}},description:"Called when a sortable column header is clicked."},activeRowIndex:{required:!1,tsType:{name:"number"},description:"Highlight row at this index (0-indexed)."},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function h({content:a,time:s,title:t,dot:r,dotColor:i="primary",className:l="",...c}){return e.jsxs("div",{className:o("av-timeline-item",l),...c,children:[e.jsx("div",{className:o("av-timeline-dot",`av-timeline-dot-${i}`),children:r}),e.jsxs("div",{className:"av-timeline-content",children:[s&&e.jsx("time",{className:"av-timeline-time",children:s}),t&&e.jsx("div",{className:"av-timeline-title",children:t}),e.jsx("div",{className:"av-timeline-body",children:a})]})]})}function oe({alternate:a=!1,reverse:s=!1,className:t="",children:r,...i}){return e.jsx("div",{className:o("av-timeline",a&&"av-timeline-alternate",s&&"av-timeline-reverse",t),...i,children:r})}h.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Primary content."},time:{required:!1,tsType:{name:"ReactNode"},description:"Timestamp or metadata."},title:{required:!1,tsType:{name:"ReactNode"},description:"Title above content."},dot:{required:!1,tsType:{name:"ReactNode"},description:"Custom connector dot/icon."},dotColor:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Dot color variant.",defaultValue:{value:"'primary'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};oe.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{alternate:{required:!1,tsType:{name:"boolean"},description:"Alternating left/right layout.",defaultValue:{value:"false",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"Reverse order (newest first).",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function R({unstyled:a,bordered:s,flush:t,dense:r,ordered:i=!1,className:l="",children:c,...m}){const p=i?"ol":"ul";return e.jsx(p,{className:o("av-list",a&&"av-list-unstyled",s&&"av-list-group",t&&"av-list-group-flush",r&&"av-list-dense",l),...m,children:c})}function x({active:a,disabled:s,button:t,href:r,secondaryAction:i,icon:l,className:c="",children:m,...p}){const y=o("av-list-item",a&&"av-list-item-active",s&&"av-list-item-disabled",(t||r)&&"av-list-item-button",!!l&&"av-list-item-with-icon",c),f=e.jsxs(e.Fragment,{children:[l&&e.jsx("span",{className:"av-list-item-icon",children:l}),e.jsx("span",{className:"av-list-item-content",children:m}),i&&e.jsx("span",{className:"av-list-item-action",children:i})]});return r?e.jsx("li",{className:y,...p,children:e.jsx("a",{href:r,className:"av-list-item-link","aria-disabled":s,children:f})}):t?e.jsx("li",{className:y,...p,children:e.jsx("button",{type:"button",className:"av-list-item-link",disabled:s,children:f})}):e.jsx("li",{className:y,...p,children:f})}function T({primary:a,secondary:s,className:t="",...r}){return e.jsxs("div",{className:o("av-list-item-text",t),...r,children:[e.jsx("span",{className:"av-list-item-primary",children:a}),s&&e.jsx("span",{className:"av-list-item-secondary",children:s})]})}function w({className:a="",children:s,...t}){return e.jsx("span",{className:o("av-list-item-icon",a),...t,children:s})}function de({className:a="",children:s,...t}){return e.jsx("span",{className:o("av-list-item-action",a),...t,children:s})}R.__docgenInfo={description:"",methods:[],displayName:"List",props:{unstyled:{required:!1,tsType:{name:"boolean"},description:"Remove bullets and padding."},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordered list with dividers."},flush:{required:!1,tsType:{name:"boolean"},description:"Flush (no outer border)."},dense:{required:!1,tsType:{name:"boolean"},description:"Dense padding."},ordered:{required:!1,tsType:{name:"boolean"},description:"Render as ordered list.",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};x.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active/selected state."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state."},button:{required:!1,tsType:{name:"boolean"},description:"Make item clickable."},href:{required:!1,tsType:{name:"string"},description:"href — renders as <a>."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Secondary action slot."},icon:{required:!1,tsType:{name:"ReactNode"},description:"List item icon slot (alias for ListItemIcon)."},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["LiHTMLAttributes"]};T.__docgenInfo={description:"",methods:[],displayName:"ListItemText",props:{primary:{required:!0,tsType:{name:"ReactNode"},description:""},secondary:{required:!1,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};w.__docgenInfo={description:"",methods:[],displayName:"ListItemIcon",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};de.__docgenInfo={description:"",methods:[],displayName:"ListItemAction",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};function V({illustration:a,title:s,description:t,action:r,secondaryAction:i,size:l="md",className:c="",...m}){return e.jsxs("div",{className:o("av-empty-state",l!=="md"&&`av-empty-state-${l}`,c),role:"status",...m,children:[a&&e.jsx("div",{className:"av-empty-state-illustration",children:a}),e.jsx("div",{className:"av-empty-state-title",children:s}),t&&e.jsx("div",{className:"av-empty-state-description",children:t}),(r||i)&&e.jsxs("div",{className:"av-empty-state-actions",children:[r,i]})]})}V.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{illustration:{required:!1,tsType:{name:"ReactNode"},description:"Illustration or icon."},title:{required:!0,tsType:{name:"ReactNode"},description:"Main title."},description:{required:!1,tsType:{name:"ReactNode"},description:"Descriptive text."},action:{required:!1,tsType:{name:"ReactNode"},description:"Primary action button/link."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Secondary action."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant. Defaults to `'md'`.",defaultValue:{value:"'md'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const Ne={title:"Data Display/List",tags:["autodocs"]},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(R,{style:{minWidth:240},children:["Apple","Banana","Cherry","Dragonfruit"].map(a=>e.jsx(x,{children:e.jsx(T,{primary:a})},a))}),e.jsxs(R,{style:{minWidth:300},children:[e.jsxs(x,{children:[e.jsx(w,{children:e.jsx("span",{children:"📧"})}),e.jsx(T,{primary:"Inbox",secondary:"4 new messages"}),e.jsx(de,{children:e.jsx("span",{className:"av-badge av-badge-primary",children:"4"})})]}),e.jsxs(x,{children:[e.jsx(w,{children:e.jsx("span",{children:"⭐"})}),e.jsx(T,{primary:"Starred",secondary:"No new items"})]}),e.jsxs(x,{disabled:!0,children:[e.jsx(w,{children:e.jsx("span",{children:"🗑"})}),e.jsx(T,{primary:"Trash",secondary:"Disabled item"})]})]})]})},N={render:()=>e.jsxs(oe,{children:[e.jsx(h,{title:"Project created",time:"9:00 AM",dot:e.jsx("span",{children:"🚀"}),dotColor:"primary",content:"Initial project setup completed."}),e.jsx(h,{title:"First commit",time:"10:30 AM",dot:e.jsx("span",{children:"💾"}),dotColor:"success",content:"Added base component library structure."}),e.jsx(h,{title:"Review pending",time:"2:00 PM",dot:e.jsx("span",{children:"👀"}),dotColor:"warning",content:"Waiting for design review."}),e.jsx(h,{title:"Deployed to production",time:"5:45 PM",dot:e.jsx("span",{children:"✅"}),dotColor:"success",content:"v1.0.0 released to npm."})]})},j={render:()=>e.jsxs(le,{children:[e.jsx(b,{label:"Total Users",value:"24,521",trend:"+12.5% vs last month",trendDirection:"up"}),e.jsx(b,{label:"Revenue",value:"$48,290",trend:"-3.2% vs last month",trendDirection:"down"}),e.jsx(b,{label:"Conversion",value:"3.6%",trend:"+0.8% vs last week",trendDirection:"up"}),e.jsx(b,{label:"Avg. Session",value:"4m 32s",trend:"No change",trendDirection:"neutral"})]})},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(V,{illustration:e.jsx("span",{style:{fontSize:48},children:"📭"}),title:"No messages yet",description:"When you receive messages, they'll show up here.",action:e.jsx("button",{className:"av-btn av-btn-primary",onClick:()=>{},children:"Compose message"})}),e.jsx(V,{illustration:e.jsx("span",{style:{fontSize:48},children:"❌"}),title:"Something went wrong",description:"We couldn't load your data. Please try again.",action:e.jsx("button",{className:"av-btn av-btn-danger",onClick:()=>{},children:"Retry"})})]})},_=[{name:"Alice Johnson",email:"alice@example.com",role:"Admin",score:98},{name:"Bob Smith",email:"bob@example.com",role:"User",score:72},{name:"Carol White",email:"carol@example.com",role:"Viewer",score:55},{name:"Dave Brown",email:"dave@example.com",role:"Admin",score:88},{name:"Eve Davis",email:"eve@example.com",role:"User",score:45}],k={name:"Table – Default (striped + bordered)",render:()=>e.jsx(S,{columns:[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"score",header:"Score",align:"right"}],data:_,rowKey:"name",striped:!0,hoverable:!0,bordered:!0})},q={name:"Table – Plain",render:()=>e.jsx(S,{columns:[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"score",header:"Score",align:"right"}],data:_,rowKey:"name",plain:!0})},L={name:"Table – Custom (controls)",argTypes:{striped:{control:"boolean"},hoverable:{control:"boolean"},bordered:{control:"boolean"},compact:{control:"boolean"},plain:{control:"boolean"},stickyHeader:{control:"boolean"}},args:{striped:!1,hoverable:!0,bordered:!1,compact:!1,plain:!1,stickyHeader:!1},render:a=>{const{striped:s,hoverable:t,bordered:r,compact:i,plain:l,stickyHeader:c}=a;return e.jsx(S,{columns:[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"score",header:"Score",align:"right"}],data:_,rowKey:"name",striped:s,hoverable:t,bordered:r,compact:i,plain:l,stickyHeader:c})}};var W,B,K;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <List style={{
      minWidth: 240
    }}>
        {['Apple', 'Banana', 'Cherry', 'Dragonfruit'].map(item => <ListItem key={item}><ListItemText primary={item} /></ListItem>)}
      </List>
      <List style={{
      minWidth: 300
    }}>
        <ListItem>
          <ListItemIcon><span>📧</span></ListItemIcon>
          <ListItemText primary="Inbox" secondary="4 new messages" />
          <ListItemAction><span className="av-badge av-badge-primary">4</span></ListItemAction>
        </ListItem>
        <ListItem>
          <ListItemIcon><span>⭐</span></ListItemIcon>
          <ListItemText primary="Starred" secondary="No new items" />
        </ListItem>
        <ListItem disabled>
          <ListItemIcon><span>🗑</span></ListItemIcon>
          <ListItemText primary="Trash" secondary="Disabled item" />
        </ListItem>
      </List>
    </div>
}`,...(K=(B=g.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var $,z,F;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Timeline>
      <TimelineItem title="Project created" time="9:00 AM" dot={<span>🚀</span>} dotColor="primary" content="Initial project setup completed." />
      <TimelineItem title="First commit" time="10:30 AM" dot={<span>💾</span>} dotColor="success" content="Added base component library structure." />
      <TimelineItem title="Review pending" time="2:00 PM" dot={<span>👀</span>} dotColor="warning" content="Waiting for design review." />
      <TimelineItem title="Deployed to production" time="5:45 PM" dot={<span>✅</span>} dotColor="success" content="v1.0.0 released to npm." />
    </Timeline>
}`,...(F=(z=N.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,O,U;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <StatGroup>
      <Stat label="Total Users" value="24,521" trend="+12.5% vs last month" trendDirection="up" />
      <Stat label="Revenue" value="$48,290" trend="-3.2% vs last month" trendDirection="down" />
      <Stat label="Conversion" value="3.6%" trend="+0.8% vs last week" trendDirection="up" />
      <Stat label="Avg. Session" value="4m 32s" trend="No change" trendDirection="neutral" />
    </StatGroup>
}`,...(U=(O=j.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var J,Q,X;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <EmptyState illustration={<span style={{
      fontSize: 48
    }}>📭</span>} title="No messages yet" description="When you receive messages, they'll show up here." action={<button className="av-btn av-btn-primary" onClick={() => {}}>Compose message</button>} />
      <EmptyState illustration={<span style={{
      fontSize: 48
    }}>❌</span>} title="Something went wrong" description="We couldn't load your data. Please try again." action={<button className="av-btn av-btn-danger" onClick={() => {}}>Retry</button>} />
    </div>
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Table – Default (striped + bordered)',
  render: () => <Table columns={[{
    key: 'name',
    header: 'Name'
  }, {
    key: 'email',
    header: 'Email'
  }, {
    key: 'role',
    header: 'Role'
  }, {
    key: 'score',
    header: 'Score',
    align: 'right'
  }]} data={TABLE_DATA} rowKey="name" striped hoverable bordered />
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,se;q.parameters={...q.parameters,docs:{...(ae=q.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Table – Plain',
  render: () => <Table columns={[{
    key: 'name',
    header: 'Name'
  }, {
    key: 'email',
    header: 'Email'
  }, {
    key: 'role',
    header: 'Role'
  }, {
    key: 'score',
    header: 'Score',
    align: 'right'
  }]} data={TABLE_DATA} rowKey="name" plain />
}`,...(se=(te=q.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ne,ie;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Table – Custom (controls)',
  argTypes: {
    striped: {
      control: 'boolean'
    },
    hoverable: {
      control: 'boolean'
    },
    bordered: {
      control: 'boolean'
    },
    compact: {
      control: 'boolean'
    },
    plain: {
      control: 'boolean'
    },
    stickyHeader: {
      control: 'boolean'
    }
  },
  args: {
    striped: false,
    hoverable: true,
    bordered: false,
    compact: false,
    plain: false,
    stickyHeader: false
  },
  render: args => {
    const {
      striped,
      hoverable,
      bordered,
      compact,
      plain,
      stickyHeader
    } = args as {
      striped?: boolean;
      hoverable?: boolean;
      bordered?: boolean;
      compact?: boolean;
      plain?: boolean;
      stickyHeader?: boolean;
    };
    return <Table columns={[{
      key: 'name',
      header: 'Name'
    }, {
      key: 'email',
      header: 'Email'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'score',
      header: 'Score',
      align: 'right'
    }]} data={TABLE_DATA} rowKey="name" striped={striped} hoverable={hoverable} bordered={bordered} compact={compact} plain={plain} stickyHeader={stickyHeader} />;
  }
}`,...(ie=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const je=["ListVariants","TimelineDemo","Stats","EmptyStates","TableDemo","TablePlain","TableCustom"];export{I as EmptyStates,g as ListVariants,j as Stats,L as TableCustom,k as TableDemo,q as TablePlain,N as TimelineDemo,je as __namedExportsOrder,Ne as default};
