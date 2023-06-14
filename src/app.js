import * as dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import routes from './routes/index.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
routes(app)

export default app;