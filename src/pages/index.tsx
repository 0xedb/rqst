import Page from "../components/page/Page";
import Head from "next/head";
import Index from "../components/index/Index";
import Navbar from "../components/navbar/Navbar";

const index = () => {
  return (
    <Page>
      <Head>
        <title>Rqst::Requesting...</title>
      </Head>
      <Navbar />
      <Index />
    </Page>
  );
};

export default index;
