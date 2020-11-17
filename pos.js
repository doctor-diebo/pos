module.exports = {
  Shape: Shape
};

class Shape {
  constructor(shapeName) {
    switch (shapeName) {
      case 'circle':
        console.log('New shape is a circle!');
        break;
      case 'rect':
        console.log('New shape is a rectangle!');
        break;
      case 'triangle':
        console.log('New shape is a triangle!');
        break;
      case 'poly':
        console.log('New shape is a polygon!');
        break;
      default:
        throw 'Invalid shape name!';
    }
  }
}
