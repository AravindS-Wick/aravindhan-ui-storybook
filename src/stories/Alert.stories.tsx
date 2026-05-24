import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Alert, Badge, Chip, ChipGroup, Tag, TagGroup } from '@aravi1008/ui-react';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info','success','warning','danger'] },
    dismissible: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = { args: { children: 'This is an informational alert message.', variant: 'info' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Alert variant="info" title="Info">Something you should know about this operation.</Alert>
      <Alert variant="success" title="Success" dismissible>Your changes have been saved successfully!</Alert>
      <Alert variant="warning" title="Warning">Please review before proceeding.</Alert>
      <Alert variant="danger" title="Error" dismissible>Something went wrong. Please try again.</Alert>
    </div>
  ),
};

export const Badges: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {(['primary','secondary','success','danger','warning','info'] as const).map(v => (
          <Badge key={v} variant={v}>{v}</Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Badge pill variant="success">Active</Badge>
        <Badge pill variant="danger">Offline</Badge>
        <Badge pill variant="warning">Pending</Badge>
      </div>
    </div>
  ),
};

export const Chips: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <ChipGroup>
        <Chip color="secondary">React</Chip>
        <Chip color="success" onDelete={() => {}}>TypeScript</Chip>
        <Chip color="primary">Selected</Chip>
        <Chip color="warning" outlined>Outlined</Chip>
        <Chip color="danger">Error</Chip>
        <Chip color="secondary" aria-disabled="true" style={{ opacity: 0.5, pointerEvents: 'none' }}>Disabled</Chip>
      </ChipGroup>
    </div>
  ),
};

export const Tags: Story = {
  render: () => (
    <TagGroup>
      {['design-system','ui','react','typescript','open-source'].map(t => (
        <Tag key={t}>{t}</Tag>
      ))}
    </TagGroup>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    children: 'This is a customizable alert. Use the controls panel to change props.',
    variant: 'info',
    dismissible: false,
  },
};
