interface ReportAble {
  summary(): string;
}

const car = {
  name: 'tesla',
  price: 18000,
  isCool: true,
  summary(): string {
    return `Name: ${this.name}\nPrice: ${this.price}\nCool? ${this.isCool}`;
  },
};

const food = {
  color: 'white',
  healthy: true,
  carbohidrat: 100,
  summary(): string {
    return `My food has ${this.carbohidrat} grams of carbohidrat`;
  },
};

const printSummary = (item: ReportAble): void => {
  console.log(item.summary());
};

printSummary(car);
printSummary(food);
