import { Router } from "express";
import { ReviewController } from "../controllers/ReviewController";

const ReviewControl = new ReviewController()
export const ReviewRouter = Router()

ReviewRouter.get('/allreviews', ReviewControl.GetAllReviews)
ReviewRouter.get('/:user', ReviewControl.GetByUser)
ReviewRouter.get('/book/:title', ReviewControl.GetByBook)
ReviewRouter.post('/addreview', ReviewControl.PostReview)
