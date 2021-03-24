namespace main {
    let subjekte: string[] = ["Studenten", "Professoren", "Streber", "Faulenzer", "Programmierer"];
    let praedikate: string[] = ["brauchen", "lieben", "studieren", "hassen", "verschlafen", "zerstören"];
    let objekte: string[] = ["EIA2", "Vorlesungen", "Pause", "Aufgaben", "Vorlesungfreie Tage", "Kaffe", "gute Noten"];

    for (let i: number = subjekte.length; i >= 1; i--) {

        console.log(getVerse(subjekte, praedikate, objekte));

    }
    function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]): string {
        let vers: string = "";
        let randomZahl: number = Math.floor(Math.random() * _subjekte.length);
        let randomZahl2: number = Math.floor(Math.random() * _praedikate.length);
        let randomZahl3: number = Math.floor(Math.random() * _objekte.length);
        let removedWord = _subjekte.splice(randomZahl, 1);
        let removedWord2 = _praedikate.splice(randomZahl2, 1);
        let removedWord3 = _objekte.splice(randomZahl3, 1);
        vers = vers + removedWord + " " + removedWord2 + " " + removedWord3;

        return vers;
    }
}