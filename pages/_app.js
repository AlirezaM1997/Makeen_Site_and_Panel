//next
import Head from "next/head";

//style
import "../styles/globals.css";
import '../styles/videoSlider.css'

//components
import Header from "../components/Header";
import Slider from "../components/slider/Slider";
import Statistics from "../components/Statistics";
import Bootcamp from "../components/Bootcamp";
import Features from "../components/Features";
import EstelamVaHamrahsho from "../components/estelamVaHamrahSho";
import Footer from "../components/Footer";

//style
import "../styles/globals.css";

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
      </Head>
      <Header />
      <Slider />
      <Statistics />
      <Bootcamp/>
      <Features/>
      <Component {...pageProps} />
      <EstelamVaHamrahsho />
      {/* <Footer /> */}
      {/* there is some bugs in footer */}
      {/* عرض صفحه اسکرول میخوره
      !!!  اینجوری ننویس w-[1366px]  */}
    </>
  );
}
export default MyApp