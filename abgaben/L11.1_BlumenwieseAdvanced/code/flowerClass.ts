namespace BlumenwieseAdvanced {
    export abstract class FlowerClass {
        position: Vector;
        color: string | CanvasGradient | CanvasPattern;
        velocity: Vector;

        constructor() {
            this.velocity = new Vector(0, 0);
            this.velocity.random(2, 20);
        }
      
        public abstract draw(): void;
      

    }}

