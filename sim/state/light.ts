
namespace pxsim {
    export class CPNeoPixelState {
        public NUM_PIXELS = 10;
        private neopixels: [number, number, number][] = [];
        private CPLAY_NEOPIXELPIN = 17;
        private brightness: number = 20;

        public setPixelColor(pixel: number, red: number, green: number, blue: number) {
            this.neopixels[pixel] = [red, green, blue];
        }

        public setBrightness(brightness: number) {
            this.brightness = brightness;
        }
        
        public getBrightness(): number{
            return this.brightness;
        }

        public getNeoPixels(): [number, number, number][] {
            return this.neopixels;
        }

        public rotate(offset: number = 1, reverse?: boolean) {
            for (let i = 0; i < offset; i++) {
                if(reverse)
                    this.neopixels.unshift(this.neopixels.pop());
                else
                    this.neopixels.push(this.neopixels.shift());
            }
        }

        public clearPixels() {
            this.neopixels = [];
        }
    }

    export class RedLEDState {
        on: boolean = false;
    }

    export enum Animation {
        Rainbow,
        RainbowCycle,
        Sparkle,
        RunningLights,
        TheatreChase,
        Fire
    }
    export enum Drawing {
        Rainbow,
        Comet
    }
}

namespace pxsim.light {

    export function showAnimation(animation: Animation) {
        let state = board().neopixelState;
        state.clearPixels();
        switch(animation) {
            case Animation.Rainbow: 
                animateRainbow(350); break;
            case Animation.RainbowCycle: 
                animationRainbowCycle(10); break;
            case Animation.Sparkle: 
                animateSparkle(0xff, 0xff, 0xff, 25); break;
            case Animation.RunningLights:
                animateRunningLights(0xff,0xff,0x00, 100); break;
            case Animation.TheatreChase:
                animateTheatreChase(0xff,0,0,100); break;
            case Animation.Fire: 
                animateFire(100, 50, 150); break;
            default:
        }
    }

    let pixeln = 0;
    function animateRainbow(SpeedDelay: number) {
        let state = board().neopixelState;
        setPixelColor(pixeln++, colorWheel(pixeln *25));
        if (pixeln == state.NUM_PIXELS + 1) {
            pixeln = 0;
            clearPixels();
        }
        runtime.queueDisplayUpdate();
        
        let cb = getResume();
        setTimeout(() => {
            runtime.queueDisplayUpdate();
            cb() }, SpeedDelay)
    }

    function animationRainbowCycle(Speed: number) {
        let state = board().neopixelState;
        // Make an offset based on the current millisecond count scaled by the current speed.
        let offset = control.millis() / Speed;
        // Loop through each pixel and set it to an incremental color wheel value.
        for(let i=0; i<state.NUM_PIXELS; ++i) {   
            //CircuitPlayground.strip.setPixelColor(i, CircuitPlayground.colorWheel(((i * 256 / 10) + offset) & 255));
            setPixelColor(i, colorWheel(((i * 256 / 10) + offset) & 255));
        }

        let cb = getResume();
        setTimeout(() => {
            runtime.queueDisplayUpdate();
            cb() }, 1)
    }

    function animateSparkle(red: number, green: number, blue: number, SpeedDelay: number) {
        let state = board().neopixelState;
        let Pixel = getRandomInt(0, state.NUM_PIXELS);
        setPixelColorRgb(Pixel,red,green,blue);

        let cb = getResume();
        runtime.queueDisplayUpdate();

        setTimeout(() => {   
            setPixelColorRgb(Pixel,0,0,0);
            cb() }, SpeedDelay)
    }

    let Position = 0;
    function animateRunningLights(red: number, green: number, blue: number, WaveDelay: number) {
        let state = board().neopixelState;
        Position++; // = 0; //Position + Rate;
        
        for(let i=0; i<state.NUM_PIXELS; i++) {
            // sine wave, 3 offset waves make a rainbow!
            //float level = sin(i+Position) * 127 + 128;
            //setPixel(i,level,0,0);
            //float level = sin(i+Position) * 127 + 128;
            setPixelColorRgb(i,((Math.sin(i+Position) * 127 + 128)/255)*red,
                    ((Math.sin(i+Position) * 127 + 128)/255)*green,
                    ((Math.sin(i+Position) * 127 + 128)/255)*blue);
        }
        
        runtime.queueDisplayUpdate();

        var cb = getResume();
        if (WaveDelay <= 0)
            cb();
        else {
            setTimeout(function () {
                if (Position == (state.NUM_PIXELS*2)) {
                    Position = 0;
                }
                runtime.queueDisplayUpdate();
                cb();
            }, WaveDelay);
        }
    }

    let q = 0;
    function animateTheatreChase(red: number, green: number, blue: number, SpeedDelay: number) {
        let state = board().neopixelState;
        
        for (let i=0; i < state.NUM_PIXELS; i=i+3) {
            setPixelColorRgb(i+q, red, green, blue);    //turn every third pixel on
        }
        runtime.queueDisplayUpdate();
        
        var cb = getResume();
        if (SpeedDelay <= 0)
            cb();
        else {
            setTimeout(function () {
                for (let i=0; i < state.NUM_PIXELS; i=i+3) {
                    setPixelColorRgb(i+q, 0,0,0);        //turn every third pixel off
                }
                runtime.queueDisplayUpdate();

                q++;
                if (q == 3) {
                    q = 0;
                }
                cb();
            }, SpeedDelay);
        }
    }

    function setAll(rgb: number) {
        let state = board().neopixelState;
        for(let i = 0;i <state.NUM_PIXELS; i++) {
            setPixelColor(i, rgb);
        }
    }

    function animateFire(Cooling: number, Sparking: number, SpeedDelay: number) {
        let state = board().neopixelState;
        
        let heat: number[] = [];
        let cooldown: number;
        let NUM_PIXELS = state.NUM_PIXELS / 2;
        
        // Step 1.  Cool down every cell a little
        for(let i = 0; i < NUM_PIXELS; i++) {
            cooldown = getRandomInt(0, ((Cooling * 10) / NUM_PIXELS) + 2);
            if(cooldown>heat[i]) {
                heat[i]=0;
            } else {
                heat[i]=(heat[i]||0)-cooldown;
            }
        }
  
        // Step 2.  Heat from each cell drifts 'up' and diffuses a little
        for(let k= NUM_PIXELS - 1; k >= 2; k--) {
            heat[k] = (heat[k - 1] + heat[k - 2] + heat[k - 2]) / 3;
        }
    
        // Step 3.  Randomly ignite new 'sparks' near the bottom
        if((Math.random()*255) < Sparking ) {
            let y = getRandomInt(0,2);
            heat[y] = heat[y] + getRandomInt(160,255);
            //heat[y] = random(160,255);
        }

        // Step 4.  Convert heat to LED colors
        for(let j = 0; j < NUM_PIXELS; j++) {
            setPixelHeatColor(NUM_PIXELS-j-1, heat[j] );
            setPixelHeatColor(NUM_PIXELS+j, heat[j] );
        }

        runtime.queueDisplayUpdate(); //showStrip
//        control.delay(SpeedDelay);        

        var cb = getResume();
        if (SpeedDelay <= 0)
            cb();
        else {
            setTimeout(function () {
                cb();
            }, SpeedDelay);
        }
    }

    function setPixelHeatColor(Pixel: number, temperature: number) {
        // Scale 'heat' down from 0-255 to 0-191
        let t192 = Math.round((temperature/255.0)*191);
        
        // calculate ramp up from
        let heatramp = t192 & 0x3F; // 0..63
        heatramp <<= 2; // scale up to 0..252
        
        // figure out which third of the spectrum we're in:
        if( t192 > 0x80) {                     // hottest
            setPixelColorRgb(Pixel, 255, 255, heatramp);
        } else if( t192 > 0x40 ) {             // middle
            setPixelColorRgb(Pixel, 255, heatramp, 0);
        } else {                               // coolest
            setPixelColorRgb(Pixel, heatramp, 0, 0);
        }
    }


    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    export function showDrawing(drawing: Drawing) {
        switch(drawing) {
            case Drawing.Rainbow: 
                showRainbow(); break;
            case Drawing.Comet: 
                showComet(); break;
            default:
        }
    }

    function showRainbow() {
        let state = board().neopixelState;
        for (let i = 0; i < state.NUM_PIXELS; i++) {
            setPixelColor(i, colorWheel(i * 25));
        }
        runtime.queueDisplayUpdate();
    }

    function showComet() {
        let state = board().neopixelState;
        for (let i = 0; i < state.NUM_PIXELS; i++) {
            setPixelColorRgb(i, 255-(i*25), 0, 0);
        }
        runtime.queueDisplayUpdate();
    }

    export function rotate(offset: number = 1) {
        let state = board().neopixelState;
        if (offset < 0
            || offset >= state.NUM_PIXELS)
            return;
        state.rotate(offset);
        runtime.queueDisplayUpdate()
    }

    export function redLED(value: boolean) {
        board().redLEDState.on = value;
        runtime.queueDisplayUpdate()
    }

    export function setPixelColor(pixel: number, rgb: number) {
        let state = board().neopixelState;
        if (pixel < 0
            || pixel >= state.NUM_PIXELS)
            return;
        state.setPixelColor(pixel, unpackR(rgb), unpackG(rgb), unpackB(rgb));
        runtime.queueDisplayUpdate()
    }

    export function setPixelColorRgb(pixel: number, red: number, green: number, blue: number) {
        console.log(`${red} ${green} ${blue}`)
        let state = board().neopixelState;
        if (pixel < 0
            || pixel >= state.NUM_PIXELS)
            return;
        state.setPixelColor(pixel, red, green, blue);
        runtime.queueDisplayUpdate()
    }

    export function clearPixels() {
        let state = board().neopixelState;
        state.clearPixels();
        runtime.queueDisplayUpdate()
    }

    export function colorWheel(WheelPos: number): number {
        WheelPos = 255 - WheelPos;
        if (WheelPos < 85) {
            return packRGB(255 - WheelPos * 3, 0, WheelPos * 3);
        }
        if (WheelPos < 170) {
            WheelPos -= 85;
            return packRGB(0, WheelPos * 3, 255 - WheelPos * 3);
        }
        WheelPos -= 170;
        return packRGB(WheelPos * 3, 255 - WheelPos * 3, 0);
    }

    export function rgb(r: number, g: number, b: number): number {
        return packRGB(r, g, b);
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }
}