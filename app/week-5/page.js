"use client";
import Header from "../utilities/header"
import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main>
      <Header week={5}/>
      <h1 className="font-bold text-2xl p-10">Week 5</h1>
      <NewItem/>
    </main>
  );
} 