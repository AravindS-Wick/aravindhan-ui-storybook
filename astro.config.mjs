import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Aravindhan UI',
      description: 'CSS-class-based design system — lightweight, themeable, framework-agnostic.',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: {
        github: 'https://github.com/AravindS-Wick/aravindhan-ui',
      },
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/AravindS-Wick/aravindhan-ui/edit/main/docs/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Theming', slug: 'getting-started/theming' },
          ],
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
        {
          label: 'Utilities',
          autogenerate: { directory: 'utilities' },
        },
        {
          label: 'Design Tokens',
          items: [
            { label: 'Overview', slug: 'tokens/overview' },
          ],
        },
        {
          label: 'Icons',
          slug: 'icons',
        },
        {
          label: 'JavaScript API',
          slug: 'javascript-api',
        },
        {
          label: 'Changelog',
          slug: 'changelog',
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'css design system, ui library, aravindhan ui, av- components, themeable css',
          },
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
