"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
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
            BlumenwiesePolymorphie.crc2.save();
            BlumenwiesePolymorphie.crc2.translate(this.position.x, this.position.y);
            BlumenwiesePolymorphie.crc2.beginPath();
            BlumenwiesePolymorphie.crc2.moveTo(0, 0);
            BlumenwiesePolymorphie.crc2.lineTo(0, -this.max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -this.min - Math.random() * (this.max - this.min);
                BlumenwiesePolymorphie.crc2.lineTo(x, y);
            } while (x < BlumenwiesePolymorphie.crc2.canvas.width);
            BlumenwiesePolymorphie.crc2.lineTo(x, 0);
            BlumenwiesePolymorphie.crc2.closePath();
            let gradient = BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.7, this.colorHigh);
            BlumenwiesePolymorphie.crc2.fillStyle = gradient;
            BlumenwiesePolymorphie.crc2.fill();
            BlumenwiesePolymorphie.crc2.restore();
        }
    }
    BlumenwiesePolymorphie.Mountains = Mountains;
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=mountains.js.map