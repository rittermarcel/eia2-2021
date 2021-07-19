"use strict";
var endabgabe;
(function (endabgabe) {
    class Spieler extends endabgabe.Moveable {
        constructor(_trickotfarbe, _position, _minSpeed, _maxSpeed, _teamNumber, _trickotNummer) {
            super();
            this.colorCodes = ["brown", "black", "white"];
            this.trickotFarbe = _trickotfarbe;
            this.position = _position;
            this.minSpeed = _minSpeed;
            this.maxSpeed = _maxSpeed;
            if (_trickotNummer)
                this.trickotNummer = _trickotNummer;
            let velocity = (Math.random() * (_maxSpeed - _minSpeed)) + _minSpeed;
            this.velocity = parseFloat(velocity.toFixed(1));
            if (_teamNumber)
                this.teamNumber = _teamNumber;
            this.hautfarbe = this.colorCodes[Math.floor(Math.random() * this.colorCodes.length)];
        }
        draw() {
            endabgabe.crc2.beginPath();
            endabgabe.crc2.lineWidth = 6;
            endabgabe.crc2.fillStyle = this.trickotFarbe;
            endabgabe.crc2.rect(this.position.x, this.position.y, 15, 39);
            endabgabe.crc2.fill();
            endabgabe.crc2.closePath();
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(this.position.x + 7.5, this.position.y + 18.5, 4, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = this.hautfarbe;
            endabgabe.crc2.fill();
            endabgabe.crc2.closePath();
        }
    }
    endabgabe.Spieler = Spieler;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=spieler.js.map