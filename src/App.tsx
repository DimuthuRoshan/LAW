import React from "react";
import "./App.css";
import Login from "./components/login";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";
import {getAllUsers} from "./services/UserService"

const GET_LOCATIONS = loader("./graphql/queries/getLocations.graphql");

function App() {
  console.log(process.env);
  getAllUsers()

  const { data } = useQuery(GET_LOCATIONS);

  console.log(data);

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
