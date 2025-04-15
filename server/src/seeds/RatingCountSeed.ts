import { AppDataSource } from "../data-source";
import { Book } from "../entity/Books";

const updateRatings = async () => {
  await AppDataSource.initialize();

  const bookRepo = AppDataSource.getRepository(Book);
  const books = await bookRepo.find();

  for (const book of books) {
    book.price = Math.floor(Math.random() * (799 - 299 + 1)) + 299;
    book.star_rating = parseFloat((Math.random() * 2 + 3).toFixed(0.5));
    book.rating_count = Math.floor(Math.random() * 100).toString(); 
    await bookRepo.save(book);
  }

  console.log("Price & Ratings added to books.");
};

updateRatings()
