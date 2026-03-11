# `@vikejs/express`

[Express](https://expressjs.com) server adapter for [Vike](https://vike.dev).

## Installation

```sh
npm install @vikejs/express express
```

## Usage

```ts
import express from 'express'
import { addVikeMiddleware } from '@vikejs/express'

const app = express()

addVikeMiddleware(app)

app.listen(3000)
```

You can pass additional [universal middlewares](https://github.com/magne4000/universal-middleware) as the second argument:

```ts
addVikeMiddleware(app, [myMiddleware()])
```

This package also re-exports everything from [`@universal-middleware/express`](https://github.com/magne4000/universal-middleware).
