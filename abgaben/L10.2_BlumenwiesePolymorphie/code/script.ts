namespace BlumenwiesePolymorphie {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = [];
    let clouds: Cloud[] = [];
    let imgData: any;
    function handleLoad(_event: Event): void {
        console.log("start");
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        createMountains();
        createClouds(1);
        createTrees(15);
        createBienen(3);
        createFlower1(30);
        createFlower2(30);

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 20);
    }

    function createMountains(): void {
        let horizon: number = crc2.canvas.height * 0.5;
        let mountains: Mountains = new Mountains(new Vector(0, horizon), 90, 150, "grey", "white");
        mountains.drawMountains();
    }
    function createBienen(anzahlBienen: number): void {
        for (let i: number = 0; i < anzahlBienen; i++) {
            let biene: Bienen = new Bienen();
            moveables.push(biene);
        }
    }
    function createTrees(anzahlTrees: number): void {
        for (let i: number = 0; i < anzahlTrees; i++) {
            let trees: Trees = new Trees();
            trees.drawTrees();
        }
    }

    function createFlower1(anzahlFlower: number): void {
        for (let i: number = 0; i < anzahlFlower; i++) {
            let flower1: Flower = new Flower("yellow");
            flower1.drawFlower1();
        }
    }
    function createFlower2(anzahlFlower: number): void {
        for (let i: number = 0; i < anzahlFlower; i++) {
            let flower1: Flower = new Flower("purple");
            flower1.drawFlower2();
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

        for (let biene of moveables) {
            biene.move(1 / 100);
            biene.draw();
        }
        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.drawCloud();
        }
        
        
    }
}