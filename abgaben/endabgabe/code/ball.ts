namespace endabgabe {
    export class Ball extends Moveable {
        color: string;
        constructor(_position: Vector, _color: string, _speed: number) {
            super();
            this.velocity = _speed;
            this.position = _position;
            this.color = _color;
        }
        public draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }
    }
}