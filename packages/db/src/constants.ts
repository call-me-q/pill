// export const dbURL = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
export const dbURL = process.env.TURSO_DATABASE_URL ?? "";
export const authToken = process.env.TURSO_AUTH_TOKEN ?? "";
