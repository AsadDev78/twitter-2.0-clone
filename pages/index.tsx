import type { NextPage } from "next";
import Head from "next/head";
import { Feeds } from "../components/Feeds";
import { SideBar } from "../components/Sidebar";
// import { SideBar } from "../components/SideBar";
import { Widgets } from "../components/Widgets";

const Home: NextPage = () => {
  return (
    <div className="max-h-screen overflow-hidden lg:max-w-6xl mx-auto">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <main className="grid grid-cols-9">
        <SideBar />
        <Feeds />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
