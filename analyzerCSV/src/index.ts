import { MatchResult } from './MatchResult';
import { CsvReader } from './CsvReader';

const reader = new CsvReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
  ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) &&
    manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games`);
