import { apply, type App } from "@universal-middleware/fastify";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/fastify";

type EnhancedMiddlewareFastify = Parameters<typeof apply>[1][number];

export function addVikeMiddleware(app: App, middlewares: EnhancedMiddlewareFastify[] = []) {
  // biome-ignore lint/suspicious/noExplicitAny: vike middleware is compatible with EnhancedMiddleware
  return apply(app, [...middlewares, vikeMiddleware as any]);
}
