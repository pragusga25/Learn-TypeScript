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
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Car();
// vehicle.startDrivingProcess();
