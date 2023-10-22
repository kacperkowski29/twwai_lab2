class Point {
    constructor(public x: number, public y: number) {}

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }
}

export class Rectangle {
    constructor(public topLeft: Point, public topRight: Point, public bottomLeft: Point, public bottomRight: Point) {}

    move(dx: number, dy: number): void {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }

    getArea(): number {
        const width = Math.abs(this.topRight.x - this.topLeft.x);
        const height = Math.abs(this.bottomLeft.y - this.topLeft.y);
        return width * height;
    }
}

const pointA = new Point(1, 2);
const pointB = new Point(4, 2);
const pointC = new Point(1, 5);
const pointD = new Point(4, 5);

const rectangle = new Rectangle(pointA, pointB, pointC, pointD);

console.log("Pole prostokąta: ", rectangle.getArea());
console.log("Punkt A przed przesunięciem: ", pointA);
rectangle.move(3, 4);
console.log("Punkt A po przesunięciu: ", pointA);
