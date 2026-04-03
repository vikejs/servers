import { type App, apply } from "@universal-middleware/express";
import { toFetchHandler as _toFetchHandler } from "srvx/node";
import vikeMiddleware from "vike/universal-middleware";

export * from "@universal-middleware/express";

type EnhancedMiddlewareExpress = Parameters<typeof apply>[1][number];

/**
 * Attach Vike middleware to an Express.js app
 */
export default function vike(app: App, middlewares: EnhancedMiddlewareExpress[] = []) {
  return apply(app, [...middlewares, vikeMiddleware]);
}

export const toFetchHandler: typeof _toFetchHandler = (handler) => {
  const fetchHandler = (request: Request) =>
    // biome-ignore lint/suspicious/noExplicitAny: ok
    _toFetchHandler((req: any, res: any) => {
      // Cache used by universal-middleware
      req[Symbol.for("unRequest")] = request;
      return handler(req, res);
    })(request);
  return (request) => {
    return fetchHandler(request);
  };
};
