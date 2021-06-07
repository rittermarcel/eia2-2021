namespace BlumenwiesePolymorphie {
    export class Cloud {
        velocity: Vector;
        position: Vector;
        size: Vector;

        constructor() {
            this.position = new Vector(crc2.canvas.width, 90);
            this.velocity = new Vector(0, 0);
            this.velocity.random(200, 90);
            this.size = new Vector(100, 50);
        }

        drawCloud(): void {
            let particles: number = 20;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let i: number = 0; i < particles; i++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random() * this.size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, 90);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }
    }
}