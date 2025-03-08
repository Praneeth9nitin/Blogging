import { Hono } from 'hono'
import { route } from './routes/index'

const app = new Hono()

app.route('/api/v1',route)

export default app
