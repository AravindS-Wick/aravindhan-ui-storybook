import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DataTable, type DataTableColumn, Badge, Avatar } from '@aravi1008/ui-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  status: 'active' | 'inactive' | 'pending';
  joined: string;
  score: number;
}

const USERS: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  name: ['Alice Johnson','Bob Smith','Carol White','Dave Brown','Eve Davis','Frank Miller','Grace Wilson','Henry Moore'][i % 8],
  email: `user${i + 1}@example.com`,
  role: (['admin','user','viewer'] as const)[i % 3],
  status: (['active','inactive','pending'] as const)[i % 3],
  joined: new Date(2023, i % 12, (i % 28) + 1).toLocaleDateString(),
  score: ((i * 37 + 13) % 100) + 1,
}));

const COLUMNS: DataTableColumn<User>[] = [
  {
    key: 'name',
    header: 'User',
    sortable: true,
    render: (_, row) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Avatar name={row.name} size="sm" />
        <div>
          <div style={{ fontWeight: 500 }}>{row.name}</div>
          <div style={{ fontSize: 12, opacity: 0.6 }}>{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'role',
    header: 'Role',
    sortable: true,
    render: (v) => <Badge variant={v === 'admin' ? 'primary' : 'secondary'}>{String(v)}</Badge>,
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (v) => (
      <Badge pill variant={v === 'active' ? 'success' : v === 'pending' ? 'warning' : 'danger'}>
        {String(v)}
      </Badge>
    ),
  },
  { key: 'joined', header: 'Joined', sortable: true },
  {
    key: 'score',
    header: 'Score',
    sortable: true,
    align: 'right',
    render: (v) => <strong>{String(v)}</strong>,
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Data Display/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    striped:        { control: 'boolean', description: 'Alternate row background colors' },
    hoverable:      { control: 'boolean', description: 'Highlight row on hover' },
    bordered:       { control: 'boolean', description: 'Add borders to all cells' },
    compact:        { control: 'boolean', description: 'Reduce row padding' },
    plain:          { control: 'boolean', description: 'No header background, no row dividers' },
    stickyHeader:   { control: 'boolean', description: 'Stick header on scroll' },
    sortable:       { control: 'boolean', description: 'Enable column sorting' },
    selectable:     { control: 'boolean', description: 'Show row checkboxes' },
    loading:        { control: 'boolean', description: 'Show loading spinner' },
    exportable:     { control: 'boolean', description: 'Show CSV export button' },
    columnVisibility: { control: 'boolean', description: 'Show column toggle button' },
    pageSize:       { control: 'number',  description: 'Rows per page' },
  },
};
export default meta;
type Story = StoryObj<typeof DataTable>;

// ── Default ───────────────────────────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <DataTable<User>
      columns={COLUMNS}
      data={USERS.slice(0, 10)}
      rowKey="id"
      sortable
      hoverable
      striped
    />
  ),
};

// ── Full Featured ─────────────────────────────────────────────────────────────
export const FullFeatured: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <DataTable<User>
        columns={COLUMNS}
        data={USERS}
        rowKey="id"
        sortable
        selectable
        selectedKeys={selected}
        onSelectionChange={setSelected}
        pageSize={8}
        exportable
        exportFilename="users"
        columnVisibility
        hoverable
        stickyHeader
        onRowClick={(row) => console.log('Row clicked:', row.name)}
        expandedRowRender={(row) => (
          <div style={{ padding: '8px 16px' }}>
            <strong>Details for {row.name}</strong>
            <p>Email: {row.email} | Score: {row.score}/100</p>
          </div>
        )}
      />
    );
  },
};

// ── Plain ─────────────────────────────────────────────────────────────────────
export const Plain: Story = {
  name: 'Plain',
  render: () => (
    <DataTable<User>
      columns={COLUMNS}
      data={USERS.slice(0, 5)}
      rowKey="id"
      plain
      hoverable
    />
  ),
};

// ── Loading ───────────────────────────────────────────────────────────────────
export const Loading: Story = {
  render: () => <DataTable columns={COLUMNS} data={[]} loading emptyText="Loading users…" />,
};

// ── Empty ─────────────────────────────────────────────────────────────────────
export const Empty: Story = {
  render: () => (
    <DataTable
      columns={COLUMNS}
      data={[]}
      emptyText="No users found. Add your first user to get started."
    />
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────
export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    striped: false,
    hoverable: true,
    bordered: false,
    compact: false,
    plain: false,
    stickyHeader: false,
    sortable: true,
    selectable: false,
    loading: false,
    exportable: false,
    columnVisibility: false,
    pageSize: 5,
  },
  render: (args) => (
    <DataTable<User>
      columns={COLUMNS}
      data={USERS.slice(0, args.pageSize ?? 5)}
      rowKey="id"
      {...args}
    />
  ),
};
