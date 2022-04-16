import React from "react";
import { styled } from "../../stitches.config";
import { EXTERNAL_NAVIGATION_ITEMS } from "../Navigation";
import { SocialIcons } from "../Navigation/DesktopNavigation";

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-full-outline.svg" alt="" />
        <div>
          <p>TRANSLATED FROM BEATOPIA</p>
          <p>FOR YOUR LITERACY PLEASURE</p>
        </div>
        <div>
          <p>©{new Date().getFullYear()} BEATBOT.</p>
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </section>
      <SocialIconsContainer>
        <SocialIcons navigationItems={EXTERNAL_NAVIGATION_ITEMS} />
      </SocialIconsContainer>
    </StyledFooter>
  );
};

export default Footer;

const SocialIconsContainer = styled("section", {
  paddingTop: 12,
  justifyContent: "flex-end",
  gap: 0,
  img: {
    filter: "invert(1)",
    height: 20,
    width: 20,
  },

  "@bp2": {
    paddingTop: 0,
  },
});

const StyledFooter = styled("footer", {
  padding: "24px 80px 32px 80px",
  background: "$black",
  color: "$white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid $white",

  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    flexShrink: 0,

    "@bp3": {
      flexDirection: "row",
      gap: 100,
    },
  },

  "@bp3": {
    padding: "82px 122px",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  p: {
    margin: 0,
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "$body",
    color: "$white",
    lineHeight: "16.41px",
    textAlign: "center",
  },

  img: {
    width: 147,
    "@bp2": {
      width: 246,
    },
  },
});
