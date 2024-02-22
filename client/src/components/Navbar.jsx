import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header= styled(AppBar)`
background: grey;
margin-bottom: 5px`;

const Options=styled(NavLink)`
color: White;
font: bold;
margin-right: 5%;
cursor: pointer;
text-decoration: none;
`;

function Navbar() {
  return (
    <Header position='static'>
        <Toolbar>
            <Options to='/'>
                Home
            </Options>
            <Options to='AllUsers'>
                View Users
            </Options>
            <Options to='AddUsers'>
                Add USers
            </Options>
        </Toolbar>
    </Header>
  )
}

export default Navbar