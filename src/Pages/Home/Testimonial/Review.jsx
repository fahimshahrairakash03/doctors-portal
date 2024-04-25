import React from "react";

const Review = ({ review }) => {
  const { name, review: userReview, img, location } = review;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>{userReview}</p>
          <div className="card-actions flex items-center ">
            <img className="w-20" src={img} alt="" />
            <div>
              <h5 className="text-lg">{name}</h5>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
