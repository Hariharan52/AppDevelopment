import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link for navigation
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logout } from '../Redux/userSlice';
import Logout from './Logout';
import { selectUser } from '../Redux/userSlice';
import '../Assets/Header.css';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
    {user && <Logout />}
      <div className="logo">
        <h1>GoMart Grocery</h1>
      </div>
      <div className="actions">
        {user ? (
          <>
            <p>Welcome, {user.firstName}</p>
            <IconButton onClick={handleLogout}>
              Logout
            </IconButton>
          </>
        ) : (
          <>
            <Link to="/login"> 
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Link>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
