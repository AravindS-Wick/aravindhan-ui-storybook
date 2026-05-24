import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider, useTheme, Button, Card, CardBody, Badge, Typography, type ThemeName } from '@aravi1008/ui-react';

const meta: Meta = { title: 'Theme/ThemeProvider', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const THEMES: ThemeName[] = ['light','dark','forest','ocean','professional','corporate'];

function ThemeSwitcherDemo() {
  const { theme, setTheme } = useTheme();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {THEMES.map(t => (
          <Button key={t} variant={theme === t ? 'primary' : 'secondary'} size="sm" onClick={() => setTheme(t)}>
            {t}
          </Button>
        ))}
      </div>
      <Card>
        <CardBody>
          <Typography variant="h5">Current theme: <Badge variant="primary">{theme}</Badge></Typography>
          <Typography variant="body2" muted style={{ marginTop: 8 }}>
            The theme is applied via the <code>data-av-theme</code> attribute on the root element.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <ThemeSwitcherDemo />
    </ThemeProvider>
  ),
};

export const AllThemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {THEMES.map(t => (
        <div
          key={t}
          data-av-theme={t}
          style={{
            padding: 20,
            borderRadius: 8,
            border: '1px solid var(--av-theme-color-border, #e5e7eb)',
            background: 'var(--av-theme-color-surface, #fff)',
            color: 'var(--av-theme-color-text-primary, #0f172a)',
          }}
        >
          <Typography variant="label" style={{ textTransform: 'capitalize', marginBottom: 12, display: 'block' }}>{t}</Typography>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
            <Badge variant="success">Active</Badge>
            <Badge variant="danger">Error</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </div>
      ))}
    </div>
  ),
};
