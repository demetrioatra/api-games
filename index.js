const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

var DB = {
    games: [
        {
            id: 1,
            title: "call of duty",
            year: 2019,
            price: 60
        },
        {
            id: 2,
            title: "sea of thieves",
            year: 2018,
            price: 59
        },
        {
            id: 3,
            title: "minecraft",
            year: 2017,
            price: 20
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})

app.listen(45678, () => {
    console.log("API running!")
})