"use strict";
var aufgabe9BlumenwieseAnimiert;
(function (aufgabe9BlumenwieseAnimiert) {
    class Cloud {
        constructor() {
            this.position = new aufgabe9BlumenwieseAnimiert.Vector(aufgabe9BlumenwieseAnimiert.crc2.canvas.width, 90);
            this.velocity = new aufgabe9BlumenwieseAnimiert.Vector(0, 0);
            this.velocity.random(200, 90);
            this.size = new aufgabe9BlumenwieseAnimiert.Vector(100, 50);
        }
        drawCloud() {
            let particles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = aufgabe9BlumenwieseAnimiert.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            aufgabe9BlumenwieseAnimiert.crc2.save();
            aufgabe9BlumenwieseAnimiert.crc2.translate(this.position.x, this.position.y);
            aufgabe9BlumenwieseAnimiert.crc2.fillStyle = gradient;
            for (let i = 0; i < particles; i++) {
                aufgabe9BlumenwieseAnimiert.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                aufgabe9BlumenwieseAnimiert.crc2.translate(x, y);
                aufgabe9BlumenwieseAnimiert.crc2.fill(particle);
                aufgabe9BlumenwieseAnimiert.crc2.restore();
            }
            aufgabe9BlumenwieseAnimiert.crc2.restore();
        }
        move(_timeslice) {
            let offset = new aufgabe9BlumenwieseAnimiert.Vector(this.velocity.x, 90);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += aufgabe9BlumenwieseAnimiert.crc2.canvas.width;
            if (this.position.x > aufgabe9BlumenwieseAnimiert.crc2.canvas.width)
                this.position.x -= aufgabe9BlumenwieseAnimiert.crc2.canvas.width;
        }
    }
    aufgabe9BlumenwieseAnimiert.Cloud = Cloud;
})(aufgabe9BlumenwieseAnimiert || (aufgabe9BlumenwieseAnimiert = {}));
//# sourceMappingURL=cloud.js.map