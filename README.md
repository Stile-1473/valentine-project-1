# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tailwind CSS installation (Vite + React)

Follow these steps to add Tailwind CSS using the official Vite method:

1. Install Tailwind and dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure `tailwind.config.cjs` (example):

```js
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
```

3. Add Tailwind directives to your main CSS entry (already present if `src/index.css` exists):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Run dev server:

```bash
npm run dev
```

This project already uses Tailwind classes; ensure your `tailwind.config.cjs` content paths include `src/**/*.jsx` and `src/**/*.js`.
