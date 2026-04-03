import { type App, apply } from "@universal-middleware/hattip";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/hattip";

type EnhancedMiddlewareHattip = Parameters<typeof apply>[1][number];

/**
 * Attach Vike middleware to an Hattip app
 */
export default function vike(app: App, middlewares: EnhancedMiddlewareHattip[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
