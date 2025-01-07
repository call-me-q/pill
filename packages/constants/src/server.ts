export const appServerURL = `http${process.env.ENABLE_SSL && process.env.ENABLE_SSL.toLowerCase() === "true" && "s"}://${process.env.APP_HOST ?? "0.0.0.0"}:${process.env.APP_PORT} ?? '5150`;
