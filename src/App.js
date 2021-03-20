import React, { createContext, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import './App.css';
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Destination from "./Components/Destination/Destination";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const TransportContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [transportType, setTransportType] = useState("");
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <TransportContext.Provider value={[transportType, setTransportType]}>
        <Router>
         <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination/:transportType">
            <Destination />
          </PrivateRoute>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </TransportContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
