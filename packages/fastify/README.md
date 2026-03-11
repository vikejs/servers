# `@vikejs/fastify`

[Fastify](https://fastify.dev) server adapter for [Vike](https://vike.dev).

## Installation

```sh
npm install @vikejs/fastify fastify
```

## Usage

```ts
import Fastify from 'fastify'
import { addVikeMiddleware } from '@vikejs/fastify'

const app = Fastify()

await addVikeMiddleware(app)

await app.listen({ port: 3000 })
```

You can pass additional [universal middlewares](https://github.com/magne4000/universal-middleware) as the second argument:

```ts
await addVikeMiddleware(app, [myMiddleware()])
```

This package also re-exports everything from [`@universal-middleware/fastify`](https://github.com/magne4000/universal-middleware).
