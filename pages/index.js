import Head from "next/head";
import Slider from "../components/site/home/imageSlider/Slider";
import Statistics from "../components/site/home/Statistics";
import Bootcamp from "../components/site/home/Bootcamp";
import Features from "../components/site/home/Features";
import Courses from "../components/site/home/Courses";
import EstelamVaHamrahsho from "../components/site/home/EstelamVaHamrahSho";
import AskedQuestion from "../components/site/home/AskedQuestion";
import Magazines from "../components/site/home/Magazines";
import Methdology from "../components/site/home/Methodology";
import WhyBootcamp from "../components/site/home/WhyBootcamp";
import OurMentors from "../components/site/home/OurMentors";
import Makeeniha from "../components/site/home/Makeeniha";
import InstallmentPayment from "../components/site/home/InstallmentPayment";
import RegisterationModal from "../components/site/home/RegisterationModal";
import { dehydrate, QueryClient ,useQueries} from '@tanstack/react-query';
import { getCounter, getImageSlider } from "../API/homeAPI";

export default function home() {
  const results = useQueries({
    queries: [
      { queryKey: ['imageSlider', 1], queryFn: getImageSlider, staleTime: Infinity},
      { queryKey: ['counter', 2], queryFn: getCounter, staleTime: Infinity},
    ]
  })
  if (results.some(r => r.isLoading)) return <h1>isLoading........</h1>
  return (
    <>
      <Head>
        <title>آکادمی مکین</title>
      </Head>
      <RegisterationModal />
      <Slider imageSlider={results[0].data}/>
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

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['counter'], getCounter)
  await queryClient.prefetchQuery(['imageSlider'], getImageSlider)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}