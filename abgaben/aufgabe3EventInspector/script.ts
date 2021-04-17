namespace events_excercise {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
        let div0: HTMLElement = <HTMLElement>document.querySelector("div#div0");
        let div1: HTMLElement = <HTMLElement>document.querySelector("div#div1");
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
    function setInfoBox(_event: MouseEvent): void {
        let element: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span#data");
        let x: number = _event.x;
        let y: number = _event.y;
        element.textContent = "x: " + x + " y: " + y + " target: " + _event.target;
        element.style.left = 5 + x + "px";
        element.style.top = 5 + y + "px";

    }

    function loginfo(_event: Event): void {
        console.groupCollapsed("Event Log");
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
        console.groupEnd();
    }

}