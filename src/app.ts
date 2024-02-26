showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

abstract class Shape {
    protected constructor(
        protected readonly description: string,
        public readonly color: string,
        public readonly name: string
    ) {}
}

class Circle extends Shape {
    private static shapeType: string = "Circle";
    constructor(
        description: string,
        color: string,
        name: string,
        public radius: number
    ) {
        super(description, color, name);
    }

    public calculateArea(): number {
        return Math.PI * (this.radius ** 2);
    }

    public static shapeTypePrint(): void {
        console.log(`This is a ${Circle.shapeType}`);
    }
}


class Rectangle extends Shape {
    private static shapeType: string = "Rectangle";
    constructor(
        description: string,
        color: string,
        name: string,
        public width: number,
        public height: number
    )
    {
        super(description, color, name);
    }

    public calculateArea(): number {
        return this.width * this.height;
    }

    public static shapeTypePrint(): void {
        console.log(`This is a ${Rectangle.shapeType}`);
    }
}

class Square extends Shape {
    private static shapeType: string = "Square";
    constructor(
        description: string,
        color: string,
        name: string,
        public side: number
    )
    {
        super(description, color, name);
    }

    public calculateArea(): number {
        return this.side ** 2;
    }

    public print(): void {
        console.log("Area of a square: S = a * a");
    }

    public static shapeTypePrint(): void {
        console.log(`This is a ${Square.shapeType}`);
    }
}

class Triangle extends Shape {
    private static shapeType: string = "Triangle";
    constructor(
        description: string,
        color: string,
        name: string,
        public height: number,
        public side: number
    )
    {
        super(description, color, name);
    }

    public calculateArea(): number {
        return 0.5 * this.height * this.side;
    }

    public print(): void {
        console.log("Area of a triangle: S = 0.5 × a × b");
    }

    public static shapeTypePrint(): void {
        console.log(`This is a ${Triangle.shapeType}`);
    }
}

const circle = new Circle("A round shape", "green", "Circle", 7);
Circle.shapeTypePrint();
console.log(`Area of a ${circle.name}: ${circle.calculateArea()} and its color is ${circle.color}`);

const rectangle = new Rectangle("A rectangular shape", "red", "Rectangle", 2, 4);
Rectangle.shapeTypePrint();
console.log(`Area of a ${rectangle.name}: ${rectangle.calculateArea()} and its color is ${rectangle.color}`)

const square = new Square("A square shape", "blue", "Square", 5);
Square.shapeTypePrint();
square.print()
console.log(`Area of a ${square.name}: ${square.calculateArea()} and its color is ${square.color}`);

const triangle = new Triangle("A triangular shape", "yellow", "Triangle", 4, 6);
Triangle.shapeTypePrint();
triangle.print()
console.log(`Area of a ${triangle.name}: ${triangle.calculateArea()} and its color is ${triangle.color}`);