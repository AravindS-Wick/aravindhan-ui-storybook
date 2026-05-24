import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, Container, Grid, GridItem, Stack, Divider, AspectRatio, ScrollArea } from '@aravi1008/ui-react';

const meta: Meta = { title: 'Layout/Layout', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const Block = ({ children, color = '#3b82f620' }: { children: React.ReactNode; color?: string }) => (
  <div style={{ background: color, border: '1px solid #3b82f660', borderRadius: 6, padding: '12px 16px', fontSize: 13 }}>{children}</div>
);

export const GridSystem: Story = {
  render: () => (
    <Container>
      <Grid cols={12} gap={16}>
        <GridItem span={12}><Block>span 12 — Full width</Block></GridItem>
        <GridItem span={6}><Block>span 6</Block></GridItem>
        <GridItem span={6}><Block>span 6</Block></GridItem>
        <GridItem span={4}><Block>span 4</Block></GridItem>
        <GridItem span={4}><Block>span 4</Block></GridItem>
        <GridItem span={4}><Block>span 4</Block></GridItem>
        <GridItem span={3}><Block>span 3</Block></GridItem>
        <GridItem span={3}><Block>span 3</Block></GridItem>
        <GridItem span={3}><Block>span 3</Block></GridItem>
        <GridItem span={3}><Block>span 3</Block></GridItem>
      </Grid>
    </Container>
  ),
};

export const StackLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Stack direction="row" spacing={8} align="center">
        <Block>Item 1</Block><Block>Item 2</Block><Block>Item 3</Block>
      </Stack>
      <Stack direction="column" spacing={8}>
        <Block>Row A</Block><Block>Row B</Block><Block>Row C</Block>
      </Stack>
    </div>
  ),
};

export const BoxComponent: Story = {
  render: () => (
    <Box p={24} bg="var(--av-color-primary-50, #eff6ff)" borderRadius={8} border="1px solid var(--av-color-primary-200, #bfdbfe)">
      <strong>Box</strong> — a layout primitive with any CSS prop passed as style shorthands.
    </Box>
  ),
};

export const AspectRatios: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 200px)', gap: 16 }}>
      <AspectRatio ratio="16/9"><Block color="#ef444420">16:9</Block></AspectRatio>
      <AspectRatio ratio="1/1"><Block color="#22c55e20">1:1</Block></AspectRatio>
      <AspectRatio ratio="4/3"><Block color="#a855f720">4:3</Block></AspectRatio>
    </div>
  ),
};

export const ScrollAreaDemo: Story = {
  render: () => (
    <ScrollArea style={{ height: 200, border: '1px solid var(--av-border-color, #e5e7eb)', borderRadius: 8 }}>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} style={{ padding: '8px 16px', borderBottom: '1px solid #f3f4f6' }}>Row {i + 1}</div>
      ))}
    </ScrollArea>
  ),
};
