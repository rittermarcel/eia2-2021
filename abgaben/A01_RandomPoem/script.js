"use strict";
var main;
(function (main) {
    let subjekte = ["Studenten", "Professoren", "Streber", "Faulenzer", "Programmierer"];
    let praedikate = ["brauchen", "lieben", "studieren", "hassen", "verschlafen", "zerstören"];
    let objekte = ["EIA2", "Vorlesungen", "Pause", "Aufgaben", "Vorlesungfreie Tage", "Kaffe", "gute Noten"];
    for (let i = subjekte.length; i >= 1; i--) {
        console.log(getVerse(subjekte, praedikate, objekte));
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        let vers = "";
        let randomZahl = Math.floor(Math.random() * _subjekte.length);
        let randomZahl2 = Math.floor(Math.random() * _praedikate.length);
        let randomZahl3 = Math.floor(Math.random() * _objekte.length);
        let removedWord = _subjekte.splice(randomZahl, 1);
        let removedWord2 = _praedikate.splice(randomZahl2, 1);
        let removedWord3 = _objekte.splice(randomZahl3, 1);
        vers = vers + removedWord + " " + removedWord2 + " " + removedWord3;
        return vers;
    }
})(main || (main = {}));
//# sourceMappingURL=script.js.map