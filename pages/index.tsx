import type { NextPage } from "next";
import Head from "next/head";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

const LINKS = [
  {
    icon: <SiLinkedin color="#0a66c2" />,
    link: "https://www.linkedin.com/in/mostafaellethy/",
    label: "LinkedIn",
  },
  {
    icon: <SiGithub color="#24292f" />,
    link: "https://github.com/MostafaEllethy",
    label: "Github",
  },
  {
    icon: <SiGmail color="#ea4335" />,
    link: "mailto:mostafa.ellethy93@gmail.com",
    label: "Email",
  },
];

const Home: NextPage = () => {
  return (
    <div className="p-2">
      <Head>
        <title>Mostafa Ellethy</title>
        <meta name="description" content="Mostafa Ellethy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 h-screen flex-col items-center justify-center gap-3 sm:gap-5 md:gap-7">
        <h1 className="text-center font-bold text-[2.825rem] sm:text-6xl md:text-7xl">
          Mostafa Ellethy
        </h1>
        <section className="flex gap-4 md:gap-5 justify-center text-3xl sm:text-4xl">
          {LINKS.map((l, idx) => (
            <a
              href={l.link}
              key={idx}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
            >
              {l.icon}
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
