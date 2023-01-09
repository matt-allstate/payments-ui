import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Menu from './components/Menu';
import FindTransactionsPage from './components/Transactions/FindTransactionsPage';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/add" element = {<AddTransaction />} />
        <Route path="/find" element = {
          <FindTransactionsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
        />
        <Route path="/find/:orderId" element = {
          <FindTransactionsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
        />
        <Route path="/" element = { <h1>Welcome to the Payments system</h1>}/>
        <Route path="*" element = { <><h1>Sorry - that page doesn't exist</h1><p>Page not found</p></>}/>
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
