input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(100)
    }
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(y, 4 - y)
        basic.pause(100)
    }
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(0, y)
        basic.pause(100)
    }
    control.reset()
})
