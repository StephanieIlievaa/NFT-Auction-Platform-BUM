import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header.jsx";
import Footer from "../../src/components/footer/Footer.jsx";

export default function About() {

  return (
    <Container maxWidth="lf">
      <Grid container justifyContent="center">
        <Grid item>
          <Header/>

          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}
