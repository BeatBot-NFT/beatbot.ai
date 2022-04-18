import Image from "next/image";
import React from "react";
import { Person, Social } from ".";
import { styled } from "../../../stitches.config";

type Props = {
  person: Person;
};

const PersonCard = ({ person }: Props) => {
  return (
    <Card>
      <Contents>
        <WordmarkContainer>
          <Wordmark src="logo-full-light.svg" alt="" />
        </WordmarkContainer>

        <MainContentContainer>
          <ImageContainer>
            <Image src={person.image} alt="" height="170px" width="170px" />
          </ImageContainer>

          <h4>{person.displayName}</h4>
          <p>{person.title}</p>

          <SocialsContainer>
            {person.socials.map((social) => (
              <SocialRenderer social={social} key={social.type} />
            ))}
          </SocialsContainer>
        </MainContentContainer>
      </Contents>
    </Card>
  );
};

export default PersonCard;

interface SocialProps {
  social: Social;
}

const SocialRenderer = ({ social }: SocialProps) => {
  let iconPath = "";

  switch (social.type) {
    case "twitter":
      iconPath = "/twitter-light.svg";
      break;
    case "linkedin":
      iconPath = "/linkedin.svg";
      break;
  }

  return (
    <SocialButton href={social.url} target="_blank">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconPath} alt="" />
    </SocialButton>
  );
};

const SocialsContainer = styled("div", {
  display: "flex",
  gap: 16,
});

const SocialButton = styled("a", {
  height: 26,
  width: 26,
  background: "$black400",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    height: 12,
    width: 12,
  },
});

const ImageContainer = styled("div", {
  height: "170px",
  width: "170px",
  position: "relative",
  borderRadius: 4,
  overflow: "hidden",
});

const WordmarkContainer = styled("div", {
  background: "$black",
  display: "flex",
  justifyContent: "flex-end",
  paddingBottom: 12,
  position: "relative",
  "&:before": {
    content: "",
    height: 0,
    width: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderBottom: "22px solid $gray300",
    borderRight: "22px solid transparent",
  },
});

const Wordmark = styled("img", {
  height: "10px",
});

const Card = styled("article", {
  border: "0.5px solid #444444",
  background: "$gray300",
  width: 275,
  height: 396,
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-20px)",
  },
});

const Contents = styled("div", {
  border: "16px solid $black",
  background: "$gray300",
  height: "100%",
  width: "100%",
});

const MainContentContainer = styled("div", {
  padding: "21px 36px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  "&:after": {
    content: "",
    height: 0,
    width: 0,
    position: "absolute",
    right: 0,
    bottom: -6,
    borderBottom: "22px solid $black",
    borderLeft: "22px solid transparent",
  },

  h4: {
    color: "$black",
    fontWeight: 700,
    fontSize: 16,
    margin: 0,
    marginTop: 16,
    marginBottom: 8,
  },

  p: {
    margin: 0,
    marginBottom: 36,
    color: "$gray400",
    fontWeight: 700,
    fontSize: 16,
  },
});
