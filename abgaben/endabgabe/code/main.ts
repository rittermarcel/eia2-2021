namespace endabgabe {
    interface Personen {
        team1: Spieler[];
        team2: Spieler[];
        schiedsrichter: Spieler[];
        linienrichter: Spieler[];
    }
    window.addEventListener("load", handleLoad);
    let toreTeam1: number = 0;
    let toreTeam2: number = 0;
    let newPlayerPosition: Vector;
    let newPlayerteam: string = "1";
    let newPlayertrickotNummer: number = Math.floor((Math.random() * 87)) + 12;
    let markieren: boolean = true;
    let clickedPlayer: Spieler;
    let präzision: number = 0;
    let minSpeed: number = 0.7;
    let maxSpeed: number = 1.3;
    let ball: Ball;
    let oldPositionx: number;
    let oldPositiony: number;
    let newBallPosition: Vector;
    let spieler: Spieler;
    let clickPosition: boolean;
    let spielerMoveable: Moveable[] = [];
    let personen: Personen = {
        team1: [],
        team2: [],
        schiedsrichter: [],
        linienrichter: []
    };
    let inFrageKommendeSpieler: Spieler[] = [];
    let imgData: any;
    export let crc2: CanvasRenderingContext2D;
    function handleLoad(_event: Event): void {
        console.log("Start");
        let forms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");

        forms[0].addEventListener("change", handleChange);
        forms[1].addEventListener("input", addNewPlayerValues);

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        createSpielfeld();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        createSpieler();
        createSchiedsrichter();
        createLinienrichter();
        createBall();
        getBall();
        onMarkieren();
        let markierenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highlightPlayer");
        markierenButton.addEventListener("click", onMarkieren);
        let selectpositionForNewPlayer: HTMLButtonElement = <HTMLButtonElement>document.getElementById("SelectpositionForNewPlayer");
        selectpositionForNewPlayer.addEventListener("click", onSelectNewPlayPosition);


        canvas.addEventListener("click", playerClicked);
        window.setInterval(update, 20);
        window.addEventListener("keydown", onMarkierenKeyDown);

    }
    function createSpielfeld(): void {
        let spielfeld: Spielfeld = new Spielfeld();
        spielfeld.drawSpielfeld();
    }
    function createBall(): void {
        ball = new Ball(new Vector(Math.floor(Math.random() * 828) + 52, Math.floor(Math.random() * 515) + 50), "purple", 3);
        ball.draw();
    }
    function createSpieler(): void {
        for (let position of spielerPositionTeam1) {
            let spieler: Spieler = new Spieler("red", new Vector(position[0], position[1]), minSpeed, maxSpeed, 1, position[2]);
            personen.team1.push(spieler);
        }
        for (let position of spielerPositionTeam2) {
            let spieler: Spieler = new Spieler("blue", new Vector(position[0], position[1]), minSpeed, maxSpeed, 2, position[2]);
            personen.team2.push(spieler);
        }


    }
    function createSchiedsrichter(): void {
            let spieler: Spieler = new Spieler("orange", new Vector(schiedsrichter[0][0], schiedsrichter[0][1]), minSpeed, maxSpeed);
            personen.schiedsrichter.push(spieler);
        
    }
    function createLinienrichter(): void {
        for (let position of linienrichter) {
            let spieler: Spieler = new Spieler("yellow", new Vector(position[0], position[1]), minSpeed, maxSpeed);
            personen.linienrichter.push(spieler);
        }
    }

    function getBall(): void {
        let nearestPosition: number = 100000;
        inFrageKommendeSpieler = [];
        getNearPlayer(personen.team1);
        getNearPlayer(personen.team2);
        
        for (let item of inFrageKommendeSpieler) {
            let differencey: number = Math.abs(item.position.y - ball.position.y);
            let differencex: number = Math.abs(item.position.x - ball.position.x);
            let gesamt: number = (differencex + differencey);
            if (gesamt < nearestPosition) {
                spieler = item;
                nearestPosition = gesamt;
            }

        }
        spielerMoveable.push(spieler);
        oldPositionx = spieler.position.x;
        oldPositiony = spieler.position.y;
    }
    function getNearPlayer(array: Spieler[]): void {
        for (let item of array) {
            for (let i: number = 0; i <= 120; i++) { //ca 15 meter nach vorne
                let x: number = item.position.x + i;
                if (x === Math.floor(ball.position.x)) {
                    inFrageKommendeSpieler.push(item);

                }

            }
            for (let i: number = 0; i <= 120; i++) {
                let x: number = item.position.x - i;
                if (x === Math.floor(ball.position.x)) {
                    inFrageKommendeSpieler.push(item);
                }
            }
        }
    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        console.log("Update");
        for (let item of spielerMoveable) {
            if (!clickPosition) {
                ball.draw();
                item.movePlayer(new Vector(ball.position.x, ball.position.y));
                item.draw();
                let infoText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("infoText");
                infoText.textContent = "Spieler mit der Nummer " + item.trickotNummer +  " von Team " + item.teamNumber + " ist gerade am Ball";
                for (let item of personen.linienrichter) {
                    item.draw();
                }
                for (let item of personen.schiedsrichter) {
                    item.draw();
                }
            } else {
                ball.move(newBallPosition);
                ball.draw();
                checkShot();
                item.movePlayerBack(new Vector(oldPositionx, oldPositiony));
                item.draw();
                for (let item of personen.linienrichter) {
                    item.move(new Vector(newBallPosition.x, item.position.y));
                    item.draw();
                }
                for (let item of personen.schiedsrichter) {
                    if (newBallPosition.y + 60 > einwurf1[0][1] && newBallPosition.y + 60 < einwurf2[1][1] && newBallPosition.x + 60 < ecke2[0][0]) {
                        item.move(new Vector(newBallPosition.x + 60, newBallPosition.y + 60));
                        item.draw();
                    } else {
                        item.move(new Vector(newBallPosition.x - 60, newBallPosition.y - 60));
                        item.draw();
                    }
                    
                }
                if (item.position.x == oldPositionx && item.position.y == oldPositiony && Math.floor(ball.position.x) >= Math.floor(newBallPosition.x - 10) && Math.floor(ball.position.x) <= Math.floor(newBallPosition.x + 10) && Math.floor(ball.position.y) >= Math.floor(newBallPosition.y) - 10 && Math.floor(ball.position.y) <= Math.floor(newBallPosition.y) + 10) {
                    spielerMoveable = [];
                    ball.position = newBallPosition;
                    getBall();
                    clickPosition = false;
                }


            }
            for (let player of personen.team1) {
                player.draw();
            }
            for (let player of personen.team2) {
                player.draw();
            }
            for (let player of personen.linienrichter) {
                player.draw();
            }
        }


    }
    function onClick(_event: MouseEvent): void {
        let rect: DOMRect = crc2.canvas.getBoundingClientRect();
        let x: number = _event.clientX - rect.left;
        let y: number = _event.clientY - rect.top;

        if (!markieren) {
            newBallPosition = new Vector(x, y);
            calculatePräzision();

            clickPosition = true;
        } else {
            newPlayerPosition = new Vector(Math.floor(x), Math.floor(y));
            addNewPlayer();
        }


    }
    function calculatePräzision(): void {
        let calculatedPräzision: number = Math.floor(Math.random() * (präzision * 2) - präzision);
        let präzisionX: number = newBallPosition.x + calculatedPräzision;
        let präzisionY: number = newBallPosition.y + calculatedPräzision;
        newBallPosition = new Vector(präzisionX, präzisionY);
    }
    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        switch (target.name) {
            case "minSprint":
                personen = {
                    team1: [],
                    team2: [],
                    schiedsrichter: [],
                    linienrichter: []
                };
                minSpeed = parseFloat(target.value);
                createSpieler();
                createSchiedsrichter();
                createLinienrichter();
                break;
            case "maxSprint":
                personen = {
                    team1: [],
                    team2: [],
                    schiedsrichter: [],
                    linienrichter: []
                };
                maxSpeed = parseFloat(target.value);
                createSpieler();
                createSchiedsrichter();
                createLinienrichter();
                break;
            case "colorTeam1":
                for (let item of personen.team1)
                    item.trickotFarbe = target.value;
                if (spielerMoveable[0].teamNumber === 1)
                    spielerMoveable[0].trickotFarbe = target.value;
                break;
            case "colorTeam2":
                for (let item of personen.team2)
                    item.trickotFarbe = target.value;
                if (spielerMoveable[0].teamNumber === 2)
                    spielerMoveable[0].trickotFarbe = target.value;
                break;
            case "colorSchiedsrichter":
                for (let item of personen.schiedsrichter)
                    item.trickotFarbe = target.value;
                break;
            case "colorLinienrichter":
                for (let item of personen.linienrichter)
                    item.trickotFarbe = target.value;
                break;
            case "colorBallfarbe":
                ball.color = target.value;
                break;
            case "präzision":
                if (target.value === "perfekt") {
                    präzision = 0;
                } else if (target.value === "gut") {
                    präzision = 30;
                } else {
                    präzision = 90;
                }
                break;
            case "ballStartPosition":
                spielerMoveable = [];
                if (target.value === "zufällig") {
                    ball.position = new Vector(Math.floor(Math.random() * 828) + 52, Math.floor(Math.random() * 515) + 50);
                } else if (target.value === "team1") {
                    ball.position = new Vector(50, 300);
                } else {
                    ball.position = new Vector(860, 300);

                }
                getBall();
                break;
        }

    }
    function playerClicked(_event: MouseEvent): void {
        
        if (markieren) {
            selectPlayerClicked(_event, personen.team1);
            selectPlayerClicked(_event, personen.team2);
        }
    }
    function selectPlayerClicked(_event: MouseEvent, array: Spieler[]): void {
        let X: number = _event.offsetX;
        let Y: number = _event.offsetY;
        for (let item of array) {
            if (item.position.x <= X && item.position.x + 15 >= X && item.position.y <= Y && item.position.y + 39 >= Y) {
                console.log("spieler getroffen");
                let infoText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("spielerInfo");
                infoText.innerHTML = "Trickotnummer " + item.trickotNummer + "<br>" + "Geschwindigkeit " + item.velocity + "<br>" + "Spieler von Team " + item.teamNumber;
                let deletePlayers: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deletePlayer");
                deletePlayers.innerHTML = "Spieler löschen";
                deletePlayers.hidden = false;
                deletePlayers.addEventListener("click", deletePlayer);
                clickedPlayer = item;
            }
        }
    }

    function deletePlayer(_event: MouseEvent): void {
        let deletePlayers: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deletePlayer");
        for (let [index, item] of personen.team1.entries()) {
            if (item === clickedPlayer) {
                personen.team1.splice(index, 1);
                if (item === spielerMoveable[0]) {
                    spielerMoveable = [];
                    getBall();
                }
            }
        }
        for (let [index, item] of personen.team2.entries()) {
            if (item === clickedPlayer) {
                personen.team2.splice(index, 1);
                if (item === spielerMoveable[0]) {
                    spielerMoveable = [];
                    getBall();
                }
            }
        }
        let infoText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("spielerInfo");
        infoText.innerHTML = "";
        deletePlayers.hidden = true;
    }
    function onMarkieren(): void {
        markieren = !markieren;
        let markierenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highlightPlayer");
        let deletePlayers: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deletePlayer");
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        let infoText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("spielerInfo");
        if (!markieren) {
            canvas.addEventListener("mousedown", onClick);
            deletePlayers.hidden = true;
            infoText.innerHTML = "";
            markierenButton.innerHTML = "Spieler markieren";
        } else {
            canvas.removeEventListener("mousedown", onClick);
            markierenButton.innerHTML = "Weiterspielen";
            deletePlayers.hidden = true;
            infoText.innerHTML = "";
        }

    }
    function addNewPlayerValues(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.name === "newPlayerTeam") {
            newPlayerteam = target.value;
        } else if (target.name === "newPlayerNumber")
            newPlayertrickotNummer = parseInt(target.value);

    }
    function onSelectNewPlayPosition(): void {

        markieren = !markieren;
    }
    function addNewPlayer(): void {
        if (newPlayerteam === "1") {
            let color: string = personen.team1[0].trickotFarbe;
            let spieler: Spieler = new Spieler(color, newPlayerPosition, minSpeed, maxSpeed, parseInt(newPlayerteam), newPlayertrickotNummer);
            personen.team1.push(spieler);
        } else {
            let color: string = personen.team2[0].trickotFarbe;
            let spieler: Spieler = new Spieler(color, newPlayerPosition, minSpeed, maxSpeed, parseInt(newPlayerteam), newPlayertrickotNummer);
            personen.team2.push(spieler);
        }
        markieren = !markieren;

    }
    function checkShot(): void {
        console.log("x " + Math.floor(ball.position.x) + " y " + Math.floor(ball.position.y));
        console.log("x " + Math.floor(newBallPosition.x) + " y " + Math.floor(newBallPosition.y));
        if (Math.floor(ball.position.x) >= Math.floor(newBallPosition.x - 10) && Math.floor(ball.position.x) <= Math.floor(newBallPosition.x + 10) && Math.floor(ball.position.y) >= Math.floor(newBallPosition.y) - 10 && Math.floor(ball.position.y) <= Math.floor(newBallPosition.y) + 10) {
            checkGoal();
            checkEinwurf();
            checkEcke();
        }

    }
    function checkGoal(): void {
        let spielstand: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("spielstandText");
        if (newBallPosition.x < tor1[0][0] && newBallPosition.y > tor1[0][1] && newBallPosition.y < tor1[1][1]) {
            console.log("tor");
            toreTeam2++;
            spielstand.innerHTML = toreTeam1 + " : " + toreTeam2;
        } else if (newBallPosition.x > tor2[0][0] && newBallPosition.y > tor2[0][1] && newBallPosition.y < tor2[1][1]) {
            console.log("tor2");
            toreTeam1++;
            spielstand.innerHTML = toreTeam1 + " : " + toreTeam2;


        }

    }

    function checkEinwurf(): void {
        if (newBallPosition.x > einwurf1[0][0] && newBallPosition.x < einwurf1[1][0] && newBallPosition.y < einwurf1[1][1] && spielerMoveable[0].teamNumber === 1) {
            newBallPosition = new Vector(Math.floor(newBallPosition.x), einwurf1[0][1]);
            spielerMoveable = [];
            personen.team2[10].position = new Vector(Math.floor(newBallPosition.x), einwurf1[0][1]);
            getBall();
        } else if (newBallPosition.x > einwurf1[0][0] && newBallPosition.x < einwurf1[1][0] && newBallPosition.y < einwurf1[1][1] && spielerMoveable[0].teamNumber === 2) {
            newBallPosition = new Vector(newBallPosition.x, einwurf1[0][1]);
            spielerMoveable = [];
            personen.team1[10].position = new Vector(Math.floor(newBallPosition.x), einwurf1[0][1]);
            getBall();
        }

        if (newBallPosition.x > einwurf2[0][0] && newBallPosition.x < einwurf2[1][0] && newBallPosition.y > einwurf2[1][1] && spielerMoveable[0].teamNumber === 1) {
            newBallPosition = new Vector(newBallPosition.x, einwurf2[0][1]);
            spielerMoveable = [];
            personen.team2[10].position = new Vector(Math.floor(newBallPosition.x), einwurf2[0][1]);
            getBall();
        } else if (newBallPosition.x > einwurf2[0][0] && newBallPosition.x < einwurf2[1][0] && newBallPosition.y > einwurf2[1][1] && spielerMoveable[0].teamNumber === 2) {
            newBallPosition = new Vector(Math.floor(newBallPosition.x), einwurf2[0][1]);
            spielerMoveable = [];
            personen.team1[10].position = new Vector(Math.floor(newBallPosition.x), einwurf2[0][1]);
            getBall();
        }
    }
    function checkEcke(): void {
        if (newBallPosition.x < ecke1[0][0] && newBallPosition.y > ecke1[0][1] && newBallPosition.y < ecke1[1][1] || newBallPosition.x < ecke1[0][0] && newBallPosition.y > ecke1[2][1] && newBallPosition.y < ecke1[3][1]) {
            console.log("ecke1");
            if (newBallPosition.x < ecke1[0][0] && newBallPosition.y > ecke1[0][1] && newBallPosition.y < ecke1[1][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new Vector(ecke1[0][0], ecke1[0][1]);
                spielerMoveable = [];
                personen.team2[10].position = new Vector(ecke1[0][0], ecke1[0][1]);
                getBall();
            } else if (newBallPosition.x < ecke1[0][0] && newBallPosition.y > ecke1[0][1] && newBallPosition.y < ecke1[1][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new Vector(spielerPositionTeam1[0][0], spielerPositionTeam1[0][1]);
            } else if (newBallPosition.x < ecke1[0][0] && newBallPosition.y > ecke1[2][1] && newBallPosition.y < ecke1[3][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new Vector(ecke1[0][0], ecke1[3][1]);
                newBallPosition = new Vector(ecke1[3][0], ecke1[3][1]);
                spielerMoveable = [];
                personen.team2[10].position = new Vector(ecke1[3][0], ecke1[3][1]);
                getBall();
            } else if (newBallPosition.x < ecke1[0][0] && newBallPosition.y > ecke1[2][1] && newBallPosition.y < ecke1[3][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new Vector(spielerPositionTeam1[0][0], spielerPositionTeam1[0][1]);
            }

        }
        else if (newBallPosition.x > ecke2[0][0] && newBallPosition.y > ecke2[0][1] && newBallPosition.y < ecke2[1][1] || newBallPosition.x > ecke2[0][0] && newBallPosition.y > ecke2[2][1] && newBallPosition.y < ecke2[3][1]) {
            console.log("ecke2");
            if (newBallPosition.x > ecke2[0][0] && newBallPosition.y > ecke2[0][1] && newBallPosition.y < ecke2[1][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new Vector(spielerPositionTeam2[0][0], spielerPositionTeam2[0][1]);

            } else if (newBallPosition.x > ecke2[0][0] && newBallPosition.y > ecke2[0][1] && newBallPosition.y < ecke2[1][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new Vector(ecke2[0][0], ecke2[0][1]);
                spielerMoveable = [];
                personen.team1[10].position = new Vector(ecke2[0][0], ecke2[0][1]);
                getBall();

            } else if (newBallPosition.x > ecke2[0][0] && newBallPosition.y > ecke2[2][1] && newBallPosition.y < ecke2[3][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new Vector(spielerPositionTeam2[0][0], spielerPositionTeam2[0][1]);

            } else if (newBallPosition.x > ecke2[0][0] && newBallPosition.y > ecke2[2][1] && newBallPosition.y < ecke2[3][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new Vector(ecke2[3][0], ecke2[3][1]);
                spielerMoveable = [];
                personen.team1[10].position = new Vector(ecke2[3][0], ecke2[3][1]);
                getBall();

            }
        }
    }
    function onMarkierenKeyDown(_event: KeyboardEvent): void {
        if (_event.key === "m") {
            onMarkieren();
        }
    }
}