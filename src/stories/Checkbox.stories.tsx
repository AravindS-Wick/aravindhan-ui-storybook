import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox, Radio, RadioGroup, Switch, Rating, Slider } from '@aravi1008/ui-react';

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { render: () => <Checkbox label="Accept terms and conditions" /> };

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="With error" error="This field is required" />
    </div>
  ),
};

export const RadioButtons: Story = {
  render: () => {
    const [val, setVal] = useState('monthly');
    return (
      <RadioGroup
        legend="Billing cycle"
        name="billing"
        value={val}
        onChange={setVal}
        options={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'yearly', label: 'Yearly (save 20%)' },
          { value: 'lifetime', label: 'Lifetime' },
        ]}
      />
    );
  },
};

export const Switches: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Switch label="Notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Disabled" disabled />
      <Switch label="With helper" helperText="Enables push notifications on your device" />
    </div>
  ),
};

export const Ratings: Story = {
  render: () => {
    const [val, setVal] = useState(3);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Rating value={val} onChange={setVal} label="Rate this product" />
        <Rating value={4.5} readOnly max={5} />
        <Rating value={7} max={10} label="Out of 10" />
      </div>
    );
  },
};

export const Sliders: Story = {
  render: () => {
    const [vol, setVol] = useState(60);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Slider label={`Volume: ${vol}%`} value={String(vol)} onChange={e => setVol(Number(e.target.value))} min={0} max={100} fullWidth />
        <Slider label="Disabled" defaultValue="40" disabled fullWidth />
        <Slider label="Range with step" min={0} max={1000} step={50} defaultValue="500" fullWidth />
      </div>
    );
  },
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    label: 'Custom checkbox',
    disabled: false,
    indeterminate: false,
  } as Parameters<typeof Checkbox>[0],
};
