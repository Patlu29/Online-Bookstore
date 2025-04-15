import { Request, Response, NextFunction } from "express";
import { AllBooks, BookByTitle, BooksByGenre } from "../services/Books";


export class BookController {
    // All Books
async GetAllBooks(req: Request, res: Response, next: NextFunction){
    try {
        const bookData = await AllBooks()
        res.status(200).json({data: bookData});
    }catch(e) {
        res.status(500).json({e})
    }
}
    // get by genre 

async GetByGenre (req: Request, res: Response, next: NextFunction) {
    try {
        const genre = req.params.genre
        const bookData = await BooksByGenre(genre)
        res.status(200).json({data: bookData})
    }catch(e) {
        res.status(500).json({e})
    }
}

    // get by title
async GetByTitle (req: Request, res: Response, next: NextFunction) {
    try {
        const title = req.params.title
        console.log(title);
        
        const bookData = await BookByTitle(title)
        res.status(200).json({data: bookData})
    }catch(e) {
        res.status(500).json({e})
    }
}
}
