import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import {AddToOrder} from '../../app/features/wineSlice';
import {useSelector, useDispatch} from 'react-redux';


export default function Order() {
  const [name, setName] = useState('');
  const [orders, setOrder] = useState('');
  const [table, settable] = useState('');
  const [promocode, setprmocode] = useState('');
  const [customerList, setCustomerList] = useState([]);
  const cartTab =  useSelector((state) => state.addOrder.wines);
  const dispatch = useDispatch()

  function addInfo(e) {
    e.preventDefault();
    const clientdata = {
      name:name,
      orders:orders,
      table:table,
      promocode:promocode,
    };
    console.log(clientdata)
    if (!clientdata) {
      setAdding('Please fill in all fields');
      
    } else {
       dispatch(AddToOrder(clientdata));
      setCustomerList(prevList => [...prevList, clientdata]);
      console.log(cartTab)
      
    }
  
    setName('');
    setOrder('');
    setprmocode('');
    settable('');
  }
  
     

  



   



  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 ordertextcolor">Add Order</h1>
      <div className="movie-inputs contactinfo">
        <form className="space-y-4 inputs">
          <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} className="mb-2 w-full p-2 border rounded"/>
          <input
            type="text"
            placeholder="Orders"
            value={orders}
            onChange={e => setOrder(e.target.value)}
            className="mb-2 w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Table number"
            value={table}
            onChange={e => settable(e.target.value)}
            className="mb-2 w-full p-2 border rounded"
          />
          <input
            type="address"
            placeholder="promo code"
            value={promocode}
            onChange={e => setprmocode(e.target.value)}
            className="mb-2 w-full p-2 border rounded"
          />
          <div className="flex gap-4">
            <button onClick={addInfo} type="submit" className="submitButton  text-white px-4 py-2 rounded bg-blue-500">
              confirm Order
            </button>
             <button onClick={addInfo} type="submit" className="submitButton  text-white px-4 py-2 rounded bg-green-500">
              submit Order
            </button>
          </div>
        </form>
        <div className="mt-6">
          {customerList && customerList.length ? (
            customerList.map((info, index) => (
              <div key={index} className="customerDisplay border p-4 rounded mb-4 bg-gray-50">
                <h1>Your Order</h1>
                <h1 className="name text-lg font-semibold">{info.name}</h1>
                <h1 className="email text-gray-700">{info.orders}</h1>
                <h1 className="phone text-gray-700">{info.table}</h1>
                <h1 className="address text-gray-700">{info.promocode}</h1>
              </div>
            ))
          ) : (
            <h1 className="text-gray-500">Fill the form</h1>
          )}
        </div>
      </div>
    </div>
  );
}
