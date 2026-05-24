import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Paper, Button, Typography, Avatar } from '@aravi1008/ui-react';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    bordered:  { control: 'boolean', description: 'Add a visible border' },
    hoverable: { control: 'boolean', description: 'Add a hover shadow effect' },
    flush:     { control: 'boolean', description: 'Remove default padding from card body' },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader>
        <Typography variant="h5">Card Title</Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="body2">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</Typography>
      </CardBody>
      <CardFooter>
        <Button variant="primary" size="sm">Action</Button>
        <Button variant="ghost" size="sm">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card style={{ maxWidth: 300, textAlign: 'center', padding: '24px 16px' }}>
      <CardBody>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Avatar initials="AS" size="xl" />
          <Typography variant="h5">Aravindhan S</Typography>
          <Typography variant="body2" muted>Senior Frontend Engineer</Typography>
          <Button variant="primary" size="sm">Follow</Button>
        </div>
      </CardBody>
    </Card>
  ),
};

export const PaperVariants: Story = {
  name: 'Paper – Elevations',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Typography variant="overline" muted>Shadow elevations (0–4)</Typography>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {([0,1,2,3,4] as const).map(e => (
          <Paper key={e} elevation={e} style={{ padding: '20px 24px', minWidth: 100, textAlign: 'center' }}>
            <Typography variant="caption" muted>elevation</Typography>
            <Typography variant="h5">{e}</Typography>
          </Paper>
        ))}
      </div>

      <Typography variant="overline" muted>Outlined variant</Typography>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Paper outlined style={{ padding: 16, minWidth: 140 }}>
          <Typography variant="body2">Outlined paper — border, no shadow. Use for subtle containers on non-white backgrounds.</Typography>
        </Paper>
        <Paper elevation={0} style={{ padding: 16, minWidth: 140, background: 'var(--av-color-surface-raised)' }}>
          <Typography variant="body2">Elevation 0 — flat surface. Use inside modals or cards.</Typography>
        </Paper>
      </div>

      <Typography variant="overline" muted>As semantic elements</Typography>
      <div style={{ display: 'flex', gap: 16 }}>
        <Paper as="section" elevation={2} style={{ padding: 16, flex: 1 }}>
          <Typography variant="h6">Section</Typography>
          <Typography variant="body2" muted>Paper renders as any HTML element via the `as` prop.</Typography>
        </Paper>
        <Paper as="article" elevation={2} radius="lg" style={{ padding: 16, flex: 1 }}>
          <Typography variant="h6">Article (lg radius)</Typography>
          <Typography variant="body2" muted>Border radius is independently controllable.</Typography>
        </Paper>
      </div>
    </div>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: {
    bordered: false,
    hoverable: false,
    flush: false,
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 360, padding: 16 }}>
      <CardHeader><Typography variant="h5">Custom Card</Typography></CardHeader>
      <CardBody><Typography variant="body2">Adjust the controls panel to explore card variants.</Typography></CardBody>
      <CardFooter>
        <Button variant="primary" size="sm">Action</Button>
        <Button variant="ghost" size="sm">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};
