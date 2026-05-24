import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastContainer, toast, Button } from '@aravi1008/ui-react';

const meta: Meta = {
  title: 'Overlays/Toast',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const AllTypes: Story = {
  render: () => (
    <>
      <ToastContainer />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={() => toast.show({ title: 'Info', message: 'This is an info toast.', type: 'info' })}>Info</Button>
        <Button variant="success" onClick={() => toast.show({ title: 'Success!', message: 'Changes saved.', type: 'success' })}>Success</Button>
        <Button variant="warning" onClick={() => toast.show({ title: 'Warning', message: 'Review your input.', type: 'warning' })}>Warning</Button>
        <Button variant="danger" onClick={() => toast.show({ title: 'Error', message: 'Something went wrong.', type: 'error' })}>Error</Button>
        <Button variant="secondary" onClick={() => toast.show({ title: 'Persistent', type: 'info', duration: 0 })}>Persistent</Button>
      </div>
    </>
  ),
};

export const Positions: Story = {
  render: () => (
    <>
      <ToastContainer position="top-right" />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {(['top-left','top-center','top-right','bottom-left','bottom-center','bottom-right'] as const).map(p => (
          <Button key={p} size="sm" variant="secondary" onClick={() => toast.show({ title: p, type: 'info' })}>
            {p}
          </Button>
        ))}
      </div>
    </>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  render: () => (
    <>
      <ToastContainer />
      <Button variant="primary" onClick={() => toast.show({ title: 'Custom Toast', message: 'Adjust the controls to change props.', type: 'info' })}>
        Show Toast
      </Button>
    </>
  ),
};
