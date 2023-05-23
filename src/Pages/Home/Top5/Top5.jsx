import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Top5 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <div className="text-center mt-32 mx-16">
        <p
          data-aos="fade-down"
          className="inline-block text-3xl bg-primary md:text-4xl font-bold mb-10 p-4 rounded-2xl"
        >
          <span className="text-center text-5xl  font-bold font-font3 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-secondary ">
            Top Five Toy
          </span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-10">
          <div
            data-aos="fade-up"
            className="rounded-lg shadow-lg overflow-hidden py-5 bg-gray-700 hover:bg-gray-600 text-white"
          >
            <img
              src="https://freesvg.org/storage/img/thumb/1275849091.png"
              alt="Placeholder"
              className="w-20 h-20 mx-auto"
            />
            <div className="px-4 pt-2 text-center">
              <p className=" font-semibold text-lg mb-1">YoYo</p>
              <p className=" text-sm"></p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-lg shadow-lg overflow-hidden py-5 bg-gray-700 hover:bg-gray-600 text-white"
          >
            <img
              src="https://freesvg.org/storage/img/thumb/7654321.png"
              alt="Placeholder"
              className="w-20 h-20 mx-auto"
            />
            <div className="px-4 pt-2 text-center">
              <p className=" font-semibold text-lg mb-1">Color matching</p>
              <p className=" text-sm"></p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden py-5 bg-gray-700 hover:bg-gray-600 text-white">
            <img
              src="https://freesvg.org/storage/img/thumb/nicubunu_Toy_rocket.png"
              alt="Placeholder"
              className="w-20 h-20 mx-auto"
            />
            <div className="px-4 pt-2 text-center">
              <p className=" font-semibold text-lg mb-1">Super Rocket</p>
              <p className=" text-sm"></p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-lg shadow-lg overflow-hidden py-5 bg-gray-700 hover:bg-gray-600 text-white"
          >
            <img
              src="https://freesvg.org/storage/img/thumb/Upload-multiple-files-request-2017031438.png"
              alt="Placeholder"
              className="w-20 h-20 mx-auto"
            />
            <div className="px-4 pt-2 text-center">
              <p className=" font-semibold text-lg mb-1">Make Shape</p>
              <p className=" text-sm"></p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-lg shadow-lg overflow-hidden py-5 bg-gray-700 hover:bg-gray-600 text-white"
          >
            <img
              src="https://freesvg.org/storage/img/thumb/rubik_s_cube_petri_lumme_01.png"
              alt="Placeholder"
              className="w-20 h-20 mx-auto"
            />
            <div className="px-4 pt-2 text-center">
              <p className=" font-semibold text-lg mb-1">Rubix Cube</p>
              <p className=" text-sm"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top5;
