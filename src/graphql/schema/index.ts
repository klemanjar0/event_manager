import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';


import { Query }     from '../types/query';
import { types }     from '../types';
import { resolvers } from '../resolvers';


const schemaDefinition = `
    schema {
        query: Query
    }
`;


const typeDefs = [
    schemaDefinition,
    Query,
    ...types,
];


export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
