import React from "react";

export default function Product({ productName, productPrice }) {
  return (
    <div>
      <p>{productName}</p>
      <h3>{productPrice}</h3>
    </div>
  );
}
