import { apply, type App } from "@universal-middleware/hattip";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/hattip";

type EnhancedMiddlewareHattip = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareHattip[] = []) {
  // biome-ignore lint/suspicious/noExplicitAny: vike middleware is compatible with EnhancedMiddleware
  return apply(app, [...middlewares, vikeMiddleware as any]);
}
