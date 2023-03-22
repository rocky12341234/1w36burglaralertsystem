let a = 0
basic.forever(function () {
    a = pins.digitalReadPin(DigitalPin.P0)
    pins.analogWritePin(AnalogPin.P1, a)
})
