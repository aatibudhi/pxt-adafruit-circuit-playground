/**
* Runtime and event utilities.
*/
//% weight=90 color="#EEDA47"
//% advanced=true
namespace control {

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    export function panic(code: number) { }

}

/*
while (true) {
    if (playground.leftButton()) {
        let i = 9;
        let v = 255
        while (i >= 0) {
            neopixels.setPixelColorRgb(i, 250 - v, v, v)
            i = i - 1
            v = v - 25
            serial.print(i)
            serial.print(v)
        }
    }
}
*/
