
import inquirer from 'inquirer';
import fs from 'fs/promises';
import { Circle, Triangle, Square } from './shapes.js';
import { SVG } from './svg.js';


// inquirer prompts that ask the user for specific information

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

        // switch case for the answers from the prompts that sets the shapcolor also which was imported from the svg file
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

        // this is sets the shape render from the shapes js into the svg above
        // also sets the text color and answers into the svg
        // code below renders the shape from shapes.js
        svg.setShapes(shape.render());
        svg.settextColors(answers.textColor);
        svg.setText(answers.text);




        // code below renders the svg.js
        const svgElement = svg.render();

        // writes the file as a svg
        fs.writeFile('logo.svg', svgElement);


    })