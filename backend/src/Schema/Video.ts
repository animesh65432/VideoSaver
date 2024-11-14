import { t } from "elysia"

const Video = t.Object({
    link: t.String(),
    userId: t.String()
})

export default Video