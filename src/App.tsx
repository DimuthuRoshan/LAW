import React from "react";
import "./App.css";
import Login from "./components/login";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems={"center"}
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Login />
      </Grid>
    </Grid>
  );
}

export default App;
