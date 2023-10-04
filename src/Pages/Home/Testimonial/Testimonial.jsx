import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from 'react-icons/fa';

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subheading="What our clients say"
        heading="testimonials"
      ></SectionTitle>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide className="m-4" key={review._id}>
            <div className="mx-24 text-center mb-6">
              <Rating style={{ maxWidth: 180,margin:'0 auto 20px auto' }} value={review.rating} readOnly />
              <div className="flex justify-center my-12">
              <FaQuoteLeft className="text-6xl"></FaQuoteLeft>
              </div>
              <p>{review.details}</p>
              <h2 className="text-2xl text-orange-400">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
