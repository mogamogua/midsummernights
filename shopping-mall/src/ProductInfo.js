import React from "react";
import oioi1 from "./oioi1.jpg";
import oioi2 from "./oioi2.jpg";
import oioi3 from "./oioi3.jpg";

const imageArray = [oioi1, oioi2, oioi3];

function ProductInfo({ product }) {
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
          </div>
        );
      })}
    </>
  );
}

export default ProductInfo;
