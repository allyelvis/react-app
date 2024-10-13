import React from 'react';
import HotelPMS from './components/HotelPMS/HotelPMS';
import RestaurantPOS from './components/RestaurantPOS/RestaurantPOS';
import Fiscalization from './components/Fiscalization/Fiscalization';
import RealTimeTransactions from './components/RealTimeTransactions/RealTimeTransactions';

const App = () => {
  return (
    <div>
      <h1>Hotel PMS and Restaurant POS System</h1>
      <HotelPMS />
      <RestaurantPOS />
      <Fiscalization />
      <RealTimeTransactions />
    </div>
  );
};

export default App;
