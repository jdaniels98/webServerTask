const express = require("express")
const app = express()

app.use("/static", express.static("public"))

app.listen(5002, () => {
    console.log("Listening on Port 5002")
})