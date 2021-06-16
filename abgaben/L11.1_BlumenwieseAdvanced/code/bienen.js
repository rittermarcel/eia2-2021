"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Bienen extends BlumenwieseAdvanced.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseAdvanced.Vector(BlumenwieseAdvanced.crc2.canvas.width, 380);
        }
        draw() {
            //let randomX: number = (Math.random() * crc2.canvas.width) + 10;
            BlumenwieseAdvanced.crc2.beginPath();
            let gradient = BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 20, 0);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(.2, "black");
            gradient.addColorStop(.4, "yellow");
            gradient.addColorStop(1, "black");
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.position.x, 380);
            BlumenwieseAdvanced.crc2.ellipse(0, 0, 20, 15, Math.PI * 0.05, Math.PI * 2, 0, false);
            BlumenwieseAdvanced.crc2.fillStyle = gradient;
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.ellipse(10, -23, 10, 5, Math.PI * 1.65, Math.PI * 2, 0, false);
            BlumenwieseAdvanced.crc2.fillStyle = gradient;
            BlumenwieseAdvanced.crc2.ellipse(18, -15, 10, 5, Math.PI * 1.8, Math.PI * 2, 0, false);
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.fillStyle = "black";
            BlumenwieseAdvanced.crc2.fillRect(-12, -4, 3, 3);
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.arc(-10, 3, 5, 0, Math.PI * 0.5);
            BlumenwieseAdvanced.crc2.strokeStyle = "black";
            BlumenwieseAdvanced.crc2.stroke();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.restore();
        }
    }
    BlumenwieseAdvanced.Bienen = Bienen;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=bienen.js.map