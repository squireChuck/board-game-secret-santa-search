# bgs3-ui

To set up the ui for development:
1. Make sure [Node.js](https://nodejs.org/en/download/) is installed.
1. Install dependencies in this `ui` folder: `npm install`
1. Compile and serve on hot-reloading dev server: `npm run serve`

To build for prod or the local Koa server:
1. Make sure [Node.js](https://nodejs.org/en/download/) is installed.
1. Install dependencies in this `ui` folder: `npm install`
1. Compile and minify: `npm run build`
1. Copy the compiled assets (located in `dist`) into the `server` folder:
  `cp -r dist ../server/`

Important viewport breakpoints:
-  Mobile size max-width: < 43.75em - < 700px
-  @media (min-width: 43.75em) - 700px
-  @media (min-width: 56.25em) - 900px

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
