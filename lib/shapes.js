// created a shape class the inherits the shape color for all the shapes and the basic shape rendering function is defined here
// all exported to the svg js
class Shape {
    constructor() {
        this.shapeColor = '';
        
    }
    setColor(color) {
        this.shapeColor = color;

    }

}

export class Circle extends Shape {

    render() {
        return`<circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />`
        
    }

}

export class Triangle extends Shape {
    render() {
       return `<polygon points="100,20 40,180 160,180" fill="${this.shapeColor}" />`
    }

}

export class Square extends Shape {
    render() {
        return `<rect x="40" y="40" width="120" height="120" fill="${this.shapeColor}" />`

    }

}