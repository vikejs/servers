# `@vikejs/h3`

[H3](https://h3.unjs.io) server adapter for [Vike](https://vike.dev).

## Installation

```sh
npm install @vikejs/h3 h3
```

## Usage

```ts
import { createApp } from 'h3'
import { addVikeMiddleware } from '@vikejs/h3'

const app = createApp()

addVikeMiddleware(app)

export default app
```

You can pass additional [universal middlewares](https://github.com/magne4000/universal-middleware) as the second argument:

```ts
addVikeMiddleware(app, [myMiddleware()])
```

This package also re-exports everything from [`@universal-middleware/h3`](https://github.com/magne4000/universal-middleware).
