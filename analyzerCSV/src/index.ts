import { CsvReader } from './CsvReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// Create an object that satisfies the DataReader interface
const csvReader = new CsvReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the DataReader interface
const matchReader = new MatchReader(csvReader);
matchReader.load();

for (let match of matchReader.matches) {
  ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) &&
    manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games`);
