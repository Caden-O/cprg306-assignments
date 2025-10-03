"use client";

export default function Page() {
  const nuts = (text) => {
    alert(text);
    console.log("nuts");
  }
  return (
    <main>
      <h1>deez</h1>
      <button onClick={() => nuts("nuts")} className="bg-black py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-900 cursor-pointer">...</button>
    </main>
  );
}