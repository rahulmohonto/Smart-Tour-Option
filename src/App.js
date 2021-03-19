import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DestinationSelection from './components/DestinationSelection/DestinationSelection';


export const UserContext = createContext();

function App() {
  const [tours, setTours] = useState([])
  const [loginInfo, setLoginInfo] = useState([])

  return (
    <UserContext.Provider value={[loginInfo, setLoginInfo]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home tours={tours} setTours={setTours} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination/:fullname">
            <DestinationSelection tours={tours} />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );


}

export default App;
