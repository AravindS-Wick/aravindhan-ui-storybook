import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup,
} from '@aravi1008/ui-react';

// ── Button ──────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'ghost', 'link', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: 'Button', variant: 'primary' } };
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['primary','secondary','danger','warning','success','info','ghost','outline'] as const).map(v => (
        <Button key={v} variant={v}>{v}</Button>
      ))}
    </div>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
export const Loading: Story = { args: { children: 'Saving…', loading: true, variant: 'primary' } };
export const BlockButton: Story = { args: { children: 'Block Button', block: true, variant: 'primary' } };

// ── IconButton ───────────────────────────────────────────────────────────────

export const IconButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <IconButton aria-label="Search"><span>🔍</span></IconButton>
      <IconButton aria-label="Settings" variant="secondary"><span>⚙️</span></IconButton>
      <IconButton aria-label="Delete" variant="danger"><span>🗑</span></IconButton>
    </div>
  ),
};

// ── ButtonGroup ──────────────────────────────────────────────────────────────

export const Groups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ButtonGroup>
        <Button variant="primary">Left</Button>
        <Button variant="primary">Center</Button>
        <Button variant="primary">Right</Button>
      </ButtonGroup>
      <ButtonGroup vertical>
        <Button variant="secondary">Top</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Bottom</Button>
      </ButtonGroup>
    </div>
  ),
};

// ── ToggleButton ─────────────────────────────────────────────────────────────

export const Toggle: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['bold']);
    return (
      <ToggleButtonGroup value={value} onChange={setValue}>
        <ToggleButton value="bold"><b>B</b></ToggleButton>
        <ToggleButton value="italic"><i>I</i></ToggleButton>
        <ToggleButton value="underline"><u>U</u></ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    children: 'My Button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
  },
};
