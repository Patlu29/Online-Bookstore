import { Review } from "../entity/Reviews";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Book } from "../entity/Books";
import { ILike } from "typeorm";

const ReviewRepo = AppDataSource.getRepository(Review);
const UserRepo = AppDataSource.getRepository(User)
const BookRepo = AppDataSource.getRepository(Book)

export const AllReviews = async () => {
  const reviews = await ReviewRepo.find();
  return reviews;
};

export const ReviewByUser = async (userName: string) => {
  const user = await UserRepo.findOne({ where: { userName: ILike(userName) } });

  if (!user) {
    throw new Error("User not found");
  }

  const userReviews = await ReviewRepo.find({
    where: { user: { user_id: user.user_id } },
    relations: ['user', 'book']
  });

  return userReviews;
};


export const ReviewByBook = async (title: string) => {
  const book = await BookRepo.findOne({ where: { title: ILike(title) } });

  if (!book) {
    throw new Error("Book not found");
  }

  const bookReviews = await ReviewRepo.find({
    where: { book: { book_id: book.book_id } },
    relations: ['user', 'book']
  });

  return bookReviews;
};

export const NewReview = async (
  title: string,
  userName: string,
  rating: number,
  comment: string,
) => {

  const book = await BookRepo.findOne({ where: { title:ILike(title) } });
  const user = await UserRepo.findOne({ where: { userName: ILike(userName) } });
  console.log(book, user);
  
  
  if (!book || !user) {
    throw new Error("User or Book not found");
  }
  
  const review = ReviewRepo.create({
    rating,
    comment,
    book,
    user
  });
  
  await ReviewRepo.save(review);
};