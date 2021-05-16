namespace blumenwiese {
    interface Vector {
        x: number;
        y: number;
    }
    console.log("start");
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let horizon: number = crc2.canvas.height * 0.5;

        drawBackground();
        drawCloud({ x: 570, y: 90 }, { x: 100, y: 50 });
        drawMountains({ x: 0, y: horizon }, 90, 150, "grey", "white");
        drawTrees(15, { x: 10, y: horizon });
        drawFlower1({ x: 0, y: 400 }, "yellow");
        drawFlower2({ x: 10, y: 450 }, "purple");
    }
    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCloud(_position: Vector, _size: Vector): void {
        let particles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let i: number = 0; i < particles; i++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 30;
        let stepMax: number = 80;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }
    function drawTrees(numberTrees: number, position: Vector): void {
        let x: number = position.x;

        let nParticles: number = 40;
        let maxRadius: number = 15;
        let branch: Path2D = new Path2D();

        for (let y: number = 0; y < numberTrees; y++) {
            let yDifference: number = - (Math.random() * 20);
            let abstand: number = (Math.random() * 50) + 40;
            crc2.save();
            crc2.translate(x, position.y + yDifference);
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
                crc2.translate(x + xPosition - abstand, position.y - maxRadius - yPosition);
                crc2.fill(branch);
                crc2.restore();

            }
        }
    }
    function drawFlower1(position: Vector, color: string | CanvasGradient | CanvasPattern): void {
        let x: number = position.x;
        let stepMin: number = 15;
        let stepMax: number = 40;

        do {
            let y: number = -(Math.random() * 30) + 5;
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x, position.y);
            crc2.lineTo(x, position.y + y);
            crc2.closePath();
            crc2.strokeStyle = "brown";
            crc2.stroke();
            crc2.restore();

            crc2.save();   
            let rotation: number = 0;
            for (let i: number = 0; i < 5; i++) {
                crc2.save();   
                rotation = rotation + 30;
                crc2.ellipse(x, position.y - 10 + y, 10, 5, rotation, Math.PI * 2, 0, false);
                crc2.restore();
            }
            crc2.fillStyle = color;
            crc2.fill();
            crc2.restore();
            x += stepMin + Math.random() * (stepMax - stepMin);
        } while (x < crc2.canvas.width);
    }
    function drawFlower2(position: Vector, color: string | CanvasGradient | CanvasPattern): void {
        let x: number = position.x;
        let stepMin: number = 15;
        let stepMax: number = 40;

        do {
            let y: number = -(Math.random() * 15 + 5);
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x, position.y);
            crc2.lineTo(x, position.y + y);
            crc2.closePath();
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.restore();

            crc2.save();
            // crc2.arc(x, position.y - 5 + y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = color;
            crc2.ellipse(x, position.y + y - 11, 10, 3, Math.PI * 1 / 2, Math.PI * 2, 0, false);


            crc2.fill();
            crc2.restore();
            x += stepMin + Math.random() * (stepMax - stepMin);
        } while (x < crc2.canvas.width);
    }
}