let isValid = false
let Password = ""
let Leters = 0
let Numbers = 0
function checkInput (numberOfDigits: number, numberOfLetters: number) {
    isValid = true
    if (numberOfDigits < 2 || (numberOfLetters < 4 || numberOfDigits + numberOfLetters < 8)) {
        isValid = false
    }
    return isValid
}
function getNumber () {
    Password = "" + Password + randint(0, 9)
}
input.onButtonPressed(Button.A, function () {
    Leters = Leters + 1
    basic.showString("" + (Leters))
    basic.clearScreen()
})
function getLetter () {
    Password = "" + Password + String.fromCharCode(randint(97, 122))
}
input.onButtonPressed(Button.AB, function () {
    Password = ""
    if (checkInput(Numbers, Leters)) {
        createPassword()
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(131, music.beat(BeatFraction.Double))
    }
    basic.pause(1000)
    basic.showString(Password)
})
function createPassword () {
    for (let index = 0; index < Leters; index++) {
        getLetter()
    }
    for (let index = 0; index < Numbers; index++) {
        getNumber()
    }
}
input.onButtonPressed(Button.B, function () {
    Numbers = Numbers + 1
    basic.showNumber(Numbers)
    basic.clearScreen()
})
