import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("myCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="my-4">
      <div>
        <h1 className="fw-bold text-primary text-center">My Courses</h1>
        <p className="text-center ">
          Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididun
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
