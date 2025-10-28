"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }){  
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    } else {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    }
  });

  return(
    <section className="outline-2 outline-neutral-700 bg-neutral-900 rounded-2xl p-3 m-5">
      <div className="gap-2">
        <label htmlFor="button">Sort By: </label>
        <button name="button" onClick={() => setSortBy("name")} id="sortName" value="name"
        className={`p-3 m-2 rounded-lg
        ${sortBy=="category" ? 'bg-blue-500 cursor-pointer hover:p-4 hover:m-1 hover:bg-blue-400 hover:font-semibold' : 'bg-neutral-700 text-neutral-400'}`}
        >Name</button>
        <button name="button" onClick={() => setSortBy("category")} id="sortCategory" value="category"
        className={`p-3 m-2 rounded-lg
        ${sortBy=="name" ? 'bg-blue-500 cursor-pointer hover:p-4 hover:m-1 hover:bg-blue-400 hover:font-semibold' : 'bg-neutral-700 text-neutral-400'}`}
        >Category</button>
      </div> 

      <div>
        <ul>
          {/* <Item itemName="Malk" itemCount="3" itemCategory="Dairy"></Item> */}
          {sortedItems.map((item) => { return(
            <Item itemName={item.name} itemCount={item.quantity} itemCategory={item.category} key={item.id} onSelect={() => onItemSelect(item.name)}/>
          )
        },
        // console.log(`in item list: ${newItems.length}`)
          )}
          
        </ul>
      </div>
    </section>
  )
}