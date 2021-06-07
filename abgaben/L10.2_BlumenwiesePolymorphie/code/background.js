"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
    function drawBackground() {
        let gradient = BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, BlumenwiesePolymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "green");
        BlumenwiesePolymorphie.crc2.fillStyle = gradient;
        BlumenwiesePolymorphie.crc2.fillRect(0, 0, BlumenwiesePolymorphie.crc2.canvas.width, BlumenwiesePolymorphie.crc2.canvas.height);
    }
    BlumenwiesePolymorphie.drawBackground = drawBackground;
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=background.js.map