import { t } from "elysia"

const EditVideoTypes = t.Object({
    videoid: t.String(),
    link: t.String()
})

export default EditVideoTypes