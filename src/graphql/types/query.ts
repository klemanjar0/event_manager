export const Query = `
    type Query {
        events: [Event]
        event(id: String!): Event
    }
`;
