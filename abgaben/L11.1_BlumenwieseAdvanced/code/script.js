"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let nectar = [];
    let imgData;
    function handleLoad(_event) {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        BlumenwieseAdvanced.crc2 = canvas.getContext("2d");
        BlumenwieseAdvanced.drawBackground();
        createMountains();
        createClouds(1);
        createTrees(15);
        createBienen(3);
        createFlower1(15);
        createFlower2(15);
        imgData = BlumenwieseAdvanced.crc2.getImageData(0, 0, BlumenwieseAdvanced.crc2.canvas.width, BlumenwieseAdvanced.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    function createMountains() {
        let horizon = BlumenwieseAdvanced.crc2.canvas.height * 0.5;
        let mountains = new BlumenwieseAdvanced.Mountains(new BlumenwieseAdvanced.Vector(0, horizon), 90, 150, "grey", "white");
        mountains.drawMountains();
    }
    function createBienen(anzahlBienen) {
        for (let i = 0; i < anzahlBienen; i++) {
            let biene = new BlumenwieseAdvanced.Bienen();
            moveables.push(biene);
        }
    }
    function createTrees(anzahlTrees) {
        for (let i = 0; i < anzahlTrees; i++) {
            let trees = new BlumenwieseAdvanced.Trees();
            trees.drawTrees();
        }
    }
    function createFlower1(anzahlFlower) {
        for (let i = 0; i < anzahlFlower; i++) {
            let flower = new BlumenwieseAdvanced.Flower("purple");
            flower.draw();
            nectar.push(flower);
        }
    }
    function createFlower2(anzahlFlower) {
        for (let i = 0; i < anzahlFlower; i++) {
            let flower1 = new BlumenwieseAdvanced.Flower1("yellow");
            flower1.draw();
            nectar.push(flower1);
        }
    }
    function createClouds(anzahlClouds) {
        for (let i = 0; i < anzahlClouds; i++) {
            let cloud = new BlumenwieseAdvanced.Cloud();
            moveables.push(cloud);
        }
    }
    function update() {
        console.log("Update");
        BlumenwieseAdvanced.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 100);
            moveable.draw();
        }
        for (let n of nectar) {
            let randomNumber = (Math.random() * 0.002);
            console.log(randomNumber);
            if (BlumenwieseAdvanced.nectarPosition <= 23) {
                BlumenwieseAdvanced.nectarPosition += randomNumber;
                n.nectarFill();
            }
            else {
                BlumenwieseAdvanced.nectarPosition = 23;
                n.nectarFill();
            }
        }
    }
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=script.js.map