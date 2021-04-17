"use strict";
var events_excercise;
(function (events_excercise) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let div0 = document.querySelector("div#div0");
        let div1 = document.querySelector("div#div1");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", loginfo);
        document.addEventListener("keyup", loginfo);
        document.body.addEventListener("click", loginfo);
        document.body.addEventListener("keyup", loginfo);
        div0.addEventListener("click", loginfo);
        div0.addEventListener("keyup", loginfo);
        div1.addEventListener("click", loginfo);
        div1.addEventListener("keyup", loginfo);
    }
    function setInfoBox(_event) {
        let element = document.querySelector("span#data");
        let x = _event.x;
        let y = _event.y;
        element.textContent = "x: " + x + " y: " + y + " target: " + _event.target;
        element.style.left = 5 + x + "px";
        element.style.top = 5 + y + "px";
    }
    function loginfo(_event) {
        console.groupCollapsed("Event Log");
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
        console.groupEnd();
    }
})(events_excercise || (events_excercise = {}));
//# sourceMappingURL=script.js.map