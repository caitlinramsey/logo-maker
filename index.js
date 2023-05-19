// import
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateSVG = require('./lib/SVG');
const {Circle, Triangle, Square} = require('./lib/shapes')

// questions for user input that generates logo

const logoQuestions = [
        {
            type: 'input',
            name: 'characters',
            message: 'How many characters do you want for your logo?',
            validate: function (value) {
                if(value.length > 3) {
                    return 'Please enter three characters or less.';
                } 
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color do you want your text to be? (keyword or hexadecimal number)',
        },
        {
            type: 'list',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square'],
            message: 'What shape do you want your logo to be?',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color do you want your shape to be? (keyword or hexadecimal number)',
        },
    ];

inquirer.prompt(logoQuestions)
    .then(({ characters, textColor, shape, shapeColor }) => {
        let logoShape;

        switch (shape) {
            case 'Circle':
                logoShape = new Circle();
                break;
            case 'Triangle':
                logoShape = new Triangle();
                break;
            case 'Square':
                logoShape = new Square();
                break;
        }

        logoShape.setColor(shapeColor)
        const svg = new generateSVG()
        svg.setText(characters, textColor)
        svg.setShape(logoShape)
        return writeFile('./examples/logo.svg', svg.render())
    })
        .then (() => console.log('Generated logo.svg'))
        .catch((err) => console.error(err));


