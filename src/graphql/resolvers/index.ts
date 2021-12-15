import { eventResolver }  from './eventResolver';
import { eventsResolver } from './eventsResolver';


export const resolvers = {
    Query: {
        ...eventsResolver,
        ...eventResolver,
    },
};
