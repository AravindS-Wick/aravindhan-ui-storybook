import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Select, Combobox, OTPInput } from '@aravi1008/ui-react';

const COUNTRIES = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'in', label: 'India' },
];
const GROUPED = [
  { label: 'North America', options: [{ value: 'us', label: 'United States' }, { value: 'ca', label: 'Canada' }] },
  { label: 'Europe', options: [{ value: 'uk', label: 'United Kingdom' }, { value: 'de', label: 'Germany' }] },
];

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => <Select label="Country" options={COUNTRIES} placeholder="Select country" fullWidth />,
};
export const Grouped: Story = {
  render: () => <Select label="Country (grouped)" groups={GROUPED} placeholder="Select country" fullWidth />,
};
export const WithError: Story = {
  render: () => <Select label="Country" options={COUNTRIES} error="Please select a country" fullWidth />,
};

export const ComboboxSelect: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Combobox
          label="Country (searchable)"
          options={COUNTRIES}
          value={val}
          onChange={setVal}
          placeholder="Type to filter…"
          fullWidth
        />
        <Combobox
          label="Multi-select"
          options={COUNTRIES}
          multiple
          placeholder="Select multiple…"
          fullWidth
        />
      </div>
    );
  },
};

export const OTP: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <OTPInput length={6} onComplete={v => setOtp(v)} />
        {otp && <p>Entered: {otp}</p>}
        <OTPInput length={4} masked label="PIN" />
      </div>
    );
  },
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    label: 'Country',
    placeholder: 'Select a country…',
    disabled: false,
    error: '',
    fullWidth: true,
    options: COUNTRIES,
  } as Parameters<typeof Select>[0],
};
