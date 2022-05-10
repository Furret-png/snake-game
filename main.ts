let victory = 0
let defeat = 0
let done = 0
let length = 1
let appleX = 3
let appleY = 2
let score = 0
let direction = 1
let bright = 255
/// game over, unfinished
forever(function () {
    if (length >= 24) {
        victory = 1
    }
    if (snakeX[0] > 4 || snakeX[0] < 0 || snakeY[0] > 4 || snakeY[0] < 0) {
        defeat = 1
        basic.clearScreen()
    }
    if (defeat == 1 || victory == 1) {
        done = 1
    }
})
/// move snake based on direction
forever(function () {
    if (done == 0) {
        basic.clearScreen()
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
        length = snakeX.length
        /// if snake eats apple move apple, adjust score, and make snake longer
        if (snakeX[0] == appleX && snakeY[0] == appleY) {
            score += 1
            appleX = randint(0, 4)
            appleY = randint(0, 4)
            led.plotBrightness(appleX, appleY, bright - 55)
            snakeX.push(-1)
            snakeY.push(-1)
        }
    }
})
basic.forever(function () {
    led.plotBrightness(snakeX[0], snakeY[0], bright)
    while (appleX == snakeX[0] && appleY == snakeY[0]) {
        appleX = randint(0, 4)
        appleY = randint(0, 4)
    }
    if (length > 1) {
        while (appleX == snakeX[1] && appleY == snakeY[1]) {
            appleX = randint(0, 4)
            appleY = randint(0, 4)
        }
        if (length > 2) {
            while (appleX == snakeX[2] && appleY == snakeY[2]) {
                appleX = randint(0, 4)
                appleY = randint(0, 4)
            }
            if (length > 3) {
                while (appleX == snakeX[3] && appleY == snakeY[3]) {
                    appleX = randint(0, 4)
                    appleY = randint(0, 4)
                }
                if (length > 4) {
                    while (appleX == snakeX[4] && appleY == snakeY[4]) {
                        appleX = randint(0, 4)
                        appleY = randint(0, 4)
                    }
                    if (length > 5) {
                        while (appleX == snakeX[5] && appleY == snakeY[5]) {
                            appleX = randint(0, 4)
                            appleY = randint(0, 4)
                        }
                        if (length > 6) {
                            while (appleX == snakeX[6] && appleY == snakeY[6]) {
                                appleX = randint(0, 4)
                                appleY = randint(0, 4)
                            }
                            if (length > 7) {
                                while (appleX == snakeX[7] && appleY == snakeY[7]) {
                                    appleX = randint(0, 4)
                                    appleY = randint(0, 4)
                                }
                                if (length > 8) {
                                    while (appleX == snakeX[8] && appleY == snakeY[8]) {
                                        appleX = randint(0, 4)
                                        appleY = randint(0, 4)
                                    }
                                    if (length > 9) {
                                        while (appleX == snakeX[9] && appleY == snakeY[9]) {
                                            appleX = randint(0, 4)
                                            appleY = randint(0, 4)
                                        }
                                        if (length > 10) {
                                            while (appleX == snakeX[10] && appleY == snakeY[10]) {
                                                appleX = randint(0, 4)
                                                appleY = randint(0, 4)
                                            }
                                            if (length > 11) {
                                                while (appleX == snakeX[11] && appleY == snakeY[11]) {
                                                    appleX = randint(0, 4)
                                                    appleY = randint(0, 4)
                                                }
                                                if (length > 12) {
                                                    while (appleX == snakeX[12] && appleY == snakeY[12]) {
                                                        appleX = randint(0, 4)
                                                        appleY = randint(0, 4)
                                                    }
                                                    if (length > 13) {
                                                        while (appleX == snakeX[13] && appleY == snakeY[13]) {
                                                            appleX = randint(0, 4)
                                                            appleY = randint(0, 4)
                                                        }
                                                        if (length > 14) {
                                                            while (appleX == snakeX[14] && appleY == snakeY[14]) {
                                                                appleX = randint(0, 4)
                                                                appleY = randint(0, 4)
                                                            }
                                                            if (length > 15) {
                                                                while (appleX == snakeX[15] && appleY == snakeY[15]) {
                                                                    appleX = randint(0, 4)
                                                                    appleY = randint(0, 4)
                                                                }
                                                                if (length > 16) {
                                                                    while (appleX == snakeX[16] && appleY == snakeY[16]) {
                                                                        appleX = randint(0, 4)
                                                                        appleY = randint(0, 4)
                                                                    }
                                                                    if (length > 17) {
                                                                        while (appleX == snakeX[17] && appleY == snakeY[17]) {
                                                                            appleX = randint(0, 4)
                                                                            appleY = randint(0, 4)
                                                                        }
                                                                        if (length > 18) {
                                                                            while (appleX == snakeX[18] && appleY == snakeY[18]) {
                                                                                appleX = randint(0, 4)
                                                                                appleY = randint(0, 4)
                                                                            }
                                                                            if (length > 19) {
                                                                                while (appleX == snakeX[19] && appleY == snakeY[19]) {
                                                                                    appleX = randint(0, 4)
                                                                                    appleY = randint(0, 4)
                                                                                }
                                                                                if (length > 20) {
                                                                                    while (appleX == snakeX[20] && appleY == snakeY[20]) {
                                                                                        appleX = randint(0, 4)
                                                                                        appleY = randint(0, 4)
                                                                                    }
                                                                                    if (length > 21) {
                                                                                        while (appleX == snakeX[21] && appleY == snakeY[21]) {
                                                                                            appleX = randint(0, 4)
                                                                                            appleY = randint(0, 4)
                                                                                        }
                                                                                        if (length > 22) {
                                                                                            while (appleX == snakeX[22] && appleY == snakeY[22]) {
                                                                                                appleX = randint(0, 4)
                                                                                                appleY = randint(0, 4)
                                                                                            }
                                                                                            if (length > 23) {
                                                                                                while (appleX == snakeX[23] && appleY == snakeY[23]) {
                                                                                                    appleX = randint(0, 4)
                                                                                                    appleY = randint(0, 4)
                                                                                                }
                                                                                                if (length > 24) {
                                                                                                    while (appleX == snakeX[24] && appleY == snakeY[24]) {
                                                                                                        appleX = randint(0, 4)
                                                                                                        appleY = randint(0, 4)
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
/// starting pos
let snakeX = [1]
let snakeY = [2]
led.plotBrightness(snakeX[0], snakeY[0], bright)
/// plot apple (it flashes)
basic.forever(function () {
    led.plotBrightness(appleX, appleY, bright - 55)
    pause(300)
    led.unplot(appleX, appleY)
    pause(300)
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
led.plotBrightness(appleX, appleY, bright - 55)
pause(20)
led.unplot(appleX, appleY)
pause(20)
led.plotBrightness(appleX, appleY, bright - 55)
pause(20)
led.unplot(appleX, appleY)
pause(20)
led.plotBrightness(appleX, appleY, bright - 55)