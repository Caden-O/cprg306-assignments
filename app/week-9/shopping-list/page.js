"use client";
import Header from "@/app/utilities/header";
import ItemList from "./item-list"
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
  const { user } = useUserAuth();
  const [newItems, setNewItems] = useState([...itemsData]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

    function handleAddItem(item){
      console.log(newItems.length);
      console.log(`adding new item to array: ${item.name}`);
      setNewItems((oldItems) => [...oldItems, item])
      return newItems;
    }

    function handleChangeSelectedIngredient(ingredient){
      setSelectedIngredient(ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim().split(",")[0]);
      // setSelectedIngredient(selectedIngredient)
      return selectedIngredient;
    }

    function LoadMealIdeas(){
      if(selectedIngredient != null && selectedIngredient != undefined && selectedIngredient != ""){
        console.log(selectedIngredient);
        
        return(
          <MealIdeas ingredient={selectedIngredient}/>
        )
      }
    }
  if(user == null){
    return(
      <main>
        <p>This page can only be accessed if you are signed in!</p>
      </main>
    )
  }else{
    return (
      <main>
        <Header />
        <div className="h-full flex justify-center items-center">
          <div className="max-w-xl justify-self-end">
            <h1 className="text-4xl p-5 font-bold">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={newItems} onItemSelect={handleChangeSelectedIngredient}/>
          </div>
          
          <div className="max-w-xl justify-self-start self-start">
            <LoadMealIdeas ingredient={selectedIngredient}/>
          </div>
        </div>
      </main>
    );
  }
}