import { useRouter } from "next/router";
import Head from "next/head";
import Cooperation from "./Cooperation"
import Slider from "./homeComponents/imageSlider/Slider";
import Statistics from "./homeComponents/Statistics";
import Bootcamp from "./homeComponents/Bootcamp";
import Features from "./homeComponents/Features";
import Courses from "./homeComponents/Courses";
import EstelamVaHamrahsho from "./homeComponents/EstelamVaHamrahSho";
import AskedQuestion from './homeComponents/AskedQuestion'
import MaghalatVaMataleb from './homeComponents/MaghalatVaMataleb'
import Methdology from "./homeComponents/Methodology";
import WhyBootcamp from "./homeComponents/WhyBootcamp";
import OurMentors from "./homeComponents/OurMentors";
import Makeeniha from "./homeComponents/Makeeniha";
import InstallmentPayment from "./homeComponents/InstallmentPayment";

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
        <Makeeniha />
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
