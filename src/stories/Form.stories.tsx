import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  FormProvider, TextField, Select, Checkbox, PasswordInput, Button, Switch,
} from '@aravi1008/ui-react';

const meta: Meta = {
  title: 'Inputs/Form',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const LoginForm: Story = {
  render: () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const data = new FormData(e.target as HTMLFormElement);
      const errs: Record<string, string> = {};
      if (!data.get('email')) errs.email = 'Email is required';
      if (!data.get('password')) errs.password = 'Password is required';
      setErrors(errs);
      if (!Object.keys(errs).length) alert('Login successful!');
    };
    return (
      <div style={{ maxWidth: 400 }}>
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TextField name="email" label="Email" type="email" placeholder="you@example.com" error={errors.email} fullWidth />
          <PasswordInput name="password" label="Password" placeholder="••••••••" error={errors.password} fullWidth />
          <Checkbox name="remember" label="Remember me" />
          <Button type="submit" variant="primary" block>Sign in</Button>
        </form>
      </div>
    );
  },
};

export const FormProviderPropagation: Story = {
  render: () => {
    const [disabled, setDisabled] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Switch label="Disable all fields" checked={disabled} onChange={e => setDisabled(e.target.checked)} />
        <FormProvider disabled={disabled} size="sm">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <TextField label="First name" placeholder="Jane" fullWidth />
            <TextField label="Last name" placeholder="Doe" fullWidth />
            <Select label="Role" options={[{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }]} fullWidth />
            <Button type="submit" variant="primary">Save</Button>
          </div>
        </FormProvider>
      </div>
    );
  },
};

export const RegistrationForm: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} noValidate>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <TextField label="First name" placeholder="Jane" required fullWidth />
          <TextField label="Last name" placeholder="Doe" required fullWidth />
        </div>
        <TextField label="Email" type="email" placeholder="you@example.com" required fullWidth />
        <PasswordInput label="Password" showStrength placeholder="Choose a strong password" required fullWidth />
        <Select label="Country" options={[{ value: 'us', label: 'USA' }, { value: 'uk', label: 'UK' }]} fullWidth />
        <Checkbox label="I agree to the Terms of Service and Privacy Policy" required />
        <Button type="submit" variant="primary" size="lg" block>Create Account</Button>
      </form>
    </div>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────
// Form stories are fully composed layouts; use the stories above for interaction.
// Custom story reserved for future single-field controls exploration.
export const Custom: Story = {
  name: 'Custom (controls)',
  render: () => (
    <p style={{ color: 'var(--av-color-text-secondary)', fontSize: 14 }}>
      See Login Form, Registration Form, and Form Provider Propagation stories above for interactive examples.
    </p>
  ),
};
