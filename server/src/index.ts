import { Hono } from 'hono'
import { route } from './routes/index'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())
app.route('/api/v1',route)

export default app
