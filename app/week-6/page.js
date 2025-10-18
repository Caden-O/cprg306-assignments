"use client";
import ItemList from "./item-list"
import Item from "./item"

export default function Page() {
  return (
    <main className="max-w-xl mx-auto">
      <h1 className="text-4xl p-5 font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}

