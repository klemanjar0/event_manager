import "reflect-metadata";
import { createConnection } from "typeorm";
import { Event } from "../entity/event";
import User from "../entity/user";
import RefreshToken from "../entity/refreshToken";

export default async () => {
    return await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "admin",
        database: "event-manager",
        entities: [
            Event, User, RefreshToken
        ],
        synchronize: true,
        logging: ['query', 'error'],
    }).then(connection => {
        console.log('mysql connection established');
    }).catch(error => console.log(error));

}
