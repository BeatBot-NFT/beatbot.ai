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

const Section = styled("section", {});
