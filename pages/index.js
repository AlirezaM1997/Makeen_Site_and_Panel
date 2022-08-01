import Head from "next/head";
import Slider from "../components/homeComponents/imageSlider/Slider";
import Statistics from "../components/homeComponents/Statistics";
import Bootcamp from "../components/homeComponents/Bootcamp";
import Features from "../components/homeComponents/Features";
import Courses from "../components/homeComponents/Courses";
import EstelamVaHamrahsho from "../components/homeComponents/EstelamVaHamrahSho";
import AskedQuestion from "../components/homeComponents/AskedQuestion";
import Magazines from "../components/homeComponents/Magazines";
import Methdology from "../components/homeComponents/Methodology";
import WhyBootcamp from "../components/homeComponents/WhyBootcamp";
import OurMentors from "../components/homeComponents/OurMentors";
import Makeeniha from "../components/homeComponents/Makeeniha";
import InstallmentPayment from "../components/homeComponents/InstallmentPayment";
import RegisterationModal from "../components/homeComponents/RegisterationModal";
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
