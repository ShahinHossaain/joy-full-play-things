import { useContext, useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ToyCategories from "../ToyCategories/ToyCategories";
import Aos from "aos";
import "aos/dist/aos.css";
import Top5 from "../Top5/Top5";
import Comment from "../Comment/Comment";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  const { setIsOpen } = useContext(AuthContext);
  setIsOpen(true);
  return (
    <div>
      <Helmet>
        <title>Joy Full Play Things | Home</title>
      </Helmet>
      <Banner></Banner>
      <div data-aos="fade-down" className="bg-primary mx-96 p-5 rounded-b-3xl">
        <p className="text-center text-6xl font-bold font-font3 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-secondary mt-32 ">
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
