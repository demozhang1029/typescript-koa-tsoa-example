import Koa from 'koa';
import middleware from './middleware/index';
import router from './router';

const app = new Koa();

middleware(app);
router(app);

app.listen(3000);
