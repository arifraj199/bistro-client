import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <AboutSection></AboutSection>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
