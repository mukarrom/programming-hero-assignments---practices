import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import UserReviews from "../UserReviews/UserReviews";

const Home = () => {
    const [comments, setComments] = useReview();
    let comment3 = comments.slice(0, 3);
  return (
    <main className="mb-5">
      <section className="grid grid-cols-2 my-10 w-full md:w-3/4 mx-auto">
        <div className=" my-auto">
          <h1 className="text-6xl font-extrabold text-center">
            বই পড়ুন
          </h1>
          <h1 className="text-6xl font-extrabold text-blue-700 text-center">
            নিজেকে গড়ুন
          </h1>
          <p className="my-5 ">
          'বই বিশ্বাসের অঙ্গ, বই মানব সমাজকে টিকাইয়া রাখিবার জন্য জ্ঞান দান করে। অতএব বই হইতেছে সভ্যতার রক্ষাকবচ।' ভিক্টর হুগোর এ কথাটি মেনে নিয়েই সভ্যতা পথ চলেছে বহু যুগ ধরে । বই হলো সম্পর্কের সেতু, বই পড়েই কেবল ভালো থাকা যায়। বই মানুষে মানুষে বন্ধন মজবুত করে। তাই প্রিয়জনকে উপহার দেওয়ার এর চেয়ে ভালো জিনিস আর কিইবা হতে পারে। বইয়ের মাধ্যমে অকৃত্রিম বন্ধু হওয়া যায়। বই হচ্ছে সেরা উপহার। বিশেষ দিনে, বিশেষ ক্ষণে যারা প্রিয়জনকে বই উপহার দিতে চায়, তাদের অনেকেই গ্রন্থমেলায় ঘুরে ঘুরে কিনছে নতুন বই। প্রকাশকরাও আহ্বান জানালেন এই বলে- বইমেলায় এসে শুধু সেলফি তোলা নয়, বই কিনুন, বই পড়ুন। প্রিয়জনকে বই উপহার দিন।
          </p>
          <button className="bg-blue-200 py-3 px-6 md:py-5 md:px-10 font-semibold text-blue-900 rounded-md mt-4 block mx-auto hover:bg-blue-500 hover:text-white">
            Live demo
          </button>
        </div>
        <div className="max-h-[500px] flex justify-center items-center">
          <img
            className=""
            src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/0a160f829_37691.jpg"
            alt="ডেল কার্নেগীর রচনা সমগ্র"
          />
        </div>
      </section>

      <section className="">
          <h1 className="text-center text-4xl font-bold">Customer Reviews</h1>
          <div className="">
              <Link to={'/reviews'} className='flex flex-wrap md:flex-nowrap justify-center'>
              {
                  comment3.map(comment=> <UserReviews
                  key={comment.id}
                  comment={comment}
                  ></UserReviews>)
              }
              </Link>
          </div>
          <Link to={'/reviews'} className="text-center block w-[300px] mx-auto bg-blue-600 text-white font-semibold px-12 rounded-md my-7">See All Reviews</Link>
      </section>
    </main>
  );
};

export default Home;
