"use strict";
var aufgabe9BlumenwieseAnimiert;
(function (aufgabe9BlumenwieseAnimiert) {
    class Bienen {
        constructor() {
            console.log("parameter übergeben");
            this.position = new aufgabe9BlumenwieseAnimiert.Vector(aufgabe9BlumenwieseAnimiert.crc2.canvas.width, 380);
            this.velocity = new aufgabe9BlumenwieseAnimiert.Vector(0, 0);
            this.velocity.random(200, 380);
        }
        drawBiene() {
            //let randomX: number = (Math.random() * crc2.canvas.width) + 10;
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            let gradient = aufgabe9BlumenwieseAnimiert.crc2.createLinearGradient(0, 0, 20, 0);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(.2, "black");
            gradient.addColorStop(.4, "yellow");
            gradient.addColorStop(1, "black");
            aufgabe9BlumenwieseAnimiert.crc2.save();
            aufgabe9BlumenwieseAnimiert.crc2.translate(this.position.x, 380);
            aufgabe9BlumenwieseAnimiert.crc2.ellipse(0, 0, 20, 15, Math.PI * 0.05, Math.PI * 2, 0, false);
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = gradient;
            aufgabe9BlumenwieseAnimiert.crc2.fill();
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            aufgabe9BlumenwieseAnimiert.crc2.ellipse(10, -23, 10, 5, Math.PI * 1.65, Math.PI * 2, 0, false);
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = gradient;
            aufgabe9BlumenwieseAnimiert.crc2.ellipse(18, -15, 10, 5, Math.PI * 1.8, Math.PI * 2, 0, false);
            aufgabe9BlumenwieseAnimiert.crc2.fill();
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = "black";
            aufgabe9BlumenwieseAnimiert.crc2.fillRect(-12, -4, 3, 3);
            aufgabe9BlumenwieseAnimiert.crc2.fill();
            aufgabe9BlumenwieseAnimiert.crc2.beginPath();
            aufgabe9BlumenwieseAnimiert.crc2.arc(-10, 3, 5, 0, Math.PI * 0.5);
            aufgabe9BlumenwieseAnimiert.crc2.strokeStyle = "black";
            aufgabe9BlumenwieseAnimiert.crc2.stroke();
            aufgabe9BlumenwieseAnimiert.crc2.closePath();
            aufgabe9BlumenwieseAnimiert.crc2.restore();
        }
        move(_timeslice) {
            console.log("move");
            let offset = new aufgabe9BlumenwieseAnimiert.Vector(this.velocity.x, 380);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += aufgabe9BlumenwieseAnimiert.crc2.canvas.width;
            if (this.position.x > aufgabe9BlumenwieseAnimiert.crc2.canvas.width)
                this.position.x -= aufgabe9BlumenwieseAnimiert.crc2.canvas.width;
            console.log(this.position);
        }
    }
    aufgabe9BlumenwieseAnimiert.Bienen = Bienen;
})(aufgabe9BlumenwieseAnimiert || (aufgabe9BlumenwieseAnimiert = {}));
//# sourceMappingURL=bienen.js.map