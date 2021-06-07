"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
    class Bienen extends BlumenwiesePolymorphie.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwiesePolymorphie.Vector(BlumenwiesePolymorphie.crc2.canvas.width, 380);
        }
        draw() {
            //let randomX: number = (Math.random() * crc2.canvas.width) + 10;
            BlumenwiesePolymorphie.crc2.beginPath();
            let gradient = BlumenwiesePolymorphie.crc2.createLinearGradient(0, 0, 20, 0);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(.2, "black");
            gradient.addColorStop(.4, "yellow");
            gradient.addColorStop(1, "black");
            BlumenwiesePolymorphie.crc2.save();
            BlumenwiesePolymorphie.crc2.translate(this.position.x, 380);
            BlumenwiesePolymorphie.crc2.ellipse(0, 0, 20, 15, Math.PI * 0.05, Math.PI * 2, 0, false);
            BlumenwiesePolymorphie.crc2.fillStyle = gradient;
            BlumenwiesePolymorphie.crc2.fill();
            BlumenwiesePolymorphie.crc2.beginPath();
            BlumenwiesePolymorphie.crc2.ellipse(10, -23, 10, 5, Math.PI * 1.65, Math.PI * 2, 0, false);
            BlumenwiesePolymorphie.crc2.fillStyle = gradient;
            BlumenwiesePolymorphie.crc2.ellipse(18, -15, 10, 5, Math.PI * 1.8, Math.PI * 2, 0, false);
            BlumenwiesePolymorphie.crc2.fill();
            BlumenwiesePolymorphie.crc2.beginPath();
            BlumenwiesePolymorphie.crc2.fillStyle = "black";
            BlumenwiesePolymorphie.crc2.fillRect(-12, -4, 3, 3);
            BlumenwiesePolymorphie.crc2.fill();
            BlumenwiesePolymorphie.crc2.beginPath();
            BlumenwiesePolymorphie.crc2.arc(-10, 3, 5, 0, Math.PI * 0.5);
            BlumenwiesePolymorphie.crc2.strokeStyle = "black";
            BlumenwiesePolymorphie.crc2.stroke();
            BlumenwiesePolymorphie.crc2.closePath();
            BlumenwiesePolymorphie.crc2.restore();
        }
    }
    BlumenwiesePolymorphie.Bienen = Bienen;
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=bienen.js.map