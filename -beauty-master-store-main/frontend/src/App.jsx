import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import BookingForm from './components/BookingForm';
import ServiceList from './components/ServiceList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <BookingForm />
      <ServiceList title="Популярні процедури" endpoint="/services/popular" showDetails={true}/>
      <ServiceList title="Рекомендовані для вас" endpoint="/services/recommended" showDetails={false}/>
    </div>
  );
}

export default App;
