import React, { useContext } from 'react';
import { loginContext } from '../../contexts/LoginContext';
const Home = () => {
   const {loggedInUser} = useContext(loginContext)
  return (
    <div>
      <h2>Creative Agency DashBoard</h2>
      <h5>Welcome, {loggedInUser.name}!</h5>
      <p>Stay With Us</p>
    </div>
  );
};

export default Home;