import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { backend_url } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

export default function Cart({ setOpenCart }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discount_price,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="h-screen z-10 fixed bg-[#0000004b] top-0 left-0 right-0">
      <div className="bg-white fixed top-0 right-0 lg:w-2/5 w-full sm:w-2/4 min-h-full flex shadow-sm flex-col justify-between">
        {cart && cart.length === 0 ? (
          <div className="w-full h-screen normalFlex justify-center">
            <div className="fixed top-3 right-3 flex w-full pt-5 pr-5 justify-end">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <div>
            <div className="flex w-full pt-5 pr-5 justify-end">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>

            {/* iten length */}
            <div className="normalFlex p-4 mb-3">
              <IoBagHandleOutline size={25} />
              <h5 className="pl-2 text-xl font-medium">
                {cart && cart.length} items
              </h5>
            </div>

            {/* cart single items */}
            <div className="w-full border-t">
              {cart &&
                cart.map((item, index) => (
                  <CartSingle
                    key={index}
                    data={item}
                    quantityChangeHandler={quantityChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
            </div>
          </div>
        )}

        <div className="section mb-4">
          {/* checkout buttons */}
          <Link to="/checkout">
            <div className="bg-orange-600 w-full h-11 normalFlex justify-center rounded-md">
              <h1 className="text-white font-medium text-lg">
                Checkout Now R{totalPrice}
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CartSingle({ data, quantityChangeHandler, removeFromCartHandler }) {
  const [value, setValue] = useState(data.qty);
  const usdToZar = 19.66;
  const totalPrice = (data.discount_price * usdToZar * value)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleIncrement = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const handleDecrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4">
      <div className="w-full normalFlex">
        <div>
          <div
            onClick={() => handleIncrement(data)}
            className="bg-black shadow-md bg-opacity-50 p-2 rounded-md cursor-pointer"
          >
            <HiPlus size={18} color="white" />
          </div>
          <span className="p-3 ">{value}</span>
          <div
            onClick={() => handleDecrement(data)}
            className="bg-black shadow-sm bg-opacity-20 p-2 rounded-md cursor-pointer"
          >
            <HiOutlineMinus size={16} className="text-gray-900" />
          </div>
        </div>
        <img
          src={`${data.image_Url[0].url}`}
          alt="cloth"
          className="w-[130px] h-min ml-2 rounded-md"
        />
        <div className="pl-1">
          <h1>{data.name}</h1>
          <h2 className="font-normal text-sm text-[#00000082]">
            R
            {(data.discount_price * usdToZar * value)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
          <h3 className="font-semibold font-Roboto text-lg pt-1 text-orange-600">
            R{totalPrice}
          </h3>
        </div>
        <RxCross1
          className="cursor-pointer"
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
}
