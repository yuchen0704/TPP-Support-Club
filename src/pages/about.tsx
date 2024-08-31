import Head from "next/head";
import SEO from "@/config/SEO.json";

const About = () => {
  return (
    <>
      <Head>
        <title>{SEO.About.title}</title>
        <meta name="description" content={SEO.About.description} />
        <meta property="og:title" content={SEO.About.title} />
        <meta property="og:description" content={SEO.About.description} />
        <meta property="og:image" content={SEO.About.image} />
        <meta property="og:type" content={SEO.About.type} />
        <meta name="twitter:title" content={SEO.About.title} />
        <meta name="twitter:description" content={SEO.About.description} />
        <meta name="twitter:image" content={SEO.About.image} />
      </Head>
    </>
  );
};

export default About;