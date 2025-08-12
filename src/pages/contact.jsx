import { AddContacts} from '../../app/features/wineSlice';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useState, useRef } from "react";



export default function Contact() {
    const mycart = useSelector((state)=>state.addOrder.infos);
    const [Order , addTomyOrder] = useState([]);
    const [names , addName] = useState('');
    const [email, addEmail] = useState('');
    const [message , addmessage] = useState('');
    const dispatch = useDispatch();
    const ref = useRef();

      function addtheclientinfo(e) {
        e.preventDefault();
        const clientinfo = {
          name:names,
          email:email,
          message:message
        };
        console.log(clientinfo)
        if (!clientinfo) {
          setAdding('Please fill in all fields');
          
        } else {
           dispatch(AddContacts(clientinfo));
          addTomyOrder(prevList => [...prevList, clientinfo]);
          console.log(mycart)
          alert("message received")
          
        }
      
        setName('');
        addEmail('');
        addAddress('');
      }
      function clientname(events) {
        addName(event.target.value)
        
      }
          function clientemail(params) {
        addEmail(params.target.value)
        
      }
          function clientmessage(param) {
        addmessage(param.target.value)
        
      }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 contactbg">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md formbg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="mb-4 text-black-600 textdec">
         Whether you’ve had a great experience or run into an issue, we want to know!  
         Please don’t forget to share your thoughts — your feedback helps us grow.
        </p>
        <form>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={names}
            className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 buttonShadow" 
            onChange={clientname}
          
          />
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
             onChange={clientemail}
            
          />
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            rows="4"
            className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
             onChange={clientmessage}
             
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-shadow  messagebutton "
            onClick={addtheclientinfo}
            >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}