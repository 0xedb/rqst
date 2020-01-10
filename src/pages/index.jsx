import Page from "../components/page/Page";
import Index from "../components/index/Index";
import Navbar from "../components/navbar/Navbar";
import React from "react";
import { Helmet } from "react-helmet";


const index = () => {
  return (
    <Page>
      <Helmet>
        <title>Rqst::Requesting...</title>
      </Helmet>
      <Navbar />
      <Index />
    </Page>
  );
};

export default index;
