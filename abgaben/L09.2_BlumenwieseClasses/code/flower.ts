namespace aufgabe9BlumenwieseAnimiert {
    export class Flower {
        position: Vector;
        color: string | CanvasGradient | CanvasPattern;
        velocity: Vector;
        constructor(_position: Vector, _color: string | CanvasGradient | CanvasPattern) {
            this.position = _position;
            this.color = _color;
        }
    drawFlower1(): void {
        let x: number = this.position.x;
        let stepMin: number = 15;
        let stepMax: number = 40;

        do {
            let y: number = -(Math.random() * 30) + 5;
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x, this.position.y);
            crc2.lineTo(x, this.position.y + y);
            crc2.closePath();
            crc2.strokeStyle = "brown";
            crc2.stroke();
            let rotation: number = 0;
            crc2.beginPath();
            for (let i: number = 0; i < 5; i++) {
                
                rotation = rotation + 30;
                crc2.ellipse(x, this.position.y - 10 + y, 10, 5, rotation, Math.PI * 2, 0, false);
                
            }
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            x += stepMin + Math.random() * (stepMax - stepMin);
        } while (x < crc2.canvas.width);
        crc2.restore();
    }

    drawFlower2(): void {
        let x: number = this.position.x;
        let stepMin: number = 15;
        let stepMax: number = 40;
        crc2.save();
        do {
            let y: number = -(Math.random() * 15 + 5);
            
            crc2.beginPath();
            crc2.moveTo(x, this.position.y);
            crc2.lineTo(x, this.position.y + y);
            crc2.strokeStyle = "white";
            
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.ellipse(x, this.position.y + y - 11, 10, 3, Math.PI * 1 / 2, Math.PI * 2, 0, false);

            crc2.closePath();
            crc2.fill();
           
            x += stepMin + Math.random() * (stepMax - stepMin);
        } while (x < crc2.canvas.width);
        crc2.restore();
    }
}
}
