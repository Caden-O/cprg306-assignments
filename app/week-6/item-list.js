"use client";
import Item from "./item.js";
import itemsJson from "./items.json"
import { useState } from "react";



function ItemList(){
  const [sortBy, setSortBy] = useState("name");

  const [items, setItems] = useState(itemsJson.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
  )

  function updateSort(event){

    const newSortValue = event.target.value;
    setSortBy(newSortValue);
    let newItemsList = [...itemsJson];

    // if(newSortValue === "name"){
    //   newItemsList.sort((a, b) => (a.name - b.name));
    // }else {
    //   newItemsList.sort((a, b) => (a.category - b.category));
    // }
    if(newSortValue=="name"){
      newItemsList.sort((a, b) => (a.name.localeCompare(b.name)));
    }else{
      newItemsList.sort((a, b) => (a.category.localeCompare(b.category)));
      //this part is still a little confusing to me ):
    }

    setItems([...newItemsList]);
    // console.log(`sort by: ${event.target.value}/${newSortValue}`);
  }

  return(
    <section className="border-2 border-white bg-gray-900 rounded-2xl p-3 m-5">
      <div className="gap-2">

        <label htmlFor="button">Sort By: </label>

        <button name="button" onClick={updateSort} id="sortName" value="name"
        className={`p-3 m-2 rounded border
        ${sortBy=="category" ? 'bg-blue-500 cursor-pointer hover:p-4 hover:m-1 hover:bg-blue-400' : 'bg-gray-800 font-semibold'}`}
        >Name</button>

        <button name="button" onClick={updateSort} id="sortCategory" value="category"
        className={`p-3 m-2 rounded border
        ${sortBy=="name" ? 'bg-blue-500 cursor-pointer hover:p-4 hover:m-1 hover:bg-blue-400' : 'bg-gray-800 font-semibold'}`}
        >Category</button>

      </div> 

      <div>
        <ul id="pageList">

          {/* <Item itemName="Malk" itemCount="3" itemCategory="Dairy"></Item> */}
          {items.map((item) => { return(
              <Item onLoad={updateSort}
                        //    ^ so when the siute starts (before buttons are pressed) the items are displayed already sorted (rather than unsorted by default ^_^)
                        // (BECAUSE the sort by name button appears "clicked" by default when the page is loaded so it wouldnt make sense if the uhh list wasnt sorted)
              itemName={item.name} itemCount={item.quantity} itemCategory={item.category} key={item.id}/>
              //this part took me ttoo long to figure out unfortunately
            )}
          )}
          
        </ul>
      </div>
    </section>
  )
}

export default ItemList;