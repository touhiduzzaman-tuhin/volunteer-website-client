import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AddEvent from './components/AddEvent/AddEvent';
import Blog from './components/Blog/Blog';
import Donation from './components/Donation/Donation';
import Event from './components/Event/Event';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import RegisterVolunteerList from './components/RegisterVolunteerList/RegisterVolunteerList';
import VolunteerList from './components/VolunteerList/VolunteerList';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute> */}
          {/* <Route path="/register">
            <Register></Register>
          </Route> */}
          <PrivateRoute path="/register/:volunteerType">
            <Register></Register>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/event">
            <Event></Event>
          </Route>
          <Route path="/volunteerList">
            <VolunteerList></VolunteerList>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/registerVolunteerList">
            <RegisterVolunteerList></RegisterVolunteerList>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
