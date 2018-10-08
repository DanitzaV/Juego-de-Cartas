import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Cartas from "./Cartas";
class ViewCartas extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Cartas />
      </Grid>
    );
  }
}
export default ViewCartas;
