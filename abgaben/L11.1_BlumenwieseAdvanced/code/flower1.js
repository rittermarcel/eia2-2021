"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Flower1 extends BlumenwieseAdvanced.FlowerClass {
        constructor(_color) {
            super();
            this.color = _color;
        }
        draw() {
            let x = (Math.random() * BlumenwieseAdvanced.crc2.canvas.width) + 30;
            let yPosition = 470;
            let y = -(Math.random() * 30) + 5;
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(x, yPosition);
            BlumenwieseAdvanced.crc2.lineTo(x, yPosition + y);
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.strokeStyle = "brown";
            BlumenwieseAdvanced.crc2.stroke();
            let rotation = 0;
            BlumenwieseAdvanced.crc2.beginPath();
            for (let i = 0; i < 5; i++) {
                rotation = rotation + 30;
                BlumenwieseAdvanced.crc2.ellipse(x, yPosition - 10 + y, 10, 5, rotation, Math.PI * 2, 0, false);
            }
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.fillStyle = this.color;
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.restore();
        }
    }
    BlumenwieseAdvanced.Flower1 = Flower1;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=flower1.js.map