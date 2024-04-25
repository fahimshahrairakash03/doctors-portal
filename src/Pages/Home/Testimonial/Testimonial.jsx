import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winston Henry",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui!",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Winston Henry",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui!",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Winston Henry",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, qui!",
      location: "California",
      img: people3,
    },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg text-primary font-bold">Testimonial</h4>
          <h1 className="text-4xl font-bold">What Our Patient Says</h1>
        </div>
        <figure>
          <img className="sm:w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid mt-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
