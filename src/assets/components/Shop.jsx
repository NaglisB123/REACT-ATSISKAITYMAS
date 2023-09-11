import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(false);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getCollection();
  }, []);

  async function getCollection() {
    setIsLoading(true);
    const getData = await getDocs(collection(db, "goods-database"));

    const dataBack = [];
    getData.forEach((doc) => {
      dataBack.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setShops(dataBack);
    setIsLoading(false);
  }

  return (
    <div className="bgBar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-20">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-yellow-400 rounded-lg shadow-md p-2 m-6 w-8/12"
          >
            <img
              src={shop.imagUrl}
              alt={shop.shopName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{shop.shopName}</h2>
              <p className="text-gray-600 italic">{shop.description}$</p>
              <p>{shop.startYear}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
