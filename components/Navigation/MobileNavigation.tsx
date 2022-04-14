import React from "react";
import { ExternalNavigationItem, InternalNavigationItem } from ".";
import { push as Menu } from "react-burger-menu";
import styles from "./MobileNavigation.module.css";
import Link from "next/link";
import { styled } from "../../stitches.config";

type Props = {
  internalNavigationItems: Array<InternalNavigationItem>;
  externalNavigationItems: Array<ExternalNavigationItem>;
};

const MobileNavigation = ({
  externalNavigationItems,
  internalNavigationItems,
}: Props) => {
  return (
    <Header>
      <Link href="/" passHref>
        <a aria-label="Go back home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" />
        </a>
      </Link>
      <Menu
        styles={MENU_STYLES}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        right
        width={"100%"}
        // eslint-disable-next-line @next/next/no-img-element
        customBurgerIcon={<img src="/hamburger.svg" alt="" />}
        customCrossIcon={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/close.svg"
            alt=""
            style={{ backgroundColor: "transparent" }}
          />
        }
      >
        {internalNavigationItems.map(({ displayName, path }) => {
          return (
            <Link href={path} key={path} passHref>
              <StyledLink>{displayName}</StyledLink>
            </Link>
          );
        })}

        <SectionHeader>Follow us</SectionHeader>
        {externalNavigationItems.map(({ displayName, url }) => {
          return (
            <StyledLink href={url} target="_blank" key={url}>
              {displayName}
            </StyledLink>
          );
        })}
      </Menu>
    </Header>
  );
};

export default MobileNavigation;

const MENU_STYLES = {
  bmBurgerButton: {
    position: "fixed",
    width: "24px",
    height: "24px",
    right: "30px",
    top: "24px",
  },
  bmBurgerBars: {},
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    top: "38px",
    right: "38px",
  },
  bmCross: {
    color: "#151515",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "#E5E5E5",
    fontSize: "16px",
    fontWeight: "700",
  },
  bmMorphShape: {
    fill: "red",
  },
  bmItemList: {
    color: "#b8b7ad",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "164px",
    rowGap: "24px",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 60px",

  "@bp2": {
    display: "none",
  },
});

const StyledLink = styled("a", {
  color: "$black",
  textDecoration: "none",
});

const SectionHeader = styled("h3", {
  color: "$gray500",
  fontWeight: 400,
  margin: 0,
  marginTop: 40,
  marginBottom: 26,
});
