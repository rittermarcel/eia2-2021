namespace endabgabe {
    export class Spielfeld {
        public drawSpielfeld(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(50, 50);
            crc2.moveTo(0, 0);
            crc2.lineTo(crc2.canvas.width - (2 * 50), 0);
            crc2.moveTo(crc2.canvas.width - (2 * 50), 0);
            crc2.lineTo(crc2.canvas.width - (2 * 50), crc2.canvas.height - (2 * 50));
            crc2.moveTo(crc2.canvas.width - (2 * 50), crc2.canvas.height - (2 * 50));
            crc2.lineTo(0, crc2.canvas.height - (2 * 50));
            crc2.moveTo(0, crc2.canvas.height - (2 * 50));
            crc2.lineTo(0, 0);

            crc2.moveTo((crc2.canvas.width - (2 * 50)) / 2, 0);
            crc2.lineTo((crc2.canvas.width - (2 * 50)) / 2, crc2.canvas.height - (2 * 50));

            crc2.moveTo(0, 90);
            crc2.lineTo(128, 90);
            crc2.moveTo(128, 90);
            crc2.lineTo(128, (crc2.canvas.height - 90 - 2 * 50));
            crc2.moveTo(128,  (crc2.canvas.height - 90 - 2 * 50));
            crc2.lineTo(0,  (crc2.canvas.height - 90 - 2 * 50));

            crc2.moveTo(0, 178);
            crc2.lineTo(44, 178);
            crc2.moveTo(44, 178);
            crc2.lineTo(44, (crc2.canvas.height - 90 - 2 * 50) - 88);
            crc2.moveTo(44, (crc2.canvas.height - 90 - 2 * 50) - 88);
            crc2.lineTo(0, (crc2.canvas.height - 90 - 2 * 50) - 88);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc((crc2.canvas.width - (2 * 50)) / 2, (crc2.canvas.height - ((2 * crc2.canvas.height * 0.08))) / 2, 72, 0, 2 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(127,  250, 30, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();


            //rechte Seite
            crc2.save();
            crc2.beginPath();
            crc2.translate(crc2.canvas.width - 50, 50);
            crc2.moveTo(0, 90);
            crc2.lineTo(-128, 90);
            crc2.moveTo(-128, 90);
            crc2.lineTo(-128, (crc2.canvas.height - 90 - 2 * 50));
            crc2.moveTo(-128, (crc2.canvas.height - 90 - 2 * 50));
            crc2.lineTo(0, (crc2.canvas.height - 90 - 2 * 50));

            crc2.moveTo(0, 178);
            crc2.lineTo(-44, 178);
            crc2.moveTo(-44, 178);
            crc2.lineTo(-44, (crc2.canvas.height - 90 - 2 * 50) - 88);
            crc2.moveTo(-44, (crc2.canvas.height - 90 - 2 * 50) - 88);
            crc2.lineTo(0, (crc2.canvas.height - 90 - 2 * 50) - 88);

            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(-127, 250, 30, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            crc2.restore();
        }

    }




}