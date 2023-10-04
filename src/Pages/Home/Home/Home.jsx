import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import RecommentFood from "../RecommentFood/RecommentFood";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <AboutSection></AboutSection>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <RecommentFood></RecommentFood>
      <Featured></Featured>
      <Testimonial></Testimonial>
      
    </div>
  );
};

export default Home;
