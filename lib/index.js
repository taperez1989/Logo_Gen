
import inquirer from 'inquirer';
import fs from 'fs/promises';
import { Circle, Triangle, Square } from './shapes.js';
import { SVG } from './svg.js';


inquirer
    .prompt([
        {
            type: 'input',
            message: ('Enter logo text'),
            name: 'text',
        },
        {
            type: 'input',
            message: ('Enter the color of your text'),
            name: 'textColor',
        },
        {
            type: 'list',
            message: ('Choose a shape'),
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']

        },
        {
            type: 'input',
            message: ('Enter shape color'),
            name: 'shapeColor',
        },
    ])

    .then((answers) => {

        let shape;
        const svg = new SVG();


        switch (answers.shape) {
            case 'Circle':
                shape = new Circle();
                shape.setColor(answers.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle();
                shape.setColor(answers.shapeColor);
                break;
            case 'Square':
                shape = new Square();
                shape.setColor(answers.shapeColor);
                break;
        }
        svg.setShapes(shape.render());
        svg.settextColors(answers.textColor);
        svg.setText(answers.text);
        // code below renders the square from shapes.js
        // const square = new Square();
        // square.setColor('white');
        // const svgSquare = square.render();

        // code below renders the svg.js
        
        const svgElement = svg.render();

        // remember to call on whatever you
        fs.writeFile('logo.svg', svgElement);


    })