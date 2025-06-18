import express from 'express'
import petsRouter from './routes/pets.routes'

const app = express()

app.use(express.json())
app.use(petsRouter)

export default app
