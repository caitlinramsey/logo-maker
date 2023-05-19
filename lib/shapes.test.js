// const { describe } = require('node:test');
const {Circle, Triangle, Square} = require('./shapes');

describe('Circle', () => {
    it('should render a circle', () => {
        const circle = new Circle();
        const expectedSVG = `<circle fill='green' cx='150' cy='120' r='80' />`;
        circle.setColor('green')
        const testSVG = circle.render();
        expect(testSVG).toEqual(expectedSVG);
    });
});

describe('Triangle', () => {
    it('should render a triangle', () => {
        const triangle = new Triangle();
        const expectedSVG = `<polygon fill='green' points='150,18 244, 182 56, 182' />`;
        triangle.setColor('green')
        const testSVG = triangle.render();
        expect(testSVG).toEqual(expectedSVG);
    });
});

describe('Square', () => {
    it('should render a square', () => {
        const square = new Square();
        const expectedSVG = `<rect fill='green' x='50' y='45' width='200' height='200' />`;
        square.setColor('green')
        const testSVG = square.render();
        expect(testSVG).toEqual(expectedSVG);
    });
});