class Vehicle {
  constructor(public color: string) {}
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  protected honk = (): void => {
    console.log('beep');
  };
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(private wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }

  get wheelsOfCar(): number {
    return this.wheels;
  }
}

const car = new Car(4, 'green');
car.startDrivingProcess();
console.log(car.wheelsOfCar);
