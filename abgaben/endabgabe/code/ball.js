"use strict";
var endabgabe;
(function (endabgabe) {
    class Ball extends endabgabe.Moveable {
        constructor(_position, _color, _speed) {
            super();
            this.velocity = _speed;
            this.position = _position;
            this.color = _color;
        }
        draw() {
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = this.color;
            endabgabe.crc2.fill();
            endabgabe.crc2.closePath();
        }
    }
    endabgabe.Ball = Ball;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=ball.js.map