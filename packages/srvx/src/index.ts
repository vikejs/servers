import { apply } from "@universal-middleware/srvx";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/srvx";

type EnhancedMiddlewareSrvx = Parameters<typeof apply>[0][number];

export function addVikeMiddleware(middlewares: EnhancedMiddlewareSrvx[] = []) {
  // biome-ignore lint/suspicious/noExplicitAny: vike middleware is compatible with EnhancedMiddleware
  return apply([...middlewares, vikeMiddleware as any]);
}
