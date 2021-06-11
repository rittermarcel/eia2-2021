"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
    class Cloud extends BlumenwiesePolymorphie.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwiesePolymorphie.Vector(BlumenwiesePolymorphie.crc2.canvas.width, 90);
            this.velocity = new BlumenwiesePolymorphie.Vector(0, 0);
            this.velocity.random(200, 90);
            this.size = new BlumenwiesePolymorphie.Vector(100, 50);
        }
        draw() {
            let particles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = BlumenwiesePolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            BlumenwiesePolymorphie.crc2.save();
            BlumenwiesePolymorphie.crc2.translate(this.position.x, this.position.y);
            BlumenwiesePolymorphie.crc2.fillStyle = gradient;
            for (let i = 0; i < particles; i++) {
                BlumenwiesePolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                BlumenwiesePolymorphie.crc2.translate(x, y);
                BlumenwiesePolymorphie.crc2.fill(particle);
                BlumenwiesePolymorphie.crc2.restore();
            }
            BlumenwiesePolymorphie.crc2.restore();
        }
    }
    BlumenwiesePolymorphie.Cloud = Cloud;
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=cloud.js.map