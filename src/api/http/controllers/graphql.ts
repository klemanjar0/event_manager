import AuthService from '../services/auth';
import Controller from '../controllers/controller';

import { schema } from 'graphql/schema';


class GraphQLController extends Controller {
    apiEntrypointPath = '/graphql';

    constructor(path) {
        super(path);
        this.setEndpoints([this.query]);
    }

    async query(ctx) {
        return await AuthService.register(ctx.request.body);
    }

}

export default new GraphQLController('/graphql');
