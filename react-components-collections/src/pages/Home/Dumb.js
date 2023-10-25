import React from "react";

const Dumb = ({ msg }) => {
  return (
    <div>
      <h1 className="h1">I am Dumb</h1>
      <div className="bg-gray-800 py-12 flex justify-center">
        <span className="text-2xl text-center font-semibold shadow text-white shadow-slate-50">
          {msg}
        </span>
      </div>
    </div>
  );
};

export default Dumb;
