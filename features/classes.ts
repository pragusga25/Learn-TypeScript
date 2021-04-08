class Vehicle {
  public honk = (): void => {
    console.log('beep');
  };
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Car();
vehicle.startDrivingProcess();
