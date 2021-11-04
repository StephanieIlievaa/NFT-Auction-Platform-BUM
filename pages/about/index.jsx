import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header.jsx";
import Trending from "../../src/components/trending-section/TrendingSection.jsx";
import LiveAuction from "../../src/components/live-auction/LiveAuction.jsx";
import Footer from "../../src/components/footer/Footer.jsx";
import How from "../../src/components/how/How.jsx";
export default function About() {
  const cards = [
    {
      name: "Ivy",
      likes: 1000,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "1",
      currency: "ETH",
    },
    {
      name: "Judie",
      likes: 1000,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "2.3",
      currency: "ETH",
    },
    {
      name: "Juniper",
      likes: 1000,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "5",
      currency: "ETH",
    },
    {
      name: "Maple",
      likes: 1000,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "10",
      currency: "ETH",
    },
  ];
  const liveCards = [
    {
      name: "Suspect of Change",
      likes: 1100,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "10",
      currency: "ETH",
      timeLeft: 200,
    },
    {
      name: "Strugle of Generousity",
      likes: 1100,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "10",
      currency: "ETH",
      timeLeft: 200,
    },
    {
      name: "Humor of Psychology",
      likes: 1100,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "10",
      currency: "ETH",
      timeLeft: 200,
    },
    {
      name: "Unfortunate Insanity",
      likes: 1100,
      mediaUrl: "images/nft.jpg",
      user: {
        avatarUrl: "images/avatar.png",
        verified: true,
      },
      price: "10",
      currency: "ETH",
      timeLeft: 200,
    },
  ];

  const steps = [
    {
      number : 1,
      title : 'DIGITAL CURRENCY',
      description: 'You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange.'
    },
    {
      number : 2,
      title : 'CRYPTO WALLET',
      description: 'A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.'
    },
    {
      number : 3,
      title : 'BUM.',
      description: 'Let\'s connect yout wallet to BUM, edit your profile, and begin interacting in tha space.'
    },
  ]
  
  const how = {
    title : 'HOW IT WORKS',
    description : 'Discover, collect, and sell extraordinary NFT\'s on the world\'s first & largest NFT marketplace. There are three things you\'ll need in place to open your account and start bying or selling NFT\'s on BUM.',
    items : steps,
    link: 'href',
  }

  return (
    <Container maxWidth="lf">
      <Grid container justifyContent="center">
        <Grid item>
          <Header></Header>
          <Trending cards={cards} />
          <How 
      title={how.title} description={how.description} items={how.items} link={how.items}
          />
          <LiveAuction cards={liveCards} />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
