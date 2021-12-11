import express from 'express'
import cors from 'cors'


const config=require("../config")

// Import routes
import imagesRoutes from './routes/images.routes'

// App start
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Using routes
app.use('/api', imagesRoutes)

// Server Start
app.listen(config.port)
console.log('Serving on port '+config.port)
