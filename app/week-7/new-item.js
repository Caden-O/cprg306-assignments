"use client";
import { use, useState } from "react";

export default function NewItem({ onAddItem }){
  const [counterNum, setCounterNum] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [IncStatus, setIncStatus] = useState(false)
  const [decStatus, setDecStatus] = useState(true)

  function increaseCounter(event) {
    event.preventDefault();
    setCounterNum(counterNum + 1);    
    if(counterNum + 1 == 20){
      setIncStatus(true)
    }
    if(counterNum + 1 > 0){
      setDecStatus(false)
    }
  }
  function decreaseCounter(event) {
    event.preventDefault();
    setCounterNum(counterNum - 1);
    if(counterNum-1 == 1){
      setDecStatus(true)
    }
    if(counterNum -1 < 20){
      setIncStatus(false)
    }
  }

  function updateName(event){
    setName(event.target.value);
  }
  function updateCategory(event){
    setCategory(event.target.value);
  }

  function resetInput(){
    setName("")
    setCounterNum(1)
    setCategory("produce")
    setIncStatus(false)
    setDecStatus(true)
  }

  // function handleSubmit(event){
  //   event.preventDefault();

  //   var item1 = new Object();
  //   item1.name = name;
  //   item1.quantity = counterNum;
  //   item1.category = category;

  //   console.log(name, counterNum, category);
  //   console.log(item1.name, item1.quantity, item1.category);
  //   alert(`Item: ${item1.name}\nQuantity: ${item1.quantity}\nCategory: ${item1.category}`);
  // }

  /*
   * ----------------------------------------------------------------------------------------------------------------------------------------
  */

  return(
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        var item1 = {
          name:name,
          quantity:counterNum,
          category:category,
          id:Math.random()*100
        }
        onAddItem(item1)
        resetInput()
      }}
      // onSubmit={handleSubmit}
      className="outline-2 outline-neutral-700 bg-neutral-900 rounded-2xl p-3 m-5"
      value="a"
    >
      <div className="p-2 text-2xl">
        <label htmlFor="name" className="font-semibold">
          Item Name:
        </label>
        <br className="mb-3"/>
        <input 
          type="text" 
          required={true}
          name="name" 
          id="name" 
          value={name}
          placeholder="(input item name)"
          onChange={updateName}
          className="p-2 font-thin rounded-lg bg-neutral-700"
        />
      </div>
      {/*  */}
      <div className="p-2 text-2xl">
        <p className="font-semibold text-xl">Amount of items:</p>
        <p className="m-5 text-5xl">{counterNum}</p>
        <button 
          id="increment"
          onClick={increaseCounter}
          className="rounded-lg items-center bg-blue-500 m-1 p-3 enabled:cursor-pointer disabled:bg-blue-900 disabled:text-neutral-400 hover:bg-blue-400"
          value="inc"
          disabled={IncStatus}
        >
          increment
        </button>
        <button
          id="decrement"
          onClick={decreaseCounter}
          className="rounded-lg items-center bg-red-700 m-1 p-3 enabled:cursor-pointer disabled:bg-red-900 disabled:text-neutral-400 hover:bg-red-600"
          value="dec"
          disabled={decStatus}
        >
          decriment
        </button>
        <p className="m-2 text-xs text-neutral-400">( Range: 1 - 20 )</p>
      </div>
      <div className="p-2 text-xl">
        <label htmlFor="category" className="font-semibold">Category:</label>
        <br className="mb-3"/>
        <select id="category" onChange={updateCategory} name="category" value={category} className="p-2 rounded-lg bg-neutral-700">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="p-2 text-xl">
        <input
          type="submit"
          value="Submit Form"
          className="rounded-lg items-center bg-blue-500 p-5 hover:cursor-pointer hover:bg-blue-400"
        />
      </div>
    </form>
  )
}