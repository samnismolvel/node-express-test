import express from "express"
import morgan from "morgan"
import productRoutes from "./Routes/products.routes.js"
import { pool } from "./db/db.js"

const app = express()

app.use(morgan('dev'))
app.use(express.text())
app.use(express.json())

app.use(productRoutes)

app.listen(3000)
console.log("server listening on port", 3000)