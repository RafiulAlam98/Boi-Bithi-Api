import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthValidationController } from './auth.controller'

const router = express.Router()

router.put(
  '/login',
  RequestValidation.ValidateRequest(AuthValidation.loginZodSchema),
  AuthValidationController.loginUser,
)
export const AuthRoutes = {
  router,
}
