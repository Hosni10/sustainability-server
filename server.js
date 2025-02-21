import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import authRouter from './src/modules/auth/auth.router.js'
import productRouter from './src/modules/product/product.router.js'
import trainingRouter from './src/modules/training/training.router.js'
import recyclingRouter from './src/modules/recycling-program/recycling.router.js'
import helmet from 'helmet'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import compression from 'compression'
import initiativeRouter from './src/modules/green-initiative/greenInitiative.router.js'
import cors from 'cors'
import path from 'path'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
dbConnection


app.use(express.json())
app.use(helmet())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'  // default message
}))
app.use(compression())

app.use(cors())

app.use('/auth',authRouter)
app.use('/product',productRouter)
app.use('/training',trainingRouter)
app.use('/recycling',recyclingRouter)
app.use('/initiative',initiativeRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))