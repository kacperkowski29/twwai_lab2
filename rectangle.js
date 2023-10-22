"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Point;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    Rectangle.prototype.move = function (dx, dy) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    };
    Rectangle.prototype.getArea = function () {
        var width = Math.abs(this.topRight.x - this.topLeft.x);
        var height = Math.abs(this.bottomLeft.y - this.topLeft.y);
        return width * height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var pointA = new Point(1, 2);
var pointB = new Point(4, 2);
var pointC = new Point(1, 5);
var pointD = new Point(4, 5);
var rectangle = new Rectangle(pointA, pointB, pointC, pointD);
console.log("Pole prostokąta: ", rectangle.getArea());
console.log("Punkt A przed przesunięciem: ", pointA);
rectangle.move(3, 4);
console.log("Punkt A po przesunięciu: ", pointA);
