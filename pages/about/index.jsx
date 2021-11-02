import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header.jsx"
import Card from "../../src/components/card/Card.jsx"

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header>
          </Header>
          <Card/>
        </Grid>
      </Grid>
    </Container>
  );
}
