import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function VideoSlider() {
  const settingsThumbs = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  const slidesData = [
    {
      img: "/assets/images/videoSlide1.png",
      src: "https://www.aparat.com/video/video/embed/videohash/iXASK/vt/frame",
    },
    {
      img: "/assets/images/videoSlide2.png",
      src: "https://www.aparat.com/video/video/embed/videohash/CArZF/vt/frame",
    },
    {
      img: "/assets/images/videoSlide3.png",
      src: "https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame",
    },
    {
      img: "/assets/images/videoSlide4.png",
      src: "https://www.aparat.com/video/video/embed/videohash/tgH1h/vt/frame",
    },
  ];
  function choiseVideo(links) {
    document.querySelector(".mySlider").src = links;
  }
  return (
    <>
      <div>
        <div className="xl:-top-[120px] relative xl:h-[343px] h-[220px] xl:w-auto w-[318px] xl:mx-0 mx-auto">
          <div className="relative rounded-[10px] overflow-hidden h-full">
            <div className="relative h-full">
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                className="mySlider absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="xl:-mt-[70px] mt-[30px] thumbnail" id="videoSlider">
          <Slider {...settingsThumbs}>
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="rounded-[4px] xl:w-10 w-8 xl:h-[100px] h-[87px] overflow-hidden transition-all duration-300 cursor-pointer"
                onClick={() => choiseVideo(slide.src)}
              >
                <div className="w-[150px] xl:h-[100px] h-[87px] relative">
                  <Image src={slide.img} layout="fill" alt="videoSlider" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
