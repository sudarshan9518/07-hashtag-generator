const express = require("express")
const authRoutes = require("./routes/auth.route")
const cookiePrser = require("cookie-parser")


const app = express()
app.use(express.json())
app.use(cookiePrser())


app.use("/api/auth", authRoutes)






module.exports = app;