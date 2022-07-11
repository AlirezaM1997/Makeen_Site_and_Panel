//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      id: "https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame?recom=none",
    },
    {
      id: "https://www.aparat.com/video/video/embed/videohash/SqtYO/vt/frame?recom=none",
    },
    {
      id: "https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame?recom=none",
    },
    {
      id: "https://www.aparat.com/video/video/embed/videohash/SqtYO/vt/frame?recom=none",
    },
    {
      id: "https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame?recom=none",
    },
    {
      id: "https://www.aparat.com/video/video/embed/videohash/SqtYO/vt/frame?recom=none",
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
              <div class="relative">
                <span className="block pt-[57%]"></span>
                <iframe
                  src="https://www.aparat.com/video/video/embed/videohash/49kDR/vt/frame?recom=none"
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
                  className="rounded-[4px] overflow-hidden transition-all duration-300"
                >
                  <iframe
                    src={slide.id}
                    allowFullScreen="true"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    onClick={() => videoslider(slide.id)}
                    className="w-full h-[100px]"
                  ></iframe>
                  {/* <video
                    className="w-full h-[100px] object-cover"
                    preload="metadata"
                    onClick={() => videoslider(slide.id)}
                  >
                    <source src={slide.id} type="video/mp4"></source>
                  </video> */}
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
