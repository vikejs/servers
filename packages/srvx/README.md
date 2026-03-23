# `@vikejs/srvx`

[srvx](https://srvx.unjs.io) server adapter for [Vike](https://vike.dev).

## Installation

```sh
npm install @vikejs/srvx srvx
```

## Usage

```ts
import { serve } from 'srvx'
import vike from '@vikejs/srvx'

serve({ fetch: vike() })
```

You can pass additional [universal middlewares](https://github.com/magne4000/universal-middleware) as the first argument:

```ts
serve({ fetch: vike([myMiddleware()]) })
```

This package also re-exports everything from [`@universal-middleware/srvx`](https://github.com/magne4000/universal-middleware).
