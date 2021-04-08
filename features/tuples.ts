const cars = {
  color: 'red',
  price: 1900,
  isNew: false,
};

const ferrari: [string, number, boolean] = ['red', 10000, true];
// ferrari[1] = 'expensive';  => will get an error
ferrari[1] = 20000;

type Cars = [string, number, boolean];
const lambo: Cars = ['green', 12000, false];
const tesla: Cars = ['black', 8000, true];

