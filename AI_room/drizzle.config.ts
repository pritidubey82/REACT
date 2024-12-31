import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:ck0brfZH8KGg@ep-bold-glade-a5sbob11.us-east-2.aws.neon.tech/AI_ROOM?sslmode=require',
  },
});
