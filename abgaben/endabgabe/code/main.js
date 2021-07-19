"use strict";
var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", handleLoad);
    let toreTeam1 = 0;
    let toreTeam2 = 0;
    let newPlayerPosition;
    let newPlayerteam = "1";
    let newPlayertrickotNummer = Math.floor((Math.random() * 87)) + 12;
    let markieren = true;
    let clickedPlayer;
    let präzision = 0;
    let minSpeed = 0.7;
    let maxSpeed = 1.3;
    let ball;
    let oldPositionx;
    let oldPositiony;
    let newBallPosition;
    let spieler;
    let clickPosition;
    let spielerMoveable = [];
    let personen = {
        team1: [],
        team2: [],
        schiedsrichter: [],
        linienrichter: []
    };
    let inFrageKommendeSpieler = [];
    let imgData;
    function handleLoad(_event) {
        console.log("Start");
        let forms = document.querySelectorAll("form");
        forms[0].addEventListener("change", handleChange);
        forms[1].addEventListener("input", addNewPlayerValues);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        endabgabe.crc2 = canvas.getContext("2d");
        createSpielfeld();
        imgData = endabgabe.crc2.getImageData(0, 0, endabgabe.crc2.canvas.width, endabgabe.crc2.canvas.height);
        createSpieler();
        createSchiedsrichter();
        createLinienrichter();
        createBall();
        getBall();
        onMarkieren();
        let markierenButton = document.getElementById("highlightPlayer");
        markierenButton.addEventListener("click", onMarkieren);
        let selectpositionForNewPlayer = document.getElementById("SelectpositionForNewPlayer");
        selectpositionForNewPlayer.addEventListener("click", onSelectNewPlayPosition);
        canvas.addEventListener("click", playerClicked);
        window.setInterval(update, 20);
        window.addEventListener("keydown", onMarkierenKeyDown);
    }
    function createSpielfeld() {
        let spielfeld = new endabgabe.Spielfeld();
        spielfeld.drawSpielfeld();
    }
    function createBall() {
        ball = new endabgabe.Ball(new endabgabe.Vector(Math.floor(Math.random() * 828) + 52, Math.floor(Math.random() * 515) + 50), "purple", 3);
        ball.draw();
    }
    function createSpieler() {
        for (let position of endabgabe.spielerPositionTeam1) {
            let spieler = new endabgabe.Spieler("red", new endabgabe.Vector(position[0], position[1]), minSpeed, maxSpeed, 1, position[2]);
            personen.team1.push(spieler);
        }
        for (let position of endabgabe.spielerPositionTeam2) {
            let spieler = new endabgabe.Spieler("blue", new endabgabe.Vector(position[0], position[1]), minSpeed, maxSpeed, 2, position[2]);
            personen.team2.push(spieler);
        }
    }
    function createSchiedsrichter() {
        let spieler = new endabgabe.Spieler("orange", new endabgabe.Vector(endabgabe.schiedsrichter[0][0], endabgabe.schiedsrichter[0][1]), minSpeed, maxSpeed);
        personen.schiedsrichter.push(spieler);
    }
    function createLinienrichter() {
        for (let position of endabgabe.linienrichter) {
            let spieler = new endabgabe.Spieler("yellow", new endabgabe.Vector(position[0], position[1]), minSpeed, maxSpeed);
            personen.linienrichter.push(spieler);
        }
    }
    function getBall() {
        let nearestPosition = 100000;
        inFrageKommendeSpieler = [];
        getNearPlayer(personen.team1);
        getNearPlayer(personen.team2);
        for (let item of inFrageKommendeSpieler) {
            let differencey = Math.abs(item.position.y - ball.position.y);
            let differencex = Math.abs(item.position.x - ball.position.x);
            let gesamt = (differencex + differencey);
            if (gesamt < nearestPosition) {
                spieler = item;
                nearestPosition = gesamt;
            }
        }
        spielerMoveable.push(spieler);
        oldPositionx = spieler.position.x;
        oldPositiony = spieler.position.y;
    }
    function getNearPlayer(array) {
        for (let item of array) {
            for (let i = 0; i <= 120; i++) { //ca 15 meter nach vorne
                let x = item.position.x + i;
                if (x === Math.floor(ball.position.x)) {
                    inFrageKommendeSpieler.push(item);
                }
            }
            for (let i = 0; i <= 120; i++) {
                let x = item.position.x - i;
                if (x === Math.floor(ball.position.x)) {
                    inFrageKommendeSpieler.push(item);
                }
            }
        }
    }
    function update() {
        endabgabe.crc2.putImageData(imgData, 0, 0);
        console.log("Update");
        for (let item of spielerMoveable) {
            if (!clickPosition) {
                ball.draw();
                item.movePlayer(new endabgabe.Vector(ball.position.x, ball.position.y));
                item.draw();
                let infoText = document.getElementById("infoText");
                infoText.textContent = "Spieler mit der Nummer " + item.trickotNummer + " von Team " + item.teamNumber + " ist gerade am Ball";
                for (let item of personen.linienrichter) {
                    item.draw();
                }
                for (let item of personen.schiedsrichter) {
                    item.draw();
                }
            }
            else {
                ball.move(newBallPosition);
                ball.draw();
                checkShot();
                item.movePlayerBack(new endabgabe.Vector(oldPositionx, oldPositiony));
                item.draw();
                for (let item of personen.linienrichter) {
                    item.move(new endabgabe.Vector(newBallPosition.x, item.position.y));
                    item.draw();
                }
                for (let item of personen.schiedsrichter) {
                    if (newBallPosition.y + 60 > endabgabe.einwurf1[0][1] && newBallPosition.y + 60 < endabgabe.einwurf2[1][1] && newBallPosition.x + 60 < endabgabe.ecke2[0][0]) {
                        item.move(new endabgabe.Vector(newBallPosition.x + 60, newBallPosition.y + 60));
                        item.draw();
                    }
                    else {
                        item.move(new endabgabe.Vector(newBallPosition.x - 60, newBallPosition.y - 60));
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
    function onClick(_event) {
        let rect = endabgabe.crc2.canvas.getBoundingClientRect();
        let x = _event.clientX - rect.left;
        let y = _event.clientY - rect.top;
        if (!markieren) {
            newBallPosition = new endabgabe.Vector(x, y);
            calculatePräzision();
            clickPosition = true;
        }
        else {
            newPlayerPosition = new endabgabe.Vector(Math.floor(x), Math.floor(y));
            addNewPlayer();
        }
    }
    function calculatePräzision() {
        let calculatedPräzision = Math.floor(Math.random() * (präzision * 2) - präzision);
        let präzisionX = newBallPosition.x + calculatedPräzision;
        let präzisionY = newBallPosition.y + calculatedPräzision;
        newBallPosition = new endabgabe.Vector(präzisionX, präzisionY);
    }
    function handleChange(_event) {
        let target = _event.target;
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
                }
                else if (target.value === "gut") {
                    präzision = 30;
                }
                else {
                    präzision = 90;
                }
                break;
            case "ballStartPosition":
                spielerMoveable = [];
                if (target.value === "zufällig") {
                    ball.position = new endabgabe.Vector(Math.floor(Math.random() * 828) + 52, Math.floor(Math.random() * 515) + 50);
                }
                else if (target.value === "team1") {
                    ball.position = new endabgabe.Vector(50, 300);
                }
                else {
                    ball.position = new endabgabe.Vector(860, 300);
                }
                getBall();
                break;
        }
    }
    function playerClicked(_event) {
        if (markieren) {
            selectPlayerClicked(_event, personen.team1);
            selectPlayerClicked(_event, personen.team2);
        }
    }
    function selectPlayerClicked(_event, array) {
        let X = _event.offsetX;
        let Y = _event.offsetY;
        for (let item of array) {
            if (item.position.x <= X && item.position.x + 15 >= X && item.position.y <= Y && item.position.y + 39 >= Y) {
                console.log("spieler getroffen");
                let infoText = document.getElementById("spielerInfo");
                infoText.innerHTML = "Trickotnummer " + item.trickotNummer + "<br>" + "Geschwindigkeit " + item.velocity + "<br>" + "Spieler von Team " + item.teamNumber;
                let deletePlayers = document.getElementById("deletePlayer");
                deletePlayers.innerHTML = "Spieler löschen";
                deletePlayers.hidden = false;
                deletePlayers.addEventListener("click", deletePlayer);
                clickedPlayer = item;
            }
        }
    }
    function deletePlayer(_event) {
        let deletePlayers = document.getElementById("deletePlayer");
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
        let infoText = document.getElementById("spielerInfo");
        infoText.innerHTML = "";
        deletePlayers.hidden = true;
    }
    function onMarkieren() {
        markieren = !markieren;
        let markierenButton = document.getElementById("highlightPlayer");
        let deletePlayers = document.getElementById("deletePlayer");
        let canvas = document.querySelector("canvas");
        let infoText = document.getElementById("spielerInfo");
        if (!markieren) {
            canvas.addEventListener("mousedown", onClick);
            deletePlayers.hidden = true;
            infoText.innerHTML = "";
            markierenButton.innerHTML = "Spieler markieren";
        }
        else {
            canvas.removeEventListener("mousedown", onClick);
            markierenButton.innerHTML = "Weiterspielen";
            deletePlayers.hidden = true;
            infoText.innerHTML = "";
        }
    }
    function addNewPlayerValues(_event) {
        let target = _event.target;
        if (target.name === "newPlayerTeam") {
            newPlayerteam = target.value;
        }
        else if (target.name === "newPlayerNumber")
            newPlayertrickotNummer = parseInt(target.value);
    }
    function onSelectNewPlayPosition() {
        markieren = !markieren;
    }
    function addNewPlayer() {
        if (newPlayerteam === "1") {
            let color = personen.team1[0].trickotFarbe;
            let spieler = new endabgabe.Spieler(color, newPlayerPosition, minSpeed, maxSpeed, parseInt(newPlayerteam), newPlayertrickotNummer);
            personen.team1.push(spieler);
        }
        else {
            let color = personen.team2[0].trickotFarbe;
            let spieler = new endabgabe.Spieler(color, newPlayerPosition, minSpeed, maxSpeed, parseInt(newPlayerteam), newPlayertrickotNummer);
            personen.team2.push(spieler);
        }
        markieren = !markieren;
    }
    function checkShot() {
        console.log("x " + Math.floor(ball.position.x) + " y " + Math.floor(ball.position.y));
        console.log("x " + Math.floor(newBallPosition.x) + " y " + Math.floor(newBallPosition.y));
        if (Math.floor(ball.position.x) >= Math.floor(newBallPosition.x - 10) && Math.floor(ball.position.x) <= Math.floor(newBallPosition.x + 10) && Math.floor(ball.position.y) >= Math.floor(newBallPosition.y) - 10 && Math.floor(ball.position.y) <= Math.floor(newBallPosition.y) + 10) {
            checkGoal();
            checkEinwurf();
            checkEcke();
        }
    }
    function checkGoal() {
        let spielstand = document.getElementById("spielstandText");
        if (newBallPosition.x < endabgabe.tor1[0][0] && newBallPosition.y > endabgabe.tor1[0][1] && newBallPosition.y < endabgabe.tor1[1][1]) {
            console.log("tor");
            toreTeam2++;
            spielstand.innerHTML = toreTeam1 + " : " + toreTeam2;
        }
        else if (newBallPosition.x > endabgabe.tor2[0][0] && newBallPosition.y > endabgabe.tor2[0][1] && newBallPosition.y < endabgabe.tor2[1][1]) {
            console.log("tor2");
            toreTeam1++;
            spielstand.innerHTML = toreTeam1 + " : " + toreTeam2;
        }
    }
    function checkEinwurf() {
        if (newBallPosition.x > endabgabe.einwurf1[0][0] && newBallPosition.x < endabgabe.einwurf1[1][0] && newBallPosition.y < endabgabe.einwurf1[1][1] && spielerMoveable[0].teamNumber === 1) {
            newBallPosition = new endabgabe.Vector(Math.floor(newBallPosition.x), endabgabe.einwurf1[0][1]);
            spielerMoveable = [];
            personen.team2[10].position = new endabgabe.Vector(Math.floor(newBallPosition.x), endabgabe.einwurf1[0][1]);
            getBall();
        }
        else if (newBallPosition.x > endabgabe.einwurf1[0][0] && newBallPosition.x < endabgabe.einwurf1[1][0] && newBallPosition.y < endabgabe.einwurf1[1][1] && spielerMoveable[0].teamNumber === 2) {
            newBallPosition = new endabgabe.Vector(newBallPosition.x, endabgabe.einwurf1[0][1]);
            spielerMoveable = [];
            personen.team1[10].position = new endabgabe.Vector(Math.floor(newBallPosition.x), endabgabe.einwurf1[0][1]);
            getBall();
        }
        if (newBallPosition.x > endabgabe.einwurf2[0][0] && newBallPosition.x < endabgabe.einwurf2[1][0] && newBallPosition.y > endabgabe.einwurf2[1][1] && spielerMoveable[0].teamNumber === 1) {
            newBallPosition = new endabgabe.Vector(newBallPosition.x, endabgabe.einwurf2[0][1]);
            spielerMoveable = [];
            personen.team2[10].position = new endabgabe.Vector(Math.floor(newBallPosition.x), endabgabe.einwurf2[0][1]);
            getBall();
        }
        else if (newBallPosition.x > endabgabe.einwurf2[0][0] && newBallPosition.x < endabgabe.einwurf2[1][0] && newBallPosition.y > endabgabe.einwurf2[1][1] && spielerMoveable[0].teamNumber === 2) {
            newBallPosition = new endabgabe.Vector(Math.floor(newBallPosition.x), endabgabe.einwurf2[0][1]);
            spielerMoveable = [];
            personen.team1[10].position = new endabgabe.Vector(Math.floor(newBallPosition.x), endabgabe.einwurf2[0][1]);
            getBall();
        }
    }
    function checkEcke() {
        if (newBallPosition.x < endabgabe.ecke1[0][0] && newBallPosition.y > endabgabe.ecke1[0][1] && newBallPosition.y < endabgabe.ecke1[1][1] || newBallPosition.x < endabgabe.ecke1[0][0] && newBallPosition.y > endabgabe.ecke1[2][1] && newBallPosition.y < endabgabe.ecke1[3][1]) {
            console.log("ecke1");
            if (newBallPosition.x < endabgabe.ecke1[0][0] && newBallPosition.y > endabgabe.ecke1[0][1] && newBallPosition.y < endabgabe.ecke1[1][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new endabgabe.Vector(endabgabe.ecke1[0][0], endabgabe.ecke1[0][1]);
                spielerMoveable = [];
                personen.team2[10].position = new endabgabe.Vector(endabgabe.ecke1[0][0], endabgabe.ecke1[0][1]);
                getBall();
            }
            else if (newBallPosition.x < endabgabe.ecke1[0][0] && newBallPosition.y > endabgabe.ecke1[0][1] && newBallPosition.y < endabgabe.ecke1[1][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new endabgabe.Vector(endabgabe.spielerPositionTeam1[0][0], endabgabe.spielerPositionTeam1[0][1]);
            }
            else if (newBallPosition.x < endabgabe.ecke1[0][0] && newBallPosition.y > endabgabe.ecke1[2][1] && newBallPosition.y < endabgabe.ecke1[3][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new endabgabe.Vector(endabgabe.ecke1[0][0], endabgabe.ecke1[3][1]);
                newBallPosition = new endabgabe.Vector(endabgabe.ecke1[3][0], endabgabe.ecke1[3][1]);
                spielerMoveable = [];
                personen.team2[10].position = new endabgabe.Vector(endabgabe.ecke1[3][0], endabgabe.ecke1[3][1]);
                getBall();
            }
            else if (newBallPosition.x < endabgabe.ecke1[0][0] && newBallPosition.y > endabgabe.ecke1[2][1] && newBallPosition.y < endabgabe.ecke1[3][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new endabgabe.Vector(endabgabe.spielerPositionTeam1[0][0], endabgabe.spielerPositionTeam1[0][1]);
            }
        }
        else if (newBallPosition.x > endabgabe.ecke2[0][0] && newBallPosition.y > endabgabe.ecke2[0][1] && newBallPosition.y < endabgabe.ecke2[1][1] || newBallPosition.x > endabgabe.ecke2[0][0] && newBallPosition.y > endabgabe.ecke2[2][1] && newBallPosition.y < endabgabe.ecke2[3][1]) {
            console.log("ecke2");
            if (newBallPosition.x > endabgabe.ecke2[0][0] && newBallPosition.y > endabgabe.ecke2[0][1] && newBallPosition.y < endabgabe.ecke2[1][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new endabgabe.Vector(endabgabe.spielerPositionTeam2[0][0], endabgabe.spielerPositionTeam2[0][1]);
            }
            else if (newBallPosition.x > endabgabe.ecke2[0][0] && newBallPosition.y > endabgabe.ecke2[0][1] && newBallPosition.y < endabgabe.ecke2[1][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new endabgabe.Vector(endabgabe.ecke2[0][0], endabgabe.ecke2[0][1]);
                spielerMoveable = [];
                personen.team1[10].position = new endabgabe.Vector(endabgabe.ecke2[0][0], endabgabe.ecke2[0][1]);
                getBall();
            }
            else if (newBallPosition.x > endabgabe.ecke2[0][0] && newBallPosition.y > endabgabe.ecke2[2][1] && newBallPosition.y < endabgabe.ecke2[3][1] && spielerMoveable[0].teamNumber === 1) {
                newBallPosition = new endabgabe.Vector(endabgabe.spielerPositionTeam2[0][0], endabgabe.spielerPositionTeam2[0][1]);
            }
            else if (newBallPosition.x > endabgabe.ecke2[0][0] && newBallPosition.y > endabgabe.ecke2[2][1] && newBallPosition.y < endabgabe.ecke2[3][1] && spielerMoveable[0].teamNumber === 2) {
                newBallPosition = new endabgabe.Vector(endabgabe.ecke2[3][0], endabgabe.ecke2[3][1]);
                spielerMoveable = [];
                personen.team1[10].position = new endabgabe.Vector(endabgabe.ecke2[3][0], endabgabe.ecke2[3][1]);
                getBall();
            }
        }
    }
    function onMarkierenKeyDown(_event) {
        if (_event.key === "m") {
            onMarkieren();
        }
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map