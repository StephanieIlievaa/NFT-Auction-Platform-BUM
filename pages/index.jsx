import Header from "../src/components/header/Header.jsx";
import Featured from "../src/components/featured/Featured.jsx";
import Trending from "../src/components/trending/Trending.jsx"
import TopCollectors from "../src/components/collector/top-collectors/TopCollectors.jsx";
import How from "../src/components/how/How.jsx";
import Auctions from "../src/components/auctions/Auctions.jsx";
import Footer from '../src/components/footer/Footer.jsx'
import { useState, useEffect } from "react";
import dataFeatured from "../data/featured.json";
import dataHow from "../data/how.json";
import dataCollectors from "../data/collectors.json";
import dataNfts from "../data/nfts.json";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";


function Home() {

  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(() => {
    setFeaturedCards(dataFeatured);
  });

  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    setNfts(dataNfts);
  });

  const [topCollectors, setTopCollectors] = useState([]);
  useEffect(() => {
    setTopCollectors(dataCollectors);
  });

  const [HowSteps, setHowSteps] = useState([]);
  useEffect(() => {
    setHowSteps(dataHow);
  });

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item>
          <Header/>
          <Featured items={featuredCards.cards} />

          <Trending cards={nfts.cards} />
          <TopCollectors collectors={topCollectors.collectors}></TopCollectors>
          <How {...HowSteps.how} />
          <Auctions cards={nfts.liveCards} />

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
