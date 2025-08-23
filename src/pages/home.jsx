import React from 'react'
import '../index.css'
import { useEffect, useState } from 'react'
import Order from '../component/orderData';
const Home = () => {
  const [product, setProduct] = useState([]);
   
  return (
    // This is the home page component
    <div class='min-h-screen bg-base-100 text-center imageurl'>
      <div class="display grid max-w-full items-center bg-cover justify-center min-h-96 bg-base-200">
        <div class="hero-content text-center -m-1.5">
          <div class="max-w-md">
            <h1 class="text-5xl font-extrabold text-primary wines animated-3d visual" >
              Wines
            </h1>
            <p
              class="py-6 text-base-content text-2xl visual2"
      
            >
              Welcome to wines <br/> what would you like to have today
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes text3d {
            0% {
              transform: perspective(400px) rotateY(10deg) scale(1);
              text-shadow: 2px 2px 8px #7B1E3A, 0 1px 0 #fff;
            }
            100% {
              transform: perspective(400px) rotateY(-10deg) scale(1.05);
              text-shadow: 4px 4px 16px #7B1E3A, 0 2px 0 #fff;
            }
          }
        `}
      </style>
      <div>
     
      </div>
      <Order/>
 
    </div>
  )
}

export default Home
