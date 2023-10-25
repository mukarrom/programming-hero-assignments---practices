import React from "react";
import useReview from "../../hooks/useReview";
import UserReviews from "../UserReviews/UserReviews";

const Reviews = () => {
  const [comments, setComments] = useReview();
  console.log(comments);
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-center my-10 font-bold text-4xl text-blue-800">Customers Reviews</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {comments.map((comment) => (
          <UserReviews key={comment.id} comment={comment}></UserReviews>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
