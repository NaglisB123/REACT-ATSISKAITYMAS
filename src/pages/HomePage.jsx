export default function HomePage() {
  return (
    <div>
      <div className="bg text-2xl px-20 text-zinc-50 translate-x-30">
        <p className="pt-20 text-red-500">
          NEW COLLECTION IN THE STYLE OF OLD{" "}
          <strong className="italic">BIRMINGHAM</strong>
        </p>
        <h1 className="text-8xl text-red-600 pt-10 pb-20">
          Beautifully Crafted <strong className="italic">Vintage</strong>{" "}
          Furniture
        </h1>
        <button className="bg-amber-600 hover:bg-amber-100 text-black px-8 py-5 rounded-md transition-colors duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:bg-amber-100">
          EXPLORE
        </button>
      </div>
    </div>
  );
}
