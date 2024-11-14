import { Elysia } from 'elysia';
const app = new Elysia()


app.onError(({ error, code, set }) => {
    return {
        sucess: false,
        status: set.status || 500,
        message: error.message
    }
});
