import { apply, type App } from "@universal-middleware/express";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/express";

type EnhancedMiddlewareExpress = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareExpress[] = []) {
  // biome-ignore lint/suspicious/noExplicitAny: vike middleware is compatible with EnhancedMiddleware
  return apply(app, [...middlewares, vikeMiddleware as any]);
}
