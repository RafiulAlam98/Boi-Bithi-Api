import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth/',
    route: UserRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
