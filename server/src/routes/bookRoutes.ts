import { Router } from "express";
import { BookController } from "../controllers/BookControllers";

export const bookrouter = Router()
const BookControl = new BookController()

bookrouter.get('/allbooks', BookControl.GetAllBooks)
bookrouter.get('/:genre', BookControl.GetByGenre)
bookrouter.get('/book/:title', BookControl.GetByTitle)