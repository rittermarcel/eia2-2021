namespace GenerativeKunst {
    console.log("start");
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.canvas.width = canvas.clientWidth;
        crc2.canvas.height = canvas.clientHeight;
        document.getElementById("refresh")?.addEventListener("click", refresh);
        draw(crc2);
    }
    function draw(crc2: CanvasRenderingContext2D): void {
        crc2.fillStyle = "#98ff98";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i: number = 0; i < 100; i++) {

            let x: number = Math.floor(Math.random() * crc2.canvas.width);
            let y: number = Math.floor(Math.random() * crc2.canvas.height);
            let radius: number = Math.floor(Math.random() * 20) + 10;

            let r: number = Math.floor(Math.random() * 255);
            let g: number = Math.floor(Math.random() * 255);
            let b: number = Math.floor(Math.random() * 255);

            let r2: number = Math.floor(Math.random() * 255);
            let g2: number = Math.floor(Math.random() * 255);
            let b2: number = Math.floor(Math.random() * 255);

            crc2.beginPath();
            crc2.ellipse(x, y, radius / 1.5, radius, 0, Math.PI * 2, 0, false);
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, radius * 2);
            gradient.addColorStop(0, "rgb(" + r + "," + g + "," + b + ")");
            gradient.addColorStop(1, "rgb(" + r2 + "," + g2 + "," + b2 + ")");
            crc2.fillStyle = gradient;

            crc2.fill();

            crc2.moveTo(x, y + radius);
            crc2.lineTo(x + 3, y + radius + 20);
            crc2.lineTo(x - 1, y + radius + 40);
            crc2.lineTo(x - 6, y + radius + 60);
            crc2.lineTo(x, y + radius + 80);
            crc2.stroke();
            crc2.closePath();

        }
    }

    function refresh(_event: Event): void {
        window.location.reload();
    }
}