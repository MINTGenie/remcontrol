let ir_code = 0
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
serial.writeValue("x", 0)
let newvalue = 0
basic.forever(function () {
    ir_code = makerbit.irButton()
    if (newvalue != ir_code) {
        newvalue = ir_code
        if (ir_code == 120) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.All)
        } else if (ir_code == 128) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
