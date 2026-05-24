import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Clock, Countdown } from '@aravi1008/ui-react';

const meta: Meta<typeof Clock> = {
  title: 'Advanced/Clock',
  component: Clock,
  tags: ['autodocs'],
  argTypes: {
    analog: { control: 'boolean' },
    hour12: { control: 'boolean' },
    showSeconds: { control: 'boolean' },
    value: { control: 'date' },
  },
};
export default meta;
type Story = StoryObj<typeof Clock>;

export const Digital: Story = { args: { label: 'Local Time' } };
export const Digital12h: Story = { args: { hour12: true, label: '12-hour format' } };
export const Analog: Story = { args: { analog: true, size: 200, label: 'Analog Clock' } };

export const WorldClocks: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      <Clock label="New York" timezone="America/New_York" />
      <Clock label="London" timezone="Europe/London" />
      <Clock label="Tokyo" timezone="Asia/Tokyo" />
      <Clock label="Sydney" timezone="Australia/Sydney" />
    </div>
  ),
};

export const AnalogClock: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <Clock analog size={160} label="Small" />
      <Clock analog size={220} label="Large" />
    </div>
  ),
};

export const CountdownTimer: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <Countdown seconds={300} showDays={false} onComplete={() => alert('Time is up!')} />
      <Countdown seconds={3661} compact />
      <Countdown
        targetDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
        showDays
      />
    </div>
  ),
};
