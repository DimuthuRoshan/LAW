import React from "react";
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
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Login = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <Avatar
          sx={{ width: 150, height: 150 }}
          style={{ alignSelf: "center" }}
        >
          <AccountCircleIcon sx={{ fontSize: 155, bgcolor: blue[700] }} />
        </Avatar>
        <OutlinedInput
          id='user-name'
          type={"text"}
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
          type={"password"}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='toggle password visibility' edge='end'>
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
        />
        <Button variant='contained'>LOGIN</Button>
      </Stack>
    </Box>
  );
};

export default Login;
