import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="normalFlex relative min-h-[70vh] w-full bg-cover 800px:min-h-[80vh] bg-no-repeat"
      style={{
        backgroundImage:
          "url(057fa10c35f0a6720d7a38af82c08bd3648f40d3fc214-OJro98_fw658.png)",
      }}
    >
      <div className="section w-[90%] 800px:w-[60%]">
        <h1 className="text-4xl leading-tight font-semibold capitalize text-[#302e2b] 800px:text-6xl">
          Best Collection for <br /> Home Decoration
        </h1>
        <p className="text-[#000000ad] pt-5 text-base font-Poppins font-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui
          natus dolorum laborum cupiditate, eius reiciendis excepturi quaerat
          est voluptatum?
        </p>
        <Link to="/products" className="inline-block">
          <div className="button mt-5">
            <span className="text-white font-Poppins text-lg">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
