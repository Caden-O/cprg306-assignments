"use client";
import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main>
      <header>
        <h1 className="font-bold text-2xl p-10">Week 5</h1>
      </header>
      <NewItem/>
    </main>
  );
} 