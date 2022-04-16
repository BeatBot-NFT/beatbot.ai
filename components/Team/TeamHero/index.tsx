import React from "react";
import { styled } from "../../../stitches.config";

const TeamHero = () => {
  return (
    <Section>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/globe.svg" alt="" />
      <h1>The Creators</h1>
      <p>
        Our core team of Beatopians is fully commited to changing the landscape
        of Web3. We have years of experience in tech, law, the creative arts &
        we’re working to build the next biggest lifestyle brand in the
        metaverse.
      </p>
    </Section>
  );
};

export default TeamHero;

const Section = styled("section", {
  padding: "120px 0 106px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  h1: {
    margin: 0,
    marginBottom: 40,
    marginTop: 30,
    fontWeight: 700,
    fontSize: 64,
    color: "$black",
  },

  p: {
    margin: 0,
    fontSize: 18,
    fontWeight: 400,
    color: "$gray600",
    fontFamily: "$body",
    width: 649,
    textAlign: "center",
    lineHeight: "21px",
  },
});
