//next
import Head from "next/head";

//components
import Header from "../components/Header";
import Slider from "../components/slider/Slider";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

//style
import "../styles/globals.css";
import "../styles/slider.css";
import EstelamVaHamrahsho from "../components/estelamVaHamrahSho";

 const MyApp=({ Component, pageProps })=> {
  return (
    <>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* <script src="../path/to/flowbite/dist/flowbite.js"></script> */}
      </Head>
      <Header />
      <Slider />
      <Statistics />
      <Component {...pageProps} />
      <EstelamVaHamrahsho />
      <Footer />
      {/* there is some bugs in footer */}
      {/* its the best :) */}
    </>
  );
}
export default MyApp