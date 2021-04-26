import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

console.log('Sorting for numbers: ');
const numbersCollection = new NumbersCollection([10, -1, 0, -2, 12, 6]);
numbersCollection.sort();
console.log(numbersCollection.data);

console.log('Sorting for characters: ');
const charactersCollection = new CharactersCollection('edXZys');
charactersCollection.sort();
console.log(charactersCollection.data);

console.log('Sorting for linkedlist: ');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
