let done = 0
let length = 1
let appleX = 3
let appleY = 2
let score = 0
let direction = 1
let bright = 255
forever(function () {
    pause(900)
    if (direction == 0) {
        led.unplot(snakeX[0], snakeY[0])
        snakeY[0] += -1
    }
    if (direction == 1) {
        led.unplot(snakeX[0], snakeY[0])
        snakeX[0] += 1
    }
    if (direction == 2) {
        led.unplot(snakeX[0], snakeY[0])
        snakeY[0] += 1
    }
    if (direction == 3) {
        led.unplot(snakeX[0], snakeY[0])
        snakeX[0] += -1
    }
    led.plotBrightness(snakeX[0], snakeY[0], bright)
    length = snakeX.length
})
/// move snake based on direction
forever(function () {
    if (length > 24) {
        snakeX[24] = snakeX[23]
        snakeY[24] = snakeY[23]
        led.plotBrightness(snakeX[24], snakeY[24], bright - 212)
    } if (length > 23) {
        snakeX[23] = snakeX[22]
        snakeY[23] = snakeY[22]
        led.plotBrightness(snakeX[23], snakeY[23], bright - 204)
    } if (length > 22) {
        snakeX[22] = snakeX[21]
        snakeY[22] = snakeY[21]
        led.plotBrightness(snakeX[22], snakeY[22], bright - 196)
    } if (length > 21) {
        snakeX[21] = snakeX[20]
        snakeY[21] = snakeY[20]
        led.plotBrightness(snakeX[21], snakeY[21], bright - 188)
    } if (length > 20) {
        snakeX[20] = snakeX[19]
        snakeY[20] = snakeY[19]
        led.plotBrightness(snakeX[20], snakeY[20], bright - 180)
    } if (length > 19) {
        snakeX[19] = snakeX[18]
        snakeY[19] = snakeY[18]
        led.plotBrightness(snakeX[19], snakeY[19], bright - 172)
    } if (length > 18) {
        snakeX[18] = snakeX[17]
        snakeY[18] = snakeY[17]
        led.plotBrightness(snakeX[18], snakeY[18], bright - 164)
    } if (length > 17) {
        snakeX[17] = snakeX[16]
        snakeY[17] = snakeY[16]
        led.plotBrightness(snakeX[17], snakeY[17], bright - 156)
    } if (length > 16) {
        snakeX[16] = snakeX[15]
        snakeY[16] = snakeY[15]
        led.plotBrightness(snakeX[16], snakeY[16], bright - 148)
    } if (length > 15) {
        snakeX[15] = snakeX[14]
        snakeY[15] = snakeY[14]
        led.plotBrightness(snakeX[15], snakeY[15], bright - 140)
    } if (length > 14) {
        snakeX[14] = snakeX[13]
        snakeY[14] = snakeY[13]
        led.plotBrightness(snakeX[14], snakeY[14], bright - 132)
    } if (length > 13) {
        snakeX[13] = snakeX[12]
        snakeY[13] = snakeY[12]
        led.plotBrightness(snakeX[13], snakeY[13], bright - 124)
    } if (length > 12) {
        snakeX[12] = snakeX[11]
        snakeY[12] = snakeY[11]
        led.plotBrightness(snakeX[12], snakeY[12], bright - 116)
    } if (length > 11) {
        snakeX[11] = snakeX[10]
        snakeY[11] = snakeY[10]
        led.plotBrightness(snakeX[11], snakeY[11], bright - 108)
    } if (length > 10) {
        snakeX[10] = snakeX[9]
        snakeY[10] = snakeY[9]
        led.plotBrightness(snakeX[10], snakeY[10], bright - 100)
    } if (length > 9) {
        snakeX[9] = snakeX[8]
        snakeY[9] = snakeY[8]
        led.plotBrightness(snakeX[9], snakeY[9], bright - 92)
    } if (length > 8) {
        snakeX[8] = snakeX[7]
        snakeY[8] = snakeY[7]
        led.plotBrightness(snakeX[8], snakeY[8], bright - 84)
    } if (length > 7) {
        snakeX[7] = snakeX[6]
        snakeY[7] = snakeY[6]
        led.plotBrightness(snakeX[7], snakeY[7], bright - 76)
    } if (length > 6) {
        snakeX[6] = snakeX[5]
        snakeY[6] = snakeY[5]
        led.plotBrightness(snakeX[6], snakeY[6], bright - 68)
    } if (length > 5) {
        snakeX[5] = snakeX[4]
        snakeY[5] = snakeY[4]
        led.plotBrightness(snakeX[5], snakeY[5], bright - 60)
    } if (length > 4) {
        snakeX[4] = snakeX[3]
        snakeY[4] = snakeY[3]
        led.plotBrightness(snakeX[4], snakeY[4], bright - 52)
    } if (length > 3) {
        snakeX[3] = snakeX[2]
        snakeY[3] = snakeY[2]
        led.plotBrightness(snakeX[3], snakeY[3], bright - 44)
    } if (length > 2) {
        snakeX[2] = snakeX[1]
        snakeY[2] = snakeY[1]
        led.plotBrightness(snakeX[2], snakeY[2], bright - 36)
    } if (length > 1) {
        snakeX[1] = snakeX[0]
        snakeY[1] = snakeY[0]
        led.plotBrightness(snakeX[1], snakeY[1], bright - 28)
    }
    pause(900)
    if (length > 24) {
        led.unplot(snakeX[24], snakeY[24])
    } if (length > 23) {
        led.unplot(snakeX[23], snakeY[23])
    } if (length > 22) {
        led.unplot(snakeX[22], snakeY[22])
    } if (length > 21) {
        led.unplot(snakeX[21], snakeY[21])
    } if (length > 20) {
        led.unplot(snakeX[20], snakeY[20])
    } if (length > 19) {
        led.unplot(snakeX[19], snakeY[19])
    } if (length > 18) {
        led.unplot(snakeX[18], snakeY[18])
    } if (length > 17) {
        led.unplot(snakeX[17], snakeY[17])
    } if (length > 16) {
        led.unplot(snakeX[16], snakeY[16])
    } if (length > 15) {
        led.unplot(snakeX[15], snakeY[15])
    } if (length > 14) {
        led.unplot(snakeX[14], snakeY[14])
    } if (length > 13) {
        led.unplot(snakeX[13], snakeY[13])
    } if (length > 12) {
        led.unplot(snakeX[12], snakeY[12])
    } if (length > 11) {
        led.unplot(snakeX[11], snakeY[11])
    } if (length > 10) {
        led.unplot(snakeX[10], snakeY[10])
    } if (length > 9) {
        led.unplot(snakeX[9], snakeY[9])
    } if (length > 8) {
        led.unplot(snakeX[8], snakeY[8])
    } if (length > 7) {
        led.unplot(snakeX[7], snakeY[7])
    } if (length > 6) {
        led.unplot(snakeX[6], snakeY[6])
    } if (length > 5) {
        led.unplot(snakeX[5], snakeY[5])
    } if (length > 4) {
        led.unplot(snakeX[4], snakeY[4])
    } if (length > 3) {
        led.unplot(snakeX[3], snakeY[3])
    } if (length > 2) {
        led.unplot(snakeX[2], snakeY[2])
    } if (length > 1) {
        led.unplot(snakeX[1], snakeY[1])
    }
    /// if snake eats apple move apple, adjust score, and make snake longer
    if (snakeX[0] == appleX && snakeY[0] == appleY) {
        score += 1
        appleX = randint(0, 4)
        appleY = randint(0, 4)
        led.plotBrightness(appleX, appleY, bright - 55)
        snakeX.push(-1)
        snakeY.push(-1)
    }
})
/// starting pos
let snakeX = [1]
let snakeY = [2]
led.plotBrightness(snakeX[0], snakeY[0], bright)
/// plot apple (it flashes)
basic.forever(function () {
    led.plotBrightness(appleX, appleY, bright - 55)
    pause(375)
    led.unplot(appleX, appleY)
    pause(375)
})
/// change direction variable, slow
input.onButtonPressed(Button.A, function () {
    direction += -1
    if (direction < 0) {
        direction = 3
    }
})
input.onButtonPressed(Button.B, function () {
    direction += 1
    if (direction > 3) {
        direction = 0
    }
})
/// pastebin
if (length >= 24) {
    done = 1
}