import React, { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import ProductCard from "../productCard/ProductCard";

export default function BestDeals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setData(firstFive);
  }, []);
  return (
    <div>
      <div className="section">
        <div className="heading">
          <h1>Best Deals</h1>
        </div>
        <div className="mainGrid">
          {data &&
            data.map((item, index) => <ProductCard data={item} key={index} />)}
        </div>
      </div>
    </div>
  );
}
