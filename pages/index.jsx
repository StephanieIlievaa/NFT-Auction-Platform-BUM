import Header from "../src/components/header/Header.jsx";
import Featured from "../src/components/featured/Featured.jsx";
import Trending from "../src/components/trending/Trending.jsx";
import TopCollectors from "../src/components/collectors/TopCollectors.jsx";
import How from "../src/components/how/How.jsx";
import Auctions from "../src/components/auctions/Auctions.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import { useState, useEffect } from "react";
import dataHow from "../data/how.json";
import dataCollectors from "../data/users.json";
import dataNfts from "../data/nfts.json";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);

  useEffect(async () => {
    let dataFeatured = await fetch(process.env.apiUrl + "/featured").then(
      (res) => res.json()
    );

    setFeaturedCards(dataFeatured);
  }, []);

  const [trending, setTrending] = useState([]);
  const [trendingMenu, setTrendingMenu] = useState([]);
  useEffect(async () => {
    let dataNfts = await fetch(process.env.apiUrl + "/" + "trending").then(
      (res) => res.json()
    );
    setTrending(dataNfts);
    setTrendingMenu(dataNfts);
  }, []);

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
          <Header />
          <Featured items={featuredCards?.nfts} />

          <Trending cards={trending?.nfts} trendingMenu={trendingMenu?.filters?.sort} />
          <TopCollectors collectors={topCollectors}></TopCollectors>
          <How {...HowSteps.how} />
          <Auctions />

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
