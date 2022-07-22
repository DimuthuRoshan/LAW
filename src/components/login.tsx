import React, { useState } from "react";
import {
  OutlinedInput,
  IconButton,
  InputAdornment,
  Box,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GoogleLogin from "./GoogleLogin/GoogleLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleVisibility = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleLogin = (user: {}) => {
    navigate("/home", { state: { user } });
  };

  const handleSignInSuccess = (user: {}) => {
    console.log(user);
    handleLogin(user);
  };

  const handleSignInError = (error: {}) => {
    console.log(error);
  };

  return (
    <Box>
      <Stack spacing={2} padding={2}>
        <Avatar
          sx={{ width: 150, height: 150 }}
          style={{ alignSelf: "center" }}
        >
          <AccountCircleIcon sx={{ fontSize: 155, bgcolor: blue[700] }} />
        </Avatar>
        <OutlinedInput
          id='user-name'
          type={"text"}
          placeholder={"User name"}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='user name' edge='end'>
                <PersonIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        <OutlinedInput
          id='outlined-adornment-password'
          type={showPassword ? "text" : "password"}
          placeholder={"Password"}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                edge='end'
                onClick={handleVisibility}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button variant='contained' onClick={handleLogin}>
          LOGIN
        </Button>
        <GoogleLogin
          onSignInSuccess={handleSignInSuccess}
          onSignInError={handleSignInError}
        />
      </Stack>
    </Box>
  );
};

export default Login;
