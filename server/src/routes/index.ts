import { Hono } from 'hono'
import { userRoute } from './user'
import { blogRoute } from './blogs'

export const route = new Hono()

route.route("/user",userRoute)
route.route("/blog",blogRoute)

  