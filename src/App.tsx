import React from "react";
import "./App.css";
import Login from "./components/login";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";

function App() {
  console.log(process.env);

  const handleSignInSuccess = (user: {}) => {
    console.log(user);
  };

  const handleSignInError = (error: {}) => {
    console.log(error);
  };

  const LoginWrapper = () => (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems={"center"}
      justifyContent='center'
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Login />
        <GoogleLogin
          onSignInSuccess={handleSignInSuccess}
          onSignInError={handleSignInError}
        />
      </Grid>
    </Grid>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginWrapper />} />
        <Route path='/login' element={<LoginWrapper />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
