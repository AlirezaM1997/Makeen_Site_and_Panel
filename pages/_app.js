//components
import Header from "../components/Header";
import HomeSlider from "../components/Slider";

//style
import "../styles/globals.css";

//next
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      rel="stylesheet"
    />
    </Head>
      <Header />
      <HomeSlider/>
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
