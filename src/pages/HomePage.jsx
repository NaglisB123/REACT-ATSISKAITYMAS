import React from "react";

export default function HomePage() {
  return (
    <div className="bg text-2xl p-20 text-zinc-50 translate-x-30">
      <p className="pt-10 shadow-md">
        NEW COLLECTION IN THE STYLE OF OLD BIRMINGHAM
      </p>
      <h1 className="text-8xl pt-10 pb-20">Beautifully Crafted Vintage Furniture</h1>
      <button className="bg-amber-600 hover:bg-amber-100 text-black px-6 py-2 rounded-full transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:bg-amber-100">
        EXPLORE
      </button>
    </div>
  );
}
