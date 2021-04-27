import { CsvReader } from './CsvReader';

const reader = new CsvReader('football.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

for (let match of reader.data) {
  ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) &&
    manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games`);