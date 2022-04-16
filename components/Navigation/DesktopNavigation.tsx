import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ExternalNavigationItem, InternalNavigationItem } from ".";
import useScrollPosition from "../../hooks/useScrollPosition";
import { styled } from "../../stitches.config";

type Props = {
  internalNavigationItems: Array<InternalNavigationItem>;
  externalNavigationItems: Array<ExternalNavigationItem>;
};

const DesktopNavigation = ({
  externalNavigationItems,
  internalNavigationItems,
}: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const scrollPosition = useScrollPosition();

  return (
    <Header type={scrollPosition.y > 100 ? "solid" : undefined}>
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
            {internalNavigationItems
              .filter(({ mobileOnly }) => !mobileOnly)
              .map(({ displayName, path }) => (
                <li key={path}>
                  <Link href={path} passHref>
                    <StyledAnchor
                      type={currentRoute === path ? "active" : undefined}
                    >
                      {displayName}
                    </StyledAnchor>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </StartSection>

      <EndSection>
        <nav>
          <SocialIcons navigationItems={externalNavigationItems} />
        </nav>
      </EndSection>
    </Header>
  );
};

type SocialIconsProps = {
  navigationItems: Array<ExternalNavigationItem>;
};

export const SocialIcons = ({ navigationItems }: SocialIconsProps) => {
  return (
    <SocialIconsList>
      {navigationItems.map(({ displayName, url, iconPath }) => (
        <li key={url}>
          <a href={url} aria-label={displayName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={iconPath} alt={displayName} />
          </a>
        </li>
      ))}
    </SocialIconsList>
  );
};

export default DesktopNavigation;

const SocialIconsList = styled("ul", {
  padding: 0,
  listStyle: "none",
  display: "flex",
  gap: "30px",
  "li, a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Header = styled("header", {
  height: "56px",
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 60px",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 9999,
  transition: "background 0.2s",

  "@bp2": {
    display: "flex",
    height: "64px",
  },
  "@bp3": {
    padding: "16px 122px",
  },

  variants: {
    type: {
      solid: {
        background: "$gray400",
      },
    },
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
});

const StyledAnchor = styled("a", {
  color: "$black",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "700",
  padding: 4,
  textTransform: "uppercase",
  background: "transparent",
  transition: "color 0.2s, background 0.2s",

  "&:hover": {
    background: "$gray600",
    color: "$white",
  },

  variants: {
    type: {
      active: {
        background: "$black",
        color: "$white",
      },
    },
  },
});
