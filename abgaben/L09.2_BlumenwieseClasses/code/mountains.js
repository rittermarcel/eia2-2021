"use strict";
var aufgabe9BlumenwieseAnimiert;
(function (aufgabe9BlumenwieseAnimiert) {
    class Mountains {
        constructor(_position, _min, _max, _colorLow, _colorHigh) {
            this.position = _position;
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }
        drawMountains() {
            let stepMin = 30;
            let stepMax = 80;
            let x = 0;
            aufgabe9BlumenwieseAnimiert.crc2.save();
            aufgabe9BlumenwieseAnimiert.crc2.translate(this.position.x, this.position.y);
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            aufgabe9BlumenwieseAnimiert.crc2.moveTo(0, 0);
            aufgabe9BlumenwieseAnimiert.crc2.lineTo(0, -this.max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -this.min - Math.random() * (this.max - this.min);
                aufgabe9BlumenwieseAnimiert.crc2.lineTo(x, y);
            } while (x < aufgabe9BlumenwieseAnimiert.crc2.canvas.width);
            aufgabe9BlumenwieseAnimiert.crc2.lineTo(x, 0);
            aufgabe9BlumenwieseAnimiert.crc2.closePath();
            let gradient = aufgabe9BlumenwieseAnimiert.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.7, this.colorHigh);
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = gradient;
            aufgabe9BlumenwieseAnimiert.crc2.fill();
            aufgabe9BlumenwieseAnimiert.crc2.restore();
        }
    }
    aufgabe9BlumenwieseAnimiert.Mountains = Mountains;
})(aufgabe9BlumenwieseAnimiert || (aufgabe9BlumenwieseAnimiert = {}));
//# sourceMappingURL=mountains.js.map