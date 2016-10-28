// here we go!

//playground.redLED(true)

//serial.print(254);

//neopixels.setPixelColorRgb(3, 0, 50, 0);

let x = 1

x = x + 1


/**
* Runtime and event utilities.
*/
//% weight=1 color="#333333"
//% advanced=true
namespace control {

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    export function panic(code: number) { }

}


while (true) {
    if (playground.leftButton()) {
        let i = 9;
        while (i >= 0 ) {
            serial.print(i)
            neopixels.setPixelColorRgb(i, 0, 255, 0)
            serial.print(i)
            serial.print(255)
            i = i - 1
        }
    }
    if (playground.rightButton()) {
        neopixels.clearPixels()
    }
}
