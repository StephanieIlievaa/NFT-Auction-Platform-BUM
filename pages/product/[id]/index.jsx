import Header from '../../../src/components/header/Header.jsx'
import ProductContainer from '../../../src/components/product/ProductContainer.jsx';
import Footer from '../../../src/components/footer/Footer.jsx';
import {Container, Grid} from '@mui/material';
import {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import dataNfts from '../../../data/nfts.json'
 export default function ProductPage() {

    const router = useRouter();
    const {currentId} = Number(router.query.id);
  
    const [nfts, setNfts] = useState([]);
    useEffect(() => {
      setNfts(dataNfts);
    },[]);
  
const element = nfts.filter(el => {
    if(el.id === currentId) {
       return el;
        
    }
})

    return (
      <>
        <Header />
        <Container maxWidth="xl">
          <Grid container justifyContent="center">
            <Grid item>
              <ProductContainer {...nfts} name={"hello"}owner={nfts?.owner}/>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </>
    );
}