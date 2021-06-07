namespace BlumenwiesePolymorphie {
export class Moveable {
position: Vector;
velocity: Vector;

constructor(_position?: Vector) {
    if (_position)
    this.position = _position;
else
    this.position = new Vector(0, 0);
    this.velocity = new Vector(0, 0);
    this.velocity.random(200, 380);
}
move(_timeslice: number): void {
    let offset: Vector = new Vector(this.velocity.x, 90);
    offset.scale(_timeslice);
    this.position.add(offset);

    if (this.position.x < 0)
        this.position.x += crc2.canvas.width;
    if (this.position.x > crc2.canvas.width)
        this.position.x -= crc2.canvas.width;
}
draw(): void {
    // console.log("Moveable move");
}
}



}