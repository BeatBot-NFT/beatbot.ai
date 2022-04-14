import Link from "next/link";
import React from "react";
import { ExternalNavigationItem, InternalNavigationItem } from ".";
import { styled } from "../../stitches.config";

type Props = {
  internalNavigationItems: Array<InternalNavigationItem>;
  externalNavigationItems: Array<ExternalNavigationItem>;
};

const DesktopNavigation = ({
  externalNavigationItems,
  internalNavigationItems,
}: Props) => {
  return (
    <Header>
      <StartSection>
        <div>
          <Link href="/" passHref>
            <a aria-label="Go back home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="" />
            </a>
          </Link>
        </div>

        <nav>
          <ul>
            {internalNavigationItems.map(
              ({ displayName, path, mobileOnly }) => (
                <li key={path}>
                  <Link href={path}>{displayName}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </StartSection>

      <EndSection>
        <nav>
          <ul>
            {externalNavigationItems.map(({ displayName, url, iconPath }) => (
              <li key={url}>
                <a href={url} aria-label={displayName}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={iconPath} alt={displayName} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </EndSection>
    </Header>
  );
};

export default DesktopNavigation;

const Header = styled("header", {
  height: "56px",
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 60px",

  "@bp2": {
    display: "flex",
    height: "64px",
  },
  "@bp3": {
    padding: "16px 122px",
  },
});

const StartSection = styled("section", {
  display: "flex",
  ul: {
    padding: 0,
    marginLeft: 40,
    listStyle: "none",
    display: "flex",
    gap: "56px",
    alignItems: "center",
    a: {
      color: "$black",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "700",
    },

    "@bp3": {
      marginLeft: 180,
    },
  },

  "> div": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const EndSection = styled("section", {
  display: "flex",
  ul: {
    padding: 0,
    listStyle: "none",
    display: "flex",
    gap: "30px",
    "li, a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
