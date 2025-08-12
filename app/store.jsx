import {configureStore} from '@reduxjs/toolkit';
import  addOrder from '../app/features/wineSlice';


const store = configureStore({
  reducer: {
    addOrder: addOrder
    }
  });

export default store