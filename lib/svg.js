
export class SVG {
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

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

           ${this.shape}

           <text x="100" y="120" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

         </svg>`;
    }
}

