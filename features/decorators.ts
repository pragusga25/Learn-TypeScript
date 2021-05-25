class Person {
  name: string = 'Taufik Pragusga';

  get formattedName(): string {
    return `My name is ${this.name}`;
  }

  @logError('Oops, person was tired')
  sayHi(): never {
    throw new Error();
    console.log('Hello');
  }
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

new Person().sayHi();
