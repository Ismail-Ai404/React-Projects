# Deployment to GitHub Pages

To deploy this Vite React project to GitHub Pages:

## 1. Build the project

```
npm run build
```

## 2. Push your code to GitHub

Make sure your code is committed and pushed to your GitHub repository.

## 3. Install gh-pages (if not already)

```
npm install --save-dev gh-pages
```

## 4. Add deploy scripts to package.json

Add these lines to your `package.json` scripts:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

## 5. Set correct base path in vite.config.js

In `vite.config.js`, add:

```
export default defineConfig({
	base: '/REPO_NAME/', // Replace REPO_NAME with your GitHub repo name
	// ...existing config...
})
```

## 6. Deploy

```
npm run deploy
```

## 7. Enable GitHub Pages in repo settings

Set the source to `gh-pages` branch.

Your app will be live at:
`https://<your-username>.github.io/<REPO_NAME>/`
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
