import { env } from './config/env.ts'
import { app } from './server/index.ts'

export default {
    fetch: app.fetch,
    port: env.HONO_PORT,
}
