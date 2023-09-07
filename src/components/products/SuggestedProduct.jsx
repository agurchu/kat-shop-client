import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../route/productCard/ProductCard";

export default function SuggestedProduct({ data }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    const d =
      productData &&
      productData.filter((item) => item.category === data.category);
    setProducts(d);
  }, []);
  return (
    <div>
      {data && (
        <div className="section p-4">
          <h2 className="heading text-2xl !font-medium border-b mb-5">
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-5 mb-12 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-7">
            {products &&
              products.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
