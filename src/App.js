import './App.css';
import Menu from './components/Menu';
import Search from './components/Search';
import TransactionsTable from './components/Transactions/TransactionsTable';
import mainFunction, { howLoopsWork, sampleFunction } from './ExploringLoops';

function App() {

  mainFunction();
  sampleFunction();
  howLoopsWork();

  return (
    <div>
      <Menu />
      <Search />
      <TransactionsTable />
    </div>
  );
}

export default App;
