import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, -1, 0, -2, 12, 6]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
