const express = require("express")
const authRoutes = require("./routes/auth.route")
const cokkiePrser = require("cookie-parser")


const app = express()
app.use(express.json())
app.use(cokkiePrser())


app.use("/auth", authRoutes)






module.exports = app;