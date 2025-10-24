"use client";
import { useState } from "react";

function NewItem(){
  const [counterNum, setCounterNum] = useState(1);

  function increaseCounter() {
    setCounterNum(counterNum + 1);
    if(counterNum + 1 == 20){
      document.getElementById("increment").disabled = true;
    }
    if(counterNum + 1 > 0){
      document.getElementById("decrement").disabled = false;
    }
  }
  function decreaseCounter() {
    setCounterNum(counterNum - 1);
    if(counterNum-1 == 0){
      document.getElementById("decrement").disabled = true;
    }
    if(counterNum -1 < 20){
      document.getElementById("increment").disabled = false;
    }
  }
  return(
    <main>
      <header>
        <h1 className="font-bold text-2xl ">Week 4</h1>
      </header>
      <br></br>
      <section>
        <p
          className="m-5 text-5xl"
          >{counterNum}</p>
        <button
          id="increment"
          onClick={increaseCounter}
          className="rounded-2xl items-center bg-green-500 p-5 cursor-pointer font-semibold disabled:bg-green-300"
          disabled=""
          >
          increment
        </button>
        <button
          id="decrement"
          onClick={decreaseCounter}
          className="rounded-2xl items-center bg-red-500 p-5 cursor-pointer font-semibold disabled:bg-red-300"
          disabled=""
          >
          decriment
        </button>
      </section>
    </main>
  )
}

export default NewItem;