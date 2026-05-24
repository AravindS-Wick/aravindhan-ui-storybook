import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  FileUpload, CopyButton, ColorPicker, TreeView, type TreeNode,
  Image, Rating, Stepper, ScrollArea,
} from '@aravi1008/ui-react';

const meta: Meta = { title: 'Advanced/Misc', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const FileUploadDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <FileUpload label="Upload avatar" accept="image/*" maxSize={2 * 1024 * 1024} helperText="PNG, JPG up to 2 MB" />
      <FileUpload label="Documents" accept=".pdf,.doc,.docx" multiple helperText="Multiple files allowed" />
    </div>
  ),
};

export const CopyButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <CopyButton value="npm install @aravi1008/ui" />
      <CopyButton value="yarn add @aravi1008/ui" label="Copy yarn" copiedLabel="Copied yarn!" variant="secondary" />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: '#111', borderRadius: 6, color: '#e5e7eb', fontFamily: 'monospace', fontSize: 13 }}>
        <span>npm install @aravi1008/ui</span>
        <CopyButton value="npm install @aravi1008/ui" size="sm" variant="ghost" style={{ color: '#9ca3af' }} />
      </div>
    </div>
  ),
};

export const ColorPickers: Story = {
  render: () => {
    const [color, setColor] = useState('#3b82f6');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <ColorPicker label="Brand color" value={color} onChange={e => setColor((e.target as HTMLInputElement).value)} />
        <div style={{ padding: 16, borderRadius: 8, background: color, color: '#fff', textAlign: 'center' }}>
          Preview: {color}
        </div>
        <ColorPicker label="No swatches" swatches={[]} showInput />
      </div>
    );
  },
};

const TREE_DATA: TreeNode[] = [
  {
    id: 'src', label: 'src', icon: <span>📁</span>,
    children: [
      {
        id: 'components', label: 'components', icon: <span>📁</span>,
        children: [
          { id: 'button', label: 'Button.tsx', icon: <span>⚛️</span> },
          { id: 'input', label: 'TextField.tsx', icon: <span>⚛️</span> },
          { id: 'modal', label: 'Modal.tsx', icon: <span>⚛️</span> },
        ],
      },
      { id: 'index', label: 'index.ts', icon: <span>📄</span> },
      { id: 'types', label: 'types.ts', icon: <span>📄</span> },
    ],
  },
  {
    id: 'public', label: 'public', icon: <span>📁</span>,
    children: [
      { id: 'icons', label: 'icons/', icon: <span>📁</span> },
    ],
  },
  { id: 'package', label: 'package.json', icon: <span>📦</span> },
];

export const TreeViewDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <TreeView nodes={TREE_DATA} defaultExpanded={['src','components']} />
      <TreeView nodes={TREE_DATA} defaultExpanded={['src']} showLines />
    </div>
  ),
};

export const ImageDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Image src="https://picsum.photos/300/200" alt="Random image" width={300} height={200} borderRadius={8} />
      <Image src="https://picsum.photos/300/201" alt="Another image" width={300} height={200} borderRadius={8} objectFit="cover" />
      <Image src="/nonexistent.jpg" alt="Fallback" width={200} height={200} fallback={<div style={{ width: 200, height: 200, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, fontSize: 40 }}>🖼</div>} />
    </div>
  ),
};
