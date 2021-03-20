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
import SetMap from './components/Map/SetMap';



export const UserContext = createContext();

function App() {

  const [loginInfo, setLoginInfo] = useState([])

  return (
    <UserContext.Provider value={[loginInfo, setLoginInfo]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination/:fullname">
            <DestinationSelection />
            <SetMap />
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
