import React from "react";
import { styled } from "../../../stitches.config";
import PersonCard from "./PersonCard";

const TeamGrid = () => {
  return (
    <Section>
      <div>
        <h3>Co-Founders</h3>

        <PersonGrid>
          {CO_FOUNDERS.map((person) => (
            <PersonCard person={person} key={person.displayName} />
          ))}
        </PersonGrid>
      </div>

      <TeamSection>
        <h3>Core Team</h3>
        <PersonGrid>
          {TEAM.map((person) => (
            <PersonCard person={person} key={person.displayName} />
          ))}
        </PersonGrid>
      </TeamSection>
    </Section>
  );
};

export default TeamGrid;

const Section = styled("section", {
  background: "$black100",
  color: "$white",
  padding: "40px 50px 100px 50px",

  "@bp1": {
    padding: "68px 122px 100px 122px",
  },

  h3: {
    fontWeight: 400,
    fontSize: "24px",
    textAlign: "center",
    margin: 0,
    marginBottom: 68,
    textTransform: "uppercase",
  },
});

const TeamSection = styled("div", {
  marginTop: 96,
});

const PersonGrid = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "50px 16px",

  "@bp2": {
    gap: "68px 32px",
  },
  "@bp3": {},
});

export interface Social {
  type: "twitter" | "linkedin";
  url: string;
}

export interface Person {
  image: string;
  socials: Array<Social>;
  displayName: string;
  title: string;
}

const CO_FOUNDERS: Array<Person> = [
  {
    displayName: "Boba",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "linkedin",
        url: "https://linkedin.com",
      },
      {
        type: "twitter",
        url: "https://twitter.com",
      },
    ],
    title: "Beep Booper",
  },
  {
    displayName: "Boba",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "linkedin",
        url: "https://linkedin.com",
      },
    ],
    title: "Beep Booper",
  },
  {
    displayName: "Boba",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com",
      },
    ],
    title: "Beep Booper",
  },
  {
    displayName: "Boba",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "linkedin",
        url: "https://linkedin.com",
      },
      {
        type: "twitter",
        url: "https://twitter.com",
      },
    ],
    title: "Beep Booper",
  },
];

const TEAM: Array<Person> = [
  {
    displayName: "kwaji",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com/jarrensj",
      },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/jarrensanjose/",
      },
    ],
    title: "Principal Intern",
  },
  {
    displayName: "JohnPhamous",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com/johnphamous",
      },
      {
        type: "linkedin",
        url: "https://linkedin.com/in/johnphamous",
      },
    ],
    title: "Senior Intern",
  },
  {
    displayName: "Boba",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "linkedin",
        url: "https://linkedin.com",
      },
      {
        type: "twitter",
        url: "https://twitter.com",
      },
    ],
    title: "Beep Booper",
  },
  {
    displayName: "Boba",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "linkedin",
        url: "https://linkedin.com",
      },
      {
        type: "twitter",
        url: "https://twitter.com",
      },
    ],
    title: "Beep Booper",
  },
  {
    displayName: "Boba",
    image: "/placeholder.jpg",
    socials: [
      {
        type: "linkedin",
        url: "https://linkedin.com",
      },
      {
        type: "twitter",
        url: "https://twitter.com",
      },
    ],
    title: "Beep Booper",
  },
];
