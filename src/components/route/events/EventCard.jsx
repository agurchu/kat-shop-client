import React from "react";
import CountDown from "./CountDown";

export default function EventCard({ active }) {
  return (
    <div
      className={`w-full bg-white rounded-lg overflow-hidden lg:flex p-2 ${
        active ? "unset" : "mb-12"
      } `}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full flex flex-col justify-center lg:w-[50%]">
        <h2 className="productTitle">Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          dicta doloremque nemo nam saepe earum provident repellendus dolorem
          quaerat enim assumenda ab magni illo unde atque sint quam ullam ex.
        </p>
        <div className="flex flex-col py-2 lg:flex-col 2xl:flex-row justify-between md:flex-row md:items-center">
          <div className="flex mb-6 2xl:w-[50%] lg:w-full md:w-[50%] justify-between">
            <div className="flex">
              <h5 className="text-red-500 pr-3 line-through font-medium text-lg">
                R
                {(1099 * 19.66)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
              <h5 className="text-[#333] font-Roboto font-bold text-xl">
                R
                {(999 * 19.66).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
            </div>
            <span className="pr-3 text-green-500 font-normal text-lg">
              120 sold
            </span>
          </div>

          <CountDown />
        </div>
      </div>
    </div>
  );
}
