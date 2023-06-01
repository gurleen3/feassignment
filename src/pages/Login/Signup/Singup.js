import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { signup } from "../../../action/action";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

const Singup = () => {
  const [showPassword,setshowPasswrod]=useState(false)
  const [formData,setFormData]=useState({email:"",password:'',FullName:''})
  let navigate = useNavigate();
  const user = window.localStorage.getItem("userprofile");
  const dispatch = useDispatch();
  const [error,seterror]=useState({email:false,password:false,name:false})
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handlesingup=()=>{
    if(formData['email']!=='' && formData['password']!=="" && formData['FullName']!=='' && validator.isEmail(formData['email'])){
      dispatch(signup(formData, navigate));
    }
    else if(formData['email']==='' || validator.isEmail(formData['email']))
    {
      seterror({...error,email:true})
    }
    else if(formData['FullName']==="")
    {
      seterror({...error,name:true})

    }
    else{
      seterror({...error,password:true})

    }
  }


  return (
    <div className='LoginDiv'>
      <div className='LoginForm'>
      <Typography  variant="h3" className='loginheading' > SignUp </Typography>
      <TextField
          error={error['email']}
          label="Email"
          defaultValue={formData['email']}
          margin='normal'
          sx={{width:'28ch'}}
          onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
        />
        <TextField
          error={error['FullName']}
          label="Name"
          defaultValue={formData['FullName']}
          margin='normal'
          sx={{width:'28ch'}}
          onChange={(e)=>{setFormData({...formData,FullName:e.target.value})}}
        />
        <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined"   >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>{setshowPasswrod(!showPassword)}}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            defaultValue={formData['password']}
            onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
            error={error['password']}
          />
        </FormControl>
        <div>
        <Button variant="contained" onClick={handlesingup}>Submit</Button>
        <Typography className='signuptext' variant='caption' onClick={()=>{navigate('/Login')}}>Login</Typography>

        </div>
      </div>
    </div>
  )
}

export default Singup