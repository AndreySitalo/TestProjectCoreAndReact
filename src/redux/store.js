import { configureStore } from '@reduxjs/toolkit';
import OrdersReducer from './ordersReducer';
import CitiesReducer from './citiesReducer';

export default configureStore({
  reducer: {
    ordersReduser: OrdersReducer,
    citiesReduser: CitiesReducer,

  },
});
