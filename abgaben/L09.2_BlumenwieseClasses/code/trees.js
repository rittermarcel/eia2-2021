"use strict";
var aufgabe9BlumenwieseAnimiert;
(function (aufgabe9BlumenwieseAnimiert) {
    class Trees {
        drawTrees() {
            let x = (Math.random() * aufgabe9BlumenwieseAnimiert.crc2.canvas.width) + 5;
            let horizon = aufgabe9BlumenwieseAnimiert.crc2.canvas.height * 0.5;
            let nParticles = 40;
            let maxRadius = 15;
            let branch = new Path2D();
            let yDifference = -(Math.random() * 20);
            let abstand = (Math.random() * 50) + 40;
            aufgabe9BlumenwieseAnimiert.crc2.save();
            aufgabe9BlumenwieseAnimiert.crc2.translate(x, horizon + yDifference);
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = "brown";
            aufgabe9BlumenwieseAnimiert.crc2.fillRect(0, 0, 10, 40);
            aufgabe9BlumenwieseAnimiert.crc2.restore();
            x = x + abstand;
            for (let i = 0; i < nParticles; i++) {
                let sizeY = -(Math.random() * 60);
                let xPosition = (Math.random()) * 10;
                let yPosition = -(Math.random() * sizeY);
                aufgabe9BlumenwieseAnimiert.crc2.save();
                branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
                aufgabe9BlumenwieseAnimiert.crc2.fillStyle = "green";
                aufgabe9BlumenwieseAnimiert.crc2.translate(x + xPosition - abstand, horizon - maxRadius - yPosition);
                aufgabe9BlumenwieseAnimiert.crc2.fill(branch);
                aufgabe9BlumenwieseAnimiert.crc2.restore();
            }
        }
    }
    aufgabe9BlumenwieseAnimiert.Trees = Trees;
})(aufgabe9BlumenwieseAnimiert || (aufgabe9BlumenwieseAnimiert = {}));
//# sourceMappingURL=trees.js.map