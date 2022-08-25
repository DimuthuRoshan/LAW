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
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { userService } from "../services/UserService";

const Login = () => {
  console.log("Login Login Login");
  const { userLogin } = userService();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /**s
   * Handle visibility of the password
   * @returns void
   */
  const handleVisibility = () =>
    showPassword ? setShowPassword(false) : setShowPassword(true);

  /**
   * Update the userName state on input change
   * @param event React.ChangeEvent<HTMLInputElement>
   * @returns void
   */
  const handleOnUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);

  /**
   * Update the password state on input change
   * @param event React.ChangeEvent<HTMLInputElement>
   * @returns void
   */
  const handleOnPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleLogin = () => userLogin(userName, password);

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
          value={userName}
          onChange={handleOnUserNameChange}
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
          value={password}
          onChange={handleOnPasswordChange}
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
      </Stack>
    </Box>
  );
};

export default Login;
