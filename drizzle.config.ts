import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    dialect: 'sqlite',
    driver: 'd1-http', // or 'd1' if using mostly Cloudflare bindings locally
    dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
        databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
        token: process.env.CLOUDFLARE_API_TOKEN!,
    },
} satisfies Config;
