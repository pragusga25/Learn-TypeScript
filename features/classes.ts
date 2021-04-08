class Vehicle {
  public drive(): void {
    console.log('Brooommm');
  }

  public honk = (): void => {
    console.log('beep');
  };
}

class Car extends Vehicle {
  public drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Car();
