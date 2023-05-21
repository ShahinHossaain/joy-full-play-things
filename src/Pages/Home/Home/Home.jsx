import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ToyCategories from "../ToyCategories/ToyCategories";
import Aos from "aos";
import "aos/dist/aos.css";
import Top5 from "../Top5/Top5";
import Comment from "../Comment/Comment";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div data-aos="fade-down">
        <p className="text-center text-6xl font-bold font-font3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-32">
          Gallery
        </p>
      </div>
      <Gallary></Gallary>

      <Top5></Top5>
      <ToyCategories></ToyCategories>
      <Comment></Comment>
    </div>
  );
};

export default Home;
