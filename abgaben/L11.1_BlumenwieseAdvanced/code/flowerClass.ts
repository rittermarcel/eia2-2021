namespace BlumenwieseAdvanced {
    export abstract class FlowerClass {
        public position: Vector;
        public color: string | CanvasGradient | CanvasPattern;

        constructor() {
//
        }
      
        public abstract draw(): void;
      
        public nectar(): void {
            crc2.save();
            crc2.beginPath();
            crc2.rect(this.position.x - 4, this.position.y + 5, 8, 25);
            crc2.fillStyle = "lightblue";
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            this.nectarFill();
        }
        public nectarFill(): void {
            crc2.save();
            crc2.translate(this.position.x - 4 , this.position.y - 5);
            crc2.beginPath();
            crc2.rect(0, 33 - nectarPosition , 8, 2 + nectarPosition);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            
        }
    }}

