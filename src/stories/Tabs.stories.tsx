import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs, Accordion } from '@aravi1008/ui-react';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['tabs','pills','underline'] },
    placement: { control: 'select', options: ['top','bottom','left','right'] },
    fill: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const ITEMS = [
  { id: 'overview', label: 'Overview', content: <p>Overview content with key metrics and summary information.</p> },
  { id: 'analytics', label: 'Analytics', content: <p>Detailed analytics charts and data breakdowns.</p> },
  { id: 'settings', label: 'Settings', content: <p>Configuration options and preferences.</p> },
  { id: 'billing', label: 'Billing', disabled: true, content: <p>Billing information.</p> },
];

export const Default: Story = { render: () => <Tabs items={ITEMS} /> };
export const Pills: Story = { render: () => <Tabs items={ITEMS} variant="pills" /> };
export const Underline: Story = { render: () => <Tabs items={ITEMS} variant="underline" /> };
export const Filled: Story = { render: () => <Tabs items={ITEMS} fill /> };
export const Vertical: Story = {
  render: () => <div style={{ display: 'flex', gap: 16 }}><Tabs items={ITEMS} placement="left" /></div>,
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    variant: 'tabs',
    placement: 'top',
    fill: false,
  },
  render: ({ variant, placement, fill }) => <Tabs items={ITEMS} variant={variant} placement={placement} fill={fill} />,
};

export const AccordionVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Accordion items={[
        { id: '1', label: 'What is @aravi1008/ui?', children: 'A CSS-class-based design system with React and Vue wrappers.' },
        { id: '2', label: 'How do I install it?', children: 'Run: npm install @aravi1008/ui @aravi1008/ui-react' },
        { id: '3', label: 'Does it support dark mode?', children: 'Yes! Add data-av-theme="dark" to your html element or use ThemeProvider.' },
      ]} />
      <Accordion allowMultiple items={[
        { id: 'a', label: 'Allow multiple open', children: 'Multiple panels can be open at the same time.' },
        { id: 'b', label: 'Second panel', children: 'Each panel is independently expandable.' },
        { id: 'c', label: 'Third panel', children: 'All panels can be open simultaneously.' },
      ]} />
    </div>
  ),
};
