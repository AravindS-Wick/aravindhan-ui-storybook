import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar, AvatarGroup } from '@aravi1008/ui-react';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs','sm','md','lg','xl'] },
    shape: { control: 'select', options: ['circle','square'] },
    color: { control: 'select', options: ['primary','secondary','success','danger','warning','info'] },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: { initials: 'AS', size: 'md' } };

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar initials="JD" shape="circle" size="lg" />
      <Avatar initials="BK" shape="square" size="lg" color="secondary" />
      <Avatar initials="AM" size="lg" color="success" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {(['xs','sm','md','lg','xl'] as const).map(s => (
        <Avatar key={s} initials="AV" size={s} />
      ))}
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar initials="AL" />
      <Avatar initials="BO" />
      <Avatar initials="CA" />
      <Avatar initials="DA" />
      <Avatar initials="EV" />
      <Avatar initials="FR" />
    </AvatarGroup>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Avatar initials="ON" status="online" size="lg" />
      <Avatar initials="BU" status="busy" size="lg" />
      <Avatar initials="AW" status="away" size="lg" />
      <Avatar initials="OF" status="offline" size="lg" />
    </div>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    initials: 'AS',
    size: 'md',
    shape: 'circle',
    color: 'primary',
  },
};
