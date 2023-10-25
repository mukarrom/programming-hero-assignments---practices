import React from "react";
import { Carousel, Container } from "react-bootstrap";
import banner from "../../Images/TutorBanner.jpg";

const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item>
          <img
            height={500}
            className="d-block vw-100"
            src="https://img.freepik.com/free-photo/front-view-children-playing-together-kindergarten_23-2148633303.jpg?t=st=1650190986~exp=1650191586~hmac=814ed955e8500c1e9075f91b0a7c9a514fd6c5a1bd0dd1b08e0394f33ac82ac0&w=900"
            alt="First slide"
          />
          <Carousel.Caption
            style={{ background: "#ffffffb7", borderRadius: "25px" }}
            className="text-dark"
          >
            <h1 className="text-primary">Professional Tutor</h1>
            <h1>Learn with easiest way</h1>
            <p>
              Tell us what you need help with and our smart matching system will
              connect you with an online tutor. Sign up for a free trial using a
              debit/credit card.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            className="d-block vw-100"
            src={banner}
            alt="Second slide"
          />

          <Carousel.Caption
            style={{ background: "#ffffffb7", borderRadius: "25px" }}
            className="text-dark"
          >
            <h1 className="text-primary">Professional Tutor</h1>
            <h1>Learn with best practices</h1>
            <p>
              Get live 1-on-1 help in our advanced lesson space. Use a virtual
              whiteboard, audio/video chat, screen sharing, text editor and much
              more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            className="d-block vw-100"
            src="https://img.freepik.com/free-photo/side-view-child-learning-from-tutor-home_23-2148524520.jpg?t=st=1650191711~exp=1650192311~hmac=c06eb11b88c077c002827928a622c885734ba5a8eb7c2593c3b0ea0553f29ce1&w=900"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{ background: "#ffffffb7", borderRadius: "25px" }}
            className="text-dark"
          >
            <h1 className="text-primary">Professional Tutor</h1>
            <h1>In depth lessons</h1>
            <p>
              After the lesson is completed, both the tutor and student have the
              opportunity to rate each other, maintaining the quality of our
              community.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
