# `@vikejs/hattip`

[HatTip](https://github.com/hattipjs/hattip) server adapter for [Vike](https://vike.dev).

## Installation

```sh
npm install @vikejs/hattip @hattip/router
```

## Usage

```ts
import { createRouter } from '@hattip/router'
import vike from '@vikejs/hattip'

const router = createRouter()

vike(router)

export default router
```

You can pass additional [universal middlewares](https://github.com/magne4000/universal-middleware) as the second argument:

```ts
vike(router, [myMiddleware()])
```

This package also re-exports everything from [`@universal-middleware/hattip`](https://github.com/magne4000/universal-middleware).
