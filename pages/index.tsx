import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UserForm from "../components/UserForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UserForm</title>
        <meta
          name="description"
          content="Built with React Hooks, React-Bootstrap, TS..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UserForm />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
