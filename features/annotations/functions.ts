const multiply = (a: number, b: number): number => {
  return a * b;
};

function divide(num1: number, num2: number): number {
  return num1 / num2;
}

const substract = function (num1: number, num2: number): number {
  return num1 - num2;
};

const isNegative = (num: number): boolean => {
  return num < 0;
};

const toUpperCase = (name: string): string => {
  return name.toUpperCase();
};

const logMessage = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
