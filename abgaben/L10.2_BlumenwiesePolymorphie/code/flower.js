"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
    class Flower {
        constructor(_color) {
            this.color = _color;
        }
        drawFlower1() {
            let x = (Math.random() * BlumenwiesePolymorphie.crc2.canvas.width) + 5;
            let yPosition = 470;
            let y = -(Math.random() * 30) + 5;
            BlumenwiesePolymorphie.crc2.save();
            BlumenwiesePolymorphie.crc2.beginPath();
            BlumenwiesePolymorphie.crc2.moveTo(x, yPosition);
            BlumenwiesePolymorphie.crc2.lineTo(x, yPosition + y);
            BlumenwiesePolymorphie.crc2.closePath();
            BlumenwiesePolymorphie.crc2.strokeStyle = "brown";
            BlumenwiesePolymorphie.crc2.stroke();
            let rotation = 0;
            BlumenwiesePolymorphie.crc2.beginPath();
            for (let i = 0; i < 5; i++) {
                rotation = rotation + 30;
                BlumenwiesePolymorphie.crc2.ellipse(x, yPosition - 10 + y, 10, 5, rotation, Math.PI * 2, 0, false);
            }
            BlumenwiesePolymorphie.crc2.closePath();
            BlumenwiesePolymorphie.crc2.fillStyle = this.color;
            BlumenwiesePolymorphie.crc2.fill();
            BlumenwiesePolymorphie.crc2.restore();
        }
        drawFlower2() {
            let yPosition = 520;
            let x = (Math.random() * BlumenwiesePolymorphie.crc2.canvas.width) + 5;
            BlumenwiesePolymorphie.crc2.save();
            let y = -(Math.random() * 15 + 5);
            BlumenwiesePolymorphie.crc2.beginPath();
            BlumenwiesePolymorphie.crc2.moveTo(x, yPosition);
            BlumenwiesePolymorphie.crc2.lineTo(x, yPosition + y);
            BlumenwiesePolymorphie.crc2.strokeStyle = "white";
            BlumenwiesePolymorphie.crc2.stroke();
            BlumenwiesePolymorphie.crc2.fillStyle = this.color;
            BlumenwiesePolymorphie.crc2.ellipse(x, yPosition + y - 11, 10, 3, Math.PI * 1 / 2, Math.PI * 2, 0, false);
            BlumenwiesePolymorphie.crc2.closePath();
            BlumenwiesePolymorphie.crc2.fill();
            BlumenwiesePolymorphie.crc2.restore();
        }
    }
    BlumenwiesePolymorphie.Flower = Flower;
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=flower.js.map