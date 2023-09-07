import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IncrementBtn from "../usablePieces/incrementBtn";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductDeails({ data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const navigate = useNavigate();
  const handleMessageSubmit = () => navigate("/inbox?conversation=51425468876");
  return (
    <div className="bg-white">
      {data && (
        <div className="section w-[90%] 800px:w-[80%] ">
          <div className="w-full py-5">
            <div className="block w-full 800px:flex mb-4">
              <div className="w-full 800px:w-[50%] mb-6">
                <img
                  src={data.image_Url[select].url}
                  className="w-[80%] "
                  alt=""
                />
                <div className="w-full flex">
                  <div className={`${select === 0 ? "border" : ""}`}>
                    <img
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                      src={data?.image_Url[0].url}
                      alt=""
                    />
                  </div>
                  <div className={`${select === 1 ? "border" : ""}`}>
                    <img
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                      src={data?.image_Url[1].url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-1/2">
                <h1 className="productTitle">{data.name}</h1>
                <p className="text-sm">{data.description}</p>
                <div className="flex pt-3">
                  <h4 className="productDiscountPrice">
                    R
                    {data.discount_price
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                  {data.price && (
                    <h3 className="price">
                      R
                      {data.price
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </h3>
                  )}
                </div>
                <IncrementBtn />
                <div className="button2">
                  <span className="normalFlex text-white">
                    Add to cart{" "}
                    <AiOutlineShoppingCart size={18} className="ml-2" />
                  </span>
                </div>
                <div className="normalFlex mt-8">
                  <img
                    className="w-[50px] h-[50px] rounded-full mr-2"
                    src={data.shop.shop_avatar.url}
                    alt=""
                  />
                  <div>
                    <h3 className="shop_name !pt-1 !pb-1">{data.shop.name}</h3>
                    <h4 className="text-sm pb-2">
                      {data.shop.ratings} Ratings
                    </h4>
                  </div>
                  <div
                    onClick={handleMessageSubmit}
                    className="button2 px-8 !bg-orange-600 !mt-0 ml-8"
                  >
                    <span className="normalFlex whitespace-nowrap  text-white">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ProductDetailsInfo data={data} />
          </div>
        </div>
      )}
    </div>
  );
}

function ProductDetailsInfo({ data }) {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-neutral-200  px-3 py-2 rounded 800px:px-10">
      <div className="border-b w-full flex justify-between pt-10 pb-2">
        <div className="relative">
          <h5
            onClick={() => setActive(1)}
            className="text-lg font-semibold leading-5 px-1 cursor-pointer 800px:text-xl"
          >
            Product Details
          </h5>
          {active === 1 && <div className="active_indicator" />}
        </div>
        <div className="relative">
          <h5
            onClick={() => setActive(2)}
            className="text-lg font-semibold leading-5 px-1 cursor-pointer 800px:text-xl"
          >
            Product Reviews
          </h5>
          {active === 2 && <div className="active_indicator" />}
        </div>
        <div className="relative">
          <h5
            onClick={() => setActive(3)}
            className="text-lg font-semibold leading-5 px-1 cursor-pointer 800px:text-xl"
          >
            Seller Information
          </h5>
          {active === 3 && <div className="active_indicator" />}
        </div>
      </div>
      {active === 1 && (
        <>
          <p className="text-lg whitespace-pre-line mt-2 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            commodi ipsam voluptate corporis perferendis dolores distinctio, sed
            ab veniam ex similique quia eaque et voluptatum? Sunt molestiae
            eveniet deserunt nam.
          </p>

          <p className="text-lg whitespace-pre-line mt-2 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            commodi ipsam voluptate corporis perferendis dolores distinctio, sed
            ab veniam ex similique quia eaque et voluptatum? Sunt molestiae
            eveniet deserunt nam.
          </p>

          <p className="text-lg whitespace-pre-line mt-2 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            commodi ipsam voluptate corporis perferendis dolores distinctio, sed
            ab veniam ex similique quia eaque et voluptatum? Sunt molestiae
            eveniet deserunt nam.
          </p>
        </>
      )}
      {active === 2 && (
        <div className="normalFlex justify-center w-full min-h-[40vh]">
          <p>No Reviews yet!</p>
        </div>
      )}
      {active === 3 && (
        <div className="block p-5 w-full 800px:flex">
          <div className="w-full 800px:w-1/2">
            <div className="normalFlex">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={data.shop.shop_avatar.url}
                alt=""
              />
              <div>
                <h3 className="shop_name">{data.shop.name}</h3>
                <h4 className="pb-3 text-sm">{data.shop.ratings}</h4>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae necessitatibus mollitia iusto fuga vel nisi. Commodi
              nesciunt repudiandae eius ipsam?
            </p>
          </div>
          <div className="w-full 800px:w-1/2 mt-5 flex items-end flex-col">
            <div className="text-left">
              <h5 className="font-semibold">
                Joined on: <span className="font-medium">14 March 2023</span>
              </h5>
              <h5 className="font-semibold mt-3">
                Total Products: <span className="font-medium">1,223</span>
              </h5>
              <h5 className="font-semibold mt-3">
                Total Reviews: <span className="font-medium">523</span>
              </h5>
              <Link to="/">
                <div className="button !rounded !h-10 ">
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
