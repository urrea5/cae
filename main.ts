enum RadioMessage {
    message1 = 49434,
    drtre = 53391
}
input.onPinPressed(TouchPin.P0, function () {
    music.playTone(5 - 67, music.beat(BeatFraction.Whole))
})
serial.writeValue("x", 0)
serial.writeNumbers([
0,
1,
0
])
radio.sendMessage(RadioMessage.message1)
datalogger.log(datalogger.createCV("", 0))
led.plotBarGraph(
5,
Math.max(6, 6)
)
if (true) {
    radio.sendValue("name", 4655)
    led.toggle(1, 2)
} else {
    radio.sendMessage(RadioMessage.drtre)
}
music.playTone(698, Math.max(367, 664))
basic.showIcon(IconNames.Tortoise)
music.playTone(349, music.beat(BeatFraction.Whole))
servos.P0.setStopOnNeutral(true)
radio.sendMessage(RadioMessage.message1)
led.plotBarGraph(
0,
46
)
input.calibrateCompass()
basic.forever(function () {
    radio.sendMessage(RadioMessage.message1)
    led.toggle(EventBusSource.MICROBIT_ID_BUTTON_A, 2)
    datalogger.deleteLog(datalogger.DeleteType.Fast)
    led.plotBarGraph(
    0,
    0
    )
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 0)
})
control.inBackground(function () {
    control.reset()
    control.waitMicros(control.eventTimestamp())
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P1,
    EventBusValue.MICROBIT_BUTTON_EVT_UP
    )
})
