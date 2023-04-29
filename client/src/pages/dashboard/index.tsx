import type { NextPage } from "next";
import Head from "next/head";
import { MainSection } from "../../components";
import { DashLayout } from "../../layouts";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashLayout>
        <div className="bg-gray-100 w-screen">
          <div className="mx-6">
            <div className="">
              <MainSection />
            </div>
          </div>
        </div>
      </DashLayout>
    </div>
  );
};

export default Home;
