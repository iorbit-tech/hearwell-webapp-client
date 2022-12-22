import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { baseUrl, postApi } from "../../Webservice/Webservice";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { firebase } from "../../firebase/config";
import app, { signInWithGoogle } from "../../firebase/googleSignIn";
import FireBasePopUp from "../FireBasePopUp/FireBasePopUp";
import { useEffect } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link className="link" color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [sign, setSign] = React.useState(false);

  // const auth = getAuth(firebase)
  // const provider= new GoogleAuthProvider()
  const nav = useNavigate();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(newData);

    postApi("/api/user/login", newData)
      .then((resp) => {
        console.log(resp, "usr login");
        localStorage.setItem("authToken", resp.data.token);
        localStorage.setItem("userData", JSON.stringify(resp.data.user));

        console.log(
          resp.data.token,
          JSON.parse(localStorage.getItem("userData"))
        );
        if (resp.data.token) nav("/addquestions");
      })
      .catch((err) => console.log(err));
    // postApi("/api/user/login", newData).then((resp) => console.log(resp));
  };
  const signInWithGoogleFn = async () => {
    // const ggleLogin = await signInWithGoogle();
    // await console.log(ggleLogin,"google loginnnn")
    setSign(!sign);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar className="appBar" sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Button
                onClick={signInWithGoogleFn}
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
              >
                Continue with Google
              </Button>
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
              >
                Continue with Apple ID
              </Button> */}
              <Grid container>
                <Grid item xs>
                  <Link className="link" href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>

                  <Link
                    className="link"
                    to={"/signup"}
                  //  onClick={()=>{
                  //   nav("/signup")
                  // }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <FireBasePopUp sign={sign} />
    </ThemeProvider>
  );
}
