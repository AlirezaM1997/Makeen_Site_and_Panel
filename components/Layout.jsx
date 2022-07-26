import { useRouter } from "next/router";
import Head from "next/head";
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
import OurMentors from "./OurMentors";
import InstallmentPayment from "./InstallmentPayment";
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
        <OurMentors/>
        <InstallmentPayment/>
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
