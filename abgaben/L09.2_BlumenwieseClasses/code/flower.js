"use strict";
var aufgabe9BlumenwieseAnimiert;
(function (aufgabe9BlumenwieseAnimiert) {
    class Flower {
        constructor(_color) {
            this.color = _color;
        }
        drawFlower1() {
            let x = (Math.random() * aufgabe9BlumenwieseAnimiert.crc2.canvas.width) + 5;
            let yPosition = 470;
            let y = -(Math.random() * 30) + 5;
            aufgabe9BlumenwieseAnimiert.crc2.save();
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            aufgabe9BlumenwieseAnimiert.crc2.moveTo(x, yPosition);
            aufgabe9BlumenwieseAnimiert.crc2.lineTo(x, yPosition + y);
            aufgabe9BlumenwieseAnimiert.crc2.closePath();
            aufgabe9BlumenwieseAnimiert.crc2.strokeStyle = "brown";
            aufgabe9BlumenwieseAnimiert.crc2.stroke();
            let rotation = 0;
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            for (let i = 0; i < 5; i++) {
                rotation = rotation + 30;
                aufgabe9BlumenwieseAnimiert.crc2.ellipse(x, yPosition - 10 + y, 10, 5, rotation, Math.PI * 2, 0, false);
            }
            aufgabe9BlumenwieseAnimiert.crc2.closePath();
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = this.color;
            aufgabe9BlumenwieseAnimiert.crc2.fill();
            aufgabe9BlumenwieseAnimiert.crc2.restore();
        }
        drawFlower2() {
            let yPosition = 520;
            let x = (Math.random() * aufgabe9BlumenwieseAnimiert.crc2.canvas.width) + 5;
            aufgabe9BlumenwieseAnimiert.crc2.save();
            let y = -(Math.random() * 15 + 5);
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            aufgabe9BlumenwieseAnimiert.crc2.moveTo(x, yPosition);
            aufgabe9BlumenwieseAnimiert.crc2.lineTo(x, yPosition + y);
            aufgabe9BlumenwieseAnimiert.crc2.strokeStyle = "white";
            aufgabe9BlumenwieseAnimiert.crc2.stroke();
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = this.color;
            aufgabe9BlumenwieseAnimiert.crc2.ellipse(x, yPosition + y - 11, 10, 3, Math.PI * 1 / 2, Math.PI * 2, 0, false);
            aufgabe9BlumenwieseAnimiert.crc2.closePath();
            aufgabe9BlumenwieseAnimiert.crc2.fill();
            aufgabe9BlumenwieseAnimiert.crc2.restore();
        }
    }
    aufgabe9BlumenwieseAnimiert.Flower = Flower;
})(aufgabe9BlumenwieseAnimiert || (aufgabe9BlumenwieseAnimiert = {}));
//# sourceMappingURL=flower.js.map