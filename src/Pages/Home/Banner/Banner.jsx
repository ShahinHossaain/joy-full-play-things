import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import "./Banner.css";
import "./Banner.scss";
const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={9000}
        className="aws"
        animation="openAnimation"
      >
        <div data-src="" className="bg-natural h-full w-full">
          <div className="flex items-center justify-center p-10">
            <img
              src="https://images.all-free-download.com/images/graphiclarge/childhood_background_boy_toys_icons_cartoon_design_6838190.jpg"
              alt=""
              className="ml-16 rounded-3xl"
            />
            <div className="relative box w-1/2 right-32 rounded-3xl top-8 p-10 bg-slate-700 opacity-90  text-white">
              <p className="text-5xl font-font2">
                Welcome to, <br />{" "}
                <span className="block font-font1 my-10">
                  Joy Full Play Things
                </span>{" "}
                website{" "}
              </p>
            </div>
          </div>
        </div>
        <div data-src="https://media.istockphoto.com/id/1072351298/photo/young-girl-playing-with-educational-toys.jpg?b=1&s=170667a&w=0&k=20&c=Z8lD1zUt6v49FaSho54qnuw-VrR8EsfDCYHQfWp86PQ=">
          <div className="bg-gradient-to-r w-100% h-full from-cyan-500 to-blue-500 in">
            <div className="relative w-1/2 right-32 top-8 p-10 bg-slate-700 opacity-90 rounded-xl text-white">
              <p className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </p>
              <p className="my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn bg-orange-500">Discover More</button>
                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div data-src="https://media.istockphoto.com/id/1072351298/photo/young-girl-playing-with-educational-toys.jpg?b=1&s=170667a&w=0&k=20&c=Z8lD1zUt6v49FaSho54qnuw-VrR8EsfDCYHQfWp86PQ=">
          <div className="bg-gradient-to-r w-100% h-full from-cyan-500 to-blue-500 in">
            <div className="relative w-1/2 right-32 top-8 p-10 bg-slate-700 opacity-90 rounded-xl text-white">
              <p className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </p>
              <p className="my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn bg-orange-500">Discover More</button>
                <button className="btn btn-outline btn-accent">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
