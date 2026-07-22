// Environment validation using Zod
const { z } = require('zod');

const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  GOOGLE_CLIENT_ID: z.string().default('your_google_client_id'),
  GOOGLE_CLIENT_SECRET: z.string().default('your_google_client_secret')
});

const env = envSchema.parse(process.env);

module.exports = env;