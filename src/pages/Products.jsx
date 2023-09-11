import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

export default function Products() {
  const [isLoading, setIsLoading] = useState(false);
  const [shopEl, setShops] = useState([]);

  useEffect(() => {
    getCollection();
  }, []);

  async function getCollection() {
    setIsLoading(true);
    const getData = await getDocs(collection(db, 'my-items'));

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
    <div className='bgBar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-20'>
      {isLoading ? (
        <p className='text-center text-gray-500'>Loading...</p>
      ) : (
        shopEl.map((productEL) => (
          <div
            key={productEL.id}
            className='bg-yellow-200 rounded-lg shadow-md p-4 m-6 w-1/2'
          >
            <img
              src={productEL.img}
              alt={productEL.description}
              className='w-full h-48 object-cover rounded-t-lg'
            />
            <div className='p-4 bg-yellow-100'>
              <h2 className='text-xl font-semibold text-indigo-600'>
                {productEL.title}
              </h2>
              <p className='text-gray-600'>{productEL.description}</p>
              <p className='text-lg font-bold text-green-600'>
                ${productEL.price}
              </p>
              <p>{productEL.brand}</p>
              <button className='mt-4 bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700'>
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
