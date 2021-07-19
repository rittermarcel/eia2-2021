"use strict";
var endabgabe;
(function (endabgabe) {
    class Spielfeld {
        drawSpielfeld() {
            endabgabe.crc2.save();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.translate(50, 50);
            endabgabe.crc2.moveTo(0, 0);
            endabgabe.crc2.lineTo(endabgabe.crc2.canvas.width - (2 * 50), 0);
            endabgabe.crc2.moveTo(endabgabe.crc2.canvas.width - (2 * 50), 0);
            endabgabe.crc2.lineTo(endabgabe.crc2.canvas.width - (2 * 50), endabgabe.crc2.canvas.height - (2 * 50));
            endabgabe.crc2.moveTo(endabgabe.crc2.canvas.width - (2 * 50), endabgabe.crc2.canvas.height - (2 * 50));
            endabgabe.crc2.lineTo(0, endabgabe.crc2.canvas.height - (2 * 50));
            endabgabe.crc2.moveTo(0, endabgabe.crc2.canvas.height - (2 * 50));
            endabgabe.crc2.lineTo(0, 0);
            endabgabe.crc2.moveTo((endabgabe.crc2.canvas.width - (2 * 50)) / 2, 0);
            endabgabe.crc2.lineTo((endabgabe.crc2.canvas.width - (2 * 50)) / 2, endabgabe.crc2.canvas.height - (2 * 50));
            endabgabe.crc2.moveTo(0, 90);
            endabgabe.crc2.lineTo(128, 90);
            endabgabe.crc2.moveTo(128, 90);
            endabgabe.crc2.lineTo(128, (endabgabe.crc2.canvas.height - 90 - 2 * 50));
            endabgabe.crc2.moveTo(128, (endabgabe.crc2.canvas.height - 90 - 2 * 50));
            endabgabe.crc2.lineTo(0, (endabgabe.crc2.canvas.height - 90 - 2 * 50));
            endabgabe.crc2.moveTo(0, 178);
            endabgabe.crc2.lineTo(44, 178);
            endabgabe.crc2.moveTo(44, 178);
            endabgabe.crc2.lineTo(44, (endabgabe.crc2.canvas.height - 90 - 2 * 50) - 88);
            endabgabe.crc2.moveTo(44, (endabgabe.crc2.canvas.height - 90 - 2 * 50) - 88);
            endabgabe.crc2.lineTo(0, (endabgabe.crc2.canvas.height - 90 - 2 * 50) - 88);
            endabgabe.crc2.strokeStyle = "white";
            endabgabe.crc2.stroke();
            endabgabe.crc2.closePath();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc((endabgabe.crc2.canvas.width - (2 * 50)) / 2, (endabgabe.crc2.canvas.height - ((2 * endabgabe.crc2.canvas.height * 0.08))) / 2, 72, 0, 2 * Math.PI);
            endabgabe.crc2.strokeStyle = "white";
            endabgabe.crc2.stroke();
            endabgabe.crc2.closePath();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(127, 250, 30, 1.5 * Math.PI, 0.5 * Math.PI);
            endabgabe.crc2.strokeStyle = "white";
            endabgabe.crc2.stroke();
            endabgabe.crc2.closePath();
            endabgabe.crc2.restore();
            //rechte Seite
            endabgabe.crc2.save();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.translate(endabgabe.crc2.canvas.width - 50, 50);
            endabgabe.crc2.moveTo(0, 90);
            endabgabe.crc2.lineTo(-128, 90);
            endabgabe.crc2.moveTo(-128, 90);
            endabgabe.crc2.lineTo(-128, (endabgabe.crc2.canvas.height - 90 - 2 * 50));
            endabgabe.crc2.moveTo(-128, (endabgabe.crc2.canvas.height - 90 - 2 * 50));
            endabgabe.crc2.lineTo(0, (endabgabe.crc2.canvas.height - 90 - 2 * 50));
            endabgabe.crc2.moveTo(0, 178);
            endabgabe.crc2.lineTo(-44, 178);
            endabgabe.crc2.moveTo(-44, 178);
            endabgabe.crc2.lineTo(-44, (endabgabe.crc2.canvas.height - 90 - 2 * 50) - 88);
            endabgabe.crc2.moveTo(-44, (endabgabe.crc2.canvas.height - 90 - 2 * 50) - 88);
            endabgabe.crc2.lineTo(0, (endabgabe.crc2.canvas.height - 90 - 2 * 50) - 88);
            endabgabe.crc2.strokeStyle = "white";
            endabgabe.crc2.stroke();
            endabgabe.crc2.closePath();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(-127, 250, 30, 0.5 * Math.PI, 1.5 * Math.PI);
            endabgabe.crc2.strokeStyle = "white";
            endabgabe.crc2.stroke();
            endabgabe.crc2.closePath();
            endabgabe.crc2.restore();
            endabgabe.crc2.restore();
        }
    }
    endabgabe.Spielfeld = Spielfeld;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=spielfeld.js.map