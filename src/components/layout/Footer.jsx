import React from "react";
import kj_dev_logo from "../../assets/kj_dev_logo.png";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black text-neutral-500">
      <div className="py-7 bg-cover bg-no-repeat bg-center !bg-[url(extensive-ecommerce-banner.jpg)]  text-white px-4 md:flex md:items-center md:justify-between sm:px-12 ">
        <h1 className="font-semibold text-3xl mb-6 lg:text-4xl lg:leading-normal lg:w-2/4 md:w-2/5">
          <span className="text-green-500">Subscribe</span> us for news events
          and offers
        </h1>
        <div>
          <input
            className="mr-1 text-gray-800 w-full mb-4 rounded px-2 py-2.5 800px:w-72 sm:w-60 sm:mr-5 lg:mb-0 focus:outline-none"
            type="text"
            required
            placeholder="Enter your email..."
          />
          <button className="bg-green-500 hover:bg-teal-500 duration-[250ms] px-5 py-2.5 rounded-md sm:w-auto w-full ">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-16 px-5 lg:grid-cols-footer sm:px-8 sm:text-center">
        <div className=" normalFlex text-neutral-300 text-center flex-col px-5 md:text-start sm:block">
          <img
            className="mb-3 mx-auto md:mx-0 w-[200px]"
            src={kj_dev_logo}
            alt="logo"
          />
          <p>The home and elements needed to create beautiful products</p>
          <div className="normalFlex mt-4 md:justify-start justify-center">
            <AiFillFacebook size={25} className="cursor-pointer item-hover" />
            <AiOutlineTwitter
              size={25}
              className="ml-4 cursor-pointer item-hover"
            />
            <AiFillInstagram
              size={25}
              className="ml-4 cursor-pointer item-hover"
            />
            <AiFillYoutube
              size={25}
              className="ml-4 cursor-pointer item-hover"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 md:mx-0  ">
          <ul className="sm:text-start ml-4 text-center">
            <h1 className="font-bold mb-2 text-neutral-300">Company</h1>
            {footerProductLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="item-hover block text-sm leading-6"
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <ul className="sm:text-start w-auto text-center">
            <h1 className="font-bold mb-2 text-neutral-300">Shop</h1>
            {footercompanyLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="item-hover whitespace-nowrap block text-sm leading-6"
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <ul className="sm:text-start text-center">
            <h1 className="font-bold mb-2 text-neutral-300">Support</h1>
            {footerSupportLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="item-hover block text-sm leading-6"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid text-center section pt-2 text-sm pb-8 grid-cols-1 gap-10 md:grid-cols-2 ">
        <div className="grid sm:grid-cols-2 gap-10">
          <span>&copy; 2023 KatlegoJDev. All rights reserved.</span>
          <span>Terms &#x2022; Privacy Policy</span>
        </div>
        <div className="mx-auto flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
