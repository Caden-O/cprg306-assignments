"use client";
import { useState } from "react";

export default function Item({itemName, itemCount, itemCategory}){
  return(
    <li className="rounded-2xl bg-neutral-800 m-5 py-2">
      <p className="m-5 text-2xl">Item: {itemName}</p>
      <p className="m-5 text-2xl">Quantity: {itemCount}</p>
      <p className="m-5 text-2xl">Category: {itemCategory}</p>
    </li>
  )
}