input.onButtonPressed(Button.A, function () {
    mode = 1
    mula = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    mode = 0
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
})
let tempoh = 0
let mula = 0
let mode = 0
mode = 0
basic.forever(function () {
    if (mode == 0) {
        tempoh = Math.round(pins.map(
        edubitPotentioBit.readPotValue(),
        0,
        1023,
        0,
        60
        ))
        basic.showNumber(tempoh)
    } else if (mode == 1) {
        if (input.runningTime() - mula > tempoh * 1000) {
            edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
            edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
            edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
        }
    } else {
    	
    }
})
