namespace BlumenwieseAdvanced {
    export class Mountains {
        position: Vector;
        min: number;
        max: number;
        colorLow: string;
        colorHigh: string;
        constructor(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string) {
            this.position = _position;
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }
    public drawMountains(): void {
        let stepMin: number = 30;
        let stepMax: number = 80;
        let x: number = 0;

        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -this.max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -this.min - Math.random() * (this.max - this.min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -this.max);
        gradient.addColorStop(0, this.colorLow);
        gradient.addColorStop(0.7, this.colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        
        crc2.restore();
    }
}
}