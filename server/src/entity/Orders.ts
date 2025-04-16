import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";
import { Book } from "./Books";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => User, (user) => user.userName)
    userName: string

    @ManyToOne(() => Book, (book) => book.title)
    book_name: string

    @Column('decimal')
    total_price: number;
  
    @Column({ default: 'pending' })
    status: string;
    Enumrators: ["pending", "successful"]
   
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

}