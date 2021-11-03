import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header.jsx";
import Card from "../../src/components/card/Card.jsx";
import Trending from "../../src/components/trending-section/TrendingSection.jsx";

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
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Header></Header>
        <Trending cards={cards}/>
           
        </Grid>
      </Grid>
    </Container>
  );
}
