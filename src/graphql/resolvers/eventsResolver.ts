import { getRepository } from 'typeorm';
import Event from '../../entity/event';


export const eventsResolver = {
    async events() {
        const repository = getRepository(Event);
        return await repository.find();
    }
};
