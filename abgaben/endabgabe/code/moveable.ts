namespace endabgabe {
    export abstract class Moveable {
        public trickotNummer: number;
        trickotFarbe: string;
        position: Vector;
        velocity: number;
        teamNumber: number;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

        }
        public move(_position: Vector): void {
            // console.log("Moveable move");
            let velocity: number;
            let differencex: number = this.position.x - _position.x;
            let differencey: number = this.position.y - _position.y;
            let gesamt: number = Math.abs(differencex + differencey) / 2;
            if (_position.x > this.position.x && gesamt < 40 || _position.x < this.position.x && gesamt < 40) {
                velocity = 1;
            } else {
                velocity = this.velocity;
            }

            if (this.position.x <= _position.x)
                this.position.x += velocity;
            if (this.position.y <= _position.y)
                this.position.y += velocity;
            if (this.position.x >= _position.x)
                this.position.x -= velocity;
            if (this.position.y >= _position.y)
                this.position.y -= velocity;
            
        }


        public movePlayer(_position: Vector): void {
            if (this.teamNumber === 1) {
                _position.x -= 20;
                _position.y -= 19;
            } else {
                _position.x += 8;
                _position.y -= 19;
            }

            // console.log("Moveable move");

            if (this.position.x < _position.x)
                this.position.x += this.velocity;
            if (this.position.y < _position.y)
                this.position.y += this.velocity;
            if (this.position.x > _position.x)
                this.position.x -= this.velocity;
            if (this.position.y > _position.y)
                this.position.y -= this.velocity;
        }
        public movePlayerBack(_position: Vector): void {

            if (this.position.x < _position.x)
                this.position.x += this.velocity;
            if (this.position.y < _position.y)
                this.position.y += this.velocity;
            if (this.position.x > _position.x)
                this.position.x -= this.velocity;
            if (this.position.y > _position.y)
                this.position.y -= this.velocity;
        }
        public abstract draw(): void;
    }



}