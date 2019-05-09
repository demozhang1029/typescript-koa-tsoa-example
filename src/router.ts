import Router from 'koa-router';
import './controllers/index';

const router = new Router();

export default (app: any) => {
    router.get('/', async (ctx: any, next: () => void) => {
        await next();
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello World</h1>'
    });

    router.get('/api', async (ctx: any, next: () => void) => {
        await next();
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello API</h1>'
    });

    app
        .use(router.routes())
        .use(router.allowedMethods());
}