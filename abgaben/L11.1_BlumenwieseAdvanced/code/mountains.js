"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
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
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(0, 0);
            BlumenwieseAdvanced.crc2.lineTo(0, -this.max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -this.min - Math.random() * (this.max - this.min);
                BlumenwieseAdvanced.crc2.lineTo(x, y);
            } while (x < BlumenwieseAdvanced.crc2.canvas.width);
            BlumenwieseAdvanced.crc2.lineTo(x, 0);
            BlumenwieseAdvanced.crc2.closePath();
            let gradient = BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.7, this.colorHigh);
            BlumenwieseAdvanced.crc2.fillStyle = gradient;
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.restore();
        }
    }
    BlumenwieseAdvanced.Mountains = Mountains;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=mountains.js.map