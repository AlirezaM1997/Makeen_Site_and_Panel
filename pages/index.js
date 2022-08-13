import Head from "next/head";
import Slider from "../components/webComponents/homeComponents/imageSlider/Slider";
import Statistics from "../components/webComponents/homeComponents/Statistics";
import Bootcamp from "../components/webComponents/homeComponents/Bootcamp";
import Features from "../components/webComponents/homeComponents/Features";
import Courses from "../components/webComponents/homeComponents/Courses";
import EstelamVaHamrahsho from "../components/webComponents/homeComponents/EstelamVaHamrahSho";
import AskedQuestion from "../components/webComponents/homeComponents/AskedQuestion";
import Magazines from "../components/webComponents/homeComponents/Magazines";
import Methdology from "../components/webComponents/homeComponents/Methodology";
import WhyBootcamp from "../components/webComponents/homeComponents/WhyBootcamp";
import OurMentors from "../components/webComponents/homeComponents/OurMentors";
import Makeeniha from "../components/webComponents/homeComponents/Makeeniha";
import InstallmentPayment from "../components/webComponents/homeComponents/InstallmentPayment";
import RegisterationModal from "../components/webComponents/homeComponents/RegisterationModal";
export default function home() {
  return (
    <>
      <Head>
        <title>آکادمی مکین</title>
      </Head>
      <RegisterationModal/>
      <Slider />
      <Statistics />
      <Bootcamp />
      <Features />
      <Courses />
      <WhyBootcamp />
      <OurMentors />
      <InstallmentPayment />
      <Makeeniha />
      <Methdology />
      <AskedQuestion />
      <Magazines />
      <EstelamVaHamrahsho />
    </>
  );
}
