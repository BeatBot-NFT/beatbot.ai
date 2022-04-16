import React from "react";
import HeroImage from "../../public/hero.png";
import Image from "next/image";
import { styled } from "../../stitches.config";

const Hero = () => {
  return (
    <Container>
      <Title>From our Metaverse to yours.</Title>
      <ImageContainer>
        <Image src={HeroImage} alt="" />
      </ImageContainer>
    </Container>
  );
};

export default Hero;

const Container = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateAreas: "'main'",
  alignItems: "center",
  justifyItems: "center",
  textAlign: "center",
  height: "100vh",
  marginTop: "-64px",

  "@bp2": {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: "'main aside'",
    paddingLeft: "122px",
    paddingRight: "122px",
    paddingTop: "56px",
    marginTop: "0px",
  },
});

const Title = styled("h1", {
  gridArea: "main",
  zIndex: 2,
  fontSize: "72px",
  fontWeight: "700",
  color: "$black",
  textTransform: "uppercase",
  textAlign: "center",

  "@bp2": {
    textAlign: "left",
  },
});

const ImageContainer = styled("div", {
  gridArea: "main",
  zIndex: 0,
  opacity: 0.4,

  "@bp2": {
    opacity: 1,
    gridArea: "aside",
    position: "initial",
  },
});
