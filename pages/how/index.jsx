import Header from "../../src/components/header/Header.jsx";
import Footer from "../../src/components/footer/Footer.jsx"
import Hero from "../../src/components/hero/Hero.jsx";
import Description from "../../src/components/description/Description.jsx"
import { Container, Grid } from "@mui/material";
import dataHowInfo from '../../data/dataHow.json'

export default function How() {

  return(
    <Container maxWidth="xl">
    <Grid container justifyContent="center">
      <Grid item>
        <Header/>
       <Hero />
       <Description/>
        <Footer />
      </Grid>
    </Grid>
  </Container>
);

}