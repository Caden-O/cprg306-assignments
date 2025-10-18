"use client";
import { useState } from "react";

function Item({itemName, itemCount, itemCategory}){
  return(
    <li className="rounded-2xl border-2 border-white bg-gray-900 m-5">
      <p className="m-5 text-2xl">Item: {itemName}</p>
      <p className="m-5 text-2xl">Quantity: {itemCount}</p>
      <p className="m-5 text-2xl">Category: {itemCategory}</p>
    </li>
  )
}

export default Item;