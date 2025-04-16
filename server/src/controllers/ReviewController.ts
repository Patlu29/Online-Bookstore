import { Request, Response, NextFunction } from "express";
import {
  AllReviews,
  NewReview,
  ReviewByBook,
  ReviewByUser,
} from "../services/Reviews";

export class ReviewController {
  // All reviews
  async GetAllReviews(req: Request, res: Response, next: NextFunction) {
    try {
      const reviewData = await AllReviews();
      res.status(200).json({ data: reviewData });
    } catch (e) {
      res.status(500).json({ e });
    }
  }
  // get by book

  async GetByBook(req: Request, res: Response, next: NextFunction) {
    try {
      const title = req.params.title;
      const bookReview = await ReviewByBook(title);
      res.status(200).json({ data: bookReview });
    } catch (e) {
      res.status(500).json({ e });
    }
  }

  // get by user
  async GetByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.params.user;
      console.log(user);

      const userReview = await ReviewByUser(user);
      res.status(200).json({ data: userReview });
    } catch (e) {
      res.status(500).json({ e });
    }
  }

  async PostReview(req: Request, res: Response, next: NextFunction) {
    try {
      const { rating, comment, title, userName } = req.body;
      const newReview = NewReview(title, userName, rating, comment);
      res
        .status(200)
        .json({ data: newReview });
    } catch (e) {
      res.status(500).json({ e });
    }
  }
}
