input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    chance = 3
    basic.showNumber(chance)
    while (chance > 0) {
        if (input.pinIsPressed(TouchPin.P1)) {
            music.playTone(523, music.beat(BeatFraction.Whole))
            chance += -1
            basic.showNumber(chance)
        }
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
let chance = 0
basic.showIcon(IconNames.Heart)
