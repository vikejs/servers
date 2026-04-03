import { type App, apply } from "@universal-middleware/elysia";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/elysia";

type EnhancedMiddlewareElysia = Parameters<typeof apply>[1][number];

/**
 * Attach Vike middleware to an Elysia app
 */
export default function vike(app: App, middlewares: EnhancedMiddlewareElysia[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
