import React from "react";

const Portfolio = () => {
  return (
    <div className="w-full md:w-4/6 lg:w-1/2 mx-auto min-h-screen">
      <h2 className="text-2xl font-bold">
        Hi, I'm <span className="text-primary">Mukarrom Hosain</span>
      </h2>
      <h3 className="text-xl">
        <strong>Email:</strong> mukarrom21@gmail.com
      </h3>
      <p className="mt-3 text-gray-700">
        I have completed Takmil (Masters) in 2016 at Islamic Research Center
        Bashundhara Dhaka Madrasa. Then I studied Islamic Economy at the Center
        for Islamic Economic Bangladesh, Bashundhara, Dhaka for 2 years.
      </p>
      <div className="">
        <h2 className="text-2xl text-center mt-12">My Skills</h2>
        <ul className="list-disc">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>React Js</li>
          <li>Express Js</li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-2xl text-center mt-12">Some Projects:</h2>
        <ul className="list-disc">
          <li>
            <a
              className="text-red-600 underline"
              href="https://mmh-assignment-9.netlify.app/"
            >
              বই পড়ুন, নিজেকে গড়ুন
            </a>
          </li>
          <li>
            <a
              className="text-red-600 underline"
              href="https://mmh-assignment-10.web.app/"
            >
              Tutor Pro
            </a>
          </li>
          <li>
            <a
              className="text-red-600 underline"
              href="https://assignment-11-79d86.web.app/"
            >
              Shoes House
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
