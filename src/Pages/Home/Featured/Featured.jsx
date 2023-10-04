import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
import Buttons from "../../../components/Buttons";

const Featured = () => {
  return (
    <section className="my-20 featured-item bg-fixed text-white pt-10">
      <SectionTitle
        subheading="Check it out"
        heading="From our menu"
      ></SectionTitle>
      <div className="flex justify-center items-center  px-24 py-12">
        <div>
          <img width="640" src={featureImg} alt="" />
        </div>
        <div className="md:ml-10 text-justify w-[640px]">
          <h4 className="text-lg">March 20,2023</h4>
          <h2 className="text-2xl uppercase">Where can i get some?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            blanditiis quos eligendi necessitatibus praesentium, debitis magni
            repellendus! Esse fugiat aperiam ea ad non, ratione cupiditate
            aspernatur maxime ipsam repellendus necessitatibus.
          </p>
          <Buttons title="Read more"></Buttons>
        </div>
      </div>
    </section>
  );
};

export default Featured;
