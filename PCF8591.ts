// Add your code here

let PCF8591_ADDRESS = 72;

enum AO {
    IN1 = 0,
    IN2,
    IN3,
    IN4,
    OUT
}

//% weight=20 color=#3333ff icon="\uf11b"
namespace Analog {
    let KEYSCAN = 0;
    //% blockID==Analog
    //% block="DAC %val"
    //% weight=90
    //% val.min = 0 val.max = 255
    export function DAC(val:number): void {
        let buf = pins.createBuffer(2);
        buf[0] = 64;
        buf[1] = val;
        pins.i2cWriteBuffer(PCF8591_ADDRESS, buf);
    }
}

