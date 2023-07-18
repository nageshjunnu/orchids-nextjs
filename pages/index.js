import Head from "next/head";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";
import Banner from "./house/banner";
import SimpleSlider from "./house/carousel";

import Index from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const SEO = {
    title:
      "ORCHIDS The International School | Best CBSE and ICSE Schools in India",
    description:
      "Orchids The International School is one of India's leading chains of CBSE and ICSE schools, with 90+ schools across the country. Orchids found their first home in Hyderabad. Since then, we have spread our wings across 25+ cities and still growing.",
  };
  return (
    <>
      <Head>
        <title>Orchids International School</title>
        <NextSeo {...SEO} />
      </Head>
      <main style={{ minHeight: "90vh" }}>
        <Index />
      </main>
    </>
  );
}
