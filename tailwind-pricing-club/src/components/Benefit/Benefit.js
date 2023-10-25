import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Benefit = (props) => {
  return (
    <p className="flex items-center">
      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2"></CheckCircleIcon>{" "}
      {props.benefit}
    </p>
  );
};

export default Benefit;
