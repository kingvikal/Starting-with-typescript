import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./task.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({length: 20})
    firstname: string;

    @Column({length: 20})
    lastname: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @ManyToOne(()=>Task, (task)=> task.user)
    task: Task
}