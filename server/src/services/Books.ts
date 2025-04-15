import { Book } from "../entity/Books";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

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
