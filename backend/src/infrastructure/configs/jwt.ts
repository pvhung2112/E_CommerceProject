export const JWT_CONFIG = {
  ACCESS: {
    SECRET: process.env.ACCESS_TOKEN_SECRET || 'fallback-access-secret-key',
    EXPIRATION: process.env.ACCESS_TOKEN_EXPIRATION || '15m',
  },

  REFRESH: {
    SECRET: process.env.REFRESH_TOKEN_SECRET || 'fallback-refresh-secret-key',
    EXPIRATION: process.env.REFRESH_TOKEN_EXPIRATION || '7d',
  }
};
