namespace pxsim.visuals {
    const MB_STYLE = `
        svg.sim {
            margin-bottom:1em;
        }
        svg.sim.grayscale {
            -moz-filter: grayscale(1);
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }
        .sim-button {
            pointer-events: none;
        }

        .sim-button-outer:hover {
            stroke:grey;
            stroke-width: 1px;
        }
        .sim-button-nut {
            fill:#704A4A;
            pointer-events:none;
        }
        .sim-button-nut:hover {
            stroke:1px solid #704A4A;
        }
        .sim-pin:hover {
            stroke:#D4AF37;
            stroke-width:1px;
        }

        .sim-pin-touch.touched:hover {
            stroke:darkorange;
        }

        .sim-led-back:hover {
            stroke:#fff;
            stroke-width:3px;
        }
        .sim-led:hover {
            stroke:#ff7f7f;
            stroke-width:3px;
        }

        .sim-systemled {
            fill:#333;
            stroke:#555;
            stroke-width: 1px;
        }

        .sim-light-level-button {
            stroke:#f1c40f;
            stroke-width: 1px;
        }

        .sim-sound-level-button {
            stroke:#7f8c8d;
            stroke-width: 1px;
        }

        .sim-antenna {
            stroke:#555;
            stroke-width: 2px;
        }

        .sim-text {
        font-family:"Lucida Console", Monaco, monospace;
        font-size:8px;
        fill:#fff;
        pointer-events: none; user-select: none;
        }
        .sim-text.inverted {
            fill:#000;
        }

        .sim-text-pin {
        font-family:"Lucida Console", Monaco, monospace;
        font-size:5px;
        fill:#fff;
        pointer-events: none;
        }

        .sim-thermometer {
            stroke:#aaa;
            stroke-width: 1px;
        }

        #rgbledcircle:hover {
            r:8px;
        }

        .sim-slide-switch:hover #SLIDE_HOVER {
            stroke:grey;
            stroke-width: 2px;
        }

        .sim-slide-switch-inner.on {
            fill:#ff0000;
        }

        /* animations */
        .sim-theme-glow {
            animation-name: sim-theme-glow-animation;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-duration: 1.25s;
        }
        @keyframes sim-theme-glow-animation {
            from { opacity: 1; }
            to   { opacity: 0.75; }
        }

        .sim-flash {
            animation-name: sim-flash-animation;
            animation-duration: 0.1s;
        }

        @keyframes sim-flash-animation {
            from { fill: yellow; }
            to   { fill: default; }
        }

        .sim-flash-stroke {
            animation-name: sim-flash-stroke-animation;
            animation-duration: 0.4s;
            animation-timing-function: ease-in;
        }

        @keyframes sim-flash-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }


        .sim-sound-stroke {
            animation-name: sim-sound-stroke-animation;
            animation-duration: 0.4s;
        }

        @keyframes sim-sound-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }

        /* wireframe */
        .sim-wireframe * {
            fill: none;
            stroke: black;
        }
        .sim-wireframe .sim-display,
        .sim-wireframe .sim-led,
        .sim-wireframe .sim-led-back,
        .sim-wireframe .sim-head,
        .sim-wireframe .sim-theme,
        .sim-wireframe .sim-button-group,
        .sim-wireframe .sim-button-label,
        .sim-wireframe .sim-button,
        .sim-wireframe .sim-text-pin
        {
            visibility: hidden;
        }
        .sim-wireframe .sim-label
        {
            stroke: none;
            fill: #777;
        }
        .sim-wireframe .sim-board {
            stroke-width: 2px;
        }
    `;
    const BOARD_SVG = `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.2" viewBox="0 0 144.058 145.025" y="0px" height="10in" x="0px" id="Layer_1" gorn="0" xml:space="preserve" width="16in" inkscape:version="0.91 r13725" sodipodi:docname="svg.breadboard.adafruit_56833bfc2324797dfba2eb6bc20240b9_4_breadboard.svg"><metadata id="metadata5335"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><defs id="defs5333"/><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1536" inkscape:window-height="801" id="namedview5331" showgrid="false" inkscape:zoom="1.8410826" inkscape:cx="57.441958" inkscape:cy="132.00639" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="Layer_1"/><desc id="desc3"><referenceFile>Adafruit_CircuitPlay_Dev_breadboard.svg</referenceFile></desc><desc id="desc5">Fritzing breadboard generated by brd2svg</desc><a id="a9463"><g gorn="0.2" id="breadboard"><g gorn="0.2.0" id="icon"><path id="path9" d="M62.129,1.65h19.8c39.403,5.468,66.913,41.842,61.445,81.245c-5.468,39.403-41.842,66.913-81.245,61.445S-4.784,102.498,0.684,63.095C5.113,31.174,30.208,6.079,62.129,1.65 M76.565,13.89c0,0.548,0.444,0.992,0.992,0.992c0.548,0,0.992-0.444,0.992-0.992l0,0c0-0.548-0.444-0.992-0.992-0.992C77.009,12.898,76.565,13.342,76.565,13.89z M65.51,13.89c0,0.548,0.444,0.992,0.992,0.992c0.548,0,0.992-0.444,0.992-0.992l0,0c0-0.548-0.444-0.992-0.992-0.992C65.954,12.898,65.51,13.342,65.51,13.89z M74.864,96.329c0,0.783,0.635,1.417,1.417,1.417c0.783,0,1.417-0.635,1.417-1.417l0,0c0-0.783-0.635-1.417-1.417-1.417C75.498,94.912,74.864,95.547,74.864,96.329z M66.36,96.329c0,0.783,0.635,1.417,1.417,1.417c0.783,0,1.417-0.635,1.417-1.417l0,0c0-0.783-0.635-1.417-1.417-1.417C66.995,94.912,66.36,95.547,66.36,96.329z M1.794,72.929c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.005,0-0.009,0-0.014c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C1.794,72.921,1.794,72.925,1.794,72.929z M100.254,15.883c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543s-4.539,2.023-4.543,4.528C100.254,15.872,100.254,15.877,100.254,15.883z M80.25,16.441c0,0.626,0.508,1.134,1.134,1.134c0.626,0,1.134-0.508,1.134-1.134c0-0.626-0.508-1.134-1.134-1.134C80.758,15.307,80.25,15.815,80.25,16.441L80.25,16.441z M61.541,16.441c0,0.626,0.507,1.134,1.133,1.135s1.134-0.507,1.135-1.133c0-0.001,0-0.001,0-0.002c0-0.626-0.507-1.134-1.133-1.135s-1.134,0.507-1.135,1.133C61.541,16.44,61.541,16.44,61.541,16.441z M80.959,8.504c-0.001,0.704,0.57,1.276,1.274,1.277c0.704,0.001,1.276-0.57,1.277-1.274c0-0.001,0-0.002,0-0.003c0.001-0.704-0.57-1.276-1.274-1.277c-0.704-0.001-1.276,0.57-1.277,1.274C80.959,8.502,80.959,8.503,80.959,8.504z M60.549,8.504c0,0.704,0.571,1.276,1.276,1.276c0.704,0,1.276-0.571,1.276-1.276c0.001-0.704-0.57-1.276-1.274-1.277c-0.704-0.001-1.276,0.57-1.277,1.274C60.549,8.502,60.549,8.503,60.549,8.504z M129.327,95.382c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C129.327,95.372,129.327,95.377,129.327,95.382z M34.554,16.063c-0.004,2.505,2.024,4.538,4.529,4.542c2.505,0.004,4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542c-2.505-0.004-4.538,2.024-4.542,4.529C34.554,16.054,34.554,16.058,34.554,16.063z M133.194,72.929c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C133.194,72.919,133.194,72.924,133.194,72.929z M34.734,129.977c-0.004,2.505,2.024,4.538,4.529,4.542c2.505,0.004,4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542c-2.505-0.004-4.538,2.024-4.542,4.529C34.734,129.968,34.734,129.973,34.734,129.977z M129.327,50.477c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C129.327,50.467,129.327,50.472,129.327,50.477z M117.917,30.604c-0.003,2.505,2.025,4.538,4.53,4.541c2.505,0.003,4.538-2.025,4.541-4.53c0-0.003,0-0.007,0-0.01c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C117.917,30.594,117.917,30.599,117.917,30.604z M117.917,115.255c-0.003,2.505,2.025,4.538,4.53,4.541c2.505,0.003,4.538-2.025,4.541-4.53c0-0.003,0-0.007,0-0.01c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C117.917,115.245,117.917,115.25,117.917,115.255z M5.841,96.102c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C5.841,96.093,5.841,96.098,5.841,96.102z M17.071,30.784c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C17.071,30.775,17.071,30.78,17.071,30.784z M5.661,50.477c-0.004,2.505,2.024,4.538,4.529,4.542c2.505,0.004,4.538-2.024,4.542-4.529c0-0.005,0-0.009,0-0.014c0.004-2.505-2.024-4.538-4.529-4.542c-2.505-0.004-4.538,2.024-4.542,4.529C5.661,50.468,5.661,50.473,5.661,50.477z M17.791,115.975c-0.004,2.505,2.024,4.538,4.529,4.542s4.538-2.024,4.542-4.529c0-0.004,0-0.009,0-0.013c0.004-2.505-2.024-4.538-4.529-4.542s-4.538,2.024-4.542,4.529C17.791,115.966,17.791,115.971,17.791,115.975z M100.254,129.977c-0.004,2.505,2.023,4.539,4.528,4.543c2.505,0.004,4.539-2.023,4.543-4.528c0-0.005,0-0.01,0-0.016c0.004-2.505-2.023-4.539-4.528-4.543c-2.505-0.004-4.539,2.023-4.543,4.528C100.254,129.967,100.254,129.972,100.254,129.977z" fill="#0A0A0A"/><g id="g11"><title id="title13">layer 21</title><g id="g15"><title id="title17">element:3.3VTAP</title><g id="g19"><title id="title21">package:SEWALLI</title></g></g><g id="g23"><title id="title25">element:3V3TAP2</title><g id="g27"><title id="title29">package:SEWALLI</title></g></g><g id="g31"><title id="title33">element:BATT</title><g id="g35"><title id="title37">package:JSTPH2</title><line id="line39" y2="142.633" stroke="#FFFFFF" y1="142.633" stroke-linecap="round" x1="78.408" stroke-width="0.576" fill="none" x2="65.651"/><line id="line41" y2="121.374" stroke="#FFFFFF" y1="132.713" stroke-linecap="round" x1="60.691" stroke-width="0.576" fill="none" x2="60.691"/><line id="line43" y2="121.374" stroke="#FFFFFF" y1="121.374" stroke-linecap="round" x1="60.691" stroke-width="0.576" fill="none" x2="63.1"/><line id="line45" y2="128.46" stroke="#FFFFFF" y1="121.374" stroke-linecap="round" x1="63.1" stroke-width="0.576" fill="none" x2="63.1"/><line id="line47" y2="128.46" stroke="#FFFFFF" y1="128.46" stroke-linecap="round" x1="63.1" stroke-width="0.576" fill="none" x2="67.069"/><line id="line49" y2="128.46" stroke="#FFFFFF" y1="128.46" stroke-linecap="round" x1="76.99" stroke-width="0.576" fill="none" x2="80.959"/><line id="line51" y2="121.374" stroke="#FFFFFF" y1="128.46" stroke-linecap="round" x1="80.959" stroke-width="0.576" fill="none" x2="80.959"/><line id="line53" y2="121.374" stroke="#FFFFFF" y1="121.374" stroke-linecap="round" x1="80.959" stroke-width="0.576" fill="none" x2="83.368"/><line id="line55" y2="132.713" stroke="#FFFFFF" y1="121.374" stroke-linecap="round" x1="83.368" stroke-width="0.576" fill="none" x2="83.368"/></g></g><g id="g57"><title id="title59">element:C1</title><g id="g61"><title id="title63">package:0603-NO</title></g></g><g id="g65"><title id="title67">element:C2</title><g id="g69"><title id="title71">package:0603-NO</title></g></g><g id="g73"><title id="title75">element:C3</title><g id="g77"><title id="title79">package:0603-NO</title></g></g><g id="g91"><title id="title93">element:C5</title><g id="g95"><title id="title97">package:0603-NO</title></g></g><g id="g99"><title id="title101">element:C6</title><g id="g103"><title id="title105">package:0603-NO</title></g></g><g id="g107"><title id="title109">element:C7</title><g id="g111"><title id="title113">package:0603-NO</title></g></g><g id="g125"><title id="title127">element:C9</title><g id="g129"><title id="title131">package:0603-NO</title></g></g><g id="g133"><title id="title135">element:CN1</title><g id="g137"><title id="title139">package:4UCONN_20329_V2</title><line id="line141" y2="17.008" stroke="#FFFFFF" y1="17.008" stroke-linecap="round" x1="79.116" stroke-width="0.36" fill="none" x2="76.848"/><line id="line143" y2="17.008" stroke="#FFFFFF" y1="17.008" stroke-linecap="round" x1="67.21" stroke-width="0.36" fill="none" x2="64.943"/><line id="line145" y2="1.701" stroke="#FFFFFF" y1="4.252" stroke-linecap="round" x1="82.801" stroke-width="0.36" fill="none" x2="82.801"/><line id="line147" y2="1.701" stroke="#FFFFFF" y1="1.701" stroke-linecap="round" x1="82.801" stroke-width="0.36" fill="none" x2="61.258"/><line id="line149" y2="4.252" stroke="#FFFFFF" y1="1.701" stroke-linecap="round" x1="61.258" stroke-width="0.36" fill="none" x2="61.258"/></g></g><g id="g223"><title id="title225">element:D6</title><g id="g227"><title id="title229">package:SEWALLI</title></g></g><g id="g231"><title id="title233">element:GND3TAP</title><g id="g235"><title id="title237">package:SEWALLI</title></g></g><g id="g239"><title id="title241">element:GNDTAP</title><g id="g243"><title id="title245">package:SEWALLI</title></g></g><g id="g247"><title id="title249">element:GNDTAP2</title><g id="g251"><title id="title253">package:SEWALLI</title></g></g><g id="g255"><title id="title257">element:IC1</title><g id="g259"><title id="title261">package:TQFN44_7MM</title><line id="line263" y2="50.014" stroke="#FFFFFF" y1="50.014" stroke-linecap="round" x1="79.966" stroke-width="0.36" fill="none" x2="82.234"/><line id="line265" y2="47.747" stroke="#FFFFFF" y1="50.014" stroke-linecap="round" x1="82.234" stroke-width="0.36" fill="none" x2="82.234"/><line id="line267" y2="50.014" stroke="#FFFFFF" y1="50.014" stroke-linecap="round" x1="64.092" stroke-width="0.36" fill="none" x2="61.825"/><line id="line269" y2="47.747" stroke="#FFFFFF" y1="50.014" stroke-linecap="round" x1="61.825" stroke-width="0.36" fill="none" x2="61.825"/><line id="line271" y2="29.605" stroke="#FFFFFF" y1="31.873" stroke-linecap="round" x1="82.234" stroke-width="0.36" fill="none" x2="82.234"/><line id="line273" y2="29.605" stroke="#FFFFFF" y1="29.605" stroke-linecap="round" x1="82.234" stroke-width="0.36" fill="none" x2="79.966"/><line id="line275" y2="29.605" stroke="#FFFFFF" y1="31.873" stroke-linecap="round" x1="61.825" stroke-width="0.36" fill="none" x2="61.825"/><line id="line277" y2="29.605" stroke="#FFFFFF" y1="29.605" stroke-linecap="round" x1="61.825" stroke-width="0.36" fill="none" x2="64.092"/></g></g><g id="g303"><title id="title305">element:IC4</title><g id="g307"><title id="title309">package:LGA16_3X3MM</title><line id="line311" y2="68.111" stroke="#FFFFFF" y1="70.379" stroke-linecap="round" x1="76.848" stroke-width="0.576" fill="none" x2="76.848"/><line id="line313" y2="68.111" stroke="#FFFFFF" y1="68.111" stroke-linecap="round" x1="76.848" stroke-width="0.576" fill="none" x2="75.856"/><line id="line315" y2="68.111" stroke="#FFFFFF" y1="70.379" stroke-linecap="round" x1="67.21" stroke-width="0.576" fill="none" x2="67.21"/><line id="line317" y2="68.111" stroke="#FFFFFF" y1="68.111" stroke-linecap="round" x1="67.21" stroke-width="0.576" fill="none" x2="68.203"/><line id="line319" y2="77.748" stroke="#FFFFFF" y1="77.748" stroke-linecap="round" x1="68.203" stroke-width="0.576" fill="none" x2="67.21"/><line id="line321" y2="75.481" stroke="#FFFFFF" y1="77.748" stroke-linecap="round" x1="67.21" stroke-width="0.576" fill="none" x2="67.21"/><line id="line323" y2="77.748" stroke="#FFFFFF" y1="75.481" stroke-linecap="round" x1="76.848" stroke-width="0.576" fill="none" x2="76.848"/><line id="line325" y2="77.748" stroke="#FFFFFF" y1="77.748" stroke-linecap="round" x1="76.848" stroke-width="0.576" fill="none" x2="75.856"/><circle id="circle327" r="0.283" stroke="#FFFFFF" cy="66.552" cx="76.423" stroke-width="1.152" fill="none"/></g></g><g id="g329"><title id="title331">element:IO9</title><g id="g333"><title id="title335">package:SEWALLI</title></g></g><g id="g337"><title id="title339">element:IO10</title><g id="g341"><title id="title343">package:SEWALLI</title></g></g><g id="g345"><title id="title347">element:IO12</title><g id="g349"><title id="title351">package:SEWALLI</title></g></g><g id="g353"><title id="title355">element:L</title><g id="g357"><title id="title359">package:CHIPLED_0805_NOOUTLINE</title><g id="g361"><title id="title363">polygon</title><path id="path365" stroke="#FFFFFF" stroke-linecap="round" d="M89.669,9.57l1.08,1.44h-2.16L89.669,9.57 M88.805,10.722h1.728H88.805 M89.129,10.29h1.08H89.129" stroke-width="0.432" fill="none"/></g></g></g><g id="g627"><title id="title629">element:PWR</title><g id="g631"><title id="title633">package:CHIPLED_0805_NOOUTLINE</title><g id="g635"><title id="title637">polygon</title><path id="path639" stroke="#FFFFFF" stroke-linecap="round" d="M54.029,10.29l1.08,1.44h-2.16L54.029,10.29 M53.165,11.442h1.728H53.165 M53.489,11.01h1.08H53.489" stroke-width="0.432" fill="none"/></g></g></g><g id="g659"><title id="title661">element:R1</title><g id="g663"><title id="title665">package:0603-NO</title></g></g><g id="g667"><title id="title669">element:R2</title><g id="g671"><title id="title673">package:0603-NO</title></g></g><g id="g675"><title id="title677">element:R3</title><g id="g679"><title id="title681">package:0603-NO</title></g></g><g id="g683"><title id="title685">element:R4</title><g id="g687"><title id="title689">package:0603-NO</title></g></g><g id="g691"><title id="title693">element:R5</title><g id="g695"><title id="title697">package:0603-NO</title></g></g><g id="g699"><title id="title701">element:R6</title><g id="g703"><title id="title705">package:0603-NO</title></g></g><g id="g707"><title id="title709">element:R7</title><g id="g711"><title id="title713">package:0603-NO</title></g></g><g id="g715"><title id="title717">element:R8</title><g id="g719"><title id="title721">package:0603-NO</title></g></g><g id="g723"><title id="title725">element:R9</title><g id="g727"><title id="title729">package:0603-NO</title></g></g><g id="g731"><title id="title733">element:R10</title><g id="g735"><title id="title737">package:0603-NO</title></g></g><g id="g739"><title id="title741">element:R11</title><g id="g743"><title id="title745">package:0603-NO</title></g></g><g id="g747"><title id="title749">element:R13</title><g id="g751"><title id="title753">package:0603-NO</title></g></g><g id="g755"><title id="title757">element:R14</title><g id="g759"><title id="title761">package:0603-NO</title></g></g><g id="g763"><title id="title765">element:R15</title><g id="g767"><title id="title769">package:RESPACK_4X0603_NO</title></g></g><g id="g771"><title id="title773">element:R21</title><g id="g775"><title id="title777">package:0603-NO</title></g></g><g id="g779"><title id="title781">element:R22</title><g id="g783"><title id="title785">package:RESPACK_4X0603_NO</title></g></g><g id="g787"><title id="title789">element:RESET</title><g id="g791"><title id="title793">package:BTN_KMR2_4.6X2.8</title><line id="line795" y2="65.374" stroke="#FFFFFF" y1="65.374" stroke-linecap="round" x1="77.982" stroke-width="0.576" fill="none" x2="66.077"/><line id="line797" y2="56.726" stroke="#FFFFFF" y1="56.726" stroke-linecap="round" x1="66.077" stroke-width="0.576" fill="none" x2="77.982"/></g></g><g id="g799"><title id="title801">element:RX</title><g id="g803"><title id="title805">package:SEWALLI</title></g></g><g id="g807"><title id="title809">element:SCL</title><g id="g811"><title id="title813">package:SEWALLI</title></g></g><g id="g815"><title id="title817">element:SDA</title><g id="g819"><title id="title821">package:SEWALLI</title></g></g><g id="g823"><title id="title825">element:SP1</title><g id="g827"><title id="title829">package:BUZZER_SMT_5MM</title><line id="line831" y2="85.283" stroke="#FFFFFF" y1="85.283" stroke-linecap="round" x1="40.463" stroke-width="0.36" fill="none" x2="52.368"/><line id="line833" y2="87.551" stroke="#FFFFFF" y1="85.283" stroke-linecap="round" x1="52.368" stroke-width="0.36" fill="none" x2="54.636"/><line id="line835" y2="99.456" stroke="#FFFFFF" y1="87.551" stroke-linecap="round" x1="54.636" stroke-width="0.36" fill="none" x2="54.636"/><line id="line837" y2="99.456" stroke="#FFFFFF" y1="99.456" stroke-linecap="round" x1="54.636" stroke-width="0.36" fill="none" x2="40.463"/><line id="line839" y2="85.283" stroke="#FFFFFF" y1="99.456" stroke-linecap="round" x1="40.463" stroke-width="0.36" fill="none" x2="40.463"/><circle id="circle841" r="1.417" stroke="#FFFFFF" cy="89.535" cx="47.266" stroke-width="0.36" fill="none"/></g></g><g id="g843"><title id="title845">element:SW1</title><g id="g847"><title id="title849">package:EVQ-Q2_SMALLER</title><line id="line851" y2="79.633" stroke="#FFFFFF" y1="79.633" stroke-linecap="round" x1="52.584" stroke-width="0.576" fill="none" x2="33.875"/><line id="line853" y2="62.626" stroke="#FFFFFF" y1="62.626" stroke-linecap="round" x1="33.875" stroke-width="0.576" fill="none" x2="52.584"/><line id="line855" y2="74.532" stroke="#FFFFFF" y1="67.728" stroke-linecap="round" x1="52.584" stroke-width="0.576" fill="none" x2="52.584"/><line id="line857" y2="67.728" stroke="#FFFFFF" y1="74.532" stroke-linecap="round" x1="33.875" stroke-width="0.576" fill="none" x2="33.875"/><circle id="circle859" r="4.261" stroke="#FFFFFF" cy="71.13" cx="43.229" stroke-width="0.576" fill="none"/><circle id="circle861" r="2.835" stroke="#FFFFFF" cy="71.13" cx="43.229" stroke-width="0.576" fill="none"/></g></g><g id="g863"><title id="title865">element:SW2</title><g id="g867"><title id="title869">package:EVQ-Q2_SMALLER</title><line id="line871" y2="79.633" stroke="#FFFFFF" y1="79.633" stroke-linecap="round" x1="110.183" stroke-width="0.576" fill="none" x2="91.475"/><line id="line873" y2="62.626" stroke="#FFFFFF" y1="62.626" stroke-linecap="round" x1="91.475" stroke-width="0.576" fill="none" x2="110.183"/><line id="line875" y2="74.532" stroke="#FFFFFF" y1="67.728" stroke-linecap="round" x1="110.183" stroke-width="0.576" fill="none" x2="110.183"/><line id="line877" y2="67.728" stroke="#FFFFFF" y1="74.532" stroke-linecap="round" x1="91.475" stroke-width="0.576" fill="none" x2="91.475"/><circle id="circle879" r="4.261" stroke="#FFFFFF" cy="71.13" cx="100.829" stroke-width="0.576" fill="none"/><circle id="circle881" r="2.835" stroke="#FFFFFF" cy="71.13" cx="100.829" stroke-width="0.576" fill="none"/></g></g><g id="g899"><title id="title901">element:THM1</title><g id="g903"><title id="title905">package:_0402</title><line id="line907" y2="47.954" stroke="#FFFFFF" y1="47.954" stroke-linecap="round" x1="98.193" stroke-width="0.576" fill="none" x2="104.186"/><line id="line909" y2="51.105" stroke="#FFFFFF" y1="47.954" stroke-linecap="round" x1="104.186" stroke-width="0.576" fill="none" x2="104.186"/><line id="line911" y2="51.105" stroke="#FFFFFF" y1="51.105" stroke-linecap="round" x1="104.186" stroke-width="0.576" fill="none" x2="98.193"/><line id="line913" y2="47.954" stroke="#FFFFFF" y1="51.105" stroke-linecap="round" x1="98.193" stroke-width="0.576" fill="none" x2="98.193"/></g></g><g id="g915"><title id="title917">element:TP1</title><g id="g919"><title id="title921">package:TESTPOINT_ROUND_1.5MM</title></g></g><g id="g923"><title id="title925">element:TP2</title><g id="g927"><title id="title929">package:TESTPOINT_ROUND_1.5MM</title></g></g><g id="g931"><title id="title933">element:TP3</title><g id="g935"><title id="title937">package:TESTPOINT_ROUND_1.5MM</title></g></g><g id="g939"><title id="title941">element:TP4</title><g id="g943"><title id="title945">package:TESTPOINT_ROUND_1.5MM</title></g></g><g id="g947"><title id="title949">element:TX</title><g id="g951"><title id="title953">package:SEWALLI</title></g></g><g id="g955"><title id="title957">element:U$1</title><g id="g959"><title id="title961">package:SYMBOL_MINUS</title><line id="line963" y2="122.25" stroke="#FFFFFF" y1="122.25" stroke-linecap="round" x1="87.555" stroke-width="0.864" fill="none" x2="85.305"/><circle id="circle965" r="2.216" stroke="#FFFFFF" cy="122.25" cx="86.429" stroke-width="0.576" fill="none"/></g></g><g id="g967"><title id="title969">element:U$2</title><g id="g971"><title id="title973">package:FIDUCIAL_1MM</title></g></g><g id="g975"><title id="title977">element:U$3</title><g id="g979"><title id="title981">package:FIDUCIAL_1MM</title></g></g><g id="g983"><title id="title985">element:U$4</title><g id="g987"><title id="title989">package:FLORAMED</title></g></g><g id="g991"><title id="title993">element:U$6</title><g id="g995"><title id="title997">package:FIDUCIAL_1MM</title></g></g><g id="g999"><title id="title1001">element:U$7</title><g id="g1003"><title id="title1005">package:PCBFEAT-REV-040</title></g></g><g id="g1007"><title id="title1009">element:U$34</title><g id="g1011"><title id="title1013">package:CPLAYFRONT</title></g></g><g id="g1015"><title id="title1017">element:U$35</title><g id="g1019"><title id="title1021">package:SYMBOL_PLUS</title><line id="line1023" y2="122.97" stroke="#FFFFFF" y1="122.97" stroke-linecap="round" x1="58.754" stroke-width="0.864" fill="none" x2="56.504"/><line id="line1025" y2="124.095" stroke="#FFFFFF" y1="121.845" stroke-linecap="round" x1="57.629" stroke-width="0.864" fill="none" x2="57.629"/><circle id="circle1027" r="2.216" stroke="#FFFFFF" cy="122.97" cx="57.629" stroke-width="0.576" fill="none"/></g></g><g id="g1029"><title id="title1031">element:U$46</title><g id="g1033"><title id="title1035">package:CPLAYBACK</title></g></g><g id="g1037"><title id="title1039">element:U1</title><g id="g1041"><title id="title1043">package:SPW2430HR5H-B</title><line id="line1045" y2="92.362" stroke="#FFFFFF" y1="100.014" stroke-linecap="round" x1="90.25" stroke-width="0.36" fill="none" x2="90.25"/><line id="line1047" y2="92.362" stroke="#FFFFFF" y1="92.362" stroke-linecap="round" x1="90.25" stroke-width="0.36" fill="none" x2="99.888"/><line id="line1049" y2="100.298" stroke="#FFFFFF" y1="92.362" stroke-linecap="round" x1="99.888" stroke-width="0.36" fill="none" x2="99.888"/><line id="line1051" y2="100.298" stroke="#FFFFFF" y1="100.298" stroke-linecap="round" x1="99.888" stroke-width="0.36" fill="none" x2="90.25"/><line id="line1053" y2="100.014" stroke="#FFFFFF" y1="100.298" stroke-linecap="round" x1="90.25" stroke-width="0.36" fill="none" x2="90.25"/></g></g><g id="g1055"><title id="title1057">element:U2</title><g id="g1059"><title id="title1061">package:ALS-PT19-315C</title><line id="line1063" y2="47.824" stroke="#FFFFFF" y1="47.824" stroke-linecap="round" x1="40.536" stroke-width="0.36" fill="none" x2="42.662"/><line id="line1065" y2="47.824" stroke="#FFFFFF" y1="47.824" stroke-linecap="round" x1="42.662" stroke-width="0.36" fill="none" x2="42.946"/><line id="line1067" y2="47.824" stroke="#FFFFFF" y1="47.824" stroke-linecap="round" x1="42.946" stroke-width="0.36" fill="none" x2="45.922"/><line id="line1069" y2="51.235" stroke="#FFFFFF" y1="47.824" stroke-linecap="round" x1="45.922" stroke-width="0.36" fill="none" x2="45.922"/><line id="line1071" y2="51.235" stroke="#FFFFFF" y1="51.235" stroke-linecap="round" x1="45.922" stroke-width="0.36" fill="none" x2="42.946"/><line id="line1073" y2="51.235" stroke="#FFFFFF" y1="51.235" stroke-linecap="round" x1="42.662" stroke-width="0.36" fill="none" x2="40.536"/><line id="line1075" y2="47.824" stroke="#FFFFFF" y1="51.235" stroke-linecap="round" x1="40.536" stroke-width="0.36" fill="none" x2="40.536"/><line id="line1077" y2="51.235" stroke="#FFFFFF" y1="47.824" stroke-linecap="round" x1="42.662" stroke-width="0.36" fill="none" x2="42.662"/><line id="line1079" y2="51.235" stroke="#FFFFFF" y1="51.235" stroke-linecap="round" x1="42.662" stroke-width="0.36" fill="none" x2="42.946"/><line id="line1081" y2="47.824" stroke="#FFFFFF" y1="51.235" stroke-linecap="round" x1="42.946" stroke-width="0.36" fill="none" x2="42.946"/></g></g><g id="g1097"><title id="title1099">element:VCC2</title><g id="g1101"><title id="title1103">package:SEWALLI</title></g></g></g><circle gorn="0.2.0.2" r="5.255" stroke="#9A916C" cy="72.929" cx="6.329" id="connector0pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.3" r="5.255" stroke="#9A916C" cy="15.883" cx="104.789" id="connector1pin" stroke-width="1.44" fill="none"/><g id="g1137" transform="matrix(0, 1, -1, 0, 220.049, 56.7149)"><g id="g1139"><g id="g1141"><g id="g1143"><g id="g1145" transform="matrix(2.535182e-06 1 -1 2.535182e-06 220.0478 56.7143)"><g id="g1147"><g id="g1149"><rect width="4.535" gorn="0.2.0.6.0.0.0.0.0.0.0" id="connector4pin" x="79.399" height="9.638" fill="#9A916C" y="133.562"/></g></g></g></g></g></g></g><g id="g1152" transform="matrix(0, 1, -1, 0, 200.773, 75.9902)"><g id="g1154"><g id="g1156"><g id="g1158"><g id="g1160" transform="matrix(2.535182e-06 1 -1 2.535182e-06 200.7725 75.9897)"><g id="g1162"><g id="g1164"><rect width="4.535" gorn="0.2.0.7.0.0.0.0.0.0.0" id="connector5pin" x="60.124" height="9.638" fill="#9A916C" y="133.562"/></g></g></g></g></g></g></g><g id="g1313" transform="matrix(0, 1, -1, 0, 82.3752, -65.9346)"><g id="g1315"><g id="g1317"><g id="g1319"><g id="g1321" transform="matrix(2.535182e-06 1 -1 2.535182e-06 82.375 -65.935)"><g id="g1323"><g id="g1325"><rect width="2.835" gorn="0.2.0.26.0.0.0.0.0.0.0" id="connector24pin" x="72.738" height="5.669" fill="#9A916C" y="5.385"/></g></g></g></g></g></g></g><g id="g1328" transform="matrix(0, 1, -1, 0, 78.1236, -61.6826)"><g id="g1330"><g id="g1332"><g id="g1334"><g id="g1336" transform="matrix(2.535182e-06 1 -1 2.535182e-06 78.123 -61.683)"><g id="g1338"><g id="g1340"><rect width="2.835" gorn="0.2.0.27.0.0.0.0.0.0.0" id="connector25pin" x="68.486" height="5.669" fill="#9A916C" y="5.385"/></g></g></g></g></g></g></g><g id="g1343" transform="matrix(-1, 0, 0, -1, 144.058, 32.1732)"><g id="g1345"><g id="g1347"><g id="g1349"><rect width="1.134" gorn="0.2.0.28.0.0.0.0" id="connector26pin" x="71.462" height="3.827" fill="#9A916C" y="14.173"/></g></g></g></g><g id="g1352" transform="matrix(-1, 0, 0, -1, 147.743, 32.1732)"><g id="g1354"><g id="g1356"><g id="g1358"><rect width="1.134" gorn="0.2.0.29.0.0.0.0" id="connector27pin" x="73.304" height="3.827" fill="#9A916C" y="14.173"/></g></g></g></g><g id="g1361" transform="matrix(-1, 0, 0, -1, 136.688, 32.1732)"><g id="g1363"><g id="g1365"><g id="g1367"><rect width="1.134" gorn="0.2.0.30.0.0.0.0" id="connector28pin" x="67.777" height="3.827" fill="#9A916C" y="14.173"/></g></g></g></g><g id="g1370" transform="matrix(-1, 0, 0, -1, 140.373, 32.1732)"><g id="g1372"><g id="g1374"><g id="g1376"><rect width="1.134" gorn="0.2.0.31.0.0.0.0" id="connector29pin" x="69.619" height="3.827" fill="#9A916C" y="14.173"/></g></g></g></g><circle gorn="0.2.0.32" r="1.494" stroke="#9A916C" cy="16.441" cx="81.383" id="connector30pin" stroke-width="0.72" fill="none"/><path id="path1380" d="M79.89,14.947h4.482v2.988H79.89V14.947 M79.89,16.441c-0.001,0.825,0.667,1.495,1.492,1.496c0.825,0.001,1.495-0.667,1.496-1.492c0-0.001,0-0.003,0-0.004c0.001-0.825-0.667-1.495-1.492-1.496c-0.825-0.001-1.495,0.667-1.496,1.492C79.89,16.438,79.89,16.439,79.89,16.441z" fill="#9A916C"/><circle gorn="0.2.0.34" r="1.494" stroke="#9A916C" cy="16.441" cx="62.675" id="connector31pin" stroke-width="0.72" fill="none"/><path id="path1383" d="M59.687,14.947h4.482v2.988h-4.482V14.947 M61.181,16.441c-0.001,0.825,0.667,1.495,1.492,1.496c0.825,0.001,1.495-0.667,1.496-1.492c0-0.001,0-0.003,0-0.004c0-0.825-0.669-1.494-1.494-1.494C61.85,14.947,61.181,15.616,61.181,16.441z" fill="#9A916C"/><circle gorn="0.2.0.36" r="2.409" stroke="#9A916C" cy="8.504" cx="82.234" id="connector32pin" stroke-width="2.2677" fill="none"/><rect id="rect1386" width="4.819" stroke="#9A916C" stroke-width="2.2677" x="79.825" height="4.819" fill="none" y="6.094"/><circle gorn="0.2.0.38" r="2.409" stroke="#9A916C" cy="8.504" cx="61.825" id="connector33pin" stroke-width="2.2677" fill="none"/><rect id="rect1389" width="4.819" stroke="#9A916C" stroke-width="2.2677" x="59.415" height="4.819" fill="none" y="6.094"/><g id="g1391" transform="matrix(-1, 0, 0, -1, 151.428, 32.1732)"><g id="g1393"><g id="g1395"><g id="g1397"><rect width="1.134" gorn="0.2.0.40.0.0.0.0" id="connector34pin" x="75.147" height="3.827" fill="#9A916C" y="14.173"/></g></g></g></g><circle gorn="0.2.0.47" r="5.255" stroke="#9A916C" cy="95.382" cx="133.862" id="connector41pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.48" r="5.255" stroke="#9A916C" cy="16.063" cx="39.089" id="connector42pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.49" r="5.255" stroke="#9A916C" cy="72.929" cx="137.729" id="connector43pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.50" r="5.255" stroke="#9A916C" cy="129.977" cx="39.269" id="connector44pin" stroke-width="1.44" fill="none"/><g id="g1454" transform="matrix(0, 1, -1, 0, 109.075, -49.1563)"><g id="g1456"><g id="g1458"><g id="g1460"><g id="g1462" transform="matrix(2.535182e-06 1 -1 2.535182e-06 109.0744 -49.1568)"><g id="g1464"><g id="g1466"><rect width="0.709" gorn="0.2.0.51.0.0.0.0.0.0.0" id="connector45pin" x="78.761" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1469" transform="matrix(0, 1, -1, 0, 107.658, -47.739)"><g id="g1471"><g id="g1473"><g id="g1475"><g id="g1477" transform="matrix(2.535182e-06 1 -1 2.535182e-06 107.6574 -47.7398)"><g id="g1479"><g id="g1481"><rect width="0.709" gorn="0.2.0.52.0.0.0.0.0.0.0" id="connector46pin" x="77.344" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1484" transform="matrix(0, 1, -1, 0, 106.24, -46.3216)"><g id="g1486"><g id="g1488"><g id="g1490"><g id="g1492" transform="matrix(2.535182e-06 1 -1 2.535182e-06 106.2397 -46.3221)"><g id="g1494"><g id="g1496"><rect width="0.709" gorn="0.2.0.53.0.0.0.0.0.0.0" id="connector47pin" x="75.927" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1499" transform="matrix(0, 1, -1, 0, 104.823, -44.9043)"><g id="g1501"><g id="g1503"><g id="g1505"><g id="g1507" transform="matrix(2.535182e-06 1 -1 2.535182e-06 104.8228 -44.9052)"><g id="g1509"><g id="g1511"><rect width="0.709" gorn="0.2.0.54.0.0.0.0.0.0.0" id="connector48pin" x="74.51" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1514" transform="matrix(0, 1, -1, 0, 103.406, -43.487)"><g id="g1516"><g id="g1518"><g id="g1520"><g id="g1522" transform="matrix(2.535182e-06 1 -1 2.535182e-06 103.4051 -43.4875)"><g id="g1524"><g id="g1526"><rect width="0.709" gorn="0.2.0.55.0.0.0.0.0.0.0" id="connector49pin" x="73.092" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1529" transform="matrix(0, 1, -1, 0, 101.989, -42.0697)"><g id="g1531"><g id="g1533"><g id="g1535"><g id="g1537" transform="matrix(2.535182e-06 1 -1 2.535182e-06 101.9878 -42.0702)"><g id="g1539"><g id="g1541"><rect width="0.709" gorn="0.2.0.56.0.0.0.0.0.0.0" id="connector50pin" x="71.675" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1544" transform="matrix(0, 1, -1, 0, 100.571, -40.6524)"><g id="g1546"><g id="g1548"><g id="g1550"><g id="g1552" transform="matrix(2.535182e-06 1 -1 2.535182e-06 100.5704 -40.6528)"><g id="g1554"><g id="g1556"><rect width="0.709" gorn="0.2.0.57.0.0.0.0.0.0.0" id="connector51pin" x="70.257" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1559" transform="matrix(0, 1, -1, 0, 99.1541, -39.235)"><g id="g1561"><g id="g1563"><g id="g1565"><g id="g1567" transform="matrix(2.535182e-06 1 -1 2.535182e-06 99.1531 -39.2355)"><g id="g1569"><g id="g1571"><rect width="0.709" gorn="0.2.0.58.0.0.0.0.0.0.0" id="connector52pin" x="68.84" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1574" transform="matrix(0, 1, -1, 0, 97.7364, -37.8177)"><g id="g1576"><g id="g1578"><g id="g1580"><g id="g1582" transform="matrix(2.535182e-06 1 -1 2.535182e-06 97.7358 -37.8182)"><g id="g1584"><g id="g1586"><rect width="0.709" gorn="0.2.0.59.0.0.0.0.0.0.0" id="connector53pin" x="67.423" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1589" transform="matrix(0, 1, -1, 0, 96.3194, -36.4004)"><g id="g1591"><g id="g1593"><g id="g1595"><g id="g1597" transform="matrix(2.535182e-06 1 -1 2.535182e-06 96.3186 -36.4009)"><g id="g1599"><g id="g1601"><rect width="0.709" gorn="0.2.0.60.0.0.0.0.0.0.0" id="connector54pin" x="66.005" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><g id="g1604" transform="matrix(0, 1, -1, 0, 94.9018, -34.9831)"><g id="g1606"><g id="g1608"><g id="g1610"><g id="g1612" transform="matrix(2.535182e-06 1 -1 2.535182e-06 94.9013 -34.9836)"><g id="g1614"><g id="g1616"><rect width="0.709" gorn="0.2.0.61.0.0.0.0.0.0.0" id="connector55pin" x="64.588" height="2.268" fill="#9A916C" y="28.825"/></g></g></g></g></g></g></g><rect width="2.268" gorn="0.2.0.62" id="connector56pin" x="61.045" height="0.709" fill="#9A916C" y="32.369"/><rect width="2.268" gorn="0.2.0.63" id="connector57pin" x="61.045" height="0.709" fill="#9A916C" y="33.786"/><rect width="2.268" gorn="0.2.0.64" id="connector58pin" x="61.045" height="0.709" fill="#9A916C" y="35.203"/><rect width="2.268" gorn="0.2.0.65" id="connector59pin" x="61.045" height="0.709" fill="#9A916C" y="36.621"/><rect width="2.268" gorn="0.2.0.66" id="connector60pin" x="61.045" height="0.709" fill="#9A916C" y="38.038"/><rect width="2.268" gorn="0.2.0.67" id="connector61pin" x="61.045" height="0.709" fill="#9A916C" y="39.455"/><rect width="2.268" gorn="0.2.0.68" id="connector62pin" x="61.045" height="0.709" fill="#9A916C" y="40.873"/><rect width="2.268" gorn="0.2.0.69" id="connector63pin" x="61.045" height="0.709" fill="#9A916C" y="42.29"/><rect width="2.268" gorn="0.2.0.70" id="connector64pin" x="61.045" height="0.709" fill="#9A916C" y="43.707"/><rect width="2.268" gorn="0.2.0.71" id="connector65pin" x="61.045" height="0.709" fill="#9A916C" y="45.125"/><rect width="2.268" gorn="0.2.0.72" id="connector66pin" x="61.045" height="0.709" fill="#9A916C" y="46.542"/><g id="g1630" transform="matrix(0, -1, 1, 0, 15.2823, 114.602)"><g id="g1632"><g id="g1634"><g id="g1636"><g id="g1638" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 15.2821 114.6031)"><g id="g1640"><g id="g1642"><rect width="0.709" gorn="0.2.0.73.0.0.0.0.0.0.0" id="connector67pin" x="64.588" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1645" transform="matrix(0, -1, 1, 0, 16.6996, 116.02)"><g id="g1647"><g id="g1649"><g id="g1651"><g id="g1653" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 16.6994 116.0204)"><g id="g1655"><g id="g1657"><rect width="0.709" gorn="0.2.0.74.0.0.0.0.0.0.0" id="connector68pin" x="66.005" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1660" transform="matrix(0, -1, 1, 0, 18.1169, 117.437)"><g id="g1662"><g id="g1664"><g id="g1666"><g id="g1668" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 18.1167 117.4377)"><g id="g1670"><g id="g1672"><rect width="0.709" gorn="0.2.0.75.0.0.0.0.0.0.0" id="connector69pin" x="67.423" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1675" transform="matrix(0, -1, 1, 0, 19.5342, 118.855)"><g id="g1677"><g id="g1679"><g id="g1681"><g id="g1683" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 19.534 118.855)"><g id="g1685"><g id="g1687"><rect width="0.709" gorn="0.2.0.76.0.0.0.0.0.0.0" id="connector70pin" x="68.84" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1690" transform="matrix(0, -1, 1, 0, 20.9516, 120.272)"><g id="g1692"><g id="g1694"><g id="g1696"><g id="g1698" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 20.9513 120.2723)"><g id="g1700"><g id="g1702"><rect width="0.709" gorn="0.2.0.77.0.0.0.0.0.0.0" id="connector71pin" x="70.257" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1705" transform="matrix(0, -1, 1, 0, 22.3689, 121.689)"><g id="g1707"><g id="g1709"><g id="g1711"><g id="g1713" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 22.3687 121.6897)"><g id="g1715"><g id="g1717"><rect width="0.709" gorn="0.2.0.78.0.0.0.0.0.0.0" id="connector72pin" x="71.675" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1720" transform="matrix(0, -1, 1, 0, 23.7862, 123.106)"><g id="g1722"><g id="g1724"><g id="g1726"><g id="g1728" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 23.786 123.107)"><g id="g1730"><g id="g1732"><rect width="0.709" gorn="0.2.0.79.0.0.0.0.0.0.0" id="connector73pin" x="73.092" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1735" transform="matrix(0, -1, 1, 0, 25.2035, 124.524)"><g id="g1737"><g id="g1739"><g id="g1741"><g id="g1743" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 25.2037 124.5247)"><g id="g1745"><g id="g1747"><rect width="0.709" gorn="0.2.0.80.0.0.0.0.0.0.0" id="connector74pin" x="74.51" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1750" transform="matrix(0, -1, 1, 0, 26.6208, 125.941)"><g id="g1752"><g id="g1754"><g id="g1756"><g id="g1758" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 26.6207 125.9416)"><g id="g1760"><g id="g1762"><rect width="0.709" gorn="0.2.0.81.0.0.0.0.0.0.0" id="connector75pin" x="75.927" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1765" transform="matrix(0, -1, 1, 0, 28.0382, 127.359)"><g id="g1767"><g id="g1769"><g id="g1771"><g id="g1773" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 28.0383 127.3593)"><g id="g1775"><g id="g1777"><rect width="0.709" gorn="0.2.0.82.0.0.0.0.0.0.0" id="connector76pin" x="77.344" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1780" transform="matrix(0, -1, 1, 0, 29.4555, 128.776)"><g id="g1782"><g id="g1784"><g id="g1786"><g id="g1788" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 29.4554 128.7763)"><g id="g1790"><g id="g1792"><rect width="0.709" gorn="0.2.0.83.0.0.0.0.0.0.0" id="connector77pin" x="78.761" height="2.268" fill="#9A916C" y="48.527"/></g></g></g></g></g></g></g><g id="g1795" transform="matrix(-1, 0, 0, -1, 163.759, 93.793)"><g id="g1797"><g id="g1799"><g id="g1801"><rect width="2.268" gorn="0.2.0.84.0.0.0.0" id="connector78pin" x="80.745" height="0.709" fill="#9A916C" y="46.542"/></g></g></g></g><g id="g1804" transform="matrix(-1, 0, 0, -1, 163.759, 90.9583)"><g id="g1806"><g id="g1808"><g id="g1810"><rect width="2.268" gorn="0.2.0.85.0.0.0.0" id="connector79pin" x="80.745" height="0.709" fill="#9A916C" y="45.125"/></g></g></g></g><g id="g1813" transform="matrix(-1, 0, 0, -1, 163.759, 88.1237)"><g id="g1815"><g id="g1817"><g id="g1819"><rect width="2.268" gorn="0.2.0.86.0.0.0.0" id="connector80pin" x="80.745" height="0.709" fill="#9A916C" y="43.707"/></g></g></g></g><g id="g1822" transform="matrix(-1, 0, 0, -1, 163.759, 85.289)"><g id="g1824"><g id="g1826"><g id="g1828"><rect width="2.268" gorn="0.2.0.87.0.0.0.0" id="connector81pin" x="80.745" height="0.709" fill="#9A916C" y="42.29"/></g></g></g></g><g id="g1831" transform="matrix(-1, 0, 0, -1, 163.759, 82.4544)"><g id="g1833"><g id="g1835"><g id="g1837"><rect width="2.268" gorn="0.2.0.88.0.0.0.0" id="connector82pin" x="80.745" height="0.709" fill="#9A916C" y="40.873"/></g></g></g></g><g id="g1840" transform="matrix(-1, 0, 0, -1, 163.759, 79.6198)"><g id="g1842"><g id="g1844"><g id="g1846"><rect width="2.268" gorn="0.2.0.89.0.0.0.0" id="connector83pin" x="80.745" height="0.709" fill="#9A916C" y="39.455"/></g></g></g></g><g id="g1849" transform="matrix(-1, 0, 0, -1, 163.759, 76.7851)"><g id="g1851"><g id="g1853"><g id="g1855"><rect width="2.268" gorn="0.2.0.90.0.0.0.0" id="connector84pin" x="80.745" height="0.709" fill="#9A916C" y="38.038"/></g></g></g></g><g id="g1858" transform="matrix(-1, 0, 0, -1, 163.759, 73.9505)"><g id="g1860"><g id="g1862"><g id="g1864"><rect width="2.268" gorn="0.2.0.91.0.0.0.0" id="connector85pin" x="80.745" height="0.709" fill="#9A916C" y="36.621"/></g></g></g></g><g id="g1867" transform="matrix(-1, 0, 0, -1, 163.759, 71.1156)"><g id="g1869"><g id="g1871"><g id="g1873"><rect width="2.268" gorn="0.2.0.92.0.0.0.0" id="connector86pin" x="80.745" height="0.709" fill="#9A916C" y="35.203"/></g></g></g></g><g id="g1876" transform="matrix(-1, 0, 0, -1, 163.759, 68.2809)"><g id="g1878"><g id="g1880"><g id="g1882"><rect width="2.268" gorn="0.2.0.93.0.0.0.0" id="connector87pin" x="80.745" height="0.709" fill="#9A916C" y="33.786"/></g></g></g></g><g id="g1885" transform="matrix(-1, 0, 0, -1, 163.759, 65.4463)"><g id="g1887"><g id="g1889"><g id="g1891"><rect width="2.268" gorn="0.2.0.94.0.0.0.0" id="connector88pin" x="80.745" height="0.709" fill="#9A916C" y="32.369"/></g></g></g></g><g id="g2023" transform="matrix(0, 1, -1, 0, 143.967, -5.7607)"><g id="g2025"><g id="g2027"><g id="g2029"><g id="g2031" transform="matrix(2.535182e-06 1 -1 2.535182e-06 143.9661 -5.7612)"><g id="g2033"><g id="g2035"><rect width="0.709" gorn="0.2.0.104.0.0.0.0.0.0.0" id="connector98pin" x="74.509" height="1.417" fill="#9A916C" y="68.394"/></g></g></g></g></g></g></g><g id="g2038" transform="matrix(0, 1, -1, 0, 142.549, -4.34338)"><g id="g2040"><g id="g2042"><g id="g2044"><g id="g2046" transform="matrix(2.535182e-06 1 -1 2.535182e-06 142.5491 -4.3442)"><g id="g2048"><g id="g2050"><rect width="0.709" gorn="0.2.0.105.0.0.0.0.0.0.0" id="connector99pin" x="73.092" height="1.417" fill="#9A916C" y="68.394"/></g></g></g></g></g></g></g><g id="g2053" transform="matrix(0, 1, -1, 0, 141.132, -2.92605)"><g id="g2055"><g id="g2057"><g id="g2059"><g id="g2061" transform="matrix(2.535182e-06 1 -1 2.535182e-06 141.1315 -2.9266)"><g id="g2063"><g id="g2065"><rect width="0.709" gorn="0.2.0.106.0.0.0.0.0.0.0" id="connector100pin" x="71.675" height="1.417" fill="#9A916C" y="68.394"/></g></g></g></g></g></g></g><g id="g2068" transform="matrix(0, 1, -1, 0, 139.715, -1.50873)"><g id="g2070"><g id="g2072"><g id="g2074"><g id="g2076" transform="matrix(2.535182e-06 1 -1 2.535182e-06 139.7142 -1.5093)"><g id="g2078"><g id="g2080"><rect width="0.709" gorn="0.2.0.107.0.0.0.0.0.0.0" id="connector101pin" x="70.257" height="1.417" fill="#9A916C" y="68.394"/></g></g></g></g></g></g></g><g id="g2083" transform="matrix(0, 1, -1, 0, 138.298, -0.0914083)"><g id="g2085"><g id="g2087"><g id="g2089"><g id="g2091" transform="matrix(2.535182e-06 1 -1 2.535182e-06 138.297 -0.092)"><g id="g2093"><g id="g2095"><rect width="0.709" gorn="0.2.0.108.0.0.0.0.0.0.0" id="connector102pin" x="68.84" height="1.417" fill="#9A916C" y="68.394"/></g></g></g></g></g></g></g><rect width="1.417" gorn="0.2.0.109" id="connector103pin" x="67.494" height="0.709" fill="#9A916C" y="71.158"/><rect width="1.417" gorn="0.2.0.110" id="connector104pin" x="67.494" height="0.709" fill="#9A916C" y="72.575"/><rect width="1.417" gorn="0.2.0.111" id="connector105pin" x="67.494" height="0.709" fill="#9A916C" y="73.993"/><g id="g2101" transform="matrix(0, -1, 1, 0, -7.56216, 145.951)"><g id="g2103"><g id="g2105"><g id="g2107"><g id="g2109" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -7.5622 145.9515)"><g id="g2111"><g id="g2113"><rect width="0.709" gorn="0.2.0.112.0.0.0.0.0.0.0" id="connector106pin" x="68.84" height="1.417" fill="#9A916C" y="76.048"/></g></g></g></g></g></g></g><g id="g2116" transform="matrix(0, -1, 1, 0, -6.14481, 147.368)"><g id="g2118"><g id="g2120"><g id="g2122"><g id="g2124" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -6.1449 147.3688)"><g id="g2126"><g id="g2128"><rect width="0.709" gorn="0.2.0.113.0.0.0.0.0.0.0" id="connector107pin" x="70.257" height="1.417" fill="#9A916C" y="76.048"/></g></g></g></g></g></g></g><g id="g2131" transform="matrix(0, -1, 1, 0, -4.72749, 148.786)"><g id="g2133"><g id="g2135"><g id="g2137"><g id="g2139" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -4.7276 148.7861)"><g id="g2141"><g id="g2143"><rect width="0.709" gorn="0.2.0.114.0.0.0.0.0.0.0" id="connector108pin" x="71.675" height="1.417" fill="#9A916C" y="76.048"/></g></g></g></g></g></g></g><g id="g2146" transform="matrix(0, -1, 1, 0, -3.31016, 150.203)"><g id="g2148"><g id="g2150"><g id="g2152"><g id="g2154" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -3.31 150.2037)"><g id="g2156"><g id="g2158"><rect width="0.709" gorn="0.2.0.115.0.0.0.0.0.0.0" id="connector109pin" x="73.092" height="1.417" fill="#9A916C" y="76.048"/></g></g></g></g></g></g></g><g id="g2161" transform="matrix(0, -1, 1, 0, -1.89284, 151.62)"><g id="g2163"><g id="g2165"><g id="g2167"><g id="g2169" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -1.893 151.6207)"><g id="g2171"><g id="g2173"><rect width="0.709" gorn="0.2.0.116.0.0.0.0.0.0.0" id="connector110pin" x="74.509" height="1.417" fill="#9A916C" y="76.048"/></g></g></g></g></g></g></g><g id="g2176" transform="matrix(-1, 0, 0, -1, 151.712, 148.694)"><g id="g2178"><g id="g2180"><g id="g2182"><rect width="1.417" gorn="0.2.0.117.0.0.0.0" id="connector111pin" x="75.147" height="0.709" fill="#9A916C" y="73.993"/></g></g></g></g><g id="g2185" transform="matrix(-1, 0, 0, -1, 151.712, 145.86)"><g id="g2187"><g id="g2189"><g id="g2191"><rect width="1.417" gorn="0.2.0.118.0.0.0.0" id="connector112pin" x="75.147" height="0.709" fill="#9A916C" y="72.575"/></g></g></g></g><g id="g2194" transform="matrix(-1, 0, 0, -1, 151.712, 143.025)"><g id="g2196"><g id="g2198"><g id="g2200"><rect width="1.417" gorn="0.2.0.119.0.0.0.0" id="connector113pin" x="75.147" height="0.709" fill="#9A916C" y="71.158"/></g></g></g></g><circle gorn="0.2.0.120" r="5.255" stroke="#9A916C" cy="50.477" cx="133.862" id="connector114pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.121" r="5.255" stroke="#9A916C" cy="30.604" cx="122.452" id="connector115pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.122" r="5.255" stroke="#9A916C" cy="115.255" cx="122.452" id="connector116pin" stroke-width="1.44" fill="none"/><g id="g2977" transform="matrix(-1, 0, 0, -1, 132.436, 126.635)"><g id="g2979"><g id="g2981"><g id="g2983"><rect width="2.551" gorn="0.2.0.214.0.0.0.0" id="connector208pin" x="64.942" height="2.551" fill="#9A916C" y="62.042"/></g></g></g></g><g id="g2986" transform="matrix(-1, 0, 0, -1, 155.68, 126.635)"><g id="g2988"><g id="g2990"><g id="g2992"><rect width="2.551" gorn="0.2.0.215.0.0.0.0" id="connector209pin" x="76.564" height="2.551" fill="#9A916C" y="62.042"/></g></g></g></g><g id="g2995" transform="matrix(-1, 0, 0, -1, 132.436, 117.564)"><g id="g2997"><g id="g2999"><g id="g3001"><rect width="2.551" gorn="0.2.0.216.0.0.0.0" id="connector210pin" x="64.942" height="2.551" fill="#9A916C" y="57.507"/></g></g></g></g><g id="g3004" transform="matrix(-1, 0, 0, -1, 155.68, 117.564)"><g id="g3006"><g id="g3008"><g id="g3010"><rect width="2.551" gorn="0.2.0.217.0.0.0.0" id="connector211pin" x="76.564" height="2.551" fill="#9A916C" y="57.507"/></g></g></g></g><circle gorn="0.2.0.218" r="5.255" stroke="#9A916C" cy="96.102" cx="10.376" id="connector212pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.219" r="5.255" stroke="#9A916C" cy="30.784" cx="21.606" id="connector213pin" stroke-width="1.44" fill="none"/><circle gorn="0.2.0.220" r="5.255" stroke="#9A916C" cy="50.477" cx="10.196" id="connector214pin" stroke-width="1.44" fill="none"/><g id="g3016" transform="matrix(0, -1, 1, 0, -56.7262, 137.084)"><g id="g3018"><g id="g3020"><g id="g3022"><g id="g3024" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -56.7267 137.0849)"><g id="g3026"><g id="g3028"><rect width="4.252" gorn="0.2.0.221.0.0.0.0.0.0.0" id="connector215pin" x="38.053" height="2.835" fill="#9A916C" y="95.488"/></g></g></g></g></g></g></g><g id="g3031" transform="matrix(0, -1, 1, 0, -42.2695, 151.541)"><g id="g3033"><g id="g3035"><g id="g3037"><g id="g3039" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -42.2699 151.5417)"><g id="g3041"><g id="g3043"><rect width="4.252" gorn="0.2.0.222.0.0.0.0.0.0.0" id="connector216pin" x="52.51" height="2.835" fill="#9A916C" y="95.488"/></g></g></g></g></g></g></g><g id="g3046" transform="matrix(0, -1, 1, 0, -47.0884, 127.446)"><g id="g3048"><g id="g3050"><g id="g3052"><g id="g3054" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -47.0887 127.4469)"><g id="g3056"><g id="g3058"><rect width="4.252" gorn="0.2.0.223.0.0.0.0.0.0.0" id="connector217pin" x="38.053" height="2.835" fill="#9A916C" y="85.85"/></g></g></g></g></g></g></g><rect width="1.701" gorn="0.2.0.238" id="connector232pin" x="98.899" height="1.701" fill="#9A916C" y="48.679"/><rect width="1.701" gorn="0.2.0.239" id="connector233pin" x="101.778" height="1.701" fill="#9A916C" y="48.679"/><circle gorn="0.2.0.240" r="5.255" stroke="#9A916C" cy="115.975" cx="22.326" id="connector234pin" stroke-width="1.44" fill="none"/><g id="g3145" transform="matrix(0, -1, 1, 0, -6.27804, 190.208)"><g id="g3147"><g id="g3149"><g id="g3151"><g id="g3153" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -6.2782 190.2094)"><g id="g3155"><g id="g3157"><rect width="1.871" gorn="0.2.0.244.0.0.0.0.0.0.0" id="connector238pin" x="91.03" height="2.551" fill="#9A916C" y="96.968"/></g></g></g></g></g></g></g><g id="g3160" transform="matrix(0, -1, 1, 0, -0.0701664, 196.416)"><g id="g3162"><g id="g3164"><g id="g3166"><g id="g3168" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -0.0704 196.4173)"><g id="g3170"><g id="g3172"><rect width="1.871" gorn="0.2.0.245.0.0.0.0.0.0.0" id="connector239pin" x="97.238" height="2.551" fill="#9A916C" y="96.968"/></g></g></g></g></g></g></g><g id="g3175" transform="matrix(0, -1, 1, 0, 3.75661, 192.589)"><g id="g3177"><g id="g3179"><g id="g3181"><g id="g3183" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 3.7564 192.5904)"><g id="g3185"><g id="g3187"><rect width="1.871" gorn="0.2.0.246.0.0.0.0.0.0.0" id="connector240pin" x="97.238" height="2.551" fill="#9A916C" y="93.141"/></g></g></g></g></g></g></g><g id="g3190" transform="matrix(0, -1, 1, 0, -2.45127, 186.381)"><g id="g3192"><g id="g3194"><g id="g3196"><g id="g3198" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -2.4514 186.3826)"><g id="g3200"><g id="g3202"><rect width="1.871" gorn="0.2.0.247.0.0.0.0.0.0.0" id="connector241pin" x="91.03" height="2.551" fill="#9A916C" y="93.141"/></g></g></g></g></g></g></g><rect width="2.268" gorn="0.2.0.248" id="connector242pin" x="39.97" height="2.268" fill="#9A916C" y="48.396"/><rect width="2.268" gorn="0.2.0.249" id="connector243pin" x="44.222" height="2.268" fill="#9A916C" y="48.396"/><circle gorn="0.2.0.255" r="5.255" stroke="#9A916C" cy="129.977" cx="104.789" id="connector249pin" stroke-width="1.44" fill="none"/></g><g id="g3258" transform="matrix(1, 0, 0, 1, -1.42142, 66.2682)"><g id="g3260"><g id="g3262"><g gorn="0.2.1.0.0.0" id="sewalli"><g id="g3265" transform="matrix(0, -1, 1, 0, 1.134, 14.457)"><g id="g3267"><g id="g3269"><g id="g3271"><path id="PWR_0" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994v4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3275" transform="matrix(1, 0, 0, 1, 96.971, 9.26021)"><g id="g3277"><g id="g3279"><g gorn="0.2.2.0.0.0" id="sewalli_1_"><g id="g3282" transform="matrix(0.866025, 0.5, -0.5, 0.866025, 4.37516, -3.00528)"><g id="g3284"><g id="g3286"><g id="g3288"><path id="PWR_2" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3292" transform="matrix(1, 0, 0, 1, 60.6905, 117.405)"><g id="g3294"><g id="g3296"><g gorn="0.2.3.0.0.0" id="jstph2"><g id="g3299" transform="matrix(-1, 0, 0, -1, 22.677, 25.512)"><g id="g3301"><g id="g3303"><g id="g3305"><g id="g3307"><polygon id="polygon3309" points="19.843,0 2.835,0 2.835,2.126 0,2.126 0,17.008 22.677,17.008 22.677,2.126 19.843,2.126 " fill="#666666"/><rect id="rect3311" width="2.835" x="4.252" height="8.504" y="5.669"/><rect id="rect3313" width="2.835" x="15.591" height="8.504" y="5.669"/><rect id="rect3315" width="2.835" x="4.252" height="2.835" fill="#333333" y="14.173"/><rect id="rect3317" width="2.835" x="15.591" height="2.835" fill="#333333" y="14.173"/><rect id="rect3319" width="2.268" x="0" height="4.252" fill="#333333" y="17.008"/><rect id="rect3321" width="2.268" x="20.409" height="4.252" fill="#333333" y="17.008"/></g></g></g></g></g></g></g></g></g><g id="g3490" transform="matrix(1, 0, 0, 1, 60.6905, 1.26145)"><g id="g3492"><g id="g3494"><g gorn="0.2.13.0.0.0" id="_x34_uconn_x5F_20329_x5F_v2"><g id="g3497" transform="matrix(-1, 0, 0, -1, 22.677, 16.654)"><g id="g3499"><g id="g3501"><g id="g3503"><g id="g3505"><rect id="rect3507" width="22.677" x="0" height="3.969" fill="#B4B4B4" y="7.157"/><rect id="rect3509" width="0.567" x="11.055" height="3.402" fill="#DCDCDC" y="0"/><rect id="rect3511" width="0.567" x="12.898" height="3.402" fill="#DCDCDC" y="0"/><rect id="rect3513" width="0.567" x="14.74" height="3.402" fill="#DCDCDC" y="0"/><rect id="rect3515" width="0.567" x="9.213" height="3.402" fill="#DCDCDC" y="0"/><rect id="rect3517" width="0.567" x="7.37" height="3.402" fill="#DCDCDC" y="0"/><rect id="rect3519" width="14.173" x="4.252" height="0.709" fill="#B4B4B4" y="1.489"/><rect id="rect3521" width="14.173" x="4.252" height="2.976" y="1.771"/><polygon id="polygon3523" points="17.008,1.347 17.008,3.473 14.74,3.473 14.74,4.182 13.323,4.182 13.323,1.63 9.354,1.63 9.354,4.182 7.937,4.182 7.937,3.473 5.669,3.473 5.669,1.347 0.567,1.347 0.567,14.953 22.11,14.953 22.11,1.347 " fill="#DCDCDC"/><polygon id="polygon3525" points="5.811,12.119 3.827,12.119 4.11,7.867 5.527,7.867 "/><polygon id="polygon3527" points="18.85,12.119 16.866,12.119 17.149,7.867 18.567,7.867 "/><polygon id="polygon3529" points="20.976,16.654 1.701,16.653 1.134,14.953 21.543,14.953 " fill="#F0F0F0"/><polygon id="polygon3531" points="0.567,16.653 0,16.653 0.567,14.953 1.134,14.953 " fill="#B4B4B4"/><polygon id="polygon3533" points="22.677,16.654 22.11,16.654 21.543,14.953 22.11,14.953 " fill="#B4B4B4"/></g></g></g></g></g></g></g></g></g><g id="g3643" transform="matrix(1, 0, 0, 1, 126.024, 88.7054)"><g id="g3645"><g id="g3647"><g gorn="0.2.17.0.0.0" id="sewalli_2_"><g id="g3650" transform="matrix(-0.34202, 0.939693, -0.939693, -0.34202, 16.7215, 1.6145)"><g id="g3652"><g id="g3654"><g id="g3656"><path id="PIN_6" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3660" transform="matrix(1, 0, 0, 1, 31.316, 9.44021)"><g id="g3662"><g id="g3664"><g gorn="0.2.18.0.0.0" id="sewalli_3_"><g id="g3667" transform="matrix(0.866025, -0.5, 0.5, 0.866025, -2.28635, 4.79023)"><g id="g3669"><g id="g3671"><g id="g3673"><path id="GND_0" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3677" transform="matrix(1, 0, 0, 1, 129.889, 66.2682)"><g id="g3679"><g id="g3681"><g gorn="0.2.19.0.0.0" id="sewalli_4_"><g id="g3684" transform="matrix(0, 1, -1, 0, 14.457, -1.134)"><g id="g3686"><g id="g3688"><g id="g3690"><path id="GND_2" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994v4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3694" transform="matrix(1, 0, 0, 1, 31.496, 123.276)"><g id="g3696"><g id="g3698"><g gorn="0.2.20.0.0.0" id="sewalli_5_"><g id="g3701" transform="matrix(-0.866025, -0.5, 0.5, -0.866025, 11.2159, 16.3283)"><g id="g3703"><g id="g3705"><g id="g3707"><path id="GND_1" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3711" transform="matrix(1, 0, 0, 1, 62.1073, 28.9345)"><g id="g3713"><g id="g3715"><g gorn="0.2.21.0.0.0" id="tqfn44_7mm"><g id="g3718" transform="matrix(-1, 0, 0, -1, 20.644, 20.797)"><g id="g3720"><g id="g3722"><g id="g3724"><rect id="rect3726" width="19.843" x="0.802" height="19.843" fill="#333333" y="0"/></g></g></g></g></g></g></g></g><g id="g3779" transform="matrix(1, 0, 0, 1, 66.7852, 67.5395)"><g id="g3781"><g id="g3783"><g gorn="0.2.23.0.0.0" id="lga16_3x3mm"><g id="g3786" transform="matrix(0, 1, -1, 0, 9.64195, -0.99198)"><g id="g3788"><g id="g3790"><g id="g3792"><g id="g3794" transform="matrix(2.535182e-06 1 -1 2.535182e-06 10.7806 -1.9854)"><g id="g3796"><g id="g3798"><rect id="rect3800" width="8.504" x="2.131" height="8.504" fill="#333333" y="0.146"/></g></g></g></g></g></g></g></g></g></g></g><g id="g3802" transform="matrix(1, 0, 0, 1, 126.024, 43.8312)"><g id="g3804"><g id="g3806"><g gorn="0.2.24.0.0.0" id="sewalli_6_"><g id="g3809" transform="matrix(0.34202, 0.939693, -0.939693, 0.34202, 11.389, -2.94224)"><g id="g3811"><g id="g3813"><g id="g3815"><path id="PIN_9" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677c0,2.583-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3819" transform="matrix(1, 0, 0, 1, 114.622, 23.9716)"><g id="g3821"><g id="g3823"><g gorn="0.2.25.0.0.0" id="sewalli_7_"><g id="g3826" transform="matrix(0.642788, 0.766044, -0.766044, 0.642788, 7.88767, -3.59214)"><g id="g3828"><g id="g3830"><g id="g3832"><path id="PIN_10" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677c0,2.583-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3836" transform="matrix(1, 0, 0, 1, 114.622, 108.565)"><g id="g3838"><g id="g3840"><g gorn="0.2.26.0.0.0" id="sewalli_8_"><g id="g3843" transform="matrix(-0.642788, 0.766044, -0.766044, -0.642788, 17.9094, 4.97174)"><g id="g3845"><g id="g3847"><g id="g3849"><path id="PIN_12" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g3853" transform="matrix(1, 0, 0, 1, 87.8976, 7.45574)"><g id="g3855"><g id="g3857"><g gorn="0.2.27.0.0.0" id="_x30_805-led-red"><path id="path3860" d="M3.543,0.282v5.103c0,0.156-0.127,0.283-0.283,0.283H0.283C0.127,5.668,0,5.541,0,5.385V0.283C0,0.126,0.127,0,0.283,0H3.26C3.416-0.001,3.543,0.126,3.543,0.282z" fill="#DCDCDC"/><rect id="SERIAL_LED" width="3.543" x="0" height="3.543" fill="#FF0000" y="1.062"/><circle id="circle3864" r="0.567" cy="2.833" cx="1.772" fill="#A00000"/></g></g></g></g><g id="g3866" transform="matrix(1, 0, 0, 1, 109.902, 91.0058)"><g id="g3868"><g id="g3870"><g gorn="0.2.28.0.0.0" id="led3535"><g id="g3873" transform="matrix(0.5, -0.866025, 0.866025, 0.5, -1.81567, 6.77619)"><g id="g3875"><g id="g3877"><g id="g3879"><g id="g3881" transform="matrix(-1 2.520685e-06 -2.520685e-06 -1 2.8354 2.8356)"><g id="g3883"></g></g><path id="path3889" d="M9.921,9.921H0l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g3891" transform="matrix(0.5 -0.866 0.866 0.5 -1.816 6.7772)"><g id="g3893"><g id="g3895"><ellipse id="LED6_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252"/></g></g></g><path id="LED6" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/><g id="g3901" transform="matrix(-1 2.520685e-06 -2.520685e-06 -1 9.3484 5.3876)"><g id="g3903"><g id="g3905"></g></g></g></g></g></g></g></g></g></g></g><g id="g3909" transform="matrix(1, 0, 0, 1, 91.5451, 110.083)"><g id="g3911"><g id="g3913"><g gorn="0.2.29.0.0.0" id="led3535_1_"><g id="g3916" transform="matrix(0.866025, -0.5, 0.5, 0.866025, -1.81567, 3.14484)"><g id="g3918"><g id="g3920"><g id="g3922"><g id="g3924" transform="matrix(-1 2.549678e-06 -2.549678e-06 -1 2.8357 2.8354)"><g id="g3926"></g></g><path id="path3932" d="M9.921,9.921H0l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g3934" transform="matrix(0.866 -0.5 0.5 0.866 -1.8159 3.1453)"><g id="g3936"><g id="g3938"><ellipse id="LED5_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252"/></g></g></g><path id="LED5" d="M3.257,3.827l0-2.758c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134H3.257z" fill="#FFFFFF"/><g id="g3944" transform="matrix(-1 2.549678e-06 -2.549678e-06 -1 9.3487 5.3874)"><g id="g3946"><g id="g3948"></g></g></g></g></g></g></g></g></g></g></g><g id="g3952" transform="matrix(1, 0, 0, 1, 115.662, 68.6892)"><g id="g3954"><g id="g3956"><g gorn="0.2.30.0.0.0" id="led3535_2_"><g id="g3959" transform="matrix(0, -1, 1, 0, 0, 9.92102)"><g id="g3961"><g id="g3963"><g id="g3965"><g id="g3967" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 -3.697193e-04 2.8354)"><g id="g3969"><g id="g3971"><rect id="rect3973" width="2.835" x="0" height="2.835" fill="#FFFFFF" y="0"/></g></g></g><path id="path3975" d="M9.921,9.921H0V1.417C0.553,0.864,0.864,0.553,1.417,0h8.504L9.921,9.921z"/><circle id="LED7_OUTER" r="4.252" cy="4.961" cx="4.961" fill="#C8C8C8"/><path id="LED7" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/><g id="g3981" transform="matrix(-2.535182e-06 -1 1 -2.535182e-06 1.9801 7.3679)"><g id="g3983"><g id="g3985"></g></g></g></g></g></g></g></g></g></g></g><g id="g3989" transform="matrix(1, 0, 0, 1, 109.542, 44.5728)"><g id="g3991"><g id="g3993"><g gorn="0.2.31.0.0.0" id="led3535_3_"><g id="g3996" transform="matrix(-0.5, -0.866025, 0.866025, -0.5, 3.14484, 11.7367)"><g id="g3998"><g id="g4000"><g id="g4002"><g id="g4004" transform="matrix(-2.549677e-06 -1 1 -2.549677e-06 -5.066785e-04 2.8351)"><g id="g4006"></g></g><path id="path4012" d="M9.921,9.921H0l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g4014" transform="matrix(0.866 -0.5 0.5 0.866 -1.816 3.1451)"><g id="g4016"><g id="g4018"><ellipse id="LED8_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252"/></g></g></g><path id="LED8" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961l4.819,0v4.195c0.397-0.053,0.78-0.147,1.134-0.302V4.961h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/><g id="g4024" transform="matrix(-2.549677e-06 -1 1 -2.549677e-06 1.98 7.3676)"><g id="g4026"><g id="g4028"></g></g></g></g></g></g></g></g></g></g></g><g id="g4032" transform="matrix(1, 0, 0, 1, 91.1851, 25.8554)"><g id="g4034"><g id="g4036"><g gorn="0.2.32.0.0.0" id="led3535_4_"><g id="g4039" transform="matrix(-0.866025, -0.5, 0.5, -0.866025, 6.77619, 11.7367)"><g id="g4041"><g id="g4043"><g id="g4045"><g id="g4047" transform="matrix(-2.520685e-06 -1 1 -2.520685e-06 -5.064701e-04 2.8349)"><g id="g4049"></g></g><path id="path4055" d="M9.921,9.921L0,9.921l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g4057" transform="matrix(0.5 -0.866 0.866 0.5 -1.8162 6.7767)"><g id="g4059"><g id="g4061"><ellipse id="LED9_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252"/></g></g></g><path id="LED9" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/><g id="g4067" transform="matrix(-2.520685e-06 -1 1 -2.520685e-06 1.98 7.3674)"><g id="g4069"><g id="g4071"></g></g></g></g></g></g></g></g></g></g></g><g id="g4075" transform="matrix(1, 0, 0, 1, 42.2321, 25.4954)"><g id="g4077"><g id="g4079"><g gorn="0.2.33.0.0.0" id="led3535_5_"><g id="g4082" transform="matrix(-0.866025, 0.5, -0.5, -0.866025, 11.7367, 6.77619)"><g id="g4084"><g id="g4086"><g id="g4088"><path id="path4092" d="M9.921,9.921H0l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g4094" transform="matrix(0.866 -0.5 0.5 0.866 -1.8158 3.145)"><g id="g4096"><g id="g4098"><ellipse id="LED0_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252" inkscape:label="#ellipse4100"/></g></g></g><path id="LED0" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893l2.551,0c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/></g></g></g></g></g></g></g></g><g id="g4106" transform="matrix(1, 0, 0, 1, 24.9547, 43.8528)"><g id="g4108"><g id="g4110"><g gorn="0.2.34.0.0.0" id="led3535_6_"><g id="g4113" transform="matrix(-0.5, 0.866025, -0.866025, -0.5, 11.7367, 3.14484)"><g id="g4115"><g id="g4117"><g id="g4119"><path id="path4123" d="M9.921,9.921H0l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g4125" transform="matrix(0.5 -0.866 0.866 0.5 -1.8157 6.7765)"><g id="g4127"><g id="g4129"><ellipse id="LED1_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252" inkscape:label="#ellipse4131"/></g></g></g><path id="LED1" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/></g></g></g></g></g></g></g></g><g id="g4137" transform="matrix(1, 0, 0, 1, 18.4756, 67.9692)"><g id="g4139"><g id="g4141"><g gorn="0.2.35.0.0.0" id="led3535_7_"><g id="g4144" transform="matrix(0, 1, -1, 0, 9.92102, 0)"><g id="g4146"><g id="g4148"><g id="g4150"><g id="g4152" transform="matrix(2.535182e-06 1 -1 2.535182e-06 2.8346 -3.774104e-04)"><g id="g4154"></g></g><path id="path4160" d="M9.921,9.921H0V1.417C0.553,0.864,0.864,0.553,1.417,0h8.504L9.921,9.921z"/><circle id="LED2_OUTER" r="4.252" cy="4.961" cx="4.961" fill="#C8C8C8"/><path id="LED2" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/><g id="g4166" transform="matrix(2.535182e-06 1 -1 2.535182e-06 7.3671 -1.9809)"><g id="g4168"><g id="g4170"></g></g></g></g></g></g></g></g></g></g></g><g id="g4174" transform="matrix(1, 0, 0, 1, 24.9547, 93.1658)"><g id="g4176"><g id="g4178"><g gorn="0.2.36.0.0.0" id="led3535_8_"><g id="g4181" transform="matrix(0.5, 0.866025, -0.866025, 0.5, 6.77619, -1.81567)"><g id="g4183"><g id="g4185"><g id="g4187"><g id="g4189" transform="matrix(2.549678e-06 1 -1 2.549678e-06 2.8349 -5.147002e-04)"><g id="g4191"></g></g><path id="path4197" d="M9.921,9.921H0l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g4199" transform="matrix(0.866 -0.5 0.5 0.866 -1.8157 3.1452)"><g id="g4201"><g id="g4203"><ellipse id="LED3_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252"/></g></g></g><path id="LED3" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745l0,2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/><g id="g4209" transform="matrix(2.549678e-06 1 -1 2.549678e-06 7.3674 -1.981)"><g id="g4211"><g id="g4213"></g></g></g></g></g></g></g></g></g></g></g><g id="g4217" transform="matrix(1, 0, 0, 1, 44.0321, 110.803)"><g id="g4219"><g id="g4221"><g gorn="0.2.37.0.0.0" id="led3535_9_"><g id="g4224" transform="matrix(0.866025, 0.5, -0.5, 0.866025, 3.14484, -1.81567)"><g id="g4226"><g id="g4228"><g id="g4230"><g id="g4232" transform="matrix(2.520686e-06 1 -1 2.520686e-06 2.8351 -5.136265e-04)"><g id="g4234"></g></g><path id="path4240" d="M9.921,9.921H0l0-8.504C0.553,0.864,0.864,0.553,1.417,0l8.504,0L9.921,9.921z"/><g id="g4242" transform="matrix(0.5 -0.866 0.866 0.5 -1.8155 6.777)"><g id="g4244"><g id="g4246"><ellipse id="LED4_OUTER" cy="4.961" cx="4.961" fill="#C8C8C8" rx="4.252" ry="4.252"/></g></g></g><path id="LED4" d="M3.257,3.827V1.069c-0.42,0.184-0.798,0.442-1.134,0.745v2.012l-1.242,0C0.78,4.19,0.709,4.565,0.709,4.961h4.819v4.195c0.397-0.053,0.78-0.147,1.134-0.302l0-3.893h2.551c0-0.395-0.071-0.771-0.172-1.134L3.257,3.827z" fill="#FFFFFF"/><g id="g4252" transform="matrix(2.520686e-06 1 -1 2.520686e-06 7.3676 -1.981)"><g id="g4254"><g id="g4256"></g></g></g></g></g></g></g></g></g></g></g><g id="g4260" transform="matrix(1, 0, 0, 1, 52.2575, 8.17574)"><g id="g4262"><g id="g4264"><g gorn="0.2.38.0.0.0" id="_x30_805-led-green"><path id="path4267" d="M3.543,0.282v5.103c0,0.156-0.127,0.283-0.283,0.283H0.283C0.127,5.668,0,5.541,0,5.385V0.283C0,0.126,0.127,0,0.283,0H3.26C3.416-0.001,3.543,0.126,3.543,0.282z" fill="#DCDCDC"/><rect id="PWR_LED" width="3.543" x="0" height="3.543" fill="#00FF00" y="1.062"/><circle id="circle4271" r="0.567" cy="2.833" cx="1.772" fill="#00B400"/></g></g></g></g><g id="g4578" transform="matrix(1, 0, 0, 1, 65.651, 56.7978)"><g id="g4580"><g id="g4582"><g gorn="0.2.56.0.0.0" id="btn_kmr2_4.6x2.8"><g id="g4585" transform="matrix(-1, 0, 0, -1, 12.756, 8.50399)"><g id="g4587"><g id="g4589"><g id="g4591"><g id="g4593"><polygon id="polygon4595" points="12.756,2.692 12.756,1.275 11.339,1.275 11.339,0 1.417,0 1.417,1.275 0,1.275 0,2.692 1.417,2.692 1.417,5.811 0,5.811 0,7.228 1.417,7.228 1.417,8.504 11.339,8.504 11.339,7.228 12.756,7.228 12.756,5.811 11.339,5.811 11.339,2.692 " fill="#DCDCDC"/><circle id="circle4597" r="2.48" cy="4.252" cx="6.378" fill="#1E1E1E"/><rect id="rect4599" width="0.567" x="0.992" height="8.504" fill="#B4B4B4" y="0"/><rect id="rect4601" width="0.567" x="11.197" height="8.504" fill="#B4B4B4" y="0"/></g></g></g></g></g></g></g></g></g><g id="g4603" transform="matrix(1, 0, 0, 1, 2.62271, 89.4254)"><g id="g4605"><g id="g4607"><g gorn="0.2.57.0.0.0" id="sewalli_9_"><g id="g4610" transform="matrix(-0.34202, -0.939693, 0.939693, -0.34202, 4.20196, 16.2653)"><g id="g4612"><g id="g4614"><g id="g4616"><path id="RX" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g4620" transform="matrix(1, 0, 0, 1, 13.845, 24.1516)"><g id="g4622"><g id="g4624"><g gorn="0.2.58.0.0.0" id="sewalli_10_"><g id="g4627" transform="matrix(0.642788, -0.766044, 0.766044, 0.642788, -2.31836, 8.35128)"><g id="g4629"><g id="g4631"><g id="g4633"><path id="SCL" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677C5.212,11.338,3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g4637" transform="matrix(1, 0, 0, 1, 2.44271, 43.8312)"><g id="g4639"><g id="g4641"><g gorn="0.2.59.0.0.0" id="sewalli_11_"><g id="g4644" transform="matrix(0.34202, -0.939693, 0.939693, 0.34202, -1.13049, 11.7085)"><g id="g4646"><g id="g4648"><g id="g4650"><path id="SDA" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g4654" transform="matrix(1, 0, 0, 1, 38.9033, 85.2833)"><g id="g4656"><g id="g4658"><g gorn="0.2.60.0.0.0" id="buzzer_smt_5mm"><g id="g4661"><rect id="rect4663" width="17.008" x="0" height="1.417" fill="#DCDCDC" y="10.914"/><rect id="rect4665" width="2.684" x="0" height="1.417" fill="#DCDCDC" y="1.276"/><path id="path4667" d="M15.733,14.173H1.559V0h11.906c0.886,0.886,1.382,1.382,2.268,2.268V14.173z" fill="#333333"/><circle id="circle4669" r="1.417" cy="4.252" cx="8.362"/></g></g></g></g></g><g id="g4671" transform="matrix(1, 0, 0, 1, 32.4575, 62.6257)"><g id="g4673"><g id="g4675"><g gorn="0.2.61.0.0.0" id="evq-q2_smaller"><g id="g4678" transform="matrix(-1, 0, 0, -1, 21.543, 17.008)"><g id="g4680"><g id="g4682"><g id="g4684"><g id="g4686"><polygon id="BTN_A_OUTER" points="21.543,3.685 21.543,1.984 19.842,1.984 19.842,0.001 1.701,0.001 1.701,1.984 0,1.984 0,3.685 1.701,3.685 1.701,13.323 0,13.323 0,15.024 1.701,15.024 1.701,17.008 19.842,17.008 19.842,15.024 21.543,15.024 21.543,13.323 19.842,13.323 19.842,3.685 " fill="#DCDCDC"/><circle id="BTN_A_INNER" r="4.252" cy="8.504" cx="10.772" fill="#1E1E1E"/><rect id="rect4692" width="0.567" x="1.465" height="17.008" fill="#B4B4B4" y="0"/><rect id="rect4694" width="0.567" x="19.559" height="17.008" fill="#B4B4B4" y="0"/></g></g></g></g></g></g></g></g></g><g id="g4696" transform="matrix(1, 0, 0, 1, 90.0576, 62.6257)"><g id="g4698"><g id="g4700"><g gorn="0.2.62.0.0.0" id="evq-q2_smaller_1_"><g id="g4703" transform="matrix(-1, 0, 0, -1, 21.543, 17.008)"><g id="g4705"><g id="g4707"><g id="g4709"><g id="g4711"><polygon id="BTN_B_OUTER" points="21.543,3.685 21.543,1.984 19.842,1.984 19.842,0.001 1.701,0.001 1.701,1.984 0,1.984 0,3.685 1.701,3.685 1.701,13.323 0,13.323 0,15.024 1.701,15.024 1.701,17.008 19.842,17.008 19.842,15.024 21.543,15.024 21.543,13.323 19.842,13.323 19.842,3.685 " fill="#DCDCDC"/><circle id="BTN_B_INNER" r="4.252" cy="8.504" cx="10.772" fill="#1E1E1E"/><rect id="rect4717" width="0.567" x="1.465" height="17.008" fill="#B4B4B4" y="0"/><rect id="rect4719" width="0.567" x="19.559" height="17.008" fill="#B4B4B4" y="0"/></g></g></g></g></g></g></g></g></g><g id="SLIDE" transform="matrix(1, 0, 0, 1, 62.1076, 87.8256)"><g id="g4723"><g id="g4725"><g gorn="0.2.63.0.0.0" id="eg1390"><g id="g4728"><rect id="rect4730" width="2.268" x="1.701" height="17.008" fill="#DCDCDC" y="0"/><rect id="rect4732" width="2.268" x="8.788" height="17.008" fill="#DCDCDC" y="0"/><rect id="rect4734" width="2.268" x="15.874" height="17.008" fill="#DCDCDC" y="0"/><rect id="rect4736" width="2.268" x="1.701" height="11.339" fill="#B4B4B4" y="2.835"/><rect id="rect4738" width="2.268" x="8.788" height="11.339" fill="#B4B4B4" y="2.834"/><rect id="rect4740" width="2.268" x="15.874" height="11.339" fill="#B4B4B4" y="2.835"/><rect id="SLIDE_HOVER" width="19.843" x="0" height="9.921" y="3.543"/><polygon id="polygon4744" points="18.425,6.377 18.425,3.543 1.417,3.543 1.417,6.377 0,6.377 0,10.629 1.417,10.629 1.417,13.464 5.67,13.464 5.67,10.629 14.174,10.629 14.174,13.464 18.425,13.464 18.425,10.629 19.843,10.629 19.843,6.377 " fill="#DCDCDC"/><rect id="SLIDE_INNER" width="4.252" x="5.67" height="2.835" fill="#333333" y="10.629"/><circle id="circle4748" r="1.417" cy="8.503" cx="12.047" fill="#B4B4B4"/><circle id="circle4750" r="1.417" cy="8.503" cx="7.795" fill="#B4B4B4"/></g></g></g></g></g><g id="g4752" transform="matrix(1, 0, 0, 1, 99.7718, 48.8213)"><g id="g4754"><g id="g4756"><g gorn="0.2.64.0.0.0" id="_0402"><path id="path4759" d="M2.551,1.417H0.283C0.127,1.417,0,1.29,0,1.134v-0.85C0,0.127,0.127,0,0.283,0h2.268c0.157,0,0.283,0.127,0.283,0.283v0.85C2.835,1.29,2.708,1.417,2.551,1.417z" fill="#DCDCDC"/><rect id="rect4761" width="1.417" x="0.709" height="1.417" fill="#333333" y="0"/></g></g></g></g><g id="g4763" transform="matrix(1, 0, 0, 1, 14.565, 109.285)"><g id="g4765"><g id="g4767"><g gorn="0.2.65.0.0.0" id="sewalli_12_"><g id="g4770" transform="matrix(-0.642788, -0.766044, 0.766044, -0.642788, 7.70335, 16.9152)"><g id="g4772"><g id="g4774"><g id="g4776"><path id="TX" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677c2.583,0,4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427S2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g><g id="g4780" transform="matrix(1, 0, 0, 1, 91.5257, 91.9361)"><g id="g4782"><g id="g4784"><g gorn="0.2.66.0.0.0" id="spw2430hr5h-b"><g id="g4787" transform="matrix(0, -1, 1, 0, -0.85001, 7.93699)"><g id="g4789"><g id="g4791"><g id="g4793"><g id="g4795"><path id="path4797" d="M0,8.079v-7.37C0,0.317,0.317,0,0.709,0h5.669c0.391,0,0.709,0.317,0.709,0.709v7.37c0,0.391-0.317,0.709-0.709,0.709l-5.669,0C0.317,8.787,0,8.47,0,8.079z" fill="#B4B4B4"/><path id="path4799" d="M0.425,0.709c0-0.156,0.127-0.284,0.283-0.284h5.67c0.156,0,0.283,0.128,0.283,0.284v7.37c0,0.156-0.127,0.284-0.283,0.284h-5.67c-0.156,0-0.283-0.128-0.283-0.284L0.425,0.709z" fill="#DCDCDC"/><circle id="circle4801" r="0.709" cy="3.259" cx="3.543"/></g></g></g></g></g></g></g></g></g><g id="g4803" transform="matrix(1, 0, 0, 1, 40.9615, 48.3957)"><g id="g4805"><g id="g4807"><g gorn="0.2.67.0.0.0" id="als-pt19-315c"><g id="g4810"><path id="path4812" d="M4.252,2.268H0.283C0.127,2.268,0,2.141,0,1.984V0.283C0,0.127,0.127,0,0.283,0h3.969c0.157,0,0.283,0.127,0.283,0.283v1.701C4.535,2.141,4.409,2.268,4.252,2.268z" fill="#DCDCDC"/><rect id="rect4814" width="3.402" x="0.567" height="2.268" fill="#FFFFFF" y="0"/><rect id="rect4816" width="1.701" x="0.85" height="1.701" y="0.283"/><circle id="circle4818" r="0.354" cy="1.134" cx="1.701" fill="#FFFFFF"/></g></g></g></g></g><g id="g4837" transform="matrix(1, 0, 0, 1, 96.971, 123.276)"><g id="g4839"><g id="g4841"><g gorn="0.2.69.0.0.0" id="sewalli_13_"><g id="g4844" transform="matrix(-0.866025, 0.5, -0.5, -0.866025, 17.8774, 8.53279)"><g id="g4846"><g id="g4848"><g id="g4850"><path id="VBATT" d="M3.118,6.661c0-2.583,2.094-4.677,4.677-4.677s4.677,2.094,4.677,4.677s-2.094,4.677-4.677,4.677S3.118,9.245,3.118,6.661z M7.795,13.323c4.305,0,7.795-3.49,7.795-7.795l0-4.534c-2.562-0.276-5.16-0.427-7.795-0.427C5.16,0.567,2.562,0.718,0,0.994l0,4.534C0,9.833,3.49,13.323,7.795,13.323z" fill="#9A916C"/></g></g></g></g></g></g></g></g></g></a><g id="g4875"><g id="g4877"><g id="g4879"><path d="M131.094,75.913c0.102,0.239,0.153,0.477,0.153,0.712s-0.048,0.456-0.145,0.665c-0.097,0.208-0.239,0.399-0.427,0.572s-0.418,0.318-0.69,0.434l-0.041,0.018c-0.26,0.11-0.518,0.173-0.771,0.188c-0.255,0.015-0.493-0.017-0.716-0.094c-0.222-0.077-0.42-0.195-0.595-0.354c-0.175-0.159-0.313-0.358-0.415-0.598c-0.104-0.243-0.158-0.466-0.165-0.668c-0.006-0.203,0.023-0.411,0.087-0.626l0.614,0.151c-0.048,0.141-0.077,0.283-0.087,0.429s0.024,0.31,0.102,0.492c0.062,0.145,0.149,0.266,0.265,0.362s0.247,0.166,0.396,0.208s0.312,0.056,0.487,0.041c0.176-0.015,0.354-0.062,0.537-0.139l0.03-0.013c0.2-0.085,0.368-0.188,0.505-0.307c0.137-0.12,0.24-0.249,0.312-0.387s0.108-0.282,0.112-0.434c0.004-0.15-0.026-0.302-0.091-0.454c-0.053-0.125-0.119-0.233-0.199-0.327s-0.165-0.167-0.256-0.221l-0.783,0.333l0.315,0.744l-0.517,0.22l-0.552-1.301l1.589-0.676c0.183,0.102,0.359,0.235,0.528,0.4C130.848,75.451,130.987,75.66,131.094,75.913z" id="path4881" fill="#FFFFFF"/></g><g id="g4883"><path d="M126.637,74.517l-0.003-0.595l2.56-1.707l-2.568,0.014l-0.003-0.622l3.85-0.021l0.003,0.541l-2.637,1.762l2.646-0.014l0.004,0.621L126.637,74.517z" id="path4885" fill="#FFFFFF"/></g><g id="g4887"><path d="M126.956,69.815l0.438-1.093c0.102-0.255,0.237-0.47,0.405-0.644c0.168-0.173,0.359-0.303,0.573-0.39c0.215-0.086,0.446-0.126,0.694-0.122c0.249,0.005,0.505,0.06,0.767,0.165l0.041,0.016c0.263,0.105,0.486,0.242,0.671,0.411c0.186,0.169,0.326,0.358,0.422,0.568s0.146,0.437,0.148,0.679c0.004,0.242-0.045,0.491-0.147,0.747l-0.437,1.093L126.956,69.815z M127.73,69.436l2.502,1.001l0.198-0.496c0.065-0.163,0.097-0.323,0.095-0.48c-0.003-0.157-0.038-0.303-0.105-0.439c-0.068-0.136-0.169-0.261-0.301-0.375c-0.132-0.114-0.293-0.209-0.484-0.285l-0.03-0.012c-0.194-0.078-0.378-0.121-0.553-0.129c-0.174-0.008-0.334,0.013-0.479,0.063s-0.271,0.132-0.382,0.244c-0.109,0.112-0.197,0.25-0.263,0.413L127.73,69.436z" id="path4889" fill="#FFFFFF"/></g></g><g id="g4891"><g id="g4893"><path d="M12.63,69.631c-0.109-0.249-0.161-0.485-0.154-0.71c0.007-0.226,0.054-0.436,0.14-0.63l0.573,0.181c-0.065,0.145-0.105,0.292-0.121,0.441c-0.017,0.149,0.013,0.31,0.088,0.481c0.072,0.164,0.183,0.28,0.333,0.346s0.31,0.062,0.48-0.013l0.015-0.007c0.181-0.08,0.288-0.213,0.322-0.4c0.033-0.187-0.004-0.403-0.112-0.648l-0.078-0.176l0.333-0.237l1.396,0.407l-0.587-1.334l0.528-0.233l0.909,2.063l-0.458,0.202l-1.414-0.441c0.033,0.13,0.052,0.262,0.057,0.396c0.005,0.134-0.013,0.261-0.054,0.382c-0.042,0.12-0.107,0.231-0.199,0.333c-0.091,0.103-0.214,0.188-0.368,0.256l-0.015,0.006c-0.165,0.073-0.327,0.11-0.488,0.113c-0.161,0.002-0.312-0.026-0.455-0.085c-0.142-0.06-0.271-0.148-0.387-0.265C12.799,69.941,12.704,69.799,12.63,69.631z" id="path4895" fill="#FFFFFF"/></g><g id="g4897"><path d="M13.835,70.634l0.156,0.687l-0.713,0.162l-0.156-0.687L13.835,70.634z" id="path4899" fill="#FFFFFF"/></g><g id="g4901"><path d="M13.341,72.909c0.002-0.271,0.052-0.509,0.151-0.711c0.099-0.203,0.227-0.375,0.386-0.517l0.448,0.399c-0.118,0.105-0.215,0.223-0.291,0.353c-0.076,0.13-0.115,0.288-0.116,0.476c-0.001,0.179,0.053,0.33,0.162,0.452c0.109,0.121,0.257,0.183,0.443,0.185h0.016c0.198,0.001,0.35-0.077,0.458-0.233c0.107-0.157,0.162-0.369,0.164-0.637l0.001-0.192l0.401-0.08l1.107,0.942l0.01-1.458l0.578,0.004l-0.016,2.255l-0.5-0.004l-1.109-0.98c-0.023,0.132-0.06,0.26-0.11,0.384s-0.119,0.233-0.206,0.326s-0.193,0.167-0.318,0.223c-0.125,0.057-0.272,0.084-0.44,0.082h-0.017c-0.18-0.001-0.343-0.033-0.491-0.097c-0.148-0.063-0.275-0.151-0.381-0.264c-0.105-0.112-0.187-0.246-0.245-0.4S13.34,73.093,13.341,72.909z" id="path4903" fill="#FFFFFF"/></g><g id="g4905"><path d="M17.128,75.33l-0.227,0.655l-3.059-0.06l2.439,1.847l-0.22,0.634l-3.222-2.525l0.193-0.557L17.128,75.33z" id="path4907" fill="#FFFFFF"/></g></g><g id="g4909"><g id="g4911"><path d="M40.017,122.934c-0.258-0.033-0.489-0.107-0.692-0.226c-0.204-0.118-0.371-0.271-0.503-0.459c-0.131-0.188-0.225-0.407-0.28-0.656c-0.057-0.248-0.065-0.521-0.028-0.815l0.005-0.043c0.034-0.281,0.11-0.534,0.225-0.763c0.115-0.228,0.262-0.417,0.44-0.571c0.177-0.152,0.379-0.266,0.604-0.337c0.225-0.071,0.468-0.091,0.726-0.059c0.262,0.032,0.481,0.097,0.66,0.193s0.345,0.226,0.497,0.389l-0.439,0.456c-0.097-0.113-0.206-0.209-0.326-0.291c-0.122-0.081-0.28-0.135-0.476-0.159c-0.157-0.02-0.307-0.004-0.447,0.047c-0.142,0.051-0.268,0.131-0.379,0.238c-0.111,0.108-0.205,0.242-0.28,0.401c-0.076,0.159-0.125,0.336-0.15,0.533l-0.004,0.033c-0.027,0.215-0.022,0.412,0.012,0.59c0.035,0.179,0.094,0.334,0.177,0.465c0.083,0.13,0.189,0.235,0.319,0.314c0.128,0.078,0.274,0.129,0.438,0.148c0.135,0.018,0.262,0.015,0.383-0.008c0.122-0.021,0.228-0.058,0.319-0.11l0.105-0.845l-0.801-0.101l0.069-0.557l1.402,0.176l-0.214,1.714c-0.18,0.106-0.383,0.191-0.611,0.256S40.29,122.968,40.017,122.934z" id="path4913" fill="#FFFFFF"/></g><g id="g4915"><path d="M43.343,119.733l0.519,0.288l0.231,3.067l1.249-2.245l0.543,0.303l-1.871,3.364l-0.472-0.262l-0.242-3.162l-1.286,2.312l-0.542-0.303L43.343,119.733z" id="path4917" fill="#FFFFFF"/></g><g id="g4919"><path d="M47.267,122.306l0.737,0.918c0.171,0.214,0.292,0.438,0.36,0.669c0.07,0.232,0.088,0.462,0.058,0.691c-0.03,0.229-0.108,0.45-0.235,0.664c-0.126,0.215-0.299,0.411-0.52,0.588l-0.034,0.027c-0.221,0.177-0.45,0.305-0.688,0.383c-0.238,0.078-0.472,0.107-0.703,0.088c-0.229-0.021-0.451-0.088-0.665-0.204c-0.213-0.115-0.406-0.28-0.577-0.494l-0.737-0.918L47.267,122.306z M47.215,123.165l-2.1,1.688l0.334,0.416c0.11,0.137,0.233,0.242,0.373,0.318c0.138,0.074,0.282,0.115,0.435,0.123c0.151,0.008,0.31-0.018,0.474-0.077c0.163-0.06,0.326-0.153,0.485-0.282l0.026-0.02c0.164-0.131,0.291-0.271,0.384-0.418c0.092-0.148,0.153-0.298,0.18-0.449c0.026-0.15,0.018-0.301-0.026-0.452c-0.043-0.15-0.12-0.294-0.23-0.432L47.215,123.165z" id="path4921" fill="#FFFFFF"/></g></g><g id="g4923"><g id="g4925"><path d="M25.718,106.106l-0.931-0.396l0.233-0.547l2.449,1.042l-0.232,0.547l-0.931-0.396l-1.275,2.995l-0.587-0.25L25.718,106.106z" id="path4927" fill="#FFFFFF"/></g><g id="g4929"><path d="M30.305,108.396l-2.069,0.735l-0.331,2.275l-0.565-0.463l0.285-1.667l-1.578,0.604l-0.548-0.45l2.156-0.77l0.325-2.175l0.562,0.462l-0.276,1.566l1.492-0.569L30.305,108.396z" id="path4931" fill="#FFFFFF"/></g><g id="g4933"><path d="M30.502,114.106l-0.179-0.427l-0.718,0.184l-0.164-0.391l0.717-0.188l-0.241-0.573l-0.716,0.188l-0.164-0.39l0.716-0.188l-0.138-0.328l0.412-0.171l0.163,0.39l0.792-0.206l-0.154-0.369l0.411-0.172l0.179,0.427l0.699-0.181l0.166,0.394l-0.7,0.182l0.241,0.573l0.7-0.182l0.164,0.391l-0.7,0.181l0.137,0.328l-0.411,0.172l-0.163-0.39l-0.792,0.205l0.155,0.369L30.502,114.106z M30.342,112.596l0.245,0.585l0.811-0.208l-0.245-0.584L30.342,112.596z" id="path4935" fill="#FFFFFF"/></g><g id="g4937"><path d="M32.699,114.639l-0.282-0.565l0.524-0.197l0.444,0.828l0.077,0.444l-3.821,0.659l-0.107-0.623L32.699,114.639z" id="path4939" fill="#FFFFFF"/></g></g><g id="g4941"><g id="g4943"><path d="M15.407,85.73l1.125,0.819c0.177,0.129,0.318,0.271,0.423,0.423c0.104,0.154,0.168,0.312,0.194,0.476c0.022,0.144,0.014,0.289-0.025,0.437c-0.041,0.149-0.112,0.293-0.215,0.436l-0.014,0.019c-0.175,0.24-0.377,0.392-0.606,0.453c-0.229,0.062-0.463,0.06-0.702-0.012l-0.144,1.739l-0.596-0.434l0.141-1.586c-0.008-0.001-0.02-0.007-0.035-0.018l-0.498-0.363l-0.8,1.098l-0.516-0.375L15.407,85.73z M15.351,88.057c0.202,0.146,0.391,0.21,0.569,0.189c0.178-0.019,0.327-0.11,0.445-0.274l0.007-0.009c0.129-0.178,0.173-0.351,0.131-0.517c-0.042-0.167-0.16-0.32-0.355-0.464l-0.565-0.411l-0.787,1.08L15.351,88.057z" id="path4945" fill="#FFFFFF"/></g><g id="g4947"><path d="M20.124,90.627l-2.191,0.131l-0.952,2.093l-0.414-0.604l0.738-1.521l-1.684,0.143l-0.401-0.584l2.285-0.142l0.917-1.998l0.411,0.6l-0.7,1.428l1.591-0.131L20.124,90.627z" id="path4949" fill="#FFFFFF"/></g><g id="g4951"><path d="M18.723,96.537l-0.036-0.462l-0.74-0.051l-0.033-0.422l0.739,0.046l-0.048-0.618l-0.74-0.047l-0.032-0.421l0.739,0.046l-0.027-0.354l0.443-0.034l0.033,0.422l0.816,0.053l-0.031-0.399l0.444-0.034l0.036,0.462l0.722,0.048l0.033,0.426l-0.722-0.048l0.048,0.619l0.722,0.049l0.033,0.421l-0.722-0.048l0.027,0.354l-0.444,0.034l-0.033-0.422l-0.816-0.054l0.031,0.4L18.723,96.537z M19.045,95.055l0.049,0.632l0.835,0.057l-0.049-0.632L19.045,95.055z" id="path4953" fill="#FFFFFF"/></g><g id="g4955"><path d="M17.264,97.996c0.05-0.217,0.141-0.402,0.272-0.556c0.131-0.152,0.294-0.271,0.489-0.355c0.194-0.085,0.416-0.134,0.666-0.146c0.249-0.012,0.517,0.015,0.803,0.081l0.059,0.014c0.282,0.065,0.534,0.158,0.754,0.28c0.22,0.123,0.399,0.265,0.537,0.426c0.137,0.162,0.233,0.341,0.285,0.537c0.053,0.196,0.054,0.404,0.003,0.621c-0.049,0.216-0.14,0.399-0.271,0.551c-0.131,0.151-0.294,0.271-0.489,0.355c-0.194,0.085-0.417,0.134-0.666,0.148c-0.25,0.015-0.518-0.012-0.803-0.078l-0.059-0.014c-0.286-0.065-0.538-0.159-0.756-0.28c-0.218-0.122-0.396-0.264-0.534-0.426c-0.138-0.162-0.232-0.341-0.285-0.537S17.214,98.215,17.264,97.996z M17.824,98.137c-0.054,0.235,0.021,0.452,0.225,0.647c0.205,0.196,0.518,0.342,0.941,0.44l0.043,0.009c0.209,0.049,0.401,0.073,0.578,0.074c0.177,0.002,0.333-0.02,0.465-0.062c0.133-0.043,0.241-0.104,0.327-0.188c0.084-0.082,0.141-0.182,0.168-0.3c0.054-0.236-0.021-0.452-0.225-0.65c-0.204-0.196-0.518-0.345-0.94-0.442l-0.043-0.01c-0.212-0.049-0.405-0.073-0.581-0.075c-0.176-0.001-0.329,0.021-0.462,0.064c-0.133,0.042-0.241,0.105-0.327,0.189C17.907,97.917,17.851,98.019,17.824,98.137z" id="path4957" fill="#FFFFFF"/></g></g><g id="g4959"><g id="g4961"><path d="M126.3,92.315l-0.14,0.442l0.666,0.324l-0.128,0.403l-0.668-0.32l-0.188,0.592l0.667,0.32l-0.128,0.403l-0.667-0.32l-0.108,0.338l-0.424-0.134l0.128-0.403l-0.736-0.356l-0.121,0.382l-0.426-0.135l0.141-0.441l-0.65-0.315l0.129-0.407l0.651,0.314l0.187-0.592l-0.649-0.315l0.128-0.402l0.649,0.314l0.108-0.339l0.425,0.135l-0.128,0.403l0.736,0.356l0.12-0.382L126.3,92.315z M125.445,93.569l0.192-0.604l-0.754-0.367l-0.191,0.605L125.445,93.569z" id="path4963" fill="#FFFFFF"/></g><g id="g4965"><path d="M128.272,91.374c-0.112,0.158-0.236,0.28-0.371,0.367c-0.137,0.085-0.281,0.141-0.434,0.167c-0.098,0.017-0.198,0.021-0.304,0.013c-0.104-0.007-0.217-0.028-0.335-0.065c-0.117-0.036-0.245-0.091-0.381-0.164c-0.139-0.073-0.289-0.167-0.453-0.284l-0.031-0.022c-0.264-0.188-0.481-0.383-0.654-0.588c-0.175-0.204-0.299-0.41-0.371-0.618c-0.073-0.207-0.096-0.414-0.068-0.621c0.029-0.207,0.112-0.408,0.25-0.603c0.115-0.161,0.241-0.288,0.381-0.38s0.298-0.166,0.474-0.22l0.229,0.548c-0.118,0.033-0.231,0.08-0.34,0.14c-0.107,0.06-0.202,0.147-0.283,0.261c-0.08,0.113-0.123,0.23-0.128,0.352c-0.004,0.119,0.021,0.24,0.071,0.361c0.054,0.12,0.13,0.238,0.232,0.353c0.101,0.115,0.217,0.222,0.348,0.319c-0.029-0.143-0.031-0.285-0.007-0.43c0.026-0.144,0.089-0.289,0.19-0.432c0.092-0.128,0.199-0.235,0.322-0.32c0.124-0.086,0.257-0.143,0.4-0.172c0.141-0.03,0.291-0.027,0.451,0.008c0.159,0.034,0.318,0.108,0.48,0.223l0.009,0.007c0.158,0.112,0.282,0.242,0.374,0.388c0.092,0.146,0.151,0.3,0.178,0.461c0.026,0.16,0.021,0.323-0.016,0.487C128.447,91.072,128.375,91.228,128.272,91.374z M127.812,91.054c0.118-0.168,0.158-0.338,0.115-0.51c-0.042-0.172-0.148-0.317-0.317-0.438l-0.01-0.007c-0.17-0.121-0.342-0.169-0.516-0.144c-0.173,0.025-0.318,0.12-0.436,0.284c-0.116,0.164-0.157,0.333-0.123,0.506c0.033,0.174,0.135,0.319,0.302,0.438l0.009,0.007c0.171,0.121,0.346,0.171,0.525,0.15C127.54,91.32,127.691,91.224,127.812,91.054z" id="path4967" fill="#FFFFFF"/></g></g><g id="g4969"><g id="g4971"><path d="M115.538,110.662l-0.216,0.41l0.598,0.438l-0.197,0.374l-0.601-0.434l-0.29,0.549l0.6,0.434l-0.196,0.375l-0.601-0.435l-0.166,0.314l-0.395-0.208l0.197-0.374l-0.662-0.481l-0.186,0.354l-0.395-0.209l0.217-0.409l-0.584-0.426l0.199-0.378l0.584,0.426l0.291-0.55l-0.586-0.426l0.198-0.374l0.584,0.426l0.167-0.314l0.394,0.209l-0.198,0.374l0.662,0.481l0.188-0.354L115.538,110.662z M114.473,111.744l0.296-0.562l-0.675-0.494l-0.297,0.562L114.473,111.744z" id="path4973" fill="#FFFFFF"/></g><g id="g4975"><path d="M114.559,108.618l-0.259,0.577l-0.484-0.282l0.358-0.867l0.295-0.341l2.932,2.539l-0.414,0.477L114.559,108.618z" id="path4977" fill="#FFFFFF"/></g><g id="g4979"><path d="M117.374,109.459l0.266-1.702c0.026-0.156,0.047-0.292,0.061-0.406c0.012-0.115,0.016-0.218,0.011-0.307c-0.005-0.09-0.02-0.171-0.043-0.244c-0.022-0.073-0.057-0.142-0.1-0.205c-0.098-0.146-0.219-0.228-0.362-0.245c-0.143-0.019-0.28,0.018-0.41,0.105c-0.127,0.087-0.216,0.196-0.266,0.33c-0.049,0.133-0.08,0.304-0.093,0.512l-0.57-0.085c0.01-0.272,0.062-0.514,0.155-0.725c0.095-0.21,0.258-0.393,0.488-0.55c0.139-0.095,0.282-0.16,0.428-0.197c0.145-0.037,0.287-0.046,0.425-0.026c0.137,0.02,0.267,0.069,0.389,0.148c0.122,0.078,0.229,0.186,0.323,0.322l0.006,0.009c0.074,0.109,0.129,0.218,0.164,0.324c0.035,0.107,0.055,0.225,0.062,0.351c0.006,0.126-0.001,0.266-0.021,0.416c-0.019,0.15-0.048,0.323-0.085,0.517l-0.167,1.124l1.315-0.894l0.324,0.479l-2.016,1.369L117.374,109.459z" id="path4981" fill="#FFFFFF"/></g></g><g id="g4983"><g id="g4985"><path d="M16.697,47.232c-0.096-0.23-0.147-0.472-0.155-0.722c-0.009-0.25,0.038-0.509,0.138-0.777l0.589,0.173c-0.064,0.181-0.106,0.364-0.125,0.548c-0.019,0.184,0.011,0.371,0.089,0.561c0.072,0.173,0.17,0.292,0.297,0.356c0.126,0.065,0.254,0.07,0.387,0.016l0.005-0.002c0.055-0.022,0.102-0.053,0.143-0.092c0.042-0.039,0.076-0.093,0.102-0.16c0.024-0.068,0.042-0.156,0.051-0.263c0.009-0.107,0.011-0.242,0.002-0.405c-0.006-0.197-0.002-0.372,0.011-0.526c0.014-0.154,0.044-0.292,0.092-0.412c0.047-0.121,0.115-0.225,0.201-0.312c0.087-0.087,0.202-0.16,0.344-0.219l0.01-0.004c0.146-0.06,0.292-0.088,0.437-0.082c0.144,0.005,0.282,0.04,0.412,0.103c0.129,0.064,0.247,0.155,0.353,0.271c0.105,0.117,0.193,0.259,0.262,0.424c0.084,0.207,0.132,0.418,0.142,0.635c0.011,0.216-0.022,0.435-0.098,0.656l-0.592-0.148c0.048-0.163,0.077-0.324,0.083-0.483c0.008-0.16-0.018-0.312-0.076-0.454c-0.067-0.163-0.159-0.273-0.274-0.333c-0.117-0.06-0.233-0.064-0.352-0.016l-0.005,0.002c-0.061,0.025-0.112,0.059-0.156,0.1c-0.042,0.041-0.074,0.099-0.098,0.172c-0.024,0.073-0.041,0.167-0.051,0.282c-0.009,0.115-0.011,0.261-0.006,0.438c0.003,0.192-0.003,0.363-0.021,0.512c-0.019,0.148-0.053,0.279-0.102,0.393c-0.051,0.114-0.119,0.211-0.205,0.292c-0.085,0.081-0.192,0.148-0.32,0.202L18.2,47.961c-0.155,0.065-0.309,0.094-0.459,0.09c-0.151-0.005-0.292-0.042-0.423-0.109c-0.13-0.066-0.25-0.161-0.358-0.28C16.853,47.54,16.765,47.397,16.697,47.232z" id="path4987" fill="#FFFFFF"/></g><g id="g4989"><path d="M21.119,48.322l0.055,1.175c0.014,0.275-0.021,0.526-0.103,0.754c-0.081,0.227-0.201,0.425-0.36,0.592c-0.159,0.167-0.354,0.299-0.582,0.398c-0.229,0.099-0.483,0.155-0.766,0.168l-0.044,0.001c-0.283,0.013-0.542-0.018-0.78-0.096c-0.239-0.077-0.445-0.191-0.619-0.342c-0.175-0.152-0.313-0.337-0.417-0.556c-0.104-0.219-0.163-0.466-0.174-0.74L17.275,48.5L21.119,48.322z M20.572,48.987l-2.693,0.124l0.025,0.533c0.009,0.176,0.046,0.334,0.113,0.476c0.067,0.143,0.16,0.261,0.278,0.357c0.118,0.095,0.261,0.167,0.428,0.216c0.168,0.049,0.354,0.069,0.559,0.06l0.033-0.001c0.21-0.009,0.395-0.046,0.558-0.111c0.161-0.064,0.298-0.149,0.409-0.256c0.11-0.106,0.193-0.233,0.247-0.38s0.077-0.309,0.068-0.485L20.572,48.987z" id="path4991" fill="#FFFFFF"/></g><g id="g4993"><path d="M20.663,53.919L20.46,54.5l-4.121,0.055l0.219-0.628l0.962-0.001l0.494-1.412l-0.751-0.601l0.213-0.607L20.663,53.919z M18.121,53.926l1.64-0.009l-1.276-1.029L18.121,53.926z" id="path4995" fill="#FFFFFF"/></g><g id="g4997"><path d="M14.13,58.222l0.363-0.288l-0.37-0.642l0.332-0.262l0.374,0.639l0.487-0.386l-0.375-0.639l0.331-0.262l0.375,0.639l0.278-0.22l0.278,0.349l-0.332,0.263l0.411,0.708l0.314-0.249l0.276,0.35l-0.362,0.288l0.362,0.625l-0.335,0.266l-0.363-0.625l-0.487,0.386l0.363,0.625l-0.332,0.263l-0.364-0.625l-0.277,0.221L14.8,59.293l0.332-0.263l-0.411-0.707l-0.314,0.249L14.13,58.222z M15.541,57.661l-0.498,0.394l0.418,0.724l0.498-0.394L15.541,57.661z" id="path4999" fill="#FFFFFF"/></g><g id="g5001"><path d="M13.65,57.81l-0.609,1.612c-0.057,0.147-0.105,0.276-0.141,0.386c-0.037,0.11-0.061,0.209-0.074,0.298c-0.013,0.088-0.015,0.17-0.007,0.248c0.008,0.076,0.025,0.149,0.055,0.22c0.068,0.163,0.168,0.268,0.306,0.315c0.137,0.047,0.277,0.04,0.422-0.02c0.143-0.058,0.252-0.148,0.328-0.268c0.075-0.121,0.141-0.281,0.197-0.483l0.54,0.2c-0.065,0.265-0.166,0.49-0.302,0.677c-0.135,0.187-0.331,0.333-0.589,0.439c-0.155,0.064-0.309,0.1-0.458,0.106c-0.151,0.006-0.292-0.015-0.422-0.062c-0.13-0.047-0.248-0.122-0.35-0.223c-0.104-0.103-0.188-0.23-0.25-0.383l-0.004-0.01c-0.051-0.122-0.082-0.239-0.095-0.35c-0.012-0.112-0.009-0.231,0.011-0.355c0.02-0.126,0.055-0.26,0.104-0.403c0.05-0.144,0.113-0.307,0.189-0.488l0.393-1.066l-1.469,0.606l-0.22-0.534l2.252-0.929L13.65,57.81z" id="path5003" fill="#FFFFFF"/></g></g><g id="g5005"><g id="g5007"><path d="M28.724,28.552c-0.049-0.245-0.051-0.49-0.011-0.737c0.041-0.247,0.136-0.492,0.287-0.735l0.543,0.285c-0.097,0.166-0.174,0.337-0.229,0.514c-0.054,0.177-0.062,0.367-0.022,0.567c0.037,0.184,0.11,0.32,0.221,0.408c0.111,0.088,0.237,0.119,0.375,0.091l0.007-0.001c0.058-0.011,0.109-0.032,0.158-0.062c0.048-0.03,0.092-0.076,0.13-0.137c0.038-0.062,0.072-0.144,0.103-0.248c0.03-0.103,0.057-0.235,0.082-0.396c0.033-0.194,0.07-0.365,0.115-0.513c0.043-0.149,0.099-0.278,0.17-0.387c0.07-0.109,0.156-0.198,0.259-0.267s0.229-0.118,0.379-0.148l0.011-0.002c0.156-0.03,0.303-0.029,0.444,0.005c0.142,0.034,0.269,0.094,0.384,0.182c0.114,0.087,0.211,0.199,0.292,0.334c0.081,0.135,0.139,0.291,0.174,0.468c0.043,0.219,0.048,0.436,0.016,0.649c-0.032,0.214-0.106,0.422-0.225,0.624l-0.55-0.261c0.078-0.15,0.137-0.303,0.176-0.458c0.039-0.155,0.042-0.308,0.013-0.459c-0.035-0.173-0.103-0.3-0.205-0.381c-0.101-0.081-0.215-0.109-0.341-0.084l-0.005,0.001c-0.065,0.012-0.122,0.035-0.172,0.067c-0.049,0.033-0.093,0.082-0.13,0.149c-0.038,0.067-0.072,0.157-0.104,0.267c-0.032,0.111-0.063,0.254-0.092,0.428c-0.033,0.19-0.073,0.355-0.12,0.497c-0.047,0.143-0.106,0.264-0.177,0.366c-0.072,0.102-0.157,0.184-0.257,0.247c-0.101,0.063-0.218,0.108-0.354,0.135l-0.01,0.002c-0.167,0.032-0.322,0.031-0.47-0.003c-0.147-0.035-0.278-0.098-0.394-0.189c-0.114-0.091-0.213-0.206-0.294-0.345C28.817,28.886,28.759,28.729,28.724,28.552z" id="path5009" fill="#FFFFFF"/></g><g id="g5011"><path d="M28.767,31.399c0.031-0.244,0.106-0.462,0.225-0.656s0.272-0.354,0.46-0.479c0.188-0.125,0.408-0.215,0.659-0.268c0.251-0.053,0.522-0.061,0.812-0.023l0.039,0.004c0.286,0.037,0.545,0.113,0.774,0.23c0.229,0.116,0.419,0.26,0.571,0.433c0.151,0.173,0.261,0.37,0.329,0.591c0.068,0.221,0.085,0.456,0.054,0.703c-0.034,0.269-0.107,0.492-0.218,0.668c-0.111,0.176-0.248,0.333-0.41,0.472l-0.437-0.444c0.12-0.1,0.224-0.209,0.311-0.33c0.088-0.12,0.143-0.267,0.166-0.442c0.018-0.149,0.003-0.292-0.046-0.43c-0.048-0.137-0.126-0.261-0.232-0.37c-0.107-0.11-0.24-0.202-0.399-0.276c-0.161-0.074-0.343-0.125-0.547-0.151l-0.021-0.002c-0.208-0.026-0.399-0.024-0.575,0.007c-0.176,0.031-0.329,0.086-0.459,0.166c-0.131,0.08-0.237,0.18-0.318,0.3c-0.083,0.121-0.133,0.255-0.151,0.405c-0.023,0.182-0.007,0.343,0.052,0.483c0.057,0.141,0.136,0.278,0.238,0.414l-0.495,0.313c-0.154-0.19-0.264-0.391-0.331-0.602C28.749,31.903,28.733,31.664,28.767,31.399z" id="path5013" fill="#FFFFFF"/></g><g id="g5015"><path d="M32.011,34.432l-0.281,0.573l-2.928-1.435l-0.726,1.482l-0.528-0.259l1.006-2.055L32.011,34.432z" id="path5017" fill="#FFFFFF"/></g><g id="g5019"><path d="M24.791,38.526l0.393-0.246l-0.297-0.679l0.358-0.225l0.302,0.677l0.526-0.33l-0.302-0.677l0.359-0.224l0.302,0.676l0.3-0.189l0.237,0.378l-0.359,0.224l0.331,0.749l0.34-0.212l0.236,0.378l-0.394,0.245l0.293,0.662l-0.363,0.227L26.761,39.3l-0.526,0.329l0.291,0.661l-0.357,0.225l-0.292-0.661l-0.302,0.188l-0.236-0.378l0.359-0.224l-0.332-0.749l-0.339,0.212L24.791,38.526z M26.255,38.125l-0.538,0.336l0.337,0.767l0.537-0.337L26.255,38.125z" id="path5021" fill="#FFFFFF"/></g><g id="g5023"><path d="M23.124,37.825c0.26-0.076,0.502-0.096,0.725-0.06s0.425,0.11,0.605,0.221l-0.254,0.544c-0.134-0.083-0.275-0.143-0.421-0.178c-0.146-0.036-0.308-0.027-0.487,0.025c-0.173,0.05-0.301,0.145-0.388,0.284c-0.085,0.139-0.101,0.298-0.05,0.478l0.005,0.016c0.055,0.189,0.173,0.313,0.354,0.371c0.181,0.058,0.4,0.048,0.657-0.026l0.185-0.054l0.191,0.361l-0.586,1.332l1.399-0.408l0.162,0.554l-2.166,0.631l-0.14-0.48l0.622-1.344c-0.133,0.016-0.266,0.018-0.399,0.005c-0.134-0.013-0.258-0.047-0.371-0.104c-0.115-0.057-0.217-0.137-0.306-0.241c-0.089-0.104-0.159-0.237-0.205-0.398l-0.005-0.016c-0.05-0.172-0.067-0.338-0.048-0.499c0.018-0.16,0.066-0.307,0.144-0.44c0.077-0.133,0.182-0.25,0.313-0.349C22.795,37.952,22.949,37.876,23.124,37.825z" id="path5025" fill="#FFFFFF"/></g></g><g id="g5027"><g id="g5029"><path d="M94.364,125.967l0.369-0.587l2.967,0.75l-1.959-2.352l0.357-0.567l2.568,3.188l-0.314,0.498L94.364,125.967z" id="path5031" fill="#FFFFFF"/></g><g id="g5033"><path d="M96.86,122.441l1.073-0.859c0.162-0.132,0.328-0.229,0.496-0.291c0.169-0.062,0.328-0.085,0.479-0.068c0.241,0.026,0.444,0.141,0.607,0.345l0.011,0.014c0.073,0.091,0.127,0.182,0.16,0.273c0.033,0.091,0.051,0.181,0.054,0.269c0.002,0.087-0.008,0.172-0.029,0.254c-0.022,0.08-0.051,0.158-0.084,0.233c0.211-0.077,0.415-0.103,0.61-0.079s0.373,0.135,0.534,0.336l0.014,0.017c0.104,0.131,0.173,0.268,0.203,0.411c0.029,0.143,0.026,0.286-0.011,0.43c-0.037,0.146-0.106,0.288-0.21,0.43c-0.102,0.142-0.234,0.276-0.394,0.404l-1.103,0.886L96.86,122.441z M99.085,122.05c-0.104-0.129-0.226-0.191-0.368-0.189s-0.296,0.068-0.46,0.199l-0.551,0.443l0.668,0.831l0.521-0.419c0.163-0.13,0.265-0.271,0.306-0.421c0.04-0.149,0.003-0.296-0.108-0.435L99.085,122.05z M100.236,123.219c-0.105-0.131-0.237-0.194-0.396-0.19c-0.16,0.005-0.334,0.082-0.523,0.234l-0.607,0.488l0.686,0.853l0.628-0.505c0.173-0.138,0.28-0.283,0.321-0.438c0.043-0.152,0.009-0.298-0.101-0.434L100.236,123.219z" id="path5035" fill="#FFFFFF"/></g><g id="g5037"><path d="M101.499,119.608l0.588-0.185l2.506,3.273l-0.635,0.199l-0.576-0.771l-1.427,0.446l-0.034,0.962l-0.613,0.193L101.499,119.608z M103.025,121.642l-0.986-1.309l-0.063,1.638L103.025,121.642z" id="path5039" fill="#FFFFFF"/></g><g id="g5041"><path d="M105.057,119.586l-1.013-0.001l0.001-0.594l2.662,0.002l-0.001,0.595l-1.012-0.002l-0.003,3.257h-0.638L105.057,119.586z" id="path5043" fill="#FFFFFF"/></g><g id="g5045"><path d="M108.003,119.892l-0.979-0.261l0.153-0.573l2.572,0.684l-0.152,0.574l-0.979-0.261l-0.837,3.147l-0.616-0.164L108.003,119.892z" id="path5047" fill="#FFFFFF"/></g></g><g id="g5049"><g id="g5051"><path d="M44.458,20.345c0.152-0.182,0.323-0.321,0.514-0.417c0.19-0.097,0.39-0.149,0.598-0.157s0.422,0.029,0.64,0.11c0.217,0.08,0.43,0.208,0.637,0.381l0.03,0.025c0.197,0.166,0.353,0.348,0.47,0.549c0.116,0.2,0.189,0.406,0.219,0.618c0.028,0.211,0.015,0.421-0.042,0.628c-0.056,0.208-0.161,0.403-0.313,0.583c-0.154,0.183-0.312,0.32-0.473,0.409c-0.162,0.088-0.343,0.151-0.543,0.188l-0.13-0.561c0.133-0.019,0.26-0.054,0.383-0.106c0.122-0.052,0.24-0.146,0.356-0.284c0.092-0.11,0.154-0.23,0.185-0.364c0.031-0.132,0.033-0.269,0.005-0.408c-0.027-0.138-0.083-0.275-0.167-0.411c-0.083-0.135-0.195-0.262-0.333-0.378l-0.023-0.02c-0.15-0.126-0.303-0.221-0.457-0.282c-0.153-0.062-0.3-0.092-0.441-0.093c-0.141-0.002-0.273,0.028-0.397,0.087c-0.124,0.059-0.234,0.146-0.33,0.261c-0.08,0.094-0.141,0.193-0.184,0.296s-0.067,0.203-0.073,0.297l0.593,0.498l0.473-0.562l0.391,0.328l-0.826,0.985l-1.203-1.012c0.007-0.189,0.043-0.387,0.107-0.593C44.185,20.735,44.297,20.536,44.458,20.345z" id="path5053" fill="#FFFFFF"/></g><g id="g5055"><path d="M45.164,24.547l-0.476,0.255l-2.459-1.333l1.101,2.059l-0.498,0.267l-1.65-3.088l0.434-0.231l2.535,1.373l-1.134-2.122l0.498-0.267L45.164,24.547z" id="path5057" fill="#FFFFFF"/></g><g id="g5059"><path d="M41.238,26.302l-1.062,0.127c-0.249,0.03-0.479,0.014-0.69-0.044c-0.212-0.059-0.398-0.154-0.561-0.289c-0.162-0.133-0.295-0.3-0.4-0.501c-0.104-0.2-0.172-0.428-0.202-0.683l-0.005-0.04c-0.031-0.255-0.019-0.493,0.035-0.714c0.055-0.222,0.145-0.417,0.271-0.584c0.126-0.168,0.285-0.307,0.478-0.414c0.191-0.108,0.411-0.178,0.66-0.208l1.062-0.126L41.238,26.302z M40.6,25.85l-0.29-2.433l-0.482,0.057c-0.159,0.019-0.3,0.064-0.425,0.133c-0.124,0.071-0.226,0.162-0.305,0.275c-0.078,0.114-0.135,0.249-0.168,0.403c-0.033,0.156-0.039,0.326-0.017,0.511l0.004,0.03c0.022,0.188,0.068,0.354,0.137,0.497s0.155,0.261,0.259,0.354c0.103,0.093,0.224,0.16,0.361,0.199c0.138,0.04,0.285,0.049,0.444,0.03L40.6,25.85z" id="path5061" fill="#FFFFFF"/></g></g><g id="g5063"><g id="g5065"><path d="M126.356,53.924l0.236,0.399l0.686-0.282l0.216,0.364l-0.684,0.285l0.317,0.534l0.684-0.286l0.216,0.365l-0.685,0.284l0.182,0.306l-0.383,0.228l-0.216-0.364l-0.757,0.312l0.205,0.345l-0.383,0.228l-0.236-0.399l-0.669,0.276l-0.218-0.368l0.668-0.276l-0.316-0.534l-0.668,0.276l-0.217-0.365l0.668-0.275l-0.181-0.306l0.383-0.228l0.216,0.364l0.756-0.312l-0.204-0.345L126.356,53.924z M126.721,55.398l-0.323-0.547l-0.774,0.318l0.324,0.546L126.721,55.398z" id="path5067" fill="#FFFFFF"/></g><g id="g5069"><path d="M126.495,52.31c-0.032-0.132-0.092-0.24-0.181-0.324c-0.089-0.084-0.194-0.147-0.318-0.188c-0.123-0.042-0.259-0.063-0.406-0.062c-0.146,0-0.296,0.016-0.447,0.05c0.129,0.066,0.239,0.157,0.333,0.272c0.093,0.115,0.16,0.256,0.2,0.424c0.04,0.16,0.051,0.317,0.033,0.47c-0.018,0.154-0.064,0.292-0.139,0.419c-0.075,0.125-0.18,0.236-0.312,0.331c-0.135,0.094-0.295,0.165-0.484,0.211l-0.016,0.003c-0.186,0.044-0.365,0.057-0.538,0.032c-0.174-0.024-0.331-0.077-0.472-0.16c-0.142-0.083-0.263-0.192-0.363-0.328c-0.102-0.136-0.173-0.293-0.217-0.471c-0.047-0.191-0.059-0.365-0.036-0.521c0.022-0.154,0.077-0.303,0.164-0.443c0.049-0.081,0.109-0.157,0.184-0.233c0.075-0.075,0.165-0.144,0.271-0.209c0.107-0.066,0.232-0.128,0.377-0.185c0.145-0.058,0.312-0.112,0.505-0.157l0.038-0.01c0.324-0.078,0.62-0.116,0.89-0.112c0.269,0.006,0.505,0.049,0.709,0.135c0.203,0.084,0.372,0.204,0.506,0.359c0.135,0.156,0.229,0.346,0.283,0.57c0.05,0.204,0.062,0.395,0.036,0.572s-0.079,0.356-0.159,0.534l-0.565-0.19c0.065-0.136,0.11-0.268,0.137-0.395C126.531,52.576,126.529,52.446,126.495,52.31z M125.132,52.498c-0.049-0.201-0.152-0.342-0.312-0.427c-0.159-0.084-0.34-0.103-0.544-0.053l-0.006,0.002c-0.214,0.052-0.373,0.154-0.478,0.303c-0.103,0.149-0.131,0.328-0.08,0.532c0.049,0.2,0.155,0.341,0.317,0.419c0.163,0.08,0.349,0.094,0.557,0.044l0.011-0.003c0.215-0.053,0.369-0.153,0.463-0.3C125.156,52.867,125.18,52.694,125.132,52.498z" id="path5071" fill="#FFFFFF"/></g></g><g id="g5073"><g id="g5075"><path d="M116.963,36.837l0.376,0.272l0.517-0.532l0.343,0.247l-0.512,0.535l0.503,0.363l0.513-0.534l0.344,0.248l-0.514,0.534l0.288,0.208l-0.261,0.361l-0.343-0.248l-0.569,0.588l0.325,0.234l-0.261,0.362l-0.376-0.272l-0.503,0.52l-0.347-0.25l0.503-0.52l-0.504-0.363l-0.502,0.52l-0.343-0.248l0.502-0.52l-0.288-0.208l0.261-0.361l0.343,0.248l0.568-0.588l-0.324-0.234L116.963,36.837z M117.886,38.041l-0.515-0.372l-0.583,0.601l0.515,0.372L117.886,38.041z" id="path5077" fill="#FFFFFF"/></g><g id="g5079"><path d="M114.811,37.53l0.534,0.337l-0.346,0.44l-0.81-0.476l-0.297-0.34l2.922-2.549l0.416,0.476L114.811,37.53z" id="path5081" fill="#FFFFFF"/></g><g id="g5083"><path d="M116.05,33.604c0.102,0.199,0.151,0.4,0.149,0.601c-0.003,0.201-0.051,0.396-0.146,0.586c-0.094,0.19-0.233,0.37-0.416,0.54s-0.405,0.321-0.666,0.455l-0.055,0.027c-0.258,0.131-0.51,0.222-0.758,0.27c-0.247,0.048-0.475,0.054-0.685,0.019c-0.21-0.036-0.397-0.111-0.564-0.228c-0.166-0.117-0.3-0.274-0.402-0.474c-0.1-0.196-0.148-0.395-0.146-0.595c0.002-0.202,0.051-0.396,0.145-0.587c0.095-0.189,0.232-0.371,0.415-0.542c0.183-0.171,0.404-0.324,0.665-0.457l0.054-0.028c0.262-0.133,0.516-0.223,0.761-0.271c0.245-0.048,0.473-0.054,0.683-0.018c0.209,0.035,0.397,0.11,0.563,0.227C115.815,33.247,115.948,33.405,116.05,33.604z M115.53,33.857c-0.109-0.215-0.306-0.332-0.588-0.351c-0.282-0.019-0.617,0.07-1.004,0.269l-0.039,0.02c-0.189,0.098-0.354,0.202-0.49,0.315s-0.242,0.228-0.316,0.347c-0.073,0.119-0.116,0.236-0.129,0.354c-0.013,0.118,0.009,0.23,0.063,0.337c0.11,0.216,0.307,0.333,0.59,0.354c0.284,0.02,0.618-0.069,1.005-0.266l0.039-0.021c0.193-0.098,0.358-0.203,0.493-0.315s0.239-0.228,0.313-0.345c0.074-0.119,0.116-0.237,0.128-0.357C115.608,34.077,115.586,33.965,115.53,33.857z" id="path5085" fill="#FFFFFF"/></g></g><g id="g5087"><g id="g5089"><path d="M104.205,22.9c0.269,0.042,0.494,0.126,0.681,0.254s0.338,0.28,0.455,0.458l-0.462,0.385c-0.086-0.133-0.188-0.246-0.305-0.34s-0.268-0.156-0.453-0.185c-0.178-0.028-0.334,0.003-0.471,0.093s-0.219,0.227-0.248,0.411l-0.002,0.017c-0.03,0.195,0.023,0.357,0.164,0.486c0.138,0.129,0.34,0.214,0.604,0.256l0.19,0.029l0.02,0.408l-1.095,0.958l1.439,0.225l-0.089,0.571l-2.229-0.348l0.077-0.495l1.135-0.953c-0.127-0.042-0.249-0.097-0.364-0.165s-0.213-0.152-0.292-0.251c-0.079-0.1-0.138-0.215-0.174-0.347c-0.037-0.132-0.043-0.282-0.017-0.448l0.002-0.016c0.028-0.177,0.084-0.334,0.169-0.472c0.084-0.137,0.189-0.25,0.317-0.337c0.127-0.088,0.271-0.149,0.431-0.184C103.853,22.875,104.024,22.871,104.205,22.9z" id="path5091" fill="#FFFFFF"/></g><g id="g5093"><path d="M102.616,23.342l-0.658-0.249l0.258-0.685l0.659,0.249L102.616,23.342z" id="path5095" fill="#FFFFFF"/></g><g id="g5097"><path d="M101.038,21.707c0.227,0.151,0.396,0.323,0.512,0.517c0.116,0.193,0.189,0.396,0.221,0.606l-0.58,0.155c-0.022-0.156-0.067-0.302-0.135-0.437c-0.066-0.135-0.178-0.254-0.333-0.358c-0.15-0.1-0.305-0.138-0.468-0.114c-0.161,0.024-0.294,0.114-0.397,0.27l-0.009,0.014c-0.109,0.164-0.127,0.334-0.056,0.511c0.072,0.175,0.221,0.337,0.442,0.486l0.16,0.107l-0.153,0.379l-1.396,0.408l1.212,0.808l-0.32,0.481l-1.875-1.251l0.278-0.417l1.428-0.389c-0.098-0.092-0.184-0.192-0.261-0.303c-0.075-0.11-0.129-0.228-0.159-0.352c-0.03-0.123-0.033-0.253-0.013-0.388c0.023-0.135,0.081-0.273,0.174-0.414l0.009-0.014c0.1-0.149,0.218-0.269,0.353-0.357c0.133-0.089,0.276-0.147,0.429-0.173c0.151-0.026,0.308-0.021,0.469,0.016C100.729,21.537,100.886,21.606,101.038,21.707z" id="path5099" fill="#FFFFFF"/></g><g id="g5101"><path d="M97.401,23.981l-0.451-0.526l1.593-2.612l-2.824,1.176l-0.438-0.51l3.807-1.51l0.383,0.446L97.401,23.981z" id="path5103" fill="#FFFFFF"/></g></g><g id="g5105"><g id="g5107"><path d="M93.412,9.087V8.623l-0.733-0.107V8.093l0.733,0.104V7.575l-0.733-0.104V7.049l0.733,0.103V6.796h0.446v0.424l0.809,0.116v-0.4h0.446v0.464l0.716,0.104V7.93l-0.716-0.104v0.621l0.716,0.104v0.423l-0.716-0.104v0.355h-0.446V8.803l-0.809-0.117v0.4H93.412z M93.849,7.634v0.634l0.828,0.122V7.755L93.849,7.634z" id="path5109" fill="#FFFFFF"/></g><g id="g5111"><path d="M95.391,10.146l-0.182-0.604l0.55-0.104l0.297,0.891v0.451h-3.877v-0.633H95.391z" id="path5113" fill="#FFFFFF"/></g><g id="g5115"><path d="M92.118,12.507c0-0.271,0.049-0.509,0.146-0.713c0.096-0.203,0.224-0.377,0.381-0.52l0.451,0.396c-0.117,0.106-0.213,0.225-0.288,0.355c-0.075,0.13-0.112,0.288-0.112,0.476c0,0.18,0.055,0.33,0.164,0.451s0.258,0.182,0.445,0.182h0.016c0.197,0,0.35-0.079,0.455-0.237c0.107-0.157,0.16-0.37,0.16-0.638v-0.192l0.4-0.083l1.114,0.936v-1.458h0.577v2.256h-0.5l-1.117-0.974c-0.021,0.132-0.057,0.26-0.106,0.385s-0.118,0.233-0.204,0.327s-0.191,0.169-0.316,0.226c-0.124,0.057-0.271,0.085-0.439,0.085h-0.017c-0.18,0-0.344-0.031-0.492-0.093c-0.148-0.062-0.276-0.15-0.382-0.262c-0.107-0.112-0.189-0.245-0.248-0.398C92.148,12.858,92.118,12.689,92.118,12.507z" id="path5117" fill="#FFFFFF"/></g></g><g id="g5119"><g id="g5121"><path d="M51.543,12.481c0,0.249-0.049,0.479-0.146,0.688c-0.097,0.209-0.231,0.389-0.404,0.539s-0.378,0.267-0.616,0.35c-0.238,0.082-0.5,0.123-0.787,0.123h-0.055c-0.286,0-0.549-0.042-0.79-0.126s-0.447-0.202-0.622-0.353c-0.174-0.149-0.31-0.33-0.407-0.539s-0.146-0.439-0.146-0.692c0-0.249,0.049-0.479,0.146-0.688s0.232-0.389,0.404-0.539s0.377-0.267,0.616-0.35c0.238-0.082,0.5-0.123,0.787-0.123h0.055c0.286,0,0.549,0.042,0.789,0.126c0.24,0.085,0.447,0.202,0.622,0.353s0.31,0.329,0.407,0.538C51.494,11.996,51.543,12.228,51.543,12.481z M50.955,12.47c0-0.15-0.033-0.29-0.099-0.418c-0.066-0.129-0.159-0.238-0.278-0.33s-0.263-0.163-0.432-0.215c-0.168-0.051-0.357-0.077-0.566-0.077h-0.039c-0.206,0-0.394,0.026-0.564,0.077c-0.17,0.052-0.316,0.124-0.437,0.218c-0.121,0.093-0.215,0.204-0.281,0.332c-0.066,0.129-0.099,0.27-0.099,0.424c0,0.15,0.033,0.29,0.099,0.418c0.066,0.129,0.159,0.238,0.278,0.33s0.263,0.163,0.432,0.215c0.169,0.051,0.358,0.077,0.567,0.077h0.038c0.206,0,0.394-0.027,0.564-0.08s0.316-0.127,0.437-0.22c0.121-0.094,0.215-0.205,0.281-0.333C50.922,12.759,50.955,12.62,50.955,12.47z" id="path5123" fill="#FFFFFF"/></g><g id="g5125"><path d="M48.568,10.204V9.582h0.429c-0.128-0.08-0.241-0.185-0.338-0.311c-0.097-0.127-0.146-0.289-0.146-0.487c0-0.282,0.092-0.502,0.275-0.659c0.183-0.158,0.431-0.237,0.742-0.237h1.953V8.51h-1.776c-0.206,0-0.362,0.046-0.47,0.138c-0.108,0.092-0.163,0.22-0.163,0.385s0.057,0.298,0.171,0.398c0.113,0.102,0.271,0.151,0.473,0.151h1.766v0.622H48.568z" id="path5127" fill="#FFFFFF"/></g></g><g id="g5129"><g id="g5131"><path d="M60.062,24.188h-0.464l-0.107,0.733h-0.423l0.104-0.733H58.55l-0.104,0.733h-0.423l0.103-0.733h-0.355v-0.446h0.424l0.116-0.81h-0.4v-0.446h0.464l0.104-0.715h0.428l-0.104,0.715h0.621l0.104-0.715h0.423l-0.104,0.715h0.355v0.446h-0.423l-0.117,0.81h0.4V24.188z M58.609,23.751h0.634l0.122-0.828H58.73L58.609,23.751z" id="path5133" fill="#FFFFFF"/></g><g id="g5135"><path d="M61.121,22.209l-0.604,0.182l-0.104-0.55l0.891-0.297h0.451v3.877h-0.633V22.209z" id="path5137" fill="#FFFFFF"/></g><g id="g5139"><path d="M64.004,22.149h-1.678v-0.578h2.371v0.479l-1.479,3.372h-0.693L64.004,22.149z" id="path5141" fill="#FFFFFF"/></g></g><g id="g5143"><g id="g5145"><path d="M42.242,43.236h0.615l1.414,3.872h-0.666L43.287,46.2h-1.496l-0.319,0.908h-0.644L42.242,43.236z M43.089,45.634l-0.55-1.545l-0.55,1.545H43.089z" id="path5147" fill="#FFFFFF"/></g><g id="g5149"><path d="M45.635,47.169c-0.238,0-0.457-0.043-0.654-0.129c-0.198-0.086-0.376-0.204-0.534-0.354l0.363-0.473c0.128,0.114,0.258,0.204,0.388,0.27s0.274,0.099,0.432,0.099c0.209,0,0.376-0.063,0.501-0.187c0.124-0.125,0.187-0.292,0.187-0.5v-0.011c0-0.205-0.066-0.365-0.2-0.479s-0.304-0.17-0.509-0.17c-0.117,0-0.224,0.014-0.319,0.041c-0.096,0.028-0.184,0.062-0.264,0.102l-0.374-0.248l0.104-1.87h2.035v0.578h-1.496l-0.061,0.918c0.077-0.025,0.154-0.047,0.233-0.063c0.079-0.016,0.172-0.024,0.278-0.024c0.164,0,0.319,0.024,0.464,0.071c0.146,0.048,0.272,0.12,0.383,0.217s0.197,0.221,0.261,0.371c0.064,0.15,0.097,0.329,0.097,0.534v0.011c0,0.198-0.032,0.376-0.097,0.536c-0.063,0.159-0.154,0.296-0.271,0.41c-0.118,0.114-0.257,0.201-0.418,0.261C46.002,47.138,45.826,47.169,45.635,47.169z" id="path5151" fill="#FFFFFF"/></g></g><g id="g5153"><g id="g5155"><path d="M99.434,43.237h0.615l1.414,3.872h-0.666l-0.318-0.908h-1.496l-0.319,0.908H98.02L99.434,43.237z M100.28,45.635l-0.55-1.545l-0.55,1.545H100.28z" id="path5157" fill="#FFFFFF"/></g><g id="g5159"><path d="M102.981,47.169c-0.224,0-0.425-0.047-0.603-0.14c-0.178-0.094-0.33-0.226-0.456-0.396c-0.127-0.171-0.224-0.376-0.292-0.616c-0.067-0.24-0.102-0.507-0.102-0.8v-0.061c0-0.29,0.035-0.555,0.104-0.797s0.168-0.448,0.294-0.619c0.127-0.17,0.28-0.303,0.46-0.399c0.179-0.095,0.381-0.143,0.604-0.143c0.22,0,0.419,0.047,0.597,0.141c0.178,0.093,0.33,0.225,0.457,0.396c0.126,0.17,0.225,0.375,0.294,0.616s0.104,0.507,0.104,0.8v0.061c0,0.293-0.035,0.56-0.104,0.8s-0.168,0.445-0.294,0.616c-0.127,0.171-0.28,0.304-0.46,0.399S103.204,47.169,102.981,47.169z M102.991,46.592c0.242,0,0.436-0.122,0.58-0.364c0.146-0.243,0.218-0.582,0.218-1.016v-0.044c0-0.214-0.02-0.407-0.058-0.58c-0.039-0.173-0.094-0.319-0.165-0.439c-0.072-0.12-0.157-0.211-0.256-0.276c-0.1-0.064-0.209-0.097-0.33-0.097c-0.242,0-0.437,0.122-0.583,0.364c-0.146,0.243-0.22,0.582-0.22,1.016V45.2c0,0.217,0.019,0.411,0.058,0.583c0.038,0.171,0.093,0.316,0.165,0.436c0.071,0.12,0.157,0.211,0.258,0.276C102.76,46.559,102.87,46.592,102.991,46.592z" id="path5161" fill="#FFFFFF"/></g></g><g id="g5163"><g id="g5165"><path d="M65.21,51.81h1.392c0.22,0,0.417,0.031,0.591,0.094c0.175,0.062,0.32,0.152,0.438,0.27c0.103,0.103,0.182,0.225,0.236,0.368c0.056,0.143,0.083,0.303,0.083,0.479v0.022c0,0.297-0.074,0.538-0.223,0.724c-0.148,0.185-0.341,0.32-0.575,0.404l0.907,1.491h-0.736l-0.819-1.364c-0.008,0.003-0.021,0.005-0.039,0.005h-0.616v1.358H65.21V51.81z M66.535,53.724c0.25,0,0.44-0.061,0.572-0.182c0.132-0.121,0.198-0.282,0.198-0.484v-0.011c0-0.22-0.066-0.385-0.198-0.495s-0.319-0.165-0.561-0.165h-0.699v1.336H66.535z" id="path5167" fill="#FFFFFF"/></g><g id="g5169"><path d="M68.29,51.81h2.426v0.578h-1.793v1.045h1.589v0.578h-1.589v1.072h1.82v0.578H68.29V51.81z" id="path5171" fill="#FFFFFF"/></g><g id="g5173"><path d="M72.326,55.71c-0.249,0-0.491-0.044-0.726-0.132c-0.235-0.088-0.458-0.229-0.667-0.423l0.386-0.479c0.143,0.128,0.296,0.236,0.459,0.324c0.163,0.088,0.348,0.132,0.553,0.132c0.187,0,0.335-0.046,0.442-0.138c0.108-0.092,0.162-0.209,0.162-0.352v-0.005c0-0.059-0.01-0.115-0.029-0.168c-0.021-0.053-0.058-0.104-0.11-0.154c-0.054-0.049-0.128-0.099-0.223-0.148c-0.096-0.05-0.221-0.102-0.374-0.157c-0.184-0.07-0.344-0.14-0.481-0.212c-0.138-0.071-0.253-0.152-0.347-0.242s-0.164-0.192-0.212-0.306c-0.047-0.113-0.071-0.248-0.071-0.401v-0.011c0-0.158,0.03-0.303,0.091-0.435c0.061-0.132,0.145-0.246,0.253-0.341c0.108-0.095,0.237-0.169,0.385-0.223s0.312-0.08,0.492-0.08c0.224,0,0.438,0.037,0.642,0.11c0.203,0.073,0.393,0.187,0.568,0.341l-0.362,0.49c-0.132-0.106-0.271-0.193-0.415-0.261c-0.146-0.068-0.295-0.102-0.448-0.102c-0.177,0-0.313,0.042-0.413,0.126c-0.099,0.084-0.148,0.19-0.148,0.319v0.005c0,0.066,0.011,0.126,0.033,0.182c0.021,0.055,0.062,0.107,0.121,0.157s0.139,0.101,0.242,0.154c0.103,0.053,0.236,0.111,0.401,0.173c0.18,0.07,0.334,0.141,0.465,0.214c0.13,0.074,0.238,0.155,0.324,0.245s0.15,0.189,0.192,0.3c0.042,0.11,0.063,0.234,0.063,0.374v0.011c0,0.169-0.031,0.322-0.094,0.459c-0.062,0.137-0.149,0.254-0.261,0.349c-0.112,0.095-0.244,0.169-0.396,0.223S72.506,55.71,72.326,55.71z" id="path5175" fill="#FFFFFF"/></g><g id="g5177"><path d="M73.79,51.81h2.426v0.578h-1.793v1.045h1.589v0.578h-1.589v1.072h1.82v0.578H73.79V51.81z" id="path5179" fill="#FFFFFF"/></g><g id="g5181"><path d="M77.432,52.405h-1.013V51.81h2.662v0.594H78.07v3.256h-0.638V52.405z" id="path5183" fill="#FFFFFF"/></g></g><g id="g5185"><g id="g5187"><path d="M55.711,71.012h-0.464l-0.107,0.733h-0.423l0.104-0.733h-0.621l-0.104,0.733h-0.423l0.103-0.733H53.42v-0.446h0.424l0.116-0.81h-0.4v-0.446h0.464l0.104-0.715h0.428l-0.104,0.715h0.621l0.104-0.715h0.423l-0.104,0.715h0.355v0.446h-0.423l-0.117,0.81h0.4V71.012z M54.258,70.576h0.634l0.122-0.828h-0.635L54.258,70.576z" id="path5189" fill="#FFFFFF"/></g><g id="g5191"><path d="M57.967,71.41h-1.705l-0.088-0.462l1.831-2.574h0.567v2.502h0.478v0.534h-0.478v0.836h-0.605V71.41z M57.967,70.876v-1.545l-1.089,1.545H57.967z" id="path5193" fill="#FFFFFF"/></g></g><g id="g5195"><g id="g5197"><path d="M85.825,71.012h-0.464l-0.107,0.733h-0.423l0.104-0.733h-0.621l-0.104,0.733h-0.423l0.103-0.733h-0.355v-0.446h0.424l0.116-0.81h-0.4v-0.446h0.464l0.104-0.715h0.428l-0.104,0.715h0.621l0.104-0.715h0.423l-0.104,0.715h0.355v0.446h-0.423l-0.117,0.81h0.4V71.012z M84.372,70.575h0.634l0.122-0.828h-0.635L84.372,70.575z" id="path5199" fill="#FFFFFF"/></g><g id="g5201"><path d="M86.885,69.033l-0.604,0.182l-0.104-0.55l0.891-0.297h0.451v3.877h-0.633V69.033z" id="path5203" fill="#FFFFFF"/></g><g id="g5205"><path d="M89.085,71.728c0.136,0,0.255-0.033,0.358-0.099c0.103-0.066,0.188-0.154,0.258-0.264c0.069-0.11,0.122-0.237,0.157-0.38c0.034-0.143,0.054-0.292,0.058-0.446c-0.096,0.109-0.21,0.195-0.344,0.259s-0.287,0.095-0.459,0.095c-0.165,0-0.32-0.026-0.465-0.08c-0.146-0.053-0.27-0.131-0.374-0.234s-0.188-0.23-0.248-0.382c-0.061-0.152-0.091-0.325-0.091-0.52V69.66c0-0.19,0.032-0.368,0.097-0.531s0.153-0.303,0.267-0.421c0.113-0.117,0.248-0.209,0.404-0.275s0.325-0.099,0.509-0.099c0.198,0,0.369,0.029,0.515,0.088c0.145,0.059,0.275,0.146,0.393,0.264c0.066,0.066,0.127,0.144,0.182,0.234s0.102,0.194,0.141,0.313c0.038,0.119,0.068,0.256,0.091,0.41c0.021,0.154,0.032,0.33,0.032,0.528v0.039c0,0.334-0.033,0.631-0.102,0.891c-0.067,0.26-0.167,0.479-0.297,0.657s-0.287,0.313-0.47,0.407c-0.184,0.093-0.391,0.14-0.622,0.14c-0.209,0-0.396-0.034-0.563-0.101c-0.167-0.067-0.327-0.161-0.481-0.28l0.319-0.504c0.117,0.096,0.234,0.171,0.352,0.226C88.818,71.701,88.946,71.728,89.085,71.728z M89.226,70.359c0.206,0,0.369-0.067,0.488-0.201c0.12-0.134,0.18-0.307,0.18-0.516v-0.006c0-0.221-0.061-0.399-0.182-0.535c-0.122-0.136-0.287-0.205-0.497-0.205c-0.206,0-0.367,0.07-0.483,0.21c-0.116,0.14-0.174,0.316-0.174,0.53v0.011c0,0.221,0.061,0.395,0.182,0.521C88.862,70.296,89.024,70.359,89.226,70.359z" id="path5207" fill="#FFFFFF"/></g></g><g id="g5209"><g id="g5211"><path d="M96.417,101.064h0.615l1.414,3.872H97.78l-0.318-0.907h-1.496l-0.319,0.907h-0.644L96.417,101.064z M97.264,103.462l-0.55-1.546l-0.55,1.546H97.264z" id="path5213" fill="#FFFFFF"/></g><g id="g5215"><path d="M100.206,104.1h-1.705l-0.088-0.462l1.831-2.574h0.567v2.503h0.478v0.533h-0.478v0.836h-0.605V104.1z M100.206,103.567v-1.546l-1.089,1.546H100.206z" id="path5217" fill="#FFFFFF"/></g></g><g id="g5219"><g id="g5221"><path d="M46.826,103.048h-0.464l-0.107,0.733h-0.423l0.104-0.733h-0.621l-0.104,0.733h-0.423l0.103-0.733h-0.355v-0.445h0.424l0.116-0.81h-0.4v-0.446h0.464l0.104-0.715h0.428l-0.104,0.715h0.621l0.104-0.715h0.423l-0.104,0.715h0.355v0.446h-0.423l-0.117,0.81h0.4V103.048z M45.373,102.612h0.634l0.122-0.828h-0.635L45.373,102.612z" id="path5223" fill="#FFFFFF"/></g><g id="g5225"><path d="M48.415,104.342c-0.238,0-0.457-0.043-0.654-0.129c-0.198-0.086-0.376-0.204-0.534-0.354l0.363-0.474c0.128,0.114,0.258,0.204,0.388,0.27c0.13,0.066,0.274,0.1,0.432,0.1c0.209,0,0.376-0.062,0.501-0.188c0.124-0.125,0.187-0.291,0.187-0.5v-0.012c0-0.205-0.066-0.364-0.2-0.479c-0.134-0.113-0.304-0.17-0.509-0.17c-0.117,0-0.224,0.014-0.319,0.041s-0.184,0.062-0.264,0.102l-0.374-0.247l0.104-1.87h2.035v0.577h-1.496l-0.061,0.919c0.077-0.025,0.154-0.047,0.233-0.063s0.172-0.024,0.278-0.024c0.164,0,0.319,0.023,0.464,0.071c0.146,0.048,0.272,0.12,0.383,0.217c0.11,0.098,0.197,0.222,0.261,0.371c0.064,0.15,0.097,0.329,0.097,0.534v0.011c0,0.198-0.032,0.377-0.097,0.536c-0.063,0.159-0.154,0.296-0.271,0.41c-0.118,0.113-0.257,0.2-0.418,0.261C48.781,104.312,48.605,104.342,48.415,104.342z" id="path5227" fill="#FFFFFF"/></g></g><g id="g5229"><g id="g5231"><path d="M70.358,112.177h-0.464l-0.107,0.733h-0.423l0.104-0.733h-0.621l-0.104,0.733H68.32l0.103-0.733h-0.355v-0.446h0.424l0.116-0.81h-0.4v-0.445h0.464l0.104-0.716h0.428l-0.104,0.716h0.621l0.104-0.716h0.423l-0.104,0.716h0.355v0.445h-0.423l-0.117,0.81h0.4V112.177z M68.905,111.74h0.634l0.122-0.828h-0.635L68.905,111.74z" id="path5233" fill="#FFFFFF"/></g><g id="g5235"><path d="M70.883,112.905l1.177-1.26c0.11-0.113,0.203-0.215,0.278-0.303s0.136-0.17,0.182-0.247s0.079-0.152,0.102-0.226c0.021-0.073,0.033-0.148,0.033-0.226c0-0.176-0.055-0.312-0.162-0.407c-0.108-0.096-0.241-0.143-0.399-0.143c-0.153,0-0.288,0.041-0.404,0.123c-0.115,0.083-0.238,0.207-0.366,0.372l-0.424-0.391c0.161-0.221,0.34-0.391,0.536-0.512c0.197-0.121,0.434-0.182,0.713-0.182c0.168,0,0.323,0.025,0.464,0.077c0.142,0.052,0.264,0.124,0.366,0.217c0.103,0.094,0.183,0.208,0.239,0.342s0.085,0.283,0.085,0.448v0.011c0,0.132-0.016,0.252-0.047,0.36c-0.031,0.107-0.079,0.216-0.146,0.324c-0.065,0.108-0.149,0.219-0.25,0.333c-0.101,0.113-0.221,0.24-0.36,0.379l-0.77,0.836h1.589v0.578h-2.437V112.905z" id="path5237" fill="#FFFFFF"/></g><g id="g5239"><path d="M74.381,110.198l-0.604,0.182l-0.104-0.551l0.891-0.297h0.451v3.878h-0.633V110.198z" id="path5241" fill="#FFFFFF"/></g></g><path d="M57.299,25.488l-0.353-0.866l-0.433,0.176c-0.512,0.209-1.017,0.432-1.52,0.658l-0.432-0.94l-1.779,2.512l3.065,0.285l-0.463-1.007c0.491-0.22,0.982-0.438,1.482-0.641L57.299,25.488z" id="path5243" fill="#FFFFFF"/><g id="g5245"><g id="g5247"><path d="M95.069,51.125c-1.367,0-2.48-1.113-2.48-2.48c0-0.641,0.257-1.261,0.709-1.725v-7.204c0-0.977,0.795-1.772,1.771-1.772c0.978,0,1.772,0.795,1.772,1.772v7.204c0.451,0.463,0.708,1.083,0.708,1.725C97.549,50.012,96.436,51.125,95.069,51.125z M95.069,38.654c-0.586,0-1.062,0.477-1.062,1.063v7.512l-0.117,0.105c-0.382,0.344-0.592,0.81-0.592,1.311c0,0.977,0.795,1.771,1.771,1.771s1.771-0.794,1.771-1.771c0-0.502-0.21-0.967-0.591-1.311l-0.117-0.105v-7.512C96.132,39.13,95.655,38.654,95.069,38.654z" id="path5249" fill="#FFFFFF"/></g><path d="M95.706,47.481v-5.119h-1.275v5.12c-0.415,0.23-0.708,0.656-0.708,1.164c0,0.743,0.604,1.347,1.346,1.347c0.743,0,1.347-0.604,1.347-1.347C96.415,48.137,96.122,47.71,95.706,47.481z" id="path5251" fill="#FFFFFF"/></g><g id="g5253"><g id="g5255"><path d="M52.359,50.862c-2.139,0-4.136-1.154-5.211-3.011l-0.103-0.178l0.103-0.178c1.076-1.857,3.073-3.012,5.211-3.012c2.138,0,4.135,1.154,5.211,3.012l0.103,0.178l-0.103,0.178C56.494,49.708,54.498,50.862,52.359,50.862z M47.868,47.673c0.971,1.535,2.673,2.48,4.491,2.48c1.817,0,3.519-0.945,4.49-2.48c-0.971-1.535-2.673-2.48-4.49-2.48S48.84,46.138,47.868,47.673z" id="path5257" fill="#FFFFFF"/></g><g id="g5259"><path d="M54.485,47.673c0,1.174-0.952,2.126-2.126,2.126s-2.126-0.952-2.126-2.126s0.952-2.126,2.126-2.126S54.485,46.499,54.485,47.673z M52.359,46.61c-0.587,0-1.063,0.476-1.063,1.063s0.476,1.063,1.063,1.063s1.063-0.476,1.063-1.063S52.946,46.61,52.359,46.61z" id="path5261" fill="#FFFFFF"/></g></g><g id="g5263"><g id="g5265"><path d="M89.906,110.47c-0.977,0-1.771-0.795-1.771-1.771c0-0.195,0.159-0.354,0.354-0.354s0.354,0.159,0.354,0.354c0,0.586,0.477,1.062,1.062,1.062c0.587,0,1.063-0.477,1.063-1.062c0-0.474,0.185-0.919,0.519-1.254l1.421-1.421c0.469-0.468,0.727-1.091,0.727-1.753s-0.258-1.285-0.727-1.755c-0.938-0.936-2.571-0.937-3.507,0.001c-0.469,0.468-0.727,1.091-0.727,1.754c0,0.195-0.159,0.354-0.354,0.354s-0.354-0.159-0.354-0.354c0-0.853,0.332-1.653,0.934-2.256c1.205-1.203,3.305-1.203,4.51,0c0.603,0.604,0.935,1.404,0.935,2.256s-0.332,1.652-0.934,2.255l-1.421,1.421c-0.201,0.2-0.312,0.468-0.312,0.752C91.679,109.675,90.884,110.47,89.906,110.47z" id="path5267" fill="#FFFFFF"/></g><g id="g5269"><path d="M89.384,106.988c-0.195,0-0.354-0.159-0.354-0.354v-0.521c0-0.195,0.159-0.354,0.354-0.354c0.312,0,0.565-0.254,0.565-0.566c0-0.292-0.353-0.565-0.565-0.565c-0.195,0-0.354-0.159-0.354-0.354c0-1.172,0.954-2.126,2.126-2.126s2.126,0.954,2.126,2.126c0,0.195-0.159,0.354-0.354,0.354s-0.354-0.159-0.354-0.354c0-0.781-0.636-1.417-1.417-1.417c-0.686,0-1.26,0.489-1.39,1.138c0.464,0.177,0.893,0.646,0.893,1.199c0,0.58-0.39,1.071-0.92,1.225v0.218C89.738,106.828,89.579,106.988,89.384,106.988z" id="path5271" fill="#FFFFFF"/></g></g><g id="g5273"><path d="M56.539,100.158l-5.171,1.285v1.695v3.43c-0.221-0.073-0.474-0.108-0.749-0.084c-0.827,0.072-1.497,0.614-1.497,1.209c0,0.595,0.67,1.019,1.497,0.947c0.827-0.072,1.497-0.614,1.497-1.209v-4.479l3.675-0.913v3.244c-0.221-0.073-0.474-0.108-0.749-0.084c-0.827,0.072-1.497,0.614-1.497,1.209s0.67,1.019,1.497,0.947c0.827-0.072,1.497-0.614,1.497-1.209v-4.293L56.539,100.158L56.539,100.158L56.539,100.158z" id="path5275" fill="#FFFFFF"/></g><g id="g5277"><g id="g5279"><polygon points="33.873,68.963 30.313,71.181 33.873,73.398 " id="polygon5281" fill="#FFFFFF"/></g><g id="g5283"><polygon points="50.011,62.626 50.011,59.609 45.168,62.626 " id="polygon5285" fill="#FFFFFF"/></g><g id="g5287"><polygon points="45.004,79.634 50.087,82.8 50.087,79.634 " id="polygon5289" fill="#FFFFFF"/></g></g><g id="g5291"><g id="g5293"><polygon points="110.208,68.919 113.768,71.137 110.208,73.354 " id="polygon5295" fill="#FFFFFF"/></g><g id="g5297"><polygon points="94.086,62.582 94.086,59.565 98.93,62.582 " id="polygon5299" fill="#FFFFFF"/></g><g id="g5301"><polygon points="99.094,79.59 94.011,82.756 94.011,79.59 " id="polygon5303" fill="#FFFFFF"/></g></g><g id="g5305"><polygon points="74.058,108.907 72.054,106.903 70.05,108.907 " id="polygon5307" fill="#FFFFFF"/></g><g id="g5309"><path d="M79.787,77.111v-1.247h0.705l-1.06-1.836l-1.06,1.836h0.706v1.247c-1.472,0.166-2.633,1.327-2.799,2.799h-1.247v-0.706l-1.836,1.06l1.836,1.06v-0.705h1.247c0.179,1.589,1.516,2.834,3.154,2.834c1.758,0,3.188-1.431,3.188-3.188C82.621,78.628,81.377,77.29,79.787,77.111z M79.433,82.744c-1.368,0-2.48-1.112-2.48-2.479c0-1.368,1.112-2.48,2.48-2.48c1.367,0,2.479,1.112,2.479,2.48C81.912,81.632,80.8,82.744,79.433,82.744z" id="path5311" fill="#FFFFFF"/><g id="g5313"><g id="g5315"><path d="M80.576,81.406l-2.291-1.548v1.498h-0.473v-2.151h0.387l2.291,1.549v-1.549h0.473v2.201H80.576z" id="path5317" fill="#FFFFFF"/></g></g><g id="g5319"><g id="g5321"><path d="M71.468,80.507l-1.895,1.062V80.97l1.364-0.729l-1.364-0.733v-0.581l1.891,1.058h1.26v0.522H71.468z" id="path5323" fill="#FFFFFF"/></g></g><g id="g5325"><g id="g5327"><path d="M77.891,71.744l1.539,0.927l1.611-0.972v0.598l-1.201,0.685l1.201,0.684v0.581l-1.606-0.963l-1.544,0.922v-0.594l1.135-0.639l-1.135-0.648V71.744z" id="path5329" fill="#FFFFFF"/></g></g></g></g></svg>`

    const pinNames = [
        {'name': "RX", 'touch': 1, 'text': { 'x': 40, 'y': 45}},
        {'name': "TX", 'touch': 1, 'text': { 'x': 6, 'y': 125}},
        {'name': "SDA", 'touch': 1, 'text': { 'x': 40, 'y': 45}},
        {'name': "SCL", 'touch': 1, 'text': { 'x': 40, 'y': 45}}, 
        {'name': "GND_0", 'touch': 0, 'text': null },
        {'name': "GND_1", 'touch': 0, 'text': null },
        {'name': "PIN_6", 'touch': 1, 'text': { 'x': 40, 'y': 45}},
        {'name': "VBATT", 'touch': 1, 'text': { 'x': 40, 'y': 45}},
        {'name': "GND_2", 'touch': 0, 'text': null },
        {'name': "PIN_9", 'touch': 1, 'text': { 'x': 40, 'y': 45}},
        {'name': "PIN_10", 'touch': 1, 'text': { 'x': 40, 'y': 45}},
        {'name': "PWR_0", 'touch': 0, 'text': null },
        {'name': "PIN_12", 'touch': 1, 'text': { 'x': 40, 'y': 45}},
        {'name': "PWR_2", 'touch': 0, 'text': null }
    ];
    const pinTitles = [
        "RX #0, ANALOG IN, LED Col 1",
        "TX #1, ANALOG IN, LED Col 2",
        "SDA #2, ANALOG IN",
        "SCL #3, ANALOG IN",
        "GND, ANALOG IN",
        "GND, BUTTON A",
        "#6",
        "VBATT, LED Col 9",
        "GND, LED Col 7",
        "#9, ANALOG IN, LED Col 3",
        "#10, BUTTON B",
        "3.3V, +3v3",
        "#12, LED Col 8",
        "3.3V, +3v3"
    ];
    const MB_WIDTH = 144.058;
    const MB_HEIGHT = 145.025;
    export interface IBoardTheme {
        accent?: string;
        display?: string;
        pin?: string;
        pinTouched?: string;
        pinActive?: string;
        ledOn?: string;
        ledOff?: string;
        buttonOuter?: string;
        buttonUps: string[];
        buttonDown?: string;
        virtualButtonOuter?: string;
        virtualButtonUp?: string;
        virtualButtonDown?: string;
        lightLevelOn?: string;
        lightLevelOff?: string;
        soundLevelOn?: string;
        soundLevelOff?: string;
    }

    export var themes: IBoardTheme[] = ["#3ADCFE"].map(accent => {
        return {
            accent: accent,
            pin: "#D4AF37",
            pinTouched: "#FFA500",
            pinActive: "#FF5500",
            ledOn: "#ff7777",
            ledOff: "#fff",
            buttonOuter: "#979797",
            buttonUps: ["#000", "#000"],
            buttonDown: "#FFA500",
            virtualButtonDown: "#FFA500",
            virtualButtonOuter: "#333",
            virtualButtonUp: "#fff",
            lightLevelOn: "yellow",
            lightLevelOff: "#555",
            soundLevelOn: "#7f8c8d",
            soundLevelOff: "#555"
        }
    });

    export function randomTheme(): IBoardTheme {
        return themes[Math.floor(Math.random() * themes.length)];
    }

    export interface IBoardProps {
        runtime?: pxsim.Runtime;
        theme?: IBoardTheme;
        disableTilt?: boolean;
        wireframe?: boolean;
    }

    export class MicrobitBoardSvg implements BoardView {
        public element: SVGSVGElement;
        private style: SVGStyleElement;
        private defs: SVGDefsElement;
        private g: SVGGElement;

        private buttons: SVGElement[];
        private buttonsOuter: SVGElement[];
        private buttonABText: SVGTextElement;
        private pins: SVGElement[];
        private pinGradients: SVGLinearGradientElement[];
        private pinTexts: SVGTextElement[];
        private systemLed: SVGCircleElement;
        private redLED: SVGRectElement;
        private slideSwitch: SVGGElement;
        private lightLevelButton: SVGCircleElement;
        private lightLevelGradient: SVGLinearGradientElement;
        private lightLevelText: SVGTextElement;
        private soundLevelButton: SVGCircleElement;
        private soundLevelGradient: SVGLinearGradientElement;
        private soundLevelText: SVGTextElement;
        private thermometerGradient: SVGLinearGradientElement;
        private thermometer: SVGRectElement;
        private thermometerText: SVGTextElement;
        private antenna: SVGPolylineElement;
        private shakeButton: SVGCircleElement;
        private shakeText: SVGTextElement;
        public board: pxsim.DalBoard;
        private pinNmToCoord: Map<Coord> = {
		};

        constructor(public props: IBoardProps) {
            this.buildDom();
            if (props && props.wireframe)
                svg.addClass(this.element, "sim-wireframe");

            if (props && props.theme)
                this.updateTheme();

            if (props && props.runtime) {
                this.board = this.props.runtime.board as pxsim.DalBoard;
                this.board.updateSubscribers.push(() => this.updateState());
                this.updateState();
                this.attachEvents();
            }
        }

        public getView(): SVGAndSize<SVGSVGElement> {
            return {
                el: this.element,
                y: 0,
                x: 0,
                w: MB_WIDTH,
                h: MB_HEIGHT
            };
        }

        public getCoord(pinNm: string): Coord {
            return this.pinNmToCoord[pinNm];
        }

        public highlightPin(pinNm: string): void {
            //TODO: for instructions
        }

        public getPinDist(): number {
            return 10;
        }

        private recordPinCoords() {
			pinNames.forEach((pin, i) => {
                const nm = pin.name;
				const p = this.pins[i];
				const r = p.getBoundingClientRect();
                this.pinNmToCoord[nm] = [r.left + r.width / 2, r.top + r.height / 2];
            });
			console.log(JSON.stringify(this.pinNmToCoord, null, 2))
        }

        private updateTheme() {
            let theme = this.props.theme;

            svg.fills(this.buttonsOuter.slice(0, 2), theme.buttonOuter);
            svg.fill(this.buttons[0], theme.buttonUps[0]);
            svg.fill(this.buttons[1], theme.buttonUps[1]);
            if (this.shakeButton) svg.fill(this.shakeButton, theme.virtualButtonUp);

            this.pinGradients.forEach(lg => svg.setGradientColors(lg, theme.pin, theme.pinActive));
            svg.setGradientColors(this.lightLevelGradient, theme.lightLevelOn, theme.lightLevelOff);

            svg.setGradientColors(this.thermometerGradient, theme.ledOff, theme.ledOn);
            svg.setGradientColors(this.soundLevelGradient, theme.soundLevelOn, theme.soundLevelOff);
        }

        public updateState() {
            let state = this.board;
            if (!state) return;
            let theme = this.props.theme;

            let bpState = state.buttonPairState;
            let buttons = [bpState.aBtn, bpState.bBtn, bpState.abBtn];
            svg.fill(this.buttons[0],  buttons[0].pressed ? theme.buttonDown : theme.buttonUps[0]);
            svg.fill(this.buttons[1], buttons[1].pressed ? theme.buttonDown : theme.buttonUps[1]);

            this.updatePins();
            this.updateTilt();
            this.updateRedLED();
            this.updateNeoPixels();
            this.updateSwitch();
            this.updateSound();
            this.updateLightLevel();
            this.updateSoundLevel();
            this.updateButtonAB();
            this.updateGestures();
            this.updateTemperature();

            if (!runtime || runtime.dead) svg.addClass(this.element, "grayscale");
            else svg.removeClass(this.element, "grayscale");
        }

        private lastFlashTime: number = 0;
        private flashSystemLed() {
            if (!this.systemLed)
                this.systemLed = <SVGCircleElement>svg.child(this.g, "circle", { class: "sim-systemled", cx: 75, cy: MB_HEIGHT - 171, r: 2 })
            let now = Date.now();
            if (now - this.lastFlashTime > 150) {
                this.lastFlashTime = now;
                svg.animate(this.systemLed, "sim-flash")
            }
        }

        private updateRedLED() {
            let state = this.board;
            if (!state) return;
            let ledOn = state.redLEDState.on || false;
            if (!this.redLED)
                this.redLED = this.element.querySelector("#SERIAL_LED") as SVGRectElement;
            let fillColor = ledOn ? "#FF0000" : "#000000";
            svg.fill(this.redLED, fillColor);
        }

        private updateNeoPixels() {
            let state = this.board;
            if (!state || !state.neopixelState) return;
            let neopixels = state.neopixelState.getNeoPixels();
            for (let i = 0; i < state.neopixelState.NUM_PIXELS; i++) {
                let rgb = neopixels[i];
				let p_outer = this.element.getElementById(`LED${i}_OUTER`) as SVGPathElement;
				let p_inner = this.element.getElementById(`LED${i}`) as SVGPathElement;
                if (p_inner) p_inner.setAttribute('d', `M 2, 5
        m 0, 0
        a 3,3 0 1,0 6,0
        a 3,3 0 1,0 -6,0`);

                if (!rgb) {
                    // Clear the pixel
                    svg.fill(p_outer, `rgb(0,0,0)`);
                    svg.fill(p_inner, `rgb(200,200,200)`);
                    svg.filter(p_inner, null);
                    svg.filter(p_outer, null);
                    continue;
                }

                let hsl = visuals.rgbToHsl(rgb);
                let [h, s, l] = hsl;
                // at least 10% luminosity
                l = Math.max(l, 10);
                if (p_inner) svg.fill(p_inner, `rgb(255, 255, 255)`);
                if (p_outer) svg.fill(p_outer, `hsl(${h}, ${s}%, ${l}%)`);
                if (p_inner) svg.filter(p_inner, `url(#neopixelglow)`);
                if (p_outer) svg.filter(p_outer, `url(#neopixelglow)`);
            }
        }

        private updateSwitch() {
            let state = this.board;
            if (!state || !state.slideSwitchState) return;
            let slideSwitchState = state.slideSwitchState;
            if (!this.slideSwitch) {
                this.slideSwitch = this.element.getElementById(`SLIDE`) as SVGGElement;
                svg.addClass(this.slideSwitch, "sim-slide-switch")
                this.slideSwitch.addEventListener(pointerEvents.up, ev => {
                    let state = this.board;
                    slideSwitchState.on = !slideSwitchState.on;
                    let switchSlide = this.element.getElementById(`SLIDE_INNER`) as SVGGElement;
                    svg.addClass(switchSlide, "sim-slide-switch-inner")
                    if (slideSwitchState.on) {
                        svg.addClass(switchSlide, "on");
                        switchSlide.setAttribute("x", "10");
                    } else {
                        svg.removeClass(switchSlide, "on");
                        switchSlide.setAttribute("x", "5.67");
                    }
                })
            }
        }

        private updateSound() {
            let state = this.board;
            if (!state || !state.audioState) return;
            let audioState = state.audioState;
            let soundBoard = this.element.getElementById('g4656') as SVGGElement;
            if (audioState.isPlaying()) {
                svg.addClass(soundBoard, "sim-sound-stroke");
            } else {
                svg.removeClass(soundBoard, "sim-sound-stroke");
            }
        }

        private updatePins() {
            let state = this.board;
            if (!state || !state.edgeConnectorState || !state.capacitiveSensorState) return;
            state.edgeConnectorState.pins.forEach((pin, i) => this.updatePin(pin, i));
        }

        private updatePin(pin: Pin, index: number) {
            if (!pin) return;
            let text = this.pinTexts[index];
            let v = "";

            if (pin.mode & PinFlags.Analog) {
                v = Math.floor(100 - (pin.value || 0) / 1023 * 100) + "%";
                if (text) text.textContent = (pin.period ? "~" : "") + (pin.value || 0) + "";
            }
            else if (pin.mode & PinFlags.Digital) {
                v = pin.value > 0 ? "0%" : "100%";
                if (text) text.textContent = pin.value > 0 ? "1" : "0";
            }
            else if (pin.mode & PinFlags.Touch) {
                v = pin.touched ? "0%" : "100%";
                if (text) text.textContent = "";
            } else {
                v = "100%";
                if (text) text.textContent = "";
            }
            if (v) svg.setGradientValue(this.pinGradients[index], v);
        }

        private updateLightLevel() {
            let state = this.board;
            if (!state || !state.lightSensorState.usesLightLevel) return;

            if (!this.lightLevelButton) {
                let gid = "gradient-light-level";
                this.lightLevelGradient = svg.linearGradient(this.defs, gid)
                let cy = 15;
                let r = 10;
                this.lightLevelButton = svg.child(this.g, "circle", {
                    cx: `10px`, cy: `${cy}px`, r: `${r}px`,
                    class: 'sim-light-level-button',
                    fill: `url(#${gid})`
                }) as SVGCircleElement;
                let pt = this.element.createSVGPoint();
                svg.buttonEvents(this.lightLevelButton,
                    (ev) => {
                        let pos = svg.cursorPoint(pt, this.element, ev);
                        let rs = r / 2;
                        let level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy - rs)) / (2 * rs) * 255)));
                        if (level != this.board.lightSensorState.lightLevel) {
                            this.board.lightSensorState.lightLevel = level;
                            this.applyLightLevel();
                        }
                    }, ev => { },
                    ev => { })
                this.lightLevelText = svg.child(this.g, "text", { x: 21, y: cy + r - 15, text: '', class: 'sim-text' }) as SVGTextElement;
                this.updateTheme();
            }

            svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(state.lightSensorState.lightLevel * 100 / 255))) + '%')
            this.lightLevelText.textContent = state.lightSensorState.lightLevel.toString();
        }

        private applyLightLevel() {
            let lv = this.board.lightSensorState.lightLevel;
            svg.setGradientValue(this.lightLevelGradient, Math.min(100, Math.max(0, Math.floor(lv * 100 / 255))) + '%')
            this.lightLevelText.textContent = lv.toString();
        }

        private updateSoundLevel() {
            let state = this.board;
            if (!state || !state.soundSensorState.usesSoundLevel) return;

            if (!this.soundLevelButton) {
                let gid = "gradient-sound-level";
                this.soundLevelGradient = svg.linearGradient(this.defs, gid)
                let cy = 134;
                let r = 10;
                this.soundLevelButton = svg.child(this.g, "circle", {
                    cx: `10px`, cy: `${cy}px`, r: `${r}px`,
                    class: 'sim-sound-level-button',
                    fill: `url(#${gid})`
                }) as SVGCircleElement;
                
                let pt = this.element.createSVGPoint();
                svg.buttonEvents(this.soundLevelButton,
                    (ev) => {
                        let pos = svg.cursorPoint(pt, this.element, ev);
                        let rs = r / 2;
                        let level = Math.max(0, Math.min(255, Math.floor((pos.y - (cy - rs)) / (2 * rs) * 255)));
                        if (level != this.board.soundSensorState.soundLevel) {
                            this.board.soundSensorState.soundLevel = (255 - level);
                            this.applySoundLevel();
                        }
                    }, ev => { },
                    ev => { })
                this.soundLevelText = svg.child(this.g, "text", { x: 21, y: cy + r - 3, text: '', class: 'sim-text' }) as SVGTextElement;
                this.updateTheme();
            }

            svg.setGradientValue(this.soundLevelGradient, Math.min(100, Math.max(0, Math.floor((255 - state.soundSensorState.soundLevel) * 100 / 255))) + '%')
            this.soundLevelText.textContent = state.soundSensorState.soundLevel.toString();
        }

        private applySoundLevel() {
            let lv = this.board.soundSensorState.soundLevel;
            svg.setGradientValue(this.soundLevelGradient, Math.min(100, Math.max(0, Math.floor((255 - lv) * 100 / 255))) + '%')
            this.soundLevelText.textContent = lv.toString();
        }

        private updateTemperature() {
            let state = this.board;
            if (!state || !state.thermometerState || !state.thermometerState.usesTemperature) return;

            let tmin = state.thermometerState.unit == ThermometerUnit.Celsius ? -5 : 0;
            let tmax = state.thermometerState.unit == ThermometerUnit.Celsius ? 50 : 120;
            if (!this.thermometer) {
                let gid = "gradient-thermometer";
                this.thermometerGradient = svg.linearGradient(this.defs, gid);
                this.thermometer = <SVGRectElement>svg.child(this.g, "rect", {
                    class: "sim-thermometer",
                    x: 135,
                    y: 3,
                    width: 7,
                    height: 32,
                    rx: 2, ry: 2,
                    fill: `url(#${gid})`
                });
                this.thermometerText = svg.child(this.g, "text", { class: 'sim-text', x: 112, y: 10 }) as SVGTextElement;
                this.updateTheme();

                let pt = this.element.createSVGPoint();
                svg.buttonEvents(this.thermometer,
                    (ev) => {
                        let cur = svg.cursorPoint(pt, this.element, ev);
                        let t = Math.max(0, Math.min(1, (35 - cur.y) / 30))
                        state.thermometerState.temperature = Math.floor(tmin + t * (tmax - tmin));
                        this.updateTemperature();
                    }, ev => { }, ev => { })
            }

            let t = Math.max(tmin, Math.min(tmax, state.thermometerState.temperature))
            let per = Math.floor((state.thermometerState.temperature - tmin) / (tmax - tmin) * 100)
            svg.setGradientValue(this.thermometerGradient, 100 - per + "%");
            this.thermometerText.textContent = t + "°" + (state.thermometerState.unit == ThermometerUnit.Celsius ? 'C' : 'F');
        }

        private updateButtonAB() {
            let state = this.board;
            if (state.buttonPairState.usesButtonAB && !this.buttonABText) {
                (<any>this.buttonsOuter[2]).style.visibility = "visible";
                (<any>this.buttons[2]).style.visibility = "visible";
                this.buttonABText = svg.child(this.g, "text", { class: "sim-text", x: 370, y: 272 }) as SVGTextElement;
                this.buttonABText.textContent = "A+B";
                this.updateTheme();
            }
        }

        private updateGestures() {
            let state = this.board;
            if (state.accelerometerState.useShake && !this.shakeButton) {
                this.shakeButton = svg.child(this.g, "circle", { cx: 380, cy: 100, r: 16.5 }) as SVGCircleElement;
                svg.fill(this.shakeButton, this.props.theme.virtualButtonUp)
                this.shakeButton.addEventListener(pointerEvents.down, ev => {
                    let state = this.board;
                    svg.fill(this.shakeButton, this.props.theme.buttonDown);
                })
                this.shakeButton.addEventListener(pointerEvents.leave, ev => {
                    let state = this.board;
                    svg.fill(this.shakeButton, this.props.theme.virtualButtonUp);
                })
                this.shakeButton.addEventListener(pointerEvents.up, ev => {
                    let state = this.board;
                    svg.fill(this.shakeButton, this.props.theme.virtualButtonUp);
                    this.board.bus.queue(CPLAY.ID_GESTURE, 11); // GESTURE_SHAKE
                })
                this.shakeText = svg.child(this.g, "text", { x: 400, y: 110, class: "sim-text" }) as SVGTextElement;
                this.shakeText.textContent = "SHAKE"
            }
        }

        private updateTilt() {
            if (this.props.disableTilt) return;
            let state = this.board;
            if (!state || !state.accelerometerState.accelerometer.isActive) return;

            let x = state.accelerometerState.accelerometer.getX();
            let y = state.accelerometerState.accelerometer.getY();
            let af = 8 / 1023;

            this.element.style.transform = "perspective(30em) rotateX(" + y * af + "deg) rotateY(" + x * af + "deg)"
            this.element.style.perspectiveOrigin = "50% 50% 50%";
            this.element.style.perspective = "30em";
        }

        private buildDom() {
			this.element = new DOMParser().parseFromString(BOARD_SVG, "image/svg+xml").querySelector("svg") as SVGSVGElement;
            svg.hydrate(this.element, {
                "version": "1.0",
                "viewBox": `0 0 ${MB_WIDTH} ${MB_HEIGHT}`,
                "class": "sim",
                "x": "0px",
                "y": "0px",
                "width": MB_WIDTH + "px",
                "height": MB_HEIGHT + "px",
            });
            this.style = <SVGStyleElement>svg.child(this.element, "style", {});
            this.style.textContent = MB_STYLE;

            this.defs = <SVGDefsElement>svg.child(this.element, "defs", {});
            this.g = <SVGGElement>svg.elt("g");
            this.element.appendChild(this.g);

            // filters
            let glow = svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
            svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
            let merge = svg.child(glow, "feMerge", {});
            for (let i = 0; i < 3; ++i) svg.child(merge, "feMergeNode", { in: "glow" })
            
            let neopixelglow = svg.child(this.defs, "filter", { id: "neopixelglow", x: "-50%", y: "-50%", width: "200%", height: "200%" });
            svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "5", result: "coloredBlur" });
            let neopixelmerge = svg.child(neopixelglow, "feMerge", {});
            svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" })
            svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" })

            const btnids = ["BTN_A", "BTN_B"];
            this.buttonsOuter = btnids.map(n => this.element.getElementById(n + "_OUTER") as SVGElement);
            this.buttonsOuter.forEach(b => svg.addClass(b, "sim-button-outer"));
            this.buttons = btnids.map(n => this.element.getElementById(n + "_INNER") as SVGElement);
            this.buttons.forEach(b => svg.addClass(b, "sim-button"));

            this.pinTexts = [];
            this.pins = pinNames.map((pin, i) => {
                const n = pin.name;
				let p = this.element.getElementById(n) as SVGElement;
				svg.addClass(p, "sim-pin");
                if (pin.touch)
                    svg.addClass(p, "sim-pin-touch");
                if (pin.text)
                    this.pinTexts[i] = <SVGTextElement>svg.child(this.g, "text", { class: "sim-text-pin", x: pin.text.x, y: pin.text.y })
				return p;
			});
            
            this.pins.forEach((p, i) => svg.hydrate(p, {title: pinTitles[i]}));

            this.pinGradients = this.pins.map((pin, i) => {
                let gid = "gradient-pin-" + i
                let lg = svg.linearGradient(this.defs, gid)
                pin.setAttribute("fill", `url(#${gid})`);
                return lg;
            })

            // BTN A+B
            const outerBtn = (left: number, top: number) => {
                const button = this.mkBtn(left, top);
                this.buttonsOuter.push(button.outer);
                this.buttons.push(button.inner);

                return button;
            }

            let ab = outerBtn(210, MB_HEIGHT - 168);
            let abtext = svg.child(ab.outer, "text", { x: 208, y: MB_HEIGHT - 173, class: "sim-text inverted" }) as SVGTextElement;
            abtext.textContent = "A+B";
            (<any>this.buttonsOuter[2]).style.visibility = "hidden";
            (<any>this.buttons[2]).style.visibility = "hidden";
        }

        private mkBtn(left: number, top: number): { outer: SVGElement, inner: SVGElement } {
            const btnr = 2;
            const btnw = 16;
            const btnn = 1.6;
            const btnnm = 2;
            const btnb = 5;
            let btng = svg.child(this.g, "g", { class: "sim-button-group" });
            svg.child(btng, "rect", { class: "sim-button-outer", x: left, y: top, rx: btnr, ry: btnr, width: btnw, height: btnw });
            svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnnm, cy: top + btnnm, r: btnn });
            svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnnm, cy: top + btnw - btnnm, r: btnn });
            svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnw - btnnm, cy: top + btnw - btnnm, r: btnn });
            svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnw - btnnm, cy: top + btnnm, r: btnn });

            const outer = btng;
            const inner = svg.child(btng, "circle", {
                class: "sim-button",
                cx: left + btnw / 2,
                cy: top + btnw / 2,
                r: btnb
            });

            return { outer, inner };
        }

        private attachEvents() {
            Runtime.messagePosted = (msg) => {
                switch (msg.type || "") {
                    case "serial": this.flashSystemLed(); break;
                }
            }

            let tiltDecayer = 0;
            this.element.addEventListener(pointerEvents.move, (ev: MouseEvent) => {
                let state = this.board;
                if (!state.accelerometerState.accelerometer.isActive) return;

                if (tiltDecayer) {
                    clearInterval(tiltDecayer);
                    tiltDecayer = 0;
                }

                let ax = (ev.clientX - this.element.clientWidth / 2) / (this.element.clientWidth / 3);
                let ay = (ev.clientY - this.element.clientHeight / 2) / (this.element.clientHeight / 3);

                let x = - Math.max(- 1023, Math.min(1023, Math.floor(ax * 1023)));
                let y = Math.max(- 1023, Math.min(1023, Math.floor(ay * 1023)));
                let z2 = 1023 * 1023 - x * x - y * y;
                let z = Math.floor((z2 > 0 ? -1 : 1) * Math.sqrt(Math.abs(z2)));

                state.accelerometerState.accelerometer.update(x, y, z);
                this.updateTilt();
            }, false);
            this.element.addEventListener(pointerEvents.leave, (ev: MouseEvent) => {
                let state = this.board;
                if (!state.accelerometerState.accelerometer.isActive) return;

                if (!tiltDecayer) {
                    tiltDecayer = setInterval(() => {
                        let accx = state.accelerometerState.accelerometer.getX(MicroBitCoordinateSystem.RAW);
                        accx = Math.floor(Math.abs(accx) * 0.85) * (accx > 0 ? 1 : -1);
                        let accy = state.accelerometerState.accelerometer.getY(MicroBitCoordinateSystem.RAW);
                        accy = Math.floor(Math.abs(accy) * 0.85) * (accy > 0 ? 1 : -1);
                        let accz = -Math.sqrt(Math.max(0, 1023 * 1023 - accx * accx - accy * accy));
                        if (Math.abs(accx) <= 24 && Math.abs(accy) <= 24) {
                            clearInterval(tiltDecayer);
                            tiltDecayer = 0;
                            accx = 0;
                            accy = 0;
                            accz = -1023;
                        }
                        state.accelerometerState.accelerometer.update(accx, accy, accz);
                        this.updateTilt();
                    }, 50)
                }
            }, false);

            this.pins.forEach((pin, index) => {
                if (!this.board.edgeConnectorState.pins[index]) return;
                let pt = this.element.createSVGPoint();
                svg.buttonEvents(pin,
                    // move
                    ev => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        if (pin.mode & PinFlags.Input) {
                            let cursor = svg.cursorPoint(pt, this.element, ev);
                            let v = (400 - cursor.y) / 40 * 1023
                            pin.value = Math.max(0, Math.min(1023, Math.floor(v)));
                        }
                        this.updatePin(pin, index);
                    },
                    // start
                    ev => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        svg.addClass(svgpin, "touched");
                        if (pin.mode & PinFlags.Input) {
                            let cursor = svg.cursorPoint(pt, this.element, ev);
                            let v = (400 - cursor.y) / 40 * 1023
                            pin.value = Math.max(0, Math.min(1023, Math.floor(v)));
                        }
                        this.updatePin(pin, index);
                    },
                    // stop
                    (ev: MouseEvent) => {
                        let state = this.board;
                        let pin = state.edgeConnectorState.pins[index];
                        let svgpin = this.pins[index];
                        svg.removeClass(svgpin, "touched");
                        this.updatePin(pin, index);
                        return false;
                    });
            })
            this.pins.slice(0, 3).forEach((btn, index) => {
                btn.addEventListener(pointerEvents.down, ev => {
                    let state = this.board;
                    state.edgeConnectorState.pins[index].touched = true;
                    this.updatePin(state.edgeConnectorState.pins[index], index);
                })
                btn.addEventListener(pointerEvents.leave, ev => {
                    let state = this.board;
                    state.edgeConnectorState.pins[index].touched = false;
                    this.updatePin(state.edgeConnectorState.pins[index], index);
                })
                btn.addEventListener(pointerEvents.up, ev => {
                    let state = this.board;
                    state.edgeConnectorState.pins[index].touched = false;
                    this.updatePin(state.edgeConnectorState.pins[index], index);
                    //this.board.bus.queue(state.edgeConnectorState.pins[index].id, DAL.MICROBIT_BUTTON_EVT_UP);
                    //this.board.bus.queue(state.edgeConnectorState.pins[index].id, DAL.MICROBIT_BUTTON_EVT_CLICK);
                })
            })

            let bpState = this.board.buttonPairState;
            let stateButtons = [bpState.aBtn, bpState.bBtn, bpState.abBtn];
            this.buttonsOuter.slice(0, 2).forEach((btn, index) => {
                btn.addEventListener(pointerEvents.down, ev => {
                    let state = this.board;
                    stateButtons[index].pressed = true;
                    svg.fill(this.buttons[index], this.props.theme.buttonDown);
                })
                btn.addEventListener(pointerEvents.leave, ev => {
                    let state = this.board;
                    stateButtons[index].pressed = false;
                    svg.fill(this.buttons[index], this.props.theme.buttonUps[index]);
                })
                btn.addEventListener(pointerEvents.up, ev => {
                    let state = this.board;
                    stateButtons[index].pressed = false;
                    svg.fill(this.buttons[index], this.props.theme.buttonUps[index]);
                    //this.board.bus.queue(stateButtons[index].id, DAL.MICROBIT_BUTTON_EVT_UP);
                    //this.board.bus.queue(stateButtons[index].id, DAL.MICROBIT_BUTTON_EVT_CLICK);
                })
            })
            /*
            this.buttonsOuter[2].addEventListener(pointerEvents.down, ev => {
                let state = this.board;
                stateButtons[0].pressed = true;
                stateButtons[1].pressed = true;
                stateButtons[2].pressed = true;
                svg.fill(this.buttons[0], this.props.theme.buttonDown);
                svg.fill(this.buttons[1], this.props.theme.buttonDown);
                svg.fill(this.buttons[2], this.props.theme.buttonDown);
            })
            this.buttonsOuter[2].addEventListener(pointerEvents.leave, ev => {
                let state = this.board;
                stateButtons[0].pressed = false;
                stateButtons[1].pressed = false;
                stateButtons[2].pressed = false;
                svg.fill(this.buttons[0], this.props.theme.buttonUps[0]);
                svg.fill(this.buttons[1], this.props.theme.buttonUps[1]);
                //svg.fill(this.buttons[2], this.props.theme.virtualButtonUp);
            })
            this.buttonsOuter[2].addEventListener(pointerEvents.up, ev => {
                let state = this.board;
                stateButtons[0].pressed = false;
                stateButtons[1].pressed = false;
                stateButtons[2].pressed = false;
                svg.fill(this.buttons[0], this.props.theme.buttonUps[0]);
                svg.fill(this.buttons[1], this.props.theme.buttonUps[1]);
                //svg.fill(this.buttons[2], this.props.theme.virtualButtonUp);

                //this.board.bus.queue(stateButtons[2].id, DAL.MICROBIT_BUTTON_EVT_UP);
                //this.board.bus.queue(stateButtons[2].id, DAL.MICROBIT_BUTTON_EVT_CLICK);
            })
            */
        }
    }
}