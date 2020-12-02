import React from "react";
import "./hearder.css";
const Hearder = () => {
  return (
    <div className="hearder_wrapper">
      <div className="hearder_wrapper_inner_div ">
        <h1 className="text-white text-center inner_div_h1">
          balanced mind in the balanced body
        </h1>
        <p className="text-white inner_div_p mt-2">Sun Fitness</p>
        <button type="button" className="hearder_button text-white">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hearder;
