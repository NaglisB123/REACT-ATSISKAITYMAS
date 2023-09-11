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
    <div>
      <h1>HI</h1>
      {!isLoading
        ? shops.map((shop) => (
            <div key={shop.id}>
              <div>{shop.shopName}</div>
              <img src={shop.imagUrl} alt={shop.shopName} />
            </div>
          ))
        : "is loading"}
    </div>
  );
}
