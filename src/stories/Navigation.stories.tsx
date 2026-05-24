import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Navbar, NavbarNav, NavItem, NavLink,
  Breadcrumb, BreadcrumbItem,
  Pagination,
  Stepper, type StepItem,
  Sidenav, SidenavItem, SidenavGroup, SidenavDivider,
} from '@aravi1008/ui-react';

const meta: Meta = { title: 'Navigation/Navbar', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const NavbarDemo: Story = {
  render: () => (
    <Navbar brand={<strong>@aravi1008/ui</strong>} sticky="top">
      <NavbarNav>
        <NavItem><NavLink href="#" active>Docs</NavLink></NavItem>
        <NavItem><NavLink href="#">Components</NavLink></NavItem>
        <NavItem><NavLink href="#">Examples</NavLink></NavItem>
      </NavbarNav>
    </Navbar>
  ),
};

export const BreadcrumbDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator="›">
        <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
        <BreadcrumbItem href="#">Settings</BreadcrumbItem>
        <BreadcrumbItem>Profile</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

export const PaginationDemo: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p>Current page: {page}</p>
        <Pagination total={10} page={page} onPageChange={setPage} />
        <Pagination total={10} page={page} onPageChange={setPage} showBoundary />
      </div>
    );
  },
};

const STEPS: StepItem[] = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile' },
  { label: 'Billing', description: 'Add payment method' },
  { label: 'Review', description: 'Confirm & launch' },
];

export const StepperDemo: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Stepper steps={STEPS} activeStep={step} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setStep(s => Math.max(0, s - 1))}>← Back</button>
          <button onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}>Next →</button>
        </div>
        <Stepper steps={STEPS} activeStep={2} orientation="vertical" />
      </div>
    );
  },
};

export const SidenavDemo: Story = {
  render: () => (
    <div style={{ width: 240, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <Sidenav>
        <SidenavGroup label="Main">
          <SidenavItem icon={<span>🏠</span>} active>Dashboard</SidenavItem>
          <SidenavItem icon={<span>👥</span>}>Users</SidenavItem>
          <SidenavItem icon={<span>📊</span>}>Analytics</SidenavItem>
        </SidenavGroup>
        <SidenavDivider />
        <SidenavGroup label="Settings">
          <SidenavItem icon={<span>⚙️</span>}>General</SidenavItem>
          <SidenavItem icon={<span>🔒</span>}>Security</SidenavItem>
        </SidenavGroup>
      </Sidenav>
    </div>
  ),
};

// ── Custom (live controls) ────────────────────────────────────────────────────
// Navigation components are interactive composites — use individual demos above.
// This Custom story provides a minimal Breadcrumb for quick prop exploration.
export const Custom: Story = {
  name: 'Custom (controls)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <p style={{ color: 'var(--av-color-text-secondary)', fontSize: 14 }}>
        Use the stories above to interact with each navigation component.
        Composite components (Navbar, Sidenav) are best explored via their dedicated stories.
      </p>
    </div>
  ),
};
