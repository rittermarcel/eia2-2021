"use strict";
var aufgabe9BlumenwieseAnimiert;
(function (aufgabe9BlumenwieseAnimiert) {
    function drawBackground() {
        let gradient = aufgabe9BlumenwieseAnimiert.crc2.createLinearGradient(0, 0, 0, aufgabe9BlumenwieseAnimiert.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "green");
        aufgabe9BlumenwieseAnimiert.crc2.fillStyle = gradient;
        aufgabe9BlumenwieseAnimiert.crc2.fillRect(0, 0, aufgabe9BlumenwieseAnimiert.crc2.canvas.width, aufgabe9BlumenwieseAnimiert.crc2.canvas.height);
    }
    aufgabe9BlumenwieseAnimiert.drawBackground = drawBackground;
})(aufgabe9BlumenwieseAnimiert || (aufgabe9BlumenwieseAnimiert = {}));
//# sourceMappingURL=background.js.map