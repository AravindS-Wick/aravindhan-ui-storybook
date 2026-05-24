import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dropdown, DropdownItem, Menu, MenuItem, MenuDivider, Popover, Tooltip, Button } from '@aravi1008/ui-react';

const meta: Meta = {
  title: 'Navigation/Dropdown',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const DropdownMenu: Story = {
  render: () => (
    <Dropdown trigger={<Button variant="secondary">Actions ▾</Button>}>
      <DropdownItem icon={<span>✏️</span>}>Edit</DropdownItem>
      <DropdownItem icon={<span>📋</span>}>Duplicate</DropdownItem>
      <DropdownItem divider />
      <DropdownItem icon={<span>🗑</span>} disabled>Delete (disabled)</DropdownItem>
    </Dropdown>
  ),
};

export const ContextMenu: Story = {
  render: () => (
    <Menu>
      <MenuItem icon={<span>📂</span>}>Open</MenuItem>
      <MenuItem icon={<span>✏️</span>}>Rename</MenuItem>
      <MenuItem icon={<span>📋</span>}>Copy path</MenuItem>
      <MenuDivider />
      <MenuItem icon={<span>🗑</span>} danger>Delete</MenuItem>
    </Menu>
  ),
};

export const Popovers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: 40 }}>
      {(['top','bottom','left','right'] as const).map(p => (
        <Popover key={p} placement={p} content={
          <div style={{ padding: 8 }}>
            <strong>Popover {p}</strong>
            <p style={{ margin: '4px 0 0' }}>Rich content with any JSX.</p>
          </div>
        }>
          <Button size="sm" variant="secondary">{p}</Button>
        </Popover>
      ))}
    </div>
  ),
};

export const Tooltips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: 40 }}>
      {(['top','bottom','left','right'] as const).map(p => (
        <Tooltip key={p} content={`Tooltip on ${p}`} placement={p}>
          <Button size="sm" variant="outline">{p}</Button>
        </Tooltip>
      ))}
      <Tooltip content="Delayed tooltip" delay={600}>
        <Button size="sm" variant="outline">Delayed</Button>
      </Tooltip>
    </div>
  ),
};
