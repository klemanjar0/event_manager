import "reflect-metadata";
import { createConnection } from "typeorm";
import { models } from "../entity";

export default async () => {
    return await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "admin",
        database: "event-manager",
        entities: [
            ...models
        ],
        synchronize: true,
        logging: ['query', 'error'],
    }).then(connection => {
        console.log('mysql connection established');
    }).catch(error => console.log(error));

}
