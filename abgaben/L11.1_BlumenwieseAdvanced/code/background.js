"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    function drawBackground() {
        let gradient = BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, BlumenwieseAdvanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "green");
        BlumenwieseAdvanced.crc2.fillStyle = gradient;
        BlumenwieseAdvanced.crc2.fillRect(0, 0, BlumenwieseAdvanced.crc2.canvas.width, BlumenwieseAdvanced.crc2.canvas.height);
    }
    BlumenwieseAdvanced.drawBackground = drawBackground;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=background.js.map