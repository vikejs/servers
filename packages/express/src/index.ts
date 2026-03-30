import { type App, apply } from "@universal-middleware/express";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/express";
export { toFetchHandler } from "srvx/node";

type EnhancedMiddlewareExpress = Parameters<typeof apply>[1][number];

export default function vike(app: App, middlewares: EnhancedMiddlewareExpress[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
