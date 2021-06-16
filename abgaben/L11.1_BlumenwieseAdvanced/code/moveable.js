"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseAdvanced.Vector(0, 0);
            this.velocity = new BlumenwieseAdvanced.Vector(0, 0);
            this.velocity.random(200, 380);
        }
        move(_timeslice) {
            let offset = new BlumenwieseAdvanced.Vector(this.velocity.x, 90);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += BlumenwieseAdvanced.crc2.canvas.width;
            if (this.position.x > BlumenwieseAdvanced.crc2.canvas.width)
                this.position.x -= BlumenwieseAdvanced.crc2.canvas.width;
        }
    }
    BlumenwieseAdvanced.Moveable = Moveable;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=moveable.js.map