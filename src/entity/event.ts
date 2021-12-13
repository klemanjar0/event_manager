import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('events')
export class Event {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @CreateDateColumn()
    created_at: Date;


    @UpdateDateColumn()
    updated_at: Date;


    @Column('text')
    title: string;


    @Column('text', {
        nullable: true,
    })
    description: string;


    @Column('datetime', {
        nullable: true,
    })
    start_date: Date;


    @Column('datetime', {
        nullable: true,
    })
    due_date: Date;


    @Column('boolean', {
        default: false,
    })
    done: boolean;

}
