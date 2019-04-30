import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello Koa';
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
