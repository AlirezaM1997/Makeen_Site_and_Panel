//next
import { useRouter } from "next/router";
import Head from "next/head";

//components
import Cooperation from "./Cooperation";
import Slider from "./slider/Slider";
import Statistics from "./Statistics";
import Bootcamp from "./Bootcamp";
import Features from "./Features";
import Courses from "./Courses";
import EstelamVaHamrahsho from "./EstelamVaHamrahSho";
import AskedQuestion from './AskedQuestion'
import MaghalatVaMataleb from './MaghalatVaMataleb'
import Methdology from "./Methodology";
import WhyBootcamp from "./WhyBootcamp";
// import Makeeniha from "./Makeeniha";

const Layout = ({ children }) => {
  const router = useRouter();

  if (router.pathname === "/") {
    return (
      <>
        <Head>
          <title>آکادمی مکین</title>
        </Head>
        <Slider />
        <Statistics />
        <Bootcamp />
        <Features />
        <Courses />
        <WhyBootcamp/>
        {/* <Makeeniha /> */}
        <Methdology />
        <AskedQuestion />
        <MaghalatVaMataleb />
        <EstelamVaHamrahsho />
      </>
    );
  } else if (router.pathname === "/cooperation") {
    return (
      <>
        <Cooperation />
      </>
    );
  }
};

export default Layout;
