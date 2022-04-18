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
    displayName: "Owsteen",
    image: "/owsteen.png",
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com/astroimpulse",
      },
    ],
    title: "Co-Founder",
  },
  {
    displayName: "Zack Moore",
    image: "/zack-moore.jpg",
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com/bags_alot",
      },
      {
        type: "linkedin",
        url: "https://linkedin.com/in/zachery-moore",
      },
    ],
    title: "Co-Founder",
  },
  {
    displayName: "Whosivann (Ivan)",
    image: "/ivan.png",
    socials: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/jiarongivancui",
      },
    ],
    title: "Co-Founder",
  },
  {
    displayName: "Stacced (Michael)",
    image: "/michael.png",
    socials: [
      {
        type: "twitter",
        url: "https://twitter.com/staystacced",
      },
    ],
    title: "Co-Founder",
  },
];

const TEAM: Array<Person> = [
  {
    displayName: "kwaji",
    image: "/kwaji.png",
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
    title: "Principal Dev Intern",
  },
  {
    displayName: "JohnPhamous",
    image: "/john.png",
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
    title: "Senior Dev Intern",
  },
  {
    displayName: "Alice Pan",
    image: "/alice.png",
    socials: [
      {
        type: "linkedin",
        url: "https://linkedin.com/in/alicejpan",
      },
    ],
    title: "UX Design",
  },
];
