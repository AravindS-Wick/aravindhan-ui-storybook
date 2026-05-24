import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress, ProgressBar, Spinner, Skeleton } from '@aravi1008/ui-react';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant:       { control: 'select', options: ['primary','success','warning','danger','info'] },
    value:         { control: 'range', min: 0, max: 100 },
    indeterminate: { control: 'boolean' },
    striped:       { control: 'boolean' },
    animated:      { control: 'boolean' },
    label:         { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const ProgressBars: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Progress value={25} label="25%" />
      <Progress value={50} variant="success" label="50% complete" />
      <Progress value={75} variant="warning" />
      <Progress value={90} variant="danger" />
      <Progress value={100} variant="success" label="Done!" />
      <Progress indeterminate label="Loading…" />
    </div>
  ),
};

export const Spinners: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {(['sm','md','lg'] as const).map(s => (
        <Spinner key={s} size={s} />
      ))}
      <Spinner color="success" />
      <Spinner color="danger" />
    </div>
  ),
};

export const Skeletons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="rectangular" height={200} />
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
    </div>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    value: 60,
    variant: 'primary',
    indeterminate: false,
    striped: false,
    animated: false,
    label: 'Progress',
  },
};
