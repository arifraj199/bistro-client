import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/slide5.jpg";

const RecommentFood = () => {
  return (
    <section className="my-20 max-w-screen-xl">
      <SectionTitle
        subheading="Should Try"
        heading="Chef recommends"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div className=" bg-[#F3F3F3]">
          <div>
            <img
              style={{
                width: "100%",
                height: "300px",
              }}
              src={img}
              alt=""
            />
          </div>
          <div className="text-center mt-5 px-7 pb-6 ">
            <h2 className="text-xl text-[#151515] font-semibold">
              Caeser Salad
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="uppercase bg-[#E8E8E8] p-3 border border-b-4 border-x-0 border-t-0 border-[#BB8506] text-[#BB8506] mt-3 rounded-lg">
              Add to card
            </button>
          </div>
        </div>
        <div className=" bg-[#F3F3F3]">
          <div>
            <img
              style={{
                width: "100%",
                height: "300px",
              }}
              src={img}
              alt=""
            />
          </div>
          <div className="text-center mt-5 px-7 pb-6 ">
            <h2 className="text-xl text-[#151515] font-semibold">
              Caeser Salad
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="uppercase bg-[#1F2937] p-3 border border-b-4 border-x-0 border-t-0 border-[#BB8506] text-[#BB8506] mt-3 rounded-lg">
              Add to card
            </button>
          </div>
        </div>
        <div className=" bg-[#F3F3F3]">
          <div>
            <img
              style={{
                width: "100%",
                height: "300px",
              }}
              src={img}
              alt=""
            />
          </div>
          <div className="text-center mt-5 px-7 pb-6 ">
            <h2 className="text-xl text-[#151515] font-semibold">
              Caeser Salad
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="uppercase bg-[#E8E8E8] p-3 border border-b-4 border-x-0 border-t-0 border-[#BB8506] text-[#BB8506] mt-3 rounded-lg">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommentFood;
