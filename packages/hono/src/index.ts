import { apply, type App } from "@universal-middleware/hono";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/hono";

type EnhancedMiddlewareHono = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareHono[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
