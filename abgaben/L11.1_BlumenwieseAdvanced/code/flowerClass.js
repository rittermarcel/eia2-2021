"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class FlowerClass {
        constructor() {
            this.velocity = new BlumenwieseAdvanced.Vector(0, 0);
            this.velocity.random(2, 20);
        }
    }
    BlumenwieseAdvanced.FlowerClass = FlowerClass;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=flowerClass.js.map