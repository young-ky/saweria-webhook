const { mouse, left, right, up, down } = require('@nut-tree/nut-js')
const { randomNumber } = require('../utils/util')

const directionList = {
    1: 'left',
    2: 'right',
    3: 'up',
    4: 'down'
}

const getRandomDirection = () => {
    const direction = directionList[randomNumber(1, 4)]
    return direction
}

const autoDirection = async (x, position) => {
    switch(x) {
        case 'left':
            mouse.move(left(position))
            left(position)
            break
        case 'right':
            mouse.move(right(position))
            right(position)
            break
        case 'up':
            mouse.move(up(position))
            up(position)
            break
        case 'down':
            mouse.move(down(position))
            down(position)
            break
        default:
    }
}

const randomMouseMovement = async () => {
    autoDirection(getRandomDirection(), randomNumber(10, 200))
}

const changeWeapon = async () => {
    await mouse.scrollUp(randomNumber(3, 10))
    await mouse.scrollDown(randomNumber(3, 10))
}

module.exports = { randomMouseMovement, changeWeapon }