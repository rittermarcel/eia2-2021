"use strict";
var BlumenwiesePolymorphie;
(function (BlumenwiesePolymorphie) {
    window.addEventListener("load", handleLoad);
    let bienen = [];
    let clouds = [];
    let imgData;
    function handleLoad(_event) {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        BlumenwiesePolymorphie.crc2 = canvas.getContext("2d");
        BlumenwiesePolymorphie.drawBackground();
        createMountains();
        createClouds(1);
        createTrees(15);
        createBienen(3);
        createFlower1(30);
        createFlower2(30);
        imgData = BlumenwiesePolymorphie.crc2.getImageData(0, 0, BlumenwiesePolymorphie.crc2.canvas.width, BlumenwiesePolymorphie.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    function createMountains() {
        let horizon = BlumenwiesePolymorphie.crc2.canvas.height * 0.5;
        let mountains = new BlumenwiesePolymorphie.Mountains(new BlumenwiesePolymorphie.Vector(0, horizon), 90, 150, "grey", "white");
        mountains.drawMountains();
    }
    function createBienen(anzahlBienen) {
        for (let i = 0; i < anzahlBienen; i++) {
            let biene = new BlumenwiesePolymorphie.Bienen();
            bienen.push(biene);
        }
    }
    function createTrees(anzahlTrees) {
        for (let i = 0; i < anzahlTrees; i++) {
            let trees = new BlumenwiesePolymorphie.Trees();
            trees.drawTrees();
        }
    }
    function createFlower1(anzahlFlower) {
        for (let i = 0; i < anzahlFlower; i++) {
            let flower1 = new BlumenwiesePolymorphie.Flower("yellow");
            flower1.drawFlower1();
        }
    }
    function createFlower2(anzahlFlower) {
        for (let i = 0; i < anzahlFlower; i++) {
            let flower1 = new BlumenwiesePolymorphie.Flower("purple");
            flower1.drawFlower2();
        }
    }
    function createClouds(anzahlClouds) {
        for (let i = 0; i < anzahlClouds; i++) {
            let cloud = new BlumenwiesePolymorphie.Cloud();
            clouds.push(cloud);
        }
    }
    function update() {
        console.log("Update");
        BlumenwiesePolymorphie.crc2.putImageData(imgData, 0, 0);
        for (let biene of bienen) {
            biene.move(1 / 100);
            biene.drawBiene();
        }
        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.drawCloud();
        }
    }
})(BlumenwiesePolymorphie || (BlumenwiesePolymorphie = {}));
//# sourceMappingURL=script.js.map