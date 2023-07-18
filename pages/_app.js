import "@/styles/globals.css";
import "@/styles/theme/theme_variable.scss";
import "@/styles/theme/theme.scss";

import React from "react";
import Footer from "@/components/layout/footer";
import RootLayout from "./layout";
import { DefaultSeo } from "next-seo";

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <RootLayout>
        <DefaultSeo
          title="ORCHIDS The International School | Best CBSE and ICSE Schools in India"
          description="Orchids The International School is one of India's leading chains of CBSE and ICSE schools, with 90+ schools across the country. Orchids found their first home in Hyderabad. Since then, we have spread our wings across 25+ cities and still growing."
        />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </RootLayout>
    </React.Fragment>
  );
}

export default App;
