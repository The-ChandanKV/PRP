// Environment validation using Zod
const { z } = require('zod');

const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});

const env = envSchema.parse(process.env);

module.exports = env;
