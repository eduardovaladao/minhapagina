const express = require('express')
const path = require('path')

app = express();

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/assets/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "assets/style.css"))
})

app.get("/assets/mobile-menu.js", (req, res) => {
    res.sendFile(path.join(__dirname, "assets/mobile-menu.js"))
})

app.get("/assets/eu.jpeg", (req, res) => {
    res.sendFile(path.join(__dirname, "assets/eu.jpeg"))
})

app.listen(8080, () => {
    console.log("Porta 8080 ligada...")
})