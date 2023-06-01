import React from 'react'
import {AppBar,Avatar,Button,Toolbar,Typography} from "@mui/material";
import './navbar.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Navbar = () => {
  const user =JSON.parse( window.localStorage.getItem("userprofile"));
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const logout=()=>{
    dispatch({type:'LOGOUT'});
    navigate('/')
}
  return (
    
    <AppBar position="static" className='NavBar'>

          <Typography variant="h6" className='Gamezone' component="div" onClick={()=>{navigate('/')}} sx={{ flexGrow: 1 }}>
          Game Zone
          </Typography>
        <Toolbar >
         {user?(
             <div className='Userprofile' >
                 <Avatar className='Avat'  alt={user?.result.name} onClick={()=>{navigate('/Winnings')}} src={user?.result.imageurl}>{user?.result.name.charAt(0)}</Avatar>
                 
                 <Typography  className='navbarusername' variant="h6">{user?.result.name}</Typography>
                 <Button variant="contained"  color="secondary" onClick={logout}>Logout</Button>
             </div>
         ):(
             <Button  onClick={()=>{navigate('/Login')}} variant="contained" color="primary">Sign in</Button>
         )}
     </Toolbar>
      </AppBar>
  )
}

export default Navbar