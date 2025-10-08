"use client";
import { useState } from "react";

function NewItem(){
  const [counterNum, setCounterNum] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  function increaseCounter(event) {
    event.preventDefault();
    setCounterNum(counterNum + 1);
    if(counterNum + 1 == 20){
      document.getElementById("increment").disabled = true;
    }
    if(counterNum + 1 > 0){
      document.getElementById("decrement").disabled = false;
    }
  }
  function decreaseCounter(event) {
    event.preventDefault();
    setCounterNum(counterNum - 1);
    if(counterNum-1 == 0){
      document.getElementById("decrement").disabled = true;
    }
    if(counterNum -1 < 20){
      document.getElementById("increment").disabled = false;
    }
  }

  
  function updateName(event){
    setName(event.target.value);
  }
  function updateCategory(event){
    setCategory(event.target.value);
    // console.log(event);
    
  }
  // const item = {
  //   name: "",
  //   quantity: "",
  //   category: ""
  // }
  function handleSubmit(event){
    event.preventDefault();
    console.log("run!!!");

    var item1 = new Object();
    item1.name = {name};
    item1.quantity = {counterNum};
    item1.category = {category};

    console.log(name, counterNum, category);
    console.log(item1.name.name, item1.quantity.counterNum, item1.category.category);
    
    alert(item1);
  }
  return(
    <form 
      onSubmit={handleSubmit}
      className="outline-4 m-20 mt-0 p-5 outline-gray-400 rounded-4xl bg-gray-900"
    >
      <div
        className="p-2 text-2xl"
      >
        <label 
          htmlFor="name"
          className="font-semibold"
        >
          Item Name:
        </label>
        <br className="mb-3"/>
        <input 
          type="text" 
          required={true}
          name="name" 
          id="name" 
          value={name}
          placeholder="(item name)"
          onChange={updateName}
          className="p-2 font-thin outline-2 outline-white rounded"
        />
      </div>
      <div 
        className="p-2 text-2xl"
      >
        <p className="font-semibold text-xl">Amount of item:</p>
        <p
          className="m-5 text-5xl"
        >
          {counterNum}
        </p>
        <button 
          id="increment"
          onClick={increaseCounter}
          className="rounded-2xl items-center bg-green-600 m-1 p-3 cursor-pointer font-semibold disabled:bg-green-100 hover:bg-green-500 hover:outline-3"
          disabled=""
        >
          increment
        </button>
        <button
          id="decrement"
          onClick={decreaseCounter}
          className="rounded-2xl items-center bg-red-600 m-1 p-3 cursor-pointer font-semibold disabled:bg-red-100 hover:bg-red-500 hover:outline-3"
          disabled=""
        >
          decriment
        </button>
      </div>
      <div className="w-full p-2 text-xl">
        <label htmlFor="category" className="font-semibold">Category:</label>
        <br className="mb-3"/>
        <select id="category" onChange={updateCategory} name="category" value={category} className="outline-2 p-2 rounded bg-gray-700">
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
      <div className="mt-3">
        <input
          type="submit"
          value="Submit Form"
          className="rounded-2xl items-center bg-blue-300 p-5 font-bold"
        />
      </div>
    </form>
  )
}

export default NewItem;