/**
 * SERIAL ONLY
 */
input.onButtonPressed(Button.A, function () {
    ddmb.unplot(base, ddmb.maxY())
    if (base == 0) {
        base = ddmb.maxX()
    } else {
        base = base - 1
    }
    ddmb.plot(base, ddmb.maxY())
})
input.onButtonPressed(Button.B, function () {
    ddmb.unplot(base, ddmb.maxY())
    if (base == ddmb.maxX()) {
        base = 0
    } else {
        base = base + 1
    }
    ddmb.plot(base, ddmb.maxY())
})
let score = 0
let wait = 0
let y = 0
let x = 0
let base = 0
dumbdisplay.powerUp(false, true)
dumbdisplay.pinPulseAsButtonClick(DigitalPin.P13, Button.A)
dumbdisplay.pinPulseAsButtonClick(DigitalPin.P16, Button.B)
ddmb.setup(9, 7)
dumbdisplay.backgroundColor("yellow")
ddmb.ledColor("green")
basic.forever(function () {
    ddmb.clearScreen()
    ddmb.plot(base, ddmb.maxY())
    x = randint(0, ddmb.maxX())
    y = 0
    while (true) {
        ddmb.plot(x, y)
        wait = 1000 - 100 * score
        if (wait < 100) {
            wait = 100
        }
        basic.pause(wait)
        ddmb.unplot(x, y)
        y = y + 1
        ddmb.plot(x, y)
        if (y == ddmb.maxY()) {
            if (base != x) {
                if (score > 0) {
                    score = score - 1
                }
                ddmb.showIcon(IconNames.Sad)
                basic.pause(500)
                ddmb.showString("Oh!")
                basic.pause(5000)
            } else {
                score = score + 1
            }
            if (score > 10) {
                ddmb.showString("$")
            } else {
                ddmb.showNumber(score)
            }
            basic.pause(500)
            break;
        }
    }
})
