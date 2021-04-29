"use strict";
var memorySettings;
(function (memorySettings) {
    console.log("start");
    let cardArray = [];
    let gameCardArray = [];
    let enterTime;
    let leaveTime;
    let counter = 0;
    let cardCounter = 0;
    let cardEvent1;
    let cardEvent2;
    let gamecardAmount = 5;
    let cardSize = 10;
    let colorBackground;
    let colorCard;
    let colorFont;
    let fontFamily;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        let startGame = document.querySelector("button#startGame");
        startGame.addEventListener("click", fillGameCardArray);
        fillCardArray();
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            switch (entry[0]) {
                case "Stepper":
                    gamecardAmount = Number(entry[1]);
                    break;
                case "Slider":
                    cardSize = Number(entry[1]);
                    break;
                case "ColorBackground":
                    colorBackground = String(entry[1]);
                    break;
                case "ColorCard":
                    colorCard = String(entry[1]);
                    break;
                case "ColorFont":
                    colorFont = String(entry[1]);
                    break;
                case "Radiogroup":
                    fontFamily = String(item.getAttribute("fontfamily"));
                    break;
            }
        }
    }
    function fillCardArray() {
        for (let i = 1; i <= 20; i++) {
            cardArray.push(i);
        }
    }
    function fillGameCardArray() {
        let input = gamecardAmount;
        for (let i = 0; i < input; i++) {
            let random = cardArray[Math.floor(Math.random() * cardArray.length)];
            gameCardArray.push(random);
            gameCardArray.push(random);
            for (let y = 0; y < cardArray.length; y++) {
                if (cardArray[y] === random) {
                    cardArray.splice(y, 1);
                }
            }
        }
        randomizeArray();
        console.log("geheimer spicker :) " + gameCardArray);
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
        let game = document.querySelector("div#game");
        game.style.backgroundColor = colorBackground;
        for (let i = 0; i < gameCardArray.length; i++) {
            let card = document.createElement("span");
            card.textContent = "?";
            card.setAttribute("id", JSON.stringify(gameCardArray[i]));
            card.style.backgroundColor = colorCard;
            card.style.color = colorFont;
            card.style.fontSize = cardSize + "em";
            card.style.fontFamily = fontFamily;
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
})(memorySettings || (memorySettings = {}));
//# sourceMappingURL=script.js.map