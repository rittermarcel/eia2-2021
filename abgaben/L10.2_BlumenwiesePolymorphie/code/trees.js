"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
    class Trees {
        drawTrees() {
            let x = (Math.random() * BlumenwiesePolymorphie.crc2.canvas.width) + 5;
            let horizon = BlumenwiesePolymorphie.crc2.canvas.height * 0.5;
            let nParticles = 40;
            let maxRadius = 15;
            let branch = new Path2D();
            let yDifference = -(Math.random() * 20);
            let abstand = (Math.random() * 50) + 40;
            BlumenwiesePolymorphie.crc2.save();
            BlumenwiesePolymorphie.crc2.translate(x, horizon + yDifference);
            BlumenwiesePolymorphie.crc2.fillStyle = "brown";
            BlumenwiesePolymorphie.crc2.fillRect(0, 0, 10, 40);
            BlumenwiesePolymorphie.crc2.restore();
            x = x + abstand;
            for (let i = 0; i < nParticles; i++) {
                let sizeY = -(Math.random() * 60);
                let xPosition = (Math.random()) * 10;
                let yPosition = -(Math.random() * sizeY);
                BlumenwiesePolymorphie.crc2.save();
                branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
                BlumenwiesePolymorphie.crc2.fillStyle = "green";
                BlumenwiesePolymorphie.crc2.translate(x + xPosition - abstand, horizon - maxRadius - yPosition);
                BlumenwiesePolymorphie.crc2.fill(branch);
                BlumenwiesePolymorphie.crc2.restore();
            }
        }
    }
    BlumenwiesePolymorphie.Trees = Trees;
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=trees.js.map