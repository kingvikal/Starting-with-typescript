import {DataSource} from "typeorm";
import dotenv from "dotenv";
import { Task } from "./task.entity";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [Task],
    synchronize: true,
    
});

