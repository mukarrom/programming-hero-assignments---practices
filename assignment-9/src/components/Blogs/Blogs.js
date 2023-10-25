import React from "react";

const Blogs = () => {
  return (
    <section>
      <h2 className="mx-auto mt-12 text-center text-2x p-5 lg:w-6/12 rounded-xl">
        উত্তর দেখা না গেলে পেজটি{" "}
        <button
          onClick={() => window.location.reload()}
          className="rounded-xl border border-green-600 font-bold bg-white text-green-600 py-2 px-4 hover:bg-green-800 hover:text-white transition-all"
        >Reload</button> দিন।</h2>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="md:w-8/12 lg:w-6/12 w-10/12 mx-auto"
      >
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center">
              <svg
                className="mr-2 w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Context API কি?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              রিঅ্যাক্ট কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট অ্যাপের জন্য
              কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস
              করা যেতে পারে। এটি "প্রপ ড্রিলিং" বা দাদা-দাদি থেকে শিশু থেকে
              পিতা-মাতার কাছে প্রপস সরানোর বিকল্প। রেডক্স ব্যবহার করে রাজ্য
              পরিচালনার জন্য প্রসঙ্গটিকে একটি সহজ, হালকা পদ্ধতি হিসাবেও উল্লেখ
              করা হয়। কনটেক্সট এপিআই হল রিঅ্যাক্টের 16.3 সংস্করণে যোগ করা একটি
              (ধরনের) নতুন বৈশিষ্ট্য যা একজনকে পুরো অ্যাপ জুড়ে (বা এর অংশ)
              হালকাভাবে এবং স্বাচ্ছন্দ্যে শেয়ার করতে দেয়।
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span className="flex items-center">
              <svg
                className="mr-2 w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              semantic tag কি?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          className="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              semantic tag এমন ট্যাগ যা ব্রাউজার এবং ডেভলাপার উভয়ের কাছে এর
              অর্থ স্পষ্টভাবে বর্ণনা করে। প্রথমত, এটি পড়া অনেক সহজ। সিমান্টিক
              ট্যাগ ব্যবহার করে কোডের ব্লকগুলি দেখার সময় একজন প্রোগ্রামার
              হিসাবে আপনি কয়েকশ বা হাজার হাজার লাইন কোডের মাধ্যমে সহজে পড়তে
              পারেন। কোডটি পড়া এবং বোঝা যত সহজ, এটি আপনার কাজকে তত সহজ করে
              তোলে। এটা সবচেয়ে বড় সুবিধা হচ্ছে, সার্চ ইঞ্জিন এবং সহায়ক
              প্রযুক্তিগুলি (যেমন স্ক্রীন রিডার যেমন দৃষ্টিশক্তিহীন
              ব্যবহারকারীদের জন্য) আপনার ওয়েবসাইটের প্রসঙ্গ এবং বিষয়বস্তু আরও
              ভালভাবে বুঝতে সক্ষম, যার অর্থ আপনার ব্যবহারকারীদের জন্য আরও ভাল
              অভিজ্ঞতা।
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              <svg
                className="mr-2 w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Inline এবং Inline Block এর মধ্যে পার্থক্য কী?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          className="hidden"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              কোন এলিমেন্টকে display: inline বা inline-block করলে সেটার তার
              যতটুকু জায়গা দরকার শুধু ততটুকু জায়গা নিবে। সম্পূর্ণ লাইন দখল করবে
              না। কিন্তু inline না দিয়ে শুধু ব্লক দিলে সম্পূর্ণ লাইনের জায়গা দখল
              করে ফেলবে। তবে inline এবং inline-block এর মধ্যেও পার্থক্য আছে। তা
              হলো: কোন এলিমেন্টকে display: inline করার পর সেটাতে width hight
              সেট করলে সেটাতে কোন ইফেক্ট করে না। পক্ষান্তরে কোন এলিমেন্টকে
              display: inline-block করলে সেটাতে width hight সেট করলে সেটাতে উইদ
              এবং হাইট সেট হয়ে যায়।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
