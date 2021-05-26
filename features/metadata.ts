import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'green';

  @markFunction('HI YOU')
  fly(): void {
    console.log('RRRRRRR');
  }
}

function markFunction(secretInfo: string): Function {
  return function (target: Plane, key: string): void {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'Hi, there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

// // Reflect.defineMetadata('note', 'Hello there', plane);
// // Reflect.defineMetadata('height', 10, plane);

// // const note = Reflect.getMetadata('note', plane);
// // const height = Reflect.getMetadata('height', plane);

// // console.log(note);
// // console.log(height);
