namespace BlumenwieseAdvanced {
    export class Flower extends FlowerClass {
        constructor(_color: string | CanvasGradient | CanvasPattern) {
            super();
            this.color = _color;

        }


        public draw(): void {
            let yPosition: number = 520;
            let x: number = (Math.random() * crc2.canvas.width) + 30;
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

