import { type App, apply } from "@universal-middleware/h3";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/h3";

type EnhancedMiddlewareH3 = Parameters<typeof apply>[1][number];

/**
 * Attach Vike middleware to an H3 app
 */
export default function vike(app: App, middlewares: EnhancedMiddlewareH3[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
