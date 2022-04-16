import Link from "next/link";
import React from "react";
import { styled } from "../../stitches.config";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  return (
    <>
      <MobileNavigation
        internalNavigationItems={INTERNAL_NAVIGATION_ITEMS}
        externalNavigationItems={EXTERNAL_NAVIGATION_ITEMS}
      />
      <DesktopNavigation
        internalNavigationItems={INTERNAL_NAVIGATION_ITEMS}
        externalNavigationItems={EXTERNAL_NAVIGATION_ITEMS}
      />
    </>
  );
};

export default Navigation;

interface NavigationItem {
  displayName: string;
  /** Only show this navigation item on mobile. */
  mobileOnly?: boolean;
}

export type InternalNavigationItem = NavigationItem & { path: string };

export type ExternalNavigationItem = NavigationItem & {
  url: string;
  iconPath: string;
};

const INTERNAL_NAVIGATION_ITEMS: Array<InternalNavigationItem> = [
  {
    displayName: "Home",
    path: "/",
    mobileOnly: true,
  },
  {
    displayName: "About",
    path: "/about",
  },
  {
    displayName: "Team",
    path: "/team",
  },
  //   {
  //     displayName: "Roadmap",
  //     path: "/roadmap",
  //   },
];

const EXTERNAL_NAVIGATION_ITEMS: Array<ExternalNavigationItem> = [
  //   {
  //     displayName: "Discord",
  //     url: "https://TODO.com",
  //     iconPath: "/discord.svg",
  //   },
  {
    displayName: "Twitter",
    url: "https://twitter.com/BeatBotNFT",
    iconPath: "/twitter.svg",
  },
  {
    displayName: "Medium",
    url: "https://medium.com/@beatbot",
    iconPath: "/medium.svg",
  },
];
