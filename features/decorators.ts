@classDecorator
class Person {
  @testDecorator
  name: string = 'Taufik Pragusga';

  get formattedName(): string {
    return `My name is ${this.name}`;
  }

  @logError('Oops, person was tired')
  sayHi(
    @parameterDecorator otherName: string,
    @parameterDecorator happy: boolean
  ): void {
    if (otherName === 'Kanna' && happy) console.log('Hello');
    else console.log('Hi');
  }
}

function classDecorator(constructor: typeof Person): void {
  console.log(constructor);
}

function parameterDecorator(_target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string): Function {
  return function (_target: any, _key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.error(errorMessage);
      }
    };
  };
}
