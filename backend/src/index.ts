import { Elysia } from "elysia";
import { UserRouter, VideoRouter } from "./router"
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()

app.use(swagger({
  path: "/v1/swagger"
}))

UserRouter(app)
VideoRouter(app)

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`)
})

