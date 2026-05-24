import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Icon, type IconName } from '@aravi1008/ui-react';

const ALL_ICONS: IconName[] = [
  'activity','alarm','anchor','angular','aperture','archive','arrow-down','arrow-left','arrow-right','arrow-up',
  'astro','at-sign','award','aws','azure','bar-chart','bar-chart-2','battery','bell','bell-off',
  'bluetooth','book','bookmark','box','briefcase','calendar','camera','cast','check','check-square',
  'chevron-down','chevron-left','chevron-right','chevron-up','circle-check','circle-x','claude','clock',
  'clock-1','clock-2','clock-3','clock-4','clock-5','clock-6','clock-7','clock-8','clock-9','clock-10',
  'clock-11','clock-12','clock-countdown','clock-deadline','clock-face','close','cloud','cloud-download',
  'cloud-upload','code','columns','compass','copilot','copy','cpu','credit-card','crop','cursor','cypress',
  'dart','database','disc','docker','download','drag','edit','esbuild','external-link','eye','eye-off',
  'figma','file','file-image','file-text','filter','firebase','flag','flutter','folder','folder-open',
  'gatsby','gcp','gemini','gift','github','globe','go','graphql','grid','heart','home','hourglass','image',
  'inbox','info','instagram','java','javascript','jest','key','kotlin','kubernetes','laptop','layers',
  'layout','link','link-off','linkedin','list','loader','lock','mail','map','map-pin','maximize','menu',
  'message','message-circle','mic','mic-off','minimize','minus','mongodb','monitor','moon','more-horizontal',
  'more-vertical','navigation','netlify','nextjs','nodejs','notion','nuxt','openai','package','paperclip',
  'pause','phone','php','pie-chart','play','plus','postgresql','printer','prisma','python','react','redis',
  'refresh','remix','rollup','rotate-ccw','rotate-cw','ruby','rust','search','send','server','settings',
  'share','shield','shield-check','shopping-cart','sidebar','skip-back','skip-forward','slack','smartphone',
  'sort','star','stop','storybook','sun','supabase','svelte','swift','tablet','tag','tailwind','terminal',
  'thumbs-down','thumbs-up','timer','trash','trending-down','trending-up','truck','twitter','typescript',
  'unlock','upload','user','user-minus','user-plus','users','vercel','video','video-off','vite','volume',
  'volume-off','vscode','vue','warning','webpack','wifi','wifi-off','windsurf','youtube','zoom-in','zoom-out',
];

const meta: Meta<typeof Icon> = {
  title: 'Advanced/Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: ALL_ICONS },
    size: { control: 'number' },
    strokeWidth: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const SingleIcon: Story = {
  args: { name: 'star', size: 32 },
};

export const IconGrid: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const filtered = ALL_ICONS.filter(n => n.includes(search.toLowerCase()));
    return (
      <div>
        <input
          type="search"
          placeholder="Search icons…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: 16, padding: '6px 12px', borderRadius: 6, border: '1px solid #d1d5db', width: '100%', maxWidth: 320 }}
        />
        <p style={{ marginBottom: 12, fontSize: 13, color: '#6b7280' }}>{filtered.length} icons</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 8 }}>
          {filtered.map(name => (
            <div
              key={name}
              onClick={() => navigator.clipboard?.writeText(name)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '12px 8px', borderRadius: 8, cursor: 'pointer', border: '1px solid transparent', transition: 'all 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f3f4f6')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              title={`Click to copy: ${name}`}
            >
              <Icon name={name} size={22} />
              <span style={{ fontSize: 10, textAlign: 'center', wordBreak: 'break-all', color: '#6b7280' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {[12,16,20,24,32,40,48].map(s => <Icon key={s} name="star" size={s} />)}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      {['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6'].map(c => (
        <Icon key={c} name="heart" size={28} style={{ color: c }} />
      ))}
    </div>
  ),
};
