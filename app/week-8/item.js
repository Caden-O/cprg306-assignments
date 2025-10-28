"use client";
import { useState } from "react";

export default function Item({itemName, itemCount, itemCategory, onSelect}){
  return(
    <li className="rounded-2xl bg-neutral-800 m-5 py-2  hover:bg-neutral-700" onClick={onSelect}>
      <p className="m-5 text-2xl">Item: {itemName}</p>
      <p className="m-5 text-2xl">Quantity: {itemCount}</p>
      <p className="m-5 text-2xl">Category: {itemCategory}</p>
    </li>
  )
}