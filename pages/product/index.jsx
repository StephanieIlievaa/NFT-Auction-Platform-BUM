import Header from "../../src/components/header/Header.jsx";
import Footer from "../../src/components/footer/Footer.jsx";
import ProductContainer from "../../src/components/product/ProductContainer.jsx";
import dataNfts from "../../data/nfts.json";
import {useState, useEffect} from 'react';
import {Container, Grid} from '@mui/material/'

export default function Product() {

  // const [nfts, setNfts] = useState([]);
  // useEffect(() => {
  //   setNfts(dataNfts);
  // });

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item>
          <Header />
          <ProductContainer />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}