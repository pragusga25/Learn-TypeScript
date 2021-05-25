class Person {
  name: string = 'Taufik Pragusga';

  get formattedName(): string {
    return `My name is ${this.name}`;
  }

  @testDecorator
  sayHi(): never {
    throw new Error();
    console.log('Hello');
  }
}

function testDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  const method = desc.value;
  console.log(method);

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.error('Error');
    }
  };
}

new Person().sayHi();
