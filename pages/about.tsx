import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container} id="outer-container">
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main} id="page-wrap">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
