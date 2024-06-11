const { Circle, Triangle, Square } = require( "./shapes");

// Test the render method of the Circle class
describe("Shapes", () => {
    test('Circle render', () => {
        const color = "red"
        const shape = new Circle();
        shape.setColor(color);

        // Check if the render method returns the correct SVG string for Circle
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="80" fill="${color}" />`);
    });


})

describe("Shapes", () => {
    test('Triangle render', () => {
        const color = "yellow"
        const shape = new Triangle();
        shape.setColor(color);

        // Check if the render method returns the correct SVG string for triangle
        expect(shape.render()).toEqual(`<polygon points="100,20 40,180 160,180" fill="${color}" />`);
    });

})

describe("Shapes", () => {
    test('Square render', () => {
        const color = "blue"
        const shape = new Square();
        shape.setColor(color);

        // Check if the render method returns the correct SVG string for square
        expect(shape.render()).toEqual(`<rect x="40" y="40" width="120" height="120" fill="${color}" />`);
    });

})