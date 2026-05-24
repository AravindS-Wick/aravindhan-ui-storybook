import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal, Drawer, Button, TextField, useDisclosure } from '@aravi1008/ui-react';

const meta: Meta<typeof Modal> = {
  title: 'Overlays/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: { size: { control: 'select', options: ['sm','md','lg','xl','fullscreen'] } },
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();
    return (
      <>
        <Button variant="primary" onClick={open}>Open Modal</Button>
        <Modal open={isOpen} onClose={close} title="Confirm action" footer={
          <><Button variant="primary" onClick={close}>Confirm</Button><Button variant="ghost" onClick={close}>Cancel</Button></>
        }>
          <p>Are you sure you want to proceed? This action cannot be undone.</p>
        </Modal>
      </>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const sm = useDisclosure();
    const md = useDisclosure();
    const lg = useDisclosure();
    const xl = useDisclosure();
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button size="sm" onClick={sm.open}>Small</Button>
        <Button size="sm" onClick={md.open}>Medium</Button>
        <Button size="sm" onClick={lg.open}>Large</Button>
        <Button size="sm" onClick={xl.open}>XLarge</Button>
        <Modal open={sm.isOpen} onClose={sm.close} title="Small Modal" size="sm"><p>Small modal content</p></Modal>
        <Modal open={md.isOpen} onClose={md.close} title="Medium Modal" size="md"><p>Medium modal content</p></Modal>
        <Modal open={lg.isOpen} onClose={lg.close} title="Large Modal" size="lg"><p>Large modal content</p></Modal>
        <Modal open={xl.isOpen} onClose={xl.close} title="XLarge Modal" size="xl"><p>XLarge modal content</p></Modal>
      </div>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();
    return (
      <>
        <Button variant="primary" onClick={open}>New User</Button>
        <Modal open={isOpen} onClose={close} title="Create User" footer={
          <><Button variant="primary">Create</Button><Button variant="ghost" onClick={close}>Cancel</Button></>
        }>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <TextField label="Full name" placeholder="Jane Doe" fullWidth />
            <TextField label="Email" type="email" placeholder="jane@example.com" fullWidth />
          </div>
        </Modal>
      </>
    );
  },
};

// ── Custom (live controls) ────────────────────────────────────────────────────

export const Custom: Story = {
  name: 'Custom (controls)',
  args: { size: 'md' },
  render: (args) => {
    const { isOpen, open, close } = useDisclosure();
    return (
      <>
        <Button variant="primary" onClick={open}>Open Modal</Button>
        <Modal {...args} open={isOpen} onClose={close} title="Custom Modal"
          footer={<><Button variant="primary" onClick={close}>Confirm</Button><Button variant="ghost" onClick={close}>Cancel</Button></>}
        >
          <p>Use the controls panel to change the modal size and other props.</p>
        </Modal>
      </>
    );
  },
};

export const DrawerVariants: Story = {
  render: () => {
    const right = useDisclosure();
    const left = useDisclosure();
    const top = useDisclosure();
    const bottom = useDisclosure();
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button onClick={right.open}>Right Drawer</Button>
        <Button onClick={left.open}>Left Drawer</Button>
        <Button onClick={top.open}>Top Drawer</Button>
        <Button onClick={bottom.open}>Bottom Drawer</Button>
        <Drawer open={right.isOpen} onClose={right.close} title="Right Drawer" placement="right"><p>Right side content</p></Drawer>
        <Drawer open={left.isOpen} onClose={left.close} title="Left Drawer" placement="left"><p>Left side content</p></Drawer>
        <Drawer open={top.isOpen} onClose={top.close} title="Top Drawer" placement="top"><p>Top content</p></Drawer>
        <Drawer open={bottom.isOpen} onClose={bottom.close} title="Bottom Drawer" placement="bottom"><p>Bottom content</p></Drawer>
      </div>
    );
  },
};
