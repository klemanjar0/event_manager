import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { createServer } from 'http';

import { port } from './config';
import createDatabase from './database';
import cors from './api/http/middlewares/cors';
import ApiRouter from '../src/api/http/controllers/api';

export const bootstrap = async () => {
    await createDatabase();
    const app = new Koa();

    app.use(cors);
    app.use(bodyParser());

    app.use(ApiRouter.routes());
    app.use(ApiRouter.allowedMethods());

    return createServer(app.callback());
};

export const startup = async () => {
    const app = await bootstrap();

    app.listen(port, () => {
        console.log(`listen on port ${port}`);
    });
};
