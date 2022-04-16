import React, { useState } from "react";
import { ExternalNavigationItem, InternalNavigationItem } from ".";
import { push as Menu } from "react-burger-menu";
import Link from "next/link";
import { styled } from "../../stitches.config";
import useScrollPosition from "../../hooks/useScrollPosition";

type Props = {
  internalNavigationItems: Array<InternalNavigationItem>;
  externalNavigationItems: Array<ExternalNavigationItem>;
};

const MobileNavigation = ({
  externalNavigationItems,
  internalNavigationItems,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <Header type={scrollPosition.y > 100 ? "solid" : undefined}>
      <Link href="/" passHref>
        <a aria-label="Go back home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" height="32px" width="51px" />
        </a>
      </Link>
      <Menu
        styles={MENU_STYLES}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        right
        width={"100%"}
        customBurgerIcon={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/hamburger.svg"
            alt=""
            onClick={() => {
              setIsOpen(true);
            }}
          />
        }
        customCrossIcon={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/close.svg"
            alt=""
            style={{ backgroundColor: "transparent" }}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        }
        isOpen={isOpen}
        onOpen={() => {
          setIsOpen(true);
        }}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {internalNavigationItems.map(({ displayName, path }) => {
          return (
            <Link href={path} key={path} passHref>
              <StyledLink
                onClick={(e) => {
                  setIsOpen(false);
                }}
              >
                {displayName}
              </StyledLink>
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
    top: "20px",
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
  position: "sticky",
  top: 0,
  zIndex: 9999,
  transition: "background 0.2s",

  "@bp2": {
    display: "none",
  },

  variants: {
    type: {
      solid: {
        background: "$gray400",
      },
    },
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
