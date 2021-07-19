"use strict";
var endabgabe;
(function (endabgabe) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new endabgabe.Vector(0, 0);
        }
        move(_position) {
            // console.log("Moveable move");
            let velocity;
            let differencex = this.position.x - _position.x;
            let differencey = this.position.y - _position.y;
            let gesamt = Math.abs(differencex + differencey) / 2;
            if (_position.x > this.position.x && gesamt < 40 || _position.x < this.position.x && gesamt < 40) {
                velocity = 1;
            }
            else {
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
        movePlayer(_position) {
            if (this.teamNumber === 1) {
                _position.x -= 20;
                _position.y -= 19;
            }
            else {
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
        movePlayerBack(_position) {
            if (this.position.x < _position.x)
                this.position.x += this.velocity;
            if (this.position.y < _position.y)
                this.position.y += this.velocity;
            if (this.position.x > _position.x)
                this.position.x -= this.velocity;
            if (this.position.y > _position.y)
                this.position.y -= this.velocity;
        }
    }
    endabgabe.Moveable = Moveable;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=moveable.js.map