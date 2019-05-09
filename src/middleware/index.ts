import bodyParser from 'koa-bodyparser';
// import static from 'koa-static';


const logger = async (ctx: any, next: () => void) => {
    console.log(`${ctx.method} ${ctx.host}${ctx.url}`);
    await next();
};

export default (app: any) => {
    // app.use(static(path.join(__dirname, '/static')));
    app
        .use(logger)
        .use(bodyParser())
}