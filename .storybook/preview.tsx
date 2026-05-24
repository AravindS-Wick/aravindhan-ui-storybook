import type { Preview, Decorator } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { ThemeProvider } from '@aravi1008/ui-react';
import './preview.css';
import '../../aravindhan-ui/dist/index.css';
import '../../aravindhan-ui/dist/themes/light.css';
import '../../aravindhan-ui/dist/themes/dark.css';
import '../../aravindhan-ui/dist/themes/forest.css';
import '../../aravindhan-ui/dist/themes/ocean.css';
import '../../aravindhan-ui/dist/themes/professional.css';
import '../../aravindhan-ui/dist/themes/corporate.css';

const ThemeDecorator: Decorator = (Story, context) => {
  // globals['theme'] is the display key ("Dark") — normalise to lowercase ("dark")
  const theme = ((context.globals['theme'] as string) ?? 'light').toLowerCase();
  return (
    <ThemeProvider theme={theme as never}>
      <div
        data-av-theme={theme}
        style={{
          padding: '1.5rem',
          minHeight: '100vh',
          color: 'var(--av-theme-color-text-primary, #0f172a)',
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
        forest: 'forest',
        ocean: 'ocean',
        professional: 'professional',
        corporate: 'corporate',
      },
      defaultTheme: 'light',
      attributeName: 'data-av-theme',
    }),
    ThemeDecorator,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    backgrounds: { disable: true }, // we handle backgrounds via theme
    docs: {
      toc: true,
    },
  },
};

export default preview;
