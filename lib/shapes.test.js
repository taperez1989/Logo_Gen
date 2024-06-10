// Test the render method of the Circle class
test('Circle render', () => {
    const shape = new Circle();
    shape.setColor('blue');
    // Check if the render method returns the correct SVG string for Circle
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');