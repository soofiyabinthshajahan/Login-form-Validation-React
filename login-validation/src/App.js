import React from 'react';
import CreateAccount from './CreateAccount/CreateAccount';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Login-page/Login';
import ForgotAccount from './ForgotAccount/ForgotAccount';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
       
       <Route path='/' element={<CreateAccount/>}></Route>
       <Route path='Login-page' element={<Login/>}></Route>
       <Route path='forgot-account' element={<ForgotAccount/>}></Route>
       <Route path='create-account' element={<CreateAccount/>}></Route>

        </Routes>
      </div>
    </Router>
  );

}

export default App;
