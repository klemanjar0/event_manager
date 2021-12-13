import * as Koa from 'koa';
import createDB from './database/index';

createDB().then(() => {
    const app = new Koa();

    app.use(async ctx => {
        ctx.body = 'ping';
    });

    app.listen(3000);
});

