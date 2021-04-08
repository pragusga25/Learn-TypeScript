class Vehicle {
  drive(): void {
    console.log('Jug jag jug jag');
  }

  honk = (): void => {
    console.log('beep');
  };
}

const vehicle = new Vehicle();
vehicle.drive();
