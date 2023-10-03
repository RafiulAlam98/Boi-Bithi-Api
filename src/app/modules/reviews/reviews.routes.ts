import express from 'express'

import { ReviewController } from './reviews.controller'
import { RequestValidation } from '../../middlewares/validateRequest'
import { ReviewValidation } from './reviews.validation'

const router = express.Router()

router.patch(
  '/add-reviews/:id',
  RequestValidation.ValidateRequest(ReviewValidation.createZodSchema),
  ReviewController.addReview,
)

router.get('/:id', ReviewController.getSingleReview)

export const ReviewRoutes = {
  router,
}
