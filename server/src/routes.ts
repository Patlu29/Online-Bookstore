import { Router } from "express";
import { BookController } from "./controllers/BookControllers";

export const router = Router()
const BookControl = new BookController()

router.get('/allbooks', BookControl.GetAllBooks)
router.get('/books/:genre', BookControl.GetByGenre)