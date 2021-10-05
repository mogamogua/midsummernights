import React, { useContext } from "react";
import oioi1 from "./oioi1.jpg";
import oioi2 from "./oioi2.jpg";
import oioi3 from "./oioi3.jpg";
import stockContext from "./App.js";

const imageArray = [oioi1, oioi2, oioi3, oioi1, oioi2, oioi3];

function ProductInfo({ product }) {
  let stock = useContext(stockContext);

  console.log(stock);
  return (
    <>
      {product.map(function (pro, i) {
        return (
          <div className="col-md-4">
            <img
              src={imageArray[i]}
              alt=""
              width="250px"
              height="250px"
              background-size="cover"
            />
            <h4>{pro.title}</h4>
            <p>{pro.content}</p>
            <p>{pro.price}</p>
            <p>{stock}</p>
          </div>
        );
      })}
    </>
  );
}

export default ProductInfo;
