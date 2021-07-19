"use strict";
var endabgabe;
(function (endabgabe) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    endabgabe.Vector = Vector;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=vector.js.map