import express, { Application } from 'express'
import cors from 'cors'
import routes from './app/routes/index'

const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Route
app.use('/api/v1/', routes)

export default app
