import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import "./Banner.css";
import "./Banner.scss";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const backgroundImage1 =
    "https://images.all-free-download.com/images/graphiclarge/toys_icons_background_various_multicolored_icons_repeating_design_6830621.jpg";
  const backgroundImage2 =
    "https://images.all-free-download.com/images/graphiclarge/paper_plane_icons_3d_design_flying_objects_6833981.jpg";
  const backgroundImage3 =
    "https://images.all-free-download.com/images/graphiclarge/toy_train_background_colored_flat_repeating_design_6830403.jpg";
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        className="aws"
        animation="openAnimation"
      >
        <div data-src="" className="bg-natural h-full w-full">
          <div
            className="flex items-center justify-center p-10"
            style={{
              backgroundImage: `url(${backgroundImage1})`,
              height: "100%",
            }}
          >
            <img
              src="https://images.all-free-download.com/images/graphiclarge/childhood_background_boy_toys_icons_cartoon_design_6838190.jpg"
              alt=""
              className="hidden md:inline-block ml-16 rounded-3xl"
            />
            <div className="md:relative box w-1/2 right-32 rounded-3xl top-8 p-10 bg-slate-700 opacity-90  text-white">
              <p className="text-4xl md:text-5xl font-font2">
                Welcome to, <br />{" "}
                <span className="block font-font1 my-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Joy Full Play Things
                </span>{" "}
                website,{" "}
                <Link to="/allToys">
                  <AwesomeButton>Toys Details</AwesomeButton>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div data-src="" className="bg-natural h-full w-full">
          <div
            className="flex items-center justify-center p-10"
            style={{
              backgroundImage: `url(${backgroundImage2})`,
              height: "100%",
            }}
          >
            <img
              src="https://images.all-free-download.com/images/graphiclarge/joyful_boy_drawing_toys_icons_cartoon_design_6832590.jpg"
              alt=""
              className="hidden md:inline-block ml-16 rounded-3xl"
            />
            <div className="md:relative box w-1/2 right-32 rounded-3xl top-8 p-10 bg-slate-700 opacity-90  text-white">
              <p className="text-3xl md:text-5xl font-font2">
                Your, <br />{" "}
                <span className="block text-4xl md:text-6xl font-font1 my-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  One-Stop Shop
                </span>{" "}
                for Fun,{" "}
                <Link to="/myToys">
                  <AwesomeButton>See Own Toys</AwesomeButton>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div data-src="" className="bg-natural h-full w-full">
          <div
            className="flex items-center justify-center p-10"
            style={{
              backgroundImage: `url(${backgroundImage3})`,
              height: "100%",
            }}
          >
            <img
              src="https://images.all-free-download.com/images/graphiclarge/childhood_background_joyful_boy_toy_icons_cartoon_design_6838007.jpg"
              alt=""
              className="hidden md:inline-block ml-16 rounded-3xl"
            />
            <div className="md:relative box w-1/2 right-32 rounded-3xl top-8 p-10 bg-slate-700 opacity-90  text-white">
              <p className="text-5xl font-font2">
                <span className="block font-font1 my-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  A World of, <br />
                  Toys and Delight
                </span>{" "}
                <Link to="/addToy">
                  <AwesomeButton>Add Your Toy</AwesomeButton>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
