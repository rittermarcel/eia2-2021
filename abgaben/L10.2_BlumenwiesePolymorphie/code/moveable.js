"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwiesePolymorphie.Vector(0, 0);
            this.velocity = new BlumenwiesePolymorphie.Vector(0, 0);
            this.velocity.random(200, 380);
        }
        move(_timeslice) {
            let offset = new BlumenwiesePolymorphie.Vector(this.velocity.x, 90);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += BlumenwiesePolymorphie.crc2.canvas.width;
            if (this.position.x > BlumenwiesePolymorphie.crc2.canvas.width)
                this.position.x -= BlumenwiesePolymorphie.crc2.canvas.width;
        }
        draw() {
            // console.log("Moveable move");
        }
    }
    BlumenwiesePolymorphie.Moveable = Moveable;
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=moveable.js.map