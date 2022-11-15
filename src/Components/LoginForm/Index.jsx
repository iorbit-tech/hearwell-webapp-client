import React from "react";
import { Button, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Paper elevation={3} style={{ height: 450, width: 420, marginTop: 50, alignSelf: 'center', justifyContent: 'center' }}>
      <h3 style={{ textAlign: 'center', paddingTop: 20 }}>Login</h3>
      <div style={{ width: '100%', }}>
        <FormControl style={{ marginLeft: '25%' }} sx={{ m: 1, width: '25ch', }} variant="outlined">
          <TextField
            required
            id="outlined-required"
            label="UserName"
            // defaultValue="UserName"
            margin="normal"
          />
        </FormControl>
        <FormControl style={{ marginLeft: '25%' }} sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div style={{ marginLeft: '40%' }}>
        <Button style={{ backgroundColor: '#9E7BF9', color: '#fff', fontWeight: '600', marginLeft: 10, }} variant="text">Login</Button>
      </div>
      <Link style={{ textDecoration: 'none', }} to="/register"><p style={{ textAlign: 'center', color: 'grey', fontWeight: '600', }} variant="text">Don't have an account? Sign Up</p></Link>
      <a style={{}} href=""><p style={{ marginLeft: '48%', }}>Forgot Password?</p></a>
    </Paper>
  )
};

export default LoginForm;
