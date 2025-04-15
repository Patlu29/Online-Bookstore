import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Book } from './Books';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  review_id: number;

  @ManyToOne(() => Book, book => book.book_id)
  book_id: Book;

  @ManyToOne(() => User, user => user.user_id)
  user_id: User;

  @Column()
  rating: number;

  @Column('text')
  comment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
