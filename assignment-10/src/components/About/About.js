import React from "react";
import "./About.module.css";
import mmh from "../../Images/44.6 kb-hello.png";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <img src={mmh} alt="" />
      </div>
      <div
        className="text-center w-75 mx-auto "
        style={{ marginTop: "-150px" }}
      >
        <div className="shadow my-5 py-4 rounded">
          <h1>Mukarrom Hosain</h1>
          <h6 style={{ color: "gray" }}>
            Jonior Web Developer at{" "}
            <span className="text-danger">
              <i>MMH Technology</i>
            </span>
          </h6>
        </div>
        <h3 className="bg-light py-3 shadow text-primary">
          About Me and My Mission
        </h3>
        <hr />
        <p style={{ color: "gray", textAlign: "justify" }} className="">
          I am from Madrasa's background. I took a long journey in Madrasa. My
          knowledge of technology was very little. But I was very interested in
          it.But I was very interested in it. As a result, I became interested
          in learning English for a while. I try to learn computer as well.
          Programming fascinated me. So I started learning by watching some
          youtube videos first. I was feeling the need to do a course later.
          After much thought, I finally got into the programming hero course. My
          goal is to become a skilled fullstack developer. So in the midst of a
          lot of busyness I am trying to find some time to learn. I am growing
          up day by day. Specially I learnt how to work hardly and give focus
          and attention to something for achieve best. Hard work is now my
          occupation. Thanks to Programming Hero Team.
        </p>
      </div>
    </Container>
  );
};

export default About;
