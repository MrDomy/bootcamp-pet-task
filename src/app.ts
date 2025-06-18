import express from 'express'
import { loggerMiddleware } from './middleware/logger.middleware'
import petsRouter from './routes/pets.routes'

const app = express()

app.use(express.json())
app.use(loggerMiddleware)
app.use(petsRouter)

export default app
