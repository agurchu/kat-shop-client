import React from "react";
import { productData } from "../../../static/data";
import ProductCard from "../productCard/ProductCard";
import { useSelector } from "react-redux";

export default function FeaturedProduct() {
  // const { allProducts } = useSelector((state) => state.products);
  return (
    <div>
      <div className="section">
        <div className="heading">
          <h1>Featured Products</h1>
        </div>
        <div className="mainGrid">
          {productData && productData.length !== 0 && (
            <>
              {productData &&
                productData.map((item, index) => (
                  <ProductCard data={item} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
