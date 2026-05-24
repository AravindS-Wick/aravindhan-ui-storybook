import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  List, ListItem, ListItemText, ListItemIcon, ListItemAction,
  Timeline, TimelineItem,
  Stat, StatGroup,
  EmptyState,
  Table,
} from '@aravi1008/ui-react';

const meta: Meta = { title: 'Data Display/List', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const ListVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <List style={{ minWidth: 240 }}>
        {['Apple','Banana','Cherry','Dragonfruit'].map(item => (
          <ListItem key={item}><ListItemText primary={item} /></ListItem>
        ))}
      </List>
      <List style={{ minWidth: 300 }}>
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
  ),
};

export const TimelineDemo: Story = {
  render: () => (
    <Timeline>
      <TimelineItem title="Project created" time="9:00 AM" dot={<span>🚀</span>} dotColor="primary" content="Initial project setup completed." />
      <TimelineItem title="First commit" time="10:30 AM" dot={<span>💾</span>} dotColor="success" content="Added base component library structure." />
      <TimelineItem title="Review pending" time="2:00 PM" dot={<span>👀</span>} dotColor="warning" content="Waiting for design review." />
      <TimelineItem title="Deployed to production" time="5:45 PM" dot={<span>✅</span>} dotColor="success" content="v1.0.0 released to npm." />
    </Timeline>
  ),
};

export const Stats: Story = {
  render: () => (
    <StatGroup>
      <Stat label="Total Users" value="24,521" trend="+12.5% vs last month" trendDirection="up" />
      <Stat label="Revenue" value="$48,290" trend="-3.2% vs last month" trendDirection="down" />
      <Stat label="Conversion" value="3.6%" trend="+0.8% vs last week" trendDirection="up" />
      <Stat label="Avg. Session" value="4m 32s" trend="No change" trendDirection="neutral" />
    </StatGroup>
  ),
};

export const EmptyStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <EmptyState
        illustration={<span style={{ fontSize: 48 }}>📭</span>}
        title="No messages yet"
        description="When you receive messages, they'll show up here."
        action={<button className="av-btn av-btn-primary" onClick={() => {}}>Compose message</button>}
      />
      <EmptyState
        illustration={<span style={{ fontSize: 48 }}>❌</span>}
        title="Something went wrong"
        description="We couldn't load your data. Please try again."
        action={<button className="av-btn av-btn-danger" onClick={() => {}}>Retry</button>}
      />
    </div>
  ),
};

const TABLE_DATA = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', score: 98 },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'User', score: 72 },
  { name: 'Carol White', email: 'carol@example.com', role: 'Viewer', score: 55 },
  { name: 'Dave Brown', email: 'dave@example.com', role: 'Admin', score: 88 },
  { name: 'Eve Davis', email: 'eve@example.com', role: 'User', score: 45 },
];

export const TableDemo: Story = {
  name: 'Table – Default (striped + bordered)',
  render: () => (
    <Table
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
        { key: 'role', header: 'Role' },
        { key: 'score', header: 'Score', align: 'right' },
      ]}
      data={TABLE_DATA}
      rowKey="name"
      striped
      hoverable
      bordered
    />
  ),
};

export const TablePlain: Story = {
  name: 'Table – Plain',
  render: () => (
    <Table
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
        { key: 'role', header: 'Role' },
        { key: 'score', header: 'Score', align: 'right' },
      ]}
      data={TABLE_DATA}
      rowKey="name"
      plain
    />
  ),
};

export const TableCustom: Story = {
  name: 'Table – Custom (controls)',
  argTypes: {
    striped:      { control: 'boolean' },
    hoverable:    { control: 'boolean' },
    bordered:     { control: 'boolean' },
    compact:      { control: 'boolean' },
    plain:        { control: 'boolean' },
    stickyHeader: { control: 'boolean' },
  },
  args: {
    striped: false,
    hoverable: true,
    bordered: false,
    compact: false,
    plain: false,
    stickyHeader: false,
  },
  render: (args) => {
    const { striped, hoverable, bordered, compact, plain, stickyHeader } = args as {
      striped?: boolean; hoverable?: boolean; bordered?: boolean;
      compact?: boolean; plain?: boolean; stickyHeader?: boolean;
    };
    return (
      <Table
        columns={[
          { key: 'name', header: 'Name' },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Role' },
          { key: 'score', header: 'Score', align: 'right' },
        ]}
        data={TABLE_DATA}
        rowKey="name"
        striped={striped}
        hoverable={hoverable}
        bordered={bordered}
        compact={compact}
        plain={plain}
        stickyHeader={stickyHeader}
      />
    );
  },
};
