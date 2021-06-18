"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    BlumenwieseAdvanced.nectarPosition = 0;
    class Flower extends BlumenwieseAdvanced.FlowerClass {
        constructor(_color) {
            super();
            this.color = _color;
        }
        draw() {
            let yPosition = 520;
            let x = (Math.random() * BlumenwieseAdvanced.crc2.canvas.width) + 30;
            this.position = new BlumenwieseAdvanced.Vector(x, yPosition);
            BlumenwieseAdvanced.crc2.save();
            let y = -(Math.random() * 15 + 5);
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(x, yPosition);
            BlumenwieseAdvanced.crc2.lineTo(x, yPosition + y);
            BlumenwieseAdvanced.crc2.strokeStyle = "white";
            BlumenwieseAdvanced.crc2.stroke();
            BlumenwieseAdvanced.crc2.fillStyle = this.color;
            BlumenwieseAdvanced.crc2.ellipse(x, yPosition + y - 11, 10, 3, Math.PI * 1 / 2, Math.PI * 2, 0, false);
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.restore();
            this.nectar();
        }
    }
    BlumenwieseAdvanced.Flower = Flower;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=flower.js.map