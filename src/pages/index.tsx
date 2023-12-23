import Footer from "@/component/footer";
import Tracking from "@/component/tracking";

import { useTheme } from "@mui/material";
import Head from "next/head";

const TrackingComponent = () => {
  const theme = useTheme();

  return (
    <div>
      <Head>
        <title>Tracking | Sundarban Courier Service</title>
        <meta name="description" content="Tracking Sundarban Courier Service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tracking />
    </div>
  );
};

export default TrackingComponent;
