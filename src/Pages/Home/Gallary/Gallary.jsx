// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Gallary.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Gallary = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const [toys, setToys] = useState(null);
  // console.log(toys);
  useEffect(() => {
    fetch("https://joy-full-play-things-server.vercel.app/toys ")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div
      className="flex flex-col md:flex-row items-center overflow-hidden bg-primary mt-12 rounded-2xl card shadow-2xl"
      data-aos="fade-up"
    >
      <div className="mx-auto my-5" data-aos="fade-up">
        <img
          src="https://i.ibb.co/19h36MN/robot-model-icon-cute-cartoon-character-sketch-hum.jpg"
          alt=""
          className="animate-pulse transform hover:translate-y-1 hover:scale-110 transition duration-500 ease-in-out rounded-3xl w-full"
        />
        <div>
          <p className="text-2xl font-bold o_font2 text-center mt-4">
            <span className=" text-transparent font-font2 text-3xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
              {" "}
              Connect With Our Gallery
            </span>
          </p>
        </div>
      </div>

      <div className="md:w-2/3" data-aos="fade-left">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {toys &&
            toys.map((toy, index) => (
              <SwiperSlide key={index}>
                <img src={toy.pictureUrl} className="h-full" alt="pic" />
                <p className="text-xl font-bold">{toy.toyName}</p>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Gallary;
