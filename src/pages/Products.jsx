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
        shopEl.map((createdEl) => (
          <div
            key={createdEl.id}
            className='bg-yellow-400 rounded-lg shadow-md p-2 m-6 w-1/2'
          >
            <img
              src={createdEl.img}
              alt={createdEl.partName}
              className='w-full h-48 object-cover rounded-t-lg'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>{createdEl.brand}</h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
}