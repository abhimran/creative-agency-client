import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminDashboard from './components/Dashboard/AdminDashboard';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginContextProvider from './contexts/LoginContext';
import Home from './pages/Home';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}
function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <LoginContextProvider>
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
        <PrivateRoute path="/dashboard">
            <AdminDashboard></AdminDashboard>
        </PrivateRoute>
      </Switch>
    </Router>
    </LoginContextProvider>
    </AlertProvider>
  );
}

export default App;
