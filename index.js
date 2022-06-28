const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

var DB = { games: [
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
]}

app.get("/games", (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})

app.get("/game/:id", (req, res) => {
    var id = parseInt(req.params.id)

    if(isNaN(id)) res.sendStatus(400)
    else {
        var game = DB.games.find(g => g.id == id)

        if (game == undefined) res.sendStatus(404)
        else res.json(game)
    }
})

app.listen(45678, () => { console.log("API running!") })