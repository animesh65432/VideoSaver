import { Elysia } from "elysia";

const app = new Elysia()

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
