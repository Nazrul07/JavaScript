/*
In prgramming, an abstract class is a class that exists only to be a blue print for other classes.
It is never meant to be used directly - we can't create an object from it.
We must first create a subclass that fills in the missing details, then use that.

In JavaScript, we can create an abstract-like class by throwing an error in the constructor if someone tries to create an object from it directly.
*/

class Shape {
    constructor(color) {
        if (new.target === Shape) {     //  new.target is shape constructor function
            throw new Error("Shape is abstract — cannot instantiate directly");
        }
        this.color = color;
    }

    area() {
        throw new Error("area() must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

const c = new Circle(5, "red");
console.log(c.area()); // 78.53...

// const s = new Shape("red")  // Error: Shape is abstract — cannot instantiate directly

/*
Here:
- The Shape class is abstract-like because it cannot be instantiated directly.
- The Circle class extends Shape and provides an implementation for the area() method.
- If we try to create an instance of Shape, it will throw an error, enforcing the abstract-like behavior.
*/