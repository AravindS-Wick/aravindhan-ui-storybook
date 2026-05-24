# Aravindhan UI — Documentation Site

This is the official documentation and component showcase site for [`@aravi1008/ui`](https://www.npmjs.com/package/@aravi1008/ui), a CSS-class-based design system.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build

```bash
npm run build
```

Static output is written to `dist/`.

## Structure

```
src/
  assets/          — Static assets (logo, images)
  components/      — Custom Astro components (ComponentPreview, ThemePicker, etc.)
  content/docs/    — All MDX documentation pages
  styles/          — Global CSS (bridges Starlight vars to --av- tokens)
```

## About @aravi1008/ui

`@aravi1008/ui` is a lightweight, CSS-class-based design system with:

- **25 components** — Button, Modal, Card, Alert, Badge, and more
- **6 built-in themes** — light, dark, forest, ocean, professional, corporate
- **150+ SVG icons**
- **CSS prefix** — `av-` classes, `--av-` custom properties
- **Zero JS framework dependency** — works with React, Vue, Angular, Svelte, or plain HTML

GitHub: [AravindS-Wick/aravindhan-ui](https://github.com/AravindS-Wick/aravindhan-ui)
npm: [@aravi1008/ui](https://www.npmjs.com/package/@aravi1008/ui)
