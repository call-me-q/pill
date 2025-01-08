export const port: number = parseInt(process.env.SERVER_PORT || "3000");
export const hostname: string = process.env.SERVER_HOST || "localhost";
export const isEncrypted: boolean =
  process.env.KEY != undefined && process.env.KEY.length > 0;
export const keypath: string | undefined = process.env.KEY;
export const certpath: string | undefined = process.env.CERT;
export const isOpenAPIEnabled: boolean =
  process.env.ENABLE_OPEN_API?.toLowerCase() === "true";
