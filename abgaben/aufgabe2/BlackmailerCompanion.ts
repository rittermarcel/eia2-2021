namespace L02_BlackmailerCompanion {
    console.log("Start");
    let chosenCharacter: string = "A";
    let alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    window.addEventListener("load", handleLoad);
    let highlightedElement: any;

    function handleLoad(_event: Event): void {
        let mail: HTMLElement = <HTMLElement>document.querySelector("div#mail");
        let letters: HTMLElement = <HTMLElement>document.querySelector("div#letters");
        mail.addEventListener("click", chooseOption);
        document.addEventListener("keydown", chooseCharacter);
        let left: number = 20;
        let top: number = 2;
        for (let i: number = 0; i < alphabet.length; i++) {
            let letter: HTMLSpanElement = document.createElement("span");
            letter.setAttribute("id", "letter");
            letters.appendChild(letter);
            letter.textContent = alphabet[i];
            letter.style.left = left + "px";
            letter.style.top = top + "px";
            letters.addEventListener("pointerdown", selectLetter);
        }

    }



    //auf click von brief warten und if abfrage ob target hintergrund oder buchstabe ist. Je nach dem place oder delete letter
    function selectLetter(_event: PointerEvent): void {
        highlightedElement = _event.target;
        let parent: Node = <Node>highlightedElement.parentNode;
        if (parent != document.body) {
            highlightedElement = _event.target;
            highlightedElement.style.width = 100 + "px";
            highlightedElement.style.height = 100 + "px";
            chosenCharacter = <string>highlightedElement.textContent;
        }
    }


    function placeLetter(_event: MouseEvent): void {
        // option2: if (_event.currentTarget === _event.target) {
        if (highlightedElement) {
            highlightedElement.style.width = 55 + "px";
            highlightedElement.style.height = 80 + "px";
        }
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let mail: HTMLElement = <HTMLElement>_event.target;
        let letter: HTMLSpanElement = document.createElement("span");
        mail.appendChild(letter);

        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", chooseOption);
        //}
    }

    function chooseCharacter(_event: KeyboardEvent): void {
        chosenCharacter = _event.key;
    }
    function chooseOption(_event: MouseEvent): void {
        if (_event.currentTarget === _event.target) {
            placeLetter(_event);
        } else {
            deleteLetter(_event);
        }
    }

    function deleteLetter(_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        parent.removeChild(target);
        //option1: _event.stopPropagation();

    }
}