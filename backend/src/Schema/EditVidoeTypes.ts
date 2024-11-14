import { t } from "elysia"

const EditvideoTypes = t.Object({
    videoid: t.String(),
    link: t.String()
})

export default EditvideoTypes