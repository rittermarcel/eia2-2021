"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Trees {
        drawTrees() {
            let x = (Math.random() * BlumenwieseAdvanced.crc2.canvas.width) + 5;
            let horizon = BlumenwieseAdvanced.crc2.canvas.height * 0.5;
            let nParticles = 40;
            let maxRadius = 15;
            let branch = new Path2D();
            let yDifference = -(Math.random() * 20);
            let abstand = (Math.random() * 50) + 40;
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(x, horizon + yDifference);
            BlumenwieseAdvanced.crc2.fillStyle = "brown";
            BlumenwieseAdvanced.crc2.fillRect(0, 0, 10, 40);
            BlumenwieseAdvanced.crc2.restore();
            x = x + abstand;
            for (let i = 0; i < nParticles; i++) {
                let sizeY = -(Math.random() * 60);
                let xPosition = (Math.random()) * 10;
                let yPosition = -(Math.random() * sizeY);
                BlumenwieseAdvanced.crc2.save();
                branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
                BlumenwieseAdvanced.crc2.fillStyle = "green";
                BlumenwieseAdvanced.crc2.translate(x + xPosition - abstand, horizon - maxRadius - yPosition);
                BlumenwieseAdvanced.crc2.fill(branch);
                BlumenwieseAdvanced.crc2.restore();
            }
        }
    }
    BlumenwieseAdvanced.Trees = Trees;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=trees.js.map