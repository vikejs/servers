import { apply, type App } from "@universal-middleware/elysia";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/elysia";

type EnhancedMiddlewareElysia = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareElysia[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
