import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    BeforeInsert,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
class Event extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;
    @Column({ type: 'datetime', nullable: true })
    start_date: Date;
    @Column({ type: 'datetime', nullable: true })
    due_date: Date;
    @Column({ type: 'varchar', nullable: false })
    title: string;
    @Column({ type: 'varchar', nullable: true })
    description: string;
    @Column({ type: 'varchar', nullable: true })
    type: string;
    @Column({ type: 'boolean', nullable: false, default: false })
    done: boolean;

    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}

export default Event;
