import React, { useEffect, useState } from "react";
import { productData } from "../static/data";
import ProductCard from "../components/route/productCard/ProductCard";
import Header from "../components/layout/Header";

export default function BestSellingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);

    // window.scrollTo(0,0)
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <div className="section mt-12">
        <div className="mainGrid">
          {data &&
            data.map((item, index) => <ProductCard data={item} key={index} />)}
        </div>
      </div>
    </div>
  );
}
