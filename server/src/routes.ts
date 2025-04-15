import { Router } from "express";
import { BookController } from "./controllers/BookControllers";

export const router = Router()
const BookControl = new BookController()

router.get('/allbooks', BookControl.GetAllBooks)
router.get('/:genre', BookControl.GetByGenre)