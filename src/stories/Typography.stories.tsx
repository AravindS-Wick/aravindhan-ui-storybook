import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography, Link, Kbd, Code, Divider } from '@aravi1008/ui-react';

const meta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['h1','h2','h3','h4','h5','h6','body1','body2','subtitle1','subtitle2','caption','overline','label'] },
    muted: { control: 'boolean' },
    align: { control: 'select', options: ['left','center','right','justify'] },
    weight: { control: 'select', options: ['light','normal','medium','semibold','bold'] },
    clamp: { control: 'number' },
    gutterBottom: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = { args: { children: 'The quick brown fox jumps over the lazy dog.', variant: 'body1' } };

export const AllHeadings: Story = {
  render: () => (
    <div>
      {(['h1','h2','h3','h4','h5','h6'] as const).map(v => (
        <Typography key={v} variant={v}>{v} — Design System Heading</Typography>
      ))}
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Typography variant="body1">body1 — Regular paragraph text used for main content areas.</Typography>
      <Typography variant="body2">body2 — Slightly smaller body text for secondary content.</Typography>
      <Typography variant="caption">caption — Used for image captions and small annotations.</Typography>
      <Typography variant="overline">overline — ALL-CAPS label above content.</Typography>
    </div>
  ),
};

export const Links: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Link href="#">Default link</Link>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" underline="always">Always underlined</Link>
      <Link href="#" external>External ↗</Link>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command palette</div>
      <div>Inline <Code>const x = 42;</Code> code snippet</div>
      <Divider />
      <Typography variant="caption">After divider</Typography>
    </div>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body1',
    muted: false,
    align: 'left',
    weight: 'normal',
    gutterBottom: false,
  },
};
