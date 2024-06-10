import { SVG } from '../svg.js';

class Shape {
    constructor() {
        this.shapeColor = '';
        const svgInstance = new SVG();
}
    setColor(color) {
        this.shapeColor = color;
       
    }

}

export class Circle extends Shape {
    
    render() {
        return `<'${this.shape}' cx="150" cy="100" r="80" fill="${this.shapeColor}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` }

}

export class Triangle extends Shape {
    render() {
        `<${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`}

}

export class Square extends Shape {
    render() {
        return `<${this.shape} x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

     }

}