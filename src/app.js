const express = require("express")
const authRoutes = require("./routes/auth.route")
const postRoutes = require("./routes/post.routes")
const cookiePrser = require("cookie-parser")



const app = express()
app.use(express.json())
app.use(cookiePrser())


app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)






module.exports = app;