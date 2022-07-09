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
      id: "https://static.videezy.com/system/resources/previews/000/004/867/original/TurnTable_Logo_Reveal_Animation.mp4",
    },
    {
      id: "https://static.videezy.com/system/resources/previews/000/004/649/original/Call_Out_Text_-_Ratings_Sliders.mp4",
    },
    {
      id: "https://static.videezy.com/system/resources/previews/000/013/333/original/Thin_Smoke_84_-_4K_res.mp4",
    },
    {
      id: "https://static.videezy.com/system/resources/previews/000/007/694/original/Videezy_Slideshow_03_Preview.mp4",
    },
    {
      id: "https://static.videezy.com/system/resources/previews/000/019/339/original/Corporate_Presentation_Slide_Premiere_Mogrt_Template_10_Preview.mp4",
    },
    {
      id: "https://static.videezy.com/system/resources/previews/000/004/624/original/Clean_Lower_Third_-_M5.mp4",
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
              <video
                src="https://static.videezy.com/system/resources/previews/000/004/867/original/TurnTable_Logo_Reveal_Animation.mp4"
                className="mySlider relative top-0 left-0"
                loop
                muted
                controls
                width={494}
                height={343}
              ></video>
            </div>
          </div>
          <div className="-mt-[20px] thumbnail">
            <Slider {...settingsThumbs}>
              {slidesData.map((slide, index) => (
                <div
                  key={index}
                  className="rounded-[4px] overflow-hidden transition-all duration-300"
                >
                  <video
                    className="w-full h-[100px] object-cover"
                    preload="metadata"
                    onClick={() => videoslider(slide.id)}
                  >
                    <source src={slide.id} type="video/mp4"></source>
                  </video>
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
