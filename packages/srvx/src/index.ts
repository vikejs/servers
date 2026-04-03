import { apply } from "@universal-middleware/srvx";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/srvx";

type EnhancedMiddlewareSrvx = Parameters<typeof apply>[0][number];

/**
 * Return a srvx handler with Vike middleware attached
 */
export default function vike(middlewares: EnhancedMiddlewareSrvx[] = []) {
  return apply([...middlewares, vikeMiddleware]);
}
