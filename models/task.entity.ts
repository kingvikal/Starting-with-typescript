import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Task extends BaseEntity {
	@PrimaryGeneratedColumn()
	 id: number;

	@Column()
	 name: string;

	@Column()
	 description: string;
}
