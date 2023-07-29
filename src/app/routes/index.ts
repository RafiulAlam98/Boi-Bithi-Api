import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { AuthRoutes } from '../modules/auth/auth.routes'
import { BookRoutes } from '../modules/books/books.routes'
import { ReviewRoutes } from '../modules/reviews/reviews.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth/',
    route: UserRoutes.router,
  },
  {
    path: '/auth/',
    route: AuthRoutes.router,
  },
  {
    path: '/books/',
    route: BookRoutes.router,
  },
  {
    path: '/reviews/',
    route: ReviewRoutes.router,
  },
  {
    path: '/reviews/',
    route: BookRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
