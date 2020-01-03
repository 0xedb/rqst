import Page from "../components/page/Page";
import Head from "next/head";
import Index from "../components/index/Index";

const index = () => {
  return (
    <Page>
      <Head>
        <title>Rqst::Requesting...</title>
      </Head>
      <Index />
    </Page>
  );
};

export default index;
