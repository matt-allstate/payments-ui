import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Search from './components/Search';
import TransactionsTable from './components/Transactions/TransactionsTable';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Menu />
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}  />
      <TransactionsTable />
    </div>
  );
}

export default App;
