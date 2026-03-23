# `@vikejs/elysia`

[Elysia](https://elysiajs.com) server adapter for [Vike](https://vike.dev).

## Installation

```sh
npm install @vikejs/elysia elysia
```

## Usage

```ts
import { Elysia } from 'elysia'
import vike from '@vikejs/elysia'

const app = new Elysia()

vike(app)

app.listen(3000)
```

You can pass additional [universal middlewares](https://github.com/magne4000/universal-middleware) as the second argument:

```ts
vike(app, [myMiddleware()])
```

This package also re-exports everything from [`@universal-middleware/elysia`](https://github.com/magne4000/universal-middleware).
