import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularItem from "../PolularItem/PopularItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setMenu(popular);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subheading="Check it out"
        heading="From our menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-16">
        {menu.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="uppercase bg-[#E8E8E8] p-3 border border-b-4 border-x-0 border-t-0 border-[#BB8506]  text-[#BB8506] mt-3 rounded-lg">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
