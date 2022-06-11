import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const navigate = useNavigate();

  const logoutUserHandler = () => {
    window.localStorage.removeItem('currentUser');
    navigate('/login');
  }
  return (
    <nav>
      <ul>
        <li>React Foods</li>
        <li><Link to="/dishes">All Dishes</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li onClick={logoutUserHandler}><button>Logout</button></li>
      </ul>
    </nav>
  )
}

export default Navbar;