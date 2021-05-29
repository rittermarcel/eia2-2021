namespace aufgabe9BlumenwieseAnimiert {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let bienen: Bienen[] = [];
    let clouds: Cloud[] = [];
    let imgData: any;
    function handleLoad(_event: Event): void {
        console.log("start");
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let horizon: number = crc2.canvas.height * 0.5;
        drawBackground();
        let mountains: Mountains = new Mountains(new Vector(0, horizon), 90, 150, "grey", "white");
        mountains.drawMountains();
        let trees: Trees = new Trees(15, new Vector(10, horizon));
        trees.drawTrees();
        createClouds(1);
        let flower1: Flower = new Flower(new Vector(0, 470), "yellow");
        let flower2: Flower = new Flower(new Vector(10, 520), "purple");
        flower1.drawFlower1();
        flower2.drawFlower2();
        createBienen(3);

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);
    }


    function createBienen(anzahlBienen: number): void {
        for (let i: number = 0; i < anzahlBienen; i++) {
            let biene: Bienen = new Bienen();
            bienen.push(biene);
        }
    }
    function createClouds(anzahlClouds: number): void {
        for (let i: number = 0; i < anzahlClouds; i++) {
            let cloud: Cloud = new Cloud();
            clouds.push(cloud);
        }
    }
    function update(): void {
        console.log("Update");

        crc2.putImageData(imgData, 0, 0);

        for (let biene of bienen) {
            biene.move(1 / 100);
            biene.drawBiene();
        }
        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.drawCloud();
        }
        
        
    }
}