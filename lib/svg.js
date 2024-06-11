// the svg class here sets the text colors, shapes, and text and then renders the entire logo
class SVG {
    constructor() {
        this.shape = '';
        this.textColor = '';
        this.text = '';
    }

    setShapes(shape) {
        this.shape = shape;
    }
    
    settextColors(textColor) {
        this.textColor = textColor;
    }

    setText(text) {
        this.text = text;
    }
    // the this.shape is dynamically entered by importing the shape string from the shape js file which also has the dynamically added shapecolor

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

           ${this.shape}

           <text x="100" y="120" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

         </svg>`;
    }
}

// this is all exported to the index file

module.exports = { SVG }