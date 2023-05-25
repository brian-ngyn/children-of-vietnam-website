import { api } from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Children of Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="items-center min-h-screen flex flex-col justify-center text-black bg-off-white">
        <div>Home Page</div>
      </main>
    </>
  );
};

export default Home;
