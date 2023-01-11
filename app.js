import express from 'express'
import cors from 'cors'
import {PORT, VIEWS_ORIGIN} from './settings.js'
import routes from './routes.js'

const app = express()
/*
app.use(cors({
    origin: VIEWS_ORIGIN
}))
*/
app.use(routes)
app.listen(3000)
console.log(`Server on port ${PORT}`)