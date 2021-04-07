interface Car {
  name: string;
  price: number;
  isCool: boolean;
}

const car = {
  name: 'tesla',
  price: 18000,
  isCool: true,
};

const printCar = (yourCar: Car): void => {
  console.log(`Name: ${yourCar.name}`);
  console.log(`Price: ${yourCar.price}`);
  console.log(`Cool?: ${yourCar.isCool}`);
};

printCar(car);
