"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class FlowerClass {
        constructor() {
            //
        }
        nectar() {
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.rect(this.position.x - 4, this.position.y + 5, 8, 25);
            BlumenwieseAdvanced.crc2.fillStyle = "lightblue";
            BlumenwieseAdvanced.crc2.strokeStyle = "black";
            BlumenwieseAdvanced.crc2.stroke();
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.restore();
            this.nectarFill();
        }
        nectarFill() {
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.position.x - 4, this.position.y - 5);
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.rect(0, 33 - BlumenwieseAdvanced.nectarPosition, 8, 2 + BlumenwieseAdvanced.nectarPosition);
            BlumenwieseAdvanced.crc2.fillStyle = "yellow";
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.restore();
        }
    }
    BlumenwieseAdvanced.FlowerClass = FlowerClass;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=flowerClass.js.map