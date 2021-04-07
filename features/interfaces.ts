interface Car {
  name: string;
  price: number;
  isCool: boolean;
  summary(): string;
}

const car = {
  name: 'tesla',
  price: 18000,
  isCool: true,
  summary(): string {
    return `Name: ${this.name}\n
            Price: ${this.price}\n
            Cool? ${this.isCool}`;
  },
};

const printCar = (yourCar: Car): void => {
  console.log(yourCar.summary());
};

printCar(car);
