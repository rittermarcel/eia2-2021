namespace aufgabe9BlumenwieseAnimiert {
    export class Trees {
        numberTrees: number;
        position: Vector;
        constructor(_numberTrees: number, _position: Vector) {
            this.numberTrees = _numberTrees;
            this.position = _position;
        }
    drawTrees(): void {
        let x: number = this.position.x;

        let nParticles: number = 40;
        let maxRadius: number = 15;
        let branch: Path2D = new Path2D();

        for (let y: number = 0; y < this.numberTrees; y++) {
            let yDifference: number = - (Math.random() * 20);
            let abstand: number = (Math.random() * 50) + 40;
            crc2.save();
            crc2.translate(x, this.position.y + yDifference);
            crc2.fillStyle = "brown";
            crc2.fillRect(0, 0, 10, 40);
            crc2.restore();
            x = x + abstand;

            for (let i: number = 0; i < nParticles; i++) {
                let sizeY: number = - (Math.random() * 60);
                let xPosition: number = (Math.random()) * 10;
                let yPosition: number = - (Math.random() * sizeY);
                crc2.save();
                branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.translate(x + xPosition - abstand, this.position.y - maxRadius - yPosition);
                crc2.fill(branch);
                crc2.restore();

            }
        }
    }
}
}