import React from "react";
import HeroImage from "../../public/hero.png";
import Image from "next/image";
import { keyframes, styled } from "../../stitches.config";

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
  overflow: "hidden",

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

const flightKeyframes = keyframes({
  "0%": { transform: "translate(-1000px, 1px) rotate(0deg)" },
  "5%": { transform: "translate(1px, 1px) rotate(0deg)" },
  "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
  "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
  "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
  "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
  "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
  "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
  "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
  "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
  "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
  "100%": { transform: "translate(1000px, -2px) rotate(-1deg)" },
});

const ImageContainer = styled("div", {
  gridArea: "main",
  zIndex: 0,
  opacity: 0.4,
  animation: `${flightKeyframes} 5s`,
  animationIterationCount: "infinite",
  animationDirection: "normal",

  "@bp2": {
    opacity: 1,
    gridArea: "aside",
    position: "initial",
  },
});
