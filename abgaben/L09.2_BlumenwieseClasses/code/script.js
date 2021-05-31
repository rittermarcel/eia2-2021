"use strict";
var aufgabe9BlumenwieseAnimiert;
(function (aufgabe9BlumenwieseAnimiert) {
    window.addEventListener("load", handleLoad);
    let bienen = [];
    let clouds = [];
    let imgData;
    function handleLoad(_event) {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        aufgabe9BlumenwieseAnimiert.crc2 = canvas.getContext("2d");
        aufgabe9BlumenwieseAnimiert.drawBackground();
        createMountains();
        createClouds(1);
        createTrees(15);
        createBienen(3);
        createFlower1(30);
        createFlower2(30);
        imgData = aufgabe9BlumenwieseAnimiert.crc2.getImageData(0, 0, aufgabe9BlumenwieseAnimiert.crc2.canvas.width, aufgabe9BlumenwieseAnimiert.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    function createMountains() {
        let horizon = aufgabe9BlumenwieseAnimiert.crc2.canvas.height * 0.5;
        let mountains = new aufgabe9BlumenwieseAnimiert.Mountains(new aufgabe9BlumenwieseAnimiert.Vector(0, horizon), 90, 150, "grey", "white");
        mountains.drawMountains();
    }
    function createBienen(anzahlBienen) {
        for (let i = 0; i < anzahlBienen; i++) {
            let biene = new aufgabe9BlumenwieseAnimiert.Bienen();
            bienen.push(biene);
        }
    }
    function createTrees(anzahlTrees) {
        for (let i = 0; i < anzahlTrees; i++) {
            let trees = new aufgabe9BlumenwieseAnimiert.Trees();
            trees.drawTrees();
        }
    }
    function createFlower1(anzahlFlower) {
        for (let i = 0; i < anzahlFlower; i++) {
            let flower1 = new aufgabe9BlumenwieseAnimiert.Flower("yellow");
            flower1.drawFlower1();
        }
    }
    function createFlower2(anzahlFlower) {
        for (let i = 0; i < anzahlFlower; i++) {
            let flower1 = new aufgabe9BlumenwieseAnimiert.Flower("purple");
            flower1.drawFlower2();
        }
    }
    function createClouds(anzahlClouds) {
        for (let i = 0; i < anzahlClouds; i++) {
            let cloud = new aufgabe9BlumenwieseAnimiert.Cloud();
            clouds.push(cloud);
        }
    }
    function update() {
        console.log("Update");
        aufgabe9BlumenwieseAnimiert.crc2.putImageData(imgData, 0, 0);
        for (let biene of bienen) {
            biene.move(1 / 100);
            biene.drawBiene();
        }
        for (let cloud of clouds) {
            cloud.move(1 / 50);
            cloud.drawCloud();
        }
    }
})(aufgabe9BlumenwieseAnimiert || (aufgabe9BlumenwieseAnimiert = {}));
//# sourceMappingURL=script.js.map