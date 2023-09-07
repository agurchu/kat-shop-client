import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { useDispatch } from "react-redux";

export default function Favourite({ size, style, data, wishlist }) {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, []);

  const handleRemoveFromWishlist = () => {
    setClick(!click);
    dispatch(removeFromWishlist(item));
  };

  const handleAddToWishlist = () => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };
  return (
    <>
      {" "}
      {click ? (
        <AiFillHeart
          onClick={handleRemoveFromWishlist}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Remove from wishlist"
        />
      ) : (
        <AiOutlineHeart
          onClick={handleAddToWishlist}
          color={click ? "red" : "#333"}
          size={size}
          className={`cursor-pointer ${style}`}
          title="Add to wishlist"
        />
      )}
    </>
  );
}
