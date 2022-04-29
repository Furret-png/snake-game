let length = 1
let appleX = 3
let appleY = 2
let score = 0
let direction = 1
let headx = 1
let heady = 2
forever(function () {
    led.plotBrightness(snekX[0], snekY[0], 255)
    led.plotBrightness(snekX[1], snekY[1], 255)
    length = snekX.length
})
forever(function () {
    if (direction == 0) {
        pause(900)
        led.unplot(snekX[0], snekY[0])
        snekY[0] = snekY[0] - 1
    }
    if (direction == 1) {
        pause(900)
        led.unplot(snekX[0], snekY[0])
        snekX[0] = snekX[0] + 1
    }
    if (direction == 2) {
        pause(900)
        led.unplot(snekX[0], snekY[0])
        snekY[0] = snekY[0] + 1
    }
    if (direction == 3) {
        pause(900)
        led.unplot(snekX[0], snekY[0])
        snekX[0] = snekX[0] - 1
    }
    if (snekX[0] == appleX && snekY[0] == appleY) {
        score =score+1
        appleX=randint(0,4)
        appleY=randint(0,4)
        led.plotBrightness(appleX, appleY, 200)
        snekX.push(1)
        snekY.push(1)
    }
})
let snekX = [1]
let snekY = [2]
let notOpenX = [snekX[0]]
let notOpenY = [snekY[0]]
basic.forever(function() {
    led.plotBrightness(appleX, appleY, 200)
    pause(375)
    led.unplot(appleX, appleY)
    pause(375)
})
input.onButtonPressed(Button.A, function () {
    direction = direction -1
    if(direction<0) {
        direction = 3
    }
})
input.onButtonPressed(Button.B, function () {
    direction = direction + 1
    if (direction>3) {
        direction = 0
    }
    basic.clearScreen()
})