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

const Gallary = () => {
  const [toys, setToys] = useState(null);
  // console.log(toys);
  useEffect(() => {
    fetch("https://joy-full-play-things-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="mx-auto my-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PlBgacnSx02iaku6b_wo8tboQU_nZHFRDQ&usqp=CAU"
          alt=""
          className="animate-pulse transform hover:translate-y-1 hover:scale-110 transition duration-500 ease-in-out rounded-3xl w-full"
        />
        <p className="text-2xl font-bold o_font2 text-center">
          <span className="text-green-500">
            <span className="text-3xl">Made</span> By
          </span>{" "}
          Our <span className="text-red-600 text-3xl block">Honorable</span>{" "}
          CHEFS...
        </p>
      </div>

      <div className="md:w-2/3">
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
