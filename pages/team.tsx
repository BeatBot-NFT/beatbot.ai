import type { NextPage } from "next";
import Head from "next/head";
import TeamGrid from "../components/Team/TeamGrid";
import TeamHero from "../components/Team/TeamHero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container} id="outer-container">
      <Head>
        <title>Team</title>
      </Head>

      <main className={styles.main} id="page-wrap">
        <TeamHero />
        <TeamGrid />
      </main>
    </div>
  );
};

export default Home;
