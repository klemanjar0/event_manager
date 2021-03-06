import {
    Entity,
    BaseEntity,
    BeforeInsert,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
} from 'typeorm';
import User from './user';
import { createToken } from '../utils';

@Entity()
class RefreshToken extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;
    @Column({ type: 'varchar', unique: true, nullable: false })
    token: string;
    @OneToOne(() => User, (user) => user.refreshToken)
    user: User;

    refresh() {
        this.token = createToken({ date: new Date() });
    }

    @BeforeInsert()
    beforeInsert() {
        this.refresh();
    }
}

export default RefreshToken;
