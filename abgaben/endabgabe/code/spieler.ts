namespace endabgabe {
    export class Spieler extends Moveable {

        minSpeed: number;
        maxSpeed: number;
        colorCodes: string[] = ["brown", "black", "white"];
        hautfarbe: string;
        constructor(_trickotfarbe: string, _position: Vector, _minSpeed: number, _maxSpeed: number, _teamNumber?: number, _trickotNummer?: number) {
            super();
            this.trickotFarbe = _trickotfarbe;
            this.position = _position;
            this.minSpeed = _minSpeed;
            this.maxSpeed = _maxSpeed;
            if (_trickotNummer)
            this.trickotNummer = _trickotNummer;
            let velocity: number = (Math.random() * (_maxSpeed - _minSpeed)) + _minSpeed;
            this.velocity = parseFloat(velocity.toFixed(1));
            if (_teamNumber)
            this.teamNumber = _teamNumber;
            this.hautfarbe = this.colorCodes[Math.floor(Math.random() * this.colorCodes.length)];
        }
        public draw(): void {
            crc2.beginPath();
            crc2.lineWidth = 6;
            crc2.fillStyle = this.trickotFarbe;
            crc2.rect(this.position.x, this.position.y, 15, 39);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.position.x + 7.5, this.position.y + 18.5, 4, 0, 2 * Math.PI);
            crc2.fillStyle = this.hautfarbe;
            crc2.fill();
            crc2.closePath();
        }

    }
}