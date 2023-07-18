import Header from "@/components/layout/header";
import Head from "next/head";
import Script from "next/script";
import React from "react";
// import "../styles/globals.css";

const RootLayout = ({ children }) => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Orchids International School",
    url: "https://www.orchidsinternationalschool.com/",
    logo: "https://www.orchidsinternationalschool.com/",
    sameAs: [
      "https://www.facebook.com/ORCHIDSTheInternationalSchool/",
      "https://www.instagram.com/orchids_international_schools/",
      "https://www.instagram.com/orchids_international_schools/",
      "https://www.youtube.com/user/orchidsschool/",
      "https://www.linkedin.com/company/orchids-the-international-school/",
      "https://www.orchidsinternationalschool.com/",
    ],
  };
  return (
    <>
      <Head key={"root_layout_header"}>
        <meta
          name="viewport"
          content="user-scalable=yes, width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/images/header/main_logo_mobile.png" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;
