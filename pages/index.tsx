import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mostafa Ellethy</title>
        <meta name="description" content="Mostafa Ellethy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>MostafaEllethy.com</h1>
      </main>
    </div>
  );
};

export default Home;
