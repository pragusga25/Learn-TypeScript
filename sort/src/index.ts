import { CharactersCollection } from './CharactersCollection';
// import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([10, -1, 0, -2, 12, 6]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('AaXZys');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
