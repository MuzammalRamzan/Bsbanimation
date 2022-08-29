import logo from './logo.svg';
import './App.css';
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/header'
import Header1 from './components/Header1/Header1';
import Dashboard from './components/dashboard/dashboard'
import Account from './components/account/myaccount'
import Transactions from './components/transactions/transactions'
import Footer from './components/footer/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Header1 />
      {/* <Dashboard /> */}
      <Account />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
