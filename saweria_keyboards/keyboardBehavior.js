const { keyboard, Key, mouse, Button } = require('@nut-tree/nut-js')

const ultimateButton = async () => {
    await keyboard.pressKey(Key.X)
    await keyboard.releaseKey(Key.X)
    await mouse.click(Button.LEFT)
    await mouse.click(Button.LEFT)
}

const spamOpenMap = async () => {
    await keyboard.pressKey(Key.M)
    await keyboard.releaseKey(Key.M)
}

const teaBag = async () => {
    await keyboard.pressKey(Key.LeftControl)
    await keyboard.releaseKey(Key.LeftControl)
}

const bunnyHop = async () => {
    await keyboard.pressKey(Key.Space)
    await keyboard.releaseKey(Key.Space)
}

const endGame = async () => {
    await keyboard.pressKey(Key.LeftAlt, Key.F4)
    await keyboard.releaseKey(Key.LeftAlt, Key.F4)
    await keyboard.pressKey(Key.LeftAlt, Key.F4)
    await keyboard.releaseKey(Key.LeftAlt, Key.F4)
}

const typeWord = async (word) => {
    try {
        keyboard.config.autoDelayMs = 50
        await keyboard.pressKey(Key.LeftShift, Key.Enter)
        await keyboard.releaseKey(Key.LeftShift, Key.Enter)
        await keyboard.type(word)
        await keyboard.pressKey(Key.Enter)
        await keyboard.releaseKey(Key.Enter)
    }
    catch (e) {
        console.log('Exception: ', e)
    }
}

const dropWeapon = async () => {
    await keyboard.pressKey(Key.Num1)
    await keyboard.releaseKey(Key.Num1)
    await keyboard.pressKey(Key.G)
    await keyboard.releaseKey(Key.G)
}

module.exports = { ultimateButton, spamOpenMap, teaBag, bunnyHop, endGame, typeWord, dropWeapon }