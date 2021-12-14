import { Context } from 'koa';
import { User } from '../../../entity';

interface IState {
    payload: {
        id: number;
    };
    user?: User;
    jwtOriginalError?: Error;
}

export interface IParseUserMiddlewareContext extends Context {
    state: IState;
}
