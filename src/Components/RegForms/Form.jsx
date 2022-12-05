import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { baseUrl } from "../../Webservice/Webservice";
import axios from "axios";
import { validEmail } from "../../utils/Regex";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function RegForm() {
  const signUpData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [user, setUser] = React.useState({ signUpData });
  const [error, setError] = React.useState("");
  const onChangeHanddle = (e) => {
    // if (!validEmail.test(e.target.value)) {
    //   setError("Enter valid email");
    // } else {
    //   setError("");
    // }
    const { name, value } = e.target;
    console.log(name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      userType: data.get("userType"),
    };
    if (!validEmail.test(userData.email)) {
      setError("Enter valid email");
    } else {
      axios
        .post(baseUrl + "/api/user", userData)
        .then((res) => console.error(res, "responseee"))
        .catch((err) => console.error(err));
    }
    console.log({
      userData,
    });
  };
  React.useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper sx={{ p: 2, marginTop: 10 }} elevation={3}>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      User type
                    </InputLabel>
                    <Select
                      name="userType"
                      labelId="demo-simple-select-label"
                      id="page-select"
                      //value={page}
                      label="Page"
                      //onChange={handlePageChange}
                    >
                      <MenuItem value={"admin"}>Admin</MenuItem>
                      <MenuItem value={"expert"}>Expert</MenuItem>
                      <MenuItem value={"user"}>User</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={false}
                    onChange={(e) => onChangeHanddle(e)}
                    // helperText={error}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) => onChangeHanddle(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => onChangeHanddle(e)}
                    error={error == "" ? false : true}
                    helperText={error}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => onChangeHanddle(e)}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#9a34e3" }}
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#9a34e3" }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>

              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Box>
        </Paper>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
