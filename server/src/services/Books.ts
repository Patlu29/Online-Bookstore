import { Book } from "../entity/Books";
import { AppDataSource } from "../data-source";

const BookRepo = AppDataSource.getRepository(Book);

export const AllBooks = async () => {
  const books = await BookRepo.find();
  return books;
};

export const BooksByGenre = async (Genre: string) => {
  const genre = Genre
  const filteredBooks = await BookRepo.find({ where: { genre } });
  return filteredBooks;  
};

export const BookByTitle = async(Title: string) => {
  const title = Title
  const filteredBooks = await BookRepo.findOneBy({title});
  return filteredBooks;  
}