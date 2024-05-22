const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { randomMouseMovement, changeWeapon } = require('./saweria_mouses/mouseMovement')
const { ultimateButton, spamOpenMap, teaBag, bunnyHop, endGame, typeWord, dropWeapon } = require('./saweria_keyboards/keyboardBehavior')
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('get method called')
    res.send('you are calling get method')
})

app.post('/webhook/saweria', (req, res) => {
    const { amount_raw, donator_name, message } = req.body
    const timer = 10000
    console.log('=========================================================')
    console.log('donasi baru dari', donator_name, 'sebesar Rp.', amount_raw)
    console.log('pesan dari', donator_name, '->', message)

    if (amount_raw == 5000) {
        let interval = setInterval(() => teaBag(), 500)
        setTimeout(() => clearInterval(interval), timer)
    }
    else if (amount_raw == 8000) {
        setTimeout(() => ultimateButton(), 1000)
    }
    else if (amount_raw == 9000) {
        let interval = setInterval(() => spamOpenMap(), 100)
        setTimeout(() => clearInterval(interval), timer)
    }
    else if (amount_raw == 10000 && message.toLowerCase().includes('!ketik')) {
        const phrases = message.substring(6)
        setTimeout(() => typeWord(phrases), 1000)
    }
    else if (amount_raw == 12000) {
        let interval = setInterval(() => dropWeapon(), 100)
        setTimeout(() => clearInterval(interval), timer)
    }
    else if (amount_raw == 15000) {
        let interval = setInterval(() => bunnyHop(), 100)
        setTimeout(() => clearInterval(interval), timer)
    }
    // else if (amount_raw == 16000) {
    //     let interval = setInterval(() => randomMouseMovement(), 100)
    //     setTimeout(() => clearInterval(interval), timer)
    // }
    else if (amount_raw == 100000) {
        setTimeout(() => endGame(), 1000)
    }
    console.log('=========================================================')
    res.send('200 OK')
})

app.listen(port, () => {
    console.log(`app is up and running, listening to port ${port}`)
})