// const inquirer = require('inquirer');
import inquirer from 'inquirer';
import fs from 'fs/promises';
import { SVG } from '../svg.js';
import { Square } from '../lib/shapes.js';

// const fs = require('fs');
// import { Circle, Triangle, Square } from './lib/shapes';


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
            // choices: [Circle, Triangle, Square]
            choices: ['Circle', 'Triangle', 'Square']

        },
        {
            type: 'input',
            message: ('Enter shape color'),
            name: 'shapeColor',
        },
    ])

    .then((answers) => {



        switch (Shapes) {
            case 'Circle':

                break;
            case 'Triangle':
                triangle = new Triangle();
                break;
            case 'Square':
                svgSquare = square.render();
                break;
        }



        // code below renders the square from shapes.js
        const square = new Square();
        square.setColor('white');
        const svgSquare = square.render();

        // code below renders the svg.js
        const svgInstance = new SVG();
        const svgElement = svgInstance.render();

        // remember to call on whatever you end up rendering
        fs.writeFile('logo.svg', svgSquare);


    })