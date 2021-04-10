"use strict";
var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("Start");
    let chosenCharacter = "A";
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    window.addEventListener("load", handleLoad);
    let highlightedElement;
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        let letters = document.querySelector("div#letters");
        mail.addEventListener("click", chooseOption);
        document.addEventListener("keydown", chooseCharacter);
        let left = 20;
        let top = 2;
        for (let i = 0; i < alphabet.length; i++) {
            let letter = document.createElement("span");
            letter.setAttribute("id", "letter");
            letters.appendChild(letter);
            letter.textContent = alphabet[i];
            letter.style.left = left + "px";
            letter.style.top = top + "px";
            letters.addEventListener("pointerdown", selectLetter);
        }
    }
    //auf click von brief warten und if abfrage ob target hintergrund oder buchstabe ist. Je nach dem place oder delete letter
    function selectLetter(_event) {
        highlightedElement = _event.target;
        let parent = highlightedElement.parentNode;
        if (parent != document.body) {
            highlightedElement = _event.target;
            highlightedElement.style.width = 100 + "px";
            highlightedElement.style.height = 100 + "px";
            chosenCharacter = highlightedElement.textContent;
        }
    }
    function placeLetter(_event) {
        // option2: if (_event.currentTarget === _event.target) {
        if (highlightedElement) {
            highlightedElement.style.width = 55 + "px";
            highlightedElement.style.height = 80 + "px";
        }
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", chooseOption);
        //}
    }
    function chooseCharacter(_event) {
        chosenCharacter = _event.key;
    }
    function chooseOption(_event) {
        if (_event.currentTarget === _event.target) {
            placeLetter(_event);
        }
        else {
            deleteLetter(_event);
        }
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
        //option1: _event.stopPropagation();
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=BlackmailerCompanion.js.map