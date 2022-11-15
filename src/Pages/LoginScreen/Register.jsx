import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/Index";
import "./Index.scss";
const Register = () => {

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
        <div className="container">
            <div className="title-bar"><h2 style={{ textAlign: 'center' }}>HearWell</h2></div>
            <div className="body-cont">
                <div className="right-box">
                    <Paper elevation={3} style={{ height: 450, width: 420, marginTop: 50, alignSelf: 'center', justifyContent: 'center' }}>
                        <h3 style={{ textAlign: 'center', paddingTop: 20 }}>Register</h3>
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
                            <Button style={{ backgroundColor: '#9E7BF9', color: '#fff', fontWeight: '600', }} variant="text">Register</Button>
                        </div>
                        <Link style={{ textDecoration: 'none', }} to="/"><p style={{ textAlign: 'center', color: 'grey', fontWeight: '600', }} variant="text">Already have an account? Login</p></Link>
                        <a style={{}} href=""><p style={{ marginLeft: '48%', }}>Forgot Password?</p></a>
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default Register;
