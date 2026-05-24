import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      // Resolve the react package source directly for hot reload
      '@aravi1008/ui-react': path.resolve(__dirname, '../../aravindhan-ui-mat/packages/react/src/index.ts'),
    };
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
