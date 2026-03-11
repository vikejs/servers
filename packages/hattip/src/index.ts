import { apply, type App } from "@universal-middleware/hattip";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/hattip";

type EnhancedMiddlewareHattip = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareHattip[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
