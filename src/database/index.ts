import "reflect-metadata";
import { createConnection } from "typeorm";
import { Event } from "../entity/event";

export default async () => {
    return await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "admin",
        database: "event-manager",
        entities: [
            Event
        ],
        synchronize: true,
        logging: ['query', 'error'],
    }).then(connection => {
        console.group('Created connection');
        console.log(connection.isConnected);
        console.groupEnd();
    }).catch(error => console.log(error));

}
