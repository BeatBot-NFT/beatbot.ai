import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "../stitches.config";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container} id="outer-container">
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main} id="page-wrap">
        <Container>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-full-dark.svg"
              alt=""
              style={{ width: "100%", padding: "0 16px" }}
            />
          </div>

          <CardContainer>
            {CARD_CONTENTS.map(({ title }, index) => (
              <Card index={index} key={title} title={title} imagePath="" />
            ))}
          </CardContainer>
        </Container>
      </main>
    </div>
  );
};

export default Home;

const CARD_CONTENTS = [
  {
    title: "We are a lifestyle brand",
  },
  {
    title: "State of the art machine learning",
  },
  {
    title: "A new NFT experience",
  },
];

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 40,
  paddingBottom: 40,

  "@bp2": {
    paddingTop: 200,
  },
});

const CardContainer = styled("div", {
  paddingTop: 40,
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  justifyContent: "center",

  "@bp2": {
    paddingTop: 124,
  },
});

interface CardProps {
  index: number;
  title: string;
  imagePath: string;
}

const Card = ({ imagePath, index, title }: CardProps) => {
  return (
    <StyledCard>
      <div>
        <Number>0{index}</Number>
      </div>
      <Title>{title}</Title>
      <div></div>
    </StyledCard>
  );
};

const StyledCard = styled("article", {
  background: "$white",
  padding: 24,
  width: 311,
  height: 311,
  p: {
    margin: 0,
  },

  "@bp2": {
    width: 388,
    height: 388,
  },
});

const Number = styled("p", {
  fontFamily: "$header",
  fontWeight: 700,
  fontSize: 48,
  lineHeight: "57px",
  color: "$gray400",
  paddingBottom: 16,
});

const Title = styled("p", {
  textTransform: "uppercase",
  fontSize: 20,
  fontFamily: "$header",
  fontWeight: 700,
  lineHeight: "24px",
  color: "$black",
  paddingBottom: 64,
  width: 190,
});
