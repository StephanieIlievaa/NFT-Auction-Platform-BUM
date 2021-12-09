import Header from "../../src/components/header/Header.jsx";
import Footer from "../../src/components/footer/Footer.jsx";

import dataNfts from "../../data/nfts.json";
import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material/";
import { useRouter } from "next/router";
import ProductContainer from "../../src/components/product/ProductContainer.jsx";
export default function Product() {

  const router = useRouter();
  const currentId = Number(router.query.id);

  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    setNfts(dataNfts);
  },[]);

const element = [...nfts].filter(el => {
  if(el.id === currentId) {
     return el;
      
  }
console.log(element)

})


  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item>
            <ProductContainer {...nfts} name={nfts.name} owner={nfts?.owner}/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
