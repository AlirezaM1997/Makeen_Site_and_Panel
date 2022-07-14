//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//next
import Image from "next/image";

const VideoSlider = () => {
  const settingsThumbs = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      id: "/assets/images/videoSlide1.png",
    },
    {
      id: "/assets/images/videoSlide2.png",
    },
    {
      id: "/assets/images/videoSlide3.png",
    },
    {
      id: "/assets/images/videoSlide1.png",
    },
    {
      id: "/assets/images/videoSlide2.png",
    },
    {
      id: "/assets/images/videoSlide3.png",
    },

  ];

  function videoslider(links) {
    document.querySelector(".mySlider").src = links;
  }

  return (
    <>
      <div>
        <div>
          <div className="-top-[80px] relative">
            <div className="relative rounded-[10px] overflow-hidden h-full">
              {/* <video
                src="https://static.videezy.com/system/resources/previews/000/004/867/original/TurnTable_Logo_Reveal_Animation.mp4"
                className="mySlider relative top-0 left-0"
                loop
                muted
                controls
                width={494}
                height={343}
              ></video> */}
              <div className="relative">
                <span className="block pt-[57%]"></span>
                <iframe
                  src="https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  className="mySlider absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="-mt-[20px] thumbnail" id="videoSlider">
            <Slider {...settingsThumbs}>
              {slidesData.map((slide, index) => (
                <div
                  key={index}
                  className="rounded-[4px] w-10 h-[100px] overflow-hidden transition-all duration-300"
                >
                 <div className="w-[150px] h-[100px] relative">

                  <Image src={slide.id} layout='fill' height={100} width={120} />
                 </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSlider;

{/* <iframe
src={slide.id}
allowFullScreen="true"
webkitallowfullscreen="true"
mozallowfullscreen="true"
onClick={() => videoslider(slide.id)}
className="w-full h-[100px]"
></iframe>
<video
className="w-full h-[100px] object-cover"
preload="metadata"
onClick={() => videoslider(slide.id)}
>
<source src={slide.id} type="video/mp4"></source>
</video> */}