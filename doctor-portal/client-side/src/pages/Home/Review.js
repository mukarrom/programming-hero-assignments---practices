import React from "react";

const Review = ({ comment }) => {
  return (
    <div className="card lg:max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{comment.review}</p>
      </div>
      <div className="flex items-center">
        <div className="avatar m-5">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={comment.img} alt='reviewer' />
          </div>
        </div>
        <div className="">
            <h3 className="text-sm font-bold">{comment.name}</h3>
            <p className="text-sm">{comment.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
