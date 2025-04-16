import { Router } from "express";
import { AuthorLogin, AuthorRegister, GetAllAuthors } from "../controllers/AuthorController";

export const AuhtorRouter = Router()

AuhtorRouter.get('/allauthors', GetAllAuthors)
AuhtorRouter.post('/register', AuthorRegister)
AuhtorRouter.post('/login', AuthorLogin) 