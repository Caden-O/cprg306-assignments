"use client";
import Header from "../header/header"
import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  // const nuts = (text) => {
  //   alert(text);
  //   console.log("nuts");
  // }
  return (
    <main>
      <Header />
      <NewItem></NewItem>
    </main>
  );
}