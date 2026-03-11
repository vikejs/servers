import { apply, type App } from "@universal-middleware/h3";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/h3";

type EnhancedMiddlewareH3 = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareH3[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
