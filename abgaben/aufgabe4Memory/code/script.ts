namespace memory {
    console.log("start");
    let cardArray: number[] = [];
    let gameCardArray: number[] = [];
    let enterTime: number;
    let leaveTime: number;
    let counter: number = 0;
    let cardCounter: number = 0;
    let cardEvent1: any
    let cardEvent2: any
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let startGame: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startGame");
        startGame.addEventListener("click", getUserInput);
        fillCardArray();
    }
    function fillCardArray(): void {
        for (let i: number = 1; i <= 20; i++) {
            cardArray.push(i);
        }
        console.log(cardArray);
    }
    function getUserInput(): void {
        let input: any = window.prompt("Anzahl Karten", "5");
        let inputNumber: number = parseInt(input, 10);
        if (inputNumber < 4 || inputNumber > 20) {
            getUserInput();
        } else {
            fillGameCardArray(inputNumber);
        }
    }
    function fillGameCardArray(input: number): void {
        for (let i: number = 0; i < input; i++) {
            let random: number = cardArray[Math.floor(Math.random() * cardArray.length)];
            console.log("random " + random);
            gameCardArray.push(random);
            gameCardArray.push(random);

            for (let y: number = 0; y < cardArray.length; y++) {

                if (cardArray[y] === random) {

                    cardArray.splice(y, 1);
                }
            }

        }
        console.log(gameCardArray);
        randomizeArray();
        console.log("random" + gameCardArray);
    }
    function randomizeArray(): void {
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
    function loadCards(): void {
        let game: HTMLDivElement = <HTMLDivElement>document.querySelector("div#cards");

        for (let i: number = 0; i < gameCardArray.length; i++) {
            let card: HTMLSpanElement = document.createElement("span");
            card.textContent = "?";
            card.setAttribute("id", JSON.stringify(gameCardArray[i]));
            game.appendChild(card);
            card.addEventListener("pointerdown", showCard);

        }
        enterTime = new Date().getTime();
    }
    function showCard(_event: PointerEvent): void {
        counter++;
        let highlightedElement: any = _event.target;
        if (counter == 1) {
            highlightedElement.textContent = highlightedElement.getAttribute("id");
            cardEvent1 = highlightedElement;
        } else if (counter == 2) {
            highlightedElement.textContent = highlightedElement.getAttribute("id");
            cardEvent2 = highlightedElement;

            if (cardEvent1.textContent === cardEvent2.textContent) {
                let parent1: Node = <Node>cardEvent1.parentNode;
                let parent2: Node = <Node>cardEvent2.parentNode;
                function delay() {
                    parent1.removeChild(cardEvent1);
                    parent2.removeChild(cardEvent2);
                }

                setTimeout(delay, 2000);
                counter = 0;
                cardCounter++;
                checkGame();
            } else {
                function delay() {
                    cardEvent1.textContent = "?";
                    cardEvent2.textContent = "?";
                }

                setTimeout(delay, 2000);

                counter = 0;
            }
        }
    }
    function checkGame(): void {
        if (cardCounter === (gameCardArray.length / 2)) {
            leaveTime = new Date().getTime();
            let time: number = leaveTime - enterTime;
            window.alert("Game finished, time was " + time);
            window.location.reload();
        }
    }
}