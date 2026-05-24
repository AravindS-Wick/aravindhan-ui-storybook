import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker, TimePicker, DateTimePicker, DateRangePicker } from '@aravi1008/ui-react';

const meta: Meta<typeof DatePicker> = {
  title: 'Inputs/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = { render: () => <DatePicker label="Date of birth" fullWidth /> };
export const WithError: Story = { render: () => <DatePicker label="Start date" error="Date is required" fullWidth /> };

export const AllVariants: Story = {
  render: () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <DatePicker label="Date" fullWidth />
        <TimePicker label="Time" fullWidth />
        <DateTimePicker label="Date & Time" fullWidth />
        <DateRangePicker
          label="Date Range"
          startValue={start}
          endValue={end}
          onStartChange={setStart}
          onEndChange={setEnd}
          fullWidth
        />
      </div>
    );
  },
};
