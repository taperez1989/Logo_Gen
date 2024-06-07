class Shape {
    constructor() {
        this.shapeColor = '';
}
    setColor(color) {
        this.shapeColor = color;
       
    }

}

export class Circle extends Shape {
    render() { return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.shapeColor}" stroke-width="5" />` }

}

export class Triangle extends Shape {
    render() {}

}

export class Square extends Shape {
    render() { return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/> `}

}

// const circle = new circle();
// const triangle = new triangle();
// const square = new square();



// module.exports = { Circle, Triangle, Square };



// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//     <circle cx="150" cy="100" r="80" fill="green" />

//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>