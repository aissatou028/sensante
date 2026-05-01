<<<<<<< HEAD
import { defineConfig } from '@prisma/config'

export default defineConfig({
  earlyAccess: true,
  schema: {
    kind: 'single',
    filePath: 'prisma/schema.prisma',
  },
  migrate: {
    url: process.env.DATABASE_URL,
  },
})
=======
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  datasource: {
    url: env("DATABASE_URL"),
  },
});
>>>>>>> d0eb94a74d28f348c6fde1ed1feb50574ee45a99
