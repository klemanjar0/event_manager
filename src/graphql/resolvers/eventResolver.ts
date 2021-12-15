import { getRepository } from 'typeorm';
import Event from '../../entity/event';


export const eventResolver = {
    async event(obj, { id }, context, info) {
        const repository = getRepository(Event);
        return await repository.findOne({ id });
    }
};
