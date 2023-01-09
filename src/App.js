import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Login from './components/Login';
import Menu from './components/Menu';
import FindTransactionsPage from './components/Transactions/FindTransactionsPage';
import { UserContext } from './contexts/UserContext';
import store from './store/store';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState({ name : "", role : ""});

  return (
    <BrowserRouter>
    <Provider store={store} >
    <UserContext.Provider value={{user:currentUser, setUser:setCurrentUser }}>
      <Menu />
      <Routes>
        <Route path="/login" element = {<Login />} />
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
      </UserContext.Provider>   
      </Provider>
    </BrowserRouter>
  );
}

export default App;
