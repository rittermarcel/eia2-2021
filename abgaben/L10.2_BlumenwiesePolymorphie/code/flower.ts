namespace BlumenwiesePolymorphie {
    export class Flower {
        color: string | CanvasGradient | CanvasPattern;
        velocity: Vector;
        constructor(_color: string | CanvasGradient | CanvasPattern) {
            this.color = _color;
        }
        drawFlower1(): void {
            let x: number = (Math.random() * crc2.canvas.width) + 5;
            let yPosition: number = 470;

            let y: number = -(Math.random() * 30) + 5;
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x, yPosition);
            crc2.lineTo(x, yPosition + y);
            crc2.closePath();
            crc2.strokeStyle = "brown";
            crc2.stroke();
            let rotation: number = 0;
            crc2.beginPath();
            for (let i: number = 0; i < 5; i++) {

                rotation = rotation + 30;
                crc2.ellipse(x, yPosition - 10 + y, 10, 5, rotation, Math.PI * 2, 0, false);

            }
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();
        }

        drawFlower2(): void {
            let yPosition: number = 520;
            let x: number = (Math.random() * crc2.canvas.width) + 5;
           
            crc2.save();

            let y: number = -(Math.random() * 15 + 5);

            crc2.beginPath();
            crc2.moveTo(x, yPosition);
            crc2.lineTo(x, yPosition + y);
            crc2.strokeStyle = "white";

            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.ellipse(x, yPosition + y - 11, 10, 3, Math.PI * 1 / 2, Math.PI * 2, 0, false);

            crc2.closePath();
            crc2.fill();

            crc2.restore();
        }
    }
}
