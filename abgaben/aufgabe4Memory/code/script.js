"use strict";
var memory;
(function (memory) {
    console.log("start");
    let cardArray = [];
    let gameCardArray = [];
    let enterTime;
    let leaveTime;
    let counter = 0;
    let cardCounter = 0;
    let cardEvent1;
    let cardEvent2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let startGame = document.querySelector("button#startGame");
        startGame.addEventListener("click", getUserInput);
        fillCardArray();
    }
    function fillCardArray() {
        for (let i = 1; i <= 20; i++) {
            cardArray.push(i);
        }
        console.log(cardArray);
    }
    function getUserInput() {
        let input = window.prompt("Anzahl Karten", "5");
        let inputNumber = parseInt(input, 10);
        if (inputNumber < 4 || inputNumber > 20) {
            getUserInput();
        }
        else {
            fillGameCardArray(inputNumber);
        }
    }
    function fillGameCardArray(input) {
        for (let i = 0; i < input; i++) {
            let random = cardArray[Math.floor(Math.random() * cardArray.length)];
            console.log("random " + random);
            gameCardArray.push(random);
            gameCardArray.push(random);
            for (let y = 0; y < cardArray.length; y++) {
                if (cardArray[y] === random) {
                    cardArray.splice(y, 1);
                }
            }
        }
        console.log(gameCardArray);
        randomizeArray();
        console.log("random" + gameCardArray);
    }
    function randomizeArray() {
        let currentIndex = gameCardArray.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = gameCardArray[currentIndex];
            gameCardArray[currentIndex] = gameCardArray[randomIndex];
            gameCardArray[randomIndex] = temporaryValue;
        }
        loadCards();
    }
    function loadCards() {
        let game = document.querySelector("div#cards");
        for (let i = 0; i < gameCardArray.length; i++) {
            let card = document.createElement("span");
            card.textContent = "?";
            card.setAttribute("id", JSON.stringify(gameCardArray[i]));
            game.appendChild(card);
            card.addEventListener("pointerdown", showCard);
        }
        enterTime = new Date().getTime();
    }
    function showCard(_event) {
        counter++;
        let highlightedElement = _event.target;
        if (counter == 1) {
            highlightedElement.textContent = highlightedElement.getAttribute("id");
            cardEvent1 = highlightedElement;
        }
        else if (counter == 2) {
            highlightedElement.textContent = highlightedElement.getAttribute("id");
            cardEvent2 = highlightedElement;
            if (cardEvent1.textContent === cardEvent2.textContent) {
                let parent1 = cardEvent1.parentNode;
                let parent2 = cardEvent2.parentNode;
                function delay() {
                    parent1.removeChild(cardEvent1);
                    parent2.removeChild(cardEvent2);
                }
                setTimeout(delay, 2000);
                counter = 0;
                cardCounter++;
                checkGame();
            }
            else {
                function delay() {
                    cardEvent1.textContent = "?";
                    cardEvent2.textContent = "?";
                }
                setTimeout(delay, 2000);
                counter = 0;
            }
        }
    }
    function checkGame() {
        if (cardCounter === (gameCardArray.length / 2)) {
            leaveTime = new Date().getTime();
            let time = leaveTime - enterTime;
            window.alert("Game finished, time was " + time);
            window.location.reload();
        }
    }
})(memory || (memory = {}));
//# sourceMappingURL=script.js.map