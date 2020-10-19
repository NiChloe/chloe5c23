input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    chance = 3
    basic.showNumber(chance)
    while (chance > 0) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            music.playTone(523, music.beat(BeatFraction.Whole))
            chance += -1
            basic.showNumber(chance)
        }
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showIcon(IconNames.Chessboard)
    }
})
let chance = 0
basic.showIcon(IconNames.Heart)
