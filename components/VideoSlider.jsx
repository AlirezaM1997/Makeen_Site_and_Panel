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
      id: "https://aspb27.asset.aparat.com/aparat-video/31abeef97199b372cb6e631fe79301c228143389-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ3NTQwMmZiZDFkN2ZiMjUzMjNjYTA3MWY1MDM5NTk1IiwiZXhwIjoxNjU3MjkzNDcyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Q8WZE2h_--r_ThxprcPu6v4L4MpV2Fv5R0UD34ZY8Tk",
    },
    {
      id: "https://aspb23.asset.aparat.com/aparat-video/bf0678ac0ae2cd66900889181bf6087f28559170-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjE0ZGVlMTNjMDMxNjQ0NzAyYjU1YjkwMGJlYWM5MjAxIiwiZXhwIjoxNjU3MjkzMTE2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.tCY89JubJR3Najs9mVcMxSfAWcUF1a7URp2h6oYLcsM",
    },
    {
      id: "https://as2.asset.aparat.com/aparat-video/052301628635139d681089707d61e98533220242-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZjYWQ0ZjkwMTk3NTFlOTA4ODczNDI1YjMxMjIzZjhiIiwiZXhwIjoxNjU3MjkzNDIyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.fX53sRbya5O3Wj5z02wdjySYioNcnAg-GP7SD14mJj0",
    },
    {
      id: "https://caspian2.asset.aparat.com/aparat-video/1cabf8573cc54e826f00db4ce7244b2644638925-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjVjNjllMjIxNWJkZTNmNDJmNzVmNzUxNzNkZGM1N2U1IiwiZXhwIjoxNjU3MjkzMzMxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.84G_sX4MsFaCxOD_sFvhSb6NCX5kvSkS-TCsf0Yk9lQ",
    },

    {
      id: "https://aspb36.asset.aparat.com/aparat-video/4ff82923f48db7d76e3705d5b5ab664334007578-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIyNzE1YmMxMjNkMzI4YjViOWJkZTUyNzcyYzRmYjQ0IiwiZXhwIjoxNjU3MjkzNDY1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.r27eEn0sDlx8lWEMfVRTAz2Id5pChrneZx5b48fI0-E",
    },
    {
      id: "https://caspian4.asset.aparat.com/aparat-video/497aee6c65561569dc73402a3c22d48644638835-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjJmZWI1MDhjYTAzNDVjNWVkNjgzZWY5NWQ0MzM4MDEyIiwiZXhwIjoxNjU3MjkzNDc1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.VxAnOIZIjSyla3V6PcIwNLuL9e74w9-_9YL6hG_FVxM",
    },
  ];

  function videoslider(links) {
    document.querySelector(".mySlider").src = links;
  }

  return (
    <>
      <div>
        <div className="slider-wrapper  ">
          <div className="-top-[80px] relative">
            <div className="relative rounded-[10px] overflow-hidden h-full">
              <video
                src="https://aspb27.asset.aparat.com/aparat-video/31abeef97199b372cb6e631fe79301c228143389-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ3NTQwMmZiZDFkN2ZiMjUzMjNjYTA3MWY1MDM5NTk1IiwiZXhwIjoxNjU3MjkzNDcyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Q8WZE2h_--r_ThxprcPu6v4L4MpV2Fv5R0UD34ZY8Tk"
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
                <div className="rounded-[4px] overflow-hidden transition-all duration-300">
                  <video
                    className="w-full h-[100px] object-cover"
                    key={index}
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
