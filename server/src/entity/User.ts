import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Review } from "./Reviews";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  user_id: number;

  @Column({ unique: true })
  userName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({default: "user"})
  role: string;
  Enumrators: ["admin", "user", "author"];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @OneToMany(() => Review, (review) => review.user_id)
  reviews: Review[];

}
