import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { backend_url } from "../../server";
import { addTocart } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";

export default function Wishlist({ setOpenWishList }) {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addTocart(newData));
    setOpenWishList(false);
  };

  return (
    <div className="h-screen z-10 fixed bg-[#0000004b] top-0 left-0 right-0">
      <div className="bg-white fixed top-0 right-0 lg:w-2/5 w-full sm:w-2/4 min-h-full flex shadow-sm flex-col justify-between">
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen normalFlex justify-center">
            <div className="fixed top-3 right-3 flex w-full pt-5 pr-5 justify-end">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishList(false)}
              />
            </div>
            <h5>Wishlist Items is empty!</h5>
          </div>
        ) : (
          <div>
            <div className="flex w-full pt-5 pr-5 justify-end">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishList(false)}
              />
            </div>
            {/* iten length */}
            <div className="normalFlex p-4 mb-2">
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-xl font-medium">
                {" "}
                {wishlist && wishlist.length} items
              </h5>
            </div>

            {/* cart single items */}
            <div className="w-full border-t">
              {wishlist &&
                wishlist.map((item, index) => (
                  <CartSingle
                    key={index}
                    data={item}
                    removeFromWishlistHandler={removeFromWishlistHandler}
                    addToCartHandler={addToCartHandler}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CartSingle({ data, removeFromWishlistHandler, addToCartHandler }) {
  const [value, setValue] = useState(1);
  const usdToZar = 19.66;
  const totalPrice = (data.price * usdToZar * value)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center">
        <RxCross1
          onClick={() => removeFromWishlistHandler(data)}
          size={18}
          className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"
        />
        <img
          src={`${data?.image_Url[0].url}`}
          alt="cloth"
          className="w-[130px] h-min mx-2 rounded-md"
        />

        <div className="px-1">
          <h1>{data.name}</h1>
          <h3 className="font-semibold font-Roboto text-lg pt-3 text-orange-600 800px:pt-1">
            R{totalPrice}
          </h3>
        </div>
        <div>
          <BsCartPlus
            onClick={() => addToCartHandler(data)}
            size={20}
            className="cursor-pointer "
            title="Add to cart"
          />
        </div>
      </div>
    </div>
  );
}
