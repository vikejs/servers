import { apply, type App } from "@universal-middleware/fastify";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/fastify";

type EnhancedMiddlewareFastify = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareFastify[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}
