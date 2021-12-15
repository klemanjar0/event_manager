import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { createServer } from 'http';

import { ApolloServer, gql } from 'apollo-server-koa';

import { port } from './config';
import createDatabase from './database';
import cors from './api/http/middlewares/cors';
import ApiRouter from '../src/api/http/controllers/api';
import {schema} from "./graphql/schema";

const formatResponse = (response, args) => {
    console.log("queryString : ", args.queryString);
    console.log("variables : ", args.variables);
    return response;
};

export const bootstrap = async () => {
    await createDatabase();

    const server = new ApolloServer({ schema: schema, formatResponse });

    const app = new Koa();

    await server.start();

    server.applyMiddleware({ app, path: "/graph" });

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
