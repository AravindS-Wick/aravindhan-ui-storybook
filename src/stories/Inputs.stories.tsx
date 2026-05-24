import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  TextField, Textarea, NumberInput, PasswordInput, SearchInput, MaskedInput,
} from '@aravi1008/ui-react';

const meta: Meta<typeof TextField> = {
  title: 'Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof TextField>;

// ── Basic ─────────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', fullWidth: true },
};

export const WithError: Story = {
  args: { label: 'Email', defaultValue: 'bad-email', error: 'Enter a valid email address', fullWidth: true },
};

// ── Adornments ────────────────────────────────────────────────────────────────
export const WithAdornments: Story = {
  name: 'With Adornments',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <TextField
        label="Search"
        startAdornment={<span style={{ fontSize: 16 }}>🔍</span>}
        placeholder="Type to search…"
        fullWidth
      />
      <TextField
        label="Amount"
        endAdornment={<span style={{ fontWeight: 600, fontSize: 13 }}>USD</span>}
        placeholder="0.00"
        type="number"
        fullWidth
      />
      <TextField
        label="Website"
        startAdornment={<span style={{ fontSize: 12, opacity: 0.6 }}>https://</span>}
        endAdornment={<span style={{ fontSize: 12, opacity: 0.6 }}>.com</span>}
        placeholder="yoursite"
        fullWidth
      />
    </div>
  ),
};

// ── Sizes — uses same font/padding system, visually differentiated ─────────────
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
      <TextField label="Small (sm)" size="sm" placeholder="Small input" fullWidth />
      <TextField label="Medium (md)" size="md" placeholder="Medium input" fullWidth />
      <TextField label="Large (lg)" size="lg" placeholder="Large input" fullWidth />
    </div>
  ),
};

// ── Textarea ──────────────────────────────────────────────────────────────────
export const TextareaField: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
      <Textarea label="Message" placeholder="Write your message…" rows={4} fullWidth />
      <Textarea label="Bio" showCount maxLength={200} autoResize placeholder="Auto-resizes as you type…" fullWidth />
    </div>
  ),
};

// ── Number: stepper (▲/▼ on right, one-direction scrolling) ──────────────────
export const NumberStepper: Story = {
  name: 'Number – Stepper (▲▼)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <NumberInput label="Price" min={0} precision={2} stepper fullWidth />
      <NumberInput label="Percentage" min={0} max={100} step={5} stepper fullWidth />
    </div>
  ),
};

// ── Number: controls (− value + on both sides, two-direction) ─────────────────
export const NumberControls: Story = {
  name: 'Number – Controls (− / +)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <NumberInput label="Quantity" min={0} max={100} step={1} controls stepper={false} fullWidth />
      <NumberInput label="Rating" min={1} max={10} step={1} controls stepper={false} fullWidth />
    </div>
  ),
};

// ── Password ──────────────────────────────────────────────────────────────────
export const PasswordFields: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <PasswordInput label="Password" placeholder="Enter password" fullWidth />
      <PasswordInput
        label="Password with strength meter"
        showStrength
        placeholder="Choose a strong password"
        fullWidth
      />
    </div>
  ),
};

// ── Search ────────────────────────────────────────────────────────────────────
export const SearchFields: Story = {
  render: () => {
    const [q, setQ] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
        <SearchInput
          placeholder="Search…"
          value={q}
          onChange={e => setQ(e.target.value)}
          onSearch={v => alert(`Search: ${v}`)}
          clearable
          fullWidth
        />
        <SearchInput
          placeholder="Debounced search (400ms)"
          debounce={400}
          onSearch={v => console.log('debounced:', v)}
          fullWidth
        />
      </div>
    );
  },
};

// ── Masked inputs ─────────────────────────────────────────────────────────────
export const MaskedInputs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
      <MaskedInput label="Phone (US)" preset="phone-us" fullWidth />
      <MaskedInput label="Credit Card" preset="card" fullWidth />
      <MaskedInput label="Date (MM/DD/YYYY)" preset="date" fullWidth />
      <MaskedInput label="ZIP Code" preset="zip" fullWidth />
      <MaskedInput label="Custom mask (SSN)" preset="ssn" fullWidth />
    </div>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────
export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    label: 'Custom Field',
    placeholder: 'Type something…',
    size: 'md',
    fullWidth: true,
    disabled: false,
    error: '',
  },
};
