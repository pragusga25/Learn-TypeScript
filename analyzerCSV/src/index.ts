import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvReader } from './CsvReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

// Create an object that satisfies the DataReader interface
const csvReader = new CsvReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the DataReader interface
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
