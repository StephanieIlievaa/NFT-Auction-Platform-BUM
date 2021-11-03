import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header.jsx";
import Trending from "../../src/components/trending-section/TrendingSection.jsx";
import LiveAuction from "../../src/components/live-auction/LiveAuction.jsx";

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
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header></Header>
        <Trending cards={cards}/>
           <LiveAuction cards={liveCards}/>
        </Grid>
      </Grid>
    </Container>
  );
}
