// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
Analog.DAC(255)
serial.redirectToUSB()
basic.forever(function() {
    // let tmp = Analog.ADC(AO.IN1)
    // basic.showNumber(tmp);
    // basic.pause(1000)
    Analog.ScanAllChannel()
    basic.pause(5000)
})