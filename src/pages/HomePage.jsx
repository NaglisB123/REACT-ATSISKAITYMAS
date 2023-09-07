import React from "react";

export default function HomePage() {
  return (
    <div>
      <div className="bg text-2xl px-20 text-zinc-50 translate-x-30">
        <p className="pt-20">
          NEW COLLECTION IN THE STYLE OF OLD{" "}
          <strong className="italic">BIRMINGHAM</strong>
        </p>
        <h1 className="text-8xl pt-10 pb-20">
          Beautifully Crafted <strong className="italic">Vintage</strong> Furniture
        </h1>
        <button className="bg-amber-600 hover:bg-amber-100 text-black px-6 py-2 rounded-full transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:bg-amber-100">
          EXPLORE
        </button>
      </div>
    </div>
  );
}
