import Head from "next/head";
import React from "react";

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta
          name="description"
          content="Maintained by K12 Techno Services Pvt. Ltd."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ minHeight: "90vh", display: "grid", placeItems: "center" }}>
        <img
          src="https://media.istockphoto.com/id/1261698208/vector/coming-soon-ink-brush-vector-lettering-promotion-or-announcement-banner-modern-vector.jpg?s=612x612&w=0&k=20&c=nKUyh-A4a65lkwZDz7nb2aBXfBIY7-NinZJkjnItEQg="
          style={{ height: "400px" }}
        />
      </div>
    </>
  );
};

export default ComingSoon;
