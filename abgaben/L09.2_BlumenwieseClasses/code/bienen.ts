namespace aufgabe9BlumenwieseAnimiert {
    export class Bienen {
        velocity: Vector;
        position: Vector;

        constructor() {
            console.log("parameter übergeben");
            this.position = new Vector(crc2.canvas.width, 380);
            this.velocity = new Vector(0, 0);
            this.velocity.random(200, 380);

        }
        drawBiene(): void {

            //let randomX: number = (Math.random() * crc2.canvas.width) + 10;
            crc2.beginPath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 20, 0);
            gradient.addColorStop(0, "yellow");
            gradient.addColorStop(.2, "black");
            gradient.addColorStop(.4, "yellow");
            gradient.addColorStop(1, "black");
            crc2.save();
            crc2.translate(this.position.x, 380);
            crc2.ellipse(0, 0, 20, 15, Math.PI * 0.05, Math.PI * 2, 0, false);


            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.beginPath();
            crc2.ellipse(10, -23, 10, 5, Math.PI * 1.65, Math.PI * 2, 0, false);
            crc2.fillStyle = gradient;
            crc2.ellipse(18, -15, 10, 5, Math.PI * 1.8, Math.PI * 2, 0, false);

            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(-12, -4, 3, 3);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(-10, 3, 5, 0, Math.PI * 0.5);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
            crc2.restore();


        }
        move(_timeslice: number): void {
            console.log("move");
            let offset: Vector = new Vector(this.velocity.x, 380);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            console.log(this.position);
        }
    }

}
