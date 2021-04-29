namespace memorySettings {
    console.log("start");
    let cardArray: number[] = [];
    let gameCardArray: number[] = [];
    let enterTime: number;
    let leaveTime: number;
    let counter: number = 0;
    let cardCounter: number = 0;
    let cardEvent1: any;
    let cardEvent2: any;
    let gamecardAmount: number = 5;
    let cardSize: number = 10;
    let colorBackground: string;
    let colorCard: string;
    let colorFont: string;
    let fontFamily: string;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        let startGame: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startGame");
        startGame.addEventListener("click", fillGameCardArray);
        fillCardArray();
    }

    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
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


    function fillCardArray(): void {
        for (let i: number = 1; i <= 20; i++) {
            cardArray.push(i);
        }
    }
    function fillGameCardArray(): void {
        let input: number = gamecardAmount;
        for (let i: number = 0; i < input; i++) {
            let random: number = cardArray[Math.floor(Math.random() * cardArray.length)];
            gameCardArray.push(random);
            gameCardArray.push(random);

            for (let y: number = 0; y < cardArray.length; y++) {

                if (cardArray[y] === random) {

                    cardArray.splice(y, 1);
                }
            }

        }
        randomizeArray();
        console.log("geheimer spicker :) " + gameCardArray);
    }
    function randomizeArray(): void {
        let currentIndex: number = gameCardArray.length, temporaryValue: number, randomIndex: number;
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
        let game: HTMLDivElement = <HTMLDivElement>document.querySelector("div#game");
        game.style.backgroundColor = colorBackground;
        for (let i: number = 0; i < gameCardArray.length; i++) {
            let card: HTMLSpanElement = document.createElement("span");
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
                function delay(): void {
                    parent1.removeChild(cardEvent1);
                    parent2.removeChild(cardEvent2);
                }

                setTimeout(delay, 2000);
                counter = 0;
                cardCounter++;
                checkGame();
            } else {
                function delay(): void {
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