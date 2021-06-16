"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Cloud extends BlumenwieseAdvanced.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new BlumenwieseAdvanced.Vector(BlumenwieseAdvanced.crc2.canvas.width, 90);
            this.velocity = new BlumenwieseAdvanced.Vector(0, 0);
            this.velocity.random(200, 90);
            this.size = new BlumenwieseAdvanced.Vector(100, 50);
        }
        draw() {
            let particles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = BlumenwieseAdvanced.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdvanced.crc2.fillStyle = gradient;
            for (let i = 0; i < particles; i++) {
                BlumenwieseAdvanced.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                BlumenwieseAdvanced.crc2.translate(x, y);
                BlumenwieseAdvanced.crc2.fill(particle);
                BlumenwieseAdvanced.crc2.restore();
            }
            BlumenwieseAdvanced.crc2.restore();
        }
    }
    BlumenwieseAdvanced.Cloud = Cloud;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=cloud.js.map