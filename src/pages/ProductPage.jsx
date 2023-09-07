import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/route/productCard/ProductCard";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");

  useEffect(() => {
    if (categoryData === null) {
      const d = productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d = productData.filter((item) => item.category === categoryData);
      setData(d);
    }

    // window.scrollTo(0,0)
  }, []);

  return (
    <div>
      <Header activeHeading={3} />
      <div className="section mt-12">
        <div className="mainGrid">
          {data &&
            data.map((item, index) => <ProductCard data={item} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full text-xl pb-[110px]">
            No Producs Found!
          </h1>
        ) : null}
      </div>
    </div>
  );
}
