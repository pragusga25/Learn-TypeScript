class Person {
  name: string = 'Taufik Pragusga';

  get formattedName(): string {
    return `My name is ${this.name}`;
  }

  @testDecorator
  sayHi(): void {
    console.log('Hello');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
}
