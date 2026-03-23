# `@vikejs/hono`

[Hono](https://hono.dev) server adapter for [Vike](https://vike.dev).

## Installation

```sh
npm install @vikejs/hono hono
```

## Usage

```ts
import { Hono } from 'hono'
import vike from '@vikejs/hono'

const app = new Hono()

vike(app)

export default app
```

You can pass additional [universal middlewares](https://github.com/magne4000/universal-middleware) as the second argument:

```ts
vike(app, [myMiddleware()])
```

This package also re-exports everything from [`@universal-middleware/hono`](https://github.com/magne4000/universal-middleware).
