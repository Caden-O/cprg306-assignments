"use client";
import Header from "../utilities/header"
import ItemList from "./item-list"
import NewItem from "./new-item";
import itemsData from "./items.json"
import { useState } from "react";

var count = 0
export default function Page() {
  const [newItems, setNewItems] = useState([...itemsData]);
  // count ++
  // console.log(`count: ${count}`);


  // var awesomeItem = { 
  //     id:"a" + count,
  //     name:"malk",
  //     quantity:2,
  //     category:"dairy"
  //   }

  // if(count ==1 ){
  //   handleAddItem(awesomeItem)
  // }

    function handleAddItem(item){
      console.log(newItems.length);
      console.log(`adding new item to array: ${item.name}`);
      setNewItems((oldItems) => [...oldItems, item])
      return newItems;
    }
    
  return (
    <main>
      <Header />
      <section className="max-w-xl mx-auto">
        <h1 className="text-4xl p-5 font-bold">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={newItems}/>
      </section>
    </main>
  );
}